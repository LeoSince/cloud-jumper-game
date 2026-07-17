const SEASON_KEY = "cloud-jumper:season:v4-accounts-20260713";
const SEASON_LENGTH_MS = 14 * 24 * 60 * 60 * 1000;
const ACCOUNT_SESSION_MS = 180 * 24 * 60 * 60 * 1000;
const ACCOUNT_CHARACTERS = new Set(["cloud", "beibei", "messi", "guoguo", "mbappe", "haaland", "qiang", "sponge", "patrick", "qihang", "yunqing", "zhixuan", "doraemon"]);
const ACCOUNT_SKINS = new Set(["light", "warm", "tan", "deep"]);
const ACCOUNT_AVATARS = new Set(["cloud", "lightning", "star", "crown", "football", "muscle", "rocket", "moon"]);
const CHAT_INDEX_KEY = "cloud-jumper:chat:index:v1";
const CHAT_IMAGE_PREFIX = "cloud-jumper:chat:image:";
const CHAT_RATE_PREFIX = "cloud-jumper:chat:rate:";
const CHAT_MAX_MESSAGES = 60;
const CHAT_RECALL_MS = 5 * 60 * 1000;
const CHAT_RETENTION_MS = 7 * 24 * 60 * 60 * 1000;
const CHAT_RETENTION_SECONDS = 7 * 24 * 60 * 60;
const YUNQING_UNLOCK_AT = Date.parse("2026-07-16T00:00:00+08:00");
const YUNQING_RESERVATIONS_KEY = "cloud-jumper:store:yunqing-reservations:v1";
const YUNQING_RESERVATION_PRICE = 500;
const YUNQING_RESERVATION_LIMIT = 3;
const COIN_LEDGER_LIMIT = 1000;

const apiHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, OPTIONS",
  "access-control-allow-headers": "Content-Type, Accept, X-Admin-Password, Authorization",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: apiHeaders });
}

function cleanName(value) {
  return String(value || "").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, 12);
}

function cleanPlayerId(value) {
  const id = String(value || "").trim().slice(0, 80);
  return /^[a-z0-9-]{16,80}$/i.test(id) ? id : "";
}

function cleanAvatar(value) {
  return ACCOUNT_AVATARS.has(String(value)) ? String(value) : "cloud";
}

function cleanPublicCharacters(value) {
  const unlocked = [...new Set((Array.isArray(value) ? value : ["cloud"])
    .map(String)
    .filter((id) => ACCOUNT_CHARACTERS.has(id)))];
  if (!unlocked.includes("cloud")) unlocked.unshift("cloud");
  return unlocked;
}

function compareEntries(a, b) {
  const aOverall = (Math.max(1, Number(a.level) || 1) - 1) * 1200 + Math.max(0, Number(a.score) || 0) * 6 + Math.max(0, Number(a.battlePoints) || 0) + Math.max(0, Number(a.battleWins) || 0) * 120;
  const bOverall = (Math.max(1, Number(b.level) || 1) - 1) * 1200 + Math.max(0, Number(b.score) || 0) * 6 + Math.max(0, Number(b.battlePoints) || 0) + Math.max(0, Number(b.battleWins) || 0) * 120;
  return bOverall - aOverall ||
    Number(b.level) - Number(a.level) ||
    Number(b.score) - Number(a.score) ||
    Number(a.time || Infinity) - Number(b.time || Infinity) ||
    Number(b.updatedAt) - Number(a.updatedAt);
}

function rank(entries) {
  return entries
    .filter((entry) => entry && cleanName(entry.name) && cleanPlayerId(entry.playerId))
    .map((entry) => ({
      name: cleanName(entry.name),
      playerId: cleanPlayerId(entry.playerId),
      level: Math.max(1, Math.min(20, Math.round(Number(entry.level) || 1))),
      score: Math.max(0, Math.min(100, Math.round(Number(entry.score) || 0))),
      time: Math.max(0, Math.min(3600, Number(entry.time) || 0)),
      coins: Math.max(0, Math.min(1000000000, Math.round(Number(entry.coins) || 0))),
      showCoins: entry.showCoins === true,
      avatar: cleanAvatar(entry.avatar),
      selectedCharacter: ACCOUNT_CHARACTERS.has(String(entry.selectedCharacter)) ? String(entry.selectedCharacter) : "cloud",
      unlockedCharacters: cleanPublicCharacters(entry.unlockedCharacters),
      selectedSkin: ACCOUNT_SKINS.has(String(entry.selectedSkin)) ? String(entry.selectedSkin) : "light",
      battleMatches: Math.max(0, Math.min(1000000, Math.round(Number(entry.battleMatches) || 0))),
      battleWins: Math.max(0, Math.min(1000000, Math.round(Number(entry.battleWins) || 0))),
      battleDraws: Math.max(0, Math.min(1000000, Math.round(Number(entry.battleDraws) || 0))),
      battlePoints: Math.max(0, Math.min(1000000000, Math.round(Number(entry.battlePoints) || 0))),
      battleBestScore: Math.max(0, Math.min(100000, Math.round(Number(entry.battleBestScore) || 0))),
      battleCoinsEarned: Math.max(0, Math.min(1000000000, Math.round(Number(entry.battleCoinsEarned) || 0))),
      updatedAt: Math.max(0, Number(entry.updatedAt) || 0),
    }))
    .sort(compareEntries);
}

const RIVAL_ACTIVITY_START_KEY = "cloud-jumper:rivals:v29:start";
const RIVAL_RESTART_AT = Date.parse("2026-07-15T23:20:00+08:00");
const RIVAL_DAY_MS = 24 * 60 * 60 * 1000;
const RIVAL_SESSION_MS = 10 * 60 * 1000;
const RIVAL_MINUTE_MS = 60 * 1000;

const DAILY_COMPETITORS = [
  {
    name: "风停在十七楼",
    playerId: "rival-v29-wind17-2026",
    accountId: "rival-account-v29-wind17",
    avatar: "moon",
    skin: "warm",
    roster: ["cloud", "messi"],
    startDelayMinutes: 0,
    attemptSeconds: 65,
    successRate: 0.2,
    difficultyDrop: 0.016,
    pity: 7,
    capLevel: 7,
    characterSwitchEvery: 5,
    startingCoins: 38,
    battleStartsAfter: 5,
    battleEveryDays: 5,
    battleWinRate: 0.38,
    seed: 113,
    showCoins: false,
    chatEveryDays: 5,
    chatOffset: 0,
    chatMinute: 8,
    chatLines: ["刚才那一下跳早了，差一点就过去", "我今天就玩一小会儿", "第{level}关先卡在这里，明天再试", "换个人物试试手感"],
  },
  {
    name: "404号月亮",
    playerId: "rival-v29-moon404-2026",
    accountId: "rival-account-v29-moon404",
    avatar: "lightning",
    skin: "light",
    roster: ["cloud", "guoguo", "mbappe"],
    startDelayMinutes: 2,
    attemptSeconds: 58,
    successRate: 0.27,
    difficultyDrop: 0.018,
    pity: 6,
    capLevel: 10,
    characterSwitchEvery: 4,
    startingCoins: 74,
    battleStartsAfter: 4,
    battleEveryDays: 4,
    battleWinRate: 0.52,
    seed: 197,
    showCoins: true,
    chatEveryDays: 4,
    chatOffset: 1,
    chatMinute: 9,
    chatLines: ["刚才金币路线走歪了", "有人也会在第三跳停一下吗", "今天手感还行", "先攒点金币再说"],
  },
  {
    name: "小砚",
    playerId: "rival-v29-xiaoyan-2026",
    accountId: "rival-account-v29-xiaoyan",
    avatar: "cloud",
    skin: "tan",
    roster: ["cloud", "messi"],
    startDelayMinutes: 4,
    attemptSeconds: 70,
    successRate: 0.14,
    difficultyDrop: 0.014,
    pity: 8,
    capLevel: 5,
    characterSwitchEvery: 6,
    startingCoins: 21,
    battleStartsAfter: 7,
    battleEveryDays: 6,
    battleWinRate: 0.27,
    seed: 251,
    showCoins: false,
    chatEveryDays: 6,
    chatOffset: 2,
    chatMinute: 8,
    chatLines: ["又撞到树枝了哈哈", "这一关我还没摸清楚", "玩两把就下线", "刚换回基础人物试试"],
  },
  {
    name: "枝枝",
    playerId: "rival-v29-zhizhi-2026",
    accountId: "rival-account-v29-zhizhi",
    avatar: "star",
    skin: "warm",
    roster: ["cloud", "beibei"],
    startDelayMinutes: 6,
    attemptSeconds: 63,
    successRate: 0.22,
    difficultyDrop: 0.017,
    pity: 7,
    capLevel: 8,
    characterSwitchEvery: 5,
    startingCoins: 56,
    battleStartsAfter: 5,
    battleEveryDays: 5,
    battleWinRate: 0.44,
    seed: 337,
    showCoins: true,
    chatEveryDays: 5,
    chatOffset: 3,
    chatMinute: 9,
    chatLines: ["差一点点到100分", "刚才那个足球吓我一跳", "今天先到这里啦", "这个人物跳起来挺顺手"],
  },
  {
    name: "雾中第七码头",
    playerId: "rival-v29-pier7-2026",
    accountId: "rival-account-v29-pier7",
    avatar: "rocket",
    skin: "deep",
    roster: ["cloud", "qiang", "sponge"],
    startDelayMinutes: 8,
    attemptSeconds: 57,
    successRate: 0.32,
    difficultyDrop: 0.021,
    pity: 6,
    capLevel: 12,
    characterSwitchEvery: 4,
    startingCoins: 132,
    battleStartsAfter: 3,
    battleEveryDays: 4,
    battleWinRate: 0.58,
    seed: 419,
    showCoins: true,
    chatEveryDays: 7,
    chatOffset: 4,
    chatMinute: 8,
    chatLines: ["灯灭之前我看见路了", "第{level}关的后半段有点东西", "今晚只留一个记录", "洞里那段我再想想"],
  },
];
const RESERVED_COMPETITOR_NAMES = new Set(DAILY_COMPETITORS.map((profile) => profile.name.toLocaleLowerCase()));
let rivalRestartMemoryAt = 0;

async function loadRivalRestartAt(binding, now = Date.now()) {
  if (Number.isFinite(rivalRestartMemoryAt) && rivalRestartMemoryAt > 0) return rivalRestartMemoryAt;
  try {
    const stored = Number(await binding.get(RIVAL_ACTIVITY_START_KEY));
    if (Number.isFinite(stored) && stored > 0 && stored <= now + RIVAL_DAY_MS) {
      rivalRestartMemoryAt = stored;
      return stored;
    }
  } catch {
    // Ranking and chat must remain available even when a KV read is delayed.
  }
  const fallback = Math.min(now, RIVAL_RESTART_AT);
  rivalRestartMemoryAt = fallback;
  try {
    await binding.put(RIVAL_ACTIVITY_START_KEY, String(fallback));
  } catch {
    // The fixed rollout time keeps activity deterministic if the optional write fails.
  }
  return fallback;
}

function competitorActivityValue(seed, step) {
  let value = (Math.imul(Math.max(0, Number(step) || 0) + 1, 1103515245) + Math.imul(seed, 12345)) >>> 0;
  value ^= value >>> 16;
  return value >>> 0;
}

function competitorSessionStart(profile, dayIndex, restartAt = RIVAL_RESTART_AT) {
  const day = Math.max(0, Math.round(Number(dayIndex) || 0));
  const jitterMinutes = day === 0 ? 0 : (competitorActivityValue(profile.seed + 907, day) % 41) - 20;
  return restartAt + day * RIVAL_DAY_MS + (profile.startDelayMinutes + jitterMinutes) * RIVAL_MINUTE_MS;
}

function simulateCompetitor(profile, now = Date.now(), restartAt = RIVAL_RESTART_AT) {
  let targetLevel = 1;
  let bestLevel = 1;
  let bestScore = 0;
  let bestTime = 0;
  let failuresAtLevel = 0;
  let attemptsPlayed = 0;
  let successfulAttempts = 0;
  let sessionsStarted = 0;
  let coins = profile.startingCoins;
  let lastActivityAt = Math.min(now, restartAt);
  const elapsedDays = Math.max(0, Math.floor((now - restartAt) / RIVAL_DAY_MS));
  const lastDay = Math.min(120, elapsedDays + 1);

  const rememberAttempt = (level, attemptScore, attemptTime) => {
    if (level > bestLevel ||
      (level === bestLevel && attemptScore > bestScore) ||
      (level === bestLevel && attemptScore === bestScore && (!bestTime || attemptTime < bestTime))) {
      bestLevel = level;
      bestScore = attemptScore;
      bestTime = attemptTime;
    }
  };

  for (let dayIndex = 0; dayIndex <= lastDay; dayIndex += 1) {
    const sessionStart = competitorSessionStart(profile, dayIndex, restartAt);
    if (now < sessionStart) continue;
    sessionsStarted += 1;
    const playedFor = Math.min(RIVAL_SESSION_MS, Math.max(0, now - sessionStart));
    const attemptLength = profile.attemptSeconds * 1000;
    const attemptsToday = Math.min(14, Math.floor(playedFor / attemptLength));
    for (let dailyAttempt = 1; dailyAttempt <= attemptsToday; dailyAttempt += 1) {
      const activity = competitorActivityValue(profile.seed + dayIndex * 37, attemptsPlayed + 1);
      const latePenalty = targetLevel >= 10 ? 0.07 : targetLevel >= 7 ? 0.035 : 0;
      const successChance = Math.max(0.14, profile.successRate - (targetLevel - 1) * profile.difficultyDrop - latePenalty);
      const success = (activity % 1000) / 1000 < successChance || failuresAtLevel >= profile.pity;
      const attemptTime = 29 + (activity % 24) + Math.floor(targetLevel * 0.7);
      attemptsPlayed += 1;
      lastActivityAt = sessionStart + dailyAttempt * attemptLength;
      if (success) {
        rememberAttempt(targetLevel, 100, attemptTime);
        successfulAttempts += 1;
        failuresAtLevel = 0;
        coins += 2 + Math.min(5, Math.floor(targetLevel / 2)) + ((activity >>> 7) % 2);
        if (targetLevel < profile.capLevel) targetLevel += 1;
      } else {
        failuresAtLevel += 1;
        const failedScore = Math.min(97, 25 + (activity % 58) + Math.min(12, failuresAtLevel * 3));
        rememberAttempt(targetLevel, failedScore, attemptTime);
        if ((activity >>> 5) % 3 === 0) coins += 1;
      }
    }
  }

  const roster = Array.isArray(profile.roster) && profile.roster.length ? profile.roster : ["cloud"];
  const characterTurn = attemptsPlayed > 0 ? Math.floor(attemptsPlayed / profile.characterSwitchEvery) : 0;
  const selectedCharacter = roster[characterTurn % roster.length] || "cloud";
  const battleMatches = Math.max(0, Math.floor(Math.max(0, sessionsStarted - profile.battleStartsAfter) / profile.battleEveryDays));
  const battleRoll = competitorActivityValue(profile.seed + 701, battleMatches);
  const battleWins = Math.min(battleMatches, Math.floor(battleMatches * profile.battleWinRate + ((battleRoll >>> 8) % 2)));
  const battleDraws = Math.min(battleMatches - battleWins, battleMatches >= 4 && battleRoll % 7 === 0 ? 1 : 0);
  const battlePoints = battleWins * (58 + profile.seed % 11) + (battleMatches - battleWins) * (22 + profile.seed % 8);
  return {
    name: profile.name,
    playerId: profile.playerId,
    level: bestLevel,
    score: bestScore,
    time: bestTime,
    coins,
    showCoins: profile.showCoins,
    avatar: profile.avatar,
    selectedCharacter,
    unlockedCharacters: roster,
    selectedSkin: profile.skin,
    battleMatches,
    battleWins,
    battleDraws,
    battlePoints,
    battleBestScore: battleMatches ? Math.min(99, 48 + successfulAttempts + profile.seed % 17) : 0,
    battleCoinsEarned: battleMatches ? Math.floor(battleMatches * (1.2 + profile.battleWinRate)) : 0,
    updatedAt: lastActivityAt,
  };
}

function dailyCompetitorEntries(_state, now = Date.now(), restartAt = RIVAL_RESTART_AT) {
  return DAILY_COMPETITORS.map((profile) => simulateCompetitor(profile, now, restartAt));
}

function dailyCompetitorChatMessages(now = Date.now(), restartAt = RIVAL_RESTART_AT) {
  if (now < restartAt) return [];
  const oldestAllowed = now - CHAT_RETENTION_MS;
  const firstDay = Math.max(0, Math.floor((oldestAllowed - restartAt) / RIVAL_DAY_MS) - 1);
  const lastDay = Math.min(120, Math.floor((now - restartAt) / RIVAL_DAY_MS) + 1);
  const messages = [];
  for (const profile of DAILY_COMPETITORS) {
    for (let dayIndex = firstDay; dayIndex <= lastDay; dayIndex += 1) {
      if ((dayIndex + profile.chatOffset) % profile.chatEveryDays !== 0) continue;
      const createdAt = competitorSessionStart(profile, dayIndex, restartAt) + profile.chatMinute * RIVAL_MINUTE_MS;
      if (createdAt > now || createdAt < oldestAllowed) continue;
      const snapshot = simulateCompetitor(profile, createdAt, restartAt);
      const lineIndex = competitorActivityValue(profile.seed + 1201, dayIndex) % profile.chatLines.length;
      const text = String(profile.chatLines[lineIndex] || "今天先玩到这里").replaceAll("{level}", String(snapshot.level));
      messages.push({
        id: `chat-rv29-${profile.seed.toString(36)}-${dayIndex.toString(36)}-note`,
        accountId: profile.accountId,
        playerId: profile.playerId,
        name: profile.name,
        avatar: profile.avatar,
        text,
        createdAt,
        recalled: false,
        recalledAt: 0,
        mediaToken: "",
        imageMime: "",
        selectedCharacter: snapshot.selectedCharacter,
        unlockedCharacters: snapshot.unlockedCharacters,
        selectedSkin: snapshot.selectedSkin,
        coins: snapshot.coins,
        showCoins: snapshot.showCoins,
      });
    }
  }
  return messages.sort((a, b) => a.createdAt - b.createdAt);
}

function normalizeResets(resets) {
  return (Array.isArray(resets) ? resets : [])
    .map((item) => ({
      playerId: cleanPlayerId(item?.playerId),
      token: String(item?.token || "").replace(/[^a-z0-9-]/gi, "").slice(0, 90),
      requestedAt: Math.max(0, Number(item?.requestedAt) || 0),
    }))
    .filter((item) => item.playerId && item.token)
    .slice(-2000);
}

function normalizeGifts(gifts) {
  return (Array.isArray(gifts) ? gifts : [])
    .map((item) => ({
      id: String(item?.id || "").replace(/[^a-z0-9-]/gi, "").slice(0, 90),
      playerId: cleanPlayerId(item?.playerId),
      amount: Math.max(1, Math.min(10000, Math.round(Number(item?.amount) || 0))),
      credited: item?.credited === true,
      balanceAfter: Math.max(0, Math.min(1000000000, Math.round(Number(item?.balanceAfter) || 0))),
      createdAt: Math.max(0, Number(item?.createdAt) || 0),
    }))
    .filter((item) => item.id && item.playerId)
    .slice(-5000);
}

function newSeason(now, entries = []) {
  return {
    version: 3,
    seasonNumber: 1,
    startAt: now,
    endAt: now + SEASON_LENGTH_MS,
    entries: rank(entries),
    winners: [],
    resets: [],
    gifts: [],
  };
}

function normalizeState(value, now) {
  if (!value || typeof value !== "object") return newSeason(now);
  const startAt = Number(value.startAt) || now;
  const endAt = Number(value.endAt) > startAt ? Number(value.endAt) : startAt + SEASON_LENGTH_MS;
  return {
    version: 3,
    seasonNumber: Math.max(1, Math.round(Number(value.seasonNumber) || 1)),
    startAt,
    endAt,
    entries: rank(Array.isArray(value.entries) ? value.entries : []),
    winners: Array.isArray(value.winners)
      ? value.winners.filter((winner) => winner && cleanName(winner.name) && cleanPlayerId(winner.playerId)).slice(-26)
      : [],
    resets: normalizeResets(value.resets),
    gifts: normalizeGifts(value.gifts),
  };
}

async function loadState(binding, now) {
  const stored = await binding.get(SEASON_KEY, { type: "json" });
  if (stored) return { state: normalizeState(stored, now), dirty: false };
  return { state: newSeason(now), dirty: true };
}

function rollSeason(state, now) {
  let changed = false;
  let loops = 0;
  while (now >= state.endAt && loops < 60) {
    const winner = rank(state.entries)[0];
    if (winner) {
      state.winners.push({
        seasonNumber: state.seasonNumber,
        name: winner.name,
        playerId: winner.playerId,
        level: winner.level,
        score: winner.score,
        awardedAt: state.endAt,
      });
      state.winners = state.winners.slice(-26);
    }
    state.seasonNumber += 1;
    state.startAt = state.endAt;
    state.endAt = state.startAt + SEASON_LENGTH_MS;
    state.entries = [];
    changed = true;
    loops += 1;
  }
  return changed;
}

function publicPayload(state, playerId, rivalRestartAt = RIVAL_RESTART_AT) {
  let competitors = [];
  try {
    competitors = dailyCompetitorEntries(state, Date.now(), rivalRestartAt);
  } catch {
    competitors = [];
  }
  const ranked = rank([...state.entries, ...competitors]);
  const latestWinner = state.winners[state.winners.length - 1] || null;
  const reset = playerId ? state.resets.find((item) => item.playerId === playerId) : null;
  const gifts = playerId ? state.gifts.filter((item) => item.playerId === playerId) : [];
  return {
    shared: true,
    entries: ranked.map(({ playerId: rawPlayerId, ...entry }) => ({
      ...entry,
      inviteId: rawPlayerId.startsWith("rival-") ? "" : rawPlayerId,
      coins: entry.showCoins ? entry.coins : null,
    })),
    season: { number: state.seasonNumber, startAt: state.startAt, endAt: state.endAt },
    latestWinner: latestWinner ? {
      name: latestWinner.name,
      seasonNumber: latestWinner.seasonNumber,
      level: latestWinner.level,
      score: latestWinner.score,
      awardedAt: latestWinner.awardedAt,
    } : null,
    rewardCharacter: "doraemon",
    rewardUnlocked: Boolean(playerId && state.winners.some((winner) => winner.playerId === playerId)),
    resetRequest: reset ? { token: reset.token, requestedAt: reset.requestedAt } : null,
    gifts: gifts.map(({ playerId: _privateId, ...gift }) => gift),
  };
}

async function getLeaderboard(request, env) {
  if (!env.LEADERBOARD) return json({ entries: [], shared: false });
  try {
    const now = Date.now();
    const loaded = await loadState(env.LEADERBOARD, now);
    const rivalRestartAt = await loadRivalRestartAt(env.LEADERBOARD, now);
    const rolled = rollSeason(loaded.state, now);
    if (loaded.dirty || rolled) await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
    const playerId = cleanPlayerId(new URL(request.url).searchParams.get("playerId"));
    return json(publicPayload(loaded.state, playerId, rivalRestartAt));
  } catch {
    return json({ entries: [], shared: false });
  }
}

async function postLeaderboard(request, env) {
  if (!env.LEADERBOARD) return json({ entries: [], shared: false });
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }
  if (body?.action === "ackReset") {
    const playerId = cleanPlayerId(body?.playerId);
    const token = String(body?.token || "").replace(/[^a-z0-9-]/gi, "").slice(0, 90);
    if (!playerId || !token) return json({ error: "invalid_reset_ack" }, 400);
    try {
      const loaded = await loadState(env.LEADERBOARD, Date.now());
      loaded.state.resets = loaded.state.resets.filter((item) => item.playerId !== playerId || item.token !== token);
      await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
      return json({ ok: true });
    } catch {
      return json({ error: "reset_ack_failed" }, 500);
    }
  }
  const name = cleanName(body?.name);
  const playerId = cleanPlayerId(body?.playerId);
  const level = Math.round(Number(body?.level));
  const score = Math.round(Number(body?.score));
  const time = Number(body?.time);
  if (!name || !playerId || !Number.isFinite(level) || level < 1 || level > 20 || !Number.isFinite(score) || score < 0 || score > 100 || !Number.isFinite(time) || time < 0 || time > 3600) {
    return json({ error: "invalid_score" }, 400);
  }
  try {
    const now = Date.now();
    const loaded = await loadState(env.LEADERBOARD, now);
    const rivalRestartAt = await loadRivalRestartAt(env.LEADERBOARD, now);
    rollSeason(loaded.state, now);
    if (loaded.state.resets.some((item) => item.playerId === playerId)) {
      await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
      return json(publicPayload(loaded.state, playerId, rivalRestartAt));
    }
    const candidate = {
      name,
      playerId,
      level,
      score,
      time,
      coins: Math.max(0, Math.min(1000000000, Math.round(Number(body?.coins) || 0))),
      showCoins: body?.showCoins === true,
      avatar: cleanAvatar(body?.avatar),
      selectedCharacter: ACCOUNT_CHARACTERS.has(String(body?.selectedCharacter)) ? String(body.selectedCharacter) : "cloud",
      unlockedCharacters: cleanPublicCharacters(body?.unlockedCharacters),
      selectedSkin: ACCOUNT_SKINS.has(String(body?.selectedSkin)) ? String(body.selectedSkin) : "light",
      battleMatches: 0,
      battleWins: 0,
      battleDraws: 0,
      battlePoints: 0,
      battleBestScore: 0,
      battleCoinsEarned: 0,
      updatedAt: now,
    };
    const linkedAccount = await loadLinkedAccount(env.LEADERBOARD, playerId);
    if (linkedAccount) {
      const linkedGameData = sanitizeGameData(linkedAccount.gameData);
      Object.assign(candidate, {
        name: cleanName(linkedAccount.name) || candidate.name,
        coins: linkedGameData.walletCoins,
        showCoins: linkedAccount.showCoins === true,
        avatar: cleanAvatar(linkedAccount.avatar),
        selectedCharacter: linkedGameData.selectedCharacter,
        unlockedCharacters: linkedGameData.unlockedCharacters,
        selectedSkin: linkedGameData.selectedSkin,
        battleMatches: linkedGameData.battleMatches,
        battleWins: linkedGameData.battleWins,
        battleDraws: linkedGameData.battleDraws,
        battlePoints: linkedGameData.battlePoints,
        battleBestScore: linkedGameData.battleBestScore,
        battleCoinsEarned: linkedGameData.battleCoinsEarned,
      });
    }
    const index = loaded.state.entries.findIndex((entry) => entry.playerId === playerId);
    if (index >= 0) {
      const existing = loaded.state.entries[index];
      if (compareEntries(candidate, existing) < 0) loaded.state.entries[index] = candidate;
      else loaded.state.entries[index] = {
        ...existing,
        name: candidate.name,
        coins: candidate.coins,
        showCoins: candidate.showCoins,
        avatar: candidate.avatar,
        selectedCharacter: candidate.selectedCharacter,
        unlockedCharacters: candidate.unlockedCharacters,
        selectedSkin: candidate.selectedSkin,
      };
    } else {
      loaded.state.entries.push(candidate);
    }
    loaded.state.entries = rank(loaded.state.entries);
    await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
    return json(publicPayload(loaded.state, playerId, rivalRestartAt));
  } catch {
    return json({ entries: [], shared: false });
  }
}

function bytesToBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function base64UrlToBytes(value) {
  const normalized = String(value || "").replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function randomSecret(byteLength = 32) {
  const bytes = new Uint8Array(byteLength);
  globalThis.crypto.getRandomValues(bytes);
  return bytesToBase64Url(bytes);
}

async function sha256(value) {
  const digest = await globalThis.crypto.subtle.digest("SHA-256", new TextEncoder().encode(String(value || "")));
  return bytesToBase64Url(new Uint8Array(digest));
}

async function derivePasswordHash(password, salt) {
  const key = await globalThis.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(String(password || "")),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await globalThis.crypto.subtle.deriveBits({
    name: "PBKDF2",
    hash: "SHA-256",
    salt: base64UrlToBytes(salt),
    iterations: 100000,
  }, key, 256);
  return bytesToBase64Url(new Uint8Array(bits));
}

function normalizedAccountName(value) {
  return cleanName(value).normalize("NFKC").toLocaleLowerCase();
}

async function accountNameIndexKey(name) {
  return `cloud-jumper:account-name:${await sha256(normalizedAccountName(name))}`;
}

function accountRecordKey(accountId) {
  return `cloud-jumper:account:${accountId}`;
}

function accountSessionKey(tokenHash) {
  return `cloud-jumper:account-session:${tokenHash}`;
}

function playerAccountKey(playerId) {
  return `cloud-jumper:player-account:${playerId}`;
}

function sanitizeScoreMap(value, maximum = 100) {
  const source = value && typeof value === "object" ? value : {};
  const result = {};
  for (const [rawLevel, rawScore] of Object.entries(source)) {
    const level = Math.max(1, Math.min(20, Math.round(Number(rawLevel) || 1)));
    result[level] = Math.max(0, Math.min(maximum, Math.round(Number(rawScore) || 0)));
  }
  return result;
}

function cleanCoinLedgerText(value, maximum) {
  return String(value || "").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, maximum);
}

function sanitizeCoinLedger(value) {
  const byId = new Map();
  const maximumCreatedAt = Date.now() + 86400000;
  for (const raw of (Array.isArray(value) ? value : [])) {
    const id = String(raw?.id || "").replace(/[^a-z0-9_-]/gi, "").slice(0, 90);
    if (!id) continue;
    const amount = Math.max(-1000000000, Math.min(1000000000, Math.round(Number(raw?.amount) || 0)));
    const balanceAfter = Math.max(0, Math.min(1000000000, Math.round(Number(raw?.balanceAfter) || 0)));
    const createdAt = Math.max(0, Math.min(maximumCreatedAt, Math.round(Number(raw?.createdAt) || 0)));
    const type = String(raw?.type || "other").replace(/[^a-z0-9_-]/gi, "").slice(0, 32) || "other";
    const label = cleanCoinLedgerText(raw?.label, 42) || "金币变动";
    const detail = cleanCoinLedgerText(raw?.detail, 90);
    byId.set(id, { id, amount, balanceAfter, createdAt, type, label, detail });
  }
  const ordered = [...byId.values()].sort((a, b) => a.createdAt - b.createdAt || a.id.localeCompare(b.id));
  if (ordered.length <= COIN_LEDGER_LIMIT) return ordered;
  const opening = ordered.find((item) => item.type === "opening_balance");
  if (!opening) return ordered.slice(-COIN_LEDGER_LIMIT);
  return [opening, ...ordered.filter((item) => item.id !== opening.id).slice(-(COIN_LEDGER_LIMIT - 1))]
    .sort((a, b) => a.createdAt - b.createdAt || a.id.localeCompare(b.id));
}

function appendCoinLedger(gameData, transaction) {
  gameData.coinLedger = sanitizeCoinLedger([...(gameData.coinLedger || []), transaction]);
}

function sanitizeBattleRewardCredits(value) {
  const seen = new Set();
  const result = [];
  for (const raw of (Array.isArray(value) ? value : [])) {
    const id = String(raw?.id || "").replace(/[^a-z0-9-]/gi, "").slice(0, 90);
    if (!/^match-[a-z0-9-]{8,84}$/i.test(id) || seen.has(id)) continue;
    seen.add(id);
    result.push({ id, amount: Math.max(0, Math.min(500, Math.round(Number(raw?.amount) || 0))) });
  }
  return result.slice(-100);
}

function sanitizeAdminGiftCredits(value) {
  const seen = new Set();
  const result = [];
  for (const raw of (Array.isArray(value) ? value : [])) {
    const id = String(raw?.id || "").replace(/[^a-z0-9-]/gi, "").slice(0, 90);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    result.push({ id, amount: Math.max(1, Math.min(10000, Math.round(Number(raw?.amount) || 0))) });
  }
  return result.slice(-300);
}

function sanitizeGameData(value) {
  const data = value && typeof value === "object" ? value : {};
  const heartUpgradeLevel = Math.max(0, Math.min(2, Math.round(Number(data.heartUpgradeLevel) || (data.accountUpgraded === true ? 1 : 0))));
  const unlocked = [...new Set((Array.isArray(data.unlockedCharacters) ? data.unlockedCharacters : ["cloud"])
    .map(String)
    .filter((id) => ACCOUNT_CHARACTERS.has(id)))];
  if (!unlocked.includes("cloud")) unlocked.unshift("cloud");
  const selected = unlocked.includes(String(data.selectedCharacter)) ? String(data.selectedCharacter) : "cloud";
  const completed = [...new Set((Array.isArray(data.completedLevels) ? data.completedLevels : [])
    .map((level) => Math.max(1, Math.min(20, Math.round(Number(level) || 1)))))]
    .sort((a, b) => a - b);
  return {
    walletCoins: Math.max(0, Math.min(1000000000, Math.round(Number(data.walletCoins) || 0))),
    coinLedger: sanitizeCoinLedger(data.coinLedger),
    chatLastReadAt: Math.max(0, Math.min(Date.now() + 86400000, Math.round(Number(data.chatLastReadAt) || 0))),
    accountUpgraded: heartUpgradeLevel >= 1,
    heartUpgradeLevel,
    battleMatches: Math.max(0, Math.min(1000000, Math.round(Number(data.battleMatches) || 0))),
    battleWins: Math.max(0, Math.min(1000000, Math.round(Number(data.battleWins) || 0))),
    battleDraws: Math.max(0, Math.min(1000000, Math.round(Number(data.battleDraws) || 0))),
    battlePoints: Math.max(0, Math.min(1000000000, Math.round(Number(data.battlePoints) || 0))),
    battleBestScore: Math.max(0, Math.min(100000, Math.round(Number(data.battleBestScore) || 0))),
    battleCoinsEarned: Math.max(0, Math.min(1000000000, Math.round(Number(data.battleCoinsEarned) || 0))),
    battleLastRecordedAt: Math.max(0, Math.min(Date.now() + 60000, Math.round(Number(data.battleLastRecordedAt) || 0))),
    recentBattleMatchIds: [...new Set((Array.isArray(data.recentBattleMatchIds) ? data.recentBattleMatchIds : [])
      .map((id) => String(id).replace(/[^a-z0-9-]/gi, "").slice(0, 90))
      .filter((id) => /^match-[a-z0-9-]{8,84}$/i.test(id)))].slice(-100),
    battleRewardCredits: sanitizeBattleRewardCredits(data.battleRewardCredits),
    unlockedCharacters: unlocked,
    selectedCharacter: selected,
    selectedSkin: ACCOUNT_SKINS.has(String(data.selectedSkin)) ? String(data.selectedSkin) : "light",
    highestUnlocked: Math.max(1, Math.min(20, Math.round(Number(data.highestUnlocked) || 1)), ...completed.map((level) => Math.min(20, level + 1))),
    completedLevels: completed,
    levelBest: sanitizeScoreMap(data.levelBest, 100),
    levelAttempts: sanitizeScoreMap(data.levelAttempts, 100000),
    bestCampaign: Math.max(0, Math.min(2000, Math.round(Number(data.bestCampaign) || 0))),
    yunqingReserved: data.yunqingReserved === true,
    yunqingDeposit: data.yunqingReserved === true ? YUNQING_RESERVATION_PRICE : 0,
    dailySunUsedDate: /^\d{4}-\d{2}-\d{2}$/.test(String(data.dailySunUsedDate || "")) ? String(data.dailySunUsedDate) : "",
    redeemedLeosince: data.redeemedLeosince === true,
    claimedAdminGifts: [...new Set((Array.isArray(data.claimedAdminGifts) ? data.claimedAdminGifts : [])
      .map((id) => String(id).replace(/[^a-z0-9-]/gi, "").slice(0, 90))
      .filter(Boolean))].slice(-300),
    adminGiftCredits: sanitizeAdminGiftCredits(data.adminGiftCredits),
    seenAnnouncements: [...new Set((Array.isArray(data.seenAnnouncements) ? data.seenAnnouncements : [])
      .map((id) => String(id).replace(/[^a-z0-9-]/gi, "").slice(0, 90))
      .filter(Boolean))].slice(-100),
    soundOn: data.soundOn !== false,
  };
}

function mergeAccountGameData(currentValue, incomingValue) {
  const current = sanitizeGameData(currentValue);
  const incoming = sanitizeGameData(incomingValue);
  incoming.coinLedger = sanitizeCoinLedger([...incoming.coinLedger, ...current.coinLedger]);
  incoming.chatLastReadAt = Math.max(current.chatLastReadAt, incoming.chatLastReadAt);
  incoming.heartUpgradeLevel = Math.max(current.heartUpgradeLevel, incoming.heartUpgradeLevel);
  incoming.accountUpgraded = incoming.heartUpgradeLevel >= 1;
  incoming.battleMatches = current.battleMatches;
  incoming.battleWins = current.battleWins;
  incoming.battleDraws = current.battleDraws;
  incoming.battlePoints = current.battlePoints;
  incoming.battleBestScore = current.battleBestScore;
  incoming.battleCoinsEarned = current.battleCoinsEarned;
  incoming.battleLastRecordedAt = current.battleLastRecordedAt;
  incoming.recentBattleMatchIds = [...current.recentBattleMatchIds];
  // These IDs prove that a server reward was already paid. Older browser snapshots do not
  // carry battleRewardCredits, so adding the amount again here minted coins on every refresh.
  // Preserve the IDs, but keep the submitted balance unchanged: the reward is already in it.
  incoming.battleRewardCredits = [...incoming.battleRewardCredits, ...current.battleRewardCredits];
  incoming.adminGiftCredits = [...incoming.adminGiftCredits, ...current.adminGiftCredits];
  incoming.claimedAdminGifts = [...new Set([...current.claimedAdminGifts, ...incoming.claimedAdminGifts])].slice(-300);
  incoming.seenAnnouncements = [...new Set([...current.seenAnnouncements, ...incoming.seenAnnouncements])].slice(-100);
  incoming.redeemedLeosince = current.redeemedLeosince || incoming.redeemedLeosince;
  if (current.yunqingReserved) {
    incoming.yunqingReserved = true;
    incoming.yunqingDeposit = YUNQING_RESERVATION_PRICE;
  }
  if (current.dailySunUsedDate > incoming.dailySunUsedDate) incoming.dailySunUsedDate = current.dailySunUsedDate;
  incoming.battleRewardCredits = sanitizeBattleRewardCredits(incoming.battleRewardCredits);
  incoming.adminGiftCredits = sanitizeAdminGiftCredits(incoming.adminGiftCredits);
  return incoming;
}

function emptyGameData() {
  return sanitizeGameData({});
}

async function createAccountSession(binding, accountId, revision = 1) {
  const token = randomSecret(36);
  const tokenHash = await sha256(token);
  await binding.put(accountSessionKey(tokenHash), JSON.stringify({ accountId, revision: Math.max(1, Number(revision) || 1), expiresAt: Date.now() + ACCOUNT_SESSION_MS }));
  return token;
}

async function authenticatedAccount(request, binding) {
  const authorization = String(request.headers.get("authorization") || "");
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7).trim() : "";
  if (!token) return null;
  const tokenHash = await sha256(token);
  const session = await binding.get(accountSessionKey(tokenHash), { type: "json" });
  if (!session || Number(session.expiresAt) <= Date.now()) return null;
  const account = await binding.get(accountRecordKey(String(session.accountId || "")), { type: "json" });
  if (!account) return null;
  if (Math.max(1, Number(session.revision) || 1) !== Math.max(1, Number(account.revision) || 1)) return null;
  return { token, tokenHash, session, account };
}

function cleanChatId(value) {
  const id = String(value || "").trim().slice(0, 90);
  return /^chat-[a-z0-9_-]{12,90}$/i.test(id) ? id : "";
}

function cleanChatText(value) {
  return String(value || "").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, 240);
}

function cleanChatToken(value) {
  const token = String(value || "").trim().slice(0, 80);
  return /^[a-z0-9_-]{12,80}$/i.test(token) ? token : "";
}

function normalizeChatMessage(value, now) {
  if (!value || typeof value !== "object") return null;
  const id = cleanChatId(value.id);
  const accountId = String(value.accountId || "").trim().slice(0, 80);
  const createdAt = Math.max(0, Number(value.createdAt) || 0);
  if (!id || !accountId || !cleanName(value.name) || !createdAt || createdAt < now - CHAT_RETENTION_MS) return null;
  const recalled = value.recalled === true;
  const mediaToken = recalled ? "" : cleanChatToken(value.mediaToken);
  const imageMime = recalled || !mediaToken || !["image/jpeg", "image/png", "image/webp"].includes(String(value.imageMime))
    ? ""
    : String(value.imageMime);
  return {
    id,
    accountId,
    playerId: cleanPlayerId(value.playerId),
    name: cleanName(value.name),
    avatar: cleanAvatar(value.avatar),
    text: recalled ? "" : cleanChatText(value.text),
    createdAt,
    recalled,
    recalledAt: recalled ? Math.max(createdAt, Number(value.recalledAt) || createdAt) : 0,
    mediaToken: imageMime ? mediaToken : "",
    imageMime,
    selectedCharacter: ACCOUNT_CHARACTERS.has(String(value.selectedCharacter)) ? String(value.selectedCharacter) : "cloud",
    unlockedCharacters: cleanPublicCharacters(value.unlockedCharacters),
    selectedSkin: ACCOUNT_SKINS.has(String(value.selectedSkin)) ? String(value.selectedSkin) : "light",
    coins: Math.max(0, Math.min(1000000000, Math.round(Number(value.coins) || 0))),
    showCoins: value.showCoins === true,
  };
}

async function loadChatMessages(binding, now = Date.now()) {
  const stored = await binding.get(CHAT_INDEX_KEY, { type: "json" });
  const source = Array.isArray(stored) ? stored : (Array.isArray(stored?.messages) ? stored.messages : []);
  return source
    .map((message) => normalizeChatMessage(message, now))
    .filter(Boolean)
    .sort((a, b) => a.createdAt - b.createdAt)
    .slice(-CHAT_MAX_MESSAGES);
}

async function saveChatMessages(binding, messages) {
  await binding.put(CHAT_INDEX_KEY, JSON.stringify({ version: 1, messages: messages.slice(-CHAT_MAX_MESSAGES) }));
}

function publicChatMessage(message, accountId, now) {
  const mine = String(message.accountId) === String(accountId);
  const publicPlayerId = cleanPlayerId(message.playerId);
  return {
    id: message.id,
    name: message.name,
    avatar: message.avatar,
    text: message.recalled ? "" : message.text,
    createdAt: message.createdAt,
    recalled: message.recalled === true,
    mine,
    inviteId: publicPlayerId.startsWith("rival-") ? "" : publicPlayerId,
    canRecall: mine && !message.recalled && now - message.createdAt <= CHAT_RECALL_MS,
    imageUrl: !message.recalled && message.imageMime && message.mediaToken
      ? `/api/chat-image?id=${encodeURIComponent(message.id)}&key=${encodeURIComponent(message.mediaToken)}`
      : "",
    profile: {
      selectedCharacter: message.selectedCharacter,
      unlockedCharacters: message.unlockedCharacters,
      selectedSkin: message.selectedSkin,
      coins: message.showCoins ? message.coins : null,
      showCoins: message.showCoins === true,
    },
  };
}

async function handleChat(request, env) {
  if (!env.LEADERBOARD) return json({ error: "kv_not_bound" }, 503);
  const authenticated = await authenticatedAccount(request, env.LEADERBOARD);
  if (!authenticated) return json({ error: "account_unauthorized" }, 401);
  const account = authenticated.account;
  const now = Date.now();

  if (request.method === "GET") {
    const storedMessages = await loadChatMessages(env.LEADERBOARD, now);
    const rivalRestartAt = await loadRivalRestartAt(env.LEADERBOARD, now);
    let competitorMessages = [];
    try {
      competitorMessages = dailyCompetitorChatMessages(now, rivalRestartAt);
    } catch {
      competitorMessages = [];
    }
    const messages = [...storedMessages, ...competitorMessages]
      .sort((a, b) => a.createdAt - b.createdAt)
      .slice(-CHAT_MAX_MESSAGES);
    const gameData = sanitizeGameData(account.gameData);
    const summaryOnly = new URL(request.url).searchParams.get("summary") === "1";
    return json({
      ok: true,
      serverTime: now,
      chatLastReadAt: gameData.chatLastReadAt,
      messages: summaryOnly
        ? messages.map((message) => ({
          id: message.id,
          createdAt: message.createdAt,
          recalled: message.recalled === true,
          mine: String(message.accountId) === String(account.id),
        }))
        : messages.map((message) => publicChatMessage(message, account.id, now)),
    });
  }
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }
  const action = String(body?.action || "");
  const messages = await loadChatMessages(env.LEADERBOARD, now);

  if (action === "send") {
    const text = cleanChatText(body?.text);
    const imageData = String(body?.imageData || "");
    let imageMime = "";
    let imageBase64 = "";
    if (imageData) {
      if (imageData.length > 260000) return json({ error: "image_too_large" }, 413);
      const match = /^data:(image\/(?:jpeg|png|webp));base64,([a-z0-9+/=]+)$/i.exec(imageData);
      if (!match) return json({ error: "invalid_image" }, 400);
      imageMime = match[1].toLowerCase();
      imageBase64 = match[2];
      if (imageBase64.length > 255000) return json({ error: "image_too_large" }, 413);
    }
    if (!text && !imageBase64) return json({ error: "empty_message" }, 400);

    const rateKey = `${CHAT_RATE_PREFIX}${account.id}`;
    const previousSend = Number(await env.LEADERBOARD.get(rateKey)) || 0;
    if (previousSend && now - previousSend < 900) return json({ error: "chat_rate_limited" }, 429);
    await env.LEADERBOARD.put(rateKey, String(now), { expirationTtl: 60 });

    const id = `chat-${randomSecret(20)}`.slice(0, 90);
    const mediaToken = imageBase64 ? randomSecret(22) : "";
    if (imageBase64) {
      await env.LEADERBOARD.put(`${CHAT_IMAGE_PREFIX}${id}`, imageBase64, { expirationTtl: CHAT_RETENTION_SECONDS });
    }
    const gameData = sanitizeGameData(account.gameData);
    const message = {
      id,
      accountId: account.id,
      playerId: account.playerId,
      name: account.name,
      avatar: cleanAvatar(account.avatar),
      text,
      createdAt: now,
      recalled: false,
      recalledAt: 0,
      mediaToken,
      imageMime,
      selectedCharacter: gameData.selectedCharacter,
      unlockedCharacters: gameData.unlockedCharacters,
      selectedSkin: gameData.selectedSkin,
      coins: gameData.walletCoins,
      showCoins: account.showCoins === true,
    };
    messages.push(message);
    await saveChatMessages(env.LEADERBOARD, messages);
    return json({ ok: true, message: publicChatMessage(message, account.id, now) }, 201);
  }

  if (action === "recall") {
    const messageId = cleanChatId(body?.messageId);
    const message = messages.find((item) => item.id === messageId);
    if (!message) return json({ error: "message_not_found" }, 404);
    if (String(message.accountId) !== String(account.id)) return json({ error: "not_message_owner" }, 403);
    if (message.recalled) return json({ ok: true, message: publicChatMessage(message, account.id, now) });
    if (now - message.createdAt > CHAT_RECALL_MS) return json({ error: "recall_expired" }, 409);
    if (message.imageMime && typeof env.LEADERBOARD.delete === "function") {
      await env.LEADERBOARD.delete(`${CHAT_IMAGE_PREFIX}${message.id}`);
    }
    message.text = "";
    message.recalled = true;
    message.recalledAt = now;
    message.mediaToken = "";
    message.imageMime = "";
    await saveChatMessages(env.LEADERBOARD, messages);
    return json({ ok: true, message: publicChatMessage(message, account.id, now) });
  }

  return json({ error: "unknown_action" }, 400);
}

async function getChatImage(request, env) {
  if (!env.LEADERBOARD) return new Response("Not found", { status: 404 });
  const url = new URL(request.url);
  const id = cleanChatId(url.searchParams.get("id"));
  const key = cleanChatToken(url.searchParams.get("key"));
  if (!id || !key) return new Response("Not found", { status: 404 });
  const messages = await loadChatMessages(env.LEADERBOARD, Date.now());
  const message = messages.find((item) => item.id === id && item.mediaToken === key && !item.recalled && item.imageMime);
  if (!message) return new Response("Not found", { status: 404 });
  const base64 = await env.LEADERBOARD.get(`${CHAT_IMAGE_PREFIX}${id}`);
  if (!base64) return new Response("Not found", { status: 404 });
  try {
    const binary = atob(String(base64));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return new Response(bytes, {
      headers: {
        "content-type": message.imageMime,
        "cache-control": "private, max-age=60",
        "x-content-type-options": "nosniff",
        "content-security-policy": "default-src 'none'",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

function accountPayload(account, token = "") {
  return {
    ok: true,
    token: token || undefined,
    account: {
      id: account.id,
      name: account.name,
      playerId: account.playerId,
      showCoins: account.showCoins === true,
      avatar: cleanAvatar(account.avatar),
      gameData: sanitizeGameData(account.gameData),
      createdAt: Number(account.createdAt) || 0,
      updatedAt: Number(account.updatedAt) || 0,
    },
  };
}

async function syncAccountRanking(binding, account) {
  const loaded = await loadState(binding, Date.now());
  if (loaded.state.resets.some((item) => item.playerId === account.playerId)) return;
  const index = loaded.state.entries.findIndex((entry) => entry.playerId === account.playerId);
  const gameData = sanitizeGameData(account.gameData);
  if (index >= 0) {
    loaded.state.entries[index] = {
      ...loaded.state.entries[index],
      name: account.name,
      coins: gameData.walletCoins,
      showCoins: account.showCoins === true,
      avatar: cleanAvatar(account.avatar),
      selectedCharacter: gameData.selectedCharacter,
      unlockedCharacters: gameData.unlockedCharacters,
      selectedSkin: gameData.selectedSkin,
      battleMatches: gameData.battleMatches,
      battleWins: gameData.battleWins,
      battleDraws: gameData.battleDraws,
      battlePoints: gameData.battlePoints,
      battleBestScore: gameData.battleBestScore,
      battleCoinsEarned: gameData.battleCoinsEarned,
      updatedAt: Date.now(),
    };
  } else {
    loaded.state.entries.push({
      name: account.name,
      playerId: account.playerId,
      level: 1,
      score: 0,
      time: 0,
      coins: gameData.walletCoins,
      showCoins: account.showCoins === true,
      avatar: cleanAvatar(account.avatar),
      selectedCharacter: gameData.selectedCharacter,
      unlockedCharacters: gameData.unlockedCharacters,
      selectedSkin: gameData.selectedSkin,
      battleMatches: gameData.battleMatches,
      battleWins: gameData.battleWins,
      battleDraws: gameData.battleDraws,
      battlePoints: gameData.battlePoints,
      battleBestScore: gameData.battleBestScore,
      battleCoinsEarned: gameData.battleCoinsEarned,
      updatedAt: Date.now(),
    });
  }
  loaded.state.entries = rank(loaded.state.entries);
  await binding.put(SEASON_KEY, JSON.stringify(loaded.state));
}

async function loadYunqingReservations(binding) {
  const stored = await binding.get(YUNQING_RESERVATIONS_KEY, { type: "json" });
  const source = Array.isArray(stored) ? stored : (Array.isArray(stored?.reservations) ? stored.reservations : []);
  const unique = new Map();
  for (const item of source) {
    const accountId = String(item?.accountId || "").trim().slice(0, 80);
    if (!accountId || unique.has(accountId)) continue;
    unique.set(accountId, {
      accountId,
      playerId: cleanPlayerId(item?.playerId),
      name: cleanName(item?.name),
      createdAt: Math.max(0, Number(item?.createdAt) || 0),
    });
  }
  return [...unique.values()].sort((a, b) => a.createdAt - b.createdAt).slice(0, YUNQING_RESERVATION_LIMIT);
}

async function saveYunqingReservations(binding, reservations) {
  await binding.put(YUNQING_RESERVATIONS_KEY, JSON.stringify({ version: 1, reservations: reservations.slice(0, YUNQING_RESERVATION_LIMIT) }));
}

function yunqingStorePayload(reservations, account, now = Date.now()) {
  return {
    unlockAt: YUNQING_UNLOCK_AT,
    unlockedForSale: now >= YUNQING_UNLOCK_AT,
    reservationPrice: YUNQING_RESERVATION_PRICE,
    reservationLimit: YUNQING_RESERVATION_LIMIT,
    reservationCount: reservations.length,
    reserved: reservations.some((item) => String(item.accountId) === String(account.id)) || sanitizeGameData(account.gameData).yunqingReserved,
  };
}

async function handleAccount(request, env) {
  if (!env.LEADERBOARD) return json({ error: "kv_not_bound" }, 503);
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }
  const action = String(body?.action || "");

  if (action === "register") {
    const name = cleanName(body?.name);
    const password = String(body?.password || "");
    const confirmPassword = String(body?.confirmPassword || "");
    if (name.length < 1 || password.length < 4 || password.length > 64 || password !== confirmPassword) return json({ error: "invalid_registration" }, 400);
    if (RESERVED_COMPETITOR_NAMES.has(name.toLocaleLowerCase())) return json({ error: "name_taken" }, 409);
    const nameIndexKey = await accountNameIndexKey(name);
    if (await env.LEADERBOARD.get(nameIndexKey)) return json({ error: "name_taken" }, 409);
    const now = Date.now();
    const accountId = `acct-${randomSecret(18)}`.slice(0, 80);
    let playerId = cleanPlayerId(body?.playerId) || `player-${randomSecret(22)}`.slice(0, 80);
    if (await env.LEADERBOARD.get(playerAccountKey(playerId))) playerId = `player-${randomSecret(22)}`.slice(0, 80);
    const salt = randomSecret(18);
    const account = {
      version: 1,
      revision: 1,
      id: accountId,
      name,
      normalizedName: normalizedAccountName(name),
      playerId,
      passwordSalt: salt,
      passwordHash: await derivePasswordHash(password, salt),
      showCoins: body?.showCoins === true,
      avatar: cleanAvatar(body?.avatar),
      gameData: sanitizeGameData(body?.gameData),
      createdAt: now,
      updatedAt: now,
    };
    await env.LEADERBOARD.put(accountRecordKey(accountId), JSON.stringify(account));
    await env.LEADERBOARD.put(nameIndexKey, accountId);
    await env.LEADERBOARD.put(playerAccountKey(playerId), accountId);
    const token = await createAccountSession(env.LEADERBOARD, accountId, account.revision);
    await syncAccountRanking(env.LEADERBOARD, account);
    return json(accountPayload(account, token), 201);
  }

  if (action === "login") {
    const name = cleanName(body?.name);
    const password = String(body?.password || "");
    if (!name || !password) return json({ error: "invalid_login" }, 400);
    const accountId = await env.LEADERBOARD.get(await accountNameIndexKey(name));
    if (!accountId) return json({ error: "invalid_credentials" }, 401);
    const account = await env.LEADERBOARD.get(accountRecordKey(String(accountId)), { type: "json" });
    if (!account) return json({ error: "invalid_credentials" }, 401);
    const candidateHash = await derivePasswordHash(password, account.passwordSalt);
    if (!securePasswordMatch(candidateHash, account.passwordHash)) return json({ error: "invalid_credentials" }, 401);
    account.updatedAt = Date.now();
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    const token = await createAccountSession(env.LEADERBOARD, account.id, account.revision);
    await syncAccountRanking(env.LEADERBOARD, account);
    return json(accountPayload(account, token));
  }

  const authenticated = await authenticatedAccount(request, env.LEADERBOARD);
  if (!authenticated) return json({ error: "account_unauthorized" }, 401);
  const account = authenticated.account;

  if (action === "storeStatus") {
    const reservations = await loadYunqingReservations(env.LEADERBOARD);
    return json({ ...accountPayload(account), store: yunqingStorePayload(reservations, account) });
  }
  if (action === "reserveYunqing") {
    const now = Date.now();
    if (now >= YUNQING_UNLOCK_AT) return json({ error: "reservation_closed" }, 409);
    const reservations = await loadYunqingReservations(env.LEADERBOARD);
    const existing = reservations.find((item) => String(item.accountId) === String(account.id));
    if (existing) {
      const gameData = sanitizeGameData(account.gameData);
      const ledgerId = `reservation-yunqing-${account.id}`.slice(0, 90);
      let changed = false;
      if (!gameData.yunqingReserved) {
        gameData.yunqingReserved = true;
        gameData.yunqingDeposit = YUNQING_RESERVATION_PRICE;
        changed = true;
      }
      if (!gameData.coinLedger.some((item) => item.id === ledgerId)) {
        appendCoinLedger(gameData, {
          id: ledgerId,
          amount: -YUNQING_RESERVATION_PRICE,
          balanceAfter: gameData.walletCoins,
          createdAt: Number(existing.createdAt) || now,
          type: "reservation",
          label: "预约角色：云青",
          detail: "限量抢先预约订金",
        });
        changed = true;
      }
      if (changed) {
        account.gameData = sanitizeGameData(gameData);
        account.updatedAt = now;
        await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
      }
      return json({ ...accountPayload(account), store: yunqingStorePayload(reservations, account, now) });
    }
    if (reservations.length >= YUNQING_RESERVATION_LIMIT) return json({ error: "reservation_full" }, 409);
    const gameData = sanitizeGameData(account.gameData);
    if (gameData.walletCoins < YUNQING_RESERVATION_PRICE) return json({ error: "insufficient_coins" }, 409);
    gameData.walletCoins -= YUNQING_RESERVATION_PRICE;
    gameData.yunqingReserved = true;
    gameData.yunqingDeposit = YUNQING_RESERVATION_PRICE;
    appendCoinLedger(gameData, {
      id: `reservation-yunqing-${account.id}`.slice(0, 90),
      amount: -YUNQING_RESERVATION_PRICE,
      balanceAfter: gameData.walletCoins,
      createdAt: now,
      type: "reservation",
      label: "预约角色：云青",
      detail: "限量抢先预约订金",
    });
    account.gameData = sanitizeGameData(gameData);
    account.updatedAt = now;
    reservations.push({ accountId: account.id, playerId: account.playerId, name: account.name, createdAt: now });
    await saveYunqingReservations(env.LEADERBOARD, reservations);
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    await syncAccountRanking(env.LEADERBOARD, account);
    return json({ ...accountPayload(account), store: yunqingStorePayload(reservations, account, now) });
  }

  if (action === "recordBattleResult") {
    const now = Date.now();
    const matchId = String(body?.matchId || "").replace(/[^a-z0-9-]/gi, "").slice(0, 90);
    if (!/^match-[a-z0-9-]{8,84}$/i.test(matchId)) return json({ error: "invalid_battle_result" }, 400);
    const gameData = sanitizeGameData(account.gameData);
    if (gameData.recentBattleMatchIds.includes(matchId)) {
      return json({ ...accountPayload(account), battleReward: 0, battlePointsAwarded: 0, alreadyRecorded: true });
    }
    if (gameData.battleLastRecordedAt && now - gameData.battleLastRecordedAt < 45000) {
      return json({ error: "battle_result_too_soon" }, 429);
    }
    const score = Math.max(0, Math.min(100000, Math.round(Number(body?.score) || 0)));
    const coinUnits = Math.max(0, Math.min(2000, Math.round(Number(body?.coinUnits) || 0)));
    const bestCombo = Math.max(0, Math.min(999, Math.round(Number(body?.bestCombo) || 0)));
    const won = body?.won === true;
    const tied = !won && body?.tied === true;
    const battleReward = Math.floor(coinUnits / 4);
    const battlePointsAwarded = score + (won ? 60 : tied ? 25 : 10) + Math.min(25, bestCombo);
    gameData.walletCoins = Math.min(1000000000, gameData.walletCoins + battleReward);
    gameData.battleMatches += 1;
    if (won) gameData.battleWins += 1;
    if (tied) gameData.battleDraws += 1;
    gameData.battlePoints = Math.min(1000000000, gameData.battlePoints + battlePointsAwarded);
    gameData.battleBestScore = Math.max(gameData.battleBestScore, score);
    gameData.battleCoinsEarned = Math.min(1000000000, gameData.battleCoinsEarned + battleReward);
    gameData.battleLastRecordedAt = now;
    gameData.recentBattleMatchIds.push(matchId);
    gameData.recentBattleMatchIds = gameData.recentBattleMatchIds.slice(-100);
    gameData.battleRewardCredits.push({ id: matchId, amount: battleReward });
    gameData.battleRewardCredits = gameData.battleRewardCredits.slice(-100);
    if (battleReward > 0) {
      appendCoinLedger(gameData, {
        id: `battle-reward-${matchId}`.slice(0, 90),
        amount: battleReward,
        balanceAfter: gameData.walletCoins,
        createdAt: now,
        type: "battle_reward",
        label: "好友对战奖励",
        detail: `本局拾取 ${coinUnits} 枚对战金币，每 4 枚兑换 1 金币`,
      });
    }
    account.gameData = sanitizeGameData(gameData);
    account.updatedAt = now;
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    await syncAccountRanking(env.LEADERBOARD, account);
    return json({ ...accountPayload(account), battleReward, battlePointsAwarded, alreadyRecorded: false });
  }

  if (action === "restore") return json(accountPayload(account));
  if (action === "updateProfile") {
    const name = cleanName(body?.name);
    if (!name) return json({ error: "invalid_profile" }, 400);
    const oldNormalizedName = normalizedAccountName(account.name);
    const newNormalizedName = normalizedAccountName(name);
    if (newNormalizedName !== oldNormalizedName) {
      const newIndexKey = await accountNameIndexKey(name);
      const existingAccountId = await env.LEADERBOARD.get(newIndexKey);
      if (existingAccountId && String(existingAccountId) !== String(account.id)) return json({ error: "name_taken" }, 409);
      await env.LEADERBOARD.put(newIndexKey, account.id);
      const oldIndexKey = await accountNameIndexKey(account.name);
      if (typeof env.LEADERBOARD.delete === "function") await env.LEADERBOARD.delete(oldIndexKey);
      else await env.LEADERBOARD.put(oldIndexKey, "");
    }
    account.name = name;
    account.normalizedName = newNormalizedName;
    account.avatar = cleanAvatar(body?.avatar);
    account.gameData = mergeAccountGameData(account.gameData, body?.gameData ?? account.gameData);
    account.showCoins = body?.showCoins === true;
    account.updatedAt = Date.now();
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    await syncAccountRanking(env.LEADERBOARD, account);
    return json(accountPayload(account));
  }
  if (action === "save") {
    const state = await loadState(env.LEADERBOARD, Date.now());
    if (state.state.resets.some((item) => item.playerId === account.playerId)) return json({ error: "account_reset_pending" }, 409);
    account.gameData = mergeAccountGameData(account.gameData, body?.gameData);
    account.showCoins = body?.showCoins === true;
    account.updatedAt = Date.now();
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    await syncAccountRanking(env.LEADERBOARD, account);
    return json(accountPayload(account));
  }
  if (action === "logout") {
    if (typeof env.LEADERBOARD.delete === "function") await env.LEADERBOARD.delete(accountSessionKey(authenticated.tokenHash));
    else await env.LEADERBOARD.put(accountSessionKey(authenticated.tokenHash), JSON.stringify({ accountId: "", expiresAt: 0 }));
    return json({ ok: true });
  }
  return json({ error: "unknown_action" }, 400);
}

async function resetLinkedAccount(binding, playerId) {
  const accountId = await binding.get(playerAccountKey(playerId));
  if (!accountId) return false;
  const account = await binding.get(accountRecordKey(String(accountId)), { type: "json" });
  if (!account) return false;
  account.gameData = emptyGameData();
  account.showCoins = false;
  account.revision = Math.max(1, Number(account.revision) || 1) + 1;
  account.updatedAt = Date.now();
  await binding.put(accountRecordKey(account.id), JSON.stringify(account));
  const reservations = await loadYunqingReservations(binding);
  const remainingReservations = reservations.filter((item) => String(item.accountId) !== String(account.id));
  if (remainingReservations.length !== reservations.length) await saveYunqingReservations(binding, remainingReservations);
  return true;
}

async function loadLinkedAccount(binding, playerId) {
  const accountId = await binding.get(playerAccountKey(playerId));
  if (!accountId) return null;
  return binding.get(accountRecordKey(String(accountId)), { type: "json" });
}

function updateRankingEntryFromAccount(entry, account, now = Date.now()) {
  if (!entry || !account) return entry;
  const gameData = sanitizeGameData(account.gameData);
  Object.assign(entry, {
    name: cleanName(account.name) || entry.name,
    coins: gameData.walletCoins,
    showCoins: account.showCoins === true,
    avatar: cleanAvatar(account.avatar),
    selectedCharacter: gameData.selectedCharacter,
    unlockedCharacters: gameData.unlockedCharacters,
    selectedSkin: gameData.selectedSkin,
    battleMatches: gameData.battleMatches,
    battleWins: gameData.battleWins,
    battleDraws: gameData.battleDraws,
    battlePoints: gameData.battlePoints,
    battleBestScore: gameData.battleBestScore,
    battleCoinsEarned: gameData.battleCoinsEarned,
    updatedAt: now,
  });
  return entry;
}

async function setLinkedAccountCoins(binding, playerId, amount, now, options = {}) {
  const accountId = await binding.get(playerAccountKey(playerId));
  if (!accountId) return null;
  const recordKey = accountRecordKey(String(accountId));
  const rawAccount = await binding.get(recordKey);
  if (!rawAccount) return null;
  const target = Math.max(0, Math.min(1000000000, Math.round(Number(amount) || 0)));
  const walletPattern = /(\"walletCoins\"\s*:\s*)(-?\d+(?:\.\d+)?)/;
  const walletMatch = walletPattern.exec(String(rawAccount));
  if (!walletMatch) return null;
  const previousBalance = Math.max(0, Math.min(1000000000, Math.round(Number(walletMatch[2]) || 0)));
  const updatedAccount = String(rawAccount).replace(walletPattern, (_match, prefix) => `${prefix}${target}`);
  await binding.put(recordKey, updatedAccount);
  return { previousBalance, balanceAfter: target, adjustedAt: now, label: cleanCoinLedgerText(options.label, 42) };
}

async function creditLinkedAccount(binding, playerId, giftId, amount, now) {
  const account = await loadLinkedAccount(binding, playerId);
  if (!account) return null;
  const gameData = sanitizeGameData(account.gameData);
  if (!gameData.adminGiftCredits.some((credit) => credit.id === giftId)) {
    gameData.walletCoins = Math.min(1000000000, gameData.walletCoins + amount);
    gameData.adminGiftCredits.push({ id: giftId, amount });
  }
  const ledgerId = `admin-gift-${giftId}`.slice(0, 90);
  if (!gameData.coinLedger.some((item) => item.id === ledgerId)) {
    appendCoinLedger(gameData, {
      id: ledgerId,
      amount,
      balanceAfter: gameData.walletCoins,
      createdAt: now,
      type: "admin_gift",
      label: "管理员赠送金币",
      detail: "后台礼物已到账",
    });
  }
  account.gameData = sanitizeGameData(gameData);
  account.updatedAt = now;
  await binding.put(accountRecordKey(account.id), JSON.stringify(account));
  return account;
}

function securePasswordMatch(supplied, expected) {
  const left = String(supplied || "");
  const right = String(expected || "");
  let difference = left.length ^ right.length;
  const length = Math.max(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    difference |= (left.charCodeAt(index) || 0) ^ (right.charCodeAt(index) || 0);
  }
  return difference === 0;
}

function isAdminRequest(request, env) {
  const expected = String(env.ADMIN_PASSWORD || "2026");
  return securePasswordMatch(request.headers.get("x-admin-password"), expected);
}

function adminPayload(state, message = "") {
  const entries = rank(state.entries);
  return {
    ok: true,
    message,
    stats: {
      totalPlayers: entries.length,
      challengedPlayers: entries.filter((entry) => entry.score > 0 || entry.time > 0).length,
      passedPlayers: entries.filter((entry) => entry.score >= 100).length,
      pendingResets: state.resets.length,
      issuedGifts: state.gifts.length,
    },
    season: {
      number: state.seasonNumber,
      startAt: state.startAt,
      endAt: state.endAt,
    },
    entries,
  };
}

function commandToken(prefix) {
  const random = globalThis.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  return `${prefix}-${random}`.replace(/[^a-z0-9-]/gi, "").slice(0, 90);
}

async function handleAdminCoinRepair(request, env) {
  if (!env.LEADERBOARD) return json({ error: "kv_not_bound" }, 503);
  if (!isAdminRequest(request, env)) return json({ error: "unauthorized" }, 401);
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }
  const playerId = cleanPlayerId(body?.playerId);
  const amount = Math.round(Number(body?.amount));
  const phase = String(body?.phase || "");
  if (!playerId || !Number.isFinite(amount) || amount < 0 || amount > 1000000000) return json({ error: "invalid_amount" }, 400);

  if (phase === "account") {
    const accountId = await env.LEADERBOARD.get(playerAccountKey(playerId));
    if (!accountId) return json({ error: "account_not_found" }, 404);
    const key = accountRecordKey(String(accountId));
    const raw = await env.LEADERBOARD.get(key);
    if (!raw) return json({ error: "account_not_found" }, 404);
    const text = String(raw);
    const property = '"walletCoins"';
    const propertyAt = text.indexOf(property);
    if (propertyAt < 0) return json({ error: "wallet_not_found" }, 409);
    const colonAt = text.indexOf(":", propertyAt + property.length);
    if (colonAt < 0) return json({ error: "wallet_not_found" }, 409);
    let valueStart = colonAt + 1;
    while (/\s/.test(text[valueStart] || "")) valueStart += 1;
    let valueEnd = valueStart;
    while (/[0-9.+-]/.test(text[valueEnd] || "")) valueEnd += 1;
    const previousBalance = Math.max(0, Math.min(1000000000, Math.round(Number(text.slice(valueStart, valueEnd)) || 0)));
    const updated = `${text.slice(0, valueStart)}${amount}${text.slice(valueEnd)}`;
    await env.LEADERBOARD.put(key, updated);
    return json({ ok: true, phase, playerId, previousBalance, balanceAfter: amount });
  }

  if (phase === "ranking") {
    const now = Date.now();
    const loaded = await loadState(env.LEADERBOARD, now);
    const player = loaded.state.entries.find((entry) => entry.playerId === playerId);
    if (!player) return json({ error: "player_not_found" }, 404);
    const previousBalance = player.coins;
    player.coins = amount;
    player.updatedAt = now;
    loaded.state.entries = rank(loaded.state.entries);
    await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
    return json({ ok: true, phase, playerId, previousBalance, balanceAfter: amount });
  }

  return json({ error: "invalid_phase" }, 400);
}

async function handleAdmin(request, env) {
  if (!env.LEADERBOARD) return json({ error: "kv_not_bound" }, 503);
  if (!isAdminRequest(request, env)) return json({ error: "unauthorized" }, 401);

  const now = Date.now();
  const loaded = await loadState(env.LEADERBOARD, now);
  const rolled = rollSeason(loaded.state, now);
  if (request.method === "GET") {
    if (loaded.dirty || rolled) await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
    return json(adminPayload(loaded.state));
  }

  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const action = String(body?.action || "");
  const playerId = cleanPlayerId(body?.playerId);
  let message = "";

  if (action === "resetPlayer") {
    if (!playerId) return json({ error: "invalid_player" }, 400);
    const player = loaded.state.entries.find((entry) => entry.playerId === playerId);
    loaded.state.entries = loaded.state.entries.filter((entry) => entry.playerId !== playerId);
    loaded.state.gifts = loaded.state.gifts.filter((gift) => gift.playerId !== playerId);
    loaded.state.resets = loaded.state.resets.filter((reset) => reset.playerId !== playerId);
    loaded.state.resets.push({ playerId, token: commandToken("reset"), requestedAt: now });
    loaded.state.resets = normalizeResets(loaded.state.resets);
    await resetLinkedAccount(env.LEADERBOARD, playerId);
    message = `${player?.name || "该玩家"} 已删除；下次连接时会恢复初始状态。`;
  } else if (action === "deleteScore") {
    if (!playerId) return json({ error: "invalid_player" }, 400);
    const player = loaded.state.entries.find((entry) => entry.playerId === playerId);
    loaded.state.entries = loaded.state.entries.filter((entry) => entry.playerId !== playerId);
    message = `${player?.name || "该玩家"} 的排名记录已删除。`;
  } else if (action === "grantCoins") {
    if (!playerId || !loaded.state.entries.some((entry) => entry.playerId === playerId)) return json({ error: "player_not_found" }, 404);
    const amount = Math.round(Number(body?.amount));
    if (!Number.isFinite(amount) || amount < 1 || amount > 10000) return json({ error: "invalid_amount" }, 400);
    const giftId = commandToken("gift");
    const account = await creditLinkedAccount(env.LEADERBOARD, playerId, giftId, amount, now);
    const balanceAfter = account ? sanitizeGameData(account.gameData).walletCoins : 0;
    loaded.state.gifts.push({ id: giftId, playerId, amount, credited: Boolean(account), balanceAfter, createdAt: now });
    loaded.state.gifts = normalizeGifts(loaded.state.gifts);
    const player = loaded.state.entries.find((entry) => entry.playerId === playerId);
    if (player && account) {
      updateRankingEntryFromAccount(player, account, now);
      loaded.state.entries = rank(loaded.state.entries);
    }
    message = account
      ? `已向 ${player?.name || "该玩家"} 发放 ${amount} 金币，云端余额现为 ${balanceAfter}。`
      : `已向 ${player?.name || "该玩家"} 发放 ${amount} 金币，玩家上线后领取。`;
  } else if (action === "setCoins") {
    const player = loaded.state.entries.find((entry) => entry.playerId === playerId);
    if (!playerId || !player) return json({ error: "player_not_found" }, 404);
    const amount = Math.round(Number(body?.amount));
    if (!Number.isFinite(amount) || amount < 0 || amount > 1000000000) return json({ error: "invalid_amount" }, 400);
    const previousBalance = player.coins;
    const result = await setLinkedAccountCoins(env.LEADERBOARD, playerId, amount, now, {
      label: "管理员校正金币",
      detail: `云端余额已设为 ${amount}`,
    });
    player.coins = amount;
    player.updatedAt = now;
    loaded.state.entries = rank(loaded.state.entries);
    message = `${player.name} 的金币已从 ${result?.previousBalance ?? previousBalance} 校正为 ${amount}。`;
  } else if (action === "clearLeaderboard") {
    if (String(body?.confirm || "") !== "CLEAR") return json({ error: "confirmation_required" }, 400);
    loaded.state.entries = [];
    message = "当前赛季排行榜已清空；玩家本地进度未改变。";
  } else {
    return json({ error: "unknown_action" }, 400);
  }

  await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
  return json(adminPayload(loaded.state, message));
}

function battleTokenFromProtocols(request) {
  const protocols = String(request.headers.get("sec-websocket-protocol") || "")
    .split(",")
    .map((value) => value.trim());
  const authProtocol = protocols.find((value) => value.startsWith("auth."));
  return authProtocol ? authProtocol.slice(5) : "";
}

async function handleBattleSocket(request, env) {
  if (String(request.headers.get("upgrade") || "").toLowerCase() !== "websocket") {
    return json({ error: "websocket_required" }, 426);
  }
  if (!env.LEADERBOARD) return json({ error: "kv_not_bound" }, 503);
  if (!env.BATTLE_ROOMS) return json({ error: "battle_not_configured" }, 503);
  const token = battleTokenFromProtocols(request);
  if (!token) return json({ error: "account_unauthorized" }, 401);
  const authHeaders = new Headers(request.headers);
  authHeaders.set("authorization", `Bearer ${token}`);
  const authenticated = await authenticatedAccount(new Request(request, { headers: authHeaders }), env.LEADERBOARD);
  if (!authenticated) return json({ error: "account_unauthorized" }, 401);
  const account = authenticated.account;
  const gameData = sanitizeGameData(account.gameData);
  const headers = new Headers(request.headers);
  headers.set("x-cloud-jumper-player-id", cleanPlayerId(account.playerId));
  headers.set("x-cloud-jumper-player-name", encodeURIComponent(cleanName(account.name)));
  headers.set("x-cloud-jumper-player-avatar", cleanAvatar(account.avatar));
  headers.set("x-cloud-jumper-character", gameData.selectedCharacter);
  headers.set("x-cloud-jumper-skin", gameData.selectedSkin);
  headers.delete("authorization");
  headers.set("sec-websocket-protocol", "cloud-jumper-v1");
  const roomId = env.BATTLE_ROOMS.idFromName("cloud-jumper-global-battle-hub-v1");
  return env.BATTLE_ROOMS.get(roomId).fetch(new Request(request, { headers }));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      if (url.pathname === "/api/health") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        if (request.method !== "GET") return json({ error: "method_not_allowed" }, 405);
        return json({
          ok: true,
          version: "v36",
          kvBound: Boolean(env.LEADERBOARD),
          battleBound: Boolean(env.BATTLE_ROOMS),
          serverTime: Date.now(),
        });
      }
      if (url.pathname === "/api/leaderboard") {
        if (request.method === "GET") return getLeaderboard(request, env);
        if (request.method === "POST") return postLeaderboard(request, env);
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return json({ error: "method_not_allowed" }, 405);
      }
      if (url.pathname === "/api/admin") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return handleAdmin(request, env);
      }
      if (url.pathname === "/api/admin-coin-repair") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return handleAdminCoinRepair(request, env);
      }
      if (url.pathname === "/api/account") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return handleAccount(request, env);
      }
      if (url.pathname === "/api/chat") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return handleChat(request, env);
      }
      if (url.pathname === "/api/chat-image") {
        if (request.method !== "GET") return new Response("Method not allowed", { status: 405 });
        return getChatImage(request, env);
      }
      if (url.pathname === "/api/battle") {
        return handleBattleSocket(request, env);
      }
      if (url.pathname === "/admin/" && (request.method === "GET" || request.method === "HEAD")) {
        const canonicalAdminUrl = new URL(request.url);
        canonicalAdminUrl.pathname = "/admin";
        return Response.redirect(canonicalAdminUrl.toString(), 302);
      }
      if (url.pathname === "/admin" && (request.method === "GET" || request.method === "HEAD")) {
        const adminUrl = new URL(request.url);
        adminUrl.pathname = "/admin.html";
        return env.ASSETS.fetch(new Request(adminUrl.toString(), request));
      }
      return env.ASSETS.fetch(request);
    } catch (error) {
      console.error("cloud-jumper-request-failed", url.pathname, error?.message || error);
      if (url.pathname.startsWith("/api/")) return json({ error: "server_error" }, 500);
      return new Response("网站暂时无法加载，请稍后刷新", {
        status: 500,
        headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
      });
    }
  },
};
