const SEASON_KEY = "cloud-jumper:season:v4-accounts-20260713";
const ACCOUNT_RECORD_PREFIX = "cloud-jumper:account:";
const SEASON_LENGTH_MS = 14 * 24 * 60 * 60 * 1000;
const ACCOUNT_SESSION_MS = 180 * 24 * 60 * 60 * 1000;
const CHARACTER_CATALOG_KEY = "cloud-jumper:characters:v1";
const REDEEM_CODE_STORE_KEY = "cloud-jumper:redeem-codes:v1";
const SITE_LOCK_KEY = "cloud-jumper:site-lock:v1";
const BEIBEI_DELISTED_AT = Date.parse("2026-07-26T00:00:00+08:00");
const YUANYUAN_RELEASE_AT = Date.parse("2026-07-27T10:00:00+08:00");
const YUANYUAN_SALES_KEY = "cloud-jumper:store:yuanyuan-sales:v1";
const YUANYUAN_PRICE = 999;
const YUANYUAN_LIMIT = 3;
const DORAEMON_CHAMPION_PRICE = 14999;
const BUILTIN_CHARACTER_CATALOG = [
  { id: "cloud", name: "云朵小勇士", cost: 0, badge: "云", color: "#58c88b", agility: 0.96, jumpPower: 650, airJumps: 1, flipTurns: 0, flipDuration: 0, magnetRadius: 0, freeSmash: 0, staminaCapacity: 62, staminaStars: 1, staminaRecovery: 0, speedBoost: 1, gravityScale: 1, doorCharges: 0, trait: "稳定基础二连跳 · 体力较少 · 第4–5关灵敏度降低" },
  { id: "beibei", name: "贝贝", cost: 1899, regularCost: 1899, badge: "贝", color: "#f5a8cf", agility: 1.14, jumpPower: 735, airJumps: 2, flipTurns: 0, flipDuration: 0, magnetRadius: 9, freeSmash: 0, staminaCapacity: 132, staminaStars: 5, staminaRecovery: 38, speedBoost: 1, gravityScale: 1, doorCharges: 0, active: false, trait: "三次连跳 · 满星体力 · 不跳时快速恢复" },
  { id: "messi", name: "梅西", cost: 499, badge: "10", color: "#8ed6ef", agility: 1.02, jumpPower: 682, airJumps: 1, flipTurns: 1, flipDuration: 0.66, magnetRadius: 0, freeSmash: 0, staminaCapacity: 72, staminaStars: 2, staminaRecovery: 0, speedBoost: 1, gravityScale: 1, doorCharges: 0, trait: "灵敏转身 · 二次跳 · 单圈后空翻" },
  { id: "guoguo", name: "果果", cost: 699, badge: "果", color: "#86d7b0", agility: 1.1, jumpPower: 700, airJumps: 1, flipTurns: 0, flipDuration: 0, magnetRadius: 4, freeSmash: 0, staminaCapacity: 80, staminaStars: 2, staminaRecovery: 0, speedBoost: 1, gravityScale: 1, doorCharges: 0, trait: "性价比之选 · 眼镜专注 · 特技少但很灵敏" },
  { id: "mbappe", name: "姆巴佩", cost: 999, badge: "⚡", color: "#5066b8", agility: 1.07, jumpPower: 712, airJumps: 1, flipTurns: 1, flipDuration: 0.58, magnetRadius: 7, freeSmash: 0, speedBoost: 1.3, staminaCapacity: 88, staminaStars: 3, staminaRecovery: 0, gravityScale: 1, doorCharges: 0, trait: "极速响应 · 二次跳 · 长按/右键冲刺 · 快速后空翻" },
  { id: "yuanyuan", name: "元元", cost: YUANYUAN_PRICE, regularCost: YUANYUAN_PRICE, badge: "元", color: "#eea45d", agility: 1.08, jumpPower: 720, airJumps: 1, flipTurns: 0, flipDuration: 0, magnetRadius: 6, freeSmash: 5, staminaCapacity: 140, staminaStars: 5, staminaRecovery: 0, speedBoost: 1, gravityScale: 1.02, doorCharges: 0, availableFrom: YUANYUAN_RELEASE_AT, newCharacter: true, trait: "厚实体型 · 每局撞碎5块石头 · 满星耐力 · 稳定二连跳，清障特别省心" },
  { id: "haaland", name: "哈兰德", cost: 1399, badge: "9", color: "#78d7eb", agility: 1.09, jumpPower: 730, airJumps: 2, flipTurns: 0, flipDuration: 0, magnetRadius: 8, freeSmash: 0, staminaCapacity: 96, staminaStars: 3, staminaRecovery: 0, speedBoost: 1, gravityScale: 1, doorCharges: 0, trait: "强力高跳 · 三次连跳 · 第三跳需要蓄力" },
  { id: "qiang", name: "强哥", cost: 1699, badge: "强", color: "#e7904d", agility: 1.1, jumpPower: 742, airJumps: 2, flipTurns: 0, flipDuration: 0, magnetRadius: 12, freeSmash: 0, stoneImmune: true, speedBoost: 1.1, sunCaveDaily: true, staminaCapacity: 104, staminaStars: 4, staminaRecovery: 0, gravityScale: 1, doorCharges: 0, trait: "肌肉护体 · 三次连跳 · 头顶碎石免伤 · 每日洞穴太阳" },
  { id: "sponge", name: "海绵宝宝", cost: 1999, badge: "▦", color: "#f4d84c", agility: 1.11, jumpPower: 740, airJumps: 2, flipTurns: 1, flipDuration: 0.54, magnetRadius: 14, freeSmash: 0, sunCaveDaily: true, staminaCapacity: 108, staminaStars: 4, staminaRecovery: 0, speedBoost: 1, gravityScale: 1, doorCharges: 0, trait: "三次连跳 · 金币吸附 · 后空翻 · 每日洞穴太阳" },
  { id: "patrick", name: "派大星", cost: 2999, badge: "★", color: "#f49aa5", agility: 1.14, jumpPower: 752, airJumps: 2, flipTurns: 1, flipDuration: 0.68, magnetRadius: 18, freeSmash: 1, sunCaveDaily: true, staminaCapacity: 122, staminaStars: 4, staminaRecovery: 0, speedBoost: 1, gravityScale: 1, doorCharges: 0, trait: "三次连跳 · 吸币碎石 · 后空翻 · 每日洞穴太阳" },
  { id: "qihang", name: "启航", cost: 3999, badge: "航", color: "#486a9c", agility: 0.97, jumpPower: 660, airJumps: 1, flipTurns: 0, flipDuration: 0, magnetRadius: 2, freeSmash: 0, staminaCapacity: 64, staminaStars: 1, staminaRecovery: 0, speedBoost: 1, gravityScale: 1, doorCharges: 0, newCharacter: true, trait: "稳健基础型 · 二次跳 · 普通体力" },
  { id: "yunqing", name: "云青", cost: 5999, badge: "青", color: "#49a99a", agility: 0.99, jumpPower: 670, airJumps: 1, flipTurns: 0, flipDuration: 0, magnetRadius: 3, freeSmash: 0, staminaCapacity: 68, staminaStars: 1, staminaRecovery: 0, speedBoost: 1, gravityScale: 1, doorCharges: 0, newCharacter: true, trait: "均衡基础型 · 二次跳 · 普通体力" },
  { id: "krabs", name: "蟹老板", cost: 7499, badge: "蟹", color: "#e75448", agility: 1.23, jumpPower: 770, airJumps: 2, flipTurns: 0, flipDuration: 0, magnetRadius: 12, tripleMagnetRadius: 110, freeSmash: 3, staminaCapacity: 144, staminaStars: 5, staminaRecovery: 14, speedBoost: 1, gravityScale: 1, doorCharges: 0, newCharacter: true, trait: "三局一次金蟹局：强力吸币且金币三倍 · 蟹钳碎石三次 · 落地慢回体力" },
  { id: "zhixuan", name: "志炫", cost: 9999, badge: "炫", color: "#c64f3c", agility: 1.34, jumpPower: 800, airJumps: 2, instantTripleJump: true, flipTurns: 1, flipDuration: 0.5, magnetRadius: 30, freeSmash: 2, speedBoost: 1.24, sunCaveDaily: true, staminaCapacity: 170, staminaStars: 5, staminaRecovery: 0, gravityScale: 1, doorCharges: 0, flairMoves: ["explosiveStepover", "dragToChop"], newCharacter: true, trait: "最高灵敏 · 无延迟三连跳 · 碎石两次 · 每日洞穴太阳" },
  { id: "doraemon", name: "哆啦A梦", cost: DORAEMON_CHAMPION_PRICE, regularCost: DORAEMON_CHAMPION_PRICE, rewardOnly: true, badge: "铃", color: "#42aee8", agility: 1.18, jumpPower: 765, airJumps: 2, flipTurns: 0, flipDuration: 0, magnetRadius: 34, freeSmash: 0, gravityScale: 0.78, doorCharges: 1, sunCaveDaily: true, staminaCapacity: 138, staminaStars: 5, staminaRecovery: 0, speedBoost: 1, newCharacter: true, trait: "两周冠军专属 · 竹蜻蜓 · 任意门 · 每日太阳灯" },
];
const ACCOUNT_CHARACTERS = new Set(BUILTIN_CHARACTER_CATALOG.map((character) => character.id));
const ACCOUNT_SKINS = new Set(["light", "warm", "tan", "deep"]);
const ACCOUNT_AVATARS = new Set(["cloud", "lightning", "star", "crown", "football", "muscle", "rocket", "moon"]);
const CHAT_INDEX_KEY = "cloud-jumper:chat:index:v1";
const CHAT_IMAGE_PREFIX = "cloud-jumper:chat:image:";
const CHAT_RATE_PREFIX = "cloud-jumper:chat:rate:";
const CHAT_AI_RATE_PREFIX = "cloud-jumper:chat:ai-rate:";
const CHAT_AI_OUTREACH_PREFIX = "cloud-jumper:chat:outreach:";
const CHAT_AI_STATUS_KEY = "cloud-jumper:chat:openai-status:v1";
const CHAT_MAX_MESSAGES = 120;
const CHAT_RECALL_MS = 5 * 60 * 1000;
const CHAT_RETENTION_MS = 7 * 24 * 60 * 60 * 1000;
const CHAT_RETENTION_SECONDS = 7 * 24 * 60 * 60;
const CHAT_DIRECT_AI_COOLDOWN_MS = 6 * 1000;
const CHAT_QUESTION_AI_COOLDOWN_MS = 30 * 1000;
const CHAT_AMBIENT_QUIET_WINDOW_MS = 2 * 60 * 1000;
const ACCOUNT_SCAN_VERSION = 2;
const ACCOUNT_SCAN_INTERVAL_MS = 5 * 60 * 1000;
const PRESENCE_ONLINE_MS = 5 * 60 * 1000;
const PRESENCE_RECENT_MS = 24 * 60 * 60 * 1000;
const PRESENCE_WRITE_THROTTLE_MS = 75 * 1000;
const YUNQING_UNLOCK_AT = Date.parse("2026-07-16T00:00:00+08:00");
const YUNQING_RESERVATIONS_KEY = "cloud-jumper:store:yunqing-reservations:v1";
const YUNQING_RESERVATION_PRICE = 500;
const YUNQING_RESERVATION_LIMIT = 3;
const COIN_LEDGER_LIMIT = 1000;
const HEART_RESET_VERSION = 2;
const DAILY_CHECKIN_REWARDS = [
  { coins: 30 }, { coins: 40 }, { coins: 50 }, { coins: 60 }, { coins: 80 }, { coins: 100 },
  { character: "messi", characterName: "梅西", fallbackCoins: 200 },
  { coins: 50 }, { coins: 70 }, { coins: 100 }, { coins: 60 }, { coins: 80 }, { coins: 100 }, { coins: 150 }, { coins: 200 },
  { character: "guoguo", characterName: "果果", fallbackCoins: 300 },
  { coins: 70 }, { coins: 90 }, { coins: 110 }, { coins: 130 }, { coins: 180 }, { coins: 80 }, { coins: 100 }, { coins: 120 }, { coins: 150 }, { coins: 200 }, { coins: 250 }, { coins: 300 }, { coins: 350 },
  { character: "mbappe", characterName: "姆巴佩", fallbackCoins: 500 },
];

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

function cleanCharacterId(value) {
  const id = String(value || "").trim().toLowerCase().slice(0, 56);
  return /^(?:[a-z][a-z0-9-]{1,31}|custom-[a-z0-9][a-z0-9-]{2,48})$/.test(id) ? id : "";
}

function isAccountCharacterId(value) {
  const id = cleanCharacterId(value);
  return Boolean(id && (ACCOUNT_CHARACTERS.has(id) || id.startsWith("custom-")));
}

function cleanCharacterText(value, maximum, fallback = "") {
  const text = String(value ?? fallback).replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, maximum);
  return text || String(fallback || "").slice(0, maximum);
}

function boundedNumber(value, fallback, minimum, maximum, precision = 2) {
  const number = Number(value);
  const safe = Number.isFinite(number) ? number : Number(fallback);
  const clamped = Math.max(minimum, Math.min(maximum, Number.isFinite(safe) ? safe : minimum));
  const factor = 10 ** precision;
  return Math.round(clamped * factor) / factor;
}

function cleanCharacterTimestamp(value) {
  if (value === null || value === undefined || value === "") return 0;
  const parsed = typeof value === "number" ? value : Date.parse(String(value));
  if (!Number.isFinite(parsed) || parsed < 0 || parsed > 4102444800000) return 0;
  return Math.round(parsed);
}

function sanitizeCharacterRecord(value, fallback = {}, options = {}) {
  const source = value && typeof value === "object" ? value : {};
  const base = fallback && typeof fallback === "object" ? fallback : {};
  const forcedId = cleanCharacterId(options.id || source.id || base.id);
  const colorValue = String(source.color || base.color || "#58c88b").trim();
  const color = /^#[0-9a-f]{6}$/i.test(colorValue) ? colorValue.toLowerCase() : "#58c88b";
  const salePriceValue = source.salePrice === null || source.salePrice === undefined || source.salePrice === ""
    ? (base.salePrice ?? null)
    : boundedNumber(source.salePrice, 0, 0, 999999, 0);
  const allowedFlairMoves = new Set(["explosiveStepover", "dragToChop"]);
  const flairMoves = [...new Set((Array.isArray(source.flairMoves) ? source.flairMoves : (Array.isArray(base.flairMoves) ? base.flairMoves : []))
    .map(String)
    .filter((move) => allowedFlairMoves.has(move)))];
  return {
    id: forcedId,
    name: cleanCharacterText(source.name, 16, base.name || "新人物"),
    badge: cleanCharacterText(source.badge, 4, base.badge || "新"),
    color,
    cost: boundedNumber(source.cost, base.cost ?? 499, 0, 999999, 0),
    regularCost: boundedNumber(source.regularCost, base.regularCost ?? source.cost ?? base.cost ?? 499, 0, 999999, 0),
    salePrice: salePriceValue === null ? null : boundedNumber(salePriceValue, 0, 0, 999999, 0),
    saleStartAt: cleanCharacterTimestamp(source.saleStartAt ?? base.saleStartAt),
    saleEndAt: cleanCharacterTimestamp(source.saleEndAt ?? base.saleEndAt),
    availableFrom: cleanCharacterTimestamp(source.availableFrom ?? base.availableFrom),
    availableUntil: cleanCharacterTimestamp(source.availableUntil ?? base.availableUntil),
    active: source.active === undefined ? base.active !== false : source.active !== false,
    rewardOnly: source.rewardOnly === undefined ? base.rewardOnly === true : source.rewardOnly === true,
    newCharacter: source.newCharacter === undefined ? base.newCharacter === true : source.newCharacter === true,
    agility: boundedNumber(source.agility, base.agility ?? 1, 0.72, 1.6, 2),
    jumpPower: boundedNumber(source.jumpPower, base.jumpPower ?? 680, 560, 900, 0),
    airJumps: boundedNumber(source.airJumps, base.airJumps ?? 1, 0, 3, 0),
    flipTurns: boundedNumber(source.flipTurns, base.flipTurns ?? 0, 0, 3, 0),
    flipDuration: boundedNumber(source.flipDuration, base.flipDuration ?? 0, 0, 1.5, 2),
    magnetRadius: boundedNumber(source.magnetRadius, base.magnetRadius ?? 0, 0, 180, 0),
    tripleMagnetRadius: boundedNumber(source.tripleMagnetRadius, base.tripleMagnetRadius ?? 0, 0, 240, 0),
    freeSmash: boundedNumber(source.freeSmash, base.freeSmash ?? 0, 0, 10, 0),
    stoneImmune: source.stoneImmune === undefined ? base.stoneImmune === true : source.stoneImmune === true,
    instantTripleJump: source.instantTripleJump === undefined ? base.instantTripleJump === true : source.instantTripleJump === true,
    sunCaveDaily: source.sunCaveDaily === undefined ? base.sunCaveDaily === true : source.sunCaveDaily === true,
    speedBoost: boundedNumber(source.speedBoost, base.speedBoost ?? 1, 1, 1.6, 2),
    gravityScale: boundedNumber(source.gravityScale, base.gravityScale ?? 1, 0.65, 1.2, 2),
    doorCharges: boundedNumber(source.doorCharges, base.doorCharges ?? 0, 0, 3, 0),
    staminaCapacity: boundedNumber(source.staminaCapacity, base.staminaCapacity ?? 72, 50, 220, 0),
    staminaStars: boundedNumber(source.staminaStars, base.staminaStars ?? 1, 1, 5, 0),
    staminaRecovery: boundedNumber(source.staminaRecovery, base.staminaRecovery ?? 0, 0, 80, 0),
    flairMoves,
    trait: cleanCharacterText(source.trait, 140, base.trait || "均衡型人物"),
    builtIn: options.builtIn === true,
    updatedAt: Math.max(0, Math.round(Number(source.updatedAt) || Number(base.updatedAt) || 0)),
  };
}

function emptyCharacterStore() {
  return { version: 1, updatedAt: 0, overrides: {}, custom: [] };
}

function normalizeCharacterStore(value) {
  const source = value && typeof value === "object" ? value : {};
  const overrides = {};
  const rawOverrides = source.overrides && typeof source.overrides === "object" ? source.overrides : {};
  for (const base of BUILTIN_CHARACTER_CATALOG) {
    if (!rawOverrides[base.id]) continue;
    overrides[base.id] = sanitizeCharacterRecord(rawOverrides[base.id], base, { id: base.id, builtIn: true });
  }
  const custom = [];
  const seen = new Set();
  for (const raw of (Array.isArray(source.custom) ? source.custom : [])) {
    const id = cleanCharacterId(raw?.id);
    if (!id.startsWith("custom-") || seen.has(id)) continue;
    seen.add(id);
    custom.push(sanitizeCharacterRecord(raw, {}, { id, builtIn: false }));
    if (custom.length >= 100) break;
  }
  return {
    version: 1,
    updatedAt: Math.max(0, Math.round(Number(source.updatedAt) || 0)),
    overrides,
    custom,
  };
}

function resolvedCharacterCatalog(storeValue) {
  const store = normalizeCharacterStore(storeValue);
  const builtIns = BUILTIN_CHARACTER_CATALOG.map((base) => {
    const override = store.overrides[base.id];
    const resolved = sanitizeCharacterRecord(override || base, base, { id: base.id, builtIn: true });
    // v47 automatically ends the old Beibei event. A later explicit admin edit
    // still wins, so the character can be listed again from the control panel.
    if (base.id === "beibei" && (!override || Number(override.updatedAt) < BEIBEI_DELISTED_AT)) {
      resolved.active = false;
    }
    return resolved;
  });
  return [...builtIns, ...store.custom.map((character) =>
    sanitizeCharacterRecord(character, {}, { id: character.id, builtIn: false }))];
}

async function loadCharacterStore(binding) {
  if (!binding) return emptyCharacterStore();
  try {
    return normalizeCharacterStore(await binding.get(CHARACTER_CATALOG_KEY, { type: "json" }));
  } catch {
    return emptyCharacterStore();
  }
}

async function saveCharacterStore(binding, store) {
  const normalized = normalizeCharacterStore({ ...store, updatedAt: Date.now() });
  normalized.updatedAt = Date.now();
  await binding.put(CHARACTER_CATALOG_KEY, JSON.stringify(normalized));
  return normalized;
}

function sanitizeSiteLock(value) {
  const source = value && typeof value === "object" ? value : {};
  const startsAt = cleanCharacterTimestamp(source.startsAt);
  const endsAt = cleanCharacterTimestamp(source.endsAt);
  return {
    version: 1,
    enabled: source.enabled === true,
    startsAt,
    endsAt,
    message: cleanCharacterText(source.message, 90, "云端正在进行临时维护，请稍后回来。"),
    updatedAt: Math.max(0, Math.round(Number(source.updatedAt) || 0)),
  };
}

function siteLockPayload(value, now = Date.now(), message = "") {
  const lock = sanitizeSiteLock(value);
  const active = Boolean(
    lock.enabled &&
    lock.startsAt > 0 &&
    now >= lock.startsAt &&
    lock.endsAt > now
  );
  const scheduled = Boolean(
    lock.enabled &&
    lock.startsAt > now &&
    lock.endsAt > lock.startsAt
  );
  return {
    ok: true,
    message,
    serverTime: now,
    lock: {
      ...lock,
      active,
      scheduled,
      remainingMs: active ? Math.max(0, lock.endsAt - now) : 0,
    },
  };
}

async function loadSiteLock(binding) {
  if (!binding) return sanitizeSiteLock({});
  try {
    return sanitizeSiteLock(await binding.get(SITE_LOCK_KEY, { type: "json" }));
  } catch {
    return sanitizeSiteLock({});
  }
}

async function saveSiteLock(binding, value) {
  const lock = sanitizeSiteLock({ ...value, updatedAt: Date.now() });
  lock.updatedAt = Date.now();
  await binding.put(SITE_LOCK_KEY, JSON.stringify(lock));
  return lock;
}

async function handlePublicSiteStatus(request, env) {
  if (request.method !== "GET") return json({ error: "method_not_allowed" }, 405);
  const now = Date.now();
  const lock = await loadSiteLock(env.LEADERBOARD);
  return json(siteLockPayload(lock, now));
}

function cleanRedeemCode(value) {
  const code = String(value || "").trim().toLowerCase().slice(0, 24);
  return /^[a-z0-9][a-z0-9_-]{2,23}$/.test(code) ? code : "";
}

function sanitizeRedeemCodeRecord(value, fallback = {}) {
  const source = value && typeof value === "object" ? value : {};
  const base = fallback && typeof fallback === "object" ? fallback : {};
  const characterId = cleanCharacterId(source.characterId ?? base.characterId);
  return {
    code: cleanRedeemCode(source.code || base.code),
    label: cleanCharacterText(source.label, 32, base.label || "兑换码奖励"),
    coins: boundedNumber(source.coins, base.coins ?? 0, 0, 10000, 0),
    characterId: isAccountCharacterId(characterId) && characterId !== "cloud" ? characterId : "",
    startsAt: cleanCharacterTimestamp(source.startsAt ?? base.startsAt),
    expiresAt: cleanCharacterTimestamp(source.expiresAt ?? base.expiresAt),
    active: source.active === undefined ? base.active !== false : source.active !== false,
    uses: boundedNumber(source.uses, base.uses ?? 0, 0, 1000000000, 0),
    createdAt: Math.max(0, Math.round(Number(source.createdAt) || Number(base.createdAt) || Date.now())),
    updatedAt: Math.max(0, Math.round(Number(source.updatedAt) || Number(base.updatedAt) || Date.now())),
  };
}

function defaultRedeemCodeStore() {
  const createdAt = Date.parse("2026-07-13T00:00:00+08:00");
  return {
    version: 1,
    updatedAt: createdAt,
    codes: [sanitizeRedeemCodeRecord({
      code: "leosince",
      label: "Leo 专属礼物",
      coins: 200,
      active: true,
      uses: 0,
      createdAt,
      updatedAt: createdAt,
    })],
  };
}

function normalizeRedeemCodeStore(value, useDefaults = false) {
  const source = value && typeof value === "object" ? value : {};
  const rawCodes = Array.isArray(source.codes)
    ? source.codes
    : useDefaults
      ? defaultRedeemCodeStore().codes
      : [];
  const codes = [];
  const seen = new Set();
  for (const raw of rawCodes) {
    const code = cleanRedeemCode(raw?.code);
    if (!code || seen.has(code)) continue;
    const record = sanitizeRedeemCodeRecord(raw, { code });
    if (!record.coins && !record.characterId) continue;
    seen.add(code);
    codes.push(record);
    if (codes.length >= 200) break;
  }
  return {
    version: 1,
    updatedAt: Math.max(0, Math.round(Number(source.updatedAt) || 0)),
    codes,
  };
}

async function loadRedeemCodeStore(binding) {
  if (!binding) return defaultRedeemCodeStore();
  try {
    const stored = await binding.get(REDEEM_CODE_STORE_KEY, { type: "json" });
    return stored ? normalizeRedeemCodeStore(stored) : defaultRedeemCodeStore();
  } catch {
    return defaultRedeemCodeStore();
  }
}

async function saveRedeemCodeStore(binding, store) {
  const normalized = normalizeRedeemCodeStore({ ...store, updatedAt: Date.now() });
  normalized.updatedAt = Date.now();
  await binding.put(REDEEM_CODE_STORE_KEY, JSON.stringify(normalized));
  return normalized;
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
    .filter((id) => isAccountCharacterId(id)))];
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

function presenceState(lastActiveAt, now = Date.now()) {
  const timestamp = Math.max(0, Number(lastActiveAt) || 0);
  if (timestamp > 0 && now - timestamp <= PRESENCE_ONLINE_MS) return "online";
  if (timestamp > 0 && now - timestamp <= PRESENCE_RECENT_MS) return "recent";
  return "away";
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
      selectedCharacter: isAccountCharacterId(entry.selectedCharacter) ? String(entry.selectedCharacter) : "cloud",
      unlockedCharacters: cleanPublicCharacters(entry.unlockedCharacters),
      selectedSkin: ACCOUNT_SKINS.has(String(entry.selectedSkin)) ? String(entry.selectedSkin) : "light",
      battleMatches: Math.max(0, Math.min(1000000, Math.round(Number(entry.battleMatches) || 0))),
      battleWins: Math.max(0, Math.min(1000000, Math.round(Number(entry.battleWins) || 0))),
      battleDraws: Math.max(0, Math.min(1000000, Math.round(Number(entry.battleDraws) || 0))),
      battlePoints: Math.max(0, Math.min(1000000000, Math.round(Number(entry.battlePoints) || 0))),
      battleBestScore: Math.max(0, Math.min(100000, Math.round(Number(entry.battleBestScore) || 0))),
      battleCoinsEarned: Math.max(0, Math.min(1000000000, Math.round(Number(entry.battleCoinsEarned) || 0))),
      systemRival: entry.systemRival === true,
      showOnlineStatus: entry.showOnlineStatus === true,
      lastActiveAt: Math.max(0, Number(entry.lastActiveAt) || 0),
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

const RIVAL_CHAT_THREADS = [
  [
    [0, "第{level}关那个长悬崖你们怎么过的"],
    [1, "@风停在十七楼 先别急着补第二跳，掉下去再按还有机会"],
    [2, "真的假的，掉下去还能回来？"],
    [4, "三连跳人物可以，基础人物就别硬试了"],
    [0, "@雾中第七码头 你每次都说得很轻松"],
    [4, "不信你今晚自己试，我可没说一次过"],
    [3, "你俩先别吵，我刚试了，确实能救回来一次"],
  ],
  [
    [2, "我刚被足球精准砸头，这游戏是不是盯着我"],
    [3, "你站着不动当然砸你啊😂"],
    [2, "@枝枝 我明明在跳"],
    [1, "我作证，他那个跳更像原地举手"],
    [2, "@404号月亮 你礼貌吗"],
    [0, "先别吵，下一架飞机来了"],
  ],
  [
    [1, "有人觉得第三跳变矮以后反而好控制吗"],
    [4, "好控制？你昨天还掉了两次"],
    [1, "@雾中第七码头 那是我在测悬崖"],
    [3, "懂了，掉下去也算测试"],
    [1, "你们等着，我今天肯定把记录抬上去"],
    [0, "这句话我先截图了"],
  ],
  [
    [3, "贝贝站着回体力真的快，我刚发现"],
    [0, "可是我一站着就容易被树枝敲"],
    [3, "@风停在十七楼 那你倒是蹲一下"],
    [2, "我支持站着回，反正被砸的不是我"],
    [4, "你们这么聊，下一局肯定全翻车"],
  ],
  [
    [4, "洞穴里别追金币了，根本没有"],
    [2, "我第一次进去找了半天，还以为没加载"],
    [0, "手电筒亮的那一小块够看路吗"],
    [1, "够是够，就是看到飞机的时候已经晚了"],
    [3, "@404号月亮 你怎么每次都怪飞机"],
    [1, "因为它真的每次都找我"],
  ],
  [
    [0, "刚才有人说基础人物第{level}关很好过，我有点不信"],
    [1, "谁说的，让他把记录发出来"],
    [3, "可能是手感好，别一上来就质疑"],
    [4, "我只信排行榜，不信口头成绩"],
    [2, "你们好认真，我只想捡那个大金币"],
    [0, "@小砚 大金币路线更难好吧"],
  ],
  [
    [2, "今天金币路线是不是换了，我老是跳空"],
    [3, "每关本来就不一样，你昨天记错了吧"],
    [2, "@枝枝 我记性没那么差"],
    [1, "你上次还说第8关是第6关"],
    [2, "……那次不算"],
    [4, "判定：小砚记错，散会"],
  ],
  [
    [3, "谁刚才说强哥闭眼都能过"],
    [4, "不是我，我说的是撞石头不用睁眼"],
    [0, "这两句话差很多吗"],
    [1, "差一个掉悬崖"],
    [4, "@404号月亮 你今天话很多啊"],
    [1, "因为我刚过了一关，允许我膨胀两分钟"],
  ],
  [
    [1, "刚上线，今天你们谁先掉血"],
    [0, "你这样问很不吉利"],
    [3, "我已经被炸弹拿走半滴了，你满意了吧"],
    [1, "@枝枝 那我收回刚才那句"],
    [2, "来不及了，飞机听见了"],
  ],
  [
    [4, "第{level}关后半段节奏比前面快不少"],
    [0, "你又开始故作神秘了"],
    [4, "@风停在十七楼 我只是提醒，等下别说我没讲"],
    [3, "他说得对，后面两个悬崖别连着乱按"],
    [1, "收到，我选择先看你们掉一次"],
    [0, "这人怎么这样😂"],
  ],
  [
    [0, "我差一分到100，然后被树枝送回来了"],
    [2, "差一分最难受，我懂"],
    [1, "先问一下，你是不是又忘记蹲"],
    [0, "@404号月亮 我蹲了，慢了半拍而已"],
    [3, "慢半拍就是没蹲到哈哈"],
    [4, "别笑，明天轮到你"],
  ],
  [
    [3, "你们觉得灵敏高一定更好用吗"],
    [1, "不一定，太快我会提前起跳"],
    [4, "主要还是路线，人物只能救一次手误"],
    [2, "我不同意，三连跳能救很多次"],
    [0, "@小砚 前提是你别把三跳全按在原地"],
    [2, "今天怎么都在针对我"],
  ],
];

const RIVAL_REPLY_LIBRARY = {
  greeting: [
    "@{name} 刚来？我也才玩一会儿",
    "嗨 @{name}，今天手感怎么样",
    "@{name} 你来得正好，刚才这里还在聊第{level}关",
    "晚上好 @{name}，先说好，今天不许笑我掉洞",
    "@{name} 来了，聊天室终于有人说话了",
    "我刚结束一局，@{name} 你准备玩哪关",
  ],
  cliff: [
    "@{name} 悬崖别急着连按，掉下去后留一次空中跳反而能救",
    "我试过，三连跳人物掉下去还有机会往边上抢救，@{name} 可以试试",
    "@{name} 那个长洞我会晚一点起跳，不然第三跳到边缘就没力了",
    "先看人物脚下再补跳，@{name}，连续狂按最容易直接掉到底",
    "@{name} 我刚才也掉了，第二跳留到画面停住以后比较稳",
    "长悬崖别贪上面的金币，@{name}，先落地比较重要",
    "这次我站 @{name}，那个悬崖边缘确实有点刁钻",
    "@{name} 你用的是三连跳人物吗？不是的话那条路线别硬走",
  ],
  cave: [
    "@{name} 洞穴里我会把最后一次跳留着，飞机来了才用",
    "手电筒够亮，但别只盯人物，@{name} 要看前面的地面缺口",
    "@{name} 进洞先别乱跳，眼睛适应一下再走",
    "我也觉得洞里突然事件多，@{name}，不过前几秒通常比较安全",
    "@{name} 如果人物有太阳技能，今天没用过的话进洞会舒服很多",
    "洞里没有金币，@{name} 别为了找金币跑偏了，我吃过这个亏",
  ],
  jump: [
    "@{name} 第三跳本来就矮一点，最好拿来修正落点",
    "我会在第二跳快到最高点时再按，@{name} 你可以试试",
    "@{name} 别把三次跳连成一声，留一点间隔会稳很多",
    "人物没落地前跳数不会重置，@{name}，所以最后一下要省着用",
    "@{name} 我觉得你不是跳低了，是起跳时间早了半拍",
    "刚才我也卡了一下，@{name}，等蓄力提示消失再补第三跳",
  ],
  character: [
    "@{name} 角色还是看手感，我灵敏太高反而会提前跳",
    "先用同一个人物跑两局再判断，@{name}，第一局不太准",
    "@{name} 你常掉悬崖的话，三连跳比吸金币实用",
    "我会看关卡换人物，@{name}，不一定越贵就每条路线都顺手",
    "@{name} 先试试体力够不够，后半段灵敏度会有差别",
    "强哥撞石头很舒服，但悬崖还是得自己跳，@{name}",
  ],
  coins: [
    "@{name} 大金币那条线更危险，我一般血多才去拿",
    "金币少一点正常，我今天也没捡多少，@{name}",
    "@{name} 先过关再捡币，不然最后一分翻车更亏",
    "我刚才为了一个大金币掉半颗血，@{name} 你自己权衡😂",
    "@{name} 金币路线每天看起来都差不多，但每关高度不一样",
    "别问，@{name}，我刚把一整排金币跳过去了，一个没吃到",
  ],
  challenge: [
    "@{name} 先把记录打出来我再信你😂",
    "你这句话我记住了，@{name}，等下别偷偷换人物",
    "@{name} 说得这么稳，下一局直播给我们看",
    "我暂时保留质疑，@{name} 先过这一关再说",
    "@{name} 你是不是把失败的那几局自动忘了",
    "行，@{name}，今天就看你能不能把这句话兑现",
  ],
  problem: [
    "@{name} 我刚也遇到类似情况，再试一次看看是不是落点太边了",
    "先别急，@{name}，你说的是哪一关、什么人物",
    "@{name} 如果连续两次都这样，那可能真不是手滑",
    "我这边刚才正常，@{name} 你是不是在悬崖边刚好被撞了",
    "@{name} 这个我不敢乱说，你把发生前那一下描述清楚点",
    "听起来有点怪，@{name}，我等下到那关也留意一下",
  ],
  question: [
    "@{name} 我觉得可以先试一局，光看说明不太准",
    "你问到我了，@{name}，我也想听听他们怎么说",
    "@{name} 我目前的感觉是后一点起跳会更稳",
    "不一定，@{name}，还要看你正在用的人物",
    "@{name} 这个我试过一次，可以，但别连续乱按",
    "我和你想的不太一样，@{name}，我觉得问题在落点",
  ],
  general: [
    "@{name} 我刚才也差不多，最后一下别急就行",
    "这话有点道理，@{name}，但我还是想再试一局",
    "@{name} 你这么一说，我等下也去试试",
    "我先不下结论，@{name}，刚才那局我自己也跳乱了",
    "@{name} 你们聊，我再开一局验证一下",
    "确实有这种感觉，@{name}，尤其是后半段速度起来以后",
    "@{name} 我不同意一半，前面是这样，后面不一定",
    "哈哈 @{name} 你这句把潜水的人都叫出来了",
  ],
};

const RIVAL_CHAT_VOICES = {
  "风停在十七楼": {
    openers: ["我刚好也在试，", "先等等，", "我不太敢说死，", "按我刚才那局看，", ""],
    endings: ["你先跑一局看看", "别急着连续按", "我等下也再试一次", "这局先求稳", ""],
  },
  "404号月亮": {
    openers: ["我先说结论：", "这不一定，", "我刚验证过，", "等一下，", ""],
    endings: ["不服可以来一局PK", "记得别临时换人物😂", "我保留一点质疑", "结果出来再说", ""],
  },
  "小砚": {
    openers: ["啊这个我遇到过，", "我可能操作慢一点，", "说真的，", "我刚才就是这样，", ""],
    endings: ["反正我又掉过一次", "你成功了回来告诉我", "我先学一下你们的路线", "别笑我就行", ""],
  },
  "枝枝": {
    openers: ["我觉得可以这样，", "先别慌，", "我刚刚试了一下，", "认真说，", ""],
    endings: ["稳住比抢那一枚金币重要", "要不要一起试一局", "这次我站你这边", "慢半拍反而好", ""],
  },
  "雾中第七码头": {
    openers: ["看落点，", "先留一次补救，", "我会这么处理：", "这段别靠运气，", ""],
    endings: ["路线对了就不用硬扛", "你报关卡我可以说细一点", "要比就开困难模式", "别把三跳一次用完", ""],
  },
};

const RIVAL_REPLY_PARTS = {
  greeting: [
    "刚上线，今天打算从{anchor}开始",
    "我也才来，聊天室刚好缺个人说话",
    "在，刚结束一局，手感还没热起来",
    "来得正好，刚才有人还在问谁愿意PK",
  ],
  cliff: [
    "{anchor}的崖边要把最后一次空中跳留到画面停住以后",
    "掉下去先别乱按，人物朝前以后再补最后一跳会稳不少",
    "我会放掉前面的高金币，贴着右边崖沿落地",
    "三连跳能救，但第二、第三跳要分开，不能按成一下",
    "如果已经掉到地面线下面，先补跳再往前抢，不要往回拉",
  ],
  cave: [
    "{anchor}进去先看脚下，不用追根本不存在的金币",
    "刚变暗的几秒别连跳，等手电光扫到前面再决定",
    "飞机声出来以后再交最后一次跳，比提前乱躲好",
    "太阳技能没用过就留给洞穴，普通手电也够看清地面",
  ],
  jump: [
    "第三跳本来就矮，适合修正落点，不适合当第一下那样冲",
    "第二跳到最高点附近再补，三下之间留一点节奏",
    "没落地前跳数不会重置，所以最后一下要当成保险",
    "你说的迟一下不是坏事，正好能避开连续乱按",
  ],
  character: [
    "{anchor}要先跑完整一局才看得出后半段体力差别",
    "角色贵不等于每个落点都自动变简单，路线还是得自己控",
    "经常掉悬崖就优先三连跳，经常漏币再考虑吸附",
    "灵敏高的人物起跳也更容易提前，先适应两局",
  ],
  controls: [
    "手机轻点是跳，向下滑后要一直按住才会蹲，松手就站起来",
    "普通闯关会自动前进，只有好友对战才显示方向控制和一次大招",
    "撞到低平台要提前按住蹲，不是点一下以后一直趴着",
    "连续跳没反应时先等脚落地，落地前跳数不会自动重置",
    "如果手机误触，先避开右上角暂停和简洁模式按钮再起跳",
  ],
  hazards: [
    "飞机本体撞到会掉血，它丢的炸弹落地后还有一圈爆炸范围",
    "足球只扣半颗心，但石头和飞机的伤害不一样，别按同一种节奏躲",
    "听到飞机声先看高度，人在空中时不要急着把最后一跳交掉",
    "乌鸦是横向路线，落石和足球是预警后下落，躲法不能混在一起",
    "炸弹落地后离爆点远一点，擦着边也可能吃到半颗心",
  ],
  battle: [
    "好友对战可以选难度，双方准备后才开始，左边控制移动，右边大招每局一次",
    "对战看综合表现，不只是先到终点，金币、连击、受伤和完成度都会影响结果",
    "要开房就选同一难度再比，人物可以不同，路线和大招时机更重要",
    "我可以接邀请，不过先说难度，轻松、标准、困难还是疯狂",
    "大招最好等对方在空中或过复杂路段时用，太早交掉容易浪费",
  ],
  ranking: [
    "综合榜会把闯关和好友对战一起算，单人榜和对战榜可以分开看",
    "刚注册但没挑战的人也应该显示，只是成绩会写成尚未挑战",
    "金币是否公开由玩家自己决定，隐藏以后榜上不会显示余额",
    "排名更新有一点云端延迟，刷新后还不对就把玩家名和时间说清楚",
    "赛季榜看的是本赛季记录，账号和已买人物不会因为换季消失",
  ],
  account: [
    "账号记录跟名字和密码走，换设备登录后会从云端恢复",
    "改名要在右上角头像里的个人资料保存，榜单会跟着更新",
    "金币、人物或关卡没恢复时先别重复购买，重新登录一次再看云端记录",
    "公开金币和在线状态是两个独立开关，都能在个人资料里修改",
    "同一个名字只能注册一次，已有账号应该点登录，不要重复注册",
  ],
  coins: [
    "大金币那条线风险高，血量不够就先保通关",
    "为了一个大金币掉半颗血不一定划算，我刚吃过亏",
    "金币高度每关都在变，不能照搬上一关的按法",
    "先把{anchor}的落点走顺，再考虑全收",
  ],
  bug: [
    "先报关卡、人物、血量和出问题前最后两个操作，我才能按同样步骤复现",
    "如果同一个位置连续两局都发生，记下分数和障碍类型，这样比较像稳定问题",
    "我会先区分碰撞判定、画面位置和网络同步，三种问题看起来很像但原因不同",
    "先别连续刷新或重复点购买，把出现问题的顺序写清楚，比较容易查到",
    "这个描述还差一个条件：你当时在地面、二层还是空中？补上我再判断",
    "我不想乱猜；能说一下哪一关、用谁、碰到了什么，以及之后发生了什么吗",
  ],
  weather: [
    "你在中国哪个城市？天气差得很大，给城市我才能准确回答",
    "实时天气会变化，我不想随口编；如果云端智能查询已开启，我可以按城市查",
    "你们今天那边是什么天气？我这里先不替任何城市乱报😂",
    "要聊天气最好带城市和时间，比如“今天上海下午”，这样不会答偏",
  ],
  news: [
    "你想聊游戏、体育、科技还是国内新闻？给个方向我再接着说",
    "新闻变化快，我不想拿旧消息当今天的；云端查询开启后可以核对来源再聊",
    "刚看到“新闻”两个字还不够，你说是哪件事，我按那个话题聊",
    "体育新闻可以，先说球队或球员；国内消息也最好给个关键词",
  ],
  casual: [
    "这句我接得上，不过你先说今天准备打哪一关",
    "哈哈先聊两句也行，我刚好不想马上重开",
    "我今天只打算玩一小会儿，结果又被排行榜勾住了",
    "先不卷成绩，你最近最顺手的是哪个人物",
    "我在，刚才去跑了一局，回来正好看到这条",
  ],
  challenge: [
    "这句话先记下，开个房间跑一局就知道",
    "可以质疑，但别只报成功那一把的成绩",
    "要比就选同一难度，人物随便，结果最清楚",
    "我接受这个说法一半，另一半等你跑完再判",
  ],
  problem: [
    "先报关卡、人物和出问题前最后一下操作，不然容易猜错",
    "如果连续两局都在同一个位置发生，那就不太像手滑",
    "我这边会特别看一下碰撞位置，可能是脚刚好压在边缘",
    "先重新进一局试一次，还是这样就把发生顺序说清楚",
  ],
  question: [
    "这个要看{anchor}和正在用的人物，不能只看说明",
    "可以，但时机比按得快更重要",
    "我试过一种走法，不过想先听听你刚才是怎么按的",
    "不一定，你说的前半段和后半段情况可能相反",
  ],
  general: [
    "这感觉我也有，不过我刚才那局自己先按乱了",
    "你这句有道理，我下一局会专门留意",
    "先不下结论，跑完{anchor}再回来对一下",
    "我和你想的不完全一样，但这次确实值得再试",
    "说到这里我有点想开一局验证了",
  ],
};

function countLocalReplyVariants() {
  const voiceCombinations = Object.values(RIVAL_CHAT_VOICES).reduce((sum, voice) =>
    sum + Math.max(1, voice.openers.length) * Math.max(1, voice.endings.length), 0);
  const intentBodies = Object.values(RIVAL_REPLY_PARTS).reduce((sum, parts) =>
    sum + Math.max(1, Array.isArray(parts) ? parts.length : 0), 0);
  // Each compatible opener/body/ending also has five sentence layouts.
  return voiceCombinations * intentBodies * 5;
}

const LOCAL_REPLY_VARIANT_COUNT = countLocalReplyVariants();

const RIVAL_AMBIENT_PARTS = [
  ["第{level}关刚才那条低路线反而顺一点", "有人想开一局标准难度吗", "我先跑一把，回来报结果"],
  ["刚才第三跳留晚了，居然真的救回来了", "别问前两次去哪了😂", "下一局我不抢最上面的金币"],
  ["今天只玩十分钟，结果已经重开三次", "飞机是不是会挑人在空中时出现", "我准备换个人物再试"],
  ["谁在线，来个困难模式PK", "输的人别怪人物", "先说好，大招只准用一次"],
  ["刚看完榜，差距没我想的那么大", "一局能追回来一点", "有人接受邀请我就开"],
  ["洞里那段现在亮多了", "但我还是把最后一跳留给飞机", "别为了不存在的金币绕路"],
  ["我刚才在崖边停住半秒，画面也跟着停了", "三连跳人物确实有机会回来", "基础人物就别贪上面那排币"],
  ["今天手感一般，先不吹", "等我过了第{level}关再说", "你们可以先质疑着"],
  ["我在复测一个问题：同一关、同一人物连续跑三次", "先记最后两次操作，不然只说“又掉了”查不出来", "等有稳定步骤我再发结论"],
  ["第{level}关上层金币不用全吃，先走中层会稳很多", "最后那个长崖再留第三跳", "这条路线分不高，但通关率高"],
  ["刚把飞机和炸弹分开测了", "飞机本体是在空中碰撞，炸弹是落地后的范围", "难怪我之前总躲错方向"],
  ["有人遇到碰撞不准先报关卡和人物", "最好再说当时在地面、二层还是空中", "条件齐一点才知道是不是同一个问题"],
  ["你们今天那边天气怎么样", "先说城市，别让我对着整个中国猜😂", "下雨天在家跑两局倒是挺合适"],
  ["今天有什么体育或游戏新闻值得聊", "给个关键词，旧消息就别拿来当今天的了", "我想看完再开一局"],
  ["我把第{level}关的低、中、高三条线都跑了一遍", "高线金币多但最吃体力，中线比较适合保命", "基础人物先别硬追最高那排"],
  ["刚才那个异常我暂时没稳定复现", "只出现一次我先不说它一定是bug", "下一次记下分数和障碍再对"],
];

function pickRivalPart(list, seed, shift = 0) {
  const values = Array.isArray(list) && list.length ? list : [""];
  return values[competitorActivityValue(seed + shift * 97, values.length + shift) % values.length] || "";
}

function rivalReplyAnchor(text, snapshot) {
  const value = String(text || "");
  const level = value.match(/第?\s*(\d{1,2})\s*关/);
  if (level) return `第${Math.max(1, Math.min(20, Number(level[1]) || snapshot.level))}关`;
  const character = value.match(/(志炫|蟹老板|元元|强哥|果果|梅西|姆巴佩|哈兰德|海绵宝宝|派大星|云青|启航|基础人物)/);
  if (character) return character[1];
  return `第${snapshot.level}关`;
}

function composeCompetitorReply(profile, category, sourceText, accountName, snapshot, seed) {
  const voice = RIVAL_CHAT_VOICES[profile.name] || RIVAL_CHAT_VOICES["风停在十七楼"];
  const mention = `@${cleanName(accountName) || "玩家"}`;
  const anchor = rivalReplyAnchor(sourceText, snapshot);
  const opener = pickRivalPart(voice.openers, seed, 1);
  const bodyTemplate = pickRivalPart(RIVAL_REPLY_PARTS[category] || RIVAL_REPLY_PARTS.general, seed, 2);
  const body = String(bodyTemplate).replaceAll("{anchor}", anchor).replaceAll("{level}", String(snapshot.level));
  const ending = pickRivalPart(voice.endings, seed, 3);
  const shortReply = seed % 13 === 0;
  if (shortReply) {
    const shortLines = {
      cliff: [`${mention} 先留住第三跳`, `${mention} 往前面的崖沿抢，不要退`, `${mention} 等画面停一下再补跳`],
      challenge: [`可以，${mention} 开房间`, `${mention} 来一局就知道`, `我接，${mention} 选难度`],
      greeting: [`在，${mention}`, `${mention} 我刚上线`, `来了，${mention}`],
      general: [`这次我同意，${mention}`, `${mention} 我先试一局`, `等下，我去验证`],
    };
    return pickRivalPart(shortLines[category] || shortLines.general, seed, 9);
  }
  const tail = ending && (seed >>> 5) % 100 < 68 ? `，${ending}` : "";
  const layout = (seed >>> 10) % 5;
  if (layout === 0) return `${mention}，${opener}${body}${tail}`;
  if (layout === 1) return `${opener}${body}。${mention}${tail}`;
  if (layout === 2) return `${mention} ${body}${tail}`;
  if (layout === 3) return `${anchor}这段，${opener}${body}，${mention}${tail}`;
  return `${opener}${body}${tail}，${mention}`;
}

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
  const todayIndex = Math.max(0, Math.floor((now - restartAt) / RIVAL_DAY_MS));
  const todaySessionStart = competitorSessionStart(profile, todayIndex, restartAt);
  const currentlyPlaying = now >= todaySessionStart && now <= todaySessionStart + RIVAL_SESSION_MS;
  const lastActiveAt = currentlyPlaying
    ? Math.max(lastActivityAt, now - (competitorActivityValue(profile.seed + 1889, todayIndex) % 45) * 1000)
    : lastActivityAt;
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
    systemRival: true,
    showOnlineStatus: true,
    lastActiveAt,
    updatedAt: lastActivityAt,
  };
}

function dailyCompetitorEntries(_state, now = Date.now(), restartAt = RIVAL_RESTART_AT) {
  return DAILY_COMPETITORS.map((profile) => simulateCompetitor(profile, now, restartAt));
}

function competitorChatTextSeed(value) {
  const text = String(value || "");
  let seed = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    seed ^= text.charCodeAt(index);
    seed = Math.imul(seed, 16777619);
  }
  return seed >>> 0;
}

function normalizeChatBattleInvite(value) {
  if (!value || typeof value !== "object") return null;
  const rivalId = cleanPlayerId(value.rivalId);
  const rival = DAILY_COMPETITORS.find((profile) => profile.playerId === rivalId);
  if (!rival) return null;
  const difficulty = ["easy", "normal", "hard", "extreme"].includes(String(value.difficulty))
    ? String(value.difficulty)
    : "normal";
  return {
    rivalId,
    rivalName: rival.name,
    difficulty,
    expiresAt: Math.max(0, Number(value.expiresAt) || 0),
  };
}

function competitorChatMessage(profile, text, createdAt, restartAt, idSuffix = "note", metadata = {}) {
  const snapshot = simulateCompetitor(profile, createdAt, restartAt);
  const cleanText = cleanChatText(String(text || "")
    .replaceAll("{level}", String(snapshot.level))
    .replaceAll("{self}", profile.name));
  return {
    id: `chat-rv46-${profile.seed.toString(36)}-${Math.round(createdAt).toString(36)}-${String(idSuffix).replace(/[^a-z0-9_-]/gi, "").slice(0, 18) || "note"}`,
    accountId: profile.accountId,
    playerId: profile.playerId,
    name: profile.name,
    avatar: profile.avatar,
    text: cleanText || "刚才那局有点可惜",
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
    battleInvite: normalizeChatBattleInvite(metadata?.battleInvite),
  };
}

function dailyCompetitorChatMessages(now = Date.now(), restartAt = RIVAL_RESTART_AT) {
  if (now < restartAt) return [];
  const oldestAllowed = now - CHAT_RETENTION_MS;
  const firstDay = Math.max(0, Math.floor((oldestAllowed - restartAt) / RIVAL_DAY_MS) - 1);
  const lastDay = Math.min(120, Math.floor((now - restartAt) / RIVAL_DAY_MS) + 1);
  const messages = [];

  for (let dayIndex = firstDay; dayIndex <= lastDay; dayIndex += 1) {
    const threadIndex = competitorActivityValue(1459, dayIndex) % RIVAL_CHAT_THREADS.length;
    const thread = RIVAL_CHAT_THREADS[threadIndex] || RIVAL_CHAT_THREADS[0];
    const firstActive = competitorActivityValue(1511, dayIndex) % DAILY_COMPETITORS.length;
    let secondActive = competitorActivityValue(1543, dayIndex + 7) % DAILY_COMPETITORS.length;
    if (secondActive === firstActive) secondActive = (secondActive + 1 + dayIndex) % DAILY_COMPETITORS.length;
    const activeProfiles = [DAILY_COMPETITORS[firstActive], DAILY_COMPETITORS[secondActive]];
    const activePlayerIds = new Set(activeProfiles.map((profile) => profile.playerId));
    const dayJitter = (competitorActivityValue(1777, dayIndex) % 19) - 9;
    const threadStart = restartAt + dayIndex * RIVAL_DAY_MS + (4 + dayJitter) * RIVAL_MINUTE_MS;
    let offsetSeconds = 0;

    for (let index = 0; index < thread.length; index += 1) {
      const [profileIndex, text] = thread[index];
      const profile = DAILY_COMPETITORS[Math.max(0, Math.min(DAILY_COMPETITORS.length - 1, Number(profileIndex) || 0))];
      if (!activePlayerIds.has(profile.playerId)) continue;
      offsetSeconds += index === 0 ? 0 : 31 + (competitorActivityValue(profile.seed + dayIndex, index) % 48);
      const createdAt = threadStart + offsetSeconds * 1000;
      if (createdAt > now || createdAt < oldestAllowed) continue;
      messages.push(competitorChatMessage(profile, text, createdAt, restartAt, `d${dayIndex.toString(36)}-${index}`));
    }

    if (dayIndex % 2 === 0) {
      const profile = activeProfiles[competitorActivityValue(2213, dayIndex) % activeProfiles.length];
      const createdAt = threadStart + (8.3 + (competitorActivityValue(2243, dayIndex) % 50) / 100) * RIVAL_MINUTE_MS;
      if (createdAt <= now && createdAt >= oldestAllowed) {
        const lineIndex = competitorActivityValue(profile.seed + 1201, dayIndex) % profile.chatLines.length;
        messages.push(competitorChatMessage(profile, profile.chatLines[lineIndex], createdAt, restartAt, `d${dayIndex.toString(36)}-solo`));
      }
    }

    const ambientGroup = RIVAL_AMBIENT_PARTS[competitorActivityValue(3181, dayIndex) % RIVAL_AMBIENT_PARTS.length];
    const ambientCount = 2;
    for (let index = 0; index < ambientCount; index += 1) {
      const profile = activeProfiles[competitorActivityValue(3319 + index, dayIndex) % activeProfiles.length];
      const createdAt = threadStart + (2.1 + index * 2.35 + (competitorActivityValue(profile.seed, dayIndex + index) % 47) / 100) * RIVAL_MINUTE_MS;
      if (createdAt > now || createdAt < oldestAllowed) continue;
      const line = ambientGroup[(index + competitorActivityValue(profile.seed + 47, dayIndex)) % ambientGroup.length];
      messages.push(competitorChatMessage(profile, line, createdAt, restartAt, `d${dayIndex.toString(36)}-ambient-${index}`));
    }
  }
  return messages.sort((a, b) => a.createdAt - b.createdAt).slice(-CHAT_MAX_MESSAGES);
}

function quietDailyCompetitorMessagesNearPlayers(competitorMessages, storedMessages) {
  const realPlayerActivity = (Array.isArray(storedMessages) ? storedMessages : [])
    .filter((message) =>
      message &&
      !message.recalled &&
      !cleanPlayerId(message.playerId).startsWith("rival-") &&
      Number(message.createdAt) > 0)
    .map((message) => Number(message.createdAt));
  if (!realPlayerActivity.length) return Array.isArray(competitorMessages) ? competitorMessages : [];
  return (Array.isArray(competitorMessages) ? competitorMessages : []).filter((message) =>
    !realPlayerActivity.some((createdAt) =>
      Number(message.createdAt) >= createdAt - 15 * 1000 &&
      Number(message.createdAt) <= createdAt + CHAT_AMBIENT_QUIET_WINDOW_MS));
}

const RIVAL_INTENT_RULES = [
  ["weather", /天气|气温|下雨|暴雨|台风|下雪|高温|冷不冷|热不热|空气质量|雾霾/, 16],
  ["news", /新闻|热搜|头条|时事|体育消息|科技消息|国内消息/, 16],
  ["ranking", /排行榜|排名|赛季|冠军|第一名|只显示|几个人|玩家列表|成绩榜/, 15],
  ["account", /账号|登录|注册|密码|换设备|恢复记录|改名|头像|公开金币|在线状态/, 14],
  ["battle", /好友对战|对战|pk|PK|开房|房间|邀请|大招|摇杆|比一局|来一局/, 14],
  ["controls", /蹲|下滑|向下键|方向键|控制器|怎么按|按住|松手|简洁模式/, 13],
  ["hazards", /飞机|炸弹|足球|乌鸦|落石|石头|树枝|爆炸|砸到|掉血/, 13],
  ["cave", /洞穴|黑暗|手电|太阳|看不见|逐渐变暗/, 13],
  ["cliff", /悬崖|洞口|掉下|掉进|深坑|长洞|边缘|崖沿|掉到底/, 12],
  ["jump", /三连跳|二连跳|第三跳|跳跃|起跳|落地|补跳|空中跳|后空翻/, 11],
  ["coins", /金币|大金币|兑换|余额|吸币|三倍|金币记录|金币明细/, 11],
  ["bug", /bug|BUG|卡住|卡顿|闪退|判定|异常|穿模|重复|一直这样|不对|没碰到|无法连接/, 11],
  ["character", /人物|角色|商店|灵敏|体力|技能|强哥|贝贝|梅西|姆巴佩|哈兰德|蟹老板|志炫|元元|果果|启航|云青|哆啦a梦|哆啦A梦/, 6],
  ["challenge", /吹|不信|假的|质疑|厉害|稳赢|肯定赢|超过|追上/, 7],
  ["greeting", /你好|早上好|中午好|下午好|晚上好|嗨|hello|hi|有人吗|在吗/, 8],
  ["casual", /哈哈|笑死|无聊|聊什么|今天玩|刚上线|睡了|晚安|早安/, 5],
];

function competitorMentionDetails(text) {
  const cleanText = cleanChatText(text);
  const lowerText = cleanText.toLocaleLowerCase();
  for (const profile of DAILY_COMPETITORS) {
    const name = profile.name.toLocaleLowerCase();
    const atMentioned = lowerText.includes(`@${name}`) || lowerText.includes(`＠${name}`);
    if (atMentioned || lowerText.includes(name)) {
      let focusText = cleanText;
      for (const prefix of [`@${profile.name}`, `＠${profile.name}`, profile.name]) {
        focusText = focusText.replaceAll(prefix, " ");
      }
      return {
        profile,
        explicit: atMentioned,
        focusText: cleanChatText(focusText).replace(/\s+/g, " ").trim(),
      };
    }
  }
  return { profile: null, explicit: false, focusText: cleanText };
}

function analyzeCompetitorIntent(text, recentMessages = []) {
  const cleanText = cleanChatText(text);
  const mention = competitorMentionDetails(cleanText);
  const focusText = mention.focusText || cleanText;
  const lowerText = focusText.toLocaleLowerCase();
  const scores = new Map();
  for (const [intent, pattern, weight] of RIVAL_INTENT_RULES) {
    const match = lowerText.match(pattern);
    if (!match) continue;
    const repeats = Math.min(3, lowerText.split(match[0]).length - 1);
    scores.set(intent, (scores.get(intent) || 0) + weight + Math.max(0, repeats - 1) * 2);
  }
  const isQuestion = /[?？]|怎么|为什么|为啥|多少|哪个|能不能|是不是|如何|咋/.test(focusText);
  const directProfile = mention.profile;
  if (isQuestion && scores.size === 0) scores.set("question", 5);
  if (cleanText.length <= 12 && scores.size <= 1) {
    const recent = [...(Array.isArray(recentMessages) ? recentMessages : [])]
      .reverse()
      .find((message) => message && !message.recalled && cleanChatText(message.text));
    if (recent) {
      for (const [intent, pattern, weight] of RIVAL_INTENT_RULES) {
        if (pattern.test(String(recent.text || "").toLocaleLowerCase())) {
          scores.set(intent, Math.max(scores.get(intent) || 0, Math.ceil(weight * 0.55)));
        }
      }
    }
  }
  const ordered = [...scores.entries()].sort((left, right) => right[1] - left[1]);
  return {
    cleanText,
    focusText,
    lowerText,
    directProfile,
    explicitMention: mention.explicit,
    isQuestion,
    intent: ordered[0]?.[0] || "general",
    secondaryIntent: ordered[1]?.[0] || "",
    confidence: ordered[0]?.[1] || 0,
  };
}

function competitorReplyCategory(text, recentMessages = []) {
  return analyzeCompetitorIntent(text, recentMessages).intent;
}

function specificCompetitorAnswer(analysis, accountName) {
  const value = analysis.lowerText;
  const mention = `@${cleanName(accountName) || "玩家"}`;
  if (/蟹老板/.test(value) && /金币|吸币|三倍/.test(value)) {
    return `${mention} 蟹老板不是每局都三倍：每 3 局只有 1 局进入金蟹局，那一局吸币范围更大、金币按三倍结算。先看开局有没有金蟹提示。`;
  }
  if (/第三跳|三连跳/.test(value) && /一直|无限|飞|重置|落地/.test(value)) {
    return `${mention} 第三跳用完后必须真正落地才会重置；它比前两跳矮、耗体力更多，连续狂按反而容易卡在错误节奏。`;
  }
  if (/洞穴/.test(value) && /掉血|扣血|死/.test(value)) {
    return `${mention} 正常进入洞穴会先清掉入口附近危险、回满生命并给短暂无敌，不应该因为“进入”本身掉血。要是还发生，请说关卡和碰到的东西，我按顺序复现。`;
  }
  if (/排行榜|玩家列表|排名/.test(value) && /只有|只显示|看不到|几个人|其他人/.test(value)) {
    return `${mention} 已注册但没成绩的人也应该显示成“尚未挑战”。如果只看到少数人，属于账号列表没有完整同步，不是其他玩家被删除；后台可以重新扫描全部注册账号。`;
  }
  if (/蹲|下滑|向下键/.test(value) && /二层|平台|上面|撞/.test(value)) {
    return `${mention} 低平台要在碰到前按住向下，松手会马上站起；只是点一下不会持续蹲。没蹲却穿过去的话，把关卡和平台位置说一下，那是碰撞判定问题。`;
  }
  if (/飞机/.test(value) && /炸弹|掉血|撞/.test(value)) {
    return `${mention} 飞机本体在空中撞到会必掉血；炸弹落地后按爆炸范围扣半颗心。听见飞机声先留一次空中跳，别马上把跳数用完。`;
  }
  return "";
}

const RIVAL_REPLY_RELEVANCE = {
  weather: /天气|气温|温度|下雨|降雨|晴|多云|风力|湿度|空气质量|预报/,
  news: /新闻|消息|报道|赛事|比赛|发布|宣布|发生|来源/,
  ranking: /排行|排名|赛季|冠军|成绩|玩家/,
  account: /账号|登录|注册|密码|记录|名字|头像|金币|在线/,
  battle: /对战|PK|pk|房间|邀请|难度|大招|准备/,
  controls: /蹲|下滑|按住|松手|方向|控制|跳/,
  hazards: /飞机|炸弹|足球|乌鸦|落石|石头|树枝|爆炸|掉血|伤害/,
  cave: /洞穴|黑暗|手电|太阳|变暗|照亮/,
  cliff: /悬崖|崖|洞|掉下|掉进|边缘|补跳|落点/,
  jump: /跳|落地|起跳|空中|后空翻|体力/,
  coins: /金币|大金币|吸币|三倍|余额|兑换/,
  bug: /问题|异常|复现|判定|卡|网络|操作|关卡/,
  character: /人物|角色|技能|灵敏|体力|跳|强哥|贝贝|梅西|姆巴佩|哈兰德|蟹老板|志炫|元元|果果|启航|云青|哆啦/,
  challenge: /对战|PK|pk|难度|成绩|结果|比/,
};

function ensurePlayerMention(text, accountName) {
  const mention = `@${cleanName(accountName) || "玩家"}`;
  const value = cleanChatText(text);
  if (!value) return "";
  return value.includes(mention) ? value : cleanChatText(`${mention} ${value}`);
}

function isCompetitorReplyRelevant(text, analysis) {
  const value = cleanChatText(text);
  if (!value) return false;
  if (
    !["greeting", "casual"].includes(analysis.intent) &&
    /刚上线[，,]今天打算|聊天室刚好缺个人|我先学一下你们的路线|今天准备玩哪关/.test(value)
  ) return false;
  const relevance = RIVAL_REPLY_RELEVANCE[analysis.intent];
  if (relevance && !relevance.test(value)) return false;
  return true;
}

function directCompetitorFallback(profile, analysis, accountName, snapshot, seed) {
  const mention = `@${cleanName(accountName) || "玩家"}`;
  const specific = specificCompetitorAnswer(analysis, accountName);
  if (specific) return specific;
  if (analysis.intent === "weather") {
    return `${mention} 实时天气查询刚才没有成功，我不想随口编。你把城市和“今天/明天”写清楚，过几秒再问我一次。`;
  }
  if (analysis.intent === "news") {
    return `${mention} 实时新闻查询刚才没有成功，我不想拿旧消息冒充今天的。给我一个球员、球队或新闻关键词，过几秒再试。`;
  }
  if (analysis.intent === "greeting") {
    return `${mention} 在，我看到你叫我了。你想聊关卡路线、人物，还是直接开一局对战？`;
  }
  if (["general", "casual", "question"].includes(analysis.intent)) {
    const topic = cleanChatText(analysis.focusText || analysis.cleanText)
      .replace(/[?？!！。]+$/g, "")
      .slice(0, 42);
    return analysis.isQuestion
      ? `${mention} 我看到你问的是“${topic || "刚才那件事"}”。这条我暂时没把握，不想答偏；再补一个具体条件，我按那个回答。`
      : `${mention} 我看到你说的是“${topic || "刚才那件事"}”。我先按这个话题接，不另外扯关卡进度。`;
  }
  return composeCompetitorReply(
    profile,
    RIVAL_REPLY_PARTS[analysis.intent] ? analysis.intent : "general",
    analysis.focusText || analysis.cleanText,
    accountName,
    snapshot,
    seed,
  );
}

function normalizeOpenAIStatus(value) {
  if (!value || typeof value !== "object") return null;
  return {
    ok: value.ok === true,
    checkedAt: Math.max(0, Number(value.checkedAt) || 0),
    status: Math.max(0, Math.min(599, Math.round(Number(value.status) || 0))),
    reason: String(value.reason || "").replace(/[^a-z0-9_.-]/gi, "").slice(0, 48),
    model: String(value.model || "").replace(/[^a-z0-9_.-]/gi, "").slice(0, 48),
  };
}

async function recordOpenAIStatus(env, value) {
  if (!env?.LEADERBOARD) return;
  try {
    await env.LEADERBOARD.put(CHAT_AI_STATUS_KEY, JSON.stringify(normalizeOpenAIStatus({
      ...value,
      checkedAt: Date.now(),
      model: String(env.OPENAI_MODEL || "gpt-5.6-terra"),
    })), { expirationTtl: 7 * 24 * 60 * 60 });
  } catch {
    // Diagnostics must never block chat.
  }
}

function extractOpenAIResponseText(payload) {
  if (typeof payload?.output_text === "string") return payload.output_text;
  for (const output of (Array.isArray(payload?.output) ? payload.output : [])) {
    for (const content of (Array.isArray(output?.content) ? output.content : [])) {
      if (typeof content?.text === "string") return content.text;
    }
  }
  return "";
}

async function generateOpenAICompetitorReply(env, profile, account, analysis, recentMessages, snapshot) {
  const apiKey = String(env?.OPENAI_API_KEY || "").trim();
  if (!apiKey || !env?.LEADERBOARD) return "";
  const rateKey = `${CHAT_AI_RATE_PREFIX}${String(account?.id || cleanPlayerId(account?.playerId) || "unknown")}`;
  const lastAt = Number(await env.LEADERBOARD.get(rateKey)) || 0;
  const now = Date.now();
  const cooldownMs = analysis.directProfile ? CHAT_DIRECT_AI_COOLDOWN_MS : CHAT_QUESTION_AI_COOLDOWN_MS;
  if (lastAt && now - lastAt < cooldownMs) return "";
  await env.LEADERBOARD.put(rateKey, String(now), { expirationTtl: 90 });
  const context = (Array.isArray(recentMessages) ? recentMessages : [])
    .filter((message) => message && !message.recalled && cleanChatText(message.text))
    .slice(-6)
    .map((message) => `${cleanName(message.name) || "玩家"}：${cleanChatText(message.text)}`)
    .join("\n");
  const wantsCurrentInformation = ["weather", "news"].includes(analysis.intent);
  const useWebSearch = wantsCurrentInformation && String(env.OPENAI_WEB_SEARCH || "").toLocaleLowerCase() === "true";
  const requestBody = {
    model: String(env.OPENAI_MODEL || "gpt-5.6-terra").trim(),
    store: false,
    max_output_tokens: 180,
    instructions: [
      `你是游戏《云朵小勇士》内公开标注为自动挑战者的角色“${profile.name}”。`,
      "用自然、简短、有逻辑的中文回复，通常 1–3 句，不要机械复述问题。",
      "最后一段“必须回答的消息”是唯一主问题；最近对话只用于理解代词，不得跟着其中的旧话题跑。",
      "第一句必须直接回答玩家实际问的重点；条件不足时只追问最关键的一项（关卡、人物或操作）。",
      "除非玩家主动问你在做什么，否则不要谈自己刚上线、准备玩哪关或学习谁的路线。",
      "不要声称自己是现实中的真人，不要编造刚刚发生的战绩、新闻或天气。",
      "游戏规则：每关100分；三连跳落地才重置；第三跳更矮；洞穴入口回满血；好友对战可选难度且大招每局一次。",
      "如果使用网络查询，只陈述能核对的当前信息，不确定就说明不确定。",
      `回复开头自然地带上 @${cleanName(account?.name) || "玩家"}，总长度不超过 180 个汉字。`,
    ].join("\n"),
    input: [{
      role: "user",
      content: [{
        type: "input_text",
        text: [
          `当前意图：${analysis.intent}${analysis.secondaryIntent ? `；次要意图：${analysis.secondaryIntent}` : ""}`,
          `角色当前进度：第${snapshot.level}关；正在使用${snapshot.selectedCharacter}`,
          context ? `最近对话：\n${context}` : "最近对话：无",
          `必须回答的消息：${analysis.focusText || analysis.cleanText}`,
        ].join("\n\n"),
      }],
    }],
  };
  if (useWebSearch) requestBody.tools = [{ type: "web_search" }];
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8500);
  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });
    if (!response.ok) {
      let reason = `http_${response.status}`;
      try {
        const errorPayload = await response.json();
        reason = String(errorPayload?.error?.code || errorPayload?.error?.type || reason);
      } catch {
        // The HTTP status is enough for the safe diagnostic.
      }
      await recordOpenAIStatus(env, { ok: false, status: response.status, reason });
      return "";
    }
    const payload = await response.json();
    const reply = cleanChatText(extractOpenAIResponseText(payload));
    await recordOpenAIStatus(env, {
      ok: Boolean(reply),
      status: response.status,
      reason: reply ? "ok" : "empty_response",
    });
    return reply;
  } catch (error) {
    await recordOpenAIStatus(env, {
      ok: false,
      status: 0,
      reason: error?.name === "AbortError" ? "timeout" : "network_error",
    });
    return "";
  } finally {
    clearTimeout(timeout);
  }
}

function chatBattleInviteMetadata(profile, difficulty, now) {
  return {
    battleInvite: {
      rivalId: profile.playerId,
      rivalName: profile.name,
      difficulty: ["easy", "normal", "hard", "extreme"].includes(difficulty) ? difficulty : "normal",
      expiresAt: now + 30 * 60 * 1000,
    },
  };
}

async function triggeredCompetitorChatReplies(text, account, recentMessages, env, now = Date.now(), restartAt = RIVAL_RESTART_AT) {
  const cleanAccountName = cleanName(account?.name) || "玩家";
  const analysis = analyzeCompetitorIntent(text, recentMessages);
  if (!analysis.cleanText) return [];
  const seed = competitorChatTextSeed(`${analysis.cleanText}|${cleanAccountName}|${Math.floor(now / 45000)}`);
  const gameIntent = !["general", "casual", "greeting", "weather", "news"].includes(analysis.intent);
  const shouldReply = Boolean(
    analysis.directProfile ||
    (analysis.isQuestion && gameIntent && seed % 100 < 84) ||
    (["weather", "news"].includes(analysis.intent) && analysis.isQuestion && seed % 100 < 48) ||
    seed % 100 < 12
  );
  if (!shouldReply) return [];

  const profile = analysis.directProfile || DAILY_COMPETITORS[seed % DAILY_COMPETITORS.length];
  const snapshot = simulateCompetitor(profile, now, restartAt);
  let primaryText = "";
  const useCloudReply = Boolean(
    env?.OPENAI_API_KEY &&
    (analysis.directProfile || analysis.isQuestion)
  );
  if (useCloudReply) {
    primaryText = await generateOpenAICompetitorReply(env, profile, account, analysis, recentMessages, snapshot);
  }
  if (primaryText) {
    primaryText = ensurePlayerMention(primaryText, cleanAccountName);
    if (!isCompetitorReplyRelevant(primaryText, analysis)) primaryText = "";
  }
  if (!primaryText) primaryText = directCompetitorFallback(
    profile,
    analysis,
    cleanAccountName,
    snapshot,
    seed,
  );
  const firstDelay = analysis.directProfile
    ? 1800 + (seed % 3200)
    : 5000 + (seed % 7000);
  const directBattleRequest = Boolean(analysis.directProfile && ["battle", "challenge"].includes(analysis.intent));
  const replies = [
    competitorChatMessage(
      profile,
      primaryText,
      now + firstDelay,
      restartAt,
      `r${(seed % 1679616).toString(36)}-0`,
      directBattleRequest ? chatBattleInviteMetadata(profile, "normal", now) : {},
    ),
  ];

  const debateWanted = /不信|假的|质疑|吹|厉害|第一|不对|肯定|一定/.test(analysis.cleanText) && (seed >>> 8) % 100 < 38;
  if (debateWanted) {
    const otherProfiles = DAILY_COMPETITORS.filter((item) => item.playerId !== profile.playerId);
    const other = otherProfiles[(seed >>> 12) % otherProfiles.length];
    const secondLines = [
      `@${profile.name} 先别说满，我觉得 @${cleanAccountName} 这次描述得挺具体`,
      `等 @${cleanAccountName} 跑完这一把再判，@${profile.name} 你上次也改过口`,
      `我先站 @${cleanAccountName} 一半，另一半开同一难度验证`,
      `@${profile.name} 你说的是前半段，@${cleanAccountName} 问的明显是后面`,
      `你们继续争，我开同一关试一次，回来只报结果`,
      `@${cleanAccountName} 把人物也说一下，不然结论会差很多`,
    ];
    const secondText = secondLines[(seed >>> 17) % secondLines.length];
    replies.push(competitorChatMessage(other, secondText, now + firstDelay + 12000 + ((seed >>> 5) % 12000), restartAt, `r${(seed % 1679616).toString(36)}-1`));
  }
  return replies;
}

function competitorOutreachKey(accountId) {
  return `${CHAT_AI_OUTREACH_PREFIX}${String(accountId || "").replace(/[^a-z0-9_-]/gi, "").slice(0, 80)}`;
}

function normalizeCompetitorOutreach(value, now = Date.now()) {
  if (!value || typeof value !== "object") return {
    lastOfferedAt: 0,
    pending: null,
  };
  const rivalId = cleanPlayerId(value?.pending?.rivalId);
  const profile = DAILY_COMPETITORS.find((item) => item.playerId === rivalId);
  const expiresAt = Math.max(0, Number(value?.pending?.expiresAt) || 0);
  return {
    lastOfferedAt: Math.max(0, Number(value.lastOfferedAt) || 0),
    pending: profile && expiresAt > now ? {
      rivalId: profile.playerId,
      rivalName: profile.name,
      difficulty: ["easy", "normal", "hard", "extreme"].includes(String(value.pending.difficulty))
        ? String(value.pending.difficulty)
        : "normal",
      createdAt: Math.max(0, Number(value.pending.createdAt) || now),
      expiresAt,
    } : null,
  };
}

async function loadCompetitorOutreach(binding, accountId, now = Date.now()) {
  const stored = await binding.get(competitorOutreachKey(accountId), { type: "json" });
  return normalizeCompetitorOutreach(stored, now);
}

async function saveCompetitorOutreach(binding, accountId, state) {
  await binding.put(competitorOutreachKey(accountId), JSON.stringify(state), {
    expirationTtl: 14 * 24 * 60 * 60,
  });
}

function consentToCompetitorInvite(text) {
  const value = cleanChatText(text).replace(/@[^\s@]{1,12}/g, "").trim();
  if (/不|没空|下次|拒绝|算了|不要/.test(value)) return "decline";
  if (/^(?:好|好啊|可以|行|来|来吧|同意|接受|开吧|走|ok|yes|准备好了)[！!。.~～\s]*$/i.test(value)) return "accept";
  return "";
}

async function maybeScheduleCompetitorOutreach(binding, account, messages, now, restartAt) {
  if (!binding || !account?.id || !cleanName(account.name)) return false;
  const state = await loadCompetitorOutreach(binding, account.id, now);
  if (state.pending) return false;
  const cooldown = 48 * 60 * 60 * 1000;
  if (state.lastOfferedAt && now - state.lastOfferedAt < cooldown) return false;
  const accountCreatedAt = Math.max(0, Number(account.createdAt) || 0);
  if (accountCreatedAt && now - accountCreatedAt < 10 * 60 * 1000) return false;
  const recentlyChatted = (Array.isArray(messages) ? messages : []).some((message) =>
    String(message?.accountId) === String(account.id) &&
    Number(message?.createdAt) >= now - 72 * 60 * 60 * 1000);
  if (!recentlyChatted) return false;
  const halfDay = Math.floor(now / (12 * 60 * 60 * 1000));
  const seed = competitorChatTextSeed(`${account.id}|outreach|${halfDay}`);
  if (seed % 100 >= 14) return false;
  const profile = DAILY_COMPETITORS[seed % DAILY_COMPETITORS.length];
  const difficulty = ["easy", "normal", "normal", "hard"][(seed >>> 8) % 4];
  const difficultyName = ({ easy: "轻松", normal: "标准", hard: "困难" })[difficulty] || "标准";
  const offers = [
    `@${cleanName(account.name)} 你刚才那条路线我有点想验证。要不要来一局${difficultyName}对战？回复“同意”我再发邀请。`,
    `@${cleanName(account.name)} 今天想找个人跑一局${difficultyName}难度，你有空吗？同意的话回我一声，我等你。`,
    `@${cleanName(account.name)} 我看你最近在榜上动了，来一局${difficultyName}对战？你回复“同意”以后我再开房。`,
    `@${cleanName(account.name)} 先不争路线了，直接用${difficultyName}难度试一次？你说“同意”我就发邀请。`,
    `@${cleanName(account.name)} 我只玩一局，${difficultyName}难度。你要是同意，我再把对战入口发出来。`,
  ];
  const createdAt = now + 7000 + (seed % 16000);
  messages.push(competitorChatMessage(
    profile,
    offers[(seed >>> 12) % offers.length],
    createdAt,
    restartAt,
    `offer-${(seed % 1679616).toString(36)}`,
  ));
  await saveCompetitorOutreach(binding, account.id, {
    lastOfferedAt: now,
    pending: {
      rivalId: profile.playerId,
      rivalName: profile.name,
      difficulty,
      createdAt,
      expiresAt: now + 45 * 60 * 1000,
    },
  });
  return true;
}

async function competitorInviteConsentReply(binding, account, text, now, restartAt) {
  if (!binding || !account?.id) return [];
  const choice = consentToCompetitorInvite(text);
  if (!choice) return [];
  const state = await loadCompetitorOutreach(binding, account.id, now);
  if (!state.pending) return [];
  const profile = DAILY_COMPETITORS.find((item) => item.playerId === state.pending.rivalId);
  if (!profile) return [];
  await saveCompetitorOutreach(binding, account.id, {
    lastOfferedAt: state.lastOfferedAt || now,
    pending: null,
  });
  const seed = competitorChatTextSeed(`${account.id}|${text}|${now}`);
  if (choice === "decline") {
    const declineLines = [
      `@${cleanName(account.name)} 行，那就下次，不催你`,
      `收到 @${cleanName(account.name)}，这局我先自己跑`,
      `没事 @${cleanName(account.name)}，等你想玩再叫我`,
    ];
    return [competitorChatMessage(
      profile,
      declineLines[seed % declineLines.length],
      now + 3500 + seed % 5000,
      restartAt,
      `decline-${(seed % 1679616).toString(36)}`,
    )];
  }
  const acceptLines = [
    `@${cleanName(account.name)} 好，我准备好了。点下面“接受对战”，我在房间里等你。`,
    `收到 @${cleanName(account.name)}，邀请给你了，点一下就进对战准备页。`,
    `@${cleanName(account.name)} 来，按刚才说的难度跑一局；先点下面接受邀请。`,
  ];
  return [competitorChatMessage(
    profile,
    acceptLines[seed % acceptLines.length],
    now + 3000 + seed % 4500,
    restartAt,
    `accept-${(seed % 1679616).toString(36)}`,
    chatBattleInviteMetadata(profile, state.pending.difficulty, now),
  )];
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
    version: 4,
    seasonNumber: 1,
    startAt: now,
    endAt: now + SEASON_LENGTH_MS,
    entries: rank(entries),
    accountsBackfilledAt: 0,
    accountScanVersion: 0,
    registeredAccountCount: Math.max(0, Array.isArray(entries) ? entries.length : 0),
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
    version: 4,
    seasonNumber: Math.max(1, Math.round(Number(value.seasonNumber) || 1)),
    startAt,
    endAt,
    entries: rank(Array.isArray(value.entries) ? value.entries : []),
    accountsBackfilledAt: Math.max(0, Number(value.accountsBackfilledAt) || 0),
    accountScanVersion: Math.max(0, Math.round(Number(value.accountScanVersion) || 0)),
    registeredAccountCount: Math.max(0, Math.round(Number(value.registeredAccountCount) || 0)),
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
    // A new season resets competitive progress, but registered accounts must
    // remain visible as "registered, not challenged yet".
    state.entries = rank(state.entries.map((entry) => ({
      ...entry,
      level: 1,
      score: 0,
      time: 0,
    })));
    changed = true;
    loops += 1;
  }
  return changed;
}

function publicPayload(state, playerId, rivalRestartAt = RIVAL_RESTART_AT) {
  const now = Date.now();
  let competitors = [];
  try {
    competitors = dailyCompetitorEntries(state, now, rivalRestartAt);
  } catch {
    competitors = [];
  }
  const ranked = rank([...state.entries, ...competitors]);
  const latestWinner = state.winners[state.winners.length - 1] || null;
  const reset = playerId ? state.resets.find((item) => item.playerId === playerId) : null;
  const gifts = playerId ? state.gifts.filter((item) => item.playerId === playerId) : [];
  return {
    shared: true,
    registeredPlayerCount: Math.max(
      state.entries.length,
      Math.max(0, Number(state.registeredAccountCount) || 0),
    ),
    rankingSync: {
      version: Math.max(0, Number(state.accountScanVersion) || 0),
      lastScanAt: Math.max(0, Number(state.accountsBackfilledAt) || 0),
    },
    entries: ranked.map((rankedEntry) => {
      const {
        playerId: rawPlayerId,
        lastActiveAt,
        showOnlineStatus,
        ...entry
      } = rankedEntry;
      return {
        ...entry,
        inviteId: rawPlayerId,
        coins: entry.showCoins ? entry.coins : null,
        presence: showOnlineStatus ? presenceState(lastActiveAt, now) : "",
      };
    }),
    season: { number: state.seasonNumber, startAt: state.startAt, endAt: state.endAt },
    latestWinner: latestWinner ? {
      name: latestWinner.name,
      seasonNumber: latestWinner.seasonNumber,
      level: latestWinner.level,
      score: latestWinner.score,
      awardedAt: latestWinner.awardedAt,
    } : null,
    rewardCharacter: "doraemon",
    rewardEligible: Boolean(playerId && state.winners.some((winner) => winner.playerId === playerId)),
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
    const backfilled = await backfillRegisteredAccounts(env.LEADERBOARD, loaded.state, now);
    if (loaded.dirty || rolled || backfilled) await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
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
    const rolled = rollSeason(loaded.state, now);
    const backfilled = await backfillRegisteredAccounts(env.LEADERBOARD, loaded.state, now);
    if (loaded.dirty || rolled || backfilled) {
      await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
    }
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
      selectedCharacter: isAccountCharacterId(body?.selectedCharacter) ? String(body.selectedCharacter) : "cloud",
      unlockedCharacters: cleanPublicCharacters(body?.unlockedCharacters),
      selectedSkin: ACCOUNT_SKINS.has(String(body?.selectedSkin)) ? String(body.selectedSkin) : "light",
      battleMatches: 0,
      battleWins: 0,
      battleDraws: 0,
      battlePoints: 0,
      battleBestScore: 0,
      battleCoinsEarned: 0,
      showOnlineStatus: false,
      lastActiveAt: 0,
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
        showOnlineStatus: linkedAccount.showOnlineStatus === true,
        lastActiveAt: Math.max(0, Number(linkedAccount.lastActiveAt) || 0),
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
        showOnlineStatus: candidate.showOnlineStatus,
        lastActiveAt: candidate.lastActiveAt,
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
  return `${ACCOUNT_RECORD_PREFIX}${accountId}`;
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

function singaporeDateKey(now = Date.now()) {
  return new Date(Number(now) + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

function dailyCheckinReward(totalDays = 0) {
  const index = Math.max(0, Math.round(Number(totalDays) || 0)) % DAILY_CHECKIN_REWARDS.length;
  return { day: index + 1, ...DAILY_CHECKIN_REWARDS[index] };
}

function dailyCheckinPayload(value, now = Date.now()) {
  const gameData = sanitizeGameData(value);
  const today = singaporeDateKey(now);
  const claimedToday = gameData.dailyCheckinLastDate === today;
  const totalDays = gameData.dailyCheckinTotal;
  const completedInCycle = totalDays % DAILY_CHECKIN_REWARDS.length || (claimedToday && totalDays > 0 ? DAILY_CHECKIN_REWARDS.length : 0);
  return {
    today,
    claimedToday,
    totalDays,
    completedInCycle,
    cycleLength: DAILY_CHECKIN_REWARDS.length,
    nextReward: dailyCheckinReward(totalDays),
  };
}

function sanitizeGameData(value) {
  const data = value && typeof value === "object" ? value : {};
  const storedHeartResetVersion = Math.max(0, Math.round(Number(data.heartResetVersion) || 0));
  const requestedHeartUpgradeLevel = Math.max(0, Math.min(2, Math.round(Number(data.heartUpgradeLevel) || (data.accountUpgraded === true ? 1 : 0))));
  const heartUpgradeLevel = storedHeartResetVersion >= HEART_RESET_VERSION ? requestedHeartUpgradeLevel : 0;
  const unlocked = [...new Set((Array.isArray(data.unlockedCharacters) ? data.unlockedCharacters : ["cloud"])
    .map(String)
    .filter((id) => isAccountCharacterId(id)))];
  if (!unlocked.includes("cloud")) unlocked.unshift("cloud");
  const selected = unlocked.includes(String(data.selectedCharacter)) ? String(data.selectedCharacter) : "cloud";
  const redeemedCodes = [...new Set((Array.isArray(data.redeemedCodes) ? data.redeemedCodes : [])
    .map(cleanRedeemCode)
    .filter(Boolean))].slice(-300);
  if (data.redeemedLeosince === true && !redeemedCodes.includes("leosince")) redeemedCodes.push("leosince");
  const completed = [...new Set((Array.isArray(data.completedLevels) ? data.completedLevels : [])
    .map((level) => Math.max(1, Math.min(20, Math.round(Number(level) || 1)))))]
    .sort((a, b) => a - b);
  return {
    walletCoins: Math.max(0, Math.min(1000000000, Math.round(Number(data.walletCoins) || 0))),
    walletRevision: Math.max(0, Math.min(1000000000, Math.round(Number(data.walletRevision) || 0))),
    coinLedger: sanitizeCoinLedger(data.coinLedger),
    chatLastReadAt: Math.max(0, Math.min(Date.now() + 86400000, Math.round(Number(data.chatLastReadAt) || 0))),
    accountUpgraded: heartUpgradeLevel >= 1,
    heartUpgradeLevel,
    heartResetVersion: HEART_RESET_VERSION,
    dailyCheckinLastDate: /^\d{4}-\d{2}-\d{2}$/.test(String(data.dailyCheckinLastDate || "")) ? String(data.dailyCheckinLastDate) : "",
    dailyCheckinTotal: Math.max(0, Math.min(1000000, Math.round(Number(data.dailyCheckinTotal) || 0))),
    crabRunsPlayed: Math.max(0, Math.min(1000000, Math.round(Number(data.crabRunsPlayed) || 0))),
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
    redeemedLeosince: data.redeemedLeosince === true || redeemedCodes.includes("leosince"),
    redeemedCodes,
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
  for (const protectedCharacter of ["doraemon", "yuanyuan"]) {
    const alreadyOwned = current.unlockedCharacters.includes(protectedCharacter);
    if (alreadyOwned) {
      if (!incoming.unlockedCharacters.includes(protectedCharacter)) incoming.unlockedCharacters.push(protectedCharacter);
    } else {
      incoming.unlockedCharacters = incoming.unlockedCharacters.filter((id) => id !== protectedCharacter);
      if (incoming.selectedCharacter === protectedCharacter) incoming.selectedCharacter = "cloud";
    }
  }
  if (incoming.walletRevision !== current.walletRevision) {
    // A stale or forged browser snapshot must never replace the latest cloud balance.
    incoming.walletCoins = current.walletCoins;
    incoming.walletRevision = current.walletRevision;
  } else if (incoming.walletCoins !== current.walletCoins) {
    incoming.walletRevision = Math.min(1000000000, current.walletRevision + 1);
  }
  incoming.coinLedger = sanitizeCoinLedger([...incoming.coinLedger, ...current.coinLedger]);
  incoming.chatLastReadAt = Math.max(current.chatLastReadAt, incoming.chatLastReadAt);
  incoming.heartResetVersion = HEART_RESET_VERSION;
  incoming.heartUpgradeLevel = Math.max(current.heartUpgradeLevel, incoming.heartUpgradeLevel);
  incoming.accountUpgraded = incoming.heartUpgradeLevel >= 1;
  incoming.dailyCheckinLastDate = current.dailyCheckinLastDate;
  incoming.dailyCheckinTotal = current.dailyCheckinTotal;
  incoming.crabRunsPlayed = Math.max(current.crabRunsPlayed, incoming.crabRunsPlayed);
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
  incoming.redeemedCodes = [...new Set([...current.redeemedCodes, ...incoming.redeemedCodes])].slice(-300);
  incoming.redeemedLeosince = current.redeemedLeosince || incoming.redeemedLeosince || incoming.redeemedCodes.includes("leosince");
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
    selectedCharacter: isAccountCharacterId(value.selectedCharacter) ? String(value.selectedCharacter) : "cloud",
    unlockedCharacters: cleanPublicCharacters(value.unlockedCharacters),
    selectedSkin: ACCOUNT_SKINS.has(String(value.selectedSkin)) ? String(value.selectedSkin) : "light",
    coins: Math.max(0, Math.min(1000000000, Math.round(Number(value.coins) || 0))),
    showCoins: value.showCoins === true,
    battleInvite: normalizeChatBattleInvite(value.battleInvite),
  };
}

async function loadChatMessages(binding, now = Date.now(), includeFuture = false) {
  const stored = await binding.get(CHAT_INDEX_KEY, { type: "json" });
  const source = Array.isArray(stored) ? stored : (Array.isArray(stored?.messages) ? stored.messages : []);
  return source
    .map((message) => normalizeChatMessage(message, now))
    .filter((message) => Boolean(message) && (includeFuture || message.createdAt <= now))
    .sort((a, b) => a.createdAt - b.createdAt)
    .slice(-CHAT_MAX_MESSAGES);
}

async function saveChatMessages(binding, messages) {
  const ordered = (Array.isArray(messages) ? messages : [])
    .filter(Boolean)
    .sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
    .slice(-CHAT_MAX_MESSAGES);
  await binding.put(CHAT_INDEX_KEY, JSON.stringify({ version: 2, messages: ordered }));
}

function publicChatMessage(message, accountId, now) {
  const mine = String(message.accountId) === String(accountId);
  const publicPlayerId = cleanPlayerId(message.playerId);
  const chatBattleInvite = normalizeChatBattleInvite(message.battleInvite);
  return {
    id: message.id,
    name: message.name,
    avatar: message.avatar,
    text: message.recalled ? "" : message.text,
    createdAt: message.createdAt,
    recalled: message.recalled === true,
    mine,
    systemRival: publicPlayerId.startsWith("rival-"),
    // System competitors use the same invitation entry point as other profiles.
    // The realtime room still decides whether the target is a human or a rival.
    inviteId: publicPlayerId,
    battleInvite: chatBattleInvite && (!chatBattleInvite.expiresAt || chatBattleInvite.expiresAt > now)
      ? chatBattleInvite
      : null,
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
    const storedMessages = await loadChatMessages(env.LEADERBOARD, now, true);
    const rivalRestartAt = await loadRivalRestartAt(env.LEADERBOARD, now);
    try {
      const scheduled = await maybeScheduleCompetitorOutreach(
        env.LEADERBOARD,
        account,
        storedMessages,
        now,
        rivalRestartAt,
      );
      if (scheduled) await saveChatMessages(env.LEADERBOARD, storedMessages);
    } catch {
      // Optional rival invitations never block normal chat reads.
    }
    let competitorMessages = [];
    try {
      competitorMessages = quietDailyCompetitorMessagesNearPlayers(
        dailyCompetitorChatMessages(now, rivalRestartAt),
        storedMessages,
      );
    } catch {
      competitorMessages = [];
    }
    const messages = [...storedMessages.filter((message) => message.createdAt <= now), ...competitorMessages]
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
  const messages = await loadChatMessages(env.LEADERBOARD, now, true);

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
    try {
      const rivalRestartAt = await loadRivalRestartAt(env.LEADERBOARD, now);
      const consentReplies = await competitorInviteConsentReply(
        env.LEADERBOARD,
        account,
        text,
        now,
        rivalRestartAt,
      );
      if (consentReplies.length) {
        messages.push(...consentReplies);
      } else {
        messages.push(...await triggeredCompetitorChatReplies(
          text,
          account,
          messages.filter((item) => item.id !== id).slice(-10),
          env,
          now,
          rivalRestartAt,
        ));
      }
    } catch {
      // A player message must still be delivered if the optional in-game chatter fails.
    }
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
    dailyCheckin: dailyCheckinPayload(account.gameData),
    account: {
      id: account.id,
      name: account.name,
      playerId: account.playerId,
      showCoins: account.showCoins === true,
      showOnlineStatus: account.showOnlineStatus === true,
      avatar: cleanAvatar(account.avatar),
      gameData: sanitizeGameData(account.gameData),
      createdAt: Number(account.createdAt) || 0,
      updatedAt: Number(account.updatedAt) || 0,
    },
  };
}

async function syncAccountRanking(binding, account) {
  const now = Date.now();
  const loaded = await loadState(binding, now);
  rollSeason(loaded.state, now);
  if (loaded.state.resets.some((item) => item.playerId === account.playerId)) return;
  const index = loaded.state.entries.findIndex((entry) => entry.playerId === account.playerId);
  const gameData = sanitizeGameData(account.gameData);
  if (index >= 0) {
    loaded.state.entries[index] = {
      ...loaded.state.entries[index],
      name: account.name,
      coins: gameData.walletCoins,
      showCoins: account.showCoins === true,
      showOnlineStatus: account.showOnlineStatus === true,
      lastActiveAt: Math.max(0, Number(account.lastActiveAt) || 0),
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
      showOnlineStatus: account.showOnlineStatus === true,
      lastActiveAt: Math.max(0, Number(account.lastActiveAt) || 0),
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
  }
  loaded.state.entries = rank(loaded.state.entries);
  loaded.state.registeredAccountCount = Math.max(
    loaded.state.entries.length,
    Math.max(0, Number(loaded.state.registeredAccountCount) || 0),
  );
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

async function loadYuanyuanSales(binding) {
  const stored = await binding.get(YUANYUAN_SALES_KEY, { type: "json" });
  const source = Array.isArray(stored) ? stored : (Array.isArray(stored?.sales) ? stored.sales : []);
  const unique = new Map();
  for (const item of source) {
    const accountId = String(item?.accountId || "").trim().slice(0, 80);
    if (!accountId || unique.has(accountId)) continue;
    unique.set(accountId, {
      accountId,
      playerId: cleanPlayerId(item?.playerId),
      name: cleanName(item?.name),
      purchasedAt: Math.max(0, Math.round(Number(item?.purchasedAt) || 0)),
      price: Math.max(0, Math.round(Number(item?.price) || YUANYUAN_PRICE)),
    });
  }
  return [...unique.values()]
    .sort((a, b) => a.purchasedAt - b.purchasedAt || a.accountId.localeCompare(b.accountId))
    .slice(0, YUANYUAN_LIMIT);
}

async function saveYuanyuanSales(binding, sales) {
  const normalized = (Array.isArray(sales) ? sales : [])
    .filter((item, index, list) =>
      item?.accountId && list.findIndex((candidate) => String(candidate?.accountId) === String(item.accountId)) === index)
    .sort((a, b) => Number(a.purchasedAt) - Number(b.purchasedAt) || String(a.accountId).localeCompare(String(b.accountId)))
    .slice(0, YUANYUAN_LIMIT);
  await binding.put(YUANYUAN_SALES_KEY, JSON.stringify({
    version: 1,
    releaseAt: YUANYUAN_RELEASE_AT,
    limit: YUANYUAN_LIMIT,
    price: YUANYUAN_PRICE,
    sales: normalized,
    updatedAt: Date.now(),
  }));
  return normalized;
}

function yuanyuanStorePayload(sales, account = null, now = Date.now(), includeBuyers = false) {
  const list = Array.isArray(sales) ? sales.slice(0, YUANYUAN_LIMIT) : [];
  const accountId = String(account?.id || "");
  const payload = {
    releaseAt: YUANYUAN_RELEASE_AT,
    released: now >= YUANYUAN_RELEASE_AT,
    price: YUANYUAN_PRICE,
    limit: YUANYUAN_LIMIT,
    sold: list.length,
    remaining: Math.max(0, YUANYUAN_LIMIT - list.length),
    soldOut: list.length >= YUANYUAN_LIMIT,
    purchased: Boolean(accountId && list.some((item) => String(item.accountId) === accountId)),
  };
  if (includeBuyers) payload.buyers = list.map((item) => ({
    playerId: item.playerId,
    name: item.name,
    purchasedAt: item.purchasedAt,
    price: item.price,
  }));
  return payload;
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
    const initialGameData = sanitizeGameData(body?.gameData);
    initialGameData.unlockedCharacters = initialGameData.unlockedCharacters
      .filter((id) => !["doraemon", "yuanyuan"].includes(id));
    if (["doraemon", "yuanyuan"].includes(initialGameData.selectedCharacter)) initialGameData.selectedCharacter = "cloud";
    // Daily rewards are created by the server, never imported from a browser snapshot.
    initialGameData.dailyCheckinLastDate = "";
    initialGameData.dailyCheckinTotal = 0;
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
      showOnlineStatus: body?.showOnlineStatus === true,
      // Registering is itself a verified activity event. Starting at `now`
      // prevents a newly-created public profile from flashing a red dot before
      // its first background heartbeat arrives.
      lastActiveAt: now,
      avatar: cleanAvatar(body?.avatar),
      gameData: initialGameData,
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
    const token = await createAccountSession(env.LEADERBOARD, account.id, account.revision);
    return json(accountPayload(account, token));
  }

  const authenticated = await authenticatedAccount(request, env.LEADERBOARD);
  if (!authenticated) return json({ error: "account_unauthorized" }, 401);
  const account = authenticated.account;

  if (action === "presence") {
    const now = Date.now();
    const previous = Math.max(0, Number(account.lastActiveAt) || 0);
    if (now - previous >= PRESENCE_WRITE_THROTTLE_MS) {
      account.lastActiveAt = now;
      await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
      const loaded = await loadState(env.LEADERBOARD, now);
      const entry = loaded.state.entries.find((item) => item.playerId === account.playerId);
      if (entry) {
        entry.lastActiveAt = now;
        entry.showOnlineStatus = account.showOnlineStatus === true;
        await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
      }
    }
    return json({
      ok: true,
      lastActiveAt: Math.max(previous, Number(account.lastActiveAt) || 0),
      showOnlineStatus: account.showOnlineStatus === true,
    });
  }

  if (action === "purchaseSeasonReward") {
    const now = Date.now();
    const loaded = await loadState(env.LEADERBOARD, now);
    const rolled = rollSeason(loaded.state, now);
    if (loaded.dirty || rolled) await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
    const winningRecord = [...loaded.state.winners]
      .reverse()
      .find((winner) => winner.playerId === account.playerId);
    if (!winningRecord) return json({ error: "season_reward_not_eligible" }, 403);
    const managedCatalog = resolvedCharacterCatalog(await loadCharacterStore(env.LEADERBOARD));
    const managedDoraemon = managedCatalog.find((character) => character.id === "doraemon");
    const saleActive = managedDoraemon?.salePrice !== null &&
      managedDoraemon?.salePrice !== undefined &&
      (!Number(managedDoraemon.saleStartAt) || now >= Number(managedDoraemon.saleStartAt)) &&
      (!Number(managedDoraemon.saleEndAt) || now <= Number(managedDoraemon.saleEndAt));
    const configuredRewardPrice = Number(saleActive
      ? managedDoraemon.salePrice
      : managedDoraemon?.regularCost ?? managedDoraemon?.cost);
    const rewardPrice = Number.isFinite(configuredRewardPrice)
      ? Math.max(0, Math.round(configuredRewardPrice))
      : DORAEMON_CHAMPION_PRICE;

    const gameData = sanitizeGameData(account.gameData);
    if (gameData.unlockedCharacters.includes("doraemon")) {
      return json({
        ...accountPayload(account),
        seasonRewardPurchased: true,
        alreadyOwned: true,
      });
    }
    if (gameData.walletCoins < rewardPrice) {
      return json({ error: "season_reward_insufficient_coins" }, 409);
    }

    gameData.walletCoins -= rewardPrice;
    gameData.walletRevision = Math.min(1000000000, gameData.walletRevision + 1);
    gameData.unlockedCharacters.push("doraemon");
    gameData.selectedCharacter = "doraemon";
    appendCoinLedger(gameData, {
      id: `champion-doraemon-${winningRecord.seasonNumber}-${account.id}`.slice(0, 90),
      amount: -rewardPrice,
      balanceAfter: gameData.walletCoins,
      createdAt: now,
      type: "character_purchase",
      label: "冠军专属人物：哆啦A梦",
      detail: `第 ${winningRecord.seasonNumber} 赛季冠军专属购买`,
    });
    account.gameData = sanitizeGameData(gameData);
    account.updatedAt = now;
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    await syncAccountRanking(env.LEADERBOARD, account);
    return json({
      ...accountPayload(account),
      seasonRewardPurchased: true,
      alreadyOwned: false,
    });
  }

  if (action === "redeemCode") {
    const now = Date.now();
    const requestedCode = cleanRedeemCode(body?.code);
    if (!requestedCode) return json({ error: "redeem_code_invalid" }, 400);
    let redeemStore = await loadRedeemCodeStore(env.LEADERBOARD);
    const codeIndex = redeemStore.codes.findIndex((item) => item.code === requestedCode);
    if (codeIndex < 0) return json({ error: "redeem_code_invalid" }, 404);
    const codeRecord = redeemStore.codes[codeIndex];
    if (codeRecord.active === false) return json({ error: "redeem_code_inactive" }, 409);
    if (codeRecord.startsAt && now < codeRecord.startsAt) return json({ error: "redeem_code_not_started" }, 409);
    if (codeRecord.expiresAt && now > codeRecord.expiresAt) return json({ error: "redeem_code_expired" }, 409);

    const gameData = sanitizeGameData(account.gameData);
    if (gameData.redeemedCodes.includes(requestedCode)) return json({ error: "redeem_code_already_used" }, 409);

    let rewardCharacter = null;
    if (codeRecord.characterId) {
      const catalog = resolvedCharacterCatalog(await loadCharacterStore(env.LEADERBOARD));
      rewardCharacter = catalog.find((character) => character.id === codeRecord.characterId) || null;
      if (!rewardCharacter) return json({ error: "redeem_reward_unavailable" }, 409);
    }

    const coins = Math.max(0, Math.round(Number(codeRecord.coins) || 0));
    const characterAlreadyOwned = Boolean(rewardCharacter && gameData.unlockedCharacters.includes(rewardCharacter.id));
    if (coins > 0) {
      gameData.walletCoins = Math.min(1000000000, gameData.walletCoins + coins);
      gameData.walletRevision = Math.min(1000000000, gameData.walletRevision + 1);
      appendCoinLedger(gameData, {
        id: `redeem-code-${requestedCode}-${account.id}`.slice(0, 90),
        amount: coins,
        balanceAfter: gameData.walletCoins,
        createdAt: now,
        type: "redeem_code",
        label: codeRecord.label,
        detail: `兑换码 ${requestedCode}`,
      });
    }
    if (rewardCharacter && !characterAlreadyOwned) gameData.unlockedCharacters.push(rewardCharacter.id);
    gameData.redeemedCodes.push(requestedCode);
    gameData.redeemedCodes = [...new Set(gameData.redeemedCodes)].slice(-300);
    if (requestedCode === "leosince") gameData.redeemedLeosince = true;

    codeRecord.uses = Math.min(1000000000, Math.max(0, Number(codeRecord.uses) || 0) + 1);
    codeRecord.updatedAt = now;
    redeemStore.codes[codeIndex] = codeRecord;
    account.gameData = sanitizeGameData(gameData);
    account.updatedAt = now;
    redeemStore = await saveRedeemCodeStore(env.LEADERBOARD, redeemStore);
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    await syncAccountRanking(env.LEADERBOARD, account);
    return json({
      ...accountPayload(account),
      redeemReward: {
        code: requestedCode,
        label: codeRecord.label,
        coins,
        characterId: rewardCharacter?.id || "",
        characterName: rewardCharacter?.name || "",
        characterAlreadyOwned,
      },
    });
  }

  if (action === "dailyCheckin") {
    const now = Date.now();
    const today = singaporeDateKey(now);
    const gameData = sanitizeGameData(account.gameData);
    if (gameData.dailyCheckinLastDate === today) {
      return json({ ...accountPayload(account), alreadyClaimed: true, dailyReward: null });
    }

    const scheduled = dailyCheckinReward(gameData.dailyCheckinTotal);
    let dailyReward;
    if (scheduled.character && !gameData.unlockedCharacters.includes(scheduled.character)) {
      gameData.unlockedCharacters.push(scheduled.character);
      dailyReward = {
        day: scheduled.day,
        type: "character",
        character: scheduled.character,
        characterName: scheduled.characterName,
        coins: 0,
      };
    } else {
      const amount = Math.max(1, Math.min(500, Math.round(Number(scheduled.coins ?? scheduled.fallbackCoins) || 0)));
      gameData.walletCoins = Math.min(1000000000, gameData.walletCoins + amount);
      gameData.walletRevision = Math.min(1000000000, gameData.walletRevision + 1);
      appendCoinLedger(gameData, {
        id: `daily-checkin-${today}`,
        amount,
        balanceAfter: gameData.walletCoins,
        createdAt: now,
        type: "daily_checkin",
        label: `每日签到 · 第 ${scheduled.day} 天`,
        detail: scheduled.character ? `${scheduled.characterName}已拥有，自动换成金币` : "30 天签到奖励",
      });
      dailyReward = {
        day: scheduled.day,
        type: "coins",
        coins: amount,
        replacedCharacter: scheduled.characterName || "",
      };
    }

    gameData.dailyCheckinLastDate = today;
    gameData.dailyCheckinTotal = Math.min(1000000, gameData.dailyCheckinTotal + 1);
    account.gameData = sanitizeGameData(gameData);
    account.updatedAt = now;
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    await syncAccountRanking(env.LEADERBOARD, account);
    return json({ ...accountPayload(account), alreadyClaimed: false, dailyReward });
  }

  if (action === "storeStatus") {
    const now = Date.now();
    const [reservations, yuanyuanSales] = await Promise.all([
      loadYunqingReservations(env.LEADERBOARD),
      loadYuanyuanSales(env.LEADERBOARD),
    ]);
    return json({
      ...accountPayload(account),
      store: {
        ...yunqingStorePayload(reservations, account, now),
        yuanyuan: yuanyuanStorePayload(yuanyuanSales, account, now),
      },
    });
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
    gameData.walletRevision = Math.min(1000000000, gameData.walletRevision + 1);
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

  if (action === "purchaseYuanyuan") {
    const now = Date.now();
    const gameData = sanitizeGameData(account.gameData);
    let sales = await loadYuanyuanSales(env.LEADERBOARD);
    const existingSale = sales.find((item) => String(item.accountId) === String(account.id));

    if (gameData.unlockedCharacters.includes("yuanyuan")) {
      return json({
        ...accountPayload(account),
        alreadyOwned: true,
        store: { yuanyuan: yuanyuanStorePayload(sales, account, now) },
      });
    }

    // A stored sale is the durable proof of purchase. If the account write was
    // interrupted after its slot was secured, a retry completes the charge and
    // unlock exactly once.
    if (existingSale) {
      const ledgerId = `limited-yuanyuan-${account.id}`.slice(0, 90);
      const alreadyCharged = gameData.coinLedger.some((item) => item.id === ledgerId);
      if (!alreadyCharged && gameData.walletCoins < YUANYUAN_PRICE) {
        sales = await saveYuanyuanSales(
          env.LEADERBOARD,
          sales.filter((item) => String(item.accountId) !== String(account.id)),
        );
        return json({ error: "insufficient_coins" }, 409);
      }
      if (!alreadyCharged) {
        gameData.walletCoins -= YUANYUAN_PRICE;
        gameData.walletRevision = Math.min(1000000000, gameData.walletRevision + 1);
        appendCoinLedger(gameData, {
          id: ledgerId,
          amount: -YUANYUAN_PRICE,
          balanceAfter: gameData.walletCoins,
          createdAt: Number(existingSale.purchasedAt) || now,
          type: "character_purchase",
          label: "限量人物：元元",
          detail: `限量 ${YUANYUAN_LIMIT} 份抢购`,
        });
      }
      gameData.unlockedCharacters.push("yuanyuan");
      gameData.selectedCharacter = "yuanyuan";
      account.gameData = sanitizeGameData(gameData);
      account.updatedAt = now;
      await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
      await syncAccountRanking(env.LEADERBOARD, account);
      return json({
        ...accountPayload(account),
        alreadyOwned: false,
        repairedPurchase: true,
        store: { yuanyuan: yuanyuanStorePayload(sales, account, now) },
      });
    }

    if (now < YUANYUAN_RELEASE_AT) return json({
      error: "yuanyuan_not_released",
      releaseAt: YUANYUAN_RELEASE_AT,
    }, 409);
    if (sales.length >= YUANYUAN_LIMIT) return json({ error: "yuanyuan_sold_out" }, 409);
    if (gameData.walletCoins < YUANYUAN_PRICE) return json({ error: "insufficient_coins" }, 409);

    const sale = {
      accountId: account.id,
      playerId: account.playerId,
      name: account.name,
      purchasedAt: now,
      price: YUANYUAN_PRICE,
    };
    sales = await saveYuanyuanSales(env.LEADERBOARD, [...sales, sale]);
    if (!sales.some((item) => String(item.accountId) === String(account.id))) {
      return json({ error: "yuanyuan_sold_out" }, 409);
    }

    gameData.walletCoins -= YUANYUAN_PRICE;
    gameData.walletRevision = Math.min(1000000000, gameData.walletRevision + 1);
    gameData.unlockedCharacters.push("yuanyuan");
    gameData.selectedCharacter = "yuanyuan";
    appendCoinLedger(gameData, {
      id: `limited-yuanyuan-${account.id}`.slice(0, 90),
      amount: -YUANYUAN_PRICE,
      balanceAfter: gameData.walletCoins,
      createdAt: now,
      type: "character_purchase",
      label: "限量人物：元元",
      detail: `限量 ${YUANYUAN_LIMIT} 份抢购`,
    });
    account.gameData = sanitizeGameData(gameData);
    account.updatedAt = now;
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    await syncAccountRanking(env.LEADERBOARD, account);
    return json({
      ...accountPayload(account),
      alreadyOwned: false,
      limitedPurchase: {
        characterId: "yuanyuan",
        characterName: "元元",
        price: YUANYUAN_PRICE,
      },
      store: { yuanyuan: yuanyuanStorePayload(sales, account, now) },
    });
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
    if (battleReward > 0) gameData.walletRevision = Math.min(1000000000, gameData.walletRevision + 1);
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
    account.showOnlineStatus = body?.showOnlineStatus === true;
    account.updatedAt = Date.now();
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    await syncAccountRanking(env.LEADERBOARD, account);
    return json(accountPayload(account));
  }
  if (action === "save") {
    const state = await loadState(env.LEADERBOARD, Date.now());
    if (state.state.resets.some((item) => item.playerId === account.playerId)) return json({ error: "account_reset_pending" }, 409);
    const currentWalletRevision = sanitizeGameData(account.gameData).walletRevision;
    const incomingWalletRevision = sanitizeGameData(body?.gameData).walletRevision;
    const walletStale = incomingWalletRevision !== currentWalletRevision;
    account.gameData = mergeAccountGameData(account.gameData, body?.gameData);
    account.showCoins = body?.showCoins === true;
    account.showOnlineStatus = body?.showOnlineStatus === true;
    account.updatedAt = Date.now();
    await env.LEADERBOARD.put(accountRecordKey(account.id), JSON.stringify(account));
    await syncAccountRanking(env.LEADERBOARD, account);
    return json({ ...accountPayload(account), walletStale });
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
  account.showOnlineStatus = false;
  account.lastActiveAt = 0;
  account.revision = Math.max(1, Number(account.revision) || 1) + 1;
  account.updatedAt = Date.now();
  await binding.put(accountRecordKey(account.id), JSON.stringify(account));
  const reservations = await loadYunqingReservations(binding);
  const remainingReservations = reservations.filter((item) => String(item.accountId) !== String(account.id));
  if (remainingReservations.length !== reservations.length) await saveYunqingReservations(binding, remainingReservations);
  const yuanyuanSales = await loadYuanyuanSales(binding);
  const remainingYuanyuanSales = yuanyuanSales.filter((item) => String(item.accountId) !== String(account.id));
  if (remainingYuanyuanSales.length !== yuanyuanSales.length) {
    await saveYuanyuanSales(binding, remainingYuanyuanSales);
  }
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
    showOnlineStatus: account.showOnlineStatus === true,
    lastActiveAt: Math.max(0, Number(account.lastActiveAt) || 0),
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

async function listRegisteredAccounts(binding) {
  if (!binding || typeof binding.list !== "function") return null;
  const accounts = [];
  let cursor = "";
  let pageCount = 0;
  try {
    do {
      const options = { prefix: ACCOUNT_RECORD_PREFIX, limit: 1000 };
      if (cursor) options.cursor = cursor;
      const page = await binding.list(options);
      const keys = Array.isArray(page?.keys) ? page.keys : [];
      for (let offset = 0; offset < keys.length; offset += 40) {
        const batch = keys.slice(offset, offset + 40);
        const records = await Promise.all(batch.map((item) =>
          binding.get(String(item?.name || ""), { type: "json" }).catch(() => null)));
        for (const account of records) {
          if (account && cleanName(account.name) && cleanPlayerId(account.playerId)) accounts.push(account);
        }
      }
      cursor = page?.list_complete === false ? String(page.cursor || "") : "";
      pageCount += 1;
    } while (cursor && pageCount < 20);
    return accounts;
  } catch {
    return null;
  }
}

async function backfillRegisteredAccounts(binding, state, now = Date.now(), options = {}) {
  if (!state) return false;
  const force = options?.force === true;
  const lastScanAt = Math.max(0, Number(state.accountsBackfilledAt) || 0);
  const scanVersion = Math.max(0, Number(state.accountScanVersion) || 0);
  const scanExpired = !lastScanAt || now - lastScanAt >= ACCOUNT_SCAN_INTERVAL_MS;
  const knownCount = Math.max(0, Number(state.registeredAccountCount) || 0);
  const visiblyMissing = knownCount > state.entries.length;
  if (!force && scanVersion >= ACCOUNT_SCAN_VERSION && !scanExpired && !visiblyMissing) return false;
  const accounts = await listRegisteredAccounts(binding);
  if (!accounts) return false;
  const entriesByPlayerId = new Map(state.entries.map((entry) => [entry.playerId, entry]));
  let restoredCount = 0;
  for (const account of accounts) {
    const playerId = cleanPlayerId(account.playerId);
    if (!playerId) continue;
    let entry = entriesByPlayerId.get(playerId);
    if (!entry) {
      entry = {
        name: cleanName(account.name),
        playerId,
        level: 1,
        score: 0,
        time: 0,
        updatedAt: Math.max(0, Number(account.updatedAt) || now),
      };
      state.entries.push(entry);
      entriesByPlayerId.set(playerId, entry);
      restoredCount += 1;
    }
    updateRankingEntryFromAccount(entry, account, now);
  }
  state.entries = rank(state.entries);
  state.accountsBackfilledAt = now;
  state.accountScanVersion = ACCOUNT_SCAN_VERSION;
  state.registeredAccountCount = accounts.length;
  if (options && typeof options === "object") {
    const result = {
      scannedCount: accounts.length,
      restoredCount,
      totalVisible: state.entries.length,
    };
    if (options.result && typeof options.result === "object") Object.assign(options.result, result);
    else options.result = result;
  }
  return true;
}

function patchRawWalletBalance(rawValue, amount) {
  const text = String(rawValue || "");
  const target = Math.max(0, Math.min(1000000000, Math.round(Number(amount) || 0)));
  const walletPattern = /("walletCoins"\s*:\s*)(-?\d+(?:\.\d+)?)/;
  const walletMatch = walletPattern.exec(text);
  if (!walletMatch) return null;
  const previousBalance = Math.max(0, Math.min(1000000000, Math.round(Number(walletMatch[2]) || 0)));
  let updated = text.replace(walletPattern, (_match, prefix) => `${prefix}${target}`);
  const revisionPattern = /("walletRevision"\s*:\s*)(\d+)/;
  const revisionMatch = revisionPattern.exec(updated);
  let walletRevision = 1;
  if (revisionMatch) {
    walletRevision = Math.min(1000000000, Math.max(0, Math.round(Number(revisionMatch[2]) || 0)) + 1);
    updated = updated.replace(revisionPattern, (_match, prefix) => `${prefix}${walletRevision}`);
  } else {
    const updatedWalletMatch = walletPattern.exec(updated);
    if (!updatedWalletMatch) return null;
    const insertionAt = updatedWalletMatch.index + updatedWalletMatch[0].length;
    updated = `${updated.slice(0, insertionAt)},"walletRevision":${walletRevision}${updated.slice(insertionAt)}`;
  }
  return { updated, previousBalance, balanceAfter: target, walletRevision };
}

async function setLinkedAccountCoins(binding, playerId, amount, now, options = {}) {
  const accountId = await binding.get(playerAccountKey(playerId));
  if (!accountId) return null;
  const recordKey = accountRecordKey(String(accountId));
  const rawAccount = await binding.get(recordKey);
  if (!rawAccount) return null;
  const patched = patchRawWalletBalance(rawAccount, amount);
  if (!patched) return null;
  await binding.put(recordKey, patched.updated);
  return {
    previousBalance: patched.previousBalance,
    balanceAfter: patched.balanceAfter,
    walletRevision: patched.walletRevision,
    adjustedAt: now,
    label: cleanCoinLedgerText(options.label, 42),
  };
}

async function creditLinkedAccount(binding, playerId, giftId, amount, now) {
  const account = await loadLinkedAccount(binding, playerId);
  if (!account) return null;
  const gameData = sanitizeGameData(account.gameData);
  if (!gameData.adminGiftCredits.some((credit) => credit.id === giftId)) {
    gameData.walletCoins = Math.min(1000000000, gameData.walletCoins + amount);
    gameData.walletRevision = Math.min(1000000000, gameData.walletRevision + 1);
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
  const now = Date.now();
  return {
    ok: true,
    message,
    stats: {
      totalPlayers: entries.length,
      registeredAccounts: Math.max(entries.length, Math.max(0, Number(state.registeredAccountCount) || 0)),
      challengedPlayers: entries.filter((entry) => entry.score > 0 || entry.time > 0).length,
      passedPlayers: entries.filter((entry) => entry.score >= 100).length,
      pendingResets: state.resets.length,
      issuedGifts: state.gifts.length,
      onlinePlayers: entries.filter((entry) => presenceState(entry.lastActiveAt, now) === "online").length,
    },
    season: {
      number: state.seasonNumber,
      startAt: state.startAt,
      endAt: state.endAt,
    },
    rankingSync: {
      version: Math.max(0, Number(state.accountScanVersion) || 0),
      lastScanAt: Math.max(0, Number(state.accountsBackfilledAt) || 0),
      intervalMs: ACCOUNT_SCAN_INTERVAL_MS,
    },
    entries,
  };
}

function characterCatalogPayload(storeValue, message = "") {
  const store = normalizeCharacterStore(storeValue);
  return {
    ok: true,
    message,
    version: store.version,
    updatedAt: store.updatedAt,
    serverTime: Date.now(),
    characters: resolvedCharacterCatalog(store),
  };
}

async function handlePublicCharacters(request, env) {
  if (request.method !== "GET") return json({ error: "method_not_allowed" }, 405);
  const store = await loadCharacterStore(env.LEADERBOARD);
  return json(characterCatalogPayload(store));
}

async function handleAdminCharacters(request, env) {
  if (!env.LEADERBOARD) return json({ error: "kv_not_bound" }, 503);
  if (!isAdminRequest(request, env)) return json({ error: "unauthorized" }, 401);
  let store = await loadCharacterStore(env.LEADERBOARD);
  if (request.method === "GET") return json(characterCatalogPayload(store));
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const action = String(body?.action || "");
  const rawCharacter = body?.character && typeof body.character === "object" ? body.character : {};
  const id = cleanCharacterId(body?.id || rawCharacter.id);
  const builtInBase = BUILTIN_CHARACTER_CATALOG.find((character) => character.id === id);
  let message = "";

  if (action === "upsertCharacter") {
    if (!id) return json({ error: "invalid_character_id" }, 400);
    const existingCustom = store.custom.find((character) => character.id === id);
    if (!builtInBase && !id.startsWith("custom-")) return json({ error: "custom_id_required" }, 400);
    const fallback = builtInBase || existingCustom || {};
    const character = sanitizeCharacterRecord({ ...rawCharacter, id, updatedAt: Date.now() }, fallback, {
      id,
      builtIn: Boolean(builtInBase),
    });
    if (character.availableFrom && character.availableUntil && character.availableUntil <= character.availableFrom) {
      return json({ error: "invalid_availability_window" }, 400);
    }
    if (character.saleStartAt && character.saleEndAt && character.saleEndAt <= character.saleStartAt) {
      return json({ error: "invalid_sale_window" }, 400);
    }
    if (builtInBase) {
      store.overrides[id] = character;
      message = `${character.name} 已更新；玩家重新打开网站后生效。`;
    } else {
      store.custom = store.custom.filter((item) => item.id !== id);
      store.custom.push(character);
      message = existingCustom
        ? `${character.name} 已更新；玩家重新打开网站后生效。`
        : `${character.name} 已添加到人物商店。`;
    }
    store = await saveCharacterStore(env.LEADERBOARD, store);
  } else if (action === "deleteCharacter") {
    if (!id) return json({ error: "invalid_character_id" }, 400);
    if (builtInBase) return json({ error: "builtin_character_protected" }, 409);
    const existing = store.custom.find((character) => character.id === id);
    if (!existing) return json({ error: "character_not_found" }, 404);
    store.custom = store.custom.filter((character) => character.id !== id);
    store = await saveCharacterStore(env.LEADERBOARD, store);
    message = `${existing.name} 已删除；已拥有该人物的账号会自动改回基础人物。`;
  } else if (action === "resetCharacter") {
    if (!id || !builtInBase) return json({ error: "builtin_character_required" }, 400);
    delete store.overrides[id];
    store = await saveCharacterStore(env.LEADERBOARD, store);
    message = `${builtInBase.name} 已恢复默认属性。`;
  } else {
    return json({ error: "unknown_action" }, 400);
  }

  return json(characterCatalogPayload(store, message));
}

function redeemCodeAdminPayload(storeValue, message = "") {
  const store = normalizeRedeemCodeStore(storeValue);
  return {
    ok: true,
    message,
    version: store.version,
    updatedAt: store.updatedAt,
    serverTime: Date.now(),
    codes: store.codes,
  };
}

async function handleAdminRedeemCodes(request, env) {
  if (!env.LEADERBOARD) return json({ error: "kv_not_bound" }, 503);
  if (!isAdminRequest(request, env)) return json({ error: "unauthorized" }, 401);
  let store = await loadRedeemCodeStore(env.LEADERBOARD);
  if (request.method === "GET") return json(redeemCodeAdminPayload(store));
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }
  const action = String(body?.action || "");
  const requested = body?.code && typeof body.code === "object" ? body.code : {};
  const code = cleanRedeemCode(body?.codeValue || requested.code);
  let message = "";

  if (action === "upsertRedeemCode") {
    if (!code) return json({ error: "invalid_redeem_code" }, 400);
    const existing = store.codes.find((item) => item.code === code);
    const record = sanitizeRedeemCodeRecord({
      ...requested,
      code,
      uses: existing?.uses || 0,
      createdAt: existing?.createdAt || Date.now(),
      updatedAt: Date.now(),
    }, existing || { code });
    if (!record.coins && !record.characterId) return json({ error: "empty_redeem_reward" }, 400);
    if (record.startsAt && record.expiresAt && record.expiresAt <= record.startsAt) {
      return json({ error: "invalid_redeem_window" }, 400);
    }
    if (record.characterId) {
      const catalog = resolvedCharacterCatalog(await loadCharacterStore(env.LEADERBOARD));
      if (!catalog.some((character) => character.id === record.characterId)) {
        return json({ error: "redeem_character_not_found" }, 404);
      }
    }
    store.codes = store.codes.filter((item) => item.code !== code);
    store.codes.push(record);
    store = await saveRedeemCodeStore(env.LEADERBOARD, store);
    message = existing ? `兑换码 ${code} 已更新。` : `兑换码 ${code} 已创建。`;
  } else if (action === "deleteRedeemCode") {
    if (!code) return json({ error: "invalid_redeem_code" }, 400);
    const existing = store.codes.find((item) => item.code === code);
    if (!existing) return json({ error: "redeem_code_not_found" }, 404);
    store.codes = store.codes.filter((item) => item.code !== code);
    store = await saveRedeemCodeStore(env.LEADERBOARD, store);
    message = `兑换码 ${code} 已删除，之后不能再兑换。`;
  } else {
    return json({ error: "unknown_action" }, 400);
  }

  return json(redeemCodeAdminPayload(store, message));
}

async function siteControlPayload(binding, message = "") {
  const now = Date.now();
  const [lock, sales] = await Promise.all([
    loadSiteLock(binding),
    loadYuanyuanSales(binding),
  ]);
  return {
    ...siteLockPayload(lock, now, message),
    yuanyuan: yuanyuanStorePayload(sales, null, now, true),
  };
}

async function handleAdminSiteControl(request, env) {
  if (!env.LEADERBOARD) return json({ error: "kv_not_bound" }, 503);
  if (!isAdminRequest(request, env)) return json({ error: "unauthorized" }, 401);
  if (request.method === "GET") return json(await siteControlPayload(env.LEADERBOARD));
  if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid_json" }, 400);
  }

  const action = String(body?.action || "");
  const now = Date.now();
  let message = "";

  if (action === "setSiteLock") {
    const startsAt = cleanCharacterTimestamp(body?.startsAt) || now;
    const endsAt = cleanCharacterTimestamp(body?.endsAt);
    const maximumDuration = 30 * 24 * 60 * 60 * 1000;
    if (!endsAt || endsAt <= Math.max(now, startsAt) || endsAt - startsAt > maximumDuration) {
      return json({ error: "invalid_site_lock_window" }, 400);
    }
    const lock = await saveSiteLock(env.LEADERBOARD, {
      enabled: true,
      startsAt,
      endsAt,
      message: body?.message,
    });
    message = startsAt > now + 5000
      ? `已预约封锁：${new Date(startsAt).toISOString()} 开始。`
      : "网站封锁已开启，玩家页面会立即显示维护膜。";
    return json({
      ...(await siteControlPayload(env.LEADERBOARD, message)),
      lock: siteLockPayload(lock, now).lock,
    });
  }

  if (action === "unlockSite") {
    const current = await loadSiteLock(env.LEADERBOARD);
    await saveSiteLock(env.LEADERBOARD, {
      ...current,
      enabled: false,
      endsAt: now,
    });
    message = "网站封锁已解除，玩家刷新或等待自动检查后即可继续。";
    return json(await siteControlPayload(env.LEADERBOARD, message));
  }

  return json({ error: "unknown_action" }, 400);
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
    const patched = patchRawWalletBalance(raw, amount);
    if (!patched) return json({ error: "wallet_not_found" }, 409);
    await env.LEADERBOARD.put(key, patched.updated);
    return json({
      ok: true,
      phase,
      playerId,
      previousBalance: patched.previousBalance,
      balanceAfter: patched.balanceAfter,
      walletRevision: patched.walletRevision,
    });
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
  const backfilled = await backfillRegisteredAccounts(env.LEADERBOARD, loaded.state, now);
  if (request.method === "GET") {
    if (loaded.dirty || rolled || backfilled) await env.LEADERBOARD.put(SEASON_KEY, JSON.stringify(loaded.state));
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
    if (!player) return json({ error: "player_not_found" }, 404);
    Object.assign(player, { level: 1, score: 0, time: 0, updatedAt: now });
    loaded.state.entries = rank(loaded.state.entries);
    message = `${player.name} 的闯关成绩已归零；注册账号仍会保留在玩家列表。`;
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
    loaded.state.entries = rank(loaded.state.entries.map((entry) => ({
      ...entry,
      level: 1,
      score: 0,
      time: 0,
      updatedAt: now,
    })));
    message = "当前赛季成绩已全部归零；所有注册账号仍保留在玩家列表。";
  } else if (action === "repairLeaderboard") {
    const repair = {};
    const repaired = await backfillRegisteredAccounts(env.LEADERBOARD, loaded.state, now, { force: true, result: repair });
    const result = repair.scannedCount !== undefined ? repair : {
      scannedCount: loaded.state.registeredAccountCount,
      restoredCount: 0,
      totalVisible: loaded.state.entries.length,
    };
    message = repaired
      ? `已扫描 ${result.scannedCount} 个注册账号，补回 ${result.restoredCount} 人；当前显示 ${result.totalVisible} 位真实玩家。`
      : "账号扫描暂时没有完成，请稍后再点一次；现有玩家记录没有被删除。";
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
      const siteLockExempt = url.pathname === "/api/site-status" ||
        url.pathname === "/api/health" ||
        url.pathname.startsWith("/api/admin");
      if (
        request.method !== "OPTIONS" &&
        url.pathname.startsWith("/api/") &&
        !siteLockExempt &&
        env.LEADERBOARD
      ) {
        const status = siteLockPayload(await loadSiteLock(env.LEADERBOARD), Date.now());
        if (status.lock.active) {
          return json({
            error: "site_locked",
            serverTime: status.serverTime,
            lock: status.lock,
          }, 423);
        }
      }
      if (url.pathname === "/api/site-status") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return handlePublicSiteStatus(request, env);
      }
      if (url.pathname === "/api/health") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        if (request.method !== "GET") return json({ error: "method_not_allowed" }, 405);
        const lockStatus = siteLockPayload(await loadSiteLock(env.LEADERBOARD), Date.now()).lock;
        const openAILastCheck = env.LEADERBOARD
          ? normalizeOpenAIStatus(await env.LEADERBOARD.get(CHAT_AI_STATUS_KEY, { type: "json" }))
          : null;
        return json({
          ok: true,
          version: "v52",
          rankingRepairVersion: ACCOUNT_SCAN_VERSION,
          localReplyVariants: LOCAL_REPLY_VARIANT_COUNT,
          openAIConfigured: Boolean(env.OPENAI_API_KEY),
          openAIWebSearchEnabled: String(env.OPENAI_WEB_SEARCH || "").toLocaleLowerCase() === "true",
          openAILastCheck,
          kvBound: Boolean(env.LEADERBOARD),
          battleBound: Boolean(env.BATTLE_ROOMS),
          siteLocked: lockStatus.active,
          serverTime: Date.now(),
        });
      }
      if (url.pathname === "/api/leaderboard") {
        if (request.method === "GET") return getLeaderboard(request, env);
        if (request.method === "POST") return postLeaderboard(request, env);
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return json({ error: "method_not_allowed" }, 405);
      }
      if (url.pathname === "/api/characters") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return handlePublicCharacters(request, env);
      }
      if (url.pathname === "/api/admin") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return handleAdmin(request, env);
      }
      if (url.pathname === "/api/admin-site-control") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return handleAdminSiteControl(request, env);
      }
      if (url.pathname === "/api/admin-characters") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return handleAdminCharacters(request, env);
      }
      if (url.pathname === "/api/admin-redeem-codes") {
        if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: apiHeaders });
        return handleAdminRedeemCodes(request, env);
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
      if (url.pathname === "/admin" && (request.method === "GET" || request.method === "HEAD")) {
        const canonicalAdminUrl = new URL(request.url);
        canonicalAdminUrl.pathname = "/admin/";
        return Response.redirect(canonicalAdminUrl.toString(), 302);
      }
      if (url.pathname === "/admin/" && (request.method === "GET" || request.method === "HEAD")) {
        return env.ASSETS.fetch(request);
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
