import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import worker from "../_worker.js";

class MockKV {
  constructor() {
    this.values = new Map();
    this.putCount = 0;
  }

  async get(key, options = undefined) {
    if (!this.values.has(key)) return null;
    const value = this.values.get(key);
    if (options?.type === "json") return JSON.parse(value);
    return value;
  }

  async put(key, value) {
    this.putCount += 1;
    this.values.set(key, String(value));
  }

  async delete(key) {
    this.values.delete(key);
  }

  async list({ prefix = "", limit = 1000, cursor = "" } = {}) {
    const keys = [...this.values.keys()]
      .filter((key) => key.startsWith(String(prefix)))
      .sort();
    const offset = Math.max(0, Number(cursor) || 0);
    const page = keys.slice(offset, offset + Math.max(1, Number(limit) || 1000));
    const nextOffset = offset + page.length;
    return {
      keys: page.map((name) => ({ name })),
      list_complete: nextOffset >= keys.length,
      cursor: nextOffset < keys.length ? String(nextOffset) : "",
    };
  }
}

function createEnv() {
  const assetRequests = [];
  return {
    LEADERBOARD: new MockKV(),
    ADMIN_PASSWORD: "2026",
    ASSETS: {
      fetch: (request) => {
        assetRequests.push(new URL(request.url).pathname);
        return new Response("<!doctype html><title>admin test</title>", { status: 200, headers: { "content-type": "text/html" } });
      },
    },
    assetRequests,
  };
}

async function api(env, path, { body, token, admin = false } = {}) {
  const headers = new Headers({ Accept: "application/json" });
  if (body !== undefined) headers.set("content-type", "application/json");
  if (token) headers.set("authorization", `Bearer ${token}`);
  if (admin) headers.set("x-admin-password", "2026");
  const response = await worker.fetch(new Request(`https://game.test${path}`, {
    method: body === undefined ? "GET" : "POST",
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  }), env);
  const data = await response.json();
  assert.ok(response.ok, `${path} failed (${response.status}): ${JSON.stringify(data)}`);
  return data;
}

async function apiError(env, path, { body, token, admin = false } = {}) {
  const headers = new Headers({ Accept: "application/json" });
  if (body !== undefined) headers.set("content-type", "application/json");
  if (token) headers.set("authorization", `Bearer ${token}`);
  if (admin) headers.set("x-admin-password", "2026");
  const response = await worker.fetch(new Request(`https://game.test${path}`, {
    method: body === undefined ? "GET" : "POST",
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  }), env);
  const data = await response.json();
  assert.ok(!response.ok, `${path} unexpectedly succeeded: ${JSON.stringify(data)}`);
  return { response, data };
}

async function register(env, {
  name,
  playerId,
  walletCoins = 0,
  unlockedCharacters = ["cloud"],
  gameData = {},
  showOnlineStatus = false,
}) {
  return api(env, "/api/account", {
    body: {
      action: "register",
      name,
      password: "pass2026",
      confirmPassword: "pass2026",
      playerId,
      showCoins: true,
      showOnlineStatus,
      gameData: { ...gameData, walletCoins, unlockedCharacters },
    },
  });
}

async function readAccountByPlayerId(env, playerId) {
  const accountId = await env.LEADERBOARD.get(`cloud-jumper:player-account:${playerId}`);
  assert.ok(accountId, `missing account for ${playerId}`);
  const key = `cloud-jumper:account:${accountId}`;
  const account = await env.LEADERBOARD.get(key, { type: "json" });
  assert.ok(account, `missing account record ${key}`);
  return { key, account };
}

async function testRepeatedSaveDoesNotMintBattleRewardAgain() {
  const env = createEnv();
  const registered = await register(env, {
    name: "刷新测试",
    playerId: "player-refresh-regression-0001",
  });
  const token = registered.token;
  const battle = await api(env, "/api/account", {
    token,
    body: {
      action: "recordBattleResult",
      matchId: "match-refresh-regression-0001",
      score: 500,
      coinUnits: 400,
      bestCombo: 3,
      won: true,
    },
  });
  assert.equal(battle.battleReward, 100);
  let walletCoins = battle.account.gameData.walletCoins;
  assert.equal(walletCoins, 100);

  for (let index = 0; index < 8; index += 1) {
    const saved = await api(env, "/api/account", {
      token,
      body: {
        action: "save",
        showCoins: true,
        // This matches the browser snapshot: it has the balance, but battle credit IDs are server-only.
        gameData: { walletCoins },
      },
    });
    walletCoins = saved.account.gameData.walletCoins;
  }

  assert.equal(walletCoins, 100, "replaying the same browser snapshot must not add the battle reward again");
}

async function testStaleWalletSnapshotCannotOverwriteCloudBalance() {
  const env = createEnv();
  const registered = await register(env, {
    name: "版本保护测试",
    playerId: "player-wallet-revision-test-0001",
    walletCoins: 100,
  });
  const token = registered.token;

  const firstChange = await api(env, "/api/account", {
    token,
    body: {
      action: "save",
      showCoins: true,
      gameData: { ...registered.account.gameData, walletCoins: 150 },
    },
  });
  assert.equal(firstChange.walletStale, false);
  assert.equal(firstChange.account.gameData.walletCoins, 150);
  assert.equal(firstChange.account.gameData.walletRevision, 1);

  const staleReplay = await api(env, "/api/account", {
    token,
    body: {
      action: "save",
      showCoins: true,
      gameData: { ...registered.account.gameData, walletCoins: 999999, walletRevision: 0 },
    },
  });
  assert.equal(staleReplay.walletStale, true);
  assert.equal(staleReplay.account.gameData.walletCoins, 150, "an old tab must not restore its obsolete balance");
  assert.equal(staleReplay.account.gameData.walletRevision, 1);

  const currentChange = await api(env, "/api/account", {
    token,
    body: {
      action: "save",
      showCoins: true,
      gameData: { ...staleReplay.account.gameData, walletCoins: 151 },
    },
  });
  assert.equal(currentChange.walletStale, false);
  assert.equal(currentChange.account.gameData.walletCoins, 151);
  assert.equal(currentChange.account.gameData.walletRevision, 2);
}

async function testLoginAndRestoreDoNotRewriteAccountOrRanking() {
  const env = createEnv();
  await register(env, {
    name: "刷新节流测试",
    playerId: "player-refresh-write-test-0001",
    walletCoins: 25,
  });
  env.LEADERBOARD.putCount = 0;

  const loggedIn = await api(env, "/api/account", {
    body: { action: "login", name: "刷新节流测试", password: "pass2026" },
  });
  assert.equal(env.LEADERBOARD.putCount, 1, "login should only create a session token");

  env.LEADERBOARD.putCount = 0;
  await api(env, "/api/account", {
    token: loggedIn.token,
    body: { action: "restore" },
  });
  assert.equal(env.LEADERBOARD.putCount, 0, "refresh restore must be read-only");
}

async function testLegacyAdminBalanceActionAlsoAdvancesRevision() {
  const env = createEnv();
  const playerId = "player-legacy-admin-test-0001";
  const registered = await register(env, {
    name: "后台兼容测试",
    playerId,
    walletCoins: 55,
  });
  await api(env, "/api/admin", {
    admin: true,
    body: { action: "setCoins", playerId, amount: 99 },
  });
  const restored = await api(env, "/api/account", {
    token: registered.token,
    body: { action: "restore" },
  });
  assert.equal(restored.account.gameData.walletCoins, 99);
  assert.equal(restored.account.gameData.walletRevision, 1);

  const staleReplay = await api(env, "/api/account", {
    token: registered.token,
    body: {
      action: "save",
      showCoins: true,
      gameData: { ...registered.account.gameData, walletCoins: 55555, walletRevision: 0 },
    },
  });
  assert.equal(staleReplay.walletStale, true);
  assert.equal(staleReplay.account.gameData.walletCoins, 99);
}

async function testAdminCanSetExactBalanceWithoutResettingProgress() {
  const env = createEnv();
  const playerId = "player-admin-balance-test-0001";
  const registered = await register(env, {
    name: "余额测试",
    playerId,
    walletCoins: 88888,
    unlockedCharacters: ["cloud", "guoguo", "qiang"],
    gameData: {
      coinLedger: Array.from({ length: 1000 }, (_, index) => ({
        id: `history-${index}`,
        amount: 1,
        balanceAfter: index + 1,
        createdAt: 1700000000000 + index,
        type: "level_coin",
        label: "历史金币",
        detail: "大型账号性能测试",
      })),
      adminGiftCredits: Array.from({ length: 300 }, (_, index) => ({ id: `gift-history-${index}`, amount: 1 })),
      battleRewardCredits: Array.from({ length: 100 }, (_, index) => ({ id: `match-history-test-${String(index).padStart(4, "0")}`, amount: 1 })),
    },
  });
  const accountRepair = await api(env, "/api/admin-coin-repair", {
    admin: true,
    body: { phase: "account", playerId, amount: 10000 },
  });
  assert.equal(accountRepair.walletRevision, 1);
  await api(env, "/api/admin-coin-repair", {
    admin: true,
    body: { phase: "ranking", playerId, amount: 10000 },
  });
  const restored = await api(env, "/api/account", {
    token: registered.token,
    body: { action: "restore" },
  });
  assert.equal(restored.account.gameData.walletCoins, 10000);
  assert.equal(restored.account.gameData.walletRevision, 1);
  assert.deepEqual(restored.account.gameData.unlockedCharacters, ["cloud", "guoguo", "qiang"]);
  assert.equal(restored.account.gameData.coinLedger.length, 1000);
  assert.equal(restored.account.gameData.coinLedger.at(-1).id, "history-999", "large coin history must remain untouched");
  const leaderboard = await api(env, "/api/leaderboard");
  assert.equal(leaderboard.entries.find((entry) => entry.inviteId === playerId).coins, 10000);

  const staleAfterRepair = await api(env, "/api/account", {
    token: registered.token,
    body: {
      action: "save",
      showCoins: true,
      gameData: { ...restored.account.gameData, walletCoins: 88888, walletRevision: 0 },
    },
  });
  assert.equal(staleAfterRepair.walletStale, true);
  assert.equal(staleAfterRepair.account.gameData.walletCoins, 10000, "a repaired balance must stay locked against old devices");
}

async function testHeartUpgradeResetAndNewFiveHeartPurchasePersist() {
  const env = createEnv();
  const registered = await register(env, {
    name: "生命重置测试",
    playerId: "player-heart-reset-test-0001",
    walletCoins: 5000,
    gameData: { heartUpgradeLevel: 2, accountUpgraded: true },
  });
  assert.equal(registered.account.gameData.heartUpgradeLevel, 0, "legacy heart upgrades must return to three hearts");
  assert.equal(registered.account.gameData.accountUpgraded, false);
  assert.equal(registered.account.gameData.heartResetVersion, 2);

  const purchased = await api(env, "/api/account", {
    token: registered.token,
    body: {
      action: "save",
      showCoins: true,
      gameData: {
        ...registered.account.gameData,
        walletCoins: 3001,
        heartUpgradeLevel: 1,
        accountUpgraded: true,
        heartResetVersion: 2,
      },
    },
  });
  assert.equal(purchased.account.gameData.walletCoins, 3001);
  assert.equal(purchased.account.gameData.heartUpgradeLevel, 1, "the newly listed 1999-coin five-heart upgrade must persist");
  assert.equal(purchased.account.gameData.accountUpgraded, true);
}

async function testDailyCheckinIsServerAuthoritativeAndAwardsCharacter() {
  const env = createEnv();
  const playerId = "player-daily-checkin-test-0001";
  const registered = await register(env, { name: "签到测试", playerId });
  const first = await api(env, "/api/account", {
    token: registered.token,
    body: { action: "dailyCheckin" },
  });
  assert.equal(first.alreadyClaimed, false);
  assert.equal(first.dailyReward.type, "coins");
  assert.equal(first.dailyReward.coins, 30);
  assert.equal(first.account.gameData.walletCoins, 30);
  assert.equal(first.account.gameData.walletRevision, 1);
  assert.equal(first.account.gameData.dailyCheckinTotal, 1);
  assert.match(first.account.gameData.dailyCheckinLastDate, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(first.account.gameData.coinLedger.some((item) => item.type === "daily_checkin" && item.amount === 30));

  env.LEADERBOARD.putCount = 0;
  const repeated = await api(env, "/api/account", {
    token: registered.token,
    body: { action: "dailyCheckin" },
  });
  assert.equal(repeated.alreadyClaimed, true);
  assert.equal(repeated.account.gameData.walletCoins, 30);
  assert.equal(repeated.account.gameData.dailyCheckinTotal, 1);
  assert.equal(env.LEADERBOARD.putCount, 0, "repeated check-in on the same day must not write or mint rewards");

  const stored = await readAccountByPlayerId(env, playerId);
  stored.account.gameData.dailyCheckinTotal = 6;
  stored.account.gameData.dailyCheckinLastDate = "";
  await env.LEADERBOARD.put(stored.key, JSON.stringify(stored.account));
  const seventh = await api(env, "/api/account", {
    token: registered.token,
    body: { action: "dailyCheckin" },
  });
  assert.equal(seventh.dailyReward.type, "character");
  assert.equal(seventh.dailyReward.character, "messi");
  assert.equal(seventh.dailyReward.coins, 0);
  assert.equal(seventh.account.gameData.walletCoins, 30);
  assert.ok(seventh.account.gameData.unlockedCharacters.includes("messi"));
}

async function testCrabBossPersistsAndAppearsOnLeaderboard() {
  const env = createEnv();
  const registered = await register(env, {
    name: "螃蟹角色测试",
    playerId: "player-crab-character-test-0001",
    unlockedCharacters: ["cloud", "krabs"],
    gameData: { selectedCharacter: "krabs", crabRunsPlayed: 8, heartResetVersion: 2 },
  });
  assert.equal(registered.account.gameData.selectedCharacter, "krabs");
  assert.equal(registered.account.gameData.crabRunsPlayed, 8);
  const leaderboard = await api(env, "/api/leaderboard");
  const entry = leaderboard.entries.find((item) => item.inviteId === "player-crab-character-test-0001");
  assert.ok(entry);
  assert.equal(entry.selectedCharacter, "krabs", "leaderboard must expose the actively equipped character");
}

async function testAdminManagedCharactersAndDoraemonCatalog() {
  const env = createEnv();
  const defaults = await api(env, "/api/characters");
  assert.ok(defaults.characters.length >= 14);
  const doraemon = defaults.characters.find((character) => character.id === "doraemon");
  assert.ok(doraemon, "Doraemon must remain a complete playable character");
  assert.equal(doraemon.rewardOnly, true);
  assert.equal(doraemon.cost, 14999);
  assert.equal(doraemon.doorCharges, 1);
  assert.equal(doraemon.sunCaveDaily, true);

  const customId = "custom-regression-runner-2026";
  const created = await api(env, "/api/admin-characters", {
    admin: true,
    body: {
      action: "upsertCharacter",
      character: {
        id: customId,
        name: "测试限时人物",
        badge: "测",
        color: "#8844cc",
        cost: 2600,
        salePrice: 699,
        saleStartAt: Date.now() - 1000,
        saleEndAt: Date.now() + 86400000,
        active: true,
        agility: 1.28,
        jumpPower: 790,
        airJumps: 2,
        flipTurns: 1,
        flipDuration: 0.55,
        magnetRadius: 45,
        freeSmash: 2,
        speedBoost: 1.2,
        staminaStars: 5,
        staminaCapacity: 160,
        staminaRecovery: 20,
        stoneImmune: true,
        sunCaveDaily: true,
        flairMoves: ["explosiveStepover"],
        trait: "后台人物管理回归测试",
      },
    },
  });
  const custom = created.characters.find((character) => character.id === customId);
  assert.ok(custom);
  assert.equal(custom.builtIn, false);
  assert.equal(custom.salePrice, 699);
  assert.equal(custom.stoneImmune, true);

  const publicCatalog = await api(env, "/api/characters");
  assert.ok(publicCatalog.characters.some((character) => character.id === customId), "new characters must reach the public store catalog");

  const registered = await register(env, {
    name: "自建人物账号",
    playerId: "player-custom-character-test-0001",
    unlockedCharacters: ["cloud", customId],
    gameData: { selectedCharacter: customId },
  });
  assert.ok(registered.account.gameData.unlockedCharacters.includes(customId));
  assert.equal(registered.account.gameData.selectedCharacter, customId);

  const changedMessi = await api(env, "/api/admin-characters", {
    admin: true,
    body: {
      action: "upsertCharacter",
      character: {
        ...defaults.characters.find((character) => character.id === "messi"),
        cost: 2222,
        regularCost: 2222,
        active: false,
      },
    },
  });
  assert.equal(changedMessi.characters.find((character) => character.id === "messi").cost, 2222);
  assert.equal(changedMessi.characters.find((character) => character.id === "messi").active, false);

  const resetMessi = await api(env, "/api/admin-characters", {
    admin: true,
    body: { action: "resetCharacter", id: "messi" },
  });
  assert.equal(resetMessi.characters.find((character) => character.id === "messi").cost, 499);
  assert.equal(resetMessi.characters.find((character) => character.id === "messi").active, true);

  const deleted = await api(env, "/api/admin-characters", {
    admin: true,
    body: { action: "deleteCharacter", id: customId },
  });
  assert.ok(!deleted.characters.some((character) => character.id === customId));
}

async function testSystemRivalsAreClearlyMarkedAndExcludedFromAdminPlayers() {
  const env = createEnv();
  const leaderboard = await api(env, "/api/leaderboard");
  const rivals = leaderboard.entries.filter((entry) => entry.systemRival === true);
  assert.equal(rivals.length, 5);
  assert.ok(rivals.some((entry) => entry.name === "雾中第七码头"));
  const admin = await api(env, "/api/admin", { admin: true });
  assert.ok(admin.entries.every((entry) => entry.systemRival !== true), "system challengers must not become real player accounts or prize winners");
}

async function testLeaderboardRestoresEveryRegisteredAccountAfterSeasonReset() {
  const env = createEnv();
  const registeredPlayers = [
    ["全员恢复甲", "player-backfill-test-account-0001"],
    ["全员恢复乙", "player-backfill-test-account-0002"],
    ["全员恢复丙", "player-backfill-test-account-0003"],
  ];
  for (const [name, playerId] of registeredPlayers) {
    await register(env, { name, playerId });
  }

  const seasonKey = "cloud-jumper:season:v4-accounts-20260713";
  const season = await env.LEADERBOARD.get(seasonKey, { type: "json" });
  season.version = 3;
  delete season.accountsBackfilledAt;
  season.entries = [];
  season.endAt = Date.now() - 1000;
  season.startAt = season.endAt - 14 * 24 * 60 * 60 * 1000;
  await env.LEADERBOARD.put(seasonKey, JSON.stringify(season));

  const leaderboard = await api(env, "/api/leaderboard");
  const realNames = leaderboard.entries
    .filter((entry) => entry.systemRival !== true)
    .map((entry) => entry.name);
  for (const [name] of registeredPlayers) {
    assert.ok(realNames.includes(name), `${name} should remain visible after the season changes`);
  }

  const repairedSeason = await env.LEADERBOARD.get(seasonKey, { type: "json" });
  assert.ok(Number(repairedSeason.accountsBackfilledAt) > 0, "account repair should record its latest successful scan");
  assert.equal(repairedSeason.accountScanVersion, 2);
  assert.equal(repairedSeason.registeredAccountCount, registeredPlayers.length);
  assert.equal(repairedSeason.entries.length, registeredPlayers.length);
  assert.ok(repairedSeason.entries.every((entry) => entry.level === 1 && entry.score === 0));
}

async function testLeaderboardRepairRepeatsAndNeverHidesRegisteredAccounts() {
  const env = createEnv();
  const players = [];
  for (let index = 1; index <= 4; index += 1) {
    players.push(await register(env, {
      name: `补回玩家${index}`,
      playerId: `player-periodic-repair-test-${String(index).padStart(4, "0")}`,
    }));
  }
  const seasonKey = "cloud-jumper:season:v4-accounts-20260713";
  let season = await env.LEADERBOARD.get(seasonKey, { type: "json" });
  season.entries = season.entries.slice(0, 1);
  season.registeredAccountCount = 1;
  season.accountScanVersion = 2;
  season.accountsBackfilledAt = Date.now() - 6 * 60 * 1000;
  await env.LEADERBOARD.put(seasonKey, JSON.stringify(season));

  const periodicallyRepaired = await api(env, "/api/leaderboard");
  const realEntries = periodicallyRepaired.entries.filter((entry) => entry.systemRival !== true);
  assert.equal(realEntries.length, players.length, "a stale scan must automatically restore every account");
  assert.equal(periodicallyRepaired.registeredPlayerCount, players.length);

  season = await env.LEADERBOARD.get(seasonKey, { type: "json" });
  season.entries = season.entries.slice(0, 1);
  season.registeredAccountCount = 1;
  season.accountScanVersion = 2;
  season.accountsBackfilledAt = Date.now();
  await env.LEADERBOARD.put(seasonKey, JSON.stringify(season));
  const forced = await api(env, "/api/admin", {
    admin: true,
    body: { action: "repairLeaderboard" },
  });
  assert.equal(forced.entries.length, players.length, "the admin repair action must bypass the scan cooldown");
  assert.match(forced.message, /扫描 4 个注册账号/);

  const cleared = await api(env, "/api/admin", {
    admin: true,
    body: { action: "clearLeaderboard", confirm: "CLEAR" },
  });
  assert.equal(cleared.entries.length, players.length, "clearing scores must not remove registered users");
  assert.ok(cleared.entries.every((entry) => entry.level === 1 && entry.score === 0 && entry.time === 0));
}

async function testDoraemonRequiresChampionEligibilityAndServerPurchase() {
  const env = createEnv();
  const playerId = "player-doraemon-champion-test-0001";
  const registered = await register(env, {
    name: "冠军购买测试",
    playerId,
    walletCoins: 16000,
    unlockedCharacters: ["cloud", "doraemon"],
    gameData: { selectedCharacter: "doraemon" },
  });
  assert.ok(!registered.account.gameData.unlockedCharacters.includes("doraemon"), "registration must not import the champion character");

  const forgedSave = await api(env, "/api/account", {
    token: registered.token,
    body: {
      action: "save",
      showCoins: true,
      gameData: {
        ...registered.account.gameData,
        unlockedCharacters: ["cloud", "doraemon"],
        selectedCharacter: "doraemon",
      },
    },
  });
  assert.ok(!forgedSave.account.gameData.unlockedCharacters.includes("doraemon"), "ordinary cloud saves must not forge a champion purchase");

  const seasonKey = "cloud-jumper:season:v4-accounts-20260713";
  const season = await env.LEADERBOARD.get(seasonKey, { type: "json" });
  season.winners.push({
    seasonNumber: season.seasonNumber,
    name: registered.account.name,
    playerId,
    level: 20,
    score: 100,
    awardedAt: Date.now(),
  });
  await env.LEADERBOARD.put(seasonKey, JSON.stringify(season));

  const eligibility = await api(env, `/api/leaderboard?playerId=${encodeURIComponent(playerId)}`);
  assert.equal(eligibility.rewardEligible, true);
  const purchased = await api(env, "/api/account", {
    token: registered.token,
    body: { action: "purchaseSeasonReward" },
  });
  assert.equal(purchased.account.gameData.walletCoins, 1001);
  assert.ok(purchased.account.gameData.unlockedCharacters.includes("doraemon"));
  assert.equal(purchased.account.gameData.selectedCharacter, "doraemon");
  assert.ok(purchased.account.gameData.coinLedger.some((item) => item.label === "冠军专属人物：哆啦A梦" && item.amount === -14999));

  const repeated = await api(env, "/api/account", {
    token: registered.token,
    body: { action: "purchaseSeasonReward" },
  });
  assert.equal(repeated.alreadyOwned, true);
  assert.equal(repeated.account.gameData.walletCoins, 1001, "repeating the purchase request must never charge twice");

  const outsider = await register(env, {
    name: "非冠军购买测试",
    playerId: "player-doraemon-outsider-test-0001",
    walletCoins: 20000,
  });
  const deniedResponse = await worker.fetch(new Request("https://game.test/api/account", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${outsider.token}`,
    },
    body: JSON.stringify({ action: "purchaseSeasonReward" }),
  }), env);
  assert.equal(deniedResponse.status, 403);
  assert.equal((await deniedResponse.json()).error, "season_reward_not_eligible");
}

async function testAdminManagedRedeemCodesAreServerAuthoritative() {
  const env = createEnv();
  const defaults = await api(env, "/api/admin-redeem-codes", { admin: true });
  assert.ok(defaults.codes.some((item) => item.code === "leosince" && item.coins === 200));

  const now = Date.now();
  const created = await api(env, "/api/admin-redeem-codes", {
    admin: true,
    body: {
      action: "upsertRedeemCode",
      code: {
        code: "weekend-2026",
        label: "周末组合礼物",
        coins: 321,
        characterId: "guoguo",
        startsAt: now - 60000,
        expiresAt: now + 3600000,
        active: true,
      },
    },
  });
  assert.ok(created.codes.some((item) => item.code === "weekend-2026"));

  const registered = await register(env, {
    name: "兑换码测试",
    playerId: "player-redeem-code-test-0001",
    walletCoins: 10,
  });
  const redeemed = await api(env, "/api/account", {
    token: registered.token,
    body: { action: "redeemCode", code: "WEEKEND-2026" },
  });
  assert.equal(redeemed.account.gameData.walletCoins, 331);
  assert.ok(redeemed.account.gameData.unlockedCharacters.includes("guoguo"));
  assert.ok(redeemed.account.gameData.redeemedCodes.includes("weekend-2026"));
  assert.equal(redeemed.redeemReward.characterName, "果果");
  const afterRedeem = await api(env, "/api/admin-redeem-codes", { admin: true });
  assert.equal(afterRedeem.codes.find((item) => item.code === "weekend-2026").uses, 1);

  const repeated = await apiError(env, "/api/account", {
    token: registered.token,
    body: { action: "redeemCode", code: "weekend-2026" },
  });
  assert.equal(repeated.data.error, "redeem_code_already_used");
  const afterRepeat = await api(env, "/api/admin-redeem-codes", { admin: true });
  assert.equal(afterRepeat.codes.find((item) => item.code === "weekend-2026").uses, 1, "a repeated claim must not increment usage");

  await api(env, "/api/admin-redeem-codes", {
    admin: true,
    body: {
      action: "upsertRedeemCode",
      code: {
        code: "future-code",
        label: "未来奖励",
        coins: 50,
        startsAt: now + 3600000,
        expiresAt: now + 7200000,
        active: true,
      },
    },
  });
  const future = await apiError(env, "/api/account", {
    token: registered.token,
    body: { action: "redeemCode", code: "future-code" },
  });
  assert.equal(future.data.error, "redeem_code_not_started");

  await api(env, "/api/admin-redeem-codes", {
    admin: true,
    body: {
      action: "upsertRedeemCode",
      code: {
        code: "expired-code",
        label: "过期奖励",
        coins: 50,
        startsAt: now - 7200000,
        expiresAt: now - 3600000,
        active: true,
      },
    },
  });
  const expired = await apiError(env, "/api/account", {
    token: registered.token,
    body: { action: "redeemCode", code: "expired-code" },
  });
  assert.equal(expired.data.error, "redeem_code_expired");

  const weekendRecord = afterRepeat.codes.find((item) => item.code === "weekend-2026");
  await api(env, "/api/admin-redeem-codes", {
    admin: true,
    body: {
      action: "upsertRedeemCode",
      code: { ...weekendRecord, active: false },
    },
  });
  const secondAccount = await register(env, {
    name: "兑换码停用测试",
    playerId: "player-redeem-code-test-0002",
  });
  const inactive = await apiError(env, "/api/account", {
    token: secondAccount.token,
    body: { action: "redeemCode", code: "weekend-2026" },
  });
  assert.equal(inactive.data.error, "redeem_code_inactive");

  const deleted = await api(env, "/api/admin-redeem-codes", {
    admin: true,
    body: { action: "deleteRedeemCode", codeValue: "weekend-2026" },
  });
  assert.ok(!deleted.codes.some((item) => item.code === "weekend-2026"));
  const missing = await apiError(env, "/api/account", {
    token: secondAccount.token,
    body: { action: "redeemCode", code: "weekend-2026" },
  });
  assert.equal(missing.data.error, "redeem_code_invalid");
}

async function testTimedSiteLockBlocksPlayersButNeverAdmin() {
  const env = createEnv();
  const before = await api(env, "/api/site-status");
  assert.equal(before.lock.active, false);

  const now = Date.now();
  const locked = await api(env, "/api/admin-site-control", {
    admin: true,
    body: {
      action: "setSiteLock",
      startsAt: now,
      endsAt: now + 60 * 60 * 1000,
      message: "回归测试维护中",
    },
  });
  assert.equal(locked.lock.active, true);
  assert.equal(locked.lock.message, "回归测试维护中");

  const publicStatus = await api(env, "/api/site-status");
  assert.equal(publicStatus.lock.active, true);
  assert.ok(publicStatus.lock.remainingMs > 0);

  const blocked = await apiError(env, "/api/leaderboard");
  assert.equal(blocked.response.status, 423);
  assert.equal(blocked.data.error, "site_locked");
  assert.equal(blocked.data.lock.active, true);

  const adminStillOpen = await api(env, "/api/admin", { admin: true });
  assert.ok(Array.isArray(adminStillOpen.entries), "admin must remain usable while the player site is locked");

  const unlocked = await api(env, "/api/admin-site-control", {
    admin: true,
    body: { action: "unlockSite" },
  });
  assert.equal(unlocked.lock.active, false);
  await api(env, "/api/leaderboard");
}

async function testYuanyuanLimitedSaleIsServerAuthoritativeAndIdempotent() {
  const originalNow = Date.now;
  const releaseAt = Date.parse("2026-07-27T10:00:00+08:00");
  Date.now = () => releaseAt + 1000;
  try {
    const env = createEnv();
    const accounts = [];
    for (let index = 1; index <= 4; index += 1) {
      accounts.push(await register(env, {
        name: `元元抢购${index}`,
        playerId: `player-yuanyuan-limited-${String(index).padStart(4, "0")}`,
        walletCoins: 2000,
        unlockedCharacters: ["cloud", "yuanyuan"],
        gameData: { selectedCharacter: "yuanyuan" },
      }));
      assert.ok(!accounts.at(-1).account.gameData.unlockedCharacters.includes("yuanyuan"), "registration must not forge a limited character");
    }

    const forged = await api(env, "/api/account", {
      token: accounts[0].token,
      body: {
        action: "save",
        showCoins: true,
        gameData: {
          ...accounts[0].account.gameData,
          unlockedCharacters: ["cloud", "yuanyuan"],
          selectedCharacter: "yuanyuan",
        },
      },
    });
    assert.ok(!forged.account.gameData.unlockedCharacters.includes("yuanyuan"), "ordinary saves must not forge Yuan Yuan");

    for (let index = 0; index < 3; index += 1) {
      const purchased = await api(env, "/api/account", {
        token: accounts[index].token,
        body: { action: "purchaseYuanyuan" },
      });
      assert.equal(purchased.account.gameData.walletCoins, 1001);
      assert.ok(purchased.account.gameData.unlockedCharacters.includes("yuanyuan"));
      assert.equal(purchased.account.gameData.selectedCharacter, "yuanyuan");
      assert.equal(purchased.store.yuanyuan.sold, index + 1);
      if (index === 0) {
        const repeated = await api(env, "/api/account", {
          token: accounts[index].token,
          body: { action: "purchaseYuanyuan" },
        });
        assert.equal(repeated.alreadyOwned, true);
        assert.equal(repeated.account.gameData.walletCoins, 1001, "refreshing or repeating purchase must never charge twice");
      }
    }

    const soldOut = await apiError(env, "/api/account", {
      token: accounts[3].token,
      body: { action: "purchaseYuanyuan" },
    });
    assert.equal(soldOut.data.error, "yuanyuan_sold_out");

    const control = await api(env, "/api/admin-site-control", { admin: true });
    assert.equal(control.yuanyuan.sold, 3);
    assert.equal(control.yuanyuan.remaining, 0);
    assert.equal(control.yuanyuan.buyers.length, 3);

    const catalog = await api(env, "/api/characters");
    const beibei = catalog.characters.find((character) => character.id === "beibei");
    const yuanyuan = catalog.characters.find((character) => character.id === "yuanyuan");
    const krabs = catalog.characters.find((character) => character.id === "krabs");
    const zhixuan = catalog.characters.find((character) => character.id === "zhixuan");
    assert.equal(beibei.active, false, "Beibei must be delisted for new buyers");
    assert.equal(yuanyuan.cost, 999);
    assert.equal(yuanyuan.freeSmash, 5);
    assert.equal(yuanyuan.staminaStars, 5);
    assert.ok(krabs.agility > yuanyuan.agility);
    assert.ok(zhixuan.agility > krabs.agility);
    assert.ok(krabs.staminaCapacity > yuanyuan.staminaCapacity);
    assert.ok(zhixuan.staminaCapacity > krabs.staminaCapacity);

    const recoveryEnv = createEnv();
    const recoveryAccount = await register(recoveryEnv, {
      name: "元元中断恢复",
      playerId: "player-yuanyuan-recovery-0001",
      walletCoins: 2000,
    });
    const storedRecovery = await readAccountByPlayerId(recoveryEnv, "player-yuanyuan-recovery-0001");
    await recoveryEnv.LEADERBOARD.put("cloud-jumper:store:yuanyuan-sales:v1", JSON.stringify({
      version: 1,
      sales: [{
        accountId: storedRecovery.account.id,
        playerId: storedRecovery.account.playerId,
        name: storedRecovery.account.name,
        purchasedAt: releaseAt + 500,
        price: 999,
      }],
    }));
    const repaired = await api(recoveryEnv, "/api/account", {
      token: recoveryAccount.token,
      body: { action: "purchaseYuanyuan" },
    });
    assert.equal(repaired.repairedPurchase, true);
    assert.equal(repaired.account.gameData.walletCoins, 1001, "an interrupted slot claim must still complete one charge");
    const repairedAgain = await api(recoveryEnv, "/api/account", {
      token: recoveryAccount.token,
      body: { action: "purchaseYuanyuan" },
    });
    assert.equal(repairedAgain.account.gameData.walletCoins, 1001, "repair retries must remain idempotent");
  } finally {
    Date.now = originalNow;
  }
}

async function testAdminRouteRedirectsOnlyOnce() {
  const env = createEnv();
  const redirect = await worker.fetch(new Request("https://game.test/admin"), env);
  assert.equal(redirect.status, 302);
  assert.equal(new URL(redirect.headers.get("location")).pathname, "/admin/");

  const page = await worker.fetch(new Request("https://game.test/admin/"), env);
  assert.equal(page.status, 200);
  assert.equal(env.assetRequests.at(-1), "/admin/", "the canonical admin path must load its directory index without another redirect");
}

function testAdminBrowserUsesRootApiPaths() {
  const source = readFileSync(new URL("../admin.js", import.meta.url), "utf8");
  assert.match(source, /endpoint = "\/api\/admin"/);
  assert.match(source, /"\/api\/admin-coin-repair"/);
  assert.doesNotMatch(source, /"\.\/api\/admin/);
}

function testShopNavigationAndHeartUpgradeRemainVisible() {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /data-home-tab="shop"[^>]*>[\s\S]*?商店<\/button>/);
  assert.match(html, /data-store-category="characters"[\s\S]*?>[\s\S]*?人物<\/button>/);
  assert.match(html, /data-store-category="other"[\s\S]*?>[\s\S]*?其他<\/button>/);
  assert.match(html, /id="accountUpgradeTitle">5 滴血生命升级<\/strong>/);
  assert.match(html, /id="accountUpgradeButton"[^>]*>● 1999 · 升级到 5 滴<\/button>/);
  assert.match(html, /id="homeHeartShortcut"/);
  assert.doesNotMatch(html, /class="home-tools"/, "account upgrades must not be hidden in the Challenge tools drawer");

  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  for (const requiredId of ["accountUpgradeButton", "accountUpgradeStatus", "redeemCodeInput", "redeemCodeButton"]) {
    assert.equal(ids.filter((id) => id === requiredId).length, 1, `${requiredId} must remain unique after moving it into the store`);
  }
}

function testAdminCharacterManagementUiIsPackaged() {
  const html = readFileSync(new URL("../admin/index.html", import.meta.url), "utf8");
  const script = readFileSync(new URL("../admin.js", import.meta.url), "utf8");
  assert.match(html, /data-admin-tab="players"[\s\S]*?玩家管理/);
  assert.match(html, /data-admin-tab="characters"[\s\S]*?人物管理/);
  assert.match(html, /id="addCharacterButton"/);
  assert.match(html, /id="characterSalePriceInput"/);
  assert.match(html, /id="characterAvailableUntilInput"/);
  assert.match(html, /id="characterStoneImmuneInput"/);
  assert.match(html, /id="deleteCharacterButton"/);
  assert.match(script, /"\/api\/admin-characters"/);
  assert.match(script, /action: "upsertCharacter"/);
  assert.match(script, /action: "deleteCharacter"/);
  assert.match(script, /action: "resetCharacter"/);
}

function testLeaderboardUsesProfileOnlySystemDisclosureAndSeasonRules() {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const script = readFileSync(new URL("../game.js", import.meta.url), "utf8");
  assert.doesNotMatch(script, /system-rival-badge/);
  assert.doesNotMatch(script, />007<\/em>/);
  assert.match(script, /系统挑战者资料 · 不参与冠军奖励/);
  assert.match(html, /<details class="season-rules">[\s\S]*14999 金币[\s\S]*<\/details>/);
  assert.match(script, /purchaseSeasonReward/);
}

function testRedeemCodeManagementUiIsPackaged() {
  const adminHtml = readFileSync(new URL("../admin/index.html", import.meta.url), "utf8");
  const adminScript = readFileSync(new URL("../admin.js", import.meta.url), "utf8");
  const gameScript = readFileSync(new URL("../game.js", import.meta.url), "utf8");
  assert.match(adminHtml, /data-admin-tab="redeem-codes"[\s\S]*兑换码管理/);
  assert.match(adminHtml, /id="redeemCodeStartsInput"/);
  assert.match(adminHtml, /id="redeemCodeExpiresInput"/);
  assert.match(adminHtml, /id="deleteRedeemCodeButton"/);
  assert.match(adminScript, /"\/api\/admin-redeem-codes"/);
  assert.match(adminScript, /action: "upsertRedeemCode"/);
  assert.match(adminScript, /action: "deleteRedeemCode"/);
  assert.match(gameScript, /accountRequest\("redeemCode"/);
  assert.doesNotMatch(gameScript, /code !== "leosince"/);
}

async function testRivalChatHasDailyThreadsAndContextualReplies() {
  const env = createEnv();
  const registered = await register(env, {
    name: "真人回复测试",
    playerId: "player-rival-chat-test-0001",
  });
  const chat = await api(env, "/api/chat", { token: registered.token });
  const rivalMessages = chat.messages.filter((message) => message.systemRival === true);
  assert.ok(rivalMessages.length >= 20, "the shared chat should include several recent multi-person conversations");
  assert.ok(new Set(rivalMessages.map((message) => message.name)).size >= 4, "several rivals should take part in the chat");
  assert.ok(rivalMessages.some((message) => String(message.text).includes("@")), "rivals should naturally mention one another");
  assert.ok(rivalMessages.every((message) => String(message.inviteId).startsWith("rival-")), "rival chat profiles should support real battle invitations");

  await api(env, "/api/chat", {
    token: registered.token,
    body: {
      action: "send",
      text: "@雾中第七码头 第三跳掉进悬崖以后怎么回来？",
    },
  });
  const stored = await env.LEADERBOARD.get("cloud-jumper:chat:index:v1", { type: "json" });
  const scheduledReplies = stored.messages.filter((message) =>
    String(message.playerId).startsWith("rival-") &&
    String(message.text).includes("@真人回复测试"));
  assert.ok(scheduledReplies.length >= 1, "a directly mentioned rival should schedule a contextual reply to the real player");
  assert.ok(scheduledReplies.some((message) => /悬崖|崖沿|补跳|三连跳|第三跳|空中跳|长洞|掉下/.test(message.text)));
  const immediate = await api(env, "/api/chat", { token: registered.token });
  assert.ok(!immediate.messages.some((message) => String(message.text).includes("@真人回复测试")), "scheduled replies should not appear before their natural delay");
  scheduledReplies[0].createdAt = Date.now() - 10;
  await env.LEADERBOARD.put("cloud-jumper:chat:index:v1", JSON.stringify(stored));
  const afterDelay = await api(env, "/api/chat", { token: registered.token });
  assert.ok(afterDelay.messages.some((message) => String(message.text).includes("@真人回复测试")), "the contextual reply should appear after its delay");
}

async function testRivalRepliesUnderstandIntentAndWaitForBattleConsent() {
  const env = createEnv();
  const health = await api(env, "/api/health");
  assert.ok(health.localReplyVariants >= 10000, "the local compositional reply engine must expose at least 10,000 variants");
  assert.equal(health.geminiConfigured, false);
  assert.equal(health.openAIConfigured, false);

  const krabsPlayer = await register(env, {
    name: "意图测试",
    playerId: "player-rival-intent-test-0001",
  });
  await api(env, "/api/chat", {
    token: krabsPlayer.token,
    body: {
      action: "send",
      text: "@雾中第七码头 蟹老板为什么吸不到金币？",
    },
  });
  let stored = await env.LEADERBOARD.get("cloud-jumper:chat:index:v1", { type: "json" });
  const krabsReply = stored.messages.find((message) =>
    String(message.playerId).startsWith("rival-") &&
    String(message.text).includes("@意图测试"));
  assert.ok(krabsReply, "a direct mention must receive a reply");
  assert.match(krabsReply.text, /金蟹|每 3 局|三倍/);
  assert.doesNotMatch(krabsReply.text, /悬崖|崖沿/);

  const invitePlayer = await register(env, {
    name: "邀请测试",
    playerId: "player-rival-invite-test-0001",
  });
  await env.LEADERBOARD.put(`cloud-jumper:chat:outreach:${invitePlayer.account.id}`, JSON.stringify({
    lastOfferedAt: Date.now(),
    pending: {
      rivalId: "rival-v29-pier7-2026",
      rivalName: "雾中第七码头",
      difficulty: "hard",
      createdAt: Date.now() - 1000,
      expiresAt: Date.now() + 30 * 60 * 1000,
    },
  }));
  await api(env, "/api/chat", {
    token: invitePlayer.token,
    body: { action: "send", text: "同意" },
  });
  stored = await env.LEADERBOARD.get("cloud-jumper:chat:index:v1", { type: "json" });
  const accepted = stored.messages.find((message) =>
    message.battleInvite?.rivalId === "rival-v29-pier7-2026");
  assert.ok(accepted, "consent should create an actionable battle invitation");
  assert.equal(accepted.battleInvite.difficulty, "hard");
  accepted.createdAt = Date.now() - 10;
  await env.LEADERBOARD.put("cloud-jumper:chat:index:v1", JSON.stringify(stored));
  const visible = await api(env, "/api/chat", { token: invitePlayer.token });
  assert.ok(visible.messages.some((message) =>
    message.battleInvite?.rivalId === "rival-v29-pier7-2026" &&
    message.battleInvite?.difficulty === "hard"));
}

async function testDirectMentionsUseCloudReplyAndRejectIrrelevantOutput() {
  const env = createEnv();
  env.OPENAI_API_KEY = "sk-test-only";
  env.OPENAI_MODEL = "gpt-5.6-terra";
  env.OPENAI_WEB_SEARCH = "true";
  const player = await register(env, {
    name: "连续提问",
    playerId: "player-direct-ai-reply-test-0001",
  });
  const originalFetch = globalThis.fetch;
  const requestBodies = [];
  let calls = 0;
  globalThis.fetch = async (input, init) => {
    if (String(input) !== "https://api.openai.com/v1/responses") return originalFetch(input, init);
    calls += 1;
    requestBodies.push(JSON.parse(String(init?.body || "{}")));
    return new Response(JSON.stringify({
      output_text: calls === 1
        ? "@连续提问 我刚才在复测悬崖路线，你想问哪一段？"
        : "我刚才就是这样，刚上线，今天打算从第5关开始。我先学一下你们的路线。",
    }), { status: 200, headers: { "content-type": "application/json" } });
  };

  try {
    await env.LEADERBOARD.put(`cloud-jumper:chat:ai-rate:${player.account.id}`, String(Date.now() - 13000));
    await api(env, "/api/chat", {
      token: player.token,
      body: { action: "send", text: "@雾中第七码头 你好，你刚才在聊什么？" },
    });
    assert.equal(calls, 1, "an explicit mention should use OpenAI even for a greeting or casual question");
    const firstInput = requestBodies[0].input[0].content[0].text;
    assert.equal((firstInput.match(/你刚才在聊什么/g) || []).length, 1, "the current question must not be duplicated into recent context");

    let stored = await env.LEADERBOARD.get("cloud-jumper:chat:index:v1", { type: "json" });
    let replies = stored.messages.filter((message) =>
      String(message.playerId).startsWith("rival-") &&
      String(message.text).includes("@连续提问"));
    assert.match(replies.at(-1).text, /复测悬崖路线/);

    await env.LEADERBOARD.put(`cloud-jumper:chat:rate:${player.account.id}`, String(Date.now() - 1000));
    await env.LEADERBOARD.put(`cloud-jumper:chat:ai-rate:${player.account.id}`, String(Date.now() - 13000));
    await api(env, "/api/chat", {
      token: player.token,
      body: { action: "send", text: "@雾中第七码头 广州今天天气怎么样？" },
    });
    assert.equal(calls, 2, "a direct follow-up after six seconds should not be trapped by the old 45-second cooldown");
    stored = await env.LEADERBOARD.get("cloud-jumper:chat:index:v1", { type: "json" });
    replies = stored.messages.filter((message) =>
      String(message.playerId).startsWith("rival-") &&
      String(message.text).includes("@连续提问"));
    const weatherReply = replies.find((message) => /天气|城市|查询/.test(message.text))?.text || "";
    assert.match(weatherReply, /天气|城市|查询/);
    assert.doesNotMatch(weatherReply, /刚上线|第5关|学一下你们的路线/);

    const health = await api(env, "/api/health");
    assert.equal(health.openAIConfigured, true);
    assert.equal(health.openAIWebSearchEnabled, true);
    assert.equal(health.openAILastCheck?.ok, true);
    assert.equal(health.openAILastCheck?.status, 200);
  } finally {
    globalThis.fetch = originalFetch;
  }
}

async function testGeminiRepliesTakePriorityAndLocalFallbackStaysNatural() {
  const env = createEnv();
  env.GEMINI_API_KEY = "gemini-test-only";
  env.GEMINI_MODEL = "gemini-3.5-flash-lite";
  env.OPENAI_API_KEY = "openai-should-not-run";
  const player = await register(env, {
    name: "Gemini测试",
    playerId: "player-gemini-reply-test-0001",
  });
  const originalFetch = globalThis.fetch;
  let geminiCalls = 0;
  let openAICalls = 0;
  let geminiRequest = null;
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    if (url.startsWith("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent")) {
      geminiCalls += 1;
      geminiRequest = {
        headers: new Headers(init?.headers),
        body: JSON.parse(String(init?.body || "{}")),
      };
      return new Response(JSON.stringify({
        candidates: [{
          content: {
            role: "model",
            parts: [{
              text: "@Gemini测试 OpenAI 是开发 ChatGPT 和多种人工智能模型的公司，也向网站开发者提供 API。",
            }],
          },
          finishReason: "STOP",
        }],
      }), { status: 200, headers: { "content-type": "application/json" } });
    }
    if (url === "https://api.openai.com/v1/responses") {
      openAICalls += 1;
      return new Response(JSON.stringify({ output_text: "不应该调用这里" }), { status: 200 });
    }
    return originalFetch(input, init);
  };

  try {
    await api(env, "/api/chat", {
      token: player.token,
      body: { action: "send", text: "@小砚 介绍OpenAI" },
    });
    assert.equal(geminiCalls, 1, "Gemini should be the first model used for direct mentions");
    assert.equal(openAICalls, 0, "OpenAI should remain only a fallback when Gemini succeeds");
    assert.equal(geminiRequest.headers.get("x-goog-api-key"), "gemini-test-only");
    assert.match(geminiRequest.body.systemInstruction.parts[0].text, /必须真正回答/);
    const geminiInput = geminiRequest.body.contents[0].parts[0].text;
    assert.equal((geminiInput.match(/介绍OpenAI/g) || []).length, 1);

    const stored = await env.LEADERBOARD.get("cloud-jumper:chat:index:v1", { type: "json" });
    const reply = stored.messages.find((message) =>
      String(message.playerId).startsWith("rival-") &&
      String(message.text).includes("@Gemini测试"));
    assert.match(reply.text, /开发 ChatGPT|人工智能模型|API/);
    assert.doesNotMatch(reply.text, /我看到你说的是|先按这个话题接/);

    const health = await api(env, "/api/health");
    assert.equal(health.version, "v56");
    assert.equal(health.geminiConfigured, true);
    assert.equal(health.geminiModel, "gemini-3.5-flash-lite");
    assert.equal(health.geminiLastCheck?.ok, true);
    assert.equal(health.geminiLastCheck?.status, 200);
  } finally {
    globalThis.fetch = originalFetch;
  }

  const localEnv = createEnv();
  const localPlayer = await register(localEnv, {
    name: "自然备用",
    playerId: "player-natural-fallback-test-0001",
  });
  await api(localEnv, "/api/chat", {
    token: localPlayer.token,
    body: { action: "send", text: "@小砚 好" },
  });
  const localStored = await localEnv.LEADERBOARD.get("cloud-jumper:chat:index:v1", { type: "json" });
  const localReply = localStored.messages.find((message) =>
    String(message.playerId).startsWith("rival-") &&
    String(message.text).includes("@自然备用"));
  assert.match(localReply.text, /好，有什么想问的直接说/);
  assert.doesNotMatch(localReply.text, /我看到你说的是|先按这个话题接/);
}

async function testGeminiUsesSmartPrimaryAndFallsBackByModel() {
  const env = createEnv();
  env.GEMINI_API_KEY = "gemini-routing-test";
  const player = await register(env, {
    name: "模型分流",
    playerId: "player-gemini-routing-test-0001",
  });
  const originalFetch = globalThis.fetch;
  const attemptedModels = [];
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    if (!url.startsWith("https://generativelanguage.googleapis.com/")) return originalFetch(input, init);
    const model = decodeURIComponent(url.match(/\/models\/([^:]+):generateContent/)?.[1] || "");
    attemptedModels.push(model);
    if (model === "gemini-3.6-flash") {
      return new Response(JSON.stringify({
        error: { status: "RESOURCE_EXHAUSTED", code: 429 },
      }), { status: 429, headers: { "content-type": "application/json" } });
    }
    assert.equal(new Headers(init?.headers).get("x-goog-api-key"), "gemini-routing-test");
    return new Response(JSON.stringify({
      candidates: [{
        content: {
          role: "model",
          parts: [{ text: "@模型分流 第10关的大洞要在边缘前提前起跳，第二跳留到人物开始下落时再按。" }],
        },
        finishReason: "STOP",
      }],
    }), { status: 200, headers: { "content-type": "application/json" } });
  };

  try {
    await api(env, "/api/chat", {
      token: player.token,
      body: { action: "send", text: "@小砚 第10关的大洞怎么跳？" },
    });
    assert.deepEqual(
      attemptedModels,
      ["gemini-3.6-flash", "gemini-3.5-flash"],
      "the newest stable model should run first, followed by the first free fallback",
    );
    const health = await api(env, "/api/health");
    assert.equal(health.geminiModel, "gemini-3.6-flash");
    assert.deepEqual(health.geminiModels, [
      "gemini-3.6-flash",
      "gemini-3.5-flash",
      "gemini-3.5-flash-lite",
    ]);
    assert.equal(health.geminiLastCheck?.ok, true);
    assert.equal(health.geminiLastCheck?.model, "gemini-3.5-flash");
  } finally {
    globalThis.fetch = originalFetch;
  }
}

async function testAdminMentionIsImmediateAndNormalMentionWaitsNaturally() {
  const env = createEnv();
  env.GEMINI_API_KEY = "gemini-timing-test";
  const player = await register(env, {
    name: "回复节奏",
    playerId: "player-rival-reply-timing-test-0001",
  });
  const originalFetch = globalThis.fetch;
  const requests = [];
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    if (!url.startsWith("https://generativelanguage.googleapis.com/")) return originalFetch(input, init);
    const body = JSON.parse(String(init?.body || "{}"));
    requests.push(body);
    const prompt = String(body?.contents?.[0]?.parts?.[0]?.text || "");
    const text = prompt.includes("蟹老板")
      ? "@回复节奏 蟹老板的金蟹局每三局触发一次，那一局吸币范围更大并按三倍金币结算。"
      : "@回复节奏 第三跳应该留到接近落点时修正，落地以后跳数才会重置。";
    return new Response(JSON.stringify({
      candidates: [{
        content: { role: "model", parts: [{ text }] },
        finishReason: "STOP",
      }],
    }), { status: 200, headers: { "content-type": "application/json" } });
  };

  try {
    const normalStartedAt = Date.now();
    await api(env, "/api/chat", {
      token: player.token,
      body: { action: "send", text: "@小砚 第三跳什么时候按比较稳？" },
    });
    let stored = await env.LEADERBOARD.get("cloud-jumper:chat:index:v1", { type: "json" });
    const normalReply = stored.messages.find((message) =>
      String(message.playerId).startsWith("rival-") &&
      String(message.text).includes("@回复节奏") &&
      String(message.text).includes("第三跳"));
    assert.ok(normalReply, "a normal direct mention should still receive a scheduled reply");
    assert.ok(normalReply.createdAt >= normalStartedAt + 18000, "a normal @ should wait at least 18 seconds");

    await env.LEADERBOARD.put(`cloud-jumper:chat:rate:${player.account.id}`, String(Date.now() - 1000));
    await env.LEADERBOARD.put(`cloud-jumper:chat:gemini-rate:${player.account.id}`, String(Date.now() - 2000));
    await api(env, "/api/chat", {
      token: player.token,
      body: { action: "send", text: "@小砚 admin：蟹老板为什么有时吸不到金币？" },
    });
    stored = await env.LEADERBOARD.get("cloud-jumper:chat:index:v1", { type: "json" });
    const adminReply = stored.messages.find((message) =>
      String(message.playerId).startsWith("rival-") &&
      String(message.text).includes("@回复节奏") &&
      String(message.text).includes("金蟹局"));
    assert.ok(adminReply, "the admin: fast-call syntax should receive a reply");
    assert.ok(adminReply.createdAt <= Date.now(), "the admin: fast-call reply should be immediately visible");
    assert.equal(requests.length, 2);
    const adminPrompt = requests[1].contents[0].parts[0].text;
    assert.match(adminPrompt, /必须回答的消息：蟹老板为什么有时吸不到金币/);
    assert.doesNotMatch(adminPrompt.split("必须回答的消息：").at(-1), /^admin\s*[:：]/i);
    assert.match(requests[1].systemInstruction.parts[0].text, /游戏玩家/);
    assert.match(requests[1].systemInstruction.parts[0].text, /研究关卡路线/);

    const visible = await api(env, "/api/chat", { token: player.token });
    assert.ok(visible.messages.some((message) => message.id === adminReply.id));
    assert.ok(!visible.messages.some((message) => message.id === normalReply.id), "the normal reply must remain hidden until its delay ends");
  } finally {
    globalThis.fetch = originalFetch;
  }
}

async function testDailyChatterYieldsToRealPlayerMessages() {
  const env = createEnv();
  const player = await register(env, {
    name: "安静窗口",
    playerId: "player-chat-quiet-window-test-0001",
  });
  const initial = await api(env, "/api/chat", { token: player.token });
  const scheduled = initial.messages.filter((message) => message.systemRival === true).at(-1);
  assert.ok(scheduled, "the fixture needs an existing scheduled rival message");
  await env.LEADERBOARD.put("cloud-jumper:chat:index:v1", JSON.stringify({
    version: 2,
    messages: [{
      id: "chat-real-quiet-window",
      accountId: player.account.id,
      playerId: player.account.playerId,
      name: player.account.name,
      avatar: player.account.avatar,
      text: "这是一条真人正在讨论的消息",
      createdAt: scheduled.createdAt,
      recalled: false,
      selectedCharacter: "cloud",
      unlockedCharacters: ["cloud"],
      selectedSkin: "light",
      coins: 0,
      showCoins: false,
    }],
  }));
  const after = await api(env, "/api/chat", { token: player.token });
  assert.ok(!after.messages.some((message) => message.id === scheduled.id), "scheduled chatter must yield near a real player's message");
  assert.ok(after.messages.some((message) => message.id === "chat-real-quiet-window"));
}

function testResponsiveChatAndCliffRescueArePackaged() {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const script = readFileSync(new URL("../game.js", import.meta.url), "utf8");
  const css = readFileSync(new URL("../globals.css", import.meta.url), "utf8");
  assert.match(html, /长按头像可以 @ 对方/);
  assert.match(script, /function formatChatMessageText/);
  assert.match(script, /button\.addEventListener\("contextmenu"/);
  assert.match(script, /function groundGapAt/);
  assert.match(script, /function beginCliffFall/);
  assert.match(script, /function activateCliffRescue/);
  assert.match(script, /safeLandingX: gap\.end \+ 22/);
  assert.match(script, /cliffRescueGrace = Math\.max\(cliffRescueGrace, 0\.95\)/);
  assert.match(script, /悬崖救援提示 \$\{cliffRescueHintsShown\}\/3/);
  assert.match(script, /cliffFallState\?\.active \? cliffFallState\.cameraX/);
  assert.match(script, /harmlessUnderside: true/);
  assert.match(script, /const thirdLayerY = Math\.max\(205, secondLayerY -/);
  assert.match(css, /\.chat-message-avatar\.is-pressing/);
  assert.match(css, /\.chat-card\.is-fullscreen \.chat-list/);
  assert.match(script, /data-chat-battle-invite/);
  assert.match(script, /function invitePlayerToBattle\(entry, preferredDifficulty/);
  assert.match(css, /\.chat-battle-accept/);
  assert.match(css, /@media \(max-height: 560px\) and \(orientation: landscape\)/);
}

function testV56GeminiRepliesArePackaged() {
  const html = readFileSync(new URL("../admin/index.html", import.meta.url), "utf8");
  const adminScript = readFileSync(new URL("../admin.js", import.meta.url), "utf8");
  const workerScript = readFileSync(new URL("../_worker.js", import.meta.url), "utf8");
  assert.match(html, /id="repairLeaderboardButton"/);
  assert.match(adminScript, /action: "repairLeaderboard"/);
  assert.match(workerScript, /ACCOUNT_SCAN_INTERVAL_MS = 5 \* 60 \* 1000/);
  assert.match(workerScript, /LOCAL_REPLY_VARIANT_COUNT/);
  assert.match(workerScript, /https:\/\/api\.openai\.com\/v1\/responses/);
  assert.match(workerScript, /OPENAI_API_KEY/);
  assert.match(workerScript, /OPENAI_WEB_SEARCH/);
  assert.match(workerScript, /GEMINI_API_KEY/);
  assert.match(workerScript, /gemini-3\.6-flash/);
  assert.match(workerScript, /gemini-3\.5-flash-lite/);
  assert.match(workerScript, /requestGeminiWithFallback/);
  assert.match(workerScript, /generativelanguage\.googleapis\.com/);
  assert.match(workerScript, /CHAT_ADMIN_AI_COOLDOWN_MS = 1500/);
  assert.match(workerScript, /CHAT_DIRECT_AI_COOLDOWN_MS = 12 \* 1000/);
  assert.match(workerScript, /adminPriority/);
  assert.match(workerScript, /RIVAL_PLAYER_PERSONAS/);
  assert.match(workerScript, /isCompetitorReplyRelevant/);
  assert.match(workerScript, /openAILastCheck/);
}

function testSiteControlAndYuanyuanUiArePackaged() {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const script = readFileSync(new URL("../game.js", import.meta.url), "utf8");
  const css = readFileSync(new URL("../globals.css", import.meta.url), "utf8");
  const adminHtml = readFileSync(new URL("../admin/index.html", import.meta.url), "utf8");
  const adminScript = readFileSync(new URL("../admin.js", import.meta.url), "utf8");
  assert.match(html, /id="siteLockOverlay"/);
  assert.match(html, /id="siteLockCountdown"/);
  assert.match(html, /id="yuanyuanOffer"/);
  assert.match(html, /id="yuanyuanStock"/);
  assert.match(html, /globals\.css\?v=56/);
  assert.match(html, /game\.js\?v=56/);
  assert.match(script, /accountRequest\("purchaseYuanyuan"/);
  assert.match(script, /function drawYuanyuanCharacter/);
  assert.match(script, /function triggerYuanyuanSmash/);
  assert.match(script, /function loadSiteStatus/);
  assert.match(css, /@keyframes siteMembraneFlow/);
  assert.match(css, /\.character-card\.is-limited-drop/);
  assert.match(adminHtml, /data-admin-tab="site-control"/);
  assert.match(adminHtml, /id="siteLockEndInput"/);
  assert.match(adminHtml, /id="activateSiteLockButton"/);
  assert.match(adminHtml, /id="yuanyuanBuyerList"/);
  assert.match(adminScript, /"\/api\/admin-site-control"/);
  assert.match(adminScript, /action: "setSiteLock"/);
  assert.match(adminScript, /action: "unlockSite"/);
}

async function testOnlineStatusIsPrivateByChoiceAndExactForAdmin() {
  const env = createEnv();
  const playerId = "player-online-status-test-0001";
  const registered = await register(env, {
    name: "上线测试",
    playerId,
    showOnlineStatus: true,
  });
  const publicBoard = await api(env, `/api/leaderboard?playerId=${playerId}`);
  const publicEntry = publicBoard.entries.find((entry) => entry.inviteId === playerId);
  assert.equal(publicEntry?.presence, "online");
  assert.equal("lastActiveAt" in publicEntry, false, "public rankings must never expose the exact activity timestamp");
  assert.equal("showOnlineStatus" in publicEntry, false);

  const adminBoard = await api(env, "/api/admin", { admin: true });
  const adminEntry = adminBoard.entries.find((entry) => entry.playerId === playerId);
  assert.ok(Number(adminEntry?.lastActiveAt) > 0, "administrators should receive the exact server activity timestamp");
  assert.equal(adminEntry.showOnlineStatus, true);
  assert.ok(Number(adminBoard.stats?.onlinePlayers) >= 1);

  await api(env, "/api/account", {
    token: registered.token,
    body: {
      action: "save",
      showCoins: true,
      showOnlineStatus: false,
      gameData: registered.account.gameData,
    },
  });
  const hiddenBoard = await api(env, `/api/leaderboard?playerId=${playerId}`);
  const hiddenEntry = hiddenBoard.entries.find((entry) => entry.inviteId === playerId);
  assert.equal(hiddenEntry?.presence, "", "turning off the setting should remove the public dot");
  assert.equal("lastActiveAt" in hiddenEntry, false);
}

function testPresenceAndBlackHoleGuidanceArePackaged() {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const script = readFileSync(new URL("../game.js", import.meta.url), "utf8");
  const css = readFileSync(new URL("../globals.css", import.meta.url), "utf8");
  const adminHtml = readFileSync(new URL("../admin/index.html", import.meta.url), "utf8");
  const adminScript = readFileSync(new URL("../admin.js", import.meta.url), "utf8");
  assert.match(html, /id="registerShowOnlineStatus"/);
  assert.match(html, /id="showOnlineStatusToggle"/);
  assert.match(script, /online-status-guide-v48/);
  assert.match(script, /绿色表示正在在线，蓝色表示一天内来过，红色表示超过一天没有上线/);
  assert.match(script, /presence-dot is-\$\{presence\}/);
  assert.match(css, /\.presence-dot\.is-online/);
  assert.match(css, /\.presence-dot\.is-recent/);
  assert.match(css, /\.presence-dot\.is-away/);
  assert.match(adminHtml, /id="statOnline"/);
  assert.match(adminHtml, /<th>上线状态<\/th>/);
  assert.match(adminScript, /function playerPresence/);
  assert.match(script, /level === 10 \? 100/);
  assert.match(script, /hazard\.tutorial \? "不能碰 · 跳" : "黑洞 · 跳"/);
}

function testPremiumVisualsAndFrameSmoothingArePackaged() {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const script = readFileSync(new URL("../game.js", import.meta.url), "utf8");
  const css = readFileSync(new URL("../globals.css", import.meta.url), "utf8");
  assert.match(html, /globals\.css\?v=56/);
  assert.match(html, /game\.js\?v=56/);
  assert.match(script, /function characterVisualTier/);
  assert.match(script, /function updatePremiumCharacterEffects/);
  assert.match(script, /function drawPremiumCharacterEffects/);
  assert.match(script, /function spawnPremiumLandingBurst/);
  assert.match(script, /Math\.exp\(-7\.05 \* Math\.max\(1 \/ 240, renderFrameDelta\)\)/);
  assert.match(script, /Math\.ceil\(dt \/ \(1 \/ 60\)\)/);
  assert.match(script, /const maximumDpr = phoneDevice/);
  assert.match(css, /v49 — premium home/);
  assert.match(css, /@keyframes v49CloudFloat/);
  assert.match(css, /\.campaign-launch-card::after/);
}

async function testAccountAdminsCanEnterManageRolesAndPermanentlyDeleteChat() {
  const env = createEnv();
  const first = await register(env, {
    name: "权限测试甲",
    playerId: "player-admin-role-test-0001",
  });
  const second = await register(env, {
    name: "权限测试乙",
    playerId: "player-admin-role-test-0002",
  });
  const ordinary = await register(env, {
    name: "普通玩家",
    playerId: "player-admin-role-test-0003",
  });

  const beforeGrant = await apiError(env, "/api/admin", { token: first.token });
  assert.equal(beforeGrant.response.status, 401);

  const granted = await api(env, "/api/admin-roles", {
    admin: true,
    body: { action: "grantAdmin", playerId: first.account.playerId },
  });
  assert.equal(granted.accounts.find((account) => account.playerId === first.account.playerId)?.isAdmin, true);

  const delegatedDashboard = await api(env, "/api/admin", { token: first.token });
  assert.equal(delegatedDashboard.access.role, "admin");
  assert.equal(delegatedDashboard.access.name, "权限测试甲");

  const delegatedGrant = await api(env, "/api/admin-roles", {
    token: first.token,
    body: { action: "grantAdmin", playerId: second.account.playerId },
  });
  assert.equal(delegatedGrant.accounts.find((account) => account.playerId === second.account.playerId)?.isAdmin, true);
  const secondDashboard = await api(env, "/api/admin", { token: second.token });
  assert.equal(secondDashboard.access.role, "admin", "an assigned account should enter the backend with its normal login token");

  const sent = await api(env, "/api/chat", {
    token: second.token,
    body: {
      action: "send",
      text: "这条消息会被管理员永久删除",
      imageData: "data:image/png;base64,aGVsbG8=",
    },
  });
  assert.ok(await env.LEADERBOARD.get(`cloud-jumper:chat:image:${sent.message.id}`));
  const chat = await api(env, "/api/chat", { token: first.token });
  assert.equal(chat.viewerIsAdmin, true);
  assert.equal(chat.messages.find((message) => message.id === sent.message.id)?.isAdmin, true);
  assert.equal(chat.messages.find((message) => message.id === sent.message.id)?.adminDeletable, true);

  const ordinaryChat = await api(env, "/api/chat", { token: ordinary.token });
  assert.equal(ordinaryChat.viewerIsAdmin, false);
  assert.equal(
    ordinaryChat.messages.find((message) => message.id === sent.message.id)?.adminDeletable,
    false,
    "ordinary players must not receive chat moderation controls",
  );
  const ordinaryDelete = await apiError(env, "/api/chat", {
    token: ordinary.token,
    body: { action: "adminDelete", messageIds: [sent.message.id] },
  });
  assert.equal(ordinaryDelete.response.status, 403);

  const removed = await api(env, "/api/chat", {
    token: first.token,
    body: { action: "adminDelete", messageIds: [sent.message.id] },
  });
  assert.equal(removed.deletedCount, 1);
  assert.equal(await env.LEADERBOARD.get(`cloud-jumper:chat:image:${sent.message.id}`), null);
  const afterDelete = await api(env, "/api/chat", { token: first.token });
  assert.equal(afterDelete.messages.some((message) => message.id === sent.message.id), false);
  const rawChat = await env.LEADERBOARD.get("cloud-jumper:chat:index:v1", { type: "json" });
  assert.equal(rawChat.messages.some((message) => message.id === sent.message.id), false, "permanent deletion must leave no tombstone");

  const selfRevoke = await apiError(env, "/api/admin-roles", {
    token: first.token,
    body: { action: "revokeAdmin", playerId: first.account.playerId },
  });
  assert.equal(selfRevoke.response.status, 409);
  await api(env, "/api/admin-roles", {
    admin: true,
    body: { action: "revokeAdmin", playerId: first.account.playerId },
  });
  const afterRevoke = await apiError(env, "/api/admin", { token: first.token });
  assert.equal(afterRevoke.response.status, 401);

  const board = await api(env, "/api/leaderboard");
  assert.equal(board.entries.find((entry) => entry.inviteId === second.account.playerId)?.isAdmin, true);
  const aiStatus = await api(env, "/api/admin-ai", { token: second.token });
  assert.equal(aiStatus.configured, false);
}

function testAdminRolesAiAndChatModerationUiArePackaged() {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
  const script = readFileSync(new URL("../game.js", import.meta.url), "utf8");
  const css = readFileSync(new URL("../globals.css", import.meta.url), "utf8");
  const adminHtml = readFileSync(new URL("../admin/index.html", import.meta.url), "utf8");
  const adminScript = readFileSync(new URL("../admin.js", import.meta.url), "utf8");
  assert.match(adminHtml, /data-admin-tab="roles"[\s\S]*管理员/);
  assert.match(adminHtml, /data-admin-tab="ai"[\s\S]*AI 助手/);
  assert.match(adminHtml, /id="accountAdminLoginButton"/);
  assert.match(adminHtml, /id="adminRoleList"/);
  assert.match(adminHtml, /id="adminAiConversation"/);
  assert.match(adminScript, /"\/api\/admin-roles"/);
  assert.match(adminScript, /"\/api\/admin-ai"/);
  assert.match(adminScript, /cloud-jumper-account-token/);
  assert.match(html, /id="chatAdminToolbar"/);
  assert.match(html, /id="chatInteractionNote"/);
  assert.match(script, /action === "summary"/);
  assert.match(script, /chatRequest\("adminDelete"/);
  assert.match(script, /function toggleChatAdminMessage/);
  assert.match(script, /data-chat-message/);
  assert.match(script, /setTimeout\(triggerLongPress, 460\)/);
  assert.match(script, /chat-admin-badge/);
  assert.match(css, /\.chat-admin-toolbar/);
  assert.match(css, /\.chat-admin-badge/);
  assert.match(css, /\.chat-message\.is-message-pressing/);
  assert.match(css, /\.chat-list\.is-admin-selecting/);
}

await testRepeatedSaveDoesNotMintBattleRewardAgain();
await testStaleWalletSnapshotCannotOverwriteCloudBalance();
await testLoginAndRestoreDoNotRewriteAccountOrRanking();
await testLegacyAdminBalanceActionAlsoAdvancesRevision();
await testAdminCanSetExactBalanceWithoutResettingProgress();
await testHeartUpgradeResetAndNewFiveHeartPurchasePersist();
await testDailyCheckinIsServerAuthoritativeAndAwardsCharacter();
await testCrabBossPersistsAndAppearsOnLeaderboard();
await testAdminManagedCharactersAndDoraemonCatalog();
await testSystemRivalsAreClearlyMarkedAndExcludedFromAdminPlayers();
await testLeaderboardRestoresEveryRegisteredAccountAfterSeasonReset();
await testLeaderboardRepairRepeatsAndNeverHidesRegisteredAccounts();
await testDoraemonRequiresChampionEligibilityAndServerPurchase();
await testAdminManagedRedeemCodesAreServerAuthoritative();
await testTimedSiteLockBlocksPlayersButNeverAdmin();
await testYuanyuanLimitedSaleIsServerAuthoritativeAndIdempotent();
await testRivalChatHasDailyThreadsAndContextualReplies();
await testRivalRepliesUnderstandIntentAndWaitForBattleConsent();
await testDirectMentionsUseCloudReplyAndRejectIrrelevantOutput();
await testGeminiRepliesTakePriorityAndLocalFallbackStaysNatural();
await testGeminiUsesSmartPrimaryAndFallsBackByModel();
await testAdminMentionIsImmediateAndNormalMentionWaitsNaturally();
await testDailyChatterYieldsToRealPlayerMessages();
await testOnlineStatusIsPrivateByChoiceAndExactForAdmin();
await testAccountAdminsCanEnterManageRolesAndPermanentlyDeleteChat();
await testAdminRouteRedirectsOnlyOnce();
testAdminBrowserUsesRootApiPaths();
testShopNavigationAndHeartUpgradeRemainVisible();
testAdminCharacterManagementUiIsPackaged();
testLeaderboardUsesProfileOnlySystemDisclosureAndSeasonRules();
testRedeemCodeManagementUiIsPackaged();
testResponsiveChatAndCliffRescueArePackaged();
testV56GeminiRepliesArePackaged();
testSiteControlAndYuanyuanUiArePackaged();
testPresenceAndBlackHoleGuidanceArePackaged();
testPremiumVisualsAndFrameSmoothingArePackaged();
testAdminRolesAiAndChatModerationUiArePackaged();
console.log("worker regression tests passed");
