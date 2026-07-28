(() => {
  "use strict";

  const canvas = document.getElementById("gameCanvas");
  if (!canvas || canvas.dataset.gameReady === "true") return;
  canvas.dataset.gameReady = "true";

  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) return;

  const gameShell = document.getElementById("gameShell");
  const overlay = document.getElementById("gameOverlay");
  const overlayEyebrow = document.getElementById("overlayEyebrow");
  const overlayTitle = document.getElementById("overlayTitle");
  const controlPreview = document.getElementById("controlPreview");
  const resultLine = document.getElementById("resultLine");
  const finalScore = document.getElementById("finalScore");
  const bestScore = document.getElementById("bestScore");
  const primaryButton = document.getElementById("primaryButton");
  const keyboardTip = document.getElementById("keyboardTip");
  const heartsElement = document.getElementById("hearts");
  const scoreElement = document.getElementById("score");
  const levelLabel = document.getElementById("levelLabel");
  const progressBar = document.getElementById("progressBar");
  const soundButton = document.getElementById("soundButton");
  const soundIcon = document.getElementById("soundIcon");
  const compactHudButton = document.getElementById("compactHudButton");
  const gestureHint = document.getElementById("gestureHint");
  const announcement = document.getElementById("gameAnnouncement");
  const characterShop = document.getElementById("characterShop");
  const characterGrid = document.getElementById("characterGrid");
  const shopMessage = document.getElementById("shopMessage");
  const walletBalance = document.getElementById("walletBalance");
  const walletMini = document.getElementById("walletMini");
  const homePanel = document.getElementById("homePanel");
  const levelPanel = document.getElementById("levelPanel");
  const homeButton = document.getElementById("homeButton");
  const homeWallet = document.getElementById("homeWallet");
  const levelWallet = document.getElementById("levelWallet");
  const skinOptions = document.getElementById("skinOptions");
  const levelGrid = document.getElementById("levelGrid");
  const levelResultBanner = document.getElementById("levelResultBanner");
  const missionHud = document.getElementById("missionHud");
  const missionLabel = document.getElementById("missionLabel");
  const missionProgress = document.getElementById("missionProgress");
  const pauseButton = document.getElementById("pauseButton");
  const pausePanel = document.getElementById("pausePanel");
  const resumeButton = document.getElementById("resumeButton");
  const exitRunButton = document.getElementById("exitRunButton");
  const playerNameInput = document.getElementById("playerNameInput");
  const nameError = document.getElementById("nameError");
  const leaderboardList = document.getElementById("leaderboardList");
  const leaderboardStatus = document.getElementById("leaderboardStatus");
  const leaderboardSeason = document.getElementById("leaderboardSeason");
  const leaderboardReward = document.getElementById("leaderboardReward");
  const leaderboardWinner = document.getElementById("leaderboardWinner");
  const refreshLeaderboard = document.getElementById("refreshLeaderboard");
  const rankingModeButtons = [...document.querySelectorAll("[data-ranking-mode]")];
  const nameGate = document.getElementById("nameGate");
  const entryNameInput = document.getElementById("entryNameInput");
  const entryNameButton = document.getElementById("entryNameButton");
  const entryNameError = document.getElementById("entryNameError");
  const accountUpgradeButton = document.getElementById("accountUpgradeButton");
  const accountUpgradeTitle = document.getElementById("accountUpgradeTitle");
  const accountUpgradeStatus = document.getElementById("accountUpgradeStatus");
  const dailyCheckinCard = document.getElementById("dailyCheckinCard");
  const dailyCheckinButton = document.getElementById("dailyCheckinButton");
  const dailyCheckinSummary = document.getElementById("dailyCheckinSummary");
  const dailyCheckinProgress = document.getElementById("dailyCheckinProgress");
  const dailyCheckinGrid = document.getElementById("dailyCheckinGrid");
  const dailyCheckinMessage = document.getElementById("dailyCheckinMessage");
  const redeemCodeInput = document.getElementById("redeemCodeInput");
  const redeemCodeButton = document.getElementById("redeemCodeButton");
  const redeemMessage = document.getElementById("redeemMessage");
  const accountGate = document.getElementById("accountGate");
  const registerTab = document.getElementById("registerTab");
  const loginTab = document.getElementById("loginTab");
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const registerNameInput = document.getElementById("registerNameInput");
  const registerPasswordInput = document.getElementById("registerPasswordInput");
  const registerConfirmInput = document.getElementById("registerConfirmInput");
  const registerShowCoins = document.getElementById("registerShowCoins");
  const registerShowOnlineStatus = document.getElementById("registerShowOnlineStatus");
  const registerAccountButton = document.getElementById("registerAccountButton");
  const loginNameInput = document.getElementById("loginNameInput");
  const loginPasswordInput = document.getElementById("loginPasswordInput");
  const loginAccountButton = document.getElementById("loginAccountButton");
  const accountGateMessage = document.getElementById("accountGateMessage");
  const loggedAccountName = document.getElementById("loggedAccountName");
  const accountSyncStatus = document.getElementById("accountSyncStatus");
  const showCoinsToggle = document.getElementById("showCoinsToggle");
  const showOnlineStatusToggle = document.getElementById("showOnlineStatusToggle");
  const logoutAccountButton = document.getElementById("logoutAccountButton");
  const staminaStars = document.getElementById("staminaStars");
  const staminaValue = document.getElementById("staminaValue");
  const staminaBar = document.getElementById("staminaBar");
  const yuanyuanOffer = document.getElementById("yuanyuanOffer");
  const yuanyuanCountdown = document.getElementById("yuanyuanCountdown");
  const yuanyuanStock = document.getElementById("yuanyuanStock");
  const siteLockOverlay = document.getElementById("siteLockOverlay");
  const siteLockMessage = document.getElementById("siteLockMessage");
  const siteLockCountdown = document.getElementById("siteLockCountdown");
  const siteLockWindow = document.getElementById("siteLockWindow");
  const siteLockRefreshButton = document.getElementById("siteLockRefreshButton");
  const profileButton = document.getElementById("profileButton");
  const profileButtonAvatar = document.getElementById("profileButtonAvatar");
  const profileButtonStatus = document.getElementById("profileButtonStatus");
  const profileButtonName = document.getElementById("profileButtonName");
  const profileDialog = document.getElementById("profileDialog");
  const profileCloseButton = document.getElementById("profileCloseButton");
  const profileDialogAvatar = document.getElementById("profileDialogAvatar");
  const profileDialogKicker = document.getElementById("profileDialogKicker");
  const profileDialogTitle = document.getElementById("profileDialogTitle");
  const profileDialogSubtitle = document.getElementById("profileDialogSubtitle");
  const ownProfileEditor = document.getElementById("ownProfileEditor");
  const avatarOptions = document.getElementById("avatarOptions");
  const profileSaveButton = document.getElementById("profileSaveButton");
  const profileAdminLink = document.getElementById("profileAdminLink");
  const profilePublicStats = document.getElementById("profilePublicStats");
  const profileCurrentCharacter = document.getElementById("profileCurrentCharacter");
  const profileCharacterTrait = document.getElementById("profileCharacterTrait");
  const profileOwnedCount = document.getElementById("profileOwnedCount");
  const profileOwnedCharacters = document.getElementById("profileOwnedCharacters");
  const coinHistorySection = document.getElementById("coinHistorySection");
  const coinHistoryCount = document.getElementById("coinHistoryCount");
  const coinHistoryBalance = document.getElementById("coinHistoryBalance");
  const coinHistoryList = document.getElementById("coinHistoryList");
  const homeUnlockedLevel = document.getElementById("homeUnlockedLevel");
  const homeHeartCount = document.getElementById("homeHeartCount");
  const homeHeartShortcut = document.getElementById("homeHeartShortcut");
  const homeHeartAction = document.getElementById("homeHeartAction");
  const homeReviveShortcut = document.getElementById("homeReviveShortcut");
  const homeReviveCount = document.getElementById("homeReviveCount");
  const homeReviveLimit = document.getElementById("homeReviveLimit");
  const homeReviveAction = document.getElementById("homeReviveAction");
  const dailyReviveCard = document.getElementById("dailyReviveCard");
  const dailyReviveTitle = document.getElementById("dailyReviveTitle");
  const dailyReviveSummary = document.getElementById("dailyReviveSummary");
  const dailyReviveButton = document.getElementById("dailyReviveButton");
  const dailyReviveStatus = document.getElementById("dailyReviveMessage");
  const reviveStoreStatus = document.getElementById("reviveStoreStatus");
  const reviveSingleButton = document.getElementById("reviveSingleButton");
  const reviveBundleButton = document.getElementById("reviveBundleButton");
  const reviveBundleCountdown = document.getElementById("reviveBundleCountdown");
  const reviveQuizDialog = document.getElementById("reviveQuizDialog");
  const reviveQuizForm = document.getElementById("reviveQuizForm");
  const reviveQuizCloseButton = document.getElementById("reviveQuizCloseButton");
  const reviveQuizKicker = document.getElementById("reviveQuizKicker");
  const reviveQuizTitle = document.getElementById("reviveQuizTitle");
  const reviveQuizIntro = document.getElementById("reviveQuizIntro");
  const reviveQuestionList = document.getElementById("reviveQuestionList");
  const reviveQuizSource = document.getElementById("reviveQuizSource");
  const reviveQuizStatus = document.getElementById("reviveQuizStatus");
  const reviveQuizSubmitButton = document.getElementById("reviveQuizSubmitButton");
  const revivePrompt = document.getElementById("revivePrompt");
  const revivePromptCount = document.getElementById("revivePromptCount");
  const revivePromptRemaining = document.getElementById("revivePromptRemaining");
  const reviveUseButton = document.getElementById("reviveUseButton");
  const reviveEmergencyButton = document.getElementById("reviveEmergencyButton");
  const reviveAbandonButton = document.getElementById("reviveAbandonButton");
  const revivePromptStatus = document.getElementById("revivePromptStatus");
  const homeTabButtons = [...document.querySelectorAll("[data-home-tab]")];
  const chatTabButton = homeTabButtons.find((button) => button.dataset.homeTab === "chat");
  const homeTabPanels = [...document.querySelectorAll("[data-home-panel]")];
  const storeCategoryButtons = [...document.querySelectorAll("[data-store-category]")];
  const storeCategoryPanels = [...document.querySelectorAll("[data-store-panel]")];
  const noticeDialog = document.getElementById("noticeDialog");
  const noticeCard = noticeDialog?.querySelector(".notice-card");
  const noticeIcon = document.getElementById("noticeIcon");
  const noticeKicker = document.getElementById("noticeKicker");
  const noticeTitle = document.getElementById("noticeTitle");
  const noticeMessage = document.getElementById("noticeMessage");
  const noticeDetail = document.getElementById("noticeDetail");
  const noticeActionButton = document.getElementById("noticeActionButton");
  const noticeCloseButton = document.getElementById("noticeCloseButton");
  const chatStatus = document.getElementById("chatStatus");
  const chatList = document.getElementById("chatList");
  const chatForm = document.getElementById("chatForm");
  const chatTextInput = document.getElementById("chatTextInput");
  const chatImageInput = document.getElementById("chatImageInput");
  const chatImagePreview = document.getElementById("chatImagePreview");
  const chatImagePreviewImage = document.getElementById("chatImagePreviewImage");
  const chatImageRemove = document.getElementById("chatImageRemove");
  const chatSendButton = document.getElementById("chatSendButton");
  const chatRefreshButton = document.getElementById("chatRefreshButton");
  const chatCard = document.getElementById("chatCard");
  const chatFullscreenButton = document.getElementById("chatFullscreenButton");
  const chatUnreadBadge = document.getElementById("chatUnreadBadge");
  const chatAdminToolbar = document.getElementById("chatAdminToolbar");
  const chatAdminManageButton = document.getElementById("chatAdminManageButton");
  const chatAdminSelection = document.getElementById("chatAdminSelection");
  const chatAdminSelectionCount = document.getElementById("chatAdminSelectionCount");
  const chatAdminSelectAllButton = document.getElementById("chatAdminSelectAllButton");
  const chatAdminDeleteButton = document.getElementById("chatAdminDeleteButton");
  const chatAdminCancelButton = document.getElementById("chatAdminCancelButton");
  const chatInteractionNote = document.getElementById("chatInteractionNote");
  const profileInviteButton = document.getElementById("profileInviteButton");
  const battleEntryButton = document.getElementById("battleEntryButton");
  const battleDialog = document.getElementById("battleDialog");
  const battleCloseButton = document.getElementById("battleCloseButton");
  const battleConnectionStatus = document.getElementById("battleConnectionStatus");
  const battleCreateButton = document.getElementById("battleCreateButton");
  const battleJoinForm = document.getElementById("battleJoinForm");
  const battleRoomInput = document.getElementById("battleRoomInput");
  const battleStartActions = document.getElementById("battleStartActions");
  const battleRoomPanel = document.getElementById("battleRoomPanel");
  const battleRoomCode = document.getElementById("battleRoomCode");
  const battleCopyLinkButton = document.getElementById("battleCopyLinkButton");
  const battlePlayerSlots = document.getElementById("battlePlayerSlots");
  const battleDifficultyHint = document.getElementById("battleDifficultyHint");
  const battleDifficultyButtons = [...document.querySelectorAll("[data-battle-difficulty]")];
  const battleRoomMessage = document.getElementById("battleRoomMessage");
  const battleReadyButton = document.getElementById("battleReadyButton");
  const battleLeaveButton = document.getElementById("battleLeaveButton");
  const battleFriendList = document.getElementById("battleFriendList");
  const battleInviteAlert = document.getElementById("battleInviteAlert");
  const battleInviteAvatar = document.getElementById("battleInviteAvatar");
  const battleInviteName = document.getElementById("battleInviteName");
  const battleInviteCode = document.getElementById("battleInviteCode");
  const battleAcceptInviteButton = document.getElementById("battleAcceptInviteButton");
  const battleDeclineInviteButton = document.getElementById("battleDeclineInviteButton");
  const battleLiveHud = document.getElementById("battleLiveHud");
  const battleTimeLeft = document.getElementById("battleTimeLeft");
  const battleMyScore = document.getElementById("battleMyScore");
  const battleOpponentName = document.getElementById("battleOpponentName");
  const battleOpponentScore = document.getElementById("battleOpponentScore");
  const gameControls = document.getElementById("gameControls");
  const gameControlButtons = [...document.querySelectorAll("[data-game-control]")];
  const battleUltimateButton = document.getElementById("battleUltimateButton");
  const battleResultDialog = document.getElementById("battleResultDialog");
  const battleResultIcon = document.getElementById("battleResultIcon");
  const battleResultTitle = document.getElementById("battleResultTitle");
  const battleResultScores = document.getElementById("battleResultScores");
  const battleResultMessage = document.getElementById("battleResultMessage");
  const battleResultReturnButton = document.getElementById("battleResultReturnButton");
  const battleResultHomeButton = document.getElementById("battleResultHomeButton");

  const WORLD_HEIGHT = 540;
  const GROUND_Y = 455;
  const START_X = 120;
  const GRAVITY = 1760;
  const NORMAL_HEIGHT = 62;
  const CROUCH_HEIGHT = 36;
  const MAX_LEVELS = 20;
  const TARGET_SCORE = 100;
  const MIN_LEVEL_SECONDS = 45;
  const COIN_LEDGER_LIMIT = 1000;
  const DORAEMON_CHAMPION_PRICE = 14999;
  const YUANYUAN_RELEASE_AT = Date.parse("2026-07-27T10:00:00+08:00");
  const YUANYUAN_PRICE = 999;
  const YUANYUAN_LIMIT = 3;
  const YUNQING_UNLOCK_AT = Date.parse("2026-07-16T00:00:00+08:00");
  const YUNQING_RESERVATION_PRICE = 500;
  const HEART_RESET_VERSION = 2;
  const DEFAULT_REVIVE_SETTINGS = {
    enabled: true,
    maxInventory: 3,
    dailyUseLimit: 3,
    singlePrice: 599,
    bundleEnabled: true,
    bundleQuantity: 3,
    bundlePrice: 1099,
    bundleEndsAt: Date.parse("2026-08-04T23:59:59+08:00"),
    bundleActive: true,
    dailyQuizEnabled: true,
    dailyQuizReward: 1,
    lowMaxLevel: 10,
    midMaxLevel: 15,
    emergencyLowPrice: 899,
    emergencyMidPrice: 999,
    emergencyHighPrice: 1099,
    reviveHealthPercent: 100,
    questionDays: 30,
    sourceSite: "JW.ORG",
  };
  const DAILY_CHECKIN_REWARDS = [
    { coins: 30 }, { coins: 40 }, { coins: 50 }, { coins: 60 }, { coins: 80 }, { coins: 100 },
    { character: "messi", characterName: "梅西", fallbackCoins: 200 },
    { coins: 50 }, { coins: 70 }, { coins: 100 }, { coins: 60 }, { coins: 80 }, { coins: 100 }, { coins: 150 }, { coins: 200 },
    { character: "guoguo", characterName: "果果", fallbackCoins: 300 },
    { coins: 70 }, { coins: 90 }, { coins: 110 }, { coins: 130 }, { coins: 180 }, { coins: 80 }, { coins: 100 }, { coins: 120 }, { coins: 150 }, { coins: 200 }, { coins: 250 }, { coins: 300 }, { coins: 350 },
    { character: "mbappe", characterName: "姆巴佩", fallbackCoins: 500 },
  ];
  const CHARACTER_DEFS = [
    { id: "cloud", name: "云朵小勇士", cost: 0, badge: "云", color: "#58c88b", agility: 0.96, jumpPower: 650, airJumps: 1, flipTurns: 0, flipDuration: 0, magnetRadius: 0, freeSmash: 0, staminaCapacity: 62, staminaStars: 1, trait: "稳定基础二连跳 · 体力较少 · 第4–5关灵敏度降低" },
    { id: "beibei", name: "贝贝", cost: 1899, regularCost: 1899, badge: "贝", color: "#f5a8cf", agility: 1.14, jumpPower: 735, airJumps: 2, flipTurns: 0, flipDuration: 0, magnetRadius: 9, freeSmash: 0, staminaCapacity: 132, staminaStars: 5, staminaRecovery: 38, active: false, trait: "三次连跳 · 满星体力 · 不跳时快速恢复" },
    { id: "messi", name: "梅西", cost: 499, badge: "10", color: "#8ed6ef", agility: 1.02, jumpPower: 682, airJumps: 1, flipTurns: 1, flipDuration: 0.66, magnetRadius: 0, freeSmash: 0, staminaCapacity: 72, staminaStars: 2, trait: "灵敏转身 · 二次跳 · 单圈后空翻" },
    { id: "guoguo", name: "果果", cost: 699, badge: "果", color: "#86d7b0", agility: 1.1, jumpPower: 700, airJumps: 1, flipTurns: 0, flipDuration: 0, magnetRadius: 4, freeSmash: 0, staminaCapacity: 80, staminaStars: 2, trait: "性价比之选 · 眼镜专注 · 特技少但很灵敏" },
    { id: "mbappe", name: "姆巴佩", cost: 999, badge: "⚡", color: "#5066b8", agility: 1.07, jumpPower: 712, airJumps: 1, flipTurns: 1, flipDuration: 0.58, magnetRadius: 7, freeSmash: 0, speedBoost: 1.3, staminaCapacity: 88, staminaStars: 3, trait: "极速响应 · 二次跳 · 长按/右键冲刺 · 快速后空翻" },
    { id: "yuanyuan", name: "元元", cost: YUANYUAN_PRICE, regularCost: YUANYUAN_PRICE, badge: "元", color: "#eea45d", agility: 1.08, jumpPower: 720, airJumps: 1, flipTurns: 0, flipDuration: 0, magnetRadius: 6, freeSmash: 5, staminaCapacity: 140, staminaStars: 5, staminaRecovery: 0, gravityScale: 1.02, availableFrom: YUANYUAN_RELEASE_AT, newCharacter: true, trait: "厚实体型 · 每局撞碎5块石头 · 满星耐力 · 稳定二连跳，清障特别省心" },
    { id: "haaland", name: "哈兰德", cost: 1399, badge: "9", color: "#78d7eb", agility: 1.09, jumpPower: 730, airJumps: 2, flipTurns: 0, flipDuration: 0, magnetRadius: 8, freeSmash: 0, staminaCapacity: 96, staminaStars: 3, trait: "强力高跳 · 三次连跳 · 第三跳需要蓄力" },
    { id: "qiang", name: "强哥", cost: 1699, badge: "强", color: "#e7904d", agility: 1.1, jumpPower: 742, airJumps: 2, flipTurns: 0, flipDuration: 0, magnetRadius: 12, freeSmash: 0, stoneImmune: true, speedBoost: 1.1, sunCaveDaily: true, staminaCapacity: 104, staminaStars: 4, trait: "肌肉护体 · 三次连跳 · 头顶碎石免伤 · 每日洞穴太阳" },
    { id: "sponge", name: "海绵宝宝", cost: 1999, badge: "▦", color: "#f4d84c", agility: 1.11, jumpPower: 740, airJumps: 2, flipTurns: 1, flipDuration: 0.54, magnetRadius: 14, freeSmash: 0, sunCaveDaily: true, staminaCapacity: 108, staminaStars: 4, trait: "三次连跳 · 金币吸附 · 后空翻 · 每日洞穴太阳" },
    { id: "patrick", name: "派大星", cost: 2999, badge: "★", color: "#f49aa5", agility: 1.14, jumpPower: 752, airJumps: 2, flipTurns: 1, flipDuration: 0.68, magnetRadius: 18, freeSmash: 1, sunCaveDaily: true, staminaCapacity: 122, staminaStars: 4, trait: "三次连跳 · 吸币碎石 · 后空翻 · 每日洞穴太阳" },
    { id: "qihang", name: "启航", cost: 3999, badge: "航", color: "#486a9c", agility: 0.97, jumpPower: 660, airJumps: 1, flipTurns: 0, flipDuration: 0, magnetRadius: 2, freeSmash: 0, staminaCapacity: 64, staminaStars: 1, newCharacter: true, trait: "稳健基础型 · 二次跳 · 普通体力" },
    { id: "yunqing", name: "云青", cost: 5999, badge: "青", color: "#49a99a", agility: 0.99, jumpPower: 670, airJumps: 1, flipTurns: 0, flipDuration: 0, magnetRadius: 3, freeSmash: 0, staminaCapacity: 68, staminaStars: 1, newCharacter: true, mysteryUntil: YUNQING_UNLOCK_AT, trait: "均衡基础型 · 二次跳 · 普通体力" },
    { id: "krabs", name: "蟹老板", cost: 7499, badge: "蟹", color: "#e75448", agility: 1.23, jumpPower: 770, airJumps: 2, flipTurns: 0, flipDuration: 0, magnetRadius: 12, tripleMagnetRadius: 110, freeSmash: 3, staminaCapacity: 144, staminaStars: 5, staminaRecovery: 14, newCharacter: true, trait: "三局一次金蟹局：强力吸币且金币三倍 · 蟹钳碎石三次 · 落地慢回体力" },
    { id: "zhixuan", name: "志炫", cost: 9999, badge: "炫", color: "#c64f3c", agility: 1.34, jumpPower: 800, airJumps: 2, instantTripleJump: true, flipTurns: 1, flipDuration: 0.5, magnetRadius: 30, freeSmash: 2, speedBoost: 1.24, sunCaveDaily: true, staminaCapacity: 170, staminaStars: 5, flairMoves: ["explosiveStepover", "dragToChop"], newCharacter: true, trait: "最高灵敏 · 无延迟三连跳 · 碎石两次 · 每日洞穴太阳" },
    { id: "doraemon", name: "哆啦A梦", cost: DORAEMON_CHAMPION_PRICE, regularCost: DORAEMON_CHAMPION_PRICE, rewardOnly: true, badge: "铃", color: "#42aee8", agility: 1.18, jumpPower: 765, airJumps: 2, flipTurns: 0, flipDuration: 0, magnetRadius: 34, freeSmash: 0, gravityScale: 0.78, doorCharges: 1, sunCaveDaily: true, staminaCapacity: 138, staminaStars: 5, trait: "两周冠军专属 · 竹蜻蜓 · 任意门 · 每日太阳灯" },
  ];
  const SKIN_TONES = {
    light: "#f2c49a",
    warm: "#d99869",
    tan: "#b87852",
    deep: "#75452f",
  };
  const SKIN_NAMES = { light: "浅肤色", warm: "暖肤色", tan: "小麦肤色", deep: "深肤色" };
  const AVATAR_DEFS = [
    { id: "cloud", icon: "☁", name: "云朵" },
    { id: "lightning", icon: "⚡", name: "闪电" },
    { id: "star", icon: "★", name: "星星" },
    { id: "crown", icon: "♛", name: "冠军" },
    { id: "football", icon: "⚽", name: "足球" },
    { id: "muscle", icon: "💪", name: "力量" },
    { id: "rocket", icon: "🚀", name: "火箭" },
    { id: "moon", icon: "☾", name: "月亮" },
  ];
  const HOME_ANNOUNCEMENTS = [
    {
      id: "daily-checkin-krabs-v38-20260722",
      kind: "offer",
      icon: "🦀",
      kicker: "每日奖励与新人物",
      title: "30 天签到开启，蟹老板登场！",
      message: "签到大多数时候送金币，部分日期直接送便宜人物；旧生命升级已统一回到 3 滴，5 滴血以 1999 金币重新上架。",
      detail: "蟹老板每三局有一次三倍吸币局，还能落地恢复体力并且每局撞碎三块石头。",
      actionLabel: "查看每日签到",
      actionTab: "play",
      closeLabel: "稍后再看",
    },
    {
      id: "avatar-profile-tip-v21-20260714",
      kind: "message",
      icon: "👤",
      kicker: "第一次使用提示",
      title: "头像可以点击，也可以长按！",
      message: "排行榜或聊天里的头像都能打开玩家资料；在聊天里长按头像还能快速 @对方。",
      detail: "每个账号只提示一次，进入“聊天”就能试试看。",
      actionLabel: "去聊天试试看",
      actionTab: "chat",
      closeLabel: "我知道了",
    },
    {
      id: "three-new-characters-20260714",
      kind: "offer",
      icon: "★",
      kicker: "三位新人物登场",
      title: "志炫、启航与云青加入商店",
      message: "志炫拥有最高灵敏和满星体力；启航是稳健基础型；云青将在 7 月 16 日公开能力。",
      detail: "云青开放前可花 500 金币预约，全球仅 3 个预约名额。",
      actionLabel: "去商店",
      actionTab: "shop",
      closeLabel: "稍后再看",
    },
    {
      id: "yuanyuan-limited-launch-v47-20260727",
      kind: "offer",
      icon: "元",
      kicker: "明日限量抢购",
      title: "元元 · 仅限 3 份",
      message: "7 月 27 日上午 10:00 开抢，999 金币永久解锁。元元体型厚实，每局可以撞碎 5 块石头，还有满星耐力。",
      detail: "稳定二连跳、清障能力出色，是这次活动里非常划算的闯关人物。",
      actionLabel: "查看元元",
      actionTab: "shop",
      closeLabel: "知道了",
    },
    {
      id: "online-status-guide-v48-20260726",
      kind: "message",
      icon: "●",
      kicker: "排行榜状态说明",
      title: "头像圆点代表最近上线状态",
      message: "绿色表示正在在线，蓝色表示一天内来过，红色表示超过一天没有上线。只在头像右上角显示，不公开具体时间。",
      detail: "你可以在右上角头像 → 个人中心里随时关闭“显示在线状态”；关闭后排行榜不会显示圆点。",
      actionLabel: "查看个人设置",
      actionProfile: true,
      closeLabel: "我知道了",
    },
    {
      id: "revive-card-launch-v57-20260728",
      kind: "offer",
      icon: "✚",
      kicker: "新道具 · 每日免费任务",
      title: "复活卡上线：没血也能继续！",
      message: "每天完成 3 道圣经选择题可以免费领取 1 张复活卡；商店也可单张购买，三张组合本周限时优惠。",
      detail: "每个账号最多持有 3 张、每天最多使用 3 张。题目资料全部来自 JW.ORG 官方中文内容。",
      actionLabel: "查看复活卡",
      actionTab: "shop",
      actionStoreCategory: "other",
      closeLabel: "稍后再看",
    },
  ];
  const LEVEL_NAMES = ["草原起跑", "浮木小径", "落枝预警", "双层山谷", "极速转折", "裂地冲刺", "高空连跳", "机关走廊", "极限弹跳", "风暴分界", "乌鸦围城", "双洞追击", "坠物走廊", "三层迷阵", "五次磨炼", "黑洞工厂", "极速天梯", "连续崩塌", "终极围攻", "云端王座"];
  const LEVEL_THEMES = [
    { feature: "meadow", sky: ["#65cfff", "#bcecff", "#f3fbdc"], mountain: "#92cad6", snow: "#d9f1f2", hill: ["#76d19d", "#3f9675"], soil: ["#c78a4f", "#6e4934"], grass: ["#91e58f", "#33885f"], accent: "#ffe16a", celestial: "sun" },
    { feature: "river", sky: ["#77dbef", "#c8f4f1", "#ecfbdc"], mountain: "#71b9b0", snow: "#c8ede0", hill: ["#5ec9a3", "#288c79"], soil: ["#9a7552", "#4f493b"], grass: ["#7de0a0", "#287f68"], accent: "#4cc7df", celestial: "sun" },
    { feature: "autumn", sky: ["#83c9e8", "#f5d6a0", "#fff0cf"], mountain: "#b88d6a", snow: "#e8c49a", hill: ["#d99a56", "#9a5c3f"], soil: ["#b97843", "#613b2d"], grass: ["#e9bd55", "#9a6933"], accent: "#f06b42", celestial: "sun" },
    { feature: "valley", sky: ["#77b9ed", "#c5dff5", "#efe6d3"], mountain: "#8b93a8", snow: "#ced5df", hill: ["#8ba889", "#556f68"], soil: ["#a47859", "#554038"], grass: ["#a9c77c", "#5c7955"], accent: "#d7a46b", celestial: "sun" },
    { feature: "speed", sky: ["#7755a8", "#ed8a78", "#ffd69a"], mountain: "#6e527a", snow: "#d89aa0", hill: ["#aa6271", "#643d62"], soil: ["#a96345", "#57333e"], grass: ["#ffb15a", "#b4504f"], accent: "#fff07a", celestial: "sun" },
    { feature: "rift", sky: ["#452c49", "#a33f45", "#ef874d"], mountain: "#502d36", snow: "#8e4b43", hill: ["#6f3f3b", "#342a31"], soil: ["#754134", "#281f25"], grass: ["#f07a3d", "#8e342f"], accent: "#ffcf45", celestial: "none" },
    { feature: "highsky", sky: ["#3faef4", "#9ce4ff", "#effcff"], mountain: "#b2dce9", snow: "#ffffff", hill: ["#8ed6d2", "#4fa3ae"], soil: ["#a98a6e", "#5a5360"], grass: ["#c0efae", "#5eb38c"], accent: "#ffffff", celestial: "sun" },
    { feature: "machinery", sky: ["#40586a", "#718a98", "#b6c2bf"], mountain: "#4d5e66", snow: "#87979a", hill: ["#667b75", "#394c4d"], soil: ["#655b50", "#2e3234"], grass: ["#d2a84f", "#75633f"], accent: "#ffd164", celestial: "none" },
    { feature: "bounce", sky: ["#8d74df", "#e6a7ed", "#ffe1f2"], mountain: "#8c76bd", snow: "#e6d1ff", hill: ["#70cddd", "#497cb2"], soil: ["#a36688", "#503b67"], grass: ["#7cf0d0", "#3aa0a8"], accent: "#fff36f", celestial: "sun" },
    { feature: "storm", sky: ["#1e314c", "#51667a", "#97a6ac"], mountain: "#303c4a", snow: "#73808a", hill: ["#53696b", "#2d4148"], soil: ["#65594d", "#2c3035"], grass: ["#829b70", "#405a55"], accent: "#d9ecff", celestial: "none" },
    { feature: "crows", sky: ["#171632", "#3d3461", "#8a6587"], mountain: "#2a2744", snow: "#62546f", hill: ["#4d4b63", "#25263c"], soil: ["#5a483f", "#262331"], grass: ["#777357", "#3b423d"], accent: "#f4e4a5", celestial: "moon" },
    { feature: "desert", sky: ["#67b9e8", "#f1c77f", "#ffe7b1"], mountain: "#c38b55", snow: "#e6bd82", hill: ["#dca85f", "#a66b3d"], soil: ["#d39b51", "#855033"], grass: ["#eccb65", "#b17a3e"], accent: "#fff0a5", celestial: "sun" },
    { feature: "meteor", sky: ["#28375c", "#7b5679", "#df8469"], mountain: "#4a4965", snow: "#90809a", hill: ["#745968", "#3a374d"], soil: ["#795346", "#302d3b"], grass: ["#c47f54", "#72484a"], accent: "#ffc477", celestial: "moon" },
    { feature: "maze", sky: ["#553b88", "#9981c4", "#dbc9ef"], mountain: "#5e557d", snow: "#a99abb", hill: ["#6b668d", "#3f3d66"], soil: ["#71566f", "#34314a"], grass: ["#a88ac7", "#5e568b"], accent: "#f4cf77", celestial: "moon" },
    { feature: "temple", sky: ["#5f85b8", "#e2bb76", "#fff0bd"], mountain: "#8b7a68", snow: "#d8c5a1", hill: ["#9e8a5d", "#62583f"], soil: ["#98724a", "#4e4235"], grass: ["#e1bd58", "#89713f"], accent: "#ffe98a", celestial: "sun" },
    { feature: "blackhole", sky: ["#080d25", "#171b49", "#34366d"], mountain: "#24243f", snow: "#4e4a6a", hill: ["#323654", "#171a31"], soil: ["#424052", "#171824"], grass: ["#6c6bd4", "#343675"], accent: "#72e4ff", celestial: "none" },
    { feature: "ice", sky: ["#3a91cc", "#a8dff0", "#edfaff"], mountain: "#78b2ca", snow: "#f4ffff", hill: ["#74b8bf", "#3b7f91"], soil: ["#7a8790", "#384855"], grass: ["#c2f3ef", "#58aab1"], accent: "#ffffff", celestial: "sun" },
    { feature: "collapse", sky: ["#423841", "#87514c", "#d47b50"], mountain: "#554247", snow: "#89645c", hill: ["#6c554c", "#352f33"], soil: ["#724a39", "#2b2629"], grass: ["#b66b42", "#653c37"], accent: "#ffb34f", celestial: "none" },
    { feature: "fortress", sky: ["#2b182d", "#743342", "#bf5a4d"], mountain: "#3c2737", snow: "#76505d", hill: ["#573748", "#281f30"], soil: ["#5f3a38", "#241d28"], grass: ["#9c4d48", "#4f2d3c"], accent: "#ffcf63", celestial: "moon" },
    { feature: "throne", sky: ["#5b70d7", "#b9c5ff", "#fff4d8"], mountain: "#a9b7e1", snow: "#ffffff", hill: ["#d3c9ec", "#8589c7"], soil: ["#b39168", "#655679"], grass: ["#fff0a1", "#bd9f5c"], accent: "#fff7b0", celestial: "sun" },
  ];

  let levelEnd = 2700;
  let baseLevelEnd = 2700;
  let runSpeed = 198;
  let caveEnabled = false;
  let caveStartX = Infinity;
  let caveEndX = Infinity;
  const CAVE_DURATION_SECONDS = 30;
  let groundSegments = [];
  let gapBlueprints = [];
  let checkpointPositions = [START_X];
  let hazardBlueprints = [];
  let enemyBlueprints = [];
  let coinBlueprints = [];
  let springBlueprints = [];
  let crowBlueprints = [];
  let airplaneBlueprints = [];
  let specialEventBlueprints = [];

  const cloudBlueprints = [
    { x: 70, y: 112, s: 0.8 },
    { x: 430, y: 180, s: 0.55 },
    { x: 790, y: 88, s: 1.05 },
    { x: 1180, y: 150, s: 0.68 },
  ];

  function addCoinLine(target, startX, count, spacing, y) {
    for (let i = 0; i < count; i += 1) {
      target.push({ x: startX + i * spacing, y });
    }
  }

  function addCoinArc(target, startX, endX, count, baseY, lift) {
    for (let i = 0; i < count; i += 1) {
      const t = count === 1 ? 0.5 : i / (count - 1);
      target.push({
        x: startX + (endX - startX) * t,
        y: baseY - Math.sin(Math.PI * t) * lift,
      });
    }
  }

  function addCoinWave(target, startX, count, spacing, baseY, amplitude, phase = 0) {
    for (let index = 0; index < count; index += 1) {
      target.push({
        x: startX + index * spacing,
        y: baseY + Math.sin(index * 1.25 + phase) * amplitude,
        value: 1,
      });
    }
  }

  function segmentsFromGaps(gaps, end) {
    const segments = [];
    let cursor = -240;
    for (const gap of gaps.sort((a, b) => a.start - b.start)) {
      segments.push({ start: cursor, end: gap.start });
      cursor = gap.start + gap.width;
    }
    segments.push({ start: cursor, end: end + 320 });
    return segments;
  }

  function airplaneCountForLevel(level) {
    const value = Math.max(1, Math.min(MAX_LEVELS, Number(level) || 1));
    if (value <= 2) return 0;
    if (value <= 5) return 1;
    if (value <= 7) return 2;
    if (value <= 10) return 3;
    if (value <= 14) return 5 + Math.ceil((value - 10) / 2);
    return Math.min(24, 14 + (value - 15) * 2);
  }

  function levelRunSpeed(level) {
    const value = Math.max(1, Math.min(MAX_LEVELS, Number(level) || 1));
    if (value <= 5) return 192 + value * 7;
    if (value <= 10) return 232 + (value - 6) * 13;
    if (value <= 14) return 330 + (value - 11) * 18;
    return 430 + (value - 15) * 12;
  }

  function earlyCaveLevelForPlayer() {
    const source = String(playerId || "cloud-player");
    let hash = 2166136261;
    for (let index = 0; index < source.length; index += 1) {
      hash ^= source.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return 6 + (Math.abs(hash >>> 0) % 5);
  }

  function buildLevel(level, options = {}) {
    const battleCourse = options?.battle === true;
    const difficulty = level - 1;
    const hardMode = level >= 6;
    const stormMode = level >= 11;
    const masteryMode = level >= 15;
    runSpeed = levelRunSpeed(level);
    const targetSeconds = levelBaseDuration(level);
    baseLevelEnd = Math.round(START_X + runSpeed * targetSeconds);
    const caveRoll = ((level * 47 + 19) % 100) / 100;
    caveEnabled = !battleCourse && (level >= 6 && level <= 10
      ? level === earlyCaveLevelForPlayer()
      : level >= 11 && caveRoll < (level >= 15 ? 0.52 : 0.42));
    caveStartX = caveEnabled ? baseLevelEnd : Infinity;
    caveEndX = caveEnabled ? Math.round(caveStartX + runSpeed * CAVE_DURATION_SECONDS) : Infinity;
    levelEnd = caveEnabled ? caveEndX : baseLevelEnd;

    let seed = level * 92821 + 71;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    const moduleSpacing = level <= 2
      ? 1260 - (level - 1) * 40
      : level <= 5
        ? 1120 - (level - 3) * 35
        : level <= 10
          ? 900 - (level - 6) * 30
          : masteryMode
            ? 560 - (level - 15) * 12
            : 640 - (level - 11) * 14;
    const gaps = [];
    let moduleX = 940 + random() * 130;
    let moduleIndex = 0;
    while (moduleX < levelEnd - 620) {
      const wideGapBonus = level >= 6 && moduleIndex % (stormMode ? 3 : 4) === (stormMode ? 2 : 3)
        ? (stormMode ? 38 + level * 5 : 20 + level * 3)
        : 0;
      const gapWidth = (level <= 5
        ? 76 + difficulty * 4 + random() * 12
        : hardMode
        ? masteryMode
          ? 150 + (level - 15) * 7 + random() * 24
          : stormMode
            ? 125 + (level - 10) * 6 + random() * 22
            : 102 + (level - 6) * 6 + random() * 16
        : 82 + random() * 12) + wideGapBonus;
      gaps.push({ start: Math.round(moduleX), width: Math.round(gapWidth) });
      moduleIndex += 1;
      moduleX += moduleSpacing + random() * (stormMode ? 82 : hardMode ? 115 : 170);
    }

    if (caveEnabled) {
      const entrySafeEnd = caveStartX + runSpeed * (level <= 10 ? 5 : 4.2);
      for (let index = gaps.length - 1; index >= 0; index -= 1) {
        const gap = gaps[index];
        if (gap.start < entrySafeEnd && gap.start + gap.width > caveStartX - runSpeed * 1.35) gaps.splice(index, 1);
      }
      if (level <= 10) {
        const caveGaps = gaps.filter((gap) => gap.start >= caveStartX).sort((a, b) => a.start - b.start);
        const allowed = new Set(caveGaps.filter((gap, index) => index % 2 === 0 && index < 3));
        for (let index = gaps.length - 1; index >= 0; index -= 1) {
          const gap = gaps[index];
          if (gap.start < caveStartX) continue;
          if (!allowed.has(gap)) gaps.splice(index, 1);
          else gap.width = Math.min(gap.width, 118);
        }
      }
    }

    if (level >= 3 && gaps.length > 0) {
      const eligible = gaps
        .map((gap, index) => ({ gap, index }))
        .filter(({ gap }) => gap.start > START_X + 720 && gap.start < baseLevelEnd - 760);
      if (eligible.length > 0) {
        const picked = eligible[Math.floor(random() * eligible.length)];
        const singleJumpDistance = runSpeed * ((2 * CHARACTER_DEFS[0].jumpPower) / GRAVITY);
        const desiredWidth = Math.round(singleJumpDistance * (level <= 5 ? 1.04 : level <= 10 ? 1.09 : 1.17) + (level <= 5 ? 10 : level <= 10 ? 16 : 24));
        picked.gap.width = Math.max(picked.gap.width, desiredWidth);
        picked.gap.requiresDoubleJump = true;
        for (let index = gaps.length - 1; index > picked.index; index -= 1) {
          if (gaps[index].start < picked.gap.start + picked.gap.width + 250) gaps.splice(index, 1);
        }
      }
    }
    gapBlueprints = gaps.map((gap) => ({ ...gap }));
    groundSegments = segmentsFromGaps(gaps, levelEnd);
    checkpointPositions = groundSegments
      .map((segment) => Math.max(START_X, segment.start + 42))
      .filter((position) => position < levelEnd);

    hazardBlueprints = [];
    enemyBlueprints = [];
    coinBlueprints = [];
    springBlueprints = [];
    crowBlueprints = [];
    airplaneBlueprints = [];
    const introPattern = level % 4;
    if (introPattern === 0) addCoinArc(coinBlueprints, 260, 610, 8, 382, 118);
    else if (introPattern === 1) addCoinWave(coinBlueprints, 270, 8, 44, 352, 34, level * 0.4);
    else if (introPattern === 2) {
      for (let index = 0; index < 8; index += 1) coinBlueprints.push({ x: 270 + index * 44, y: 390 - Math.min(index, 7 - index) * 27 });
    } else {
      addCoinLine(coinBlueprints, 280, 4, 42, 378);
      coinBlueprints.push({ x: 505, y: 302, value: 3, big: true });
      addCoinLine(coinBlueprints, 560, 3, 38, 350);
    }

    gaps.forEach((gap, index) => {
      const rockX = gap.start - (hardMode ? 390 : 420);
      if (rockX > START_X + 250) {
        hazardBlueprints.push({
          kind: "rock",
          x: Math.round(rockX),
          w: Math.round(44 + difficulty * 2 + random() * 8),
          h: Math.round(46 + difficulty * 2.2 + random() * 10),
        });
      }

      const gapCoinPattern = (level + index) % 3;
      if (gapCoinPattern === 0) {
        addCoinArc(coinBlueprints, gap.start - 58, gap.start + gap.width + 72, hardMode ? 8 : 6, 388, 105 + difficulty * 3);
      } else if (gapCoinPattern === 1) {
        addCoinWave(coinBlueprints, gap.start - 70, hardMode ? 8 : 7, (gap.width + 140) / (hardMode ? 7 : 6), 320, 54, index);
      } else {
        const count = hardMode ? 8 : 6;
        for (let coinIndex = 0; coinIndex < count; coinIndex += 1) {
          const t = coinIndex / Math.max(1, count - 1);
          coinBlueprints.push({
            x: gap.start - 55 + (gap.width + 125) * t,
            y: 385 - (coinIndex % 2 === 0 ? 45 : 118) - Math.sin(Math.PI * t) * 32,
          });
        }
      }

      const bigCoinEvery = hardMode ? 2 : 3;
      if (index % bigCoinEvery === (hardMode ? 1 : 2)) {
        coinBlueprints.push({
          x: gap.start + gap.width * 0.5,
          y: Math.max(238, 278 - difficulty * 4),
          value: 3,
          big: true,
        });
      }

      const branchX = gap.start + gap.width + (hardMode ? 210 : 250);
      const branchAllowed = level <= 2 ? index % 2 === 1 : level <= 5 ? index % 2 === 0 : true;
      if (branchX + 126 < levelEnd - 220 && branchAllowed) {
        const longPlatform = index % 4 === 2;
        const branchWidth = longPlatform ? 190 + level * 8 : 118 + (index % 3) * 8;
        const secondLayerY = 380 - Math.min(14, difficulty + (index % 2) * 4);
        hazardBlueprints.push({
          kind: "branch",
          x: Math.round(branchX),
          w: branchWidth,
          y: secondLayerY,
          h: 30 + Math.min(5, difficulty),
          layer: 2,
          crouchObstacle: true,
        });
        if ((index + level) % 2 === 0) {
          addCoinLine(coinBlueprints, branchX + 9, longPlatform ? 7 : 4, 30, secondLayerY - 43);
        } else {
          addCoinWave(coinBlueprints, branchX + 10, longPlatform ? 7 : 4, 30, secondLayerY - 55, 22, index);
        }

        if (level >= 6 && index % 5 === 3) {
          const thirdX = branchX + Math.min(118, branchWidth * 0.42);
          const thirdWidth = 170 + level * 8;
          const thirdLayerY = Math.max(205, secondLayerY - (level >= 15 ? 142 : 132));
          if (thirdX + thirdWidth < levelEnd - 120) {
            hazardBlueprints.push({
              kind: "branch",
              x: Math.round(thirdX),
              w: thirdWidth,
              y: thirdLayerY,
              h: 27,
              layer: 3,
              harmlessUnderside: true,
            });
            addCoinLine(coinBlueprints, thirdX + 12, 6, (thirdWidth - 24) / 5, thirdLayerY - 43);
            coinBlueprints.push({ x: thirdX + thirdWidth * 0.5, y: thirdLayerY - 84, value: 3, big: true, requiresCombo: true });
          }
        }
      }

      if ((level >= 3 && index % (hardMode ? 2 : 4) === 1) && branchX + 520 < levelEnd) {
        const enemyX = branchX + 390;
        enemyBlueprints.push({
          x: Math.round(enemyX),
          minX: Math.round(enemyX - 60),
          maxX: Math.round(enemyX + 74),
          speed: 25 + level * 3 + (index % 3) * 4,
        });
      }

      if (level >= 5 && index % 4 === 2) {
        springBlueprints.push({
          x: Math.round(gap.start - 128),
          y: GROUND_Y - 10,
          w: 54,
          h: 12,
          used: false,
        });
      }

      if (hardMode && index % 2 === 0) {
        const extraRockX = gap.start + gap.width + 650;
        if (extraRockX + 80 < levelEnd && hasBlueprintGroundAt(extraRockX, gaps)) {
          hazardBlueprints.push({
            kind: "rock",
            x: Math.round(extraRockX),
            w: 48 + difficulty,
            h: 50 + difficulty * 2,
          });
        }
      }

      const stairCount = hardMode ? 5 : 4;
      for (let step = 0; step < stairCount; step += 1) {
        const peak = Math.min(step, stairCount - 1 - step);
        coinBlueprints.push({
          x: gap.start - 310 + step * 46,
          y: 382 - peak * (hardMode ? 40 : 28) - (index % 2) * 10,
          value: 1,
        });
      }
    });

    if (level >= 5) {
      const blackHoleEvery = level >= 15 ? 2 : level >= 11 ? 2 : level >= 8 ? 4 : 7;
      gaps.forEach((gap, index) => {
        if (index % blackHoleEvery !== blackHoleEvery - 1) return;
        const x = Math.round(gap.start + gap.width + (hardMode ? 515 : 610));
        const clearOfHazards = hazardBlueprints.every((hazard) => Math.abs(hazard.x - x) > 235);
        const clearOfEnemies = enemyBlueprints.every((enemy) => x < enemy.minX - 170 || x > enemy.maxX + 170);
        if (x < levelEnd - 260 && hasBlueprintGroundAt(x, gaps) && clearOfHazards && clearOfEnemies) {
          const holeWidth = level === 10 ? 100 : level <= 10 ? 92 : level <= 14 ? 88 : 84;
          const holeHeight = Math.round(holeWidth * 0.72);
          hazardBlueprints.push({
            kind: "blackHole",
            x,
            y: GROUND_Y - holeHeight,
            w: holeWidth,
            h: holeHeight,
            pull: 1 + difficulty * 0.08,
            warning: level <= 10,
            tutorial: level === 10,
          });
        }
      });
    }

    if (level >= 3) {
      const crowEvery = level >= 11 ? 2 : level >= 8 ? 3 : level >= 6 ? 4 : 6;
      gaps.forEach((gap, index) => {
        if (index % crowEvery !== 1) return;
        const x = Math.round(gap.start + gap.width + 430);
        if (x >= levelEnd - 260) return;
        const nearGroundEnemy = enemyBlueprints.some((enemy) => x > enemy.minX - 240 && x < enemy.maxX + 240);
        const nearGroundHazard = hazardBlueprints.some((hazard) => hazard.kind !== "branch" && x > hazard.x - 350 && x < hazard.x + hazard.w + 350);
        const patrolMin = x - (hardMode ? 150 : 110);
        const patrolMax = x + (hardMode ? 170 : 125);
        const clearOfGaps = gaps.every((otherGap) => patrolMax < otherGap.start - 115 || patrolMin > otherGap.start + otherGap.width + 115);
        if (nearGroundEnemy || nearGroundHazard || !clearOfGaps) return;
        const lowFlight = index % 3 === 1;
        crowBlueprints.push({
          x,
          minX: patrolMin,
          maxX: patrolMax,
          baseY: lowFlight ? 383 : 302 - Math.min(30, difficulty * 3),
          speed: 48 + level * 7 + (index % 3) * 7,
          direction: index % 2 === 0 ? 1 : -1,
          w: 48,
          h: 28,
          phase: random() * Math.PI * 2,
        });
      });
    }

    if (level >= 5) {
      const desiredHoles = level >= 15 ? Math.min(11, 8 + Math.floor((level - 15) / 2)) : level >= 11 ? 5 : level >= 8 ? 2 : 1;
      for (const segment of groundSegments) {
        if (hazardBlueprints.filter((hazard) => hazard.kind === "blackHole").length >= desiredHoles) break;
        if (segment.end - segment.start < 620) continue;
        for (let x = Math.max(520, segment.start + 230); x < segment.end - 230; x += 190) {
          const clear = hazardBlueprints.every((hazard) => Math.abs(hazard.x - x) > (hazard.kind === "branch" ? 165 : 205)) &&
            enemyBlueprints.every((enemy) => x < enemy.minX - 190 || x > enemy.maxX + 190);
          if (!clear) continue;
          const holeWidth = level === 10 ? 100 : level <= 10 ? 92 : level <= 14 ? 88 : 84;
          const holeHeight = Math.round(holeWidth * 0.72);
          hazardBlueprints.push({
            kind: "blackHole",
            x: Math.round(x),
            y: GROUND_Y - holeHeight,
            w: holeWidth,
            h: holeHeight,
            pull: 1 + difficulty * 0.08,
            warning: level <= 10,
            tutorial: level === 10,
          });
          break;
        }
      }
    }

    const desiredAirplanes = airplaneCountForLevel(level);
    if (desiredAirplanes > 0) {
      const courseEnd = Math.max(START_X + 1400, (caveEnabled ? caveStartX : levelEnd) - 310);
      const courseStart = START_X + Math.max(780, runSpeed * 3.2);
      const courseSpan = Math.max(900, courseEnd - courseStart);
      for (let index = 0; index < desiredAirplanes; index += 1) {
        const center = Math.round(courseStart + courseSpan * ((index + 1) / (desiredAirplanes + 1)));
        const patrol = 105 + Math.min(45, level * 2) + (index % 2) * 18;
        airplaneBlueprints.push({
          id: `plane-${level}-${index}`,
          x: center,
          minX: center - patrol,
          maxX: center + patrol,
          baseY: 236 + (index % 3) * 30,
          speed: 62 + level * 4 + (index % 3) * 7,
          direction: index % 2 === 0 ? -1 : 1,
          w: 82,
          h: 36,
          phase: random() * Math.PI * 2,
          dropCooldown: level >= 15 ? 0.12 + (index % 3) * 0.09 : 0.28 + (index % 4) * 0.17,
          dropsRemaining: level >= 15 ? Math.min(4, 2 + (index % 2) + Math.floor((level - 15) / 3)) : 1,
        });
      }
    }

    if (level >= 3) {
      const desiredCrows = level >= 15 ? Math.min(22, 12 + (level - 15) * 2) : level >= 11 ? 7 : level >= 8 ? 3 : level >= 6 ? 2 : 1;
      for (const segment of groundSegments) {
        if (crowBlueprints.length >= desiredCrows) break;
        if (segment.end - segment.start < 520) continue;
        for (let x = Math.max(560, segment.start + 210); x < segment.end - 210 && crowBlueprints.length < desiredCrows; x += 105) {
          const patrolMin = x - (hardMode ? 82 : 72);
          const patrolMax = x + (hardMode ? 92 : 82);
          const clear = hazardBlueprints.every((hazard) => hazard.kind === "branch" || Math.abs(hazard.x - x) > 330) &&
            enemyBlueprints.every((enemy) => x < enemy.minX - 205 || x > enemy.maxX + 205) &&
            crowBlueprints.every((crow) => Math.abs(crow.x - x) > 330);
          if (!clear) continue;
          const lowFlight = crowBlueprints.length % 2 === 0;
          crowBlueprints.push({
            x,
            minX: patrolMin,
            maxX: patrolMax,
            baseY: lowFlight ? 383 : 300 - Math.min(28, difficulty * 3),
            speed: 48 + level * 7 + (crowBlueprints.length % 3) * 6,
            direction: crowBlueprints.length % 2 === 0 ? 1 : -1,
            w: 48,
            h: 28,
            phase: random() * Math.PI * 2,
          });
        }
      }
      if (crowBlueprints.length < desiredCrows) {
        for (const segment of groundSegments) {
          if (crowBlueprints.length >= desiredCrows) break;
          if (segment.end - segment.start < 430) continue;
          const x = Math.round(Math.max(520, segment.start + (segment.end - segment.start) * 0.58));
          if (x > levelEnd - 300) continue;
          const clear = hazardBlueprints.every((hazard) => hazard.kind === "branch" || Math.abs(hazard.x - x) > 155) &&
            enemyBlueprints.every((enemy) => x < enemy.minX - 165 || x > enemy.maxX + 165) &&
            crowBlueprints.every((crow) => Math.abs(crow.x - x) > 260);
          if (!clear) continue;
          crowBlueprints.push({
            x,
            minX: x - 58,
            maxX: x + 66,
            baseY: Math.max(218, 252 - difficulty * 4),
            speed: 58 + level * 7,
            direction: crowBlueprints.length % 2 === 0 ? 1 : -1,
            w: 48,
            h: 28,
            phase: random() * Math.PI * 2,
          });
        }
      }
    }

    if (caveEnabled) {
      const safeStart = caveStartX - runSpeed * 1.25;
      const safeEnd = caveStartX + runSpeed * (level <= 10 ? 5 : 4.2);
      hazardBlueprints = hazardBlueprints.filter((hazard) => {
        if (level <= 10 && hazard.kind === "blackHole" && hazard.x >= caveStartX) return false;
        return hazard.x + (hazard.w || 0) < safeStart || hazard.x > safeEnd;
      });
      enemyBlueprints = enemyBlueprints.filter((enemy) => enemy.maxX < safeStart || enemy.minX > safeEnd);
      crowBlueprints = crowBlueprints.filter((crow) => crow.maxX < safeStart || crow.minX > safeEnd);
    }

    let previousRockX = -Infinity;
    hazardBlueprints = hazardBlueprints
      .sort((a, b) => a.x - b.x)
      .filter((hazard) => {
        if (hazard.kind !== "rock") return true;
        const fairSpacing = level >= 10 ? 240 : hardMode ? 330 : 285;
        if (hazard.x - previousRockX < fairSpacing) return false;
        previousRockX = hazard.x;
        return true;
      });

    specialEventBlueprints = [];
    const fallingScores = level === 1
      ? [72]
      : level === 2
        ? [66]
        : level === 3
          ? [58]
          : level === 4
            ? [44, 84]
            : level === 5
              ? [38, 78]
              : level <= 7
                ? [28, 60, 88]
                : level <= 10
                  ? [22, 50, 78, 94]
                  : hardMode ? [12, 31, 50, 69, 87, 96] : [20, 45, 72, 91];
    for (const triggerScore of fallingScores) {
      specialEventBlueprints.push({ kind: "fallingBranch", triggerScore });
    }
    if (level >= 4) {
      const holeScores = level === 4
        ? [82]
        : level === 5
          ? [74]
          : level <= 7
            ? [58, 88]
            : level <= 10
              ? [40, 68, 92]
              : level >= 15 ? [20, 42, 62, 80, 94] : [28, 52, 74, 92];
      for (const triggerScore of holeScores) {
        specialEventBlueprints.push({
          kind: "surpriseHole",
          triggerScore,
          width: 88 + level * 5,
        });
      }
    }
    const ballScores = level === 1
      ? [52]
      : level === 2
        ? [42, 84]
        : level === 3
          ? [34, 76]
          : level === 4
            ? [28, 62, 90]
            : level === 5
              ? [24, 58, 88]
              : level <= 7
                ? [18, 45, 72, 94]
                : level <= 10
                  ? [14, 36, 58, 80, 96]
                  : [6, 18, 30, 42, 54, 66, 78, 89, 97];
    for (const triggerScore of ballScores) {
      specialEventBlueprints.push({ kind: "fallingBall", triggerScore });
    }
    const rockScores = level === 1
      ? []
      : level === 2
        ? [72]
        : level === 3
          ? [64]
          : level === 4
            ? [54, 88]
            : level === 5
              ? [46, 82]
              : level <= 7
                ? [34, 66, 92]
                : level <= 10
                  ? [26, 54, 82, 97]
                  : [10, 27, 44, 61, 78, 91, 98];
    for (const triggerScore of rockScores) {
      specialEventBlueprints.push({ kind: "fallingRock", triggerScore });
    }
    const doubleDropScores = level <= 3
      ? []
      : level === 4
        ? [72]
        : level === 5
          ? [68]
          : level <= 7
            ? [52, 86]
            : level <= 10
              ? [44, 76, 95]
              : [24, 52, 78, 96];
    for (const triggerScore of doubleDropScores) {
      specialEventBlueprints.push({ kind: "doubleDrop", triggerScore });
    }
    const crowRushScores = level <= 4
      ? []
      : level === 5
        ? [90]
        : level <= 7
          ? [68, 94]
          : level <= 10
            ? [58, 86]
            : [34, 66, 91];
    for (const triggerScore of crowRushScores) {
      specialEventBlueprints.push({ kind: "crowRush", triggerScore });
    }
    if (stormMode) {
      const extraChaosScores = masteryMode ? [7, 17, 27, 37, 47, 57, 67, 77, 87, 95] : [11, 23, 35, 47, 59, 71, 83, 94];
      extraChaosScores.forEach((triggerScore, index) => {
        const kinds = ["doubleDrop", "crowRush", "surpriseHole", "fallingBranch"];
        specialEventBlueprints.push({
          kind: kinds[index % kinds.length],
          triggerScore,
          width: 96 + level * 5,
        });
      });
    }
    if (masteryMode) {
      const bombardmentScores = [5, 13, 21, 29, 37, 45, 53, 61, 69, 77, 85, 93, 98];
      bombardmentScores.forEach((triggerScore, index) => {
        const kinds = ["fallingRock", "doubleDrop", "fallingBall", "crowRush"];
        specialEventBlueprints.push({
          kind: kinds[(index + level) % kinds.length],
          triggerScore,
          width: 118 + (level - 15) * 4,
          masteryBombardment: true,
        });
      });
    }
    if (caveEnabled) {
      const caveKinds = level <= 10
        ? ["fallingBall", "fallingRock", "fallingBranch", "crowRush"]
        : ["fallingRock", "fallingBall", "crowRush", "surpriseHole", "doubleDrop", "fallingBranch"];
      const interval = level <= 10 ? 6.4 : level >= 15 ? 3.25 : 3.75;
      const firstCaveEventSecond = level <= 10 ? 5.6 : 3.8;
      let caveEventIndex = 0;
      for (let seconds = firstCaveEventSecond; seconds < CAVE_DURATION_SECONDS - 2.2; seconds += interval) {
        specialEventBlueprints.push({
          kind: caveKinds[(caveEventIndex + level) % caveKinds.length],
          triggerX: Math.round(caveStartX + runSpeed * seconds),
          width: 88 + Math.min(38, level * 2),
          cave: true,
        });
        caveEventIndex += 1;
      }
      coinBlueprints = coinBlueprints.filter((coin) => coin.x < caveStartX - 50);
    }
    specialEventBlueprints.sort((a, b) => {
      const aOrder = Number.isFinite(a.triggerX) ? a.triggerX : START_X + (Number(a.triggerScore) || 0) * (baseLevelEnd - START_X) / 100;
      const bOrder = Number.isFinite(b.triggerX) ? b.triggerX : START_X + (Number(b.triggerScore) || 0) * (baseLevelEnd - START_X) / 100;
      return aOrder - bOrder;
    });
  }

  function hasBlueprintGroundAt(x, gaps) {
    return !gaps.some((gap) => x >= gap.start - 30 && x <= gap.start + gap.width + 30);
  }

  const DATA_RESET_VERSION = "v9-reset-2026-07-13";

  function applyOneTimeFullReset() {
    if (String(readSetting("cloud-jumper-reset-version", "")) === DATA_RESET_VERSION) return;
    try {
      const keys = [];
      for (let index = 0; index < window.localStorage.length; index += 1) {
        const key = window.localStorage.key(index);
        if (key?.startsWith("cloud-jumper-")) keys.push(key);
      }
      for (const key of keys) window.localStorage.removeItem(key);
      window.localStorage.setItem("cloud-jumper-reset-version", DATA_RESET_VERSION);
    } catch {
      // The reset still applies naturally when storage is unavailable.
    }
  }

  applyOneTimeFullReset();

  let gameState = "home";
  let player;
  let coins = [];
  let hazards = [];
  let enemies = [];
  let springs = [];
  let crows = [];
  let airplanes = [];
  let airplaneBombs = [];
  let specialEvents = [];
  let fallingBranches = [];
  let fallingBalls = [];
  let fallingRocks = [];
  let particles = [];
  let currentLevel = 1;
  let specialCounts = { fallingBranch: 0, surpriseHole: 0, fallingBall: 0, fallingRock: 0, doubleDrop: 0, crowRush: 0, crow: 0, airplane: 0, airplaneBomb: 0, bombExplosion: 0, blackHole: 0, spring: 0, bigCoin: 0 };
  let hearts = 3;
  let maxHearts = 3;
  let coinCount = 0;
  let score = 0;
  let scoreFloat = 0;
  let previousScoreX = START_X;
  let checkpointX = START_X;
  let elapsed = 0;
  let cameraX = 0;
  let cliffFallState = null;
  let cliffRescueGrace = 0;
  let cliffRescueHintsShown = Math.max(0, Math.min(3, Number(readSetting("cloud-jumper-cliff-rescue-hints", 0)) || 0));
  let shakeTime = 0;
  let jumpBuffer = 0;
  let coyoteTime = 0;
  let lastFrame = performance.now();
  let renderFrameDelta = 1 / 60;
  let premiumEffectTimer = 0;
  let cssWidth = 1;
  let cssHeight = 1;
  let scale = 1;
  let logicalWidth = 960;
  let worldYOffset = 0;
  let viewportYOffset = 0;
  let renderDpr = 1;
  let canvasSizeDirty = true;
  let lastPassiveDrawAt = 0;
  let gesture = null;
  let keyboardCrouchHeld = false;
  let pointerCrouchHeld = false;
  let keyboardBoostHeld = false;
  let pointerBoostHeld = false;
  let keyboardMoveLeftHeld = false;
  let keyboardMoveRightHeld = false;
  let controllerMoveLeftHeld = false;
  let controllerMoveRightHeld = false;
  let boostSparkTimer = 0;
  let boostWasActive = false;
  let skillBadge = { icon: "", label: "", remaining: 0, duration: 0 };
  let flairMoveIndex = 0;
  let flairAttemptIndex = 0;
  let flairMoveCooldown = 0;
  let doorCharges = 0;
  let hintTimer = 0;
  let audioContext = null;
  let bgmTimer = 0;
  let bgmStep = 0;
  let runCoinsEarned = 0;
  let runCoinPickupCount = 0;
  let playerName = String(readSetting("cloud-jumper-player-name", "")).trim();
  let playerId = getOrCreatePlayerId();
  let lastRegisteredIdentity = "";
  let accountToken = String(readSetting("cloud-jumper-account-token", ""));
  let accountAuthenticated = false;
  let accountShowCoins = readSetting("cloud-jumper-show-coins", false) === true;
  let accountShowOnlineStatus = readSetting("cloud-jumper-show-online-status", true) !== false;
  let accountName = "";
  let accountIsAdmin = false;
  let accountAvatar = AVATAR_DEFS.some((item) => item.id === String(readSetting("cloud-jumper-avatar", "cloud")))
    ? String(readSetting("cloud-jumper-avatar", "cloud"))
    : "cloud";
  let pendingProfileAvatar = accountAvatar;
  let leaderboardSnapshot = [];
  let leaderboardSourceSnapshot = [];
  let selectedRankingMode = "overall";
  let accountSyncTimer = 0;
  let presenceTimer = 0;
  let presenceBusy = false;
  let accountSyncBusy = false;
  let accountSyncPending = false;
  let accountSyncFailureCount = 0;
  let accountRestoreBusy = false;
  let leaderboardLoading = false;
  let leaderboardLastLoadedAt = 0;
  let leaderboardHasRemoteSnapshot = false;
  let noticeActive = null;
  const noticeQueue = [];
  const queuedNoticeIds = new Set();
  const processingGiftIds = new Set();
  let characterCatalogLoaded = false;
  let pendingCharacterCatalogNotice = null;
  let doraemonPurchaseEligible = false;
  let doraemonPurchaseBusy = false;
  let selectedHomeTab = "play";
  let selectedStoreCategory = "characters";
  let chatPollTimer = 0;
  let chatUnreadPollTimer = 0;
  let chatLoading = false;
  let chatUnreadLoading = false;
  let chatPollFailureCount = 0;
  let chatUnreadFailureCount = 0;
  let chatUnreadCount = 0;
  let chatLastReadAt = Math.max(0, Number(readSetting("cloud-jumper-chat-last-read-at", 0)) || 0);
  let chatDraftImage = "";
  let chatMessagesSnapshot = [];
  let chatRenderFingerprint = "";
  let chatFullscreen = false;
  let chatForceScrollToBottom = false;
  let chatViewerIsAdmin = false;
  let chatAdminSelectionMode = false;
  const chatAdminSelectedIds = new Set();
  let publicProfileTarget = null;
  let battleSocket = null;
  let battleSocketState = "offline";
  let battleServerOffset = 0;
  let battleReconnectTimer = 0;
  let battleReconnectAttempt = 0;
  let battleRoomSnapshot = null;
  let battlePendingInvite = null;
  let battleInviteAfterCreate = "";
  let battleDifficultyAfterCreate = "";
  let battleModeActive = false;
  let battleMatchId = "";
  let battleEndsAt = 0;
  let battleScore = 0;
  let battleCoinUnits = 0;
  let battleBestCombo = 0;
  let battleCombo = 0;
  let battleLastCoinAt = 0;
  let battleBigCoins = 0;
  let battleLap = 0;
  let battleDamageTaken = 0;
  let battleUltimateUsed = false;
  let battleFinished = false;
  let battleStateSendTimer = 0;
  let battleOpponentTarget = null;
  let battleOpponentDisplay = null;
  let battleOpponentPlayerId = "";
  let battleAttack = null;
  let battleRequestedRoomCode = "";
  let battleFinalPayload = null;
  let battleResultSaving = false;
  let battleMatches = 0;
  let battleWins = 0;
  let battleDraws = 0;
  let battleRankPoints = 0;
  let battleBestScore = 0;
  let battleCoinsEarned = 0;
  const battleSeenResultIds = new Set();
  let yunqingReserved = readSetting("cloud-jumper-yunqing-reserved", false) === true;
  let yunqingReservationCount = Math.max(0, Number(readSetting("cloud-jumper-yunqing-reservation-count", 0)) || 0);
  let yunqingStoreLoading = false;
  let yuanyuanStoreStatus = {
    releaseAt: YUANYUAN_RELEASE_AT,
    released: Date.now() >= YUANYUAN_RELEASE_AT,
    price: YUANYUAN_PRICE,
    limit: YUANYUAN_LIMIT,
    sold: 0,
    remaining: YUANYUAN_LIMIT,
    soldOut: false,
    purchased: false,
  };
  let yuanyuanPurchaseBusy = false;
  let siteLockActive = false;
  let siteLockState = {
    enabled: false,
    active: false,
    scheduled: false,
    startsAt: 0,
    endsAt: 0,
    message: "",
  };
  let siteLockServerOffset = 0;
  let siteLockPollTimer = 0;
  let siteLockCountdownTimer = 0;
  let siteStatusChecked = false;
  let dailySunUsedDate = String(readSetting("cloud-jumper-daily-sun-date", ""));
  let soundOn = readSetting("cloud-jumper-sound", true);
  let best = Number(readSetting("cloud-jumper-best-campaign", 0)) || 0;
  let walletCoins = Math.max(0, Number(readSetting("cloud-jumper-wallet", 0)) || 0);
  let walletRevision = Math.max(0, Math.round(Number(readSetting("cloud-jumper-wallet-revision", 0)) || 0));
  let coinLedger = loadCoinLedger();
  ensureCoinLedgerBaseline();
  let heartResetVersion = Math.max(0, Math.round(Number(readSetting("cloud-jumper-heart-reset-version", 0)) || 0));
  let accountUpgraded = readSetting("cloud-jumper-account-upgraded", false) === true;
  let heartUpgradeLevel = Math.max(0, Math.min(2, Math.round(Number(readSetting("cloud-jumper-heart-upgrade-level", accountUpgraded ? 1 : 0)) || 0)));
  if (heartResetVersion < HEART_RESET_VERSION) {
    heartResetVersion = HEART_RESET_VERSION;
    accountUpgraded = false;
    heartUpgradeLevel = 0;
    writeSetting("cloud-jumper-heart-reset-version", heartResetVersion);
    writeSetting("cloud-jumper-account-upgraded", false);
    writeSetting("cloud-jumper-heart-upgrade-level", 0);
  }
  accountUpgraded = heartUpgradeLevel >= 1;
  maxHearts = heartUpgradeLevel >= 2 ? 7 : accountUpgraded ? 5 : 3;
  hearts = maxHearts;
  let dailyCheckinLastDate = String(readSetting("cloud-jumper-daily-checkin-last-date", ""));
  let dailyCheckinTotal = Math.max(0, Math.round(Number(readSetting("cloud-jumper-daily-checkin-total", 0)) || 0));
  let dailyCheckinBusy = false;
  let reviveCards = 0;
  let reviveUsedDate = "";
  let reviveUsedToday = 0;
  let reviveQuizClaimedDate = "";
  let reviveQuizAttemptsDate = "";
  let reviveQuizAttempts = 0;
  let reviveTransactionIds = [];
  let reviveSettings = { ...DEFAULT_REVIVE_SETTINGS };
  let reviveQuizData = null;
  let reviveQuizBusy = false;
  let reviveStoreBusy = false;
  let revivePromptBusy = false;
  let revivePromptRequestVersion = 0;
  let reviveBundleTimer = 0;
  let pendingRevive = null;
  let redeemCodeBusy = false;
  let crabRunsPlayed = Math.max(0, Math.round(Number(readSetting("cloud-jumper-crab-runs", 0)) || 0));
  let crabTripleActive = false;
  let simpleHudMode = readSetting("cloud-jumper-simple-hud", false) === true;
  let unlockedCharacters = loadUnlockedCharacters();
  let selectedCharacter = String(readSetting("cloud-jumper-selected", "cloud"));
  if (!unlockedCharacters.has(selectedCharacter)) selectedCharacter = "cloud";
  let selectedSkin = String(readSetting("cloud-jumper-skin", "light"));
  if (!SKIN_TONES[selectedSkin]) selectedSkin = "light";
  const savedLevelProgress = loadLevelProgress();
  let highestUnlocked = savedLevelProgress.highestUnlocked;
  let completedLevelSet = savedLevelProgress.completed;
  let levelBest = savedLevelProgress.best;
  let levelAttempts = loadLevelAttempts();
  let runAttemptNumber = 1;
  let currentAttemptRecorded = false;
  let levelMission = null;
  let missionComplete = false;
  let smashCharges = 0;
  let caveAnnounced = false;
  let caveSunActive = false;
  let caveDarknessProgress = 0;
  let staminaMax = CHARACTER_DEFS[0].staminaCapacity;
  let stamina = staminaMax;
  let lastHudScore = -1;
  let lastHudHearts = -1;
  let lastHudProgress = -1;
  let lastHudStamina = -1;
  let lastOfferSecond = -1;
  let lastSiteLockSecond = -1;

  function readSetting(key, fallback) {
    try {
      const value = window.localStorage.getItem(key);
      if (value === null) return fallback;
      if (value === "true") return true;
      if (value === "false") return false;
      return value;
    } catch {
      return fallback;
    }
  }

  function writeSetting(key, value) {
    try {
      window.localStorage.setItem(key, String(value));
    } catch {
      // The game still works when private browsing blocks local storage.
    }
  }

  function cleanCoinLedgerText(value, maximum) {
    return String(value || "").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, maximum);
  }

  function sanitizeCoinLedger(value) {
    const source = Array.isArray(value) ? value : [];
    const byId = new Map();
    for (const raw of source) {
      const id = String(raw?.id || "").replace(/[^a-z0-9_-]/gi, "").slice(0, 90);
      if (!id) continue;
      const amount = Math.max(-1000000000, Math.min(1000000000, Math.round(Number(raw?.amount) || 0)));
      const balanceAfter = Math.max(0, Math.min(1000000000, Math.round(Number(raw?.balanceAfter) || 0)));
      const createdAt = Math.max(0, Math.min(Date.now() + 86400000, Math.round(Number(raw?.createdAt) || 0)));
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

  function loadCoinLedger() {
    try {
      return sanitizeCoinLedger(JSON.parse(String(readSetting("cloud-jumper-coin-ledger", "[]"))));
    } catch {
      return [];
    }
  }

  function persistCoinLedger() {
    coinLedger = sanitizeCoinLedger(coinLedger);
    writeSetting("cloud-jumper-coin-ledger", JSON.stringify(coinLedger));
  }

  function ensureCoinLedgerBaseline() {
    if (coinLedger.some((item) => item.type === "opening_balance")) {
      persistCoinLedger();
      return;
    }
    const knownChange = coinLedger.reduce((sum, item) => sum + item.amount, 0);
    const firstTimestamp = coinLedger.reduce((earliest, item) => item.createdAt > 0 ? Math.min(earliest, item.createdAt) : earliest, Date.now());
    coinLedger.push({
      id: "opening-v24",
      amount: 0,
      balanceAfter: Math.max(0, walletCoins - knownChange),
      createdAt: Math.max(0, firstTimestamp - 1),
      type: "opening_balance",
      label: "金币明细启用",
      detail: "旧版本已有金币作为起始余额",
    });
    persistCoinLedger();
  }

  function createCoinLedgerId(type) {
    const random = window.crypto?.randomUUID?.() || `${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
    return `${String(type || "coin").replace(/[^a-z0-9_-]/gi, "").slice(0, 24)}-${Date.now().toString(36)}-${random}`.slice(0, 90);
  }

  function recordCoinTransaction(amount, type, label, detail = "", options = {}) {
    const newestTimestamp = coinLedger.reduce((latest, item) => Math.max(latest, item.createdAt), 0);
    const transaction = sanitizeCoinLedger([{
      id: options.id || createCoinLedgerId(type),
      amount,
      balanceAfter: options.balanceAfter ?? walletCoins,
      createdAt: options.createdAt ?? Math.max(Date.now(), newestTimestamp + 1),
      type,
      label,
      detail,
    }])[0];
    if (!transaction) return;
    coinLedger = sanitizeCoinLedger([...coinLedger.filter((item) => item.id !== transaction.id), transaction]);
    persistCoinLedger();
    if (coinHistorySection && !coinHistorySection.classList.contains("is-hidden")) renderCoinHistory();
  }

  function commitRunCoinEarnings(outcome) {
    if (runCoinsEarned <= 0) return;
    recordCoinTransaction(
      runCoinsEarned,
      "level_coin",
      `第 ${currentLevel} 关拾取金币`,
      `${outcome || "本局结算"} · 场景金币 ${runCoinPickupCount} 枚`
    );
  }

  function readStoredIdList(key, maximum = 300) {
    try {
      const ids = JSON.parse(String(readSetting(key, "[]")));
      return [...new Set((Array.isArray(ids) ? ids : [])
        .map((id) => String(id).replace(/[^a-z0-9-]/gi, "").slice(0, 90))
        .filter(Boolean))].slice(-maximum);
    } catch {
      return [];
    }
  }

  function readAdminGiftCredits() {
    try {
      const credits = JSON.parse(String(readSetting("cloud-jumper-admin-gift-credits", "[]")));
      return (Array.isArray(credits) ? credits : [])
        .map((credit) => ({
          id: String(credit?.id || "").replace(/[^a-z0-9-]/gi, "").slice(0, 90),
          amount: Math.max(1, Math.min(10000, Math.round(Number(credit?.amount) || 0))),
        }))
        .filter((credit, index, list) => credit.id && list.findIndex((item) => item.id === credit.id) === index)
        .slice(-300);
    } catch {
      return [];
    }
  }

  function showNextNotice() {
    if (noticeActive || noticeQueue.length === 0 || !noticeDialog) return;
    noticeActive = noticeQueue.shift();
    if (noticeCard) noticeCard.dataset.kind = noticeActive.kind || "message";
    if (noticeIcon) noticeIcon.textContent = noticeActive.icon || "🎁";
    if (noticeKicker) noticeKicker.textContent = noticeActive.kicker || "游戏消息";
    if (noticeTitle) noticeTitle.textContent = noticeActive.title || "收到新消息";
    if (noticeMessage) noticeMessage.textContent = noticeActive.message || "快来看看吧！";
    if (noticeDetail) noticeDetail.textContent = noticeActive.detail || "";
    if (noticeActionButton) {
      noticeActionButton.textContent = noticeActive.actionLabel || "立即查看";
      noticeActionButton.classList.toggle("is-hidden", !noticeActive.actionLabel);
    }
    if (noticeCloseButton) noticeCloseButton.textContent = noticeActive.closeLabel || "知道了";
    noticeDialog.classList.remove("is-hidden");
  }

  function enqueueNotice(item) {
    const id = String(item?.id || `notice-${Date.now()}-${noticeQueue.length}`);
    if (queuedNoticeIds.has(id) || noticeActive?.id === id) return;
    queuedNoticeIds.add(id);
    noticeQueue.push({ ...item, id });
    showNextNotice();
  }

  function markAnnouncementSeen(id) {
    if (!id) return;
    const seen = new Set(readStoredIdList("cloud-jumper-seen-announcements", 100));
    seen.add(String(id));
    writeSetting("cloud-jumper-seen-announcements", JSON.stringify([...seen].slice(-100)));
    scheduleAccountSync(80);
  }

  function closeNotice(useAction = false) {
    if (!noticeActive) return;
    const finished = noticeActive;
    if (finished.persistAnnouncementId) markAnnouncementSeen(finished.persistAnnouncementId);
    queuedNoticeIds.delete(finished.id);
    noticeActive = null;
    noticeDialog?.classList.add("is-hidden");
    if (useAction && finished.actionTab) {
      setHomeTab(finished.actionTab);
      if (finished.actionTab === "shop") setStoreCategory(finished.actionStoreCategory || "characters");
    }
    if (useAction && finished.actionProfile) window.setTimeout(openOwnProfile, 80);
    window.setTimeout(showNextNotice, 90);
  }

  function showPendingHomeAnnouncement() {
    if (!accountAuthenticated || gameState !== "home") return;
    const now = Date.now();
    const seen = new Set(readStoredIdList("cloud-jumper-seen-announcements", 100));
    const item = [...HOME_ANNOUNCEMENTS].reverse().find((candidate) =>
      !seen.has(candidate.id) &&
      (!candidate.startsAt || now >= candidate.startsAt) &&
      (!candidate.expiresAt || now <= candidate.expiresAt));
    if (!item) return;
    enqueueNotice({ ...item, persistAnnouncementId: item.id });
  }

  function showPendingCharacterCatalogNotice() {
    if (!accountAuthenticated || gameState !== "home" || !pendingCharacterCatalogNotice) return;
    const { character, updatedAt } = pendingCharacterCatalogNotice;
    pendingCharacterCatalogNotice = null;
    writeSetting("cloud-jumper-character-catalog-seen-at", updatedAt);
    const sale = characterSaleActive(character);
    const price = characterPrice(character);
    enqueueNotice({
      id: `managed-character-${character.id}-${updatedAt}`,
      kind: "offer",
      icon: character.badge || "★",
      kicker: sale ? "限时人物优惠" : character.builtIn ? "人物属性更新" : "新人物登场",
      title: sale ? `${character.name}限时 ${price} 金币` : `${character.name}已加入商店`,
      message: character.trait,
      detail: character.id === "doraemon"
        ? "两周赛季冠军可解锁专属购买资格。"
        : character.rewardOnly
          ? "这是奖励专属人物，无法使用金币购买。"
          : `商店价格：● ${price}`,
      actionLabel: "去商店看看",
      actionTab: "shop",
      actionStoreCategory: "characters",
      closeLabel: "稍后再看",
    });
  }

  function collectAccountGameData() {
    return {
      walletCoins,
      walletRevision,
      coinLedger,
      chatLastReadAt,
      accountUpgraded,
      heartUpgradeLevel,
      heartResetVersion,
      dailyCheckinLastDate,
      dailyCheckinTotal,
      reviveCards,
      reviveUsedDate,
      reviveUsedToday,
      reviveQuizClaimedDate,
      reviveQuizAttemptsDate,
      reviveQuizAttempts,
      reviveTransactionIds,
      crabRunsPlayed,
      battleMatches,
      battleWins,
      battleDraws,
      battlePoints: battleRankPoints,
      battleBestScore,
      battleCoinsEarned,
      unlockedCharacters: [...unlockedCharacters],
      selectedCharacter,
      selectedSkin,
      highestUnlocked,
      completedLevels: [...completedLevelSet],
      levelBest,
      levelAttempts,
      bestCampaign: best,
      yunqingReserved,
      yunqingDeposit: yunqingReserved ? YUNQING_RESERVATION_PRICE : 0,
      dailySunUsedDate,
      redeemedLeosince: readSetting("cloud-jumper-redeemed-leosince", false) === true,
      claimedAdminGifts: (() => {
        try {
          const ids = JSON.parse(String(readSetting("cloud-jumper-admin-gifts", "[]")));
          return Array.isArray(ids) ? ids : [];
        } catch {
          return [];
        }
      })(),
      adminGiftCredits: readAdminGiftCredits(),
      seenAnnouncements: readStoredIdList("cloud-jumper-seen-announcements", 100),
      soundOn,
    };
  }

  function applyAccountGameData(data) {
    const cloudData = data && typeof data === "object" ? data : {};
    walletCoins = Math.max(0, Number(cloudData.walletCoins) || 0);
    walletRevision = Math.max(0, Math.round(Number(cloudData.walletRevision) || 0));
    coinLedger = sanitizeCoinLedger(cloudData.coinLedger);
    ensureCoinLedgerBaseline();
    chatLastReadAt = Math.max(chatLastReadAt, Math.max(0, Number(cloudData.chatLastReadAt) || 0));
    heartResetVersion = Math.max(HEART_RESET_VERSION, Math.round(Number(cloudData.heartResetVersion) || HEART_RESET_VERSION));
    heartUpgradeLevel = Math.max(0, Math.min(2, Math.round(Number(cloudData.heartUpgradeLevel) || (cloudData.accountUpgraded === true ? 1 : 0))));
    accountUpgraded = heartUpgradeLevel >= 1;
    maxHearts = heartUpgradeLevel >= 2 ? 7 : accountUpgraded ? 5 : 3;
    dailyCheckinLastDate = /^\d{4}-\d{2}-\d{2}$/.test(String(cloudData.dailyCheckinLastDate || "")) ? String(cloudData.dailyCheckinLastDate) : "";
    dailyCheckinTotal = Math.max(0, Math.round(Number(cloudData.dailyCheckinTotal) || 0));
    reviveCards = Math.max(0, Math.min(20, Math.round(Number(cloudData.reviveCards) || 0)));
    reviveUsedDate = /^\d{4}-\d{2}-\d{2}$/.test(String(cloudData.reviveUsedDate || "")) ? String(cloudData.reviveUsedDate) : "";
    reviveUsedToday = Math.max(0, Math.min(20, Math.round(Number(cloudData.reviveUsedToday) || 0)));
    reviveQuizClaimedDate = /^\d{4}-\d{2}-\d{2}$/.test(String(cloudData.reviveQuizClaimedDate || "")) ? String(cloudData.reviveQuizClaimedDate) : "";
    reviveQuizAttemptsDate = /^\d{4}-\d{2}-\d{2}$/.test(String(cloudData.reviveQuizAttemptsDate || "")) ? String(cloudData.reviveQuizAttemptsDate) : "";
    reviveQuizAttempts = Math.max(0, Math.min(1000, Math.round(Number(cloudData.reviveQuizAttempts) || 0)));
    reviveTransactionIds = [...new Set((Array.isArray(cloudData.reviveTransactionIds) ? cloudData.reviveTransactionIds : [])
      .map((id) => String(id).replace(/[^a-z0-9-]/gi, "").slice(0, 80))
      .filter(Boolean))].slice(-200);
    crabRunsPlayed = Math.max(0, Math.round(Number(cloudData.crabRunsPlayed) || 0));
    battleMatches = Math.max(0, Math.round(Number(cloudData.battleMatches) || 0));
    battleWins = Math.max(0, Math.round(Number(cloudData.battleWins) || 0));
    battleDraws = Math.max(0, Math.round(Number(cloudData.battleDraws) || 0));
    battleRankPoints = Math.max(0, Math.round(Number(cloudData.battlePoints) || 0));
    battleBestScore = Math.max(0, Math.round(Number(cloudData.battleBestScore) || 0));
    battleCoinsEarned = Math.max(0, Math.round(Number(cloudData.battleCoinsEarned) || 0));
    if (gameState !== "playing" && gameState !== "paused" && gameState !== "revivePrompt") hearts = maxHearts;
    const validIds = new Set(CHARACTER_DEFS.map((character) => character.id));
    unlockedCharacters = new Set((Array.isArray(cloudData.unlockedCharacters) ? cloudData.unlockedCharacters : ["cloud"])
      .filter((id) => validIds.has(id) || (!characterCatalogLoaded && /^custom-[a-z0-9][a-z0-9-]{2,48}$/i.test(String(id)))));
    unlockedCharacters.add("cloud");
    selectedCharacter = unlockedCharacters.has(String(cloudData.selectedCharacter)) ? String(cloudData.selectedCharacter) : "cloud";
    selectedSkin = SKIN_TONES[String(cloudData.selectedSkin)] ? String(cloudData.selectedSkin) : "light";
    if (gameState !== "playing" && gameState !== "paused" && gameState !== "revivePrompt") resetStaminaForCharacter();
    highestUnlocked = Math.max(1, Math.min(MAX_LEVELS, Number(cloudData.highestUnlocked) || 1));
    completedLevelSet = new Set((Array.isArray(cloudData.completedLevels) ? cloudData.completedLevels : []).map(Number).filter((level) => level >= 1 && level <= MAX_LEVELS));
    levelBest = cloudData.levelBest && typeof cloudData.levelBest === "object" ? cloudData.levelBest : {};
    levelAttempts = cloudData.levelAttempts && typeof cloudData.levelAttempts === "object" ? cloudData.levelAttempts : {};
    best = Math.max(0, Number(cloudData.bestCampaign) || 0);
    yunqingReserved = cloudData.yunqingReserved === true;
    dailySunUsedDate = /^\d{4}-\d{2}-\d{2}$/.test(String(cloudData.dailySunUsedDate || "")) ? String(cloudData.dailySunUsedDate) : "";
    soundOn = cloudData.soundOn !== false;

    writeSetting("cloud-jumper-wallet", walletCoins);
    writeSetting("cloud-jumper-wallet-revision", walletRevision);
    persistCoinLedger();
    writeSetting("cloud-jumper-chat-last-read-at", chatLastReadAt);
    writeSetting("cloud-jumper-account-upgraded", accountUpgraded);
    writeSetting("cloud-jumper-heart-upgrade-level", heartUpgradeLevel);
    writeSetting("cloud-jumper-heart-reset-version", heartResetVersion);
    writeSetting("cloud-jumper-daily-checkin-last-date", dailyCheckinLastDate);
    writeSetting("cloud-jumper-daily-checkin-total", dailyCheckinTotal);
    writeSetting("cloud-jumper-revive-cards", reviveCards);
    writeSetting("cloud-jumper-revive-used-date", reviveUsedDate);
    writeSetting("cloud-jumper-revive-used-today", reviveUsedToday);
    writeSetting("cloud-jumper-revive-quiz-claimed-date", reviveQuizClaimedDate);
    writeSetting("cloud-jumper-crab-runs", crabRunsPlayed);
    writeSetting("cloud-jumper-unlocked", JSON.stringify([...unlockedCharacters]));
    writeSetting("cloud-jumper-selected", selectedCharacter);
    writeSetting("cloud-jumper-skin", selectedSkin);
    writeSetting("cloud-jumper-level-progress", JSON.stringify({ highestUnlocked, completed: [...completedLevelSet], best: levelBest }));
    writeSetting("cloud-jumper-level-attempts", JSON.stringify(levelAttempts));
    writeSetting("cloud-jumper-best-campaign", best);
    writeSetting("cloud-jumper-yunqing-reserved", yunqingReserved);
    writeSetting("cloud-jumper-daily-sun-date", dailySunUsedDate);
    writeSetting("cloud-jumper-redeemed-leosince", cloudData.redeemedLeosince === true);
    writeSetting("cloud-jumper-admin-gifts", JSON.stringify(Array.isArray(cloudData.claimedAdminGifts) ? cloudData.claimedAdminGifts : []));
    writeSetting("cloud-jumper-admin-gift-credits", JSON.stringify(Array.isArray(cloudData.adminGiftCredits) ? cloudData.adminGiftCredits : []));
    writeSetting("cloud-jumper-seen-announcements", JSON.stringify(Array.isArray(cloudData.seenAnnouncements) ? cloudData.seenAnnouncements : []));
    writeSetting("cloud-jumper-sound", soundOn);
    updateSoundButton();
    updateWalletUi();
    setupSkinPicker();
    renderCharacterShop();
    renderDailyCheckin();
    renderReviveUi();
    if (coinHistorySection && !coinHistorySection.classList.contains("is-hidden")) renderCoinHistory();
    updateHud(true);
  }

  function avatarDefinition(id) {
    return AVATAR_DEFS.find((item) => item.id === String(id)) || AVATAR_DEFS[0];
  }

  function characterDefinition(id) {
    return CHARACTER_DEFS.find((item) => item.id === String(id)) || CHARACTER_DEFS[0];
  }

  function cleanCatalogCharacter(raw) {
    if (!raw || typeof raw !== "object") return null;
    const id = String(raw.id || "").trim().toLowerCase();
    if (!/^(?:[a-z][a-z0-9-]{1,31}|custom-[a-z0-9][a-z0-9-]{2,48})$/.test(id)) return null;
    const existing = CHARACTER_DEFS.find((character) => character.id === id) || {};
    const number = (value, fallback, minimum, maximum) => {
      const parsed = Number(value);
      return Math.max(minimum, Math.min(maximum, Number.isFinite(parsed) ? parsed : fallback));
    };
    const timestamp = (value) => Math.max(0, Number(value) || 0);
    const color = /^#[0-9a-f]{6}$/i.test(String(raw.color || "")) ? String(raw.color).toLowerCase() : (existing.color || "#58c88b");
    const salePrice = raw.salePrice === null || raw.salePrice === undefined
      ? null
      : Math.round(number(raw.salePrice, 0, 0, 999999));
    return {
      ...existing,
      id,
      name: String(raw.name || existing.name || "新人物").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, 16) || "新人物",
      badge: String(raw.badge || existing.badge || "新").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, 4) || "新",
      color,
      cost: Math.round(number(raw.cost, existing.cost || 0, 0, 999999)),
      regularCost: Math.round(number(raw.regularCost, raw.cost ?? existing.regularCost ?? existing.cost ?? 0, 0, 999999)),
      salePrice,
      saleStartAt: timestamp(raw.saleStartAt),
      saleEndAt: timestamp(raw.saleEndAt),
      availableFrom: timestamp(raw.availableFrom),
      availableUntil: timestamp(raw.availableUntil),
      active: raw.active !== false,
      rewardOnly: raw.rewardOnly === true,
      newCharacter: raw.newCharacter === true,
      agility: number(raw.agility, existing.agility || 1, 0.72, 1.6),
      jumpPower: Math.round(number(raw.jumpPower, existing.jumpPower || 680, 560, 900)),
      airJumps: Math.round(number(raw.airJumps, existing.airJumps || 1, 0, 3)),
      flipTurns: Math.round(number(raw.flipTurns, existing.flipTurns || 0, 0, 3)),
      flipDuration: number(raw.flipDuration, existing.flipDuration || 0, 0, 1.5),
      magnetRadius: Math.round(number(raw.magnetRadius, existing.magnetRadius || 0, 0, 180)),
      tripleMagnetRadius: Math.round(number(raw.tripleMagnetRadius, existing.tripleMagnetRadius || 0, 0, 240)),
      freeSmash: Math.round(number(raw.freeSmash, existing.freeSmash || 0, 0, 10)),
      stoneImmune: raw.stoneImmune === true,
      instantTripleJump: raw.instantTripleJump === true,
      sunCaveDaily: raw.sunCaveDaily === true,
      speedBoost: number(raw.speedBoost, existing.speedBoost || 1, 1, 1.6),
      gravityScale: number(raw.gravityScale, existing.gravityScale || 1, 0.65, 1.2),
      doorCharges: Math.round(number(raw.doorCharges, existing.doorCharges || 0, 0, 3)),
      staminaCapacity: Math.round(number(raw.staminaCapacity, existing.staminaCapacity || 72, 50, 220)),
      staminaStars: Math.round(number(raw.staminaStars, existing.staminaStars || 1, 1, 5)),
      staminaRecovery: number(raw.staminaRecovery, existing.staminaRecovery || 0, 0, 80),
      flairMoves: Array.isArray(raw.flairMoves)
        ? raw.flairMoves.filter((move) => ["explosiveStepover", "dragToChop"].includes(String(move)))
        : (existing.flairMoves || []),
      trait: String(raw.trait || existing.trait || "均衡型人物").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, 140) || "均衡型人物",
      builtIn: raw.builtIn === true,
      updatedAt: timestamp(raw.updatedAt),
    };
  }

  async function loadCharacterCatalog() {
    if (typeof window.fetch !== "function") return false;
    try {
      const response = await apiFetch("./api/characters", {
        headers: { Accept: "application/json" },
      }, 9000);
      if (!response.ok) throw new Error("catalog_unavailable");
      const data = await response.json();
      const records = Array.isArray(data.characters) ? data.characters : [];
      const incomingIds = new Set(records.map((item) => String(item?.id || "")));
      for (let index = CHARACTER_DEFS.length - 1; index >= 0; index -= 1) {
        if (CHARACTER_DEFS[index].id.startsWith("custom-") && !incomingIds.has(CHARACTER_DEFS[index].id)) {
          CHARACTER_DEFS.splice(index, 1);
        }
      }
      for (const raw of records) {
        const character = cleanCatalogCharacter(raw);
        if (!character) continue;
        const existingIndex = CHARACTER_DEFS.findIndex((item) => item.id === character.id);
        if (existingIndex >= 0) CHARACTER_DEFS[existingIndex] = character;
        else CHARACTER_DEFS.push(character);
      }
      characterCatalogLoaded = true;
      const catalogUpdatedAt = Math.max(0, Number(data.updatedAt) || 0);
      const catalogSeenAt = Math.max(0, Number(readSetting("cloud-jumper-character-catalog-seen-at", 0)) || 0);
      const newestChanged = CHARACTER_DEFS
        .filter((character) => Number(character.updatedAt) > catalogSeenAt && characterAvailableNow(character))
        .sort((a, b) => Number(b.updatedAt) - Number(a.updatedAt))[0];
      pendingCharacterCatalogNotice = newestChanged && catalogUpdatedAt > catalogSeenAt
        ? { character: newestChanged, updatedAt: catalogUpdatedAt }
        : null;
      if (pendingCharacterCatalogNotice && accountAuthenticated && gameState === "home") {
        window.setTimeout(showPendingCharacterCatalogNotice, 180);
      }
      const validIds = new Set(CHARACTER_DEFS.map((character) => character.id));
      unlockedCharacters = new Set([...unlockedCharacters].filter((id) => validIds.has(id)));
      unlockedCharacters.add("cloud");
      if (!validIds.has(selectedCharacter) || !unlockedCharacters.has(selectedCharacter)) selectedCharacter = "cloud";
      if (unlockedCharacters.has(selectedCharacter)) resetStaminaForCharacter();
      renderCharacterShop();
      updateWalletUi();
      return true;
    } catch {
      characterCatalogLoaded = false;
      return false;
    }
  }

  function setStoreCategory(category) {
    const selected = ["characters", "other"].includes(category) ? category : "characters";
    selectedStoreCategory = selected;
    for (const button of storeCategoryButtons) {
      const active = button.dataset.storeCategory === selected;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    }
    for (const panel of storeCategoryPanels) {
      const active = panel.dataset.storePanel === selected;
      panel.classList.toggle("is-hidden", !active);
      panel.hidden = !active;
    }
    if (selected === "characters") {
      renderCharacterShop();
      refreshYunqingStoreStatus();
    } else {
      updateAccountUpgradeUi();
      renderReviveUi();
      refreshYunqingStoreStatus();
    }
  }

  function setHomeTab(tab) {
    const selected = ["play", "shop", "rank", "chat"].includes(tab) ? tab : "play";
    selectedHomeTab = selected;
    for (const button of homeTabButtons) {
      const active = button.dataset.homeTab === selected;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    }
    for (const panel of homeTabPanels) {
      const active = panel.dataset.homePanel === selected;
      panel.classList.toggle("is-hidden", !active);
      panel.hidden = !active;
    }
    if (selected === "shop") {
      setStoreCategory(selectedStoreCategory);
    }
    if (selected === "rank") loadLeaderboard();
    if (selected === "chat") {
      stopChatUnreadPolling();
      openChat();
    }
    else {
      stopChatPolling();
      setChatFullscreen(false);
      scheduleChatUnreadPolling(450);
    }
  }

  function renderAvatarOptions() {
    if (!avatarOptions) return;
    avatarOptions.innerHTML = AVATAR_DEFS.map((avatar) => `<button type="button" data-avatar="${avatar.id}" class="${avatar.id === pendingProfileAvatar ? "is-selected" : ""}" aria-label="${avatar.name}">${avatar.icon}</button>`).join("");
    for (const button of avatarOptions.querySelectorAll("[data-avatar]")) {
      button.addEventListener("click", () => {
        pendingProfileAvatar = avatarDefinition(button.dataset.avatar).id;
        renderAvatarOptions();
        if (profileDialogAvatar) profileDialogAvatar.textContent = avatarDefinition(pendingProfileAvatar).icon;
        playTone(590, 0.06, "triangle", 0.025, 0);
      });
    }
  }

  function profileCharacterMarkup(characterId) {
    const character = characterDefinition(characterId);
    return `<span class="profile-character-avatar" style="--character-color:${character.color}" aria-hidden="true">${escapeHtml(character.badge)}</span><span><strong>${escapeHtml(character.name)}</strong><small>${escapeHtml(character.trait)}</small></span>`;
  }

  function renderProfileCharacters(selectedId, ownedIds) {
    const validOwned = [...new Set((Array.isArray(ownedIds) ? ownedIds : ["cloud"])
      .map(String)
      .filter((id) => CHARACTER_DEFS.some((character) => character.id === id)))];
    if (!validOwned.includes("cloud")) validOwned.unshift("cloud");
    const active = validOwned.includes(String(selectedId)) ? String(selectedId) : "cloud";
    const current = characterDefinition(active);
    if (profileCurrentCharacter) profileCurrentCharacter.innerHTML = profileCharacterMarkup(active);
    if (profileCharacterTrait) profileCharacterTrait.textContent = `灵活 ${Math.min(5, 1 + Math.round((current.agility - 1) * 12))} 星 · 体力 ${Math.max(1, Math.min(5, Number(current.staminaStars) || 1))} 星`;
    if (profileOwnedCount) profileOwnedCount.textContent = `${validOwned.length} 个`;
    if (profileOwnedCharacters) {
      profileOwnedCharacters.innerHTML = validOwned.map((id) => {
        const character = characterDefinition(id);
        return `<span class="profile-owned-chip"><i aria-hidden="true">${escapeHtml(character.badge)}</i>${escapeHtml(character.name)}</span>`;
      }).join("");
    }
  }

  function coinLedgerIcon(type) {
    return ({
      opening_balance: "◎",
      level_coin: "●",
      level_reward: "🏁",
      redeem_code: "🎟",
      admin_gift: "🎁",
      character_purchase: "🛍",
      account_upgrade: "♥",
      battle_reward: "⚔",
      reservation: "⏳",
      daily_checkin: "📅",
    })[type] || "●";
  }

  function formatCoinLedgerTime(createdAt) {
    if (!createdAt) return "历史记录";
    try {
      return new Intl.DateTimeFormat("zh-CN", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date(createdAt));
    } catch {
      return new Date(createdAt).toLocaleString();
    }
  }

  function renderCoinHistory() {
    if (!coinHistoryList) return;
    const entries = [...coinLedger].sort((a, b) => b.createdAt - a.createdAt || b.id.localeCompare(a.id));
    if (coinHistoryBalance) coinHistoryBalance.textContent = `●${walletCoins}`;
    if (coinHistoryCount) coinHistoryCount.textContent = `仅自己可见 · ${entries.length} 笔`;
    if (entries.length === 0) {
      coinHistoryList.innerHTML = '<p class="coin-history-empty">还没有金币记录</p>';
      return;
    }
    coinHistoryList.innerHTML = entries.map((entry) => {
      const amountClass = entry.amount > 0 ? "is-income" : entry.amount < 0 ? "is-expense" : "is-opening";
      const amountText = entry.amount > 0 ? `+${entry.amount}` : entry.amount < 0 ? String(entry.amount) : "起始";
      const detail = [formatCoinLedgerTime(entry.createdAt), entry.detail].filter(Boolean).join(" · ");
      return `<article class="coin-history-item ${amountClass}" role="listitem"><span class="coin-history-icon" aria-hidden="true">${escapeHtml(coinLedgerIcon(entry.type))}</span><span class="coin-history-copy"><strong>${escapeHtml(entry.label)}</strong><small>${escapeHtml(detail)}</small></span><span class="coin-history-amount"><b>${escapeHtml(amountText)}</b><small>余额 ${entry.balanceAfter}</small></span></article>`;
    }).join("");
  }

  function openOwnProfile() {
    if (!accountAuthenticated) return showAccountGate("login", "请先登录账号");
    pendingProfileAvatar = accountAvatar;
    if (ownProfileEditor) ownProfileEditor.classList.remove("is-hidden");
    coinHistorySection?.classList.remove("is-hidden");
    if (profileDialogKicker) profileDialogKicker.textContent = accountIsAdmin ? "我的个人中心 · 管理员" : "我的个人中心";
    if (profileDialogTitle) profileDialogTitle.textContent = playerName || "玩家";
    if (profileDialogSubtitle) profileDialogSubtitle.textContent = "头像、名称和肤色会自动保存到云端";
    if (profileDialogAvatar) profileDialogAvatar.textContent = avatarDefinition(accountAvatar).icon;
    if (playerNameInput) playerNameInput.value = playerName;
    if (profilePublicStats) {
      profilePublicStats.innerHTML = `<div><small>金币</small><strong>●${walletCoins}</strong></div><div><small>已解锁</small><strong>${highestUnlocked}/20</strong></div><div><small>生命</small><strong>${maxHearts} 滴</strong></div><div><small>对战</small><strong>${battleWins}胜/${battleMatches}场</strong></div>`;
    }
    renderAvatarOptions();
    setupSkinPicker();
    renderCoinHistory();
    renderProfileCharacters(selectedCharacter, [...unlockedCharacters]);
    profileAdminLink?.classList.toggle("is-hidden", !accountIsAdmin);
    publicProfileTarget = null;
    profileInviteButton?.classList.add("is-hidden");
    profileDialog?.classList.remove("is-hidden");
  }

  function openPublicProfile(entry) {
    if (!entry) return;
    if (accountAuthenticated && cleanPlayerName(entry.name).toLocaleLowerCase() === accountName.toLocaleLowerCase()) {
      openOwnProfile();
      return;
    }
    const avatar = avatarDefinition(entry.avatar);
    const selected = characterDefinition(entry.selectedCharacter).id;
    const owned = Array.isArray(entry.unlockedCharacters) ? entry.unlockedCharacters : ["cloud"];
    const level = Math.max(1, Number(entry.level) || 1);
    const score = Math.max(0, Number(entry.score) || 0);
    if (ownProfileEditor) ownProfileEditor.classList.add("is-hidden");
    coinHistorySection?.classList.add("is-hidden");
    profileAdminLink?.classList.add("is-hidden");
    if (profileDialogKicker) {
      profileDialogKicker.textContent = entry.isAdmin === true
        ? "全站玩家资料 · 管理员"
        : entry.systemRival === true
          ? "系统挑战者资料 · 不参与冠军奖励"
          : "全站玩家资料";
    }
    if (profileDialogTitle) profileDialogTitle.textContent = cleanPlayerName(entry.name) || "玩家";
    if (profileDialogSubtitle) profileDialogSubtitle.textContent = `${SKIN_NAMES[entry.selectedSkin] || SKIN_NAMES.light} · 正在使用 ${characterDefinition(selected).name}`;
    if (profileDialogAvatar) profileDialogAvatar.textContent = avatar.icon;
    if (profilePublicStats) {
      const coinValue = entry.showCoins === true && Number.isFinite(Number(entry.coins)) ? `●${Math.max(0, Math.round(Number(entry.coins)))}` : "未公开";
      profilePublicStats.innerHTML = `<div><small>最佳关卡</small><strong>第 ${level} 关</strong></div><div><small>分数</small><strong>${score}/100</strong></div><div><small>金币</small><strong>${coinValue}</strong></div><div><small>对战</small><strong>${Math.max(0, Number(entry.battleWins) || 0)}胜/${Math.max(0, Number(entry.battleMatches) || 0)}场</strong></div>`;
    }
    renderProfileCharacters(selected, owned);
    publicProfileTarget = entry;
    profileInviteButton?.classList.toggle("is-hidden", !String(entry.inviteId || ""));
    profileDialog?.classList.remove("is-hidden");
  }

  function closeProfile() {
    profileDialog?.classList.add("is-hidden");
    publicProfileTarget = null;
    profileInviteButton?.classList.add("is-hidden");
  }

  function battleSocketUrl() {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    return `${protocol}//${window.location.host}/api/battle`;
  }

  function setBattleConnection(state, message = "") {
    battleSocketState = state;
    if (!battleConnectionStatus) return;
    battleConnectionStatus.classList.toggle("is-online", state === "online");
    battleConnectionStatus.classList.toggle("is-error", state === "error");
    const label = battleConnectionStatus.querySelector("span");
    if (label) {
      label.textContent = message || (state === "online"
        ? "实时房间已连接"
        : state === "connecting"
          ? "正在连接实时房间…"
          : state === "error"
            ? "实时房间暂时无法连接"
            : "实时房间未连接");
    }
  }

  function sendBattle(type, data = {}) {
    if (!battleSocket || battleSocket.readyState !== WebSocket.OPEN) return false;
    try {
      battleSocket.send(JSON.stringify({ type, ...data }));
      return true;
    } catch {
      return false;
    }
  }

  function scheduleBattleReconnect() {
    window.clearTimeout(battleReconnectTimer);
    if (!accountAuthenticated || !accountToken) return;
    const delay = Math.min(15000, 900 * Math.max(1, 2 ** battleReconnectAttempt));
    battleReconnectTimer = window.setTimeout(() => connectBattleSocket(), delay);
  }

  function connectBattleSocket(force = false) {
    if (!accountAuthenticated || !accountToken || typeof WebSocket !== "function") return;
    if (!force && battleSocket && (battleSocket.readyState === WebSocket.OPEN || battleSocket.readyState === WebSocket.CONNECTING)) return;
    if (battleSocket) {
      try { battleSocket.close(1000, "reconnect"); } catch { /* no-op */ }
    }
    setBattleConnection("connecting");
    try {
      battleSocket = new WebSocket(battleSocketUrl(), ["cloud-jumper-v1", `auth.${accountToken}`]);
    } catch {
      setBattleConnection("error", "当前浏览器无法建立实时连接");
      scheduleBattleReconnect();
      return;
    }
    battleSocket.addEventListener("open", () => {
      battleReconnectAttempt = 0;
      setBattleConnection("online");
      sendBattle("hello", { requestedRoomCode: battleRequestedRoomCode });
      if (battleRequestedRoomCode) {
        sendBattle("join_room", { roomCode: battleRequestedRoomCode });
        battleRequestedRoomCode = "";
      }
    });
    battleSocket.addEventListener("message", (event) => {
      let payload;
      try { payload = JSON.parse(String(event.data || "{}")); } catch { return; }
      handleBattleMessage(payload);
    });
    battleSocket.addEventListener("close", () => {
      battleSocket = null;
      battleReconnectAttempt += 1;
      setBattleConnection("error", battleModeActive ? "连接中断，正在尝试恢复…" : "实时连接已断开，正在重连…");
      scheduleBattleReconnect();
    });
    battleSocket.addEventListener("error", () => {
      setBattleConnection("error", "实时房间连接失败，请检查 Cloudflare 绑定");
    });
  }

  function disconnectBattleSocket() {
    window.clearTimeout(battleReconnectTimer);
    battleReconnectTimer = 0;
    if (battleSocket) {
      try { battleSocket.close(1000, "logout"); } catch { /* no-op */ }
    }
    battleSocket = null;
    battleRoomSnapshot = null;
    setBattleConnection("offline");
  }

  function cleanRoomCode(value) {
    return String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
  }

  function myBattleRoomPlayer() {
    return battleRoomSnapshot?.players?.find((entry) => String(entry.playerId) === String(playerId)) || null;
  }

  function battleOpponentPlayer() {
    return battleRoomSnapshot?.players?.find((entry) => String(entry.playerId) !== String(playerId)) || null;
  }

  function battleDifficultyDefinition(value) {
    return ({
      easy: { id: "easy", name: "轻松", level: 2, detail: "熟悉路线，意外较少" },
      normal: { id: "normal", name: "标准", level: 5, detail: "速度与意外较均衡" },
      hard: { id: "hard", name: "困难", level: 10, detail: "落物、洞口与飞行物更多" },
      extreme: { id: "extreme", name: "疯狂", level: 14, detail: "高速高密度挑战" },
    })[String(value)] || { id: "normal", name: "标准", level: 5, detail: "速度与意外较均衡" };
  }

  function renderBattleFriends() {
    if (!battleFriendList) return;
    const players = leaderboardSnapshot
      .filter((entry) => String(entry.inviteId || "") && String(entry.inviteId) !== String(playerId))
      .slice(0, 40);
    battleFriendList.innerHTML = players.length
      ? players.map((entry, index) => `<button class="battle-friend-chip" type="button" data-battle-friend="${index}"><span aria-hidden="true">${escapeHtml(avatarDefinition(entry.avatar).icon)}</span><strong>${escapeHtml(cleanPlayerName(entry.name))}</strong><small>邀请</small></button>`).join("")
      : "<p>排行榜里暂时没有其他玩家</p>";
    for (const button of battleFriendList.querySelectorAll("[data-battle-friend]")) {
      button.addEventListener("click", () => invitePlayerToBattle(players[Number(button.dataset.battleFriend)]));
    }
  }

  function renderBattleInvite() {
    const invite = battlePendingInvite;
    battleInviteAlert?.classList.toggle("is-hidden", !invite);
    if (!invite) return;
    if (battleInviteAvatar) battleInviteAvatar.textContent = avatarDefinition(invite.fromAvatar).icon;
    if (battleInviteName) battleInviteName.textContent = cleanPlayerName(invite.fromName) || "朋友";
    if (battleInviteCode) battleInviteCode.textContent = `房间 ${cleanRoomCode(invite.roomCode)}`;
  }

  function renderBattleRoom() {
    const room = battleRoomSnapshot;
    battleStartActions?.classList.toggle("is-hidden", Boolean(room));
    battleRoomPanel?.classList.toggle("is-hidden", !room);
    renderBattleInvite();
    renderBattleFriends();
    if (!room) return;
    if (battleRoomCode) battleRoomCode.textContent = cleanRoomCode(room.code) || "------";
    const players = Array.isArray(room.players) ? room.players : [];
    if (battlePlayerSlots) {
      battlePlayerSlots.innerHTML = [0, 1].map((index) => {
        const entry = players[index];
        if (!entry) return '<div class="battle-player-slot is-empty"><span aria-hidden="true">＋</span><div><strong>等待朋友</strong><small>邀请一位玩家加入</small></div></div>';
        const me = String(entry.playerId) === String(playerId);
        const status = entry.connected === false ? "已离线" : entry.ready ? "已准备" : "未准备";
        return `<div class="battle-player-slot${entry.ready ? " is-ready" : ""}"><span aria-hidden="true">${escapeHtml(avatarDefinition(entry.avatar).icon)}</span><div><strong>${escapeHtml(cleanPlayerName(entry.name))}${me ? "（我）" : ""}</strong><small>${escapeHtml(characterDefinition(entry.character).name)} · ${status}</small></div></div>`;
      }).join("");
    }
    const me = myBattleRoomPlayer();
    const opponent = battleOpponentPlayer();
    const difficulty = battleDifficultyDefinition(room.difficulty);
    const isHost = String(room.hostId) === String(playerId);
    for (const button of battleDifficultyButtons) {
      button.classList.toggle("is-active", button.dataset.battleDifficulty === difficulty.id);
      button.disabled = !isHost || room.status === "playing" || Boolean(me?.ready);
    }
    if (battleDifficultyHint) {
      battleDifficultyHint.textContent = isHost
        ? `${difficulty.name} · ${difficulty.detail}`
        : `房主选择：${difficulty.name} · ${difficulty.detail}`;
    }
    if (battleReadyButton) {
      battleReadyButton.disabled = players.length < 2 || room.status === "playing";
      battleReadyButton.classList.toggle("is-ready", Boolean(me?.ready));
      battleReadyButton.textContent = me?.ready ? "✓ 已准备，等待开始" : "我准备好了";
    }
    if (battleRoomMessage) {
      battleRoomMessage.textContent = room.status === "playing"
        ? "对战正在进行中"
          : players.length < 2
          ? "等待朋友加入；可复制链接或点下方玩家邀请"
          : me?.ready && opponent?.ready
            ? "双方已准备，即将开始…"
            : `已和 ${cleanPlayerName(opponent?.name) || "朋友"} 进入房间 · ${difficulty.name}难度 · 双方准备后开始`;
    }
  }

  function openBattleDialog() {
    if (siteLockActive) {
      updateSiteLockClock(true);
      return;
    }
    if (!accountAuthenticated) return showAccountGate("login", "请先登录账号再邀请朋友");
    closeProfile();
    battleResultDialog?.classList.add("is-hidden");
    battleDialog?.classList.remove("is-hidden");
    connectBattleSocket();
    renderBattleRoom();
    if (!leaderboardSnapshot.length) loadLeaderboard();
  }

  function closeBattleDialog() {
    battleDialog?.classList.add("is-hidden");
  }

  function createBattleRoom(inviteTarget = "") {
    battleInviteAfterCreate = String(inviteTarget || "");
    if (!sendBattle("create_room")) {
      connectBattleSocket();
      if (battleRoomMessage) battleRoomMessage.textContent = "正在连接，连接后请再点一次创建房间";
    }
  }

  function joinBattleRoom(code) {
    const roomCode = cleanRoomCode(code);
    if (roomCode.length !== 6) {
      if (battleRoomMessage) battleRoomMessage.textContent = "请输入完整的 6 位房间码";
      return;
    }
    openBattleDialog();
    if (battleSocket?.readyState === WebSocket.OPEN) sendBattle("join_room", { roomCode });
    else battleRequestedRoomCode = roomCode;
  }

  function invitePlayerToBattle(entry, preferredDifficulty = "") {
    const targetId = String(entry?.inviteId || "");
    if (!targetId || targetId === String(playerId)) return;
    battleDifficultyAfterCreate = ["easy", "normal", "hard", "extreme"].includes(String(preferredDifficulty))
      ? String(preferredDifficulty)
      : "";
    closeProfile();
    openBattleDialog();
    if (!battleRoomSnapshot) {
      createBattleRoom(targetId);
      return;
    }
    if (battleDifficultyAfterCreate && String(battleRoomSnapshot.hostId) === String(playerId)) {
      sendBattle("set_difficulty", {
        roomCode: battleRoomSnapshot.code,
        difficulty: battleDifficultyAfterCreate,
      });
      battleDifficultyAfterCreate = "";
    }
    if (sendBattle("invite", { targetId, roomCode: battleRoomSnapshot.code }) && battleRoomMessage) {
      battleRoomMessage.textContent = `已向 ${cleanPlayerName(entry.name) || "这位玩家"} 发出邀请`;
    }
  }

  function updateBattleUltimateButton() {
    if (!battleUltimateButton) return;
    battleUltimateButton.classList.toggle("is-hidden", !battleModeActive);
    battleUltimateButton.disabled = !battleModeActive || battleUltimateUsed || battleFinished;
    const strong = battleUltimateButton.querySelector("strong");
    const small = battleUltimateButton.querySelector("small");
    if (strong) strong.textContent = battleUltimateUsed ? "已使用" : "大招";
    if (small) small.textContent = battleUltimateUsed ? "本局 0 次" : "1 次";
  }

  function formatBattleClock(milliseconds) {
    const seconds = Math.max(0, Math.ceil(Number(milliseconds) / 1000));
    return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  }

  function updateBattleHud() {
    if (!battleModeActive) {
      battleLiveHud?.classList.add("is-hidden");
      return;
    }
    battleLiveHud?.classList.remove("is-hidden");
    const opponent = battleOpponentPlayer();
    if (battleTimeLeft) battleTimeLeft.textContent = formatBattleClock(battleEndsAt - (Date.now() + battleServerOffset));
    if (battleMyScore) battleMyScore.textContent = String(Math.max(0, Math.round(battleScore)));
    if (battleOpponentName) battleOpponentName.textContent = cleanPlayerName(opponent?.name) || "对手";
    if (battleOpponentScore) battleOpponentScore.textContent = String(Math.max(0, Math.round(Number(battleOpponentTarget?.score) || 0)));
  }

  function handleBattleMessage(payload) {
    const type = String(payload?.type || "");
    if (type === "welcome") {
      if (Number.isFinite(Number(payload.serverTime))) battleServerOffset = Number(payload.serverTime) - Date.now();
      setBattleConnection("online");
      if (payload.room) {
        battleRoomSnapshot = payload.room;
        renderBattleRoom();
      }
      if (payload.invite) {
        battlePendingInvite = payload.invite;
        renderBattleInvite();
      }
      return;
    }
    if (type === "room") {
      battleRoomSnapshot = payload.room || null;
      renderBattleRoom();
      if (battleRoomSnapshot && battleInviteAfterCreate) {
        const targetId = battleInviteAfterCreate;
        battleInviteAfterCreate = "";
        if (battleDifficultyAfterCreate && String(battleRoomSnapshot.hostId) === String(playerId)) {
          sendBattle("set_difficulty", {
            roomCode: battleRoomSnapshot.code,
            difficulty: battleDifficultyAfterCreate,
          });
          battleDifficultyAfterCreate = "";
        }
        sendBattle("invite", { targetId, roomCode: battleRoomSnapshot.code });
        if (battleRoomMessage) battleRoomMessage.textContent = "房间已创建，邀请已发出";
      }
      return;
    }
    if (type === "invite") {
      battlePendingInvite = payload.invite || null;
      renderBattleInvite();
      if (!battleModeActive && gameState !== "playing") openBattleDialog();
      playTone(660, 0.08, "triangle", 0.03, 0);
      playTone(880, 0.12, "square", 0.025, 0.08);
      announce(`${cleanPlayerName(battlePendingInvite?.fromName) || "朋友"} 邀请你进行好友对战。`);
      return;
    }
    if (type === "invite_sent") {
      if (battleRoomMessage) battleRoomMessage.textContent = `邀请已发送给 ${cleanPlayerName(payload.targetName) || "玩家"}`;
      return;
    }
    if (type === "match_start") {
      startBattleMatch(payload.match || {});
      return;
    }
    if (type === "state") {
      if (!battleModeActive || String(payload.matchId || "") !== battleMatchId || String(payload.playerId) === String(playerId)) return;
      battleOpponentPlayerId = String(payload.playerId || "");
      battleOpponentTarget = payload.state && typeof payload.state === "object" ? payload.state : null;
      if (battleOpponentTarget && !battleOpponentDisplay) battleOpponentDisplay = { ...battleOpponentTarget };
      canvas.dataset.battleOpponentReady = String(Boolean(battleOpponentDisplay));
      return;
    }
    if (type === "ultimate_confirm") {
      battleUltimateUsed = true;
      updateBattleUltimateButton();
      activateSkillBadge("✦", payload.kind === "airstrike" ? "飞机轰炸已出动" : "炸弹大招已投放", 1.3);
      return;
    }
    if (type === "ultimate_hit") {
      receiveBattleAttack(payload.kind);
      return;
    }
    if (type === "result") {
      const resultId = String(payload.result?.matchId || "");
      if (!battleMatchId || (resultId && resultId !== battleMatchId)) return;
      if (resultId && battleSeenResultIds.has(resultId)) return;
      if (resultId) battleSeenResultIds.add(resultId);
      showBattleResult(payload.result || {});
      return;
    }
    if (type === "error") {
      const messages = {
        room_not_found: "没有找到这个房间，请检查房间码",
        room_full: "这个房间已经有两位玩家",
        opponent_offline: "对方目前不在线，邀请会保留一会儿",
        target_not_found: "暂时找不到这位玩家",
        battle_not_configured: "Cloudflare 实时房间尚未绑定",
        already_playing: "这场对战已经开始",
        host_only: "只有房主可以选择对战难度",
        invalid_difficulty: "这个难度暂时不可用，请重新选择",
      };
      const message = messages[payload.code] || cleanPlayerName(payload.message) || "实时房间操作失败，请重试";
      if (battleRoomMessage) battleRoomMessage.textContent = message;
      setBattleConnection(payload.code === "battle_not_configured" ? "error" : battleSocketState, message);
    }
  }

  function updateCloudAccountUi(message = "") {
    if (loggedAccountName) loggedAccountName.textContent = accountAuthenticated ? `云端账号：${accountName}` : "云端账号未连接";
    if (accountSyncStatus) accountSyncStatus.textContent = message || (accountAuthenticated ? "记录会自动同步到 Cloudflare" : "登录后自动同步游戏记录");
    if (showCoinsToggle) showCoinsToggle.checked = accountShowCoins;
    if (showOnlineStatusToggle) showOnlineStatusToggle.checked = accountShowOnlineStatus;
    if (playerNameInput && document.activeElement !== playerNameInput) playerNameInput.value = playerName;
    if (profileButtonAvatar) profileButtonAvatar.textContent = avatarDefinition(accountAvatar).icon;
    if (profileButtonStatus) profileButtonStatus.textContent = accountAuthenticated ? "已登录" : "未连接";
    if (profileButtonName) profileButtonName.textContent = playerName || "玩家";
    if (profileButton) profileButton.setAttribute("aria-label", accountAuthenticated ? `打开 ${playerName || "玩家"} 的个人中心` : "打开个人中心");
    if (homeUnlockedLevel) homeUnlockedLevel.textContent = String(highestUnlocked);
    if (homeHeartCount) homeHeartCount.textContent = String(maxHearts);
    canvas.dataset.accountAuthenticated = String(accountAuthenticated);
    canvas.dataset.accountName = accountName;
    canvas.dataset.showCoins = String(accountShowCoins);
    canvas.dataset.showOnlineStatus = String(accountShowOnlineStatus);
    canvas.dataset.accountAvatar = accountAvatar;
  }

  function setAccountGateMode(mode) {
    const registering = mode !== "login";
    registerTab?.classList.toggle("is-active", registering);
    loginTab?.classList.toggle("is-active", !registering);
    registerTab?.setAttribute("aria-selected", String(registering));
    loginTab?.setAttribute("aria-selected", String(!registering));
    if (registerTab) registerTab.tabIndex = registering ? 0 : -1;
    if (loginTab) loginTab.tabIndex = registering ? -1 : 0;
    registerForm?.classList.toggle("is-hidden", !registering);
    loginForm?.classList.toggle("is-hidden", registering);
    if (registerForm) registerForm.hidden = !registering;
    if (loginForm) loginForm.hidden = registering;
    if (accountGateMessage) {
      accountGateMessage.textContent = registering ? "首次使用请选择“注册账号”" : "输入名称和密码恢复云端记录";
      accountGateMessage.classList.remove("is-error", "is-success");
    }
    window.setTimeout(() => {
      try { (registering ? registerNameInput : loginNameInput)?.focus(); } catch { /* no-op */ }
    }, 20);
  }

  function showAccountGate(mode = "register", message = "") {
    accountAuthenticated = false;
    accountIsAdmin = false;
    window.clearTimeout(presenceTimer);
    presenceTimer = 0;
    disconnectBattleSocket();
    stopChatPolling();
    stopChatUnreadPolling();
    setChatUnreadCount(0);
    accountGate?.classList.remove("is-hidden");
    nameGate?.classList.add("is-hidden");
    setAccountGateMode(mode);
    if (message && accountGateMessage) {
      accountGateMessage.textContent = message;
      accountGateMessage.classList.add("is-error");
    }
    updateCloudAccountUi();
  }

  function accountErrorMessage(code) {
    return ({
      name_taken: "这个名称已经注册，请点击“已有账号登录”",
      invalid_registration: "请填写名称，并输入两次相同的密码（至少4个字符）",
      invalid_credentials: "名称或密码错误",
      invalid_login: "请输入名称和密码",
      account_unauthorized: "登录已过期，请重新登录",
      account_reset_pending: "管理员正在重置此账号，请稍候",
      invalid_profile: "请输入 1–12 个字符的玩家名称",
      kv_not_bound: "Cloudflare 的 LEADERBOARD KV 尚未绑定",
      reservation_closed: "云青已经正式解锁，不需要预约了",
      reservation_full: "云青的 3 个预约名额已经满了",
      insufficient_coins: "金币不足，无法完成这次购买",
      yuanyuan_not_released: "元元将在 7 月 27 日上午 10:00 开抢",
      yuanyuan_sold_out: "元元的 3 个限量名额已经抢完",
      site_locked: "网站正在临时维护，请等待封锁结束",
      season_reward_not_eligible: "只有两周赛季冠军可以购买哆啦A梦",
      season_reward_insufficient_coins: "金币不足，暂时无法解锁哆啦A梦",
      redeem_code_invalid: "兑换码不正确，请重新输入",
      redeem_code_inactive: "这个兑换码已暂停使用",
      redeem_code_not_started: "这个兑换码还未到开放时间",
      redeem_code_expired: "这个兑换码已经过期",
      redeem_code_already_used: "这个账号已经领取过该兑换码",
      redeem_reward_unavailable: "兑换码对应的人物暂时不可用",
      revive_quiz_disabled: "每日复活卡答题目前没有开放",
      revive_quiz_expired: "今天的题目已经更新，请重新打开答题页面",
      revive_inventory_full: "复活卡已经装满，请先在游戏中使用一张",
      revive_quiz_incomplete: "请先回答全部 3 道题",
      revive_cards_disabled: "复活卡功能目前没有开放",
      invalid_revive_transaction: "这次复活请求无效，请重新操作",
      revive_bundle_ended: "三张复活卡的限时优惠已经结束",
      revive_inventory_space: "复活卡空位不足，无法购买这个组合",
      revive_daily_limit: "今天的复活次数已经用完，请明天再来",
      revive_card_empty: "当前没有复活卡，可以选择立即购买并复活",
      request_timeout: "连接超时，请检查网络后重试",
      network_offline: "当前没有网络，联网后会自动重试",
      network_error: "网络暂时不稳定，请稍后重试",
      server_error: "服务器暂时忙碌，请稍后重试",
    })[code] || "账号服务暂时无法连接，请稍后再试";
  }

  async function apiFetch(resource, options = {}, timeoutMs = 10000) {
    if (typeof window.fetch !== "function") {
      const unavailable = new Error(accountErrorMessage("network_offline"));
      unavailable.code = "network_offline";
      throw unavailable;
    }
    const controller = typeof window.AbortController === "function" ? new window.AbortController() : null;
    const timeout = Math.max(1500, Math.min(30000, Number(timeoutMs) || 10000));
    const timer = controller ? window.setTimeout(() => controller.abort(), timeout) : 0;
    try {
      return await window.fetch(resource, controller ? { ...options, signal: controller.signal } : options);
    } catch (cause) {
      const code = controller?.signal.aborted
        ? "request_timeout"
        : window.navigator?.onLine === false
          ? "network_offline"
          : "network_error";
      const error = new Error(accountErrorMessage(code));
      error.code = code;
      try { error.cause = cause; } catch { /* Older Safari can expose a read-only cause. */ }
      throw error;
    } finally {
      if (timer) window.clearTimeout(timer);
    }
  }

  function formatSiteLockDuration(milliseconds) {
    const totalSeconds = Math.max(0, Math.ceil(Number(milliseconds) / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (days > 0) return `${days}天 ${String(hours).padStart(2, "0")}时 ${String(minutes).padStart(2, "0")}分`;
    if (hours > 0) return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function formatSiteLockTime(timestamp) {
    const date = new Date(Number(timestamp) || 0);
    if (!Number.isFinite(date.getTime()) || date.getTime() <= 0) return "等待管理员解除";
    return new Intl.DateTimeFormat("zh-CN", {
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  }

  function updateSiteLockClock(force = false) {
    const now = Date.now() + siteLockServerOffset;
    if (!siteLockActive) {
      if (siteLockState.scheduled && now >= Number(siteLockState.startsAt) && Number(siteLockState.endsAt) > now) {
        applySiteLockStatus({
          serverTime: now,
          lock: { ...siteLockState, active: true, scheduled: false },
        });
        loadSiteStatus();
      }
      return;
    }
    const remaining = Math.max(0, Number(siteLockState.endsAt) - now);
    const second = Math.ceil(remaining / 1000);
    if (!force && second === lastSiteLockSecond) return;
    lastSiteLockSecond = second;
    if (siteLockCountdown) {
      siteLockCountdown.textContent = remaining > 0
        ? formatSiteLockDuration(remaining)
        : "正在恢复…";
    }
    if (siteLockWindow) siteLockWindow.textContent = `预计 ${formatSiteLockTime(siteLockState.endsAt)} 恢复`;
    if (remaining <= 0) loadSiteStatus(true);
  }

  function applySiteLockStatus(payload) {
    const lock = payload?.lock && typeof payload.lock === "object" ? payload.lock : {};
    const wasActive = siteLockActive;
    const serverTime = Number(payload?.serverTime);
    if (Number.isFinite(serverTime)) siteLockServerOffset = serverTime - Date.now();
    siteLockState = {
      enabled: lock.enabled === true,
      active: lock.active === true,
      scheduled: lock.scheduled === true,
      startsAt: Math.max(0, Number(lock.startsAt) || 0),
      endsAt: Math.max(0, Number(lock.endsAt) || 0),
      message: String(lock.message || "云端正在进行临时维护，请稍后回来。").slice(0, 90),
    };
    siteLockActive = siteLockState.active;
    siteStatusChecked = true;
    gameShell?.classList.toggle("is-site-locked", siteLockActive);
    siteLockOverlay?.classList.toggle("is-hidden", !siteLockActive);
    siteLockOverlay?.setAttribute("aria-hidden", String(!siteLockActive));
    canvas.dataset.siteLocked = String(siteLockActive);
    if (siteLockMessage) siteLockMessage.textContent = siteLockState.message;
    if (siteLockActive) {
      if (gameState === "playing") pauseGame();
      window.clearTimeout(presenceTimer);
      presenceTimer = 0;
      disconnectBattleSocket();
      stopChatPolling();
      stopChatUnreadPolling();
      updateSiteLockClock(true);
      window.setTimeout(() => siteLockRefreshButton?.focus(), 20);
      return;
    }
    lastSiteLockSecond = -1;
    if (wasActive) {
      loadCharacterCatalog();
      if (accountAuthenticated) {
        scheduleAccountSync(120);
        loadLeaderboard(true);
        refreshYunqingStoreStatus();
        connectBattleSocket();
        schedulePresenceHeartbeat(350);
      } else if (accountToken) {
        restoreAccountSession();
      }
    }
  }

  function scheduleSiteStatusPoll(delay = siteLockActive ? 8000 : 25000) {
    if (siteLockPollTimer) window.clearTimeout(siteLockPollTimer);
    let nextDelay = Math.max(1000, Number(delay) || 25000);
    if (!siteLockActive && siteLockState.scheduled) {
      const untilStart = Number(siteLockState.startsAt) - (Date.now() + siteLockServerOffset);
      if (untilStart > 0) nextDelay = Math.min(nextDelay, Math.max(1000, untilStart + 180));
    }
    siteLockPollTimer = window.setTimeout(() => loadSiteStatus(), nextDelay);
  }

  async function loadSiteStatus(manual = false) {
    if (manual && siteLockRefreshButton) {
      siteLockRefreshButton.disabled = true;
      siteLockRefreshButton.textContent = "检查中…";
    }
    try {
      const response = await apiFetch("./api/site-status", {
        headers: { Accept: "application/json" },
        cache: "no-store",
      }, 8000);
      if (!response.ok) throw new Error("site_status_unavailable");
      applySiteLockStatus(await response.json());
    } catch {
      // Once a lock has been observed, a brief network outage must not let the
      // player bypass it. Before a lock is observed, the game stays usable.
      siteStatusChecked = true;
      if (siteLockActive && siteLockMessage) {
        siteLockMessage.textContent = "暂时无法连接服务器，正在继续等待维护结束。";
      }
    } finally {
      if (manual && siteLockRefreshButton) {
        siteLockRefreshButton.disabled = false;
        siteLockRefreshButton.textContent = "重新检查";
      }
      scheduleSiteStatusPoll();
    }
    return !siteLockActive;
  }

  async function accountRequest(action, data = {}, useToken = false) {
    const headers = { "Content-Type": "application/json", Accept: "application/json" };
    if (useToken && accountToken) headers.Authorization = `Bearer ${accountToken}`;
    const response = await apiFetch("./api/account", {
      method: "POST",
      headers,
      body: JSON.stringify({ action, ...data }),
    }, 12000);
    let payload = {};
    try { payload = await response.json(); } catch { payload = {}; }
    if (!response.ok) {
      const code = String(payload.error || (response.status >= 500 ? "server_error" : "request_failed"));
      if (code === "site_locked" && payload?.lock) {
        applySiteLockStatus({ lock: payload.lock, serverTime: payload.serverTime });
      }
      const error = new Error(accountErrorMessage(code));
      error.code = code;
      error.payload = payload;
      throw error;
    }
    return payload;
  }

  function schedulePresenceHeartbeat(delay = 105000) {
    window.clearTimeout(presenceTimer);
    presenceTimer = 0;
    if (!accountAuthenticated || !accountToken || siteLockActive) return;
    presenceTimer = window.setTimeout(sendPresenceHeartbeat, Math.max(300, Number(delay) || 105000));
  }

  async function sendPresenceHeartbeat() {
    if (presenceBusy || !accountAuthenticated || !accountToken || siteLockActive || document.visibilityState === "hidden") {
      schedulePresenceHeartbeat(45000);
      return;
    }
    presenceBusy = true;
    try {
      await accountRequest("presence", {}, true);
      schedulePresenceHeartbeat(105000);
    } catch {
      schedulePresenceHeartbeat(45000);
    } finally {
      presenceBusy = false;
    }
  }

  function finishAccountAuthentication(payload, fallbackToken = "") {
    const account = payload?.account;
    if (!account?.name || !account?.playerId) throw new Error("账号数据不完整");
    accountToken = String(payload.token || fallbackToken || accountToken);
    accountAuthenticated = true;
    accountSyncFailureCount = 0;
    accountName = cleanPlayerName(account.name);
    accountShowCoins = account.showCoins === true;
    accountShowOnlineStatus = account.showOnlineStatus === true;
    accountAvatar = avatarDefinition(account.avatar).id;
    pendingProfileAvatar = accountAvatar;
    playerName = accountName;
    playerId = String(account.playerId);
    // Registration, login and profile updates are already reflected in the server ranking.
    // Mark this identity as registered so opening the home screen does not spend another KV write.
    lastRegisteredIdentity = `${playerId}:${playerName.toLocaleLowerCase()}`;
    writeSetting("cloud-jumper-account-token", accountToken);
    writeSetting("cloud-jumper-show-coins", accountShowCoins);
    writeSetting("cloud-jumper-show-online-status", accountShowOnlineStatus);
    writeSetting("cloud-jumper-player-name", playerName);
    writeSetting("cloud-jumper-player-id", playerId);
    writeSetting("cloud-jumper-avatar", accountAvatar);
    applyAccountGameData(account.gameData);
    accountGate?.classList.add("is-hidden");
    nameGate?.classList.add("is-hidden");
    updateCloudAccountUi("云端记录已恢复");
    setChatUnreadCount(0);
    if (siteLockActive) return;
    scheduleChatUnreadPolling(120);
    loadLeaderboard();
    refreshYunqingStoreStatus();
    connectBattleSocket();
    schedulePresenceHeartbeat(450);
    const requestedBattle = cleanRoomCode(new URLSearchParams(window.location.search).get("battle"));
    if (requestedBattle) {
      battleRequestedRoomCode = requestedBattle;
      try {
        const cleanUrl = new URL(window.location.href);
        cleanUrl.searchParams.delete("battle");
        window.history.replaceState(null, "", cleanUrl.toString());
      } catch { /* no-op */ }
      window.setTimeout(openBattleDialog, 520);
    }
    window.setTimeout(showPendingHomeAnnouncement, 900);
    window.setTimeout(showPendingCharacterCatalogNotice, 1120);
  }

  async function restoreAccountSession() {
    if (accountRestoreBusy) return;
    if (siteLockActive) return;
    if (!accountToken) {
      showAccountGate("register");
      return;
    }
    accountRestoreBusy = true;
    if (accountGateMessage) accountGateMessage.textContent = "正在恢复云端账号…";
    try {
      const payload = await accountRequest("restore", {}, true);
      finishAccountAuthentication(payload, accountToken);
    } catch (error) {
      if (error.code === "account_unauthorized") {
        accountToken = "";
        writeSetting("cloud-jumper-account-token", "");
        showAccountGate("login", "登录已过期，请重新输入名称和密码");
      } else {
        showAccountGate("login", `${error.message || "网络暂时不可用"}；恢复网络后会自动重试`);
      }
    } finally {
      accountRestoreBusy = false;
    }
  }

  function scheduleAccountSync(delay = 650) {
    if (!accountAuthenticated || !accountToken || siteLockActive) return;
    accountSyncPending = true;
    window.clearTimeout(accountSyncTimer);
    accountSyncTimer = window.setTimeout(syncAccountNow, delay);
  }

  async function syncAccountNow() {
    if (!accountAuthenticated || !accountToken) return;
    if (accountSyncBusy) {
      accountSyncPending = true;
      return;
    }
    accountSyncBusy = true;
    accountSyncPending = false;
    updateCloudAccountUi("正在同步云端记录…");
    try {
      const snapshot = collectAccountGameData();
      const submittedWalletCoins = snapshot.walletCoins;
      const payload = await accountRequest("save", {
        gameData: snapshot,
        showCoins: accountShowCoins,
        showOnlineStatus: accountShowOnlineStatus,
      }, true);
      const serverGameData = payload?.account?.gameData;
      if (serverGameData) {
        if (payload.walletStale === true && walletCoins !== submittedWalletCoins) {
          // The tab started from an obsolete server balance, but a real local transaction happened
          // during this request. Rebase only that delta onto the corrected server balance.
          const pendingDelta = walletCoins - submittedWalletCoins;
          walletCoins = Math.max(0, Math.min(1000000000, Math.round(Number(serverGameData.walletCoins) || 0) + pendingDelta));
          walletRevision = Math.max(0, Math.round(Number(serverGameData.walletRevision) || 0));
          writeSetting("cloud-jumper-wallet", walletCoins);
          writeSetting("cloud-jumper-wallet-revision", walletRevision);
          updateWalletUi();
          accountSyncPending = true;
        } else if (walletCoins === submittedWalletCoins || payload.walletStale === true) {
          // The server is authoritative. This replaces any stale balance left by an old tab or device.
          applyAccountGameData(serverGameData);
        } else {
          // A local reward or purchase happened while the request was in flight. Keep that change,
          // adopt the newest revision, then let the already-scheduled follow-up save send it safely.
          walletRevision = Math.max(0, Math.round(Number(serverGameData.walletRevision) || walletRevision));
          writeSetting("cloud-jumper-wallet-revision", walletRevision);
        }
      }
      accountSyncFailureCount = 0;
      updateCloudAccountUi("云端记录已同步");
    } catch (error) {
      if (error.code === "account_unauthorized") {
        accountToken = "";
        writeSetting("cloud-jumper-account-token", "");
        showAccountGate("login", "登录已过期，请重新登录");
      } else if (error.code === "account_reset_pending") {
        updateCloudAccountUi("管理员正在重置账号…");
        loadLeaderboard();
      } else {
        accountSyncFailureCount = Math.min(8, accountSyncFailureCount + 1);
        accountSyncPending = true;
        updateCloudAccountUi("暂时离线，记录会自动重试");
      }
    } finally {
      accountSyncBusy = false;
      if (accountSyncPending) {
        const retryDelay = accountSyncFailureCount > 0
          ? Math.min(60000, 4000 * (2 ** Math.min(4, accountSyncFailureCount - 1)))
          : 900;
        scheduleAccountSync(retryDelay);
      }
    }
  }

  async function saveOwnProfile() {
    if (!accountAuthenticated || !accountToken) return showAccountGate("login", "请先登录账号");
    const name = cleanPlayerName(playerNameInput?.value);
    if (!name) {
      playerNameInput?.parentElement?.classList.add("has-error");
      if (nameError) nameError.textContent = "请输入 1–12 个字符的玩家名称";
      return;
    }
    if (profileSaveButton) {
      profileSaveButton.disabled = true;
      profileSaveButton.textContent = "正在保存…";
    }
    try {
      accountShowCoins = Boolean(showCoinsToggle?.checked);
      accountShowOnlineStatus = Boolean(showOnlineStatusToggle?.checked);
      const payload = await accountRequest("updateProfile", {
        name,
        avatar: pendingProfileAvatar,
        showCoins: accountShowCoins,
        showOnlineStatus: accountShowOnlineStatus,
        gameData: collectAccountGameData(),
      }, true);
      finishAccountAuthentication(payload, accountToken);
      if (nameError) nameError.textContent = "个人资料已保存，今后请用新名称登录";
      playerNameInput?.parentElement?.classList.remove("has-error");
      openOwnProfile();
      announce("个人资料已保存");
      playTone(620, 0.08, "square", 0.03, 0);
      playTone(840, 0.12, "triangle", 0.025, 0.07);
    } catch (error) {
      playerNameInput?.parentElement?.classList.add("has-error");
      if (nameError) nameError.textContent = error.message;
    } finally {
      if (profileSaveButton) {
        profileSaveButton.disabled = false;
        profileSaveButton.textContent = "保存个人资料";
      }
    }
  }

  function createFreshPlayerId() {
    const randomPart = window.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`;
    const id = `player-${randomPart}`.slice(0, 80);
    writeSetting("cloud-jumper-player-id", id);
    return id;
  }

  function getOrCreatePlayerId() {
    const stored = String(readSetting("cloud-jumper-player-id", ""));
    if (/^[a-z0-9-]{16,80}$/i.test(stored)) return stored;
    return createFreshPlayerId();
  }

  function cleanPlayerName(value) {
    return String(value || "").replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, 12);
  }

  function savePlayerName(value) {
    const name = cleanPlayerName(value);
    if (!name) return false;
    if (accountAuthenticated && accountName && name.toLocaleLowerCase() !== accountName.toLocaleLowerCase()) return false;
    const previousName = cleanPlayerName(playerName);
    if (previousName && previousName.toLocaleLowerCase() !== name.toLocaleLowerCase()) {
      playerId = createFreshPlayerId();
      lastRegisteredIdentity = "";
    }
    playerName = name;
    if (playerNameInput) playerNameInput.value = name;
    if (entryNameInput) entryNameInput.value = name;
    playerNameInput?.parentElement?.classList.remove("has-error");
    entryNameError?.classList.remove("is-error");
    if (nameError) nameError.textContent = "排名榜会显示这个名字";
    if (entryNameError) entryNameError.textContent = "名字已保存";
    writeSetting("cloud-jumper-player-name", playerName);
    canvas.dataset.playerName = playerName;
    canvas.dataset.playerId = playerId;
    nameGate?.classList.add("is-hidden");
    registerCurrentPlayer();
    return true;
  }

  function showRequiredNameGate() {
    nameGate?.classList.remove("is-hidden");
    let resetMessage = "";
    try {
      resetMessage = String(window.sessionStorage?.getItem("cloud-jumper-admin-reset-message") || "");
      if (resetMessage) window.sessionStorage?.removeItem("cloud-jumper-admin-reset-message");
    } catch {
      resetMessage = "";
    }
    if (entryNameError) entryNameError.textContent = resetMessage || "请输入 1–12 个字符";
    try { entryNameInput?.focus(); } catch { /* no-op */ }
  }

  function requirePlayerName() {
    if (!accountAuthenticated) {
      showAccountGate(accountToken ? "login" : "register", "请先注册或登录云端账号");
      return false;
    }
    const name = cleanPlayerName(playerNameInput?.value || playerName);
    if (!name) {
      if (nameError) nameError.textContent = "请先输入名字，才能开始游戏";
      playerNameInput?.parentElement?.classList.add("has-error");
      showRequiredNameGate();
      return false;
    }
    return savePlayerName(name);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;",
    })[character]);
  }

  function loadLocalLeaderboard() {
    try {
      const value = JSON.parse(String(readSetting("cloud-jumper-local-leaderboard", "[]")));
      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  }

  function soloRankingPoints(entry) {
    return (Math.max(1, Number(entry?.level) || 1) - 1) * 1200 + Math.max(0, Number(entry?.score) || 0) * 6;
  }

  function battleRankingPoints(entry) {
    return Math.max(0, Number(entry?.battlePoints) || 0) + Math.max(0, Number(entry?.battleWins) || 0) * 120;
  }

  function overallRankingPoints(entry) {
    return Math.round(soloRankingPoints(entry) + battleRankingPoints(entry));
  }

  function sortLeaderboard(entries, mode = selectedRankingMode) {
    return entries
      .filter((entry) => entry && cleanPlayerName(entry.name))
      .sort((a, b) => {
        if (mode === "battle") {
          return Number(b.battleWins || 0) - Number(a.battleWins || 0) ||
            Number(b.battlePoints || 0) - Number(a.battlePoints || 0) ||
            Number(b.battleBestScore || 0) - Number(a.battleBestScore || 0) ||
            Number(b.battleMatches || 0) - Number(a.battleMatches || 0);
        }
        if (mode === "overall") {
          const overallDifference = overallRankingPoints(b) - overallRankingPoints(a);
          if (overallDifference) return overallDifference;
        }
        return Number(b.level) - Number(a.level) || Number(b.score) - Number(a.score) || Number(a.time || Infinity) - Number(b.time || Infinity);
      });
  }

  function renderLeaderboard(entries, status = "本机排名") {
    if (!leaderboardList) return;
    leaderboardSourceSnapshot = Array.isArray(entries) ? [...entries] : [];
    const ranked = sortLeaderboard(leaderboardSourceSnapshot, selectedRankingMode);
    leaderboardSnapshot = ranked;
    const ownEntry = leaderboardSourceSnapshot.find((entry) => String(entry?.inviteId || "") === String(playerId));
    if (ownEntry) accountIsAdmin = ownEntry.isAdmin === true;
    for (const button of rankingModeButtons) button.classList.toggle("is-active", button.dataset.rankingMode === selectedRankingMode);
    leaderboardList.innerHTML = ranked.length
      ? ranked.map((entry, index) => {
        const scoreValue = Math.max(0, Number(entry.score) || 0);
        const timeValue = Math.max(0, Number(entry.time) || 0);
        const avatar = avatarDefinition(entry.avatar);
        const activeCharacter = characterDefinition(entry.selectedCharacter);
        const presence = ["online", "recent", "away"].includes(String(entry.presence)) ? String(entry.presence) : "";
        const presenceDot = presence ? `<i class="presence-dot is-${presence}" aria-hidden="true"></i>` : "";
        const battleMatchesValue = Math.max(0, Math.round(Number(entry.battleMatches) || 0));
        const battleWinsValue = Math.max(0, Math.round(Number(entry.battleWins) || 0));
        const result = selectedRankingMode === "battle"
          ? (battleMatchesValue > 0
            ? `${battleWinsValue} 胜 / ${battleMatchesValue} 场 · 积分 ${Math.max(0, Math.round(Number(entry.battlePoints) || 0))} · 最佳 ${Math.max(0, Math.round(Number(entry.battleBestScore) || 0))}`
            : "尚未参加好友对战")
          : selectedRankingMode === "overall"
            ? `综合 ${overallRankingPoints(entry)} · 第 ${Math.max(1, Number(entry.level) || 1)} 关 · 对战 ${battleWinsValue} 胜`
            : scoreValue === 0 && timeValue === 0
              ? "已登记 · 尚未挑战"
              : `第 ${Math.max(1, Number(entry.level) || 1)} 关 · ${scoreValue} 分${timeValue > 0 ? ` · ${timeValue.toFixed(1)} 秒` : ""}`;
        const coinText = entry.showCoins === true && Number.isFinite(Number(entry.coins)) ? ` · ●${Math.max(0, Math.round(Number(entry.coins)))}` : "";
        const adminBadge = entry.isAdmin === true ? "<em class=\"leader-admin-badge\">管理员</em>" : "";
        return `<li><button class="leader-profile-trigger" type="button" data-profile-index="${index}" aria-label="查看 ${escapeHtml(cleanPlayerName(entry.name))} 的个人资料"><span class="mini-profile-avatar" aria-hidden="true">${avatar.icon}${presenceDot}</span><span class="leader-player-copy"><span class="leader-name-line">${escapeHtml(cleanPlayerName(entry.name))}${adminBadge}</span><small class="leader-character-chip"><i aria-hidden="true">${escapeHtml(activeCharacter.badge)}</i>${escapeHtml(activeCharacter.name)}</small></span></button><b>${result}${coinText}</b></li>`;
      }).join("")
      : "<li class=\"is-empty\"><span>还没有成绩</span><b>—</b></li>";
    for (const button of leaderboardList.querySelectorAll("[data-profile-index]")) {
      button.addEventListener("click", () => openPublicProfile(leaderboardSnapshot[Number(button.dataset.profileIndex)]));
    }
    renderBattleFriends();
    if (leaderboardStatus) leaderboardStatus.textContent = ranked.length ? `${status} · 共 ${ranked.length} 位玩家` : status;
  }

  function applyLeaderboardMeta(data) {
    const season = data?.season;
    if (leaderboardSeason) {
      if (season?.endAt) {
        const remaining = Math.max(0, Number(season.endAt) - Date.now());
        const days = Math.floor(remaining / 86400000);
        const hours = Math.floor((remaining % 86400000) / 3600000);
        leaderboardSeason.textContent = `本赛季剩余 ${days} 天 ${hours} 小时`;
      } else {
        leaderboardSeason.textContent = "共享赛季未连接";
      }
    }
    doraemonPurchaseEligible = data?.rewardEligible === true;
    if (leaderboardWinner) {
      leaderboardWinner.textContent = data?.latestWinner?.name
        ? `上届冠军：${cleanPlayerName(data.latestWinner.name)} · 已解锁冠军专属资格`
        : "两周赛季冠军可解锁哆啦A梦专属资格";
    }
    if (leaderboardReward) {
      const alreadyOwned = unlockedCharacters.has("doraemon");
      leaderboardReward.textContent = alreadyOwned
        ? "冠军人物：哆啦A梦已解锁"
        : doraemonPurchaseEligible
          ? "你的冠军专属资格已解锁"
          : "冠军专属：哆啦A梦资格";
      leaderboardReward.classList.toggle("is-unlocked", alreadyOwned || doraemonPurchaseEligible);
    }
    renderCharacterShop();
  }

  function applyAdminReset(resetRequest) {
    const token = String(resetRequest?.token || "").replace(/[^a-z0-9-]/gi, "").slice(0, 90);
    if (!token || String(readSetting("cloud-jumper-remote-reset-token", "")) === token) return false;
    const resetPlayerId = playerId;
    try {
      const keys = [];
      for (let index = 0; index < window.localStorage.length; index += 1) {
        const key = window.localStorage.key(index);
        if (key?.startsWith("cloud-jumper-")) keys.push(key);
      }
      for (const key of keys) window.localStorage.removeItem(key);
      window.localStorage.setItem("cloud-jumper-reset-version", DATA_RESET_VERSION);
      window.localStorage.setItem("cloud-jumper-remote-reset-token", token);
      window.sessionStorage?.setItem("cloud-jumper-admin-reset-message", "管理员已将账号恢复为初始状态");
    } catch {
      return false;
    }
    let reloadStarted = false;
    const reload = () => {
      if (reloadStarted) return;
      reloadStarted = true;
      window.location.reload();
    };
    if (typeof window.fetch === "function") {
      window.fetch("./api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "ackReset", playerId: resetPlayerId, token }),
        keepalive: true,
      }).catch(() => {}).finally(reload);
      window.setTimeout(reload, 700);
    } else {
      reload();
    }
    return true;
  }

  async function applyAdminGifts(gifts) {
    const incoming = Array.isArray(gifts) ? gifts : [];
    const claimed = readStoredIdList("cloud-jumper-admin-gifts", 300);
    const claimedSet = new Set(claimed);
    const pending = [];
    for (const gift of incoming) {
      const id = String(gift?.id || "").replace(/[^a-z0-9-]/gi, "").slice(0, 90);
      const amount = Math.max(0, Math.min(10000, Math.round(Number(gift?.amount) || 0)));
      if (!id || !amount || claimedSet.has(id) || processingGiftIds.has(id)) continue;
      processingGiftIds.add(id);
      pending.push({ id, amount, credited: gift?.credited === true, balanceAfter: Math.max(0, Number(gift?.balanceAfter) || 0) });
    }
    if (pending.length === 0) return 0;

    const direct = pending.filter((gift) => gift.credited);
    const legacy = pending.filter((gift) => !gift.credited);
    const applied = [...legacy];
    let directRestored = direct.length === 0;
    if (direct.length > 0 && accountAuthenticated && accountToken) {
      try {
        const payload = await accountRequest("restore", {}, true);
        if (payload?.account?.gameData) {
          applyAccountGameData(payload.account.gameData);
          directRestored = true;
          applied.push(...direct);
        }
      } catch {
        enqueueNotice({
          id: "gift-sync-waiting",
          kind: "message",
          icon: "☁️",
          kicker: "礼物正在云端等待",
          title: "请重新登录领取礼物",
          message: "管理员已经发放金币，但这台设备的登录状态已过期。重新登录后金币会自动到账。",
          closeLabel: "知道了",
        });
      }
    }
    for (const gift of legacy) {
      walletCoins += gift.amount;
      recordCoinTransaction(gift.amount, "admin_gift", "管理员赠送金币", "后台礼物已到账", {
        id: `admin-gift-${gift.id}`,
      });
    }
    for (const gift of applied) claimedSet.add(gift.id);
    for (const gift of pending) processingGiftIds.delete(gift.id);
    const received = applied.reduce((sum, gift) => sum + gift.amount, 0);
    if (received <= 0 || (!directRestored && legacy.length === 0)) return 0;

    writeSetting("cloud-jumper-admin-gifts", JSON.stringify([...claimedSet].slice(-300)));
    saveCharacterState();
    updateWalletUi();
    renderCharacterShop(`管理员礼物到账：获得 ${received} 金币！`);
    enqueueNotice({
      id: `gift-${applied.map((gift) => gift.id).join("-")}`,
      kind: "gift",
      icon: "🎁",
      kicker: "管理员送来礼物",
      title: `恭喜获得 ${received} 金币！`,
      message: "金币已经存入你的云端账号，现在可以直接购买新人物。",
      detail: `当前金币余额：● ${walletCoins}`,
      actionLabel: "去商店",
      actionTab: "shop",
      closeLabel: "收下礼物",
    });
    announce(`管理员赠送了 ${received} 金币。`);
    playTone(660, 0.08, "square", 0.035, 0);
    playTone(920, 0.14, "triangle", 0.03, 0.08);
    return received;
  }

  async function handleServerCommands(data) {
    if (data?.resetRequest && applyAdminReset(data.resetRequest)) return true;
    await applyAdminGifts(data?.gifts);
    return false;
  }

  function recordLocalScore(entry) {
    const list = loadLocalLeaderboard();
    const index = list.findIndex((item) => (item.playerId && item.playerId === entry.playerId) || cleanPlayerName(item.name).toLowerCase() === entry.name.toLowerCase());
    const existing = index >= 0 ? list[index] : null;
    const better = !existing || sortLeaderboard([entry, existing], "solo")[0] === entry;
    if (better) {
      if (index >= 0) list[index] = entry;
      else list.push(entry);
    } else if (index >= 0) {
      list[index] = {
        ...existing,
        name: entry.name,
        coins: entry.coins,
        showCoins: entry.showCoins,
        avatar: entry.avatar,
        selectedCharacter: entry.selectedCharacter,
        unlockedCharacters: entry.unlockedCharacters,
        selectedSkin: entry.selectedSkin,
      };
    }
    writeSetting("cloud-jumper-local-leaderboard", JSON.stringify(sortLeaderboard(list, "solo")));
    return sortLeaderboard(list, "solo");
  }

  async function loadLeaderboard(force = false) {
    const forced = force === true;
    if (leaderboardLoading) return;
    if (!forced && leaderboardLastLoadedAt && Date.now() - leaderboardLastLoadedAt < 1200) return;
    leaderboardLoading = true;
    if (refreshLeaderboard) {
      refreshLeaderboard.disabled = true;
      refreshLeaderboard.setAttribute("aria-busy", "true");
    }
    const local = loadLocalLeaderboard();
    const hadRemoteSnapshot = leaderboardHasRemoteSnapshot && leaderboardSourceSnapshot.length > 0;
    const fallback = hadRemoteSnapshot ? leaderboardSourceSnapshot : local;
    renderLeaderboard(fallback, hadRemoteSnapshot ? "正在刷新共享排名…" : "正在连接共享排名榜…");
    if (typeof window.fetch !== "function") {
      renderLeaderboard(local, "当前显示本机排名");
      applyLeaderboardMeta(null);
      leaderboardLoading = false;
      if (refreshLeaderboard) {
        refreshLeaderboard.disabled = false;
        refreshLeaderboard.removeAttribute("aria-busy");
      }
      return;
    }
    try {
      const response = await apiFetch(`./api/leaderboard?playerId=${encodeURIComponent(playerId)}`, { headers: { Accept: "application/json" } }, 10000);
      if (!response.ok) throw new Error("offline");
      const data = await response.json();
      if (await handleServerCommands(data)) return;
      const entries = data.shared === false ? local : (Array.isArray(data.entries) ? data.entries : local);
      renderLeaderboard(entries, data.shared === false ? "当前显示本机排名" : "Cloudflare 共享排名 · 所有人可见");
      leaderboardHasRemoteSnapshot = data.shared !== false;
      applyLeaderboardMeta(data);
      leaderboardLastLoadedAt = Date.now();
    } catch {
      renderLeaderboard(fallback, hadRemoteSnapshot ? "网络波动，继续显示上次共享排名" : "共享榜未连接，当前显示本机排名");
      if (!hadRemoteSnapshot) applyLeaderboardMeta(null);
    } finally {
      leaderboardLoading = false;
      if (refreshLeaderboard) {
        refreshLeaderboard.disabled = false;
        refreshLeaderboard.removeAttribute("aria-busy");
      }
    }
  }

  function setChatStatus(message, isError = false) {
    if (!chatStatus) return;
    chatStatus.textContent = message;
    chatStatus.classList.toggle("is-error", isError);
  }

  function setChatFullscreen(enabled) {
    chatFullscreen = Boolean(enabled && selectedHomeTab === "chat");
    chatCard?.classList.toggle("is-fullscreen", chatFullscreen);
    document.body.classList.toggle("chat-fullscreen-open", chatFullscreen);
    if (chatFullscreenButton) {
      chatFullscreenButton.textContent = chatFullscreen ? "× 收起" : "⛶ 全屏";
      chatFullscreenButton.setAttribute("aria-label", chatFullscreen ? "退出全屏聊天" : "全屏显示聊天");
    }
    if (chatFullscreen) settleChatScroll(true);
  }

  function settleChatScroll(force = false) {
    if (!chatList) return;
    const shouldScroll = force || chatForceScrollToBottom;
    if (!shouldScroll) return;
    const scroll = () => { chatList.scrollTop = chatList.scrollHeight; };
    window.requestAnimationFrame(() => {
      scroll();
      window.requestAnimationFrame(scroll);
    });
    chatForceScrollToBottom = false;
  }

  function insertChatMention(name) {
    if (!chatTextInput) return;
    const mention = `@${cleanPlayerName(name) || "玩家"} `;
    const start = Number.isFinite(chatTextInput.selectionStart) ? chatTextInput.selectionStart : chatTextInput.value.length;
    const end = Number.isFinite(chatTextInput.selectionEnd) ? chatTextInput.selectionEnd : start;
    const before = chatTextInput.value.slice(0, start);
    const after = chatTextInput.value.slice(end);
    const spacer = before && !/\s$/.test(before) ? " " : "";
    chatTextInput.value = `${before}${spacer}${mention}${after}`.slice(0, 240);
    const caret = Math.min(chatTextInput.value.length, before.length + spacer.length + mention.length);
    chatTextInput.focus({ preventScroll: true });
    try { chatTextInput.setSelectionRange(caret, caret); } catch { /* no-op */ }
    setChatStatus(`已 @${cleanPlayerName(name) || "玩家"}`);
  }

  function openChatPlayerProfile(message) {
    if (!message) return;
    if (message.mine) return openOwnProfile();
    const name = cleanPlayerName(message.name);
    const leaderboardEntry = leaderboardSnapshot.find((entry) => cleanPlayerName(entry.name).toLocaleLowerCase() === name.toLocaleLowerCase());
    if (leaderboardEntry) return openPublicProfile(leaderboardEntry);
    const profile = message.profile && typeof message.profile === "object" ? message.profile : {};
    openPublicProfile({
      name,
      avatar: message.avatar,
      selectedCharacter: profile.selectedCharacter || "cloud",
      unlockedCharacters: Array.isArray(profile.unlockedCharacters) ? profile.unlockedCharacters : ["cloud"],
      selectedSkin: profile.selectedSkin || "light",
      level: Math.max(1, Number(profile.level) || 1),
      score: Math.max(0, Number(profile.score) || 0),
      coins: profile.coins,
      showCoins: profile.showCoins === true,
      systemRival: message.systemRival === true,
      inviteId: String(message.inviteId || ""),
    });
  }

  function setChatUnreadCount(value) {
    chatUnreadCount = Math.max(0, Math.min(999, Math.round(Number(value) || 0)));
    if (chatUnreadBadge) {
      chatUnreadBadge.textContent = chatUnreadCount > 99 ? "99+" : String(chatUnreadCount);
      chatUnreadBadge.classList.toggle("is-hidden", chatUnreadCount === 0);
    }
    chatTabButton?.classList.toggle("has-unread", chatUnreadCount > 0);
    chatTabButton?.setAttribute("aria-label", chatUnreadCount > 0 ? `聊天，${chatUnreadCount} 条未读消息` : "聊天");
    canvas.dataset.chatUnreadCount = String(chatUnreadCount);
  }

  function newestChatMessageTime(messages) {
    return (Array.isArray(messages) ? messages : []).reduce((latest, message) => Math.max(latest, Number(message?.createdAt) || 0), 0);
  }

  function saveChatReadMarker(value) {
    const next = Math.max(0, Math.min(Date.now() + 86400000, Math.round(Number(value) || 0)));
    if (next <= chatLastReadAt) return false;
    chatLastReadAt = next;
    writeSetting("cloud-jumper-chat-last-read-at", chatLastReadAt);
    scheduleAccountSync(120);
    return true;
  }

  function adoptCloudChatReadMarker(value) {
    const next = Math.max(0, Math.min(Date.now() + 86400000, Math.round(Number(value) || 0)));
    if (next <= chatLastReadAt) return false;
    chatLastReadAt = next;
    writeSetting("cloud-jumper-chat-last-read-at", chatLastReadAt);
    return true;
  }

  function markChatMessagesRead(messages, serverTime = 0) {
    const newest = newestChatMessageTime(messages);
    if (newest > 0) saveChatReadMarker(newest);
    else if (chatLastReadAt <= 0) saveChatReadMarker(serverTime || Date.now());
    setChatUnreadCount(0);
  }

  function updateChatUnreadFromMessages(messages, serverTime = 0) {
    const list = Array.isArray(messages) ? messages : [];
    if (chatLastReadAt <= 0) {
      const baseline = Math.max(Number(serverTime) || 0, newestChatMessageTime(list));
      saveChatReadMarker(baseline || Date.now());
      setChatUnreadCount(0);
      return;
    }
    const unread = list.filter((message) =>
      message?.mine !== true &&
      message?.recalled !== true &&
      Number(message?.createdAt) > chatLastReadAt).length;
    setChatUnreadCount(unread);
  }

  function stopChatPolling() {
    if (chatPollTimer) window.clearTimeout(chatPollTimer);
    chatPollTimer = 0;
  }

  function stopChatUnreadPolling() {
    if (chatUnreadPollTimer) window.clearTimeout(chatUnreadPollTimer);
    chatUnreadPollTimer = 0;
  }

  function scheduleChatUnreadPolling(delay = null) {
    stopChatUnreadPolling();
    if (selectedHomeTab === "chat" || gameState !== "home" || !accountAuthenticated) return;
    const adaptiveDelay = document.hidden
      ? 15000
      : Math.min(45000, 6000 * (2 ** Math.min(3, chatUnreadFailureCount)));
    const nextDelay = delay !== null && Number.isFinite(Number(delay)) ? Number(delay) : adaptiveDelay;
    chatUnreadPollTimer = window.setTimeout(async () => {
      if (!document.hidden) await refreshChatUnread();
      scheduleChatUnreadPolling();
    }, Math.max(250, nextDelay));
  }

  async function refreshChatUnread() {
    if (chatUnreadLoading || !accountAuthenticated || gameState !== "home") return false;
    chatUnreadLoading = true;
    try {
      const payload = await chatRequest("summary");
      adoptCloudChatReadMarker(payload.chatLastReadAt);
      if (selectedHomeTab === "chat") markChatMessagesRead(payload.messages, payload.serverTime);
      else updateChatUnreadFromMessages(payload.messages, payload.serverTime);
      chatUnreadFailureCount = 0;
      return true;
    } catch {
      // Keep the previous badge while the network is temporarily unavailable.
      chatUnreadFailureCount = Math.min(6, chatUnreadFailureCount + 1);
      return false;
    } finally {
      chatUnreadLoading = false;
    }
  }

  function scheduleChatPolling(delay = null) {
    stopChatPolling();
    if (selectedHomeTab !== "chat" || gameState !== "home" || !accountAuthenticated) return;
    const adaptiveDelay = document.hidden
      ? 15000
      : Math.min(30000, 3200 * (2 ** Math.min(3, chatPollFailureCount)));
    const nextDelay = delay !== null && Number.isFinite(Number(delay)) ? Number(delay) : adaptiveDelay;
    chatPollTimer = window.setTimeout(async () => {
      if (!document.hidden) await loadChatMessages(true);
      scheduleChatPolling();
    }, Math.max(400, nextDelay));
  }

  async function chatRequest(action = "list", data = {}) {
    if (!accountAuthenticated || !accountToken) throw new Error("请先登录账号");
    const readOnly = action === "list" || action === "summary";
    const options = {
      method: readOnly ? "GET" : "POST",
      headers: { Accept: "application/json", Authorization: `Bearer ${accountToken}` },
    };
    if (!readOnly) {
      options.headers["Content-Type"] = "application/json";
      options.body = JSON.stringify({ action, ...data });
    }
    const response = await apiFetch(action === "summary" ? "./api/chat?summary=1" : "./api/chat", options, readOnly ? 10000 : 15000);
    let payload = {};
    try { payload = await response.json(); } catch { payload = {}; }
    if (!response.ok) {
      const messages = {
        account_unauthorized: "登录已过期，请重新登录",
        chat_rate_limited: "发送太快了，请稍等一下",
        empty_message: "请输入文字或选择图片",
        image_too_large: "图片仍然太大，请换一张图片",
        invalid_image: "这个图片格式不支持",
        recall_expired: "已经超过 5 分钟，不能撤回",
        message_not_found: "这条消息已经不存在",
        admin_required: "你的管理员权限已失效，请刷新后重试",
        no_messages_selected: "请先选择要删除的消息",
        kv_not_bound: "聊天室存储尚未连接，请联系管理员检查 LEADERBOARD KV",
        server_error: "聊天室服务器暂时忙碌，会自动重连",
      };
      const code = String(payload.error || (response.status >= 500 ? "server_error" : "chat_error"));
      const error = new Error(messages[code] || accountErrorMessage(code) || "聊天室暂时无法连接");
      error.code = code;
      throw error;
    }
    return payload;
  }

  function chatTimeLabel(value) {
    const date = new Date(Number(value) || Date.now());
    if (Number.isNaN(date.getTime())) return "刚刚";
    const today = new Date();
    const sameDay = date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate();
    return date.toLocaleString("zh-CN", sameDay
      ? { hour: "2-digit", minute: "2-digit", hour12: false }
      : { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", hour12: false });
  }

  function formatChatMessageText(value) {
    return escapeHtml(String(value || "")).replace(/(^|\s)(@[^\s@]{1,12})/g, "$1<mark class=\"chat-mention\">$2</mark>");
  }

  function updateChatAdminTools() {
    chatAdminToolbar?.classList.toggle("is-hidden", !chatViewerIsAdmin);
    chatAdminManageButton?.classList.toggle("is-hidden", chatAdminSelectionMode);
    chatAdminSelection?.classList.toggle("is-hidden", !chatAdminSelectionMode);
    chatList?.classList.toggle("is-admin-selecting", chatViewerIsAdmin && chatAdminSelectionMode);
    const count = chatAdminSelectedIds.size;
    if (chatAdminSelectionCount) chatAdminSelectionCount.textContent = `已选 ${count} 条`;
    if (chatAdminDeleteButton) chatAdminDeleteButton.disabled = count === 0;
    if (chatInteractionNote) {
      chatInteractionNote.textContent = chatViewerIsAdmin
        ? "长按任意消息开始多选删除 · 长按头像可以 @ 对方"
        : "长按头像可以 @ 对方 · 长按自己的消息可以撤回";
    }
  }

  function applyChatAdminAccess(value) {
    chatViewerIsAdmin = value === true;
    accountIsAdmin = chatViewerIsAdmin;
    if (!chatViewerIsAdmin) {
      chatAdminSelectionMode = false;
      chatAdminSelectedIds.clear();
    }
    updateChatAdminTools();
  }

  function setChatAdminSelectionMode(active) {
    chatAdminSelectionMode = chatViewerIsAdmin && active === true;
    if (!chatAdminSelectionMode) chatAdminSelectedIds.clear();
    chatRenderFingerprint = "";
    updateChatAdminTools();
    renderChatMessages(chatMessagesSnapshot);
  }

  function toggleChatAdminMessage(message, forceSelected = null) {
    if (!chatViewerIsAdmin || !message?.id || message.adminDeletable !== true) return false;
    chatAdminSelectionMode = true;
    const shouldSelect = forceSelected === null
      ? !chatAdminSelectedIds.has(message.id)
      : forceSelected === true;
    if (shouldSelect) chatAdminSelectedIds.add(message.id);
    else chatAdminSelectedIds.delete(message.id);
    chatRenderFingerprint = "";
    updateChatAdminTools();
    renderChatMessages(chatMessagesSnapshot);
    return true;
  }

  async function deleteSelectedChatMessages() {
    const messageIds = [...chatAdminSelectedIds];
    if (!chatViewerIsAdmin || !messageIds.length) return;
    if (!window.confirm(`确定永久删除选中的 ${messageIds.length} 条消息？\n删除后聊天中不会留下占位记录。`)) return;
    if (chatAdminDeleteButton) chatAdminDeleteButton.disabled = true;
    setChatStatus("正在永久删除消息…");
    try {
      const payload = await chatRequest("adminDelete", { messageIds });
      const selected = new Set(messageIds);
      chatMessagesSnapshot = chatMessagesSnapshot.filter((message) => !selected.has(message.id));
      chatAdminSelectedIds.clear();
      chatAdminSelectionMode = false;
      chatRenderFingerprint = "";
      updateChatAdminTools();
      renderChatMessages(chatMessagesSnapshot);
      await loadChatMessages(true);
      setChatStatus(`已永久删除 ${Math.max(0, Number(payload.deletedCount) || 0)} 条消息`);
    } catch (error) {
      setChatStatus(error.message || "删除失败，请稍后重试", true);
      updateChatAdminTools();
    }
  }

  function renderChatMessages(messages, forceBottom = false) {
    if (!chatList) return;
    const list = Array.isArray(messages) ? messages : [];
    const fingerprint = JSON.stringify([
      chatAdminSelectionMode,
      [...chatAdminSelectedIds].sort(),
      list.map((message) => [message.id, message.text, message.imageUrl, message.recalled, message.canRecall, message.name, message.avatar, message.battleInvite, message.isAdmin, message.adminDeletable]),
    ]);
    if (fingerprint === chatRenderFingerprint) {
      chatMessagesSnapshot = list;
      if (forceBottom) settleChatScroll(true);
      return;
    }
    const previousLastId = chatMessagesSnapshot[chatMessagesSnapshot.length - 1]?.id || "";
    const nextLastId = list[list.length - 1]?.id || "";
    const wasNearBottom = chatList.scrollHeight - chatList.scrollTop - chatList.clientHeight < 65;
    const shouldStick = forceBottom || chatForceScrollToBottom || chatMessagesSnapshot.length === 0 || wasNearBottom;
    chatMessagesSnapshot = list;
    chatRenderFingerprint = fingerprint;
    chatList.innerHTML = list.length ? list.map((message, index) => {
      const mine = message.mine === true;
      const recalled = message.recalled === true;
      const avatar = avatarDefinition(message.avatar);
      const rawText = String(message.text || "");
      const text = recalled ? "消息已撤回" : formatChatMessageText(rawText);
      const mentionsMe = !mine && !recalled && Boolean(playerName) && rawText.toLocaleLowerCase().includes(`@${playerName.toLocaleLowerCase()}`);
      const imageUrl = !recalled && typeof message.imageUrl === "string" && message.imageUrl.startsWith("/api/chat-image?")
        ? message.imageUrl
        : "";
      const recallButton = mine && message.canRecall === true && !recalled
        ? `<button class="chat-recall" type="button" data-chat-recall="${index}">撤回</button>`
        : "";
      const adminBadge = message.isAdmin === true
        ? "<em class=\"chat-admin-badge\">管理员</em>"
        : "";
      const adminSelectionButton = chatAdminSelectionMode && message.adminDeletable === true
        ? `<button class="chat-admin-check${chatAdminSelectedIds.has(message.id) ? " is-selected" : ""}" type="button" data-chat-admin-select="${index}" aria-pressed="${chatAdminSelectedIds.has(message.id)}" aria-label="${chatAdminSelectedIds.has(message.id) ? "取消选择" : "选择"}这条消息">✓</button>`
        : "";
      const imageMarkup = imageUrl
        ? `<button class="chat-image-open" type="button" data-chat-image="${index}" aria-label="查看 ${escapeHtml(message.name || "玩家")} 发送的图片"><img class="chat-message-image" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(message.name || "玩家")} 发送的图片" loading="lazy" /></button>`
        : "";
      const battleInvite = !mine && !recalled && message.battleInvite && String(message.battleInvite.rivalId || "").startsWith("rival-")
        ? `<button class="chat-battle-accept" type="button" data-chat-battle-invite="${index}"><i aria-hidden="true">⚔</i><span><strong>接受对战</strong><small>${escapeHtml(({
          easy: "轻松",
          normal: "标准",
          hard: "困难",
          extreme: "疯狂",
        })[String(message.battleInvite.difficulty)] || "标准")}难度 · 点击进入准备页</small></span><b>›</b></button>`
        : "";
      const bubbleContents = `${text ? `<span>${text}</span>` : ""}${imageMarkup}${battleInvite}`;
      const mentionBadge = mentionsMe ? "<em class=\"chat-mentioned-me\">提到你</em>" : "";
      return `<article class="chat-message${mine ? " is-mine" : ""}${mentionsMe ? " is-mention" : ""}${chatAdminSelectedIds.has(message.id) ? " is-admin-selected" : ""}" data-chat-message="${index}">${adminSelectionButton}<button class="chat-message-avatar" type="button" data-chat-avatar="${index}" aria-label="查看 ${escapeHtml(message.name || "玩家")} 的资料；长按可以单独@他" title="点击看资料，长按@玩家">${avatar.icon}</button><div class="chat-message-body"><div class="chat-message-meta"><b>${escapeHtml(message.name || "玩家")}</b>${adminBadge}<span>${chatTimeLabel(message.createdAt)}</span>${mentionBadge}${recallButton}</div><div class="chat-bubble${recalled ? " is-recalled" : ""}">${bubbleContents}</div></div></article>`;
    }).join("") : "<div class=\"chat-empty\">还没有消息，来打个招呼吧！</div>";

    for (const article of chatList.querySelectorAll("[data-chat-message]")) {
      let startX = 0;
      let startY = 0;
      let pressTimer = 0;
      const message = chatMessagesSnapshot[Number(article.dataset.chatMessage)];
      const ignoreHoldTarget = (target) => target instanceof Element && Boolean(target.closest(
        "[data-chat-avatar], [data-chat-recall], [data-chat-image], [data-chat-battle-invite]",
      ));
      const clearPress = () => {
        if (pressTimer) window.clearTimeout(pressTimer);
        pressTimer = 0;
        article.classList.remove("is-message-pressing");
      };
      const triggerLongPress = () => {
        clearPress();
        if (chatViewerIsAdmin && message?.adminDeletable === true) {
          toggleChatAdminMessage(message, true);
          setChatStatus(`已选中消息，可继续点击其他消息多选`);
          if (window.navigator?.vibrate) window.navigator.vibrate(30);
          return;
        }
        if (!chatViewerIsAdmin && message?.mine && message?.canRecall) {
          if (window.navigator?.vibrate) window.navigator.vibrate(24);
          void recallChatMessage(message);
        }
      };
      article.addEventListener("pointerdown", (event) => {
        if (event.button !== undefined && event.button !== 0) return;
        if (ignoreHoldTarget(event.target)) return;
        const canHold = chatViewerIsAdmin
          ? message?.adminDeletable === true
          : Boolean(message?.mine && message?.canRecall);
        if (!canHold) return;
        clearPress();
        startX = event.clientX;
        startY = event.clientY;
        article.classList.add("is-message-pressing");
        pressTimer = window.setTimeout(triggerLongPress, 460);
      });
      article.addEventListener("pointermove", (event) => {
        if (Math.hypot(event.clientX - startX, event.clientY - startY) > 12) clearPress();
      });
      article.addEventListener("pointerup", clearPress);
      article.addEventListener("pointercancel", clearPress);
      article.addEventListener("pointerleave", clearPress);
      article.addEventListener("contextmenu", (event) => {
        if (ignoreHoldTarget(event.target)) return;
        const canHold = chatViewerIsAdmin
          ? message?.adminDeletable === true
          : Boolean(message?.mine && message?.canRecall);
        if (!canHold) return;
        event.preventDefault();
        triggerLongPress();
      });
      article.addEventListener("click", (event) => {
        if (!chatViewerIsAdmin || !chatAdminSelectionMode || message?.adminDeletable !== true) return;
        event.preventDefault();
        event.stopPropagation();
        toggleChatAdminMessage(message);
      }, { capture: true });
    }
    for (const button of chatList.querySelectorAll("[data-chat-recall]")) {
      button.addEventListener("click", () => recallChatMessage(chatMessagesSnapshot[Number(button.dataset.chatRecall)]));
    }
    for (const button of chatList.querySelectorAll("[data-chat-image]")) {
      button.addEventListener("click", () => {
        const message = chatMessagesSnapshot[Number(button.dataset.chatImage)];
        if (message?.imageUrl) window.open(message.imageUrl, "_blank", "noopener,noreferrer");
      });
    }
    for (const button of chatList.querySelectorAll("[data-chat-battle-invite]")) {
      button.addEventListener("click", () => {
        const message = chatMessagesSnapshot[Number(button.dataset.chatBattleInvite)];
        const invite = message?.battleInvite;
        if (!invite?.rivalId) return;
        invitePlayerToBattle({
          inviteId: invite.rivalId,
          name: invite.rivalName || message.name,
          avatar: message.avatar,
          selectedCharacter: message.profile?.selectedCharacter || "cloud",
        }, invite.difficulty);
      });
    }
    for (const button of chatList.querySelectorAll("[data-chat-avatar]")) {
      let startX = 0;
      let startY = 0;
      let longPressed = false;
      let pressTimer = 0;
      const clearPress = () => {
        if (pressTimer) window.clearTimeout(pressTimer);
        pressTimer = 0;
        button.classList.remove("is-pressing");
      };
      button.addEventListener("pointerdown", (event) => {
        if (event.button !== undefined && event.button !== 0) return;
        clearPress();
        longPressed = false;
        startX = event.clientX;
        startY = event.clientY;
        button.classList.add("is-pressing");
        pressTimer = window.setTimeout(() => {
          longPressed = true;
          button.dataset.longPressed = "true";
          const message = chatMessagesSnapshot[Number(button.dataset.chatAvatar)];
          insertChatMention(message?.name);
          button.classList.remove("is-pressing");
          if (window.navigator?.vibrate) window.navigator.vibrate(28);
        }, 430);
      });
      button.addEventListener("pointermove", (event) => {
        if (Math.hypot(event.clientX - startX, event.clientY - startY) > 12) clearPress();
      });
      button.addEventListener("pointerup", clearPress);
      button.addEventListener("pointercancel", clearPress);
      button.addEventListener("pointerleave", clearPress);
      button.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        clearPress();
        longPressed = true;
        button.dataset.longPressed = "true";
        const message = chatMessagesSnapshot[Number(button.dataset.chatAvatar)];
        insertChatMention(message?.name);
      });
      button.addEventListener("click", (event) => {
        if (longPressed || button.dataset.longPressed === "true") {
          event.preventDefault();
          button.dataset.longPressed = "false";
          return;
        }
        openChatPlayerProfile(chatMessagesSnapshot[Number(button.dataset.chatAvatar)]);
      });
    }
    for (const image of chatList.querySelectorAll(".chat-message-image")) {
      image.addEventListener("load", () => {
        if (shouldStick) settleChatScroll(true);
      }, { once: true });
    }
    if (shouldStick || (previousLastId !== nextLastId && wasNearBottom)) {
      chatForceScrollToBottom = true;
      settleChatScroll(true);
    }
  }

  async function loadChatMessages(silent = false) {
    if (chatLoading || !accountAuthenticated) return false;
    chatLoading = true;
    if (!silent) setChatStatus("正在连接全站聊天室…");
    try {
      const payload = await chatRequest("list");
      applyChatAdminAccess(payload.viewerIsAdmin);
      adoptCloudChatReadMarker(payload.chatLastReadAt);
      const messages = Array.isArray(payload.messages) ? payload.messages : [];
      renderChatMessages(messages);
      if (selectedHomeTab === "chat" && gameState === "home") markChatMessagesRead(messages, payload.serverTime);
      else updateChatUnreadFromMessages(messages, payload.serverTime);
      const count = messages.length;
      chatPollFailureCount = 0;
      setChatStatus(`已连接 · ${count} 条消息 · 自动更新`);
      return true;
    } catch (error) {
      chatPollFailureCount = Math.min(6, chatPollFailureCount + 1);
      setChatStatus(error.message || "聊天室暂时无法连接", true);
      if (error.code === "account_unauthorized") {
        accountToken = "";
        writeSetting("cloud-jumper-account-token", "");
        showAccountGate("login", "登录已过期，请重新登录后使用聊天室");
      }
      return false;
    } finally {
      chatLoading = false;
    }
  }

  async function openChat() {
    stopChatPolling();
    if (!accountAuthenticated) {
      setChatStatus("请先注册或登录账号", true);
      return;
    }
    await loadChatMessages(false);
    scheduleChatPolling();
  }

  function clearChatImage() {
    chatDraftImage = "";
    if (chatImageInput) chatImageInput.value = "";
    if (chatImagePreviewImage) chatImagePreviewImage.removeAttribute("src");
    chatImagePreview?.classList.add("is-hidden");
  }

  function imageFromObjectUrl(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("无法读取这个图片"));
      image.src = url;
    });
  }

  async function compressChatImage(file) {
    if (!file || !/^image\/(jpeg|png|webp)$/i.test(String(file.type))) throw new Error("请选择 JPG、PNG 或 WebP 图片");
    if (Number(file.size) > 12 * 1024 * 1024) throw new Error("图片不能超过 12MB");
    const objectUrl = URL.createObjectURL(file);
    try {
      const image = await imageFromObjectUrl(objectUrl);
      const sourceWidth = Math.max(1, Number(image.naturalWidth || image.width) || 1);
      const sourceHeight = Math.max(1, Number(image.naturalHeight || image.height) || 1);
      let maximum = 720;
      let quality = 0.78;
      let result = "";
      for (let attempt = 0; attempt < 7; attempt += 1) {
        const ratio = Math.min(1, maximum / Math.max(sourceWidth, sourceHeight));
        const width = Math.max(1, Math.round(sourceWidth * ratio));
        const height = Math.max(1, Math.round(sourceHeight * ratio));
        const imageCanvas = document.createElement("canvas");
        imageCanvas.width = width;
        imageCanvas.height = height;
        const imageContext = imageCanvas.getContext("2d", { alpha: false });
        if (!imageContext) throw new Error("当前浏览器无法处理图片");
        imageContext.fillStyle = "#ffffff";
        imageContext.fillRect(0, 0, width, height);
        imageContext.drawImage(image, 0, 0, width, height);
        result = imageCanvas.toDataURL("image/webp", quality);
        if (!/^data:image\/(webp|jpeg|png);base64,/i.test(result)) result = imageCanvas.toDataURL("image/jpeg", quality);
        if (result.length <= 240000) return result;
        maximum = Math.max(260, Math.round(maximum * 0.8));
        quality = Math.max(0.42, quality - 0.08);
      }
      if (result.length <= 240000) return result;
      throw new Error("图片压缩后仍然太大，请换一张图片");
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  }

  async function sendChatMessage() {
    const text = String(chatTextInput?.value || "").trim().slice(0, 240);
    if (!text && !chatDraftImage) return setChatStatus("请输入文字或选择图片", true);
    if (chatSendButton) chatSendButton.disabled = true;
    setChatStatus("正在发送…");
    try {
      const payload = await chatRequest("send", { text, imageData: chatDraftImage });
      if (chatTextInput) chatTextInput.value = "";
      clearChatImage();
      if (payload?.message) {
        const immediate = chatMessagesSnapshot.filter((message) => message.id !== payload.message.id);
        immediate.push(payload.message);
        chatForceScrollToBottom = true;
        renderChatMessages(immediate, true);
      }
      await loadChatMessages(true);
      setChatStatus("发送成功 · 5 分钟内可以撤回");
    } catch (error) {
      setChatStatus(error.message || "发送失败，请稍后再试", true);
    } finally {
      if (chatSendButton) chatSendButton.disabled = false;
      scheduleChatPolling();
    }
  }

  async function recallChatMessage(message) {
    if (!message?.id || !message.mine || !message.canRecall) return;
    if (!window.confirm("确定撤回这条消息吗？")) return;
    setChatStatus("正在撤回…");
    try {
      await chatRequest("recall", { messageId: message.id });
      await loadChatMessages(true);
      setChatStatus("消息已撤回");
    } catch (error) {
      setChatStatus(error.message || "撤回失败", true);
    }
  }

  async function submitLeaderboard(scoreValue, options = {}) {
    if (!playerName) return;
    const entry = {
      name: playerName,
      playerId,
      level: Math.max(1, Number(options.level) || currentLevel),
      score: Math.max(0, Math.min(100, Math.round(scoreValue))),
      time: options.time === undefined ? Math.max(0, Number(elapsed.toFixed(2))) : Math.max(0, Number(options.time) || 0),
      coins: walletCoins,
      showCoins: accountShowCoins,
      avatar: accountAvatar,
      selectedCharacter,
      unlockedCharacters: [...unlockedCharacters],
      selectedSkin,
      updatedAt: Date.now(),
    };
    const isRegistration = options.registration === true;
    renderLeaderboard(recordLocalScore(entry), isRegistration ? "玩家已登记，正在加入共享榜…" : "成绩已保存，正在同步共享榜…");
    if (typeof window.fetch !== "function") return;
    try {
      const response = await apiFetch("./api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      }, 12000);
      if (!response.ok) throw new Error("offline");
      const data = await response.json();
      if (await handleServerCommands(data)) return;
      const entries = data.shared === false ? loadLocalLeaderboard() : (Array.isArray(data.entries) ? data.entries : loadLocalLeaderboard());
      renderLeaderboard(entries, data.shared === false ? "玩家资料已保存到本机" : (isRegistration ? "已加入全站玩家排名" : "成绩已同步，所有人都能看到"));
      leaderboardHasRemoteSnapshot = data.shared !== false;
      if (leaderboardHasRemoteSnapshot) leaderboardLastLoadedAt = Date.now();
      applyLeaderboardMeta(data);
    } catch {
      renderLeaderboard(loadLocalLeaderboard(), "成绩已保存到本机；共享榜暂未连接");
    }
  }

  function registerCurrentPlayer() {
    if (!accountAuthenticated || !playerName || !playerId) return;
    const identity = `${playerId}:${playerName.toLocaleLowerCase()}`;
    if (lastRegisteredIdentity === identity) return;
    lastRegisteredIdentity = identity;
    submitLeaderboard(0, { level: 1, time: 0, registration: true });
  }

  function loadUnlockedCharacters() {
    try {
      const stored = JSON.parse(String(readSetting("cloud-jumper-unlocked", "[\"cloud\"]")));
      const validIds = new Set(CHARACTER_DEFS.map((character) => character.id));
      const result = new Set(Array.isArray(stored)
        ? stored.filter((id) => validIds.has(id) || /^custom-[a-z0-9][a-z0-9-]{2,48}$/i.test(String(id)))
        : []);
      result.add("cloud");
      return result;
    } catch {
      return new Set(["cloud"]);
    }
  }

  function loadLevelProgress() {
    try {
      const stored = JSON.parse(String(readSetting("cloud-jumper-level-progress", "{}")));
      const highest = Math.max(1, Math.min(MAX_LEVELS, Number(stored.highestUnlocked) || 1));
      const completed = new Set(Array.isArray(stored.completed)
        ? stored.completed.map(Number).filter((level) => level >= 1 && level <= MAX_LEVELS)
        : []);
      const bestScores = stored.best && typeof stored.best === "object" ? stored.best : {};
      return { highestUnlocked: highest, completed, best: bestScores };
    } catch {
      return { highestUnlocked: 1, completed: new Set(), best: {} };
    }
  }

  function loadLevelAttempts() {
    try {
      const stored = JSON.parse(String(readSetting("cloud-jumper-level-attempts", "{}")));
      if (!stored || typeof stored !== "object") return {};
      return Object.fromEntries(Object.entries(stored)
        .map(([level, attempts]) => [String(Math.max(1, Math.min(MAX_LEVELS, Number(level) || 1))), Math.max(0, Number(attempts) || 0)]));
    } catch {
      return {};
    }
  }

  function saveLevelAttempts() {
    writeSetting("cloud-jumper-level-attempts", JSON.stringify(levelAttempts));
    scheduleAccountSync();
  }

  function recordCurrentAttempt() {
    if (currentAttemptRecorded) return;
    currentAttemptRecorded = true;
    levelAttempts[currentLevel] = Math.max(Number(levelAttempts[currentLevel]) || 0, runAttemptNumber);
    saveLevelAttempts();
  }

  function saveLevelProgress() {
    writeSetting("cloud-jumper-level-progress", JSON.stringify({
      highestUnlocked,
      completed: [...completedLevelSet].sort((a, b) => a - b),
      best: levelBest,
    }));
    if (homeUnlockedLevel) homeUnlockedLevel.textContent = String(highestUnlocked);
    scheduleAccountSync();
  }

  function saveCharacterState() {
    writeSetting("cloud-jumper-wallet", walletCoins);
    persistCoinLedger();
    writeSetting("cloud-jumper-unlocked", JSON.stringify([...unlockedCharacters]));
    writeSetting("cloud-jumper-selected", selectedCharacter);
    scheduleAccountSync();
  }

  function updateWalletUi() {
    if (walletBalance) walletBalance.textContent = String(walletCoins);
    if (walletMini) walletMini.textContent = String(walletCoins);
    if (homeWallet) homeWallet.textContent = String(walletCoins);
    if (levelWallet) levelWallet.textContent = String(walletCoins);
    if (homeUnlockedLevel) homeUnlockedLevel.textContent = String(highestUnlocked);
    if (homeHeartCount) homeHeartCount.textContent = String(maxHearts);
    canvas.dataset.walletCoins = String(walletCoins);
    canvas.dataset.selectedCharacter = selectedCharacter;
    if (coinHistoryBalance) coinHistoryBalance.textContent = `●${walletCoins}`;
    updateAccountUpgradeUi();
  }

  function boundedReviveNumber(value, fallback, minimum, maximum) {
    const parsed = Number(value);
    return Math.max(minimum, Math.min(maximum, Number.isFinite(parsed) ? Math.round(parsed) : fallback));
  }

  function cleanReviveSettings(value) {
    const source = value && typeof value === "object" ? value : {};
    const base = { ...DEFAULT_REVIVE_SETTINGS, ...reviveSettings };
    const maxInventory = boundedReviveNumber(source.maxInventory, base.maxInventory, 1, 20);
    const lowMaxLevel = boundedReviveNumber(source.lowMaxLevel, base.lowMaxLevel, 1, 19);
    const midMaxLevel = boundedReviveNumber(source.midMaxLevel, base.midMaxLevel, lowMaxLevel + 1, 20);
    return {
      ...base,
      enabled: source.enabled === undefined ? base.enabled !== false : source.enabled === true,
      maxInventory,
      dailyUseLimit: boundedReviveNumber(source.dailyUseLimit, base.dailyUseLimit, 1, 20),
      singlePrice: boundedReviveNumber(source.singlePrice, base.singlePrice, 0, 999999),
      bundleEnabled: source.bundleEnabled === undefined ? base.bundleEnabled !== false : source.bundleEnabled === true,
      bundleQuantity: boundedReviveNumber(source.bundleQuantity, base.bundleQuantity, 1, maxInventory),
      bundlePrice: boundedReviveNumber(source.bundlePrice, base.bundlePrice, 0, 999999),
      bundleEndsAt: Math.max(0, Number(source.bundleEndsAt ?? base.bundleEndsAt) || 0),
      bundleActive: source.bundleActive === undefined ? base.bundleActive !== false : source.bundleActive === true,
      dailyQuizEnabled: source.dailyQuizEnabled === undefined ? base.dailyQuizEnabled !== false : source.dailyQuizEnabled === true,
      dailyQuizReward: boundedReviveNumber(source.dailyQuizReward, base.dailyQuizReward, 1, maxInventory),
      lowMaxLevel,
      midMaxLevel,
      emergencyLowPrice: boundedReviveNumber(source.emergencyLowPrice, base.emergencyLowPrice, 0, 999999),
      emergencyMidPrice: boundedReviveNumber(source.emergencyMidPrice, base.emergencyMidPrice, 0, 999999),
      emergencyHighPrice: boundedReviveNumber(source.emergencyHighPrice, base.emergencyHighPrice, 0, 999999),
      reviveHealthPercent: boundedReviveNumber(source.reviveHealthPercent, base.reviveHealthPercent, 25, 100),
      questionDays: boundedReviveNumber(source.questionDays, base.questionDays, 1, 365),
      sourceSite: String(source.sourceSite || base.sourceSite || "JW.ORG").slice(0, 24),
    };
  }

  function applyReviveStatus(status) {
    if (!status || typeof status !== "object") return;
    reviveCards = Math.max(0, Math.min(20, Math.round(Number(status.cards) || 0)));
    if (/^\d{4}-\d{2}-\d{2}$/.test(String(status.today || ""))) {
      reviveUsedDate = String(status.today);
      reviveUsedToday = Math.max(0, Math.min(20, Math.round(Number(status.usedToday) || 0)));
      if (status.quizClaimedToday === true) reviveQuizClaimedDate = String(status.today);
      else if (reviveQuizClaimedDate === String(status.today)) reviveQuizClaimedDate = "";
    }
    writeSetting("cloud-jumper-revive-cards", reviveCards);
    writeSetting("cloud-jumper-revive-used-date", reviveUsedDate);
    writeSetting("cloud-jumper-revive-used-today", reviveUsedToday);
    writeSetting("cloud-jumper-revive-quiz-claimed-date", reviveQuizClaimedDate);
  }

  function applyRevivePayload(payload) {
    if (!payload || typeof payload !== "object") return;
    if (payload.settings) reviveSettings = cleanReviveSettings(payload.settings);
    if (payload.revive) applyReviveStatus(payload.revive);
    if (payload.quiz) reviveQuizData = payload.quiz;
    renderReviveUi();
  }

  function applyReviveStore(store) {
    if (!store || typeof store !== "object") return;
    reviveSettings = cleanReviveSettings(store);
    applyReviveStatus(store);
    renderReviveUi();
  }

  function emergencyRevivePriceForLevel(level = currentLevel) {
    const safeLevel = Math.max(1, Math.min(MAX_LEVELS, Math.round(Number(level) || 1)));
    if (safeLevel <= reviveSettings.lowMaxLevel) return reviveSettings.emergencyLowPrice;
    if (safeLevel <= reviveSettings.midMaxLevel) return reviveSettings.emergencyMidPrice;
    return reviveSettings.emergencyHighPrice;
  }

  function formatReviveOfferTime(milliseconds) {
    const totalSeconds = Math.max(0, Math.ceil(Number(milliseconds) / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    if (days > 0) return `${days}天 ${hours}小时`;
    if (hours > 0) return `${hours}小时 ${minutes}分`;
    return `${Math.max(0, minutes)}分`;
  }

  function reviveBundleIsActive(now = Date.now()) {
    return Boolean(
      reviveSettings.enabled &&
      reviveSettings.bundleEnabled &&
      reviveSettings.bundleActive &&
      (!reviveSettings.bundleEndsAt || now <= reviveSettings.bundleEndsAt)
    );
  }

  function renderReviveUi(message = "") {
    const today = singaporeDateKey();
    const usedToday = reviveUsedDate === today ? reviveUsedToday : 0;
    const remainingUses = Math.max(0, reviveSettings.dailyUseLimit - usedToday);
    const claimedToday = reviveQuizClaimedDate === today || (reviveQuizData?.date === today && reviveQuizData?.claimedToday === true);
    const inventoryFull = reviveCards >= reviveSettings.maxInventory;
    const bundleActive = reviveBundleIsActive();
    const bundleFits = reviveCards + reviveSettings.bundleQuantity <= reviveSettings.maxInventory;
    const emergencyPrice = emergencyRevivePriceForLevel(currentLevel);

    if (homeReviveCount) homeReviveCount.textContent = String(reviveCards);
    if (homeReviveLimit) homeReviveLimit.textContent = String(reviveSettings.maxInventory);
    if (homeReviveAction) {
      homeReviveAction.textContent = inventoryFull
        ? "已装满"
        : claimedToday
          ? "去商店 ›"
          : "免费获取 ›";
    }
    homeReviveShortcut?.classList.toggle("is-full", inventoryFull);
    homeReviveShortcut?.toggleAttribute("disabled", reviveSettings.enabled === false);

    if (dailyReviveTitle) {
      dailyReviveTitle.textContent = reviveQuizData?.date === today && reviveQuizData?.title
        ? `今日：${reviveQuizData.title}`
        : "圣经三题挑战";
    }
    if (dailyReviveSummary) {
      dailyReviveSummary.textContent = claimedToday
        ? `今天已领取 ${reviveSettings.dailyQuizReward} 张复活卡`
        : `答对 3 题，领取 ${reviveSettings.dailyQuizReward} 张复活卡`;
    }
    if (dailyReviveButton) {
      dailyReviveButton.disabled = (
        reviveQuizBusy ||
        !accountAuthenticated ||
        !reviveSettings.enabled ||
        !reviveSettings.dailyQuizEnabled ||
        claimedToday ||
        inventoryFull
      );
      dailyReviveButton.textContent = reviveQuizBusy
        ? "读取中…"
        : claimedToday
          ? "今日已领取"
          : inventoryFull
            ? "复活卡已满"
            : "开始答题";
    }
    dailyReviveCard?.classList.toggle("is-claimed", claimedToday);
    if (dailyReviveStatus) {
      dailyReviveStatus.textContent = message || (
        !reviveSettings.enabled || !reviveSettings.dailyQuizEnabled
          ? "每日任务目前暂停开放"
          : claimedToday
            ? `明天会更换题目 · 当前 ${reviveCards}/${reviveSettings.maxInventory} 张`
            : `${reviveSettings.questionDays} 天题库循环 · 资料全部来自 JW.ORG`
      );
    }

    if (reviveStoreStatus) {
      reviveStoreStatus.textContent = `当前 ${reviveCards} / ${reviveSettings.maxInventory} 张 · 今天还能使用 ${remainingUses} 次`;
    }
    if (reviveSingleButton) {
      reviveSingleButton.disabled = reviveStoreBusy || !accountAuthenticated || !reviveSettings.enabled || inventoryFull;
      reviveSingleButton.textContent = `● ${reviveSettings.singlePrice} · 购买 1 张`;
    }
    if (reviveBundleButton) {
      reviveBundleButton.disabled = reviveStoreBusy || !accountAuthenticated || !bundleActive || !bundleFits;
      reviveBundleButton.innerHTML = `<b>${bundleActive ? "限时" : "结束"}</b> ● ${reviveSettings.bundlePrice} · 购买 ${reviveSettings.bundleQuantity} 张`;
      reviveBundleButton.classList.toggle("is-ended", !bundleActive);
    }
    if (reviveBundleCountdown) {
      const remaining = reviveSettings.bundleEndsAt ? Math.max(0, reviveSettings.bundleEndsAt - Date.now()) : 0;
      reviveBundleCountdown.textContent = !reviveSettings.enabled
        ? "复活卡商店目前暂停开放"
        : bundleActive
          ? `三张优惠剩余 ${formatReviveOfferTime(remaining)}`
          : "三张组合优惠已经结束，仍可单张购买";
    }

    if (revivePromptCount) revivePromptCount.textContent = String(reviveCards);
    if (revivePromptRemaining) revivePromptRemaining.textContent = String(remainingUses);
    if (reviveUseButton) {
      reviveUseButton.disabled = revivePromptBusy || reviveCards < 1 || remainingUses < 1 || !reviveSettings.enabled;
      reviveUseButton.textContent = reviveCards > 0 ? "使用 1 张复活卡" : "当前没有复活卡";
    }
    if (reviveEmergencyButton) {
      reviveEmergencyButton.disabled = revivePromptBusy || remainingUses < 1 || !reviveSettings.enabled;
      reviveEmergencyButton.textContent = `立即购买并复活 · ●${emergencyPrice}`;
    }
    if (reviveAbandonButton) reviveAbandonButton.disabled = revivePromptBusy;

    window.clearInterval(reviveBundleTimer);
    reviveBundleTimer = 0;
    if (bundleActive && reviveSettings.bundleEndsAt) {
      reviveBundleTimer = window.setInterval(() => {
        if (!reviveBundleIsActive()) {
          reviveSettings.bundleActive = false;
          window.clearInterval(reviveBundleTimer);
          reviveBundleTimer = 0;
        }
        renderReviveUi();
      }, 60000);
    }
  }

  function newReviveTransactionId(prefix = "revive") {
    const randomPart = window.crypto?.randomUUID?.().replace(/-/g, "") || Math.random().toString(36).slice(2);
    return `${prefix}-${Date.now().toString(36)}-${randomPart}`.replace(/[^a-z0-9-]/gi, "").slice(0, 80);
  }

  async function purchaseReviveOffer(offer) {
    if (reviveStoreBusy) return;
    if (!accountAuthenticated || !accountToken) return showAccountGate("login", "请先登录账号再购买复活卡");
    const selectedOffer = offer === "bundle" ? "bundle" : "single";
    reviveStoreBusy = true;
    renderReviveUi("正在向云端确认购买…");
    try {
      const payload = await accountRequest("purchaseReviveCards", {
        offer: selectedOffer,
        transactionId: newReviveTransactionId(`store-${selectedOffer}`),
      }, true);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      applyRevivePayload(payload);
      const purchase = payload?.revivePurchase || {};
      renderReviveUi(`购买成功：获得 ${Math.max(1, Number(purchase.quantity) || 1)} 张复活卡。`);
      enqueueNotice({
        id: `revive-purchase-${Date.now()}`,
        kind: "reward",
        icon: "✚",
        kicker: "复活卡已到账",
        title: `获得 ${Math.max(1, Number(purchase.quantity) || 1)} 张复活卡`,
        message: `当前共有 ${reviveCards}/${reviveSettings.maxInventory} 张，生命耗尽时可以直接继续本局。`,
        detail: `每天最多使用 ${reviveSettings.dailyUseLimit} 次复活机会。`,
        closeLabel: "知道了",
      });
      playTone(620, 0.08, "square", 0.035, 0);
      playTone(880, 0.13, "triangle", 0.03, 0.08);
      loadLeaderboard(true);
    } catch (error) {
      applyRevivePayload(error.payload);
      renderReviveUi(error.message || "购买暂时失败，请稍后重试。");
      playTone(170, 0.08, "square", 0.02, 0);
    } finally {
      reviveStoreBusy = false;
      renderReviveUi(dailyReviveStatus?.textContent || "");
    }
  }

  function renderReviveQuiz() {
    const quiz = reviveQuizData;
    if (!quiz || !reviveQuestionList) return;
    if (reviveQuizKicker) reviveQuizKicker.textContent = `每日复活卡任务 · 第 ${quiz.cycleDay || 1}/${quiz.cycleLength || reviveSettings.questionDays} 天`;
    if (reviveQuizTitle) reviveQuizTitle.textContent = quiz.title || "圣经三题挑战";
    if (reviveQuizIntro) {
      reviveQuizIntro.textContent = `${quiz.sourceTitle || "JW.ORG 官方资料"}。第一题适合三年级，第二、三题按六年级理解程度设计。`;
    }
    const questions = Array.isArray(quiz.questions) ? quiz.questions : [];
    reviveQuestionList.innerHTML = questions.map((question, questionIndex) => {
      const options = Array.isArray(question.options) ? question.options : [];
      return `<fieldset class="revive-question" data-revive-question="${questionIndex}">
        <legend><span>${questionIndex + 1}</span>${escapeHtml(question.question || "")}<small>${escapeHtml(question.difficulty || "")}</small></legend>
        <div class="revive-option-grid">${options.map((option, optionIndex) => `<label>
          <input type="radio" name="revive-answer-${questionIndex}" value="${optionIndex}">
          <span>${String.fromCharCode(65 + optionIndex)}. ${escapeHtml(option)}</span>
        </label>`).join("")}</div>
      </fieldset>`;
    }).join("");
    if (reviveQuizSource) {
      const sourceUrl = String(quiz.sourceUrl || "");
      reviveQuizSource.href = /^https:\/\/www\.jw\.org\//i.test(sourceUrl) ? sourceUrl : "https://www.jw.org/cmn-hans/";
      reviveQuizSource.textContent = `在 JW.ORG 查看第 ${quiz.lesson || quiz.cycleDay || 1} 课官方资料 ↗`;
    }
    if (reviveQuizSubmitButton) {
      reviveQuizSubmitButton.disabled = reviveQuizBusy || quiz.claimedToday === true;
      reviveQuizSubmitButton.textContent = quiz.claimedToday === true ? "今天已经领取" : "提交 3 个答案";
    }
    if (reviveQuizStatus) {
      reviveQuizStatus.classList.remove("is-error", "is-success");
      reviveQuizStatus.textContent = quiz.claimedToday === true
        ? "今天的复活卡已经领取，明天会出现新题目。"
        : `全部答对即可获得 ${quiz.rewardCards || reviveSettings.dailyQuizReward} 张复活卡，答错可以重试。`;
    }
  }

  async function openDailyReviveQuiz() {
    if (reviveQuizBusy) return;
    if (!accountAuthenticated || !accountToken) return showAccountGate("login", "请先登录账号再参加每日答题");
    reviveQuizBusy = true;
    renderReviveUi("正在读取今天的 JW.ORG 题目…");
    try {
      const payload = await accountRequest("reviveQuiz", {}, true);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      applyRevivePayload(payload);
      renderReviveQuiz();
      reviveQuizDialog?.classList.remove("is-hidden");
      window.setTimeout(() => reviveQuizCloseButton?.focus(), 30);
    } catch (error) {
      applyRevivePayload(error.payload);
      renderReviveUi(error.message || "题目暂时无法读取，请稍后重试。");
    } finally {
      reviveQuizBusy = false;
      renderReviveUi(dailyReviveStatus?.textContent || "");
      if (!reviveQuizDialog?.classList.contains("is-hidden")) renderReviveQuiz();
    }
  }

  function closeReviveQuiz() {
    if (reviveQuizBusy) return;
    reviveQuizDialog?.classList.add("is-hidden");
  }

  async function submitDailyReviveQuiz() {
    if (reviveQuizBusy || !reviveQuizData) return;
    const questions = Array.isArray(reviveQuizData.questions) ? reviveQuizData.questions : [];
    const answers = questions.map((question, index) => {
      const checked = reviveQuestionList?.querySelector(`input[name="revive-answer-${index}"]:checked`);
      return checked ? Number(checked.value) : -1;
    });
    for (const [index, answer] of answers.entries()) {
      reviveQuestionList?.querySelector(`[data-revive-question="${index}"]`)?.classList.toggle("is-wrong", answer < 0);
    }
    if (answers.some((answer) => answer < 0)) {
      if (reviveQuizStatus) {
        reviveQuizStatus.textContent = "请先回答全部 3 道题。";
        reviveQuizStatus.classList.add("is-error");
      }
      return;
    }
    reviveQuizBusy = true;
    if (reviveQuizSubmitButton) {
      reviveQuizSubmitButton.disabled = true;
      reviveQuizSubmitButton.textContent = "核对答案中…";
    }
    try {
      const payload = await accountRequest("submitReviveQuiz", {
        quizDate: reviveQuizData.date,
        answers,
      }, true);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      applyRevivePayload(payload);
      const result = payload?.quizResult;
      if (payload?.alreadyClaimed || result?.passed) {
        if (reviveQuizStatus) {
          reviveQuizStatus.textContent = payload?.alreadyClaimed
            ? "今天已经领取过复活卡，明天再来挑战。"
            : `全部答对！${result.rewardCards || reviveSettings.dailyQuizReward} 张复活卡已加入账号。`;
          reviveQuizStatus.classList.remove("is-error");
          reviveQuizStatus.classList.add("is-success");
        }
        if (reviveQuizSubmitButton) {
          reviveQuizSubmitButton.disabled = true;
          reviveQuizSubmitButton.textContent = "领取成功";
        }
        renderReviveUi("每日任务完成，复活卡已经到账。");
        enqueueNotice({
          id: `revive-quiz-${reviveQuizData.date}`,
          kind: "reward",
          icon: "✚",
          kicker: "每日任务完成",
          title: `获得 ${result?.rewardCards || reviveSettings.dailyQuizReward} 张复活卡！`,
          message: `3 道题全部答对，当前共有 ${reviveCards}/${reviveSettings.maxInventory} 张。`,
          detail: "每天会换一篇 JW.ORG 资料和一组新题目。",
          closeLabel: "收下奖励",
        });
        playTone(620, 0.08, "square", 0.035, 0);
        playTone(900, 0.16, "triangle", 0.03, 0.08);
      } else {
        const correct = Array.isArray(result?.correct) ? result.correct : [];
        for (const [index, isCorrect] of correct.entries()) {
          reviveQuestionList?.querySelector(`[data-revive-question="${index}"]`)?.classList.toggle("is-wrong", !isCorrect);
        }
        if (reviveQuizStatus) {
          reviveQuizStatus.textContent = `答对 ${result?.correctCount || 0}/3。红色题目需要再想想，可以查看 JW.ORG 资料后重试。`;
          reviveQuizStatus.classList.remove("is-success");
          reviveQuizStatus.classList.add("is-error");
        }
      }
    } catch (error) {
      applyRevivePayload(error.payload);
      if (reviveQuizStatus) {
        reviveQuizStatus.textContent = error.message || "提交暂时失败，请稍后重试。";
        reviveQuizStatus.classList.remove("is-success");
        reviveQuizStatus.classList.add("is-error");
      }
    } finally {
      reviveQuizBusy = false;
      if (reviveQuizSubmitButton && reviveQuizClaimedDate !== singaporeDateKey()) {
        reviveQuizSubmitButton.disabled = false;
        reviveQuizSubmitButton.textContent = "重新提交答案";
      }
    }
  }

  function singaporeDateKey(now = Date.now()) {
    return new Date(Number(now) + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  }

  function dailyRewardAt(index) {
    return DAILY_CHECKIN_REWARDS[Math.max(0, Number(index) || 0) % DAILY_CHECKIN_REWARDS.length];
  }

  function dailyRewardLabel(reward) {
    if (reward?.character) return `人物 · ${reward.characterName}`;
    return `●${Math.max(0, Number(reward?.coins) || 0)} 金币`;
  }

  function renderDailyCheckin(message = "") {
    if (!dailyCheckinCard) return;
    const claimedToday = dailyCheckinLastDate === singaporeDateKey();
    const cycleLength = DAILY_CHECKIN_REWARDS.length;
    const completedInCycle = dailyCheckinTotal % cycleLength || (claimedToday && dailyCheckinTotal > 0 ? cycleLength : 0);
    const displayDay = claimedToday ? Math.max(1, completedInCycle) : (completedInCycle % cycleLength) + 1;
    const nextReward = dailyRewardAt(dailyCheckinTotal);
    if (dailyCheckinProgress) dailyCheckinProgress.textContent = `${completedInCycle} / ${cycleLength}`;
    if (dailyCheckinSummary) {
      dailyCheckinSummary.textContent = claimedToday
        ? `今天已领取 · 明天是第 ${dailyCheckinTotal % cycleLength + 1} 天`
        : `第 ${displayDay} 天：${dailyRewardLabel(nextReward)}`;
    }
    if (dailyCheckinButton) {
      dailyCheckinButton.disabled = claimedToday || dailyCheckinBusy || !accountAuthenticated;
      dailyCheckinButton.textContent = dailyCheckinBusy ? "领取中…" : claimedToday ? "已领取" : "领取";
    }
    dailyCheckinCard.classList.toggle("is-claimed", claimedToday);
    if (dailyCheckinMessage) dailyCheckinMessage.textContent = message;
    if (dailyCheckinGrid) {
      dailyCheckinGrid.innerHTML = DAILY_CHECKIN_REWARDS.map((reward, index) => {
        const day = index + 1;
        const claimed = day <= completedInCycle;
        const current = day === displayDay;
        return `<div class="daily-reward${claimed ? " is-claimed" : ""}${current ? " is-current" : ""}"><small>第 ${day} 天</small><strong>${reward.character ? "🎭" : "●"}</strong><span>${escapeHtml(dailyRewardLabel(reward))}</span></div>`;
      }).join("");
    }
  }

  async function claimDailyCheckin() {
    if (dailyCheckinBusy) return;
    if (!accountAuthenticated || !accountToken) return showAccountGate("login", "请先登录账号再签到");
    if (dailyCheckinLastDate === singaporeDateKey()) return renderDailyCheckin("今天已经领取过了，明天再来。");
    dailyCheckinBusy = true;
    renderDailyCheckin("正在向云端领取奖励…");
    try {
      const payload = await accountRequest("dailyCheckin", {}, true);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      const reward = payload?.dailyReward;
      if (payload?.alreadyClaimed || !reward) {
        renderDailyCheckin("今天已经领取过了，换设备也不能重复领取。");
      } else if (reward.type === "character") {
        renderDailyCheckin(`签到成功！永久解锁人物：${reward.characterName}`);
        enqueueNotice({
          kind: "reward",
          icon: "🎭",
          kicker: `第 ${reward.day} 天签到奖励`,
          title: `已解锁 ${reward.characterName}！`,
          message: "这个人物已永久加入你的角色商店，可以立即选择使用。",
          detail: "每日签到由云端记录，同一天无法重复领取。",
          actionLabel: "去选择人物",
          actionTab: "shop",
          closeLabel: "知道了",
        });
      } else {
        const replacement = reward.replacedCharacter ? `（${reward.replacedCharacter}已拥有，已换成金币）` : "";
        renderDailyCheckin(`签到成功！获得 ${reward.coins} 金币${replacement}`);
        enqueueNotice({
          kind: "reward",
          icon: "●",
          kicker: `第 ${reward.day} 天签到奖励`,
          title: `获得 ${reward.coins} 金币！`,
          message: replacement || "金币已经加入账号余额，并记录在金币明细中。",
          detail: "每日签到由云端记录，同一天无法重复领取。",
          closeLabel: "收下奖励",
        });
      }
      loadLeaderboard(true);
      playTone(620, 0.08, "square", 0.035, 0);
      playTone(880, 0.14, "triangle", 0.03, 0.08);
    } catch (error) {
      renderDailyCheckin(error.message || "签到暂时失败，请稍后重试。");
    } finally {
      dailyCheckinBusy = false;
      renderDailyCheckin(dailyCheckinMessage?.textContent || "");
    }
  }

  function updateAccountUpgradeUi() {
    if (!accountUpgradeButton || !accountUpgradeStatus) return;
    const finished = heartUpgradeLevel >= 2;
    const cost = heartUpgradeLevel === 0 ? 1999 : 9999;
    const fromHearts = heartUpgradeLevel === 0 ? 3 : 5;
    const toHearts = heartUpgradeLevel === 0 ? 5 : 7;
    accountUpgradeButton.disabled = finished;
    accountUpgradeButton.textContent = finished ? "已升级到 7 滴血" : `● ${cost} · 升级到 ${toHearts} 滴`;
    if (accountUpgradeTitle) accountUpgradeTitle.textContent = finished ? "生命已升满" : `${toHearts} 滴血生命升级`;
    accountUpgradeStatus.textContent = finished
      ? "账号生命已升满：每局永久拥有 7 滴血"
      : `当前 ${fromHearts} 滴血，花费 ${cost} 金币永久升级到 ${toHearts} 滴${walletCoins < cost ? `（还差 ${cost - walletCoins} 金币）` : ""}`;
    canvas.dataset.maxHearts = String(maxHearts);
    if (homeHeartCount) homeHeartCount.textContent = String(maxHearts);
    if (homeHeartAction) homeHeartAction.textContent = finished ? "已满级" : `升到 ${toHearts} 滴 ›`;
    homeHeartShortcut?.classList.toggle("is-maxed", finished);
  }

  function purchaseAccountUpgrade() {
    if (heartUpgradeLevel >= 2) return;
    const cost = heartUpgradeLevel === 0 ? 1999 : 9999;
    const fromHearts = heartUpgradeLevel === 0 ? 3 : 5;
    const toHearts = heartUpgradeLevel === 0 ? 5 : 7;
    if (walletCoins < cost) {
      if (accountUpgradeStatus) accountUpgradeStatus.textContent = `金币不够，还差 ${cost - walletCoins} 金币。`;
      playTone(170, 0.1, "square", 0.02, 0);
      return;
    }
    walletCoins -= cost;
    recordCoinTransaction(-cost, "account_upgrade", "账号生命升级", `永久从 ${fromHearts} 滴血升级到 ${toHearts} 滴血`, {
      id: `account-upgrade-v${HEART_RESET_VERSION}-hearts-${toHearts}`,
    });
    heartUpgradeLevel += 1;
    accountUpgraded = heartUpgradeLevel >= 1;
    maxHearts = heartUpgradeLevel >= 2 ? 7 : 5;
    if (gameState !== "playing" && gameState !== "paused") hearts = maxHearts;
    writeSetting("cloud-jumper-account-upgraded", true);
    writeSetting("cloud-jumper-heart-upgrade-level", heartUpgradeLevel);
    writeSetting("cloud-jumper-heart-reset-version", HEART_RESET_VERSION);
    saveCharacterState();
    updateWalletUi();
    updateHud(true);
    announce(`账号升级成功！以后每局拥有 ${maxHearts} 滴血。`);
    playTone(520, 0.08, "square", 0.035, 0);
    playTone(780, 0.14, "triangle", 0.03, 0.08);
  }

  async function redeemGiftCode() {
    if (redeemCodeBusy) return;
    const code = String(redeemCodeInput?.value || "").trim().toLowerCase();
    redeemMessage?.classList.remove("is-success", "is-error");
    if (!accountAuthenticated) {
      if (redeemMessage) redeemMessage.textContent = "请先登录账号再兑换。";
      redeemMessage?.classList.add("is-error");
      showAccountGate(accountToken ? "login" : "register", "请先登录账号再使用兑换码");
      return;
    }
    if (!code) {
      if (redeemMessage) redeemMessage.textContent = "请输入兑换码。";
      redeemMessage?.classList.add("is-error");
      return;
    }
    redeemCodeBusy = true;
    if (redeemCodeButton) redeemCodeButton.disabled = true;
    if (redeemMessage) redeemMessage.textContent = "正在验证兑换码…";
    try {
      const payload = await accountRequest("redeemCode", { code }, true);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      const reward = payload?.redeemReward || {};
      const parts = [];
      if (Number(reward.coins) > 0) parts.push(`${Math.round(Number(reward.coins))} 金币`);
      if (reward.characterName) {
        parts.push(reward.characterAlreadyOwned
          ? `${reward.characterName}（已拥有）`
          : `人物 ${reward.characterName}`);
      }
      if (redeemMessage) redeemMessage.textContent = `兑换成功！获得${parts.length ? `：${parts.join("、")}` : "奖励"}。`;
      redeemMessage?.classList.add("is-success");
      if (redeemCodeInput) redeemCodeInput.value = "";
      playTone(620, 0.08, "square", 0.035, 0);
      playTone(920, 0.13, "triangle", 0.03, 0.08);
      loadLeaderboard();
    } catch (error) {
      if (redeemMessage) redeemMessage.textContent = error.message || "兑换失败，请稍后再试";
      redeemMessage?.classList.add("is-error");
      playTone(170, 0.08, "square", 0.02, 0);
    } finally {
      redeemCodeBusy = false;
      if (redeemCodeButton) redeemCodeButton.disabled = false;
    }
  }

  function currentCharacter() {
    return CHARACTER_DEFS.find((character) => character.id === selectedCharacter) || CHARACTER_DEFS[0];
  }

  function characterVisualTier(character = currentCharacter()) {
    const originalPrice = Math.max(
      0,
      Number(character?.cost) || 0,
      Number(character?.regularCost) || 0,
    );
    if (character?.id === "doraemon" || originalPrice >= 9000) return 4;
    if (originalPrice >= 3999) return 3;
    if (originalPrice >= 1999) return 2;
    if (originalPrice >= 999) return 1;
    return 0;
  }

  function characterVisualPalette(character = currentCharacter()) {
    if (character.id === "doraemon") return ["#55c8ff", "#ffe46d", "#ffffff"];
    if (character.id === "zhixuan") return ["#ff6957", "#ffd45f", "#fff8d8"];
    if (character.id === "krabs") return ["#ff6b5d", "#ffc85b", "#ffffff"];
    return [character.color || "#67d6ff", "#ffe275", "#ffffff"];
  }

  function levelBaseDuration(level) {
    const value = Math.max(1, Math.min(MAX_LEVELS, Number(level) || 1));
    if (value <= 10) return 30 + (value - 1) * (10 / 9);
    return MIN_LEVEL_SECONDS + Math.min(5, value * 0.5);
  }

  function caveFlashlightRadius(level = currentLevel) {
    return Number(level) >= 15 ? 230 : Number(level) >= 11 ? 252 : 282;
  }

  function singaporeDayKey(timestamp = Date.now()) {
    return new Date(Number(timestamp) + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);
  }

  function restoreGroundRange(start, end) {
    const sorted = [...groundSegments, { start, end }].sort((a, b) => a.start - b.start);
    const merged = [];
    for (const segment of sorted) {
      const last = merged[merged.length - 1];
      if (!last || segment.start > last.end + 1) merged.push({ ...segment });
      else last.end = Math.max(last.end, segment.end);
    }
    groundSegments = merged;
  }

  function activateCaveEntry() {
    caveAnnounced = true;
    caveDarknessProgress = 0;
    const safeStart = caveStartX - runSpeed * 0.55;
    const safeEnd = caveStartX + runSpeed * (currentLevel <= 10 ? 5 : 4.2);
    restoreGroundRange(safeStart, safeEnd);
    hazards = hazards.filter((hazard) => hazard.x + (hazard.w || 0) < safeStart || hazard.x > safeEnd);
    enemies = enemies.filter((enemy) => enemy.maxX < safeStart || enemy.minX > safeEnd);
    crows = crows.filter((crow) => crow.maxX < safeStart || crow.minX > safeEnd);
    for (const event of specialEvents) {
      if (!event.cave && event.state !== "done") event.state = "done";
    }
    fallingBranches = [];
    fallingBalls = [];
    fallingRocks = [];
    airplaneBombs = [];
    canvas.dataset.warningKind = "";
    canvas.dataset.warningX = "";
    checkpointX = Math.max(checkpointX, caveStartX + 34);
    if (player.y + player.h > GROUND_Y) {
      player.y = GROUND_Y - player.h;
      player.vy = Math.min(0, player.vy);
    }
    player.invulnerable = Math.max(player.invulnerable, 5.2);
    hearts = maxHearts;
    updateHud(true);

    const ability = currentCharacter();
    const today = singaporeDayKey();
    caveSunActive = Boolean(ability.sunCaveDaily && dailySunUsedDate !== today);
    if (caveSunActive) {
      dailySunUsedDate = today;
      writeSetting("cloud-jumper-daily-sun-date", dailySunUsedDate);
      scheduleAccountSync(40);
      canvas.dataset.lastSpecial = "dailyCaveSun";
      activateSkillBadge("☀", "每日太阳 · 洞穴全亮", 2.2);
      announce("进入隐藏洞穴：生命已回满！每日太阳发动，今天这次洞穴会完全照亮！");
      playTone(520, 0.1, "triangle", 0.035, 0);
      playTone(780, 0.14, "sine", 0.032, 0.09);
    } else {
      canvas.dataset.lastSpecial = "darkCave";
      announce("进入隐藏洞穴：生命已回满！洞穴会逐渐变暗，跟着明亮手电筒前进。 ");
      playTone(135, 0.22, "sawtooth", 0.035, 0);
      playTone(92, 0.35, "sine", 0.03, 0.12);
    }
    canvas.dataset.caveSunActive = String(caveSunActive);
    canvas.dataset.caveHealedAtEntry = "true";
  }

  function caveEntryProtectionActive() {
    return Boolean(
      caveEnabled &&
      caveAnnounced &&
      player.x >= caveStartX - 24 &&
      player.x <= caveStartX + runSpeed * 5.2
    );
  }

  function characterAvailableNow(character, now = Date.now()) {
    if (!character || character.active === false) return false;
    if (Number(character.availableFrom) > 0 && now < Number(character.availableFrom)) return false;
    if (Number(character.availableUntil) > 0 && now > Number(character.availableUntil)) return false;
    return true;
  }

  function characterSaleActive(character, now = Date.now()) {
    if (!character || character.salePrice === null || character.salePrice === undefined || character.salePrice === "" || !Number.isFinite(Number(character.salePrice))) return false;
    if (Number(character.saleStartAt) > 0 && now < Number(character.saleStartAt)) return false;
    if (Number(character.saleEndAt) > 0 && now > Number(character.saleEndAt)) return false;
    return Number(character.salePrice) >= 0;
  }

  function characterPrice(character) {
    if (characterSaleActive(character)) return Math.max(0, Math.round(Number(character.salePrice) || 0));
    if (character.id === "yuanyuan") return YUANYUAN_PRICE;
    if (character.id === "yunqing" && yunqingReserved) return Math.max(0, character.cost - YUNQING_RESERVATION_PRICE);
    return character.cost;
  }

  function yunqingUnlockedForSale() {
    return Date.now() >= YUNQING_UNLOCK_AT;
  }

  function applyYunqingStore(store) {
    if (!store || typeof store !== "object") return;
    yunqingReserved = store.reserved === true;
    yunqingReservationCount = Math.max(0, Math.min(3, Number(store.reservationCount) || 0));
    writeSetting("cloud-jumper-yunqing-reserved", yunqingReserved);
    writeSetting("cloud-jumper-yunqing-reservation-count", yunqingReservationCount);
    if (store.yuanyuan && typeof store.yuanyuan === "object") {
      const status = store.yuanyuan;
      yuanyuanStoreStatus = {
        releaseAt: Math.max(0, Number(status.releaseAt) || YUANYUAN_RELEASE_AT),
        released: status.released === true,
        price: Math.max(0, Number(status.price) || YUANYUAN_PRICE),
        limit: Math.max(1, Number(status.limit) || YUANYUAN_LIMIT),
        sold: Math.max(0, Number(status.sold) || 0),
        remaining: Math.max(0, Number(status.remaining) || 0),
        soldOut: status.soldOut === true,
        purchased: status.purchased === true,
      };
    }
    if (store.revive && typeof store.revive === "object") applyReviveStore(store.revive);
    updateYuanyuanOffer(true);
  }

  async function refreshYunqingStoreStatus() {
    if (!accountAuthenticated || yunqingStoreLoading || typeof window.fetch !== "function") return;
    yunqingStoreLoading = true;
    try {
      const payload = await accountRequest("storeStatus", {}, true);
      applyYunqingStore(payload?.store);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      renderCharacterShop();
      renderReviveUi();
    } catch {
      // The shop remains usable from the last synced account data while offline.
    } finally {
      yunqingStoreLoading = false;
    }
  }

  async function reserveYunqing() {
    if (yunqingStoreLoading) return;
    if (yunqingUnlockedForSale()) return renderCharacterShop("云青已经正式解锁，可以直接购买。 ");
    if (yunqingReserved) return renderCharacterShop("云青已预约：正式解锁后购买只需再付 5499 金币。 ");
    yunqingStoreLoading = true;
    if (shopMessage) {
      shopMessage.textContent = "正在锁定云青预约名额…";
      shopMessage.classList.remove("is-error");
    }
    try {
      const payload = await accountRequest("reserveYunqing", {}, true);
      applyYunqingStore(payload?.store);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      renderCharacterShop("预约成功！已支付 500 金币，7 月 16 日解锁后再付 5499 金币即可购买。 ");
      playTone(620, 0.08, "square", 0.035, 0);
      playTone(920, 0.13, "triangle", 0.03, 0.08);
    } catch (error) {
      renderCharacterShop(error.message || "预约失败，请稍后再试");
      shopMessage?.classList.add("is-error");
    } finally {
      yunqingStoreLoading = false;
    }
  }

  function updateYuanyuanOffer(force = false) {
    if (!yuanyuanOffer || !yuanyuanCountdown) return;
    const now = Date.now();
    const releaseAt = Math.max(YUANYUAN_RELEASE_AT, Number(yuanyuanStoreStatus.releaseAt) || 0);
    const remaining = Math.max(0, releaseAt - now);
    const totalSeconds = Math.floor(remaining / 1000);
    if (!force && totalSeconds === lastOfferSecond && remaining > 0) return;
    lastOfferSecond = totalSeconds;
    yuanyuanOffer.classList.remove("is-ended", "is-live", "is-owned");
    if (unlockedCharacters.has("yuanyuan") || yuanyuanStoreStatus.purchased) {
      yuanyuanOffer.classList.add("is-owned");
      yuanyuanCountdown.textContent = "已永久拥有";
    } else if (yuanyuanStoreStatus.soldOut) {
      yuanyuanOffer.classList.add("is-ended");
      yuanyuanCountdown.textContent = "限量已抢完";
    } else if (remaining > 0) {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;
      yuanyuanCountdown.textContent = hours > 0
        ? `${hours}时 ${minutes}分后开抢`
        : `${minutes}分 ${seconds}秒后开抢`;
    } else {
      yuanyuanOffer.classList.add("is-live");
      yuanyuanCountdown.textContent = `正在抢购 · ●${YUANYUAN_PRICE}`;
    }
    if (yuanyuanStock) {
      const remainingStock = Math.max(0, Number(yuanyuanStoreStatus.remaining));
      yuanyuanStock.textContent = yuanyuanStoreStatus.soldOut
        ? "3 份已经抢完"
        : `全球限量 ${YUANYUAN_LIMIT} 份 · 剩 ${remainingStock} 份`;
    }
  }

  async function purchaseYuanyuan() {
    if (yuanyuanPurchaseBusy) return;
    if (!accountAuthenticated) return showAccountGate("login", "请先登录账号再参加限量抢购");
    if (Date.now() < YUANYUAN_RELEASE_AT) {
      renderCharacterShop("元元将在 7 月 27 日上午 10:00 开抢，请准时回来。");
      shopMessage?.classList.add("is-error");
      return;
    }
    if (yuanyuanStoreStatus.soldOut) {
      renderCharacterShop("元元的 3 个限量名额已经抢完。");
      shopMessage?.classList.add("is-error");
      return;
    }
    if (walletCoins < YUANYUAN_PRICE) {
      renderCharacterShop(`还差 ${YUANYUAN_PRICE - walletCoins} 金币才能抢购元元。`);
      shopMessage?.classList.add("is-error");
      return;
    }
    if (!window.confirm(`限量人物抢购\n\n使用 ${YUANYUAN_PRICE} 金币永久解锁元元？\n全球只有 ${YUANYUAN_LIMIT} 份，确认后会立即锁定名额。`)) return;
    yuanyuanPurchaseBusy = true;
    if (shopMessage) {
      shopMessage.textContent = "正在锁定元元名额，请不要重复点击…";
      shopMessage.classList.remove("is-error");
    }
    try {
      const payload = await accountRequest("purchaseYuanyuan", {}, true);
      if (payload?.store?.yuanyuan) {
        applyYunqingStore({ yuanyuan: payload.store.yuanyuan });
      }
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      renderCharacterShop(payload?.alreadyOwned ? "元元已经属于你。" : "抢购成功！元元已永久解锁并设为使用中。");
      announce(payload?.alreadyOwned ? "元元已经解锁" : "限量人物元元抢购成功！");
      playTone(523, 0.08, "square", 0.035, 0);
      playTone(784, 0.14, "square", 0.03, 0.08);
      loadLeaderboard(true);
    } catch (error) {
      renderCharacterShop(error.message || "抢购失败，请稍后再试");
      shopMessage?.classList.add("is-error");
      refreshYunqingStoreStatus();
    } finally {
      yuanyuanPurchaseBusy = false;
    }
  }

  function resetStaminaForCharacter() {
    const ability = currentCharacter();
    staminaMax = Math.max(60, Math.round((Number(ability.staminaCapacity) || 72) * 0.9));
    stamina = staminaMax;
    lastHudStamina = -1;
    updateStaminaHud(true);
  }

  function staminaRatio() {
    return staminaMax > 0 ? Math.max(0, Math.min(1, stamina / staminaMax)) : 1;
  }

  function effectiveAgility(ability = currentCharacter()) {
    const enduranceFactor = 0.88 + staminaRatio() * 0.12;
    const earlyBasicPenalty = selectedCharacter === "cloud" && (currentLevel === 8 || currentLevel === 9) ? 0.82 : 1;
    const lateChallengePenalty = !battleModeActive && currentLevel >= 15
      ? Math.max(0.76, Math.min(1, 0.76 + Math.max(0, Number(ability.cost) || 0) / 18000 * 0.24))
      : 1;
    const thirdJumpRecoveryPenalty = player?.thirdJumpRecovery > 0 ? 0.86 : 1;
    const releasedCharacterBalance = 0.94;
    return ability.agility * releasedCharacterBalance * enduranceFactor * earlyBasicPenalty * lateChallengePenalty * thirdJumpRecoveryPenalty;
  }

  function consumeStamina(amount) {
    stamina = Math.max(0, stamina - Math.max(0, Number(amount) || 0));
  }

  function updateRunStamina(dt, ability, boosting) {
    const restingRecovery = Number(ability.staminaRecovery) > 0 && player.onGround && jumpBuffer <= 0 && !boosting;
    if (restingRecovery) {
      stamina = Math.min(staminaMax, stamina + (ability.staminaRecovery || 14) * dt);
    } else {
      const movementDrain = 0.42 + (player.onGround ? 0 : 0.72) + (boosting ? 5.2 : 0);
      stamina = Math.max(0, stamina - movementDrain * dt);
    }
  }

  function updateStaminaHud(force = false) {
    const rounded = Math.max(0, Math.round(stamina));
    if (!force && rounded === lastHudStamina) return;
    const ability = currentCharacter();
    const percent = Math.round(staminaRatio() * 100);
    if (staminaStars) staminaStars.textContent = "★".repeat(Math.max(1, Math.min(5, Number(ability.staminaStars) || 1)));
    if (staminaValue) staminaValue.textContent = `${rounded} / ${Math.round(staminaMax)}`;
    if (staminaBar) {
      staminaBar.style.width = `${percent}%`;
      staminaBar.classList.toggle("is-low", percent <= 25);
      staminaBar.parentElement?.setAttribute("aria-label", `人物体力 ${percent}%`);
    }
    canvas.dataset.stamina = String(rounded);
    canvas.dataset.staminaMax = String(Math.round(staminaMax));
    canvas.dataset.staminaPercent = String(percent);
    canvas.dataset.effectiveAgility = effectiveAgility(ability).toFixed(3);
    lastHudStamina = rounded;
  }

  async function purchaseDoraemonChampionCharacter() {
    if (doraemonPurchaseBusy) return;
    const character = characterDefinition("doraemon");
    if (!doraemonPurchaseEligible) {
      if (shopMessage) {
        shopMessage.textContent = "哆啦A梦是两周赛季冠军专属人物；获得冠军资格后才能购买。";
        shopMessage.classList.add("is-error");
      }
      playTone(190, 0.1, "triangle", 0.02, 0);
      return;
    }
    const price = characterPrice(character);
    const confirmed = window.confirm(`冠军专属购买\n\n使用 ${price} 金币永久解锁哆啦A梦？\n\n确认后金币将立即扣除。`);
    if (!confirmed) return;
    if (walletCoins < price) {
      if (shopMessage) {
        shopMessage.textContent = `金币不足，还差 ${price - walletCoins} 金币。`;
        shopMessage.classList.add("is-error");
      }
      playTone(180, 0.1, "square", 0.02, 0);
      return;
    }

    doraemonPurchaseBusy = true;
    if (shopMessage) {
      shopMessage.textContent = "正在确认冠军资格…";
      shopMessage.classList.remove("is-error");
    }
    try {
      const payload = await accountRequest("purchaseSeasonReward", {}, true);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      doraemonPurchaseEligible = true;
      renderCharacterShop(payload?.alreadyOwned ? "哆啦A梦已经属于你。" : "哆啦A梦已永久解锁并设为使用中！");
      announce(payload?.alreadyOwned ? "哆啦A梦已经解锁" : "冠军专属人物哆啦A梦已解锁！");
      playTone(523, 0.08, "square", 0.035, 0);
      playTone(784, 0.14, "square", 0.03, 0.08);
      loadLeaderboard();
    } catch (error) {
      if (shopMessage) {
        shopMessage.textContent = error.message || "购买失败，请稍后再试";
        shopMessage.classList.add("is-error");
      }
      playTone(180, 0.1, "square", 0.02, 0);
    } finally {
      doraemonPurchaseBusy = false;
    }
  }

  function renderCharacterShop(message = "") {
    updateWalletUi();
    if (!characterGrid) return;
    const now = Date.now();
    characterGrid.innerHTML = CHARACTER_DEFS
      .filter((character) =>
        unlockedCharacters.has(character.id) ||
        character.id === "yuanyuan" ||
        characterAvailableNow(character, now))
      .map((character) => {
      const unlocked = unlockedCharacters.has(character.id);
      const selected = character.id === selectedCharacter;
      const price = characterPrice(character);
      const available = characterAvailableNow(character, now);
      const mystery = character.id === "yunqing" && !unlocked && !yunqingUnlockedForSale();
      const reservationRemaining = Math.max(0, 3 - yunqingReservationCount);
      const yuanReleaseAt = Math.max(YUANYUAN_RELEASE_AT, Number(yuanyuanStoreStatus.releaseAt) || 0);
      const yuanStatus = character.id !== "yuanyuan"
        ? ""
        : yuanyuanStoreStatus.soldOut
          ? "限量已抢完"
          : now < yuanReleaseAt
            ? "7月27日 10:00 开抢"
            : `限量 ${YUANYUAN_PRICE} 金币 · 剩 ${Math.max(0, Number(yuanyuanStoreStatus.remaining) || 0)} 份`;
      const status = selected
        ? "使用中"
        : unlocked
          ? available ? "已解锁" : "已拥有 · 已下架"
          : character.rewardOnly
            ? character.id === "doraemon" && doraemonPurchaseEligible
              ? "冠军专属资格已解锁"
              : "赛季冠军专属"
            : mystery
              ? yunqingReserved
                ? "已预约 · 解锁后补 5499"
                : yunqingReservationCount >= 3
                  ? "预约已满 · 7月16日解锁"
                  : `预约 500 · 仅剩 ${reservationRemaining} 个`
              : character.id === "yuanyuan"
                ? yuanStatus
              : characterSaleActive(character, now)
                ? `限时 ${price} 金币`
                : `${price} 金币`;
      const stars = Math.min(5, 1 + Math.round((character.agility - 1) * 12));
      const staminaRating = Math.max(1, Math.min(5, Number(character.staminaStars) || 1));
      const limited = !unlocked && (characterSaleActive(character, now) || character.id === "yuanyuan");
      const yuanUpcoming = character.id === "yuanyuan" && !unlocked && now < yuanReleaseAt;
      const yuanSoldOut = character.id === "yuanyuan" && !unlocked && yuanyuanStoreStatus.soldOut;
      const classes = `character-card${selected ? " is-selected" : ""}${unlocked ? "" : " is-locked"}${limited ? " is-limited" : ""}${character.id === "yuanyuan" ? " is-limited-drop" : ""}${yuanUpcoming ? " is-upcoming" : ""}${yuanSoldOut ? " is-sold-out" : ""}${character.newCharacter ? " is-new-character" : ""}${mystery ? " is-mystery" : ""}`;
      if (mystery) {
        return `<button class="${classes}" type="button" data-character="${character.id}" style="--avatar:${character.color}" aria-label="云青，${status}，能力将在解锁后公开"><span class="avatar-disc" aria-hidden="true">${escapeHtml(character.badge)}</span><strong>${escapeHtml(character.name)}</strong><small>${escapeHtml(status)}</small><span class="mystery-rating">能力数值暂不公开</span><em>7 月 16 日正式解锁 · 售价 5999 金币</em></button>`;
      }
      return `<button class="${classes}" type="button" data-character="${character.id}" style="--avatar:${character.color}" aria-label="${escapeHtml(character.name)}，${escapeHtml(status)}，体力${staminaRating}星，${escapeHtml(character.trait)}"><span class="avatar-disc" aria-hidden="true">${escapeHtml(character.badge)}</span><strong>${escapeHtml(character.name)}</strong><small>${escapeHtml(status)} · 灵活 ${"★".repeat(Math.max(1, stars))}</small><span class="stamina-rating">体力 ${"★".repeat(staminaRating)}${"☆".repeat(5 - staminaRating)}</span><em>${escapeHtml(character.trait)}</em></button>`;
    }).join("");
    updateYuanyuanOffer();

    if (shopMessage) {
      const active = currentCharacter();
      shopMessage.textContent = message || `${active.name}：${active.trait}`;
      shopMessage.classList.remove("is-error");
    }

    if (typeof characterGrid.querySelectorAll !== "function") return;
    for (const button of characterGrid.querySelectorAll("[data-character]")) {
      button.addEventListener("click", async () => {
        const character = CHARACTER_DEFS.find((item) => item.id === button.dataset.character);
        if (!character) return;
        if (unlockedCharacters.has(character.id)) {
          selectedCharacter = character.id;
          resetStaminaForCharacter();
          saveCharacterState();
          renderCharacterShop(`已选择：${character.name}`);
          playTone(620, 0.07, "square", 0.025, 0);
          return;
        }
        if (character.id === "yuanyuan") {
          await purchaseYuanyuan();
          return;
        }
        if (!characterAvailableNow(character)) {
          if (shopMessage) {
            shopMessage.textContent = `${character.name} 当前未上架，暂时不能购买。`;
            shopMessage.classList.add("is-error");
          }
          return;
        }
        if (character.rewardOnly) {
          if (character.id === "doraemon") {
            await purchaseDoraemonChampionCharacter();
            return;
          }
          if (shopMessage) {
            shopMessage.textContent = `${character.name}是奖励专属人物，不能用金币购买。`;
            shopMessage.classList.add("is-error");
          }
          playTone(190, 0.1, "triangle", 0.02, 0);
          return;
        }
        if (character.id === "yunqing" && !yunqingUnlockedForSale()) {
          await reserveYunqing();
          return;
        }
        const price = characterPrice(character);
        if (walletCoins < price) {
          if (shopMessage) {
            shopMessage.textContent = `还差 ${price - walletCoins} 金币才能解锁 ${character.name}`;
            shopMessage.classList.add("is-error");
          }
          playTone(180, 0.1, "square", 0.02, 0);
          return;
        }
        walletCoins -= price;
        recordCoinTransaction(-price, "character_purchase", `购买角色：${character.name}`, "角色已永久解锁", {
          id: `character-purchase-${character.id}`,
        });
        unlockedCharacters.add(character.id);
        selectedCharacter = character.id;
        resetStaminaForCharacter();
        saveCharacterState();
        renderCharacterShop(`成功解锁并选择：${character.name}`);
        playTone(523, 0.08, "square", 0.035, 0);
        playTone(784, 0.12, "square", 0.03, 0.08);
      });
    }
  }

  function showCharacterShop(show) {
    if (!characterShop) return;
    characterShop.classList.toggle("is-hidden", !show);
    if (show) renderCharacterShop();
  }

  function setupSkinPicker() {
    if (!skinOptions || typeof skinOptions.querySelectorAll !== "function") return;
    for (const button of skinOptions.querySelectorAll("[data-skin]")) {
      button.classList.toggle("is-selected", button.dataset.skin === selectedSkin);
      if (button.dataset.bound === "true") continue;
      button.dataset.bound = "true";
      button.addEventListener("click", () => {
        if (!SKIN_TONES[button.dataset.skin]) return;
        selectedSkin = button.dataset.skin;
        writeSetting("cloud-jumper-skin", selectedSkin);
        scheduleAccountSync();
        setupSkinPicker();
        canvas.dataset.selectedSkin = selectedSkin;
        playTone(560, 0.06, "triangle", 0.025, 0);
      });
    }
    canvas.dataset.selectedSkin = selectedSkin;
    canvas.dataset.levelTheme = currentTheme().feature;
    canvas.dataset.levelThemeTitle = LEVEL_NAMES[currentLevel - 1] || "";
  }

  function renderLevelGrid() {
    updateWalletUi();
    if (!levelGrid) return;
    levelGrid.innerHTML = Array.from({ length: MAX_LEVELS }, (_, index) => {
      const level = index + 1;
      const locked = level > highestUnlocked;
      const complete = completedLevelSet.has(level);
      const hard = level >= 6;
      const speed = levelRunSpeed(level);
      const mastery = level >= 15 ? ` · 磨炼 ${Math.min(5, Number(levelAttempts[level]) || 0)}/5` : "";
      const result = complete ? `✓ 已通过${mastery}` : locked ? "🔒 未解锁" : `最高 ${Math.round(Number(levelBest[level]) || 0)} 分${mastery}`;
      const easyLabel = level <= 5 ? " · 前期轻松" : level <= 10 ? " · 中等难度" : level >= 15 ? " · 极限轰炸 · 推荐顶级角色" : " · 高难度";
      return `<button class="level-card${hard ? " is-hard" : ""}${complete ? " is-complete" : ""}" type="button" data-level="${level}"${locked ? " disabled" : ""}><span class="level-number">${level}</span><span class="level-info"><strong>${LEVEL_NAMES[index]}</strong><small>约 ${Math.round(levelBaseDuration(level))} 秒 · 速度 ${speed}${easyLabel}</small><em>${result}</em></span></button>`;
    }).join("");
    if (typeof levelGrid.querySelectorAll !== "function") return;
    for (const button of levelGrid.querySelectorAll("[data-level]")) {
      button.addEventListener("click", () => {
        const level = Number(button.dataset.level);
        if (level >= 1 && level <= highestUnlocked) startLevel(level);
      });
    }
  }

  function showHome() {
    battleModeActive = false;
    battleMatchId = "";
    pendingRevive = null;
    revivePromptBusy = false;
    revivePrompt?.classList.add("is-hidden");
    canvas.dataset.revivePrompt = "false";
    gameState = "home";
    canvas.dataset.gameState = gameState;
    keyboardCrouchHeld = false;
    pointerCrouchHeld = false;
    keyboardBoostHeld = false;
    pointerBoostHeld = false;
    keyboardMoveLeftHeld = false;
    keyboardMoveRightHeld = false;
    controllerMoveLeftHeld = false;
    controllerMoveRightHeld = false;
    boostSparkTimer = 0;
    pauseButton?.classList.add("is-hidden");
    compactHudButton?.classList.add("is-hidden");
    gameControls?.classList.add("is-hidden");
    battleLiveHud?.classList.add("is-hidden");
    battleUltimateButton?.classList.add("is-hidden");
    pausePanel?.classList.add("is-hidden");
    overlay.classList.remove("is-hidden");
    homePanel.classList.remove("is-hidden");
    levelPanel.classList.add("is-hidden");
    missionHud.classList.add("is-hidden");
    resultLine.classList.add("is-hidden");
    closeProfile();
    setHomeTab("play");
    resetStaminaForCharacter();
    showCharacterShop(true);
    setupSkinPicker();
    updateWalletUi();
    renderDailyCheckin();
    renderReviveUi();
    updateCloudAccountUi();
    nameGate?.classList.add("is-hidden");
    if (!accountAuthenticated) {
      accountGate?.classList.remove("is-hidden");
      return;
    }
    accountGate?.classList.add("is-hidden");
    refreshYunqingStoreStatus();
    loadLeaderboard();
    registerCurrentPlayer();
    if (battlePendingInvite) window.setTimeout(openBattleDialog, 420);
    window.setTimeout(showPendingHomeAnnouncement, 900);
    window.setTimeout(showPendingCharacterCatalogNotice, 1120);
  }

  function showLevelSelect(message = "", success = true) {
    battleModeActive = false;
    pendingRevive = null;
    revivePromptBusy = false;
    revivePrompt?.classList.add("is-hidden");
    canvas.dataset.revivePrompt = "false";
    gameState = "levelSelect";
    stopChatPolling();
    stopChatUnreadPolling();
    canvas.dataset.gameState = gameState;
    keyboardCrouchHeld = false;
    pointerCrouchHeld = false;
    keyboardBoostHeld = false;
    pointerBoostHeld = false;
    keyboardMoveLeftHeld = false;
    keyboardMoveRightHeld = false;
    controllerMoveLeftHeld = false;
    controllerMoveRightHeld = false;
    pauseButton?.classList.add("is-hidden");
    compactHudButton?.classList.add("is-hidden");
    gameControls?.classList.add("is-hidden");
    battleLiveHud?.classList.add("is-hidden");
    battleUltimateButton?.classList.add("is-hidden");
    pausePanel?.classList.add("is-hidden");
    overlay.classList.remove("is-hidden");
    homePanel.classList.add("is-hidden");
    levelPanel.classList.remove("is-hidden");
    missionHud.classList.add("is-hidden");
    gestureHint.classList.remove("is-visible");
    closeProfile();
    resetStaminaForCharacter();
    if (levelResultBanner) {
      levelResultBanner.textContent = message;
      levelResultBanner.classList.toggle("is-hidden", !message);
      levelResultBanner.classList.toggle("is-failure", Boolean(message) && !success);
    }
    renderLevelGrid();
  }

  function pauseGame() {
    if (gameState !== "playing") return;
    gameState = "paused";
    canvas.dataset.gameState = gameState;
    keyboardCrouchHeld = false;
    pointerCrouchHeld = false;
    keyboardBoostHeld = false;
    pointerBoostHeld = false;
    keyboardMoveLeftHeld = false;
    keyboardMoveRightHeld = false;
    controllerMoveLeftHeld = false;
    controllerMoveRightHeld = false;
    if (player) player.vx = 0;
    clearGesture();
    pauseButton?.classList.add("is-hidden");
    compactHudButton?.classList.add("is-hidden");
    gameControls?.classList.add("is-hidden");
    overlay.classList.remove("is-hidden");
    homePanel.classList.add("is-hidden");
    levelPanel.classList.add("is-hidden");
    pausePanel?.classList.remove("is-hidden");
    gestureHint.classList.remove("is-visible");
    updateMissionHud();
    announce("游戏已暂停。");
  }

  function resumeGame() {
    if (gameState !== "paused") return;
    gameState = "playing";
    canvas.dataset.gameState = gameState;
    overlay.classList.add("is-hidden");
    pausePanel?.classList.add("is-hidden");
    pauseButton?.classList.remove("is-hidden");
    compactHudButton?.classList.remove("is-hidden");
    gameControls?.classList.toggle("is-hidden", !battleModeActive);
    updateMissionHud();
    lastFrame = performance.now();
    try {
      canvas.focus({ preventScroll: true });
    } catch {
      canvas.focus();
    }
  }

  function exitCurrentRun() {
    if (gameState !== "paused") return;
    if (battleModeActive) {
      const leavingMatchId = battleMatchId;
      sendBattle("leave_match", { matchId: leavingMatchId });
      battleModeActive = false;
      battleMatchId = "";
      battleFinished = true;
      battleLiveHud?.classList.add("is-hidden");
      gameControls?.classList.add("is-hidden");
      battleUltimateButton?.classList.add("is-hidden");
      pausePanel?.classList.add("is-hidden");
      overlay.classList.add("is-hidden");
      openBattleDialog();
      return;
    }
    walletCoins = Math.max(0, walletCoins - runCoinsEarned);
    runCoinsEarned = 0;
    saveCharacterState();
    updateWalletUi();
    showLevelSelect(`已退出第 ${currentLevel} 关，本局金币和成绩没有保存。`, false);
  }

  function getLevelMission(level) {
    if (![3, 6, 9, 12, 15, 18].includes(level)) return null;
    return {
      target: level === 3 ? 6 : level === 6 ? 8 : level < 12 ? 10 : 12,
      label: "收集金币，获得碎石机会",
    };
  }

  function updateMissionHud() {
    if (!levelMission || gameState !== "playing") {
      missionHud.classList.add("is-hidden");
      canvas.dataset.missionComplete = "false";
      canvas.dataset.smashCharges = String(smashCharges);
      return;
    }
    missionHud.classList.remove("is-hidden");
    missionLabel.textContent = missionComplete
      ? (smashCharges > 0 ? "任务完成 · 可撞碎石头一次" : "任务完成 · 碎石机会已使用")
      : levelMission.label;
    missionProgress.textContent = missionComplete ? `碎石 ×${smashCharges}` : `${Math.min(coinCount, levelMission.target)} / ${levelMission.target}`;
    canvas.dataset.missionComplete = String(missionComplete);
    canvas.dataset.smashCharges = String(smashCharges);
  }

  function createPlayer() {
    return {
      x: START_X,
      y: GROUND_Y - NORMAL_HEIGHT,
      w: 42,
      h: NORMAL_HEIGHT,
      vx: 0,
      vy: 0,
      onGround: true,
      surfaceY: GROUND_Y,
      invulnerable: 0,
      airJumpsUsed: 0,
      jumpCycleLocked: false,
      flipAngle: 0,
      flipElapsed: 0,
      flipDuration: 0,
      flipTurns: 0,
      flairMove: "",
      flairElapsed: 0,
      flairDuration: 0,
      pendingThirdJump: 0,
      thirdJumpRecovery: 0,
    };
  }

  function startLevel(level = currentLevel, options = {}) {
    if (siteLockActive) {
      updateSiteLockClock(true);
      return;
    }
    if (!requirePlayerName()) {
      showHome();
      return;
    }
    const startingBattle = options?.battle === true;
    pendingRevive = null;
    revivePromptBusy = false;
    revivePrompt?.classList.add("is-hidden");
    canvas.dataset.revivePrompt = "false";
    if (!startingBattle) battleModeActive = false;
    crabTripleActive = false;
    if (!startingBattle && selectedCharacter === "krabs") {
      crabRunsPlayed = Math.min(1000000, crabRunsPlayed + 1);
      crabTripleActive = crabRunsPlayed % 3 === 0;
      writeSetting("cloud-jumper-crab-runs", crabRunsPlayed);
      scheduleAccountSync(900);
    }
    currentLevel = Math.max(1, Math.min(MAX_LEVELS, Number(level) || 1));
    buildLevel(currentLevel, { battle: startingBattle });
    player = createPlayer();
    resetStaminaForCharacter();
    coins = coinBlueprints.map((item) => ({ ...item, collected: false }));
    hazards = hazardBlueprints.map((item) => ({ ...item }));
    enemies = enemyBlueprints.map((item, index) => ({
      ...item,
      y: GROUND_Y - 30,
      w: 42,
      h: 30,
      direction: index % 2 === 0 ? 1 : -1,
      alive: true,
    }));
    springs = springBlueprints.map((item) => ({ ...item }));
    crows = crowBlueprints.map((item) => ({ ...item, y: item.baseY, alive: true }));
    airplanes = airplaneBlueprints.map((item) => ({ ...item, y: item.baseY, active: true }));
    airplaneBombs = [];
    specialEvents = specialEventBlueprints.map((item, index) => ({
      ...item,
      id: `${currentLevel}-${index}`,
      state: "idle",
      timer: 0,
      x: null,
    }));
    fallingBranches = [];
    fallingBalls = [];
    fallingRocks = [];
    particles = [];
    specialCounts = {
      fallingBranch: 0,
      surpriseHole: 0,
      fallingBall: 0,
      fallingRock: 0,
      doubleDrop: 0,
      crowRush: 0,
      crow: crows.length,
      airplane: airplanes.length,
      airplaneBomb: 0,
      bombExplosion: 0,
      blackHole: hazards.filter((hazard) => hazard.kind === "blackHole").length,
      spring: 0,
      bigCoin: 0,
    };
    hearts = maxHearts;
    coinCount = 0;
    runCoinsEarned = 0;
    runCoinPickupCount = 0;
    runAttemptNumber = (Number(levelAttempts[currentLevel]) || 0) + 1;
    currentAttemptRecorded = false;
    levelMission = startingBattle ? null : getLevelMission(currentLevel);
    missionComplete = false;
    smashCharges = currentCharacter().freeSmash || 0;
    caveAnnounced = false;
    caveSunActive = false;
    caveDarknessProgress = 0;
    doorCharges = currentCharacter().doorCharges || 0;
    skillBadge = { icon: "", label: "", remaining: 0, duration: 0 };
    flairMoveIndex = 0;
    flairAttemptIndex = 0;
    flairMoveCooldown = 0;
    score = 0;
    scoreFloat = 0;
    previousScoreX = START_X;
    checkpointX = START_X;
    elapsed = 0;
    bgmTimer = 0.12;
    bgmStep = 0;
    cameraX = 0;
    cliffFallState = null;
    cliffRescueGrace = 0;
    shakeTime = 0;
    jumpBuffer = 0;
    coyoteTime = 0.11;
    keyboardCrouchHeld = false;
    pointerCrouchHeld = false;
    keyboardBoostHeld = false;
    pointerBoostHeld = false;
    keyboardMoveLeftHeld = false;
    keyboardMoveRightHeld = false;
    controllerMoveLeftHeld = false;
    controllerMoveRightHeld = false;
    boostSparkTimer = 0;
    boostWasActive = false;
    premiumEffectTimer = 0;
    gameState = "playing";
    canvas.dataset.gameState = gameState;
    canvas.dataset.level = String(currentLevel);
    canvas.dataset.lastDamage = "";
    canvas.dataset.lastSpecial = "";
    canvas.dataset.warningKind = "";
    canvas.dataset.warningX = "";
    canvas.dataset.cliffFallActive = "false";
    canvas.dataset.cliffRescueAvailable = "false";
    canvas.dataset.playerX = START_X.toFixed(2);
    canvas.dataset.playerY = (GROUND_Y - NORMAL_HEIGHT).toFixed(2);
    canvas.dataset.playerPose = "idle";
    canvas.dataset.playerHeight = String(NORMAL_HEIGHT);
    canvas.dataset.surfaceY = GROUND_Y.toFixed(2);
    canvas.dataset.levelScore = "0";
    canvas.dataset.selectedCharacter = selectedCharacter;
    canvas.dataset.crabRunsPlayed = String(crabRunsPlayed);
    canvas.dataset.crabTripleActive = String(crabTripleActive);
    canvas.dataset.selectedSkin = selectedSkin;
    canvas.dataset.levelTheme = currentTheme().feature;
    canvas.dataset.levelThemeTitle = LEVEL_NAMES[currentLevel - 1] || "";
    canvas.dataset.boosting = "false";
    canvas.dataset.skillBadge = "";
    canvas.dataset.doorCharges = String(doorCharges);
    canvas.dataset.attemptNumber = String(runAttemptNumber);
    canvas.dataset.staminaStars = String(currentCharacter().staminaStars || 1);
    canvas.dataset.basicAgilityPenalty = String(selectedCharacter === "cloud" && (currentLevel === 8 || currentLevel === 9));
    canvas.dataset.runSpeed = String(runSpeed);
    canvas.dataset.mobileWorldOffset = String(worldYOffset);
    canvas.dataset.hasCave = String(caveEnabled);
    canvas.dataset.caveActive = "false";
    canvas.dataset.caveSunActive = "false";
    canvas.dataset.caveHealedAtEntry = "false";
    canvas.dataset.caveEntryProtected = "false";
    canvas.dataset.caveDarknessProgress = "0.000";
    canvas.dataset.earlyCaveLevel = String(earlyCaveLevelForPlayer());
    canvas.dataset.caveStartX = caveEnabled ? String(caveStartX) : "";
    canvas.dataset.caveEndX = caveEnabled ? String(caveEndX) : "";
    canvas.dataset.caveDurationTarget = caveEnabled ? String(CAVE_DURATION_SECONDS) : "0";
    canvas.dataset.caveFlashlightRadius = caveEnabled ? String(caveFlashlightRadius(currentLevel)) : "0";
    canvas.dataset.baseLevelDurationTarget = String(Math.round((baseLevelEnd - START_X) / runSpeed));
    canvas.dataset.levelDurationTarget = String(Math.round((levelEnd - START_X) / runSpeed));
    canvas.dataset.levelEnd = String(levelEnd);
    canvas.dataset.trackGaps = JSON.stringify(gapBlueprints);
    canvas.dataset.trackCoins = JSON.stringify(coins.slice(0, 80).map((coin) => ({ x: coin.x, y: coin.y, big: Boolean(coin.big), combo: Boolean(coin.requiresCombo) })));
    canvas.dataset.trackHazards = JSON.stringify(hazards.map((hazard) => ({ kind: hazard.kind, x: hazard.x, y: hazard.y, w: hazard.w, h: hazard.h, layer: hazard.layer || 1, crouch: Boolean(hazard.crouchObstacle) })));
    canvas.dataset.crouchObstacleCount = String(hazards.filter((hazard) => hazard.kind === "branch" && hazard.crouchObstacle).length);
    canvas.dataset.trackEnemies = JSON.stringify(enemies.map((enemy) => ({ x: enemy.x, minX: enemy.minX, maxX: enemy.maxX })));
    canvas.dataset.trackCrows = JSON.stringify(crows.map((crow) => ({ x: crow.x, minX: crow.minX, maxX: crow.maxX, y: crow.baseY, w: crow.w, h: crow.h })));
    canvas.dataset.trackAirplanes = JSON.stringify(airplanes.map((plane) => ({ x: plane.x, minX: plane.minX, maxX: plane.maxX, y: plane.baseY, w: plane.w, h: plane.h, drops: plane.dropsRemaining })));
    canvas.dataset.airplaneCount = String(airplanes.length);
    canvas.dataset.activeAirplaneBombs = "0";
    canvas.dataset.jumpCycleLocked = "false";
    canvas.dataset.trackSpecialEvents = JSON.stringify(specialEvents.map((event) => ({ kind: event.kind, triggerScore: event.triggerScore, triggerX: event.triggerX, width: event.width || 0, cave: Boolean(event.cave) })));
    canvas.dataset.doubleJumpGapCount = String(gapBlueprints.filter((gap) => gap.requiresDoubleJump).length);
    canvas.dataset.caveCoinCount = String(caveEnabled ? coins.filter((coin) => coin.x >= caveStartX - 50).length : 0);
    canvas.dataset.bigCoinCount = String(coins.filter((coin) => coin.big).length);
    canvas.dataset.comboCoinCount = String(coins.filter((coin) => coin.requiresCombo).length);
    overlay.classList.add("is-hidden");
    pausePanel?.classList.add("is-hidden");
    pauseButton?.classList.remove("is-hidden");
    compactHudButton?.classList.remove("is-hidden");
    gameControls?.classList.toggle("is-hidden", !startingBattle);
    updateBattleUltimateButton();
    updateBattleHud();
    showCharacterShop(false);
    updateMissionHud();
    gestureHint.classList.add("is-visible");
    window.clearTimeout(hintTimer);
    hintTimer = window.setTimeout(() => {
      gestureHint.classList.remove("is-visible");
    }, 6200);
    lastHudScore = -1;
    lastHudHearts = -1;
    lastHudProgress = -1;
    lastHudStamina = -1;
    updateHud(true);
    if (crabTripleActive) {
      activateSkillBadge("🦀", "金蟹三倍吸币局", 2.2);
      announce("蟹老板金蟹局触发！本局吸币范围扩大，拾取到账金币变成三倍。");
    } else {
      announce(startingBattle ? "好友对战开始：人物会自动前进并逐渐加速，60 秒内尽量多收集积分。" : `第 ${currentLevel} 关开始：自动前进会逐渐加速，达到 100 分即可过关。`);
    }
    initAudio();
    playTone(392, 0.07, "square", 0.035, 0);
    playTone(523, 0.1, "square", 0.035, 0.08);
    lastFrame = performance.now();
    try {
      canvas.focus({ preventScroll: true });
    } catch {
      canvas.focus();
    }
  }

  function startBattleMatch(match) {
    if (!match?.id || !match?.endsAt) return;
    battleModeActive = true;
    battleMatchId = String(match.id);
    battleEndsAt = Number(match.endsAt) || Date.now() + battleServerOffset + 60000;
    battleScore = 0;
    battleCoinUnits = 0;
    battleBestCombo = 0;
    battleCombo = 0;
    battleLastCoinAt = 0;
    battleBigCoins = 0;
    battleDamageTaken = 0;
    battleLap = 0;
    battleUltimateUsed = false;
    battleFinished = false;
    battleStateSendTimer = 0;
    battleOpponentTarget = null;
    battleOpponentDisplay = null;
    battleOpponentPlayerId = "";
    battleAttack = null;
    battleFinalPayload = null;
    closeBattleDialog();
    battleResultDialog?.classList.add("is-hidden");
    const matchLevel = Math.max(2, Math.min(14, Number(match.level) || battleDifficultyDefinition(match.difficulty).level));
    startLevel(matchLevel, { battle: true });
    if (!battleModeActive || gameState !== "playing") return;
    const opponent = (Array.isArray(match.players) ? match.players : []).find((entry) => String(entry.playerId) !== String(playerId)) || battleOpponentPlayer();
    if (opponent) {
      battleOpponentPlayerId = String(opponent.playerId || "");
      battleOpponentTarget = {
        x: START_X + 22,
        y: GROUND_Y - NORMAL_HEIGHT,
        h: NORMAL_HEIGHT,
        vx: 0,
        vy: 0,
        pose: "idle",
        distance: 22,
        score: 0,
        hearts: maxHearts,
        combo: 0,
        character: opponent.character || "cloud",
        skin: opponent.skin || "light",
        avatar: opponent.avatar || "cloud",
        name: cleanPlayerName(opponent.name) || "对手",
      };
      battleOpponentDisplay = { ...battleOpponentTarget };
    }
    canvas.dataset.battleOpponentReady = String(Boolean(battleOpponentDisplay));
    canvas.dataset.battleMode = "true";
    canvas.dataset.battleMatchId = battleMatchId;
    canvas.dataset.battleLap = "0";
    canvas.dataset.battleScore = "0";
    canvas.dataset.battleDifficulty = battleDifficultyDefinition(match.difficulty).id;
    updateBattleUltimateButton();
    updateBattleHud();
    playTone(523, 0.08, "square", 0.035, 0);
    playTone(659, 0.08, "square", 0.035, 0.08);
    playTone(784, 0.13, "triangle", 0.032, 0.16);
  }

  function resetBattleLap() {
    battleLap += 1;
    player.x = START_X;
    player.y = GROUND_Y - NORMAL_HEIGHT;
    player.h = NORMAL_HEIGHT;
    player.vx = 0;
    player.vy = 0;
    player.onGround = true;
    player.surfaceY = GROUND_Y;
    player.invulnerable = Math.max(player.invulnerable, 0.75);
    player.airJumpsUsed = 0;
    player.jumpCycleLocked = false;
    player.pendingThirdJump = 0;
    player.thirdJumpRecovery = 0;
    previousScoreX = START_X;
    checkpointX = START_X;
    cameraX = 0;
    cliffFallState = null;
    cliffRescueGrace = 0;
    canvas.dataset.cliffFallActive = "false";
    canvas.dataset.cliffRescueAvailable = "false";
    coins = coinBlueprints.map((item) => ({ ...item, collected: false }));
    hazards = hazardBlueprints.map((item) => ({ ...item }));
    enemies = enemyBlueprints.map((item, index) => ({
      ...item,
      y: GROUND_Y - 30,
      w: 42,
      h: 30,
      direction: index % 2 === 0 ? 1 : -1,
      alive: true,
    }));
    springs = springBlueprints.map((item) => ({ ...item }));
    crows = crowBlueprints.map((item) => ({ ...item, y: item.baseY, alive: true }));
    airplanes = airplaneBlueprints.map((item) => ({ ...item, y: item.baseY, active: true }));
    airplaneBombs = [];
    specialEvents = specialEventBlueprints.map((item, index) => ({ ...item, id: `battle-${battleLap}-${index}`, state: "idle", timer: 0, x: null }));
    fallingBranches = [];
    fallingBalls = [];
    fallingRocks = [];
    activateSkillBadge("↻", `第 ${battleLap + 1} 圈`, 1.15);
    canvas.dataset.battleLap = String(battleLap);
    updateHud(true);
    announce(`进入第 ${battleLap + 1} 圈，积分和生命继续保留。`);
  }

  function sendBattlePlayerState(force = false) {
    if (!battleModeActive || battleFinished || !player) return;
    if (!force && battleStateSendTimer > 0) return;
    battleStateSendTimer = 0.095;
    const courseLength = Math.max(1, levelEnd - START_X);
    sendBattle("state", {
      matchId: battleMatchId,
      state: {
        x: Number(player.x.toFixed(2)),
        y: Number(player.y.toFixed(2)),
        h: player.h,
        vx: Number((player.vx || 0).toFixed(2)),
        vy: Number(player.vy.toFixed(2)),
        pose: player.onGround ? (player.h === CROUCH_HEIGHT ? "crouch" : Math.abs(player.vx || 0) > 8 ? "run" : "idle") : "air",
        distance: Number((battleLap * courseLength + Math.max(0, player.x - START_X)).toFixed(2)),
        score: Math.max(0, Math.round(battleScore)),
        hearts,
        combo: battleCombo,
        character: selectedCharacter,
        skin: selectedSkin,
        avatar: accountAvatar,
        name: playerName,
      },
    });
  }

  function receiveBattleAttack(kind) {
    if (!battleModeActive || battleFinished) return;
    const attackKind = kind === "airstrike" ? "airstrike" : "bomb";
    battleAttack = {
      kind: attackKind,
      elapsed: 0,
      hit: false,
      targetX: player.x + player.w * 0.5,
    };
    canvas.dataset.lastSpecial = attackKind === "airstrike" ? "battleAirstrikeIncoming" : "battleBombIncoming";
    activateSkillBadge("!", attackKind === "airstrike" ? "对手呼叫飞机轰炸" : "对手投下炸弹", 1.1);
    playTone(210, 0.08, "square", 0.03, 0);
    playTone(165, 0.12, "sawtooth", 0.025, 0.09);
  }

  function useBattleUltimate() {
    if (!battleModeActive || battleFinished || battleUltimateUsed) return;
    if (!sendBattle("ultimate", { matchId: battleMatchId })) {
      announce("实时连接暂时中断，大招还没有消耗。");
      connectBattleSocket();
      return;
    }
    battleUltimateUsed = true;
    updateBattleUltimateButton();
    playTone(420, 0.08, "sawtooth", 0.035, 0);
    playTone(720, 0.16, "square", 0.03, 0.06);
  }

  function updateBattleRuntime(dt) {
    if (!battleModeActive) return;
    battleStateSendTimer = Math.max(0, battleStateSendTimer - dt);
    if (battleCombo > 0 && Date.now() - battleLastCoinAt > 2300) battleCombo = 0;
    if (battleOpponentTarget) {
      if (!battleOpponentDisplay) battleOpponentDisplay = { ...battleOpponentTarget };
      const smoothing = 1 - Math.pow(0.0015, dt);
      for (const key of ["x", "y", "h", "distance", "score", "hearts"]) {
        const target = Number(battleOpponentTarget[key]);
        if (!Number.isFinite(target)) continue;
        const current = Number(battleOpponentDisplay[key]);
        battleOpponentDisplay[key] = Number.isFinite(current) ? current + (target - current) * smoothing : target;
      }
      for (const key of ["pose", "character", "skin", "avatar", "name"]) {
        if (battleOpponentTarget[key] !== undefined) battleOpponentDisplay[key] = battleOpponentTarget[key];
      }
    }
    if (battleAttack) {
      battleAttack.elapsed += dt;
      const hitAt = battleAttack.kind === "airstrike" ? 1.42 : 1.18;
      if (!battleAttack.hit && battleAttack.elapsed >= hitAt) {
        battleAttack.hit = true;
        battleAttack.targetX = player.x + player.w * 0.5;
        handleDamage(false, 1, battleAttack.kind === "airstrike" ? "battleAirstrike" : "battleBomb");
        shakeTime = Math.max(shakeTime, 0.46);
        spawnHitBurst(player.x + player.w * 0.5, Math.min(GROUND_Y - 18, player.y + player.h * 0.5));
      }
      if (battleAttack.elapsed >= (battleAttack.kind === "airstrike" ? 2.25 : 1.85)) battleAttack = null;
    }
    sendBattlePlayerState();
    updateBattleHud();
    canvas.dataset.battleScore = String(Math.max(0, Math.round(battleScore)));
    canvas.dataset.battleCombo = String(battleCombo);
    if (!battleFinished && Date.now() + battleServerOffset >= battleEndsAt) finishBattleLocally();
  }

  function finishBattleLocally() {
    if (!battleModeActive || battleFinished) return;
    battleFinished = true;
    keyboardMoveLeftHeld = false;
    keyboardMoveRightHeld = false;
    controllerMoveLeftHeld = false;
    controllerMoveRightHeld = false;
    if (player) player.vx = 0;
    gameState = "battleWaiting";
    canvas.dataset.gameState = gameState;
    gameControls?.classList.add("is-hidden");
    pauseButton?.classList.add("is-hidden");
    compactHudButton?.classList.add("is-hidden");
    updateBattleUltimateButton();
    if (battleTimeLeft) battleTimeLeft.textContent = "结算中";
    sendBattle("finish", {
      matchId: battleMatchId,
      result: {
        score: Math.max(0, Math.round(battleScore)),
        hearts,
        bigCoins: battleBigCoins,
        bestCombo: battleBestCombo,
        damageTaken: battleDamageTaken,
        coinUnits: battleCoinUnits,
      },
    });
    announce("好友对战结束，正在核对双方积分。");
  }

  async function recordBattleResultReward(result, mine, won, tied) {
    if (!accountAuthenticated || !accountToken || !mine || battleResultSaving) return;
    battleResultSaving = true;
    const originalMessage = String(battleResultMessage?.textContent || "");
    if (battleResultMessage) battleResultMessage.textContent = `${originalMessage} 正在把对战成绩和金币写入云端…`;
    try {
      const payload = await accountRequest("recordBattleResult", {
        matchId: String(result?.matchId || ""),
        score: Math.max(0, Math.round(Number(mine.score) || 0)),
        coinUnits: Math.max(0, Math.round(Number(mine.coinUnits) || 0)),
        bigCoins: Math.max(0, Math.round(Number(mine.bigCoins) || 0)),
        bestCombo: Math.max(0, Math.round(Number(mine.bestCombo) || 0)),
        won,
        tied,
      }, true);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      const reward = Math.max(0, Math.round(Number(payload?.battleReward) || 0));
      const points = Math.max(0, Math.round(Number(payload?.battlePointsAwarded) || 0));
      if (battleResultMessage) {
        battleResultMessage.textContent = payload?.alreadyRecorded
          ? `${originalMessage} 这局成绩已经记录过。`
          : `${originalMessage} 对战金币按 4:1 兑换，到账 ●${reward}；综合榜增加 ${points} 对战积分。`;
      }
      loadLeaderboard();
    } catch {
      if (battleResultMessage) battleResultMessage.textContent = `${originalMessage} 云端结算暂时失败，保持登录后可重试下一局。`;
    } finally {
      battleResultSaving = false;
    }
  }

  function showBattleResult(result) {
    battleFinalPayload = result;
    battleFinished = true;
    battleModeActive = false;
    pendingRevive = null;
    revivePromptBusy = false;
    revivePrompt?.classList.add("is-hidden");
    gameState = "battleResult";
    canvas.dataset.gameState = gameState;
    canvas.dataset.revivePrompt = "false";
    canvas.dataset.battleMode = "false";
    canvas.dataset.battleOpponentReady = "false";
    gameControls?.classList.add("is-hidden");
    battleLiveHud?.classList.add("is-hidden");
    pauseButton?.classList.add("is-hidden");
    compactHudButton?.classList.add("is-hidden");
    battleUltimateButton?.classList.add("is-hidden");
    overlay.classList.add("is-hidden");
    closeBattleDialog();
    const results = Array.isArray(result.results) ? result.results : [];
    const winnerId = String(result.winnerId || "");
    const mine = results.find((entry) => String(entry.playerId) === String(playerId));
    const opponent = results.find((entry) => String(entry.playerId) !== String(playerId));
    const tied = !winnerId;
    const won = winnerId === String(playerId);
    if (battleResultIcon) battleResultIcon.textContent = tied ? "🤝" : won ? "🏆" : "★";
    if (battleResultTitle) battleResultTitle.textContent = tied ? "平局！" : won ? "你赢了！" : "这局对手领先";
    if (battleResultMessage) battleResultMessage.textContent = tied
      ? "双方积分相同，再来一局吧。"
      : won
        ? "你的积分更高；这场对战不会改变单人关卡记录。"
        : "可以回房间再次准备，换一条收集路线试试。";
    if (battleResultScores) {
      battleResultScores.innerHTML = [mine, opponent].filter(Boolean).map((entry) => {
        const isWinner = winnerId && String(entry.playerId) === winnerId;
        return `<div class="battle-result-score${isWinner ? " is-winner" : ""}"><small>${escapeHtml(cleanPlayerName(entry.name) || "玩家")}${String(entry.playerId) === String(playerId) ? "（我）" : ""}</small><strong>${Math.max(0, Math.round(Number(entry.score) || 0))}</strong><em>大金币 ${Math.max(0, Number(entry.bigCoins) || 0)} · 生命 ${Math.max(0, Number(entry.hearts) || 0)}</em></div>`;
      }).join("");
    }
    battleResultDialog?.classList.remove("is-hidden");
    recordBattleResultReward(result, mine, won, tied);
    playTone(won ? 660 : 330, 0.1, "square", 0.035, 0);
    playTone(won ? 880 : 440, 0.18, "triangle", 0.03, 0.1);
  }

  function handlePrimaryAction() {
    if (siteLockActive) {
      updateSiteLockClock(true);
      return;
    }
    if (!requirePlayerName()) return;
    showLevelSelect();
  }

  function completeLevel() {
    if (gameState !== "playing") return;
    if (currentLevel >= 15 && runAttemptNumber < 5) {
      finishMasteryAttempt();
      return;
    }
    recordCurrentAttempt();
    scoreFloat = TARGET_SCORE;
    score = TARGET_SCORE;
    canvas.dataset.levelScore = String(TARGET_SCORE);
    completedLevelSet.add(currentLevel);
    levelBest[currentLevel] = TARGET_SCORE;
    highestUnlocked = Math.max(highestUnlocked, Math.min(MAX_LEVELS, currentLevel + 1));
    const reward = currentLevel >= 15 ? 3 + (currentLevel - 15) : 6 + currentLevel;
    commitRunCoinEarnings(`成功完成第 ${currentLevel} 关时拾取`);
    walletCoins += reward;
    recordCoinTransaction(reward, "level_reward", `第 ${currentLevel} 关通关奖励`, "达到 100 分");
    saveCharacterState();
    runCoinsEarned = 0;
    saveLevelProgress();
    updateHud(true);
    keyboardCrouchHeld = false;
    pointerCrouchHeld = false;
    gestureHint.classList.remove("is-visible");
    announce(`第 ${currentLevel} 关通过。`);
    spawnCelebration();
    playTone(523, 0.1, "square", 0.04, 0);
    playTone(659, 0.1, "square", 0.04, 0.1);
    playTone(784, 0.16, "square", 0.04, 0.2);
    const message = currentLevel === MAX_LEVELS
      ? `第 20 关通过！全部关卡完成，奖励 ${reward} 金币。`
      : `第 ${currentLevel} 关 100 分通过，奖励 ${reward} 金币，已解锁第 ${currentLevel + 1} 关。`;
    showLevelSelect(message, true);
    submitLeaderboard(TARGET_SCORE);
  }

  function finishMasteryAttempt() {
    recordCurrentAttempt();
    scoreFloat = 99;
    score = 99;
    canvas.dataset.levelScore = "99";
    levelBest[currentLevel] = Math.max(Number(levelBest[currentLevel]) || 0, 99);
    saveLevelProgress();
    commitRunCoinEarnings(`第 ${runAttemptNumber}/5 次磨炼时拾取`);
    saveCharacterState();
    runCoinsEarned = 0;
    keyboardCrouchHeld = false;
    pointerCrouchHeld = false;
    gestureHint.classList.remove("is-visible");
    const remaining = Math.max(0, 5 - runAttemptNumber);
    announce(`第 ${currentLevel} 关完成第 ${runAttemptNumber} 次磨炼。`);
    playTone(360, 0.1, "triangle", 0.03, 0);
    playTone(280, 0.15, "triangle", 0.025, 0.09);
    showLevelSelect(`第 ${currentLevel} 关磨炼 ${runAttemptNumber}/5 完成，还需挑战 ${remaining} 次；第 5 次才可正式过关。`, false);
    submitLeaderboard(99);
  }

  function finishGame(won) {
    if (gameState !== "playing") return;
    if (won) {
      completeLevel();
      return;
    }
    const failedScore = Math.max(0, Math.min(TARGET_SCORE, Math.round(scoreFloat)));
    recordCurrentAttempt();
    levelBest[currentLevel] = Math.max(Number(levelBest[currentLevel]) || 0, failedScore);
    saveLevelProgress();
    commitRunCoinEarnings(`挑战失败前拾取 · 本局 ${failedScore} 分`);
    saveCharacterState();
    runCoinsEarned = 0;
    keyboardCrouchHeld = false;
    pointerCrouchHeld = false;
    gestureHint.classList.remove("is-visible");
    announce(`第 ${currentLevel} 关挑战失败，得分 ${failedScore}。`);
    playTone(220, 0.13, "sawtooth", 0.035, 0);
    playTone(165, 0.22, "sawtooth", 0.03, 0.13);
    showLevelSelect(`第 ${currentLevel} 关挑战失败，本次 ${failedScore} 分。可以换更灵活的角色再试。`, false);
    submitLeaderboard(failedScore);
  }

  function announce(message) {
    announcement.textContent = "";
    window.setTimeout(() => {
      announcement.textContent = message;
    }, 20);
  }

  function initAudio() {
    if (!soundOn || audioContext) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext = new AudioContextClass();
  }

  function playTone(frequency, duration, type = "square", volume = 0.035, delay = 0) {
    if (!soundOn) return;
    initAudio();
    if (!audioContext) return;
    if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
    const start = audioContext.currentTime + delay;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  }

  function updateBgm(dt) {
    bgmTimer -= dt;
    if (bgmTimer > 0) return;
    const hardMode = currentLevel >= 5;
    const insideCave = caveEnabled && player.x >= caveStartX && player.x < caveEndX;
    const tempo = insideCave
      ? 0.24
      : hardMode
      ? Math.max(0.15, 0.22 - (currentLevel - 5) * 0.012)
      : 0.29 - currentLevel * 0.012;
    bgmTimer += tempo;
    const melodies = [
      [262, 330, 392, 523, 392, 330, 294, 392],
      [294, 370, 440, 587, 440, 370, 330, 440],
      [247, 294, 370, 494, 370, 330, 294, 220],
      [262, 392, 440, 523, 659, 523, 440, 392],
      [220, 330, 392, 440, 392, 494, 440, 330],
    ];
    const melody = melodies[(currentLevel - 1) % melodies.length];
    const note = melody[bgmStep % melody.length];
    if (soundOn) {
      if (insideCave) {
        const caveNotes = [72, 82, 68, 93, 76, 64, 88, 70];
        playTone(caveNotes[bgmStep % caveNotes.length], tempo * 1.7, "sine", 0.008, 0);
        if (bgmStep % 3 === 0) playTone(145 + (bgmStep % 4) * 11, 0.08, "triangle", 0.0035, 0.08);
      } else {
        playTone(note, tempo * 0.72, bgmStep % 4 === 2 ? "square" : "triangle", hardMode ? 0.008 : 0.009, 0);
        if (bgmStep % 4 === 0) playTone(note * 0.5, tempo * 1.65, "sine", 0.006, 0);
        if (hardMode && bgmStep % 2 === 1) playTone(95 + currentLevel * 3, 0.035, "square", 0.0045, 0);
      }
    }
    bgmStep += 1;
    canvas.dataset.bgmStep = String(bgmStep);
    canvas.dataset.bgmTempo = tempo.toFixed(3);
  }

  function updateSoundButton() {
    soundIcon.textContent = soundOn ? "♪" : "×";
    soundButton.setAttribute("aria-label", soundOn ? "关闭声音" : "打开声音");
    soundButton.title = soundOn ? "关闭声音" : "打开声音";
  }

  function applySimpleHudMode() {
    gameShell?.classList.toggle("is-simple-hud", simpleHudMode);
    if (compactHudButton) {
      compactHudButton.textContent = simpleHudMode ? "全" : "简";
      compactHudButton.setAttribute("aria-pressed", String(simpleHudMode));
      compactHudButton.setAttribute("aria-label", simpleHudMode ? "恢复完整游戏信息" : "打开简洁模式，只显示生命");
      compactHudButton.title = simpleHudMode ? "恢复完整模式" : "简洁模式";
    }
    canvas.dataset.simpleHud = String(simpleHudMode);
  }

  function requestJump() {
    if (gameState !== "playing") return;
    if ((keyboardCrouchHeld || pointerCrouchHeld) && player.onGround) return;
    if (player.pendingThirdJump > 0) return;
    if (!player.onGround && player.jumpCycleLocked) {
      jumpBuffer = 0;
      canvas.dataset.lastAction = "jumpLockedUntilLanding";
      canvas.dataset.lastActionAt = String(Date.now());
      return;
    }
    const agility = effectiveAgility();
    jumpBuffer = 0.13 + Math.max(0, agility - 1) * 0.22;
    if (selectedCharacter === "cloud" && (currentLevel === 8 || currentLevel === 9)) jumpBuffer *= 0.78;
    canvas.dataset.lastAction = "jump";
    canvas.dataset.lastActionAt = String(Date.now());
  }

  function setCrouchHeld(source, held) {
    if (gameState !== "playing") return;
    const wasHeld = keyboardCrouchHeld || pointerCrouchHeld;
    if (source === "keyboard") keyboardCrouchHeld = held;
    else pointerCrouchHeld = held;
    const isHeld = keyboardCrouchHeld || pointerCrouchHeld;

    if (isHeld && !wasHeld) {
      canvas.dataset.lastAction = "crouch";
      canvas.dataset.lastActionAt = String(Date.now());
      if (!player.onGround) player.vy = Math.max(player.vy, 430);
      spawnDust(player.x + player.w * 0.5, player.surfaceY - 3, "#e3c981", 4);
      playTone(185, 0.055, "triangle", 0.022, 0);
    }
  }

  function beginPlayerFlip(ability) {
    player.flipAngle = 0;
    player.flipElapsed = 0;
    flairAttemptIndex += 1;
    if (flairAttemptIndex % 2 !== 0) {
      player.flipDuration = 0;
      player.flipTurns = 0;
      return;
    }
    const flairSpeed = 0.74 + staminaRatio() * 0.26;
    player.flipDuration = ability.flipDuration ? ability.flipDuration / flairSpeed : 0;
    player.flipTurns = ability.flipTurns || 0;
  }

  function performAirJump(ability, isThirdJump = false) {
    const jumpStrength = 0.96 + staminaRatio() * 0.04;
    const heightFactor = isThirdJump ? (ability.instantTripleJump ? 0.78 : 0.62) : 0.9;
    player.vy = -ability.jumpPower * heightFactor * jumpStrength;
    activateCliffRescue(ability, isThirdJump);
    consumeStamina(isThirdJump ? 24 : 10);
    player.thirdJumpRecovery = isThirdJump ? (ability.instantTripleJump ? 0.06 : 0.3) : 0;
    if (ability.flipTurns > 0) beginPlayerFlip(ability);
    if (Array.isArray(ability.flairMoves) && ability.flairMoves.length > 0) triggerFlairMove(ability);
    else if (selectedCharacter === "doraemon") activateSkillBadge("🚁", "竹蜻蜓缓降", 1.05);
    else activateSkillBadge("✦", isThirdJump ? "低空第三跳" : "二次跳", 0.88);
    spawnCoinBurst(player.x + player.w * 0.5, player.y + player.h * 0.75);
    playTone(isThirdJump ? 540 : 610, 0.07, "square", 0.03, 0);
    playTone(isThirdJump ? 710 : 820, 0.08, "triangle", 0.024, 0.05);
    canvas.dataset.lastSpecial = isThirdJump ? "weakenedThirdJump" : "airJump";
  }

  function activateSkillBadge(icon, label, duration = 1.05) {
    skillBadge = { icon, label, remaining: duration, duration };
    canvas.dataset.skillBadge = label;
  }

  function triggerFlairMove(ability, preferredMove = "") {
    if (!Array.isArray(ability.flairMoves) || ability.flairMoves.length === 0) return;
    if (flairMoveCooldown > 0) return;
    if (staminaRatio() < 0.28) {
      activateSkillBadge("◇", "体力较低 · 简化动作", 0.82);
      canvas.dataset.lastFlairMove = "tiredBasicMove";
      return;
    }
    const move = preferredMove || ability.flairMoves[flairMoveIndex % ability.flairMoves.length];
    flairMoveIndex += 1;
    player.flairMove = move;
    player.flairElapsed = 0;
    player.flairDuration = move === "advancedHeelFlick" ? 0.72 : 0.58;
    flairMoveCooldown = 2.6;
    const labels = {
      explosiveStepover: "爆发跨步",
      advancedHeelFlick: "高级脚后跟挑球",
      dragToChop: "拉球切步",
    };
    activateSkillBadge("✦", labels[move] || "五星花式", 1.15);
    canvas.dataset.lastFlairMove = move;
    canvas.dataset.lastSpecial = "flairMove";
    playTone(690, 0.06, "triangle", 0.025, 0);
    playTone(940, 0.09, "square", 0.018, 0.05);
  }

  function setPlayerHeight(nextHeight) {
    if (player.h === nextHeight) return;
    const bottom = player.y + player.h;
    player.h = nextHeight;
    player.y = bottom - nextHeight;
  }

  function hasGroundAt(x) {
    return groundSegments.some((segment) => x >= segment.start && x <= segment.end);
  }

  function groundGapAt(x) {
    const ordered = [...groundSegments].sort((a, b) => a.start - b.start);
    for (let index = 0; index < ordered.length - 1; index += 1) {
      const start = ordered[index].end;
      const end = ordered[index + 1].start;
      if (end - start < 10) continue;
      if (x > start + 1 && x < end - 1) return { start, end, width: end - start };
    }
    return null;
  }

  function clearCliffFallState(rescued = false) {
    if (!cliffFallState) return;
    cliffFallState = null;
    if (rescued) cliffRescueGrace = Math.max(cliffRescueGrace, 0.95);
    canvas.dataset.cliffFallActive = "false";
    canvas.dataset.cliffRescueAvailable = "false";
    canvas.dataset.cliffRescueActive = "false";
    if (rescued) {
      canvas.dataset.lastSpecial = "cliffRescue";
      activateSkillBadge("↥", "悬崖救援", 0.95);
      announce("成功从悬崖边救回来了，继续前进！");
    }
  }

  function activateCliffRescue(ability, isThirdJump = false) {
    if (!cliffFallState?.active || Number(ability?.airJumps || 0) < 2) return false;
    cliffFallState.rescueActive = true;
    cliffFallState.rescueAttempts += 1;
    const remainingDistance = Math.max(0, cliffFallState.rescueTargetX - player.x);
    cliffFallState.rescueSpeed = Math.max(
      330,
      Math.min(560, runSpeed * (isThirdJump ? 1.34 : 1.16) + remainingDistance * 0.22),
    );
    canvas.dataset.cliffRescueActive = "true";
    canvas.dataset.cliffRescueAttempts = String(cliffFallState.rescueAttempts);
    return true;
  }

  function beginCliffFall(gap, ability) {
    if (!gap || cliffFallState?.active || cliffRescueGrace > 0) return;
    const minimumX = gap.start + 3;
    const maximumX = Math.max(minimumX, gap.end - player.w - 3);
    const lockedX = Math.max(minimumX, Math.min(maximumX, player.x));
    cliffFallState = {
      active: true,
      gapStart: gap.start,
      gapEnd: gap.end,
      lockedX,
      rescueDirection: 1,
      // Auto-run always continues to the right. Returning to the left lip made
      // a successful rescue immediately run into the same cliff again.
      rescueTargetX: gap.end + 14,
      safeLandingX: gap.end + 22,
      rescueActive: false,
      rescueAttempts: 0,
      rescueSpeed: 0,
      cameraX,
    };
    player.x = lockedX;
    player.vx = 0;
    canvas.dataset.cliffFallActive = "true";
    canvas.dataset.cliffGapStart = gap.start.toFixed(2);
    canvas.dataset.cliffGapEnd = gap.end.toFixed(2);
    canvas.dataset.cliffRescueAvailable = String(Number(ability?.airJumps || 0) >= 2 && player.airJumpsUsed < Number(ability?.airJumps || 0));
    canvas.dataset.cliffRescueActive = "false";
    if (Number(ability?.airJumps || 0) >= 2 && player.vy < 0 && player.airJumpsUsed > 0) {
      activateCliffRescue(ability, player.airJumpsUsed >= 2);
    }
    const canTripleRescue = Number(ability?.airJumps || 0) >= 2;
    if (canTripleRescue && cliffRescueHintsShown < 3) {
      cliffRescueHintsShown += 1;
      writeSetting("cloud-jumper-cliff-rescue-hints", cliffRescueHintsShown);
      activateSkillBadge("↗", "连续轻点跳跃可救回", 1.65);
      announce(`悬崖救援提示 ${cliffRescueHintsShown}/3：画面已停住，连续轻点补完三连跳，人物会向前方崖沿救回。`);
    } else {
      announce(canTripleRescue
        ? "掉进悬崖！画面已停住，三连跳人物还有机会向前补跳回来。"
        : "掉进悬崖！画面已停住。");
    }
  }

  function updateCliffFallState(dt, ability) {
    cliffRescueGrace = Math.max(0, cliffRescueGrace - dt);
    canvas.dataset.cliffRescueGrace = cliffRescueGrace.toFixed(3);
    if (!cliffFallState?.active) {
      if (cliffRescueGrace > 0) return;
      const center = player.x + player.w * 0.5;
      const gap = player.y + player.h > GROUND_Y + 0.5 ? groundGapAt(center) : null;
      if (gap) beginCliffFall(gap, ability);
      return;
    }

    player.vx = 0;
    canvas.dataset.cliffRescueAvailable = String(Number(ability?.airJumps || 0) >= 2 && player.airJumpsUsed < Number(ability?.airJumps || 0));
    if (!cliffFallState.rescueActive) {
      player.x = cliffFallState.lockedX;
      return;
    }

    const distance = cliffFallState.rescueTargetX - player.x;
    const step = Math.max(0, cliffFallState.rescueSpeed) * dt;
    if (Math.abs(distance) <= step) player.x = cliffFallState.rescueTargetX;
    else player.x += Math.sign(distance) * step;
    if (player.x >= cliffFallState.rescueTargetX - 0.5 && player.y + player.h >= GROUND_Y - 9) {
      player.x = cliffFallState.safeLandingX;
      player.y = GROUND_Y - player.h;
      player.vx = 0;
      player.vy = 0;
      player.onGround = true;
      player.surfaceY = GROUND_Y;
      player.invulnerable = Math.max(player.invulnerable, 0.72);
      player.airJumpsUsed = 0;
      player.jumpCycleLocked = false;
      player.pendingThirdJump = 0;
      player.thirdJumpRecovery = 0;
      clearCliffFallState(true);
    }
  }

  function horizontalOverlap(left, right, start, end) {
    return Math.min(right, end) - Math.max(left, start);
  }

  function getSurfaces() {
    const surfaces = groundSegments.map((segment) => ({
      start: segment.start,
      end: segment.end,
      y: GROUND_Y,
      kind: "ground",
    }));
    for (const hazard of hazards) {
      if (hazard.kind === "branch") {
        surfaces.push({
          start: hazard.x,
          end: hazard.x + hazard.w,
          y: hazard.y,
          kind: "platform",
        });
      }
    }
    return surfaces;
  }

  function findLandingSurface(previousBottom, currentBottom) {
    if (player.vy < 0) return null;
    const footLeft = player.x + 10;
    const footRight = player.x + player.w - 8;
    return getSurfaces()
      .filter((surface) =>
        horizontalOverlap(footLeft, footRight, surface.start, surface.end) >= 2 &&
        previousBottom <= surface.y + 7 &&
        currentBottom >= surface.y
      )
      .sort((a, b) => a.y - b.y)[0] || null;
  }

  function checkSpringBounce(previousBottom, currentBottom) {
    if (player.vy < 0) return false;
    const footLeft = player.x + 10;
    const footRight = player.x + player.w - 8;
    for (const spring of springs) {
      if (spring.used) continue;
      const overlaps = horizontalOverlap(footLeft, footRight, spring.x, spring.x + spring.w) >= 3;
      const crossesTop = previousBottom <= spring.y + 14 && currentBottom >= spring.y;
      if (!overlaps || !crossesTop) continue;
      spring.used = true;
      spring.bounceTime = 0.28;
      player.y = spring.y - player.h;
      player.vy = -850;
      player.onGround = false;
      beginPlayerFlip(currentCharacter());
      spawnCoinBurst(spring.x + spring.w * 0.5, spring.y - 8);
      playTone(320, 0.08, "square", 0.035, 0);
      playTone(640, 0.12, "square", 0.03, 0.07);
      canvas.dataset.lastSpecial = "spring";
      specialCounts.spring += 1;
      return true;
    }
    return false;
  }

  function findSafeGroundPosition(desiredX, width) {
    const minimum = player.x + runSpeed * 0.9 + 85;
    const wanted = Math.max(desiredX, minimum);
    const blockers = [
      ...hazards.map((hazard) => ({ start: hazard.x - 155, end: hazard.x + hazard.w + 110 })),
      ...enemies.filter((enemy) => enemy.alive).map((enemy) => ({ start: enemy.minX - 130, end: enemy.maxX + enemy.w + 110 })),
      ...crows.filter((crow) => crow.alive).map((crow) => ({ start: crow.minX - 115, end: crow.maxX + crow.w + 115 })),
      ...airplanes.filter((plane) => plane.active).map((plane) => ({ start: plane.minX - 135, end: plane.maxX + plane.w + 135 })),
      ...airplaneBombs.filter((bomb) => bomb.state !== "done").map((bomb) => ({ start: bomb.x - 110, end: bomb.x + 110 })),
      ...springs.map((spring) => ({ start: spring.x - 100, end: spring.x + spring.w + 100 })),
    ].sort((a, b) => a.start - b.start);
    for (const segment of groundSegments) {
      let start = Math.max(wanted, segment.start + 65);
      for (const blocker of blockers) {
        if (start + width <= blocker.start || start >= blocker.end) continue;
        start = blocker.end + 25;
      }
      if (start + width <= segment.end - 65 && start < levelEnd - 100) return start;
    }
    return null;
  }

  function findSafeHolePosition(desiredX, width) {
    const wanted = Math.max(desiredX, player.x + runSpeed * 0.78 + 70);
    const edgeMargin = currentLevel >= 5 ? 185 : 95;
    const blockers = [
      ...hazards.map((hazard) => ({ start: hazard.x - 45, end: hazard.x + hazard.w + 65 })),
      ...enemies.filter((enemy) => enemy.alive).map((enemy) => ({ start: enemy.minX - 55, end: enemy.maxX + enemy.w + 65 })),
      ...crows.filter((crow) => crow.alive).map((crow) => ({ start: crow.minX - 80, end: crow.maxX + crow.w + 80 })),
      ...airplanes.filter((plane) => plane.active).map((plane) => ({ start: plane.minX - 100, end: plane.maxX + plane.w + 100 })),
      ...airplaneBombs.filter((bomb) => bomb.state !== "done").map((bomb) => ({ start: bomb.x - 95, end: bomb.x + 95 })),
      ...springs.map((spring) => ({ start: spring.x - 45, end: spring.x + spring.w + 55 })),
    ].sort((a, b) => a.start - b.start);
    for (const segment of groundSegments) {
      let start = Math.max(wanted, segment.start + edgeMargin);
      for (const blocker of blockers) {
        if (start + width <= blocker.start || start >= blocker.end) continue;
        start = blocker.end + 28;
      }
      if (start + width <= segment.end - edgeMargin && start < levelEnd - 80) return start;
    }
    return null;
  }

  function findCaveGroundPosition(desiredX, width) {
    const wanted = Math.max(desiredX, player.x + runSpeed * 0.72 + 55);
    for (const segment of groundSegments) {
      const start = Math.max(wanted, segment.start + 38);
      if (start + width <= segment.end - 38 && start < caveEndX - 70) return start;
    }
    return null;
  }

  function findCaveHolePosition(desiredX, width) {
    const wanted = Math.max(desiredX, player.x + runSpeed * 0.68 + 58);
    for (const segment of groundSegments) {
      const start = Math.max(wanted, segment.start + 92);
      if (start + width <= segment.end - 92 && start < caveEndX - 90) return start;
    }
    return null;
  }

  function openDynamicHole(x, width) {
    const next = [];
    for (const segment of groundSegments) {
      if (x >= segment.end || x + width <= segment.start) {
        next.push(segment);
        continue;
      }
      if (x - segment.start > 5) next.push({ start: segment.start, end: x });
      if (segment.end - (x + width) > 5) next.push({ start: x + width, end: segment.end });
    }
    groundSegments = next.sort((a, b) => a.start - b.start);
  }

  function beginSpecialEvent(event) {
    if (event.kind === "fallingBranch") {
      const width = 72;
      const x = event.cave ? findCaveGroundPosition(player.x + runSpeed * 0.92 + 65, width) : findSafeGroundPosition(player.x + runSpeed * 1.25 + 95, width);
      if (x === null) {
        event.state = "done";
        return;
      }
      event.x = x;
      event.width = width;
      event.timer = Math.max(0.58, 0.92 - currentLevel * 0.025);
      event.state = "warning";
      canvas.dataset.warningKind = event.kind;
      canvas.dataset.warningX = event.x.toFixed(2);
      announce("小心！上面有树枝要掉下来！");
      playTone(260, 0.08, "square", 0.03, 0);
      playTone(220, 0.08, "square", 0.03, 0.12);
    } else if (event.kind === "surpriseHole") {
      const x = event.cave ? findCaveHolePosition(player.x + runSpeed * 0.78 + 68, event.width) : findSafeHolePosition(player.x + runSpeed * 0.92 + 92, event.width);
      if (x === null) {
        event.state = "done";
        return;
      }
      event.x = x;
      event.timer = Math.max(0.72, 1.08 - currentLevel * 0.025);
      event.state = "warning";
      canvas.dataset.warningKind = event.kind;
      canvas.dataset.warningX = event.x.toFixed(2);
      announce("注意！前面的地面正在裂开！");
      playTone(170, 0.1, "sawtooth", 0.028, 0);
      playTone(145, 0.12, "sawtooth", 0.028, 0.14);
    } else if (event.kind === "fallingBall") {
      const width = 38;
      const leadSeconds = Math.max(1.55, 2 - currentLevel * 0.04);
      const x = event.cave ? findCaveGroundPosition(player.x + runSpeed * 0.86 + 55, width) : findSafeGroundPosition(player.x + runSpeed * leadSeconds + 45, width);
      if (x === null) {
        event.state = "done";
        return;
      }
      event.x = x;
      event.width = width;
      event.timer = Math.max(0.56, 1.02 - currentLevel * 0.045);
      event.state = "warning";
      canvas.dataset.warningKind = event.kind;
      canvas.dataset.warningX = event.x.toFixed(2);
      announce("注意落点！足球正在从上面掉下来！");
      playTone(410, 0.06, "triangle", 0.025, 0);
      playTone(330, 0.08, "triangle", 0.024, 0.1);
    } else if (event.kind === "fallingRock") {
      const width = 44;
      const leadSeconds = Math.max(1.42, 1.82 - currentLevel * 0.03);
      const x = event.cave ? findCaveGroundPosition(player.x + runSpeed * 0.84 + 52, width) : findSafeGroundPosition(player.x + runSpeed * leadSeconds + 35, width);
      if (x === null) {
        event.state = "done";
        return;
      }
      event.x = x;
      event.width = width;
      event.timer = Math.max(0.55, 0.96 - currentLevel * 0.04);
      event.state = "warning";
      canvas.dataset.warningKind = event.kind;
      canvas.dataset.warningX = event.x.toFixed(2);
      announce("小心！大石头要砸下来了！");
      playTone(190, 0.09, "sawtooth", 0.028, 0);
      playTone(150, 0.11, "sawtooth", 0.027, 0.12);
    } else if (event.kind === "doubleDrop") {
      const width = 132;
      const x = event.cave ? findCaveGroundPosition(player.x + runSpeed * 0.95 + 60, width) : findSafeGroundPosition(player.x + runSpeed * 1.55 + 50, width);
      if (x === null) {
        event.state = "done";
        return;
      }
      event.x = x;
      event.width = width;
      event.timer = Math.max(0.52, 0.9 - currentLevel * 0.035);
      event.state = "warning";
      canvas.dataset.warningKind = event.kind;
      canvas.dataset.warningX = event.x.toFixed(2);
      announce("双重意外！足球和石头同时坠落！");
      playTone(270, 0.07, "square", 0.03, 0);
      playTone(130, 0.12, "sawtooth", 0.03, 0.1);
    } else if (event.kind === "crowRush") {
      const width = 110;
      const x = event.cave ? findCaveGroundPosition(player.x + runSpeed * 0.9 + 62, width) : findSafeGroundPosition(player.x + runSpeed * 1.35 + 60, width);
      if (x === null) {
        event.state = "done";
        return;
      }
      event.x = x;
      event.width = width;
      event.timer = Math.max(0.56, 0.94 - currentLevel * 0.03);
      event.state = "warning";
      canvas.dataset.warningKind = event.kind;
      canvas.dataset.warningX = event.x.toFixed(2);
      announce("乌鸦群突然冲过来了！低飞的要蹲下！");
      playTone(360, 0.06, "sawtooth", 0.025, 0);
      playTone(290, 0.09, "sawtooth", 0.024, 0.09);
    }
  }

  function updateSpecialEvents(dt) {
    for (const spring of springs) {
      spring.bounceTime = Math.max(0, (spring.bounceTime || 0) - dt);
    }
    let warningActive = specialEvents.some((event) => event.state === "warning");
    for (const event of specialEvents) {
      const reachedTrigger = Number.isFinite(event.triggerX)
        ? player.x >= event.triggerX
        : scoreFloat >= Number(event.triggerScore);
      if (event.state === "idle" && reachedTrigger && !warningActive) {
        beginSpecialEvent(event);
        warningActive = event.state === "warning";
      } else if (event.state === "warning") {
        event.timer -= dt;
        if (event.timer > 0) continue;
        if (event.kind === "fallingBranch") {
          fallingBranches.push({
            x: event.x,
            y: -55,
            w: event.width,
            h: 27,
            vy: 40,
            state: "falling",
          });
          event.state = "done";
          canvas.dataset.warningKind = "";
          canvas.dataset.warningX = "";
        } else if (event.kind === "fallingBall") {
          fallingBalls.push({
            x: event.x + event.width * 0.5,
            y: -35,
            radius: 17,
            vy: 45,
            rotation: 0,
            state: "falling",
          });
          event.state = "done";
          canvas.dataset.warningKind = "";
          canvas.dataset.warningX = "";
        } else if (event.kind === "fallingRock") {
          fallingRocks.push({
            x: event.x + event.width * 0.5,
            y: -42,
            radius: 21,
            vy: 55,
            rotation: 0,
            state: "falling",
          });
          event.state = "done";
          canvas.dataset.warningKind = "";
          canvas.dataset.warningX = "";
        } else if (event.kind === "doubleDrop") {
          fallingBalls.push({
            x: event.x + 25,
            y: -35,
            radius: 17,
            vy: 45,
            rotation: 0,
            state: "falling",
          });
          fallingRocks.push({
            x: event.x + event.width - 25,
            y: -70,
            radius: 22,
            vy: 35,
            rotation: 0,
            state: "falling",
          });
          specialCounts.doubleDrop += 1;
          event.state = "done";
          canvas.dataset.warningKind = "";
          canvas.dataset.warningX = "";
          canvas.dataset.lastSpecial = "doubleDrop";
        } else if (event.kind === "crowRush") {
          const speed = 78 + currentLevel * 8;
          crows.push(
            { x: event.x, minX: event.x - 70, maxX: event.x + 120, baseY: 383, y: 383, speed, direction: -1, w: 48, h: 28, phase: 0, alive: true },
            { x: event.x + 88, minX: event.x - 20, maxX: event.x + 170, baseY: 292, y: 292, speed: speed + 14, direction: -1, w: 48, h: 28, phase: Math.PI, alive: true },
          );
          specialCounts.crowRush += 1;
          specialCounts.crow += 2;
          event.state = "done";
          canvas.dataset.warningKind = "";
          canvas.dataset.warningX = "";
          canvas.dataset.lastSpecial = "crowRush";
        } else if (event.kind === "surpriseHole") {
          openDynamicHole(event.x, event.width);
          event.state = "open";
          canvas.dataset.warningKind = "";
          canvas.dataset.warningX = "";
          shakeTime = 0.24;
          canvas.dataset.lastSpecial = "surpriseHole";
          specialCounts.surpriseHole += 1;
          playTone(105, 0.2, "sawtooth", 0.04, 0);
        }
      }
    }
  }

  function updateFallingBalls(dt) {
    for (const ball of fallingBalls) {
      if (ball.state === "done") continue;
      ball.vy += 1380 * dt;
      ball.y += ball.vy * dt;
      ball.rotation += dt * (ball.state === "falling" ? 7 : 11);
      if (ball.y + ball.radius >= GROUND_Y && ball.vy > 0) {
        ball.y = GROUND_Y - ball.radius;
        if (ball.state === "falling") {
          ball.state = "bounce";
          ball.vy = -390;
          specialCounts.fallingBall += 1;
          shakeTime = 0.16;
          canvas.dataset.lastSpecial = "fallingBall";
          playTone(125, 0.08, "triangle", 0.035, 0);
          playTone(250, 0.1, "square", 0.024, 0.06);
        } else {
          ball.state = "done";
        }
      }
    }
    fallingBalls = fallingBalls.filter((ball) => ball.state !== "done" && ball.y < WORLD_HEIGHT + 80);
    canvas.dataset.activeFallingBalls = String(fallingBalls.length);
  }

  function updateFallingRocks(dt) {
    for (const rock of fallingRocks) {
      if (rock.state !== "falling") continue;
      rock.vy += 1480 * dt;
      rock.y += rock.vy * dt;
      rock.rotation += dt * 4.8;
      if (rock.y + rock.radius >= GROUND_Y) {
        rock.y = GROUND_Y - rock.radius;
        rock.state = "landed";
        hazards.push({
          kind: "rock",
          x: rock.x - rock.radius,
          w: rock.radius * 2,
          h: rock.radius * 2,
          dropped: true,
        });
        specialCounts.fallingRock += 1;
        shakeTime = 0.22;
        canvas.dataset.lastSpecial = "fallingRock";
        playTone(82, 0.16, "triangle", 0.045, 0);
      }
    }
    fallingRocks = fallingRocks.filter((rock) => rock.state === "falling");
    canvas.dataset.activeFallingRocks = String(fallingRocks.length);
  }

  function updateFallingBranches(dt) {
    for (const branch of fallingBranches) {
      if (branch.state !== "falling") continue;
      branch.vy += 1320 * dt;
      branch.y += branch.vy * dt;
      if (branch.y + branch.h >= GROUND_Y) {
        branch.y = GROUND_Y - branch.h;
        branch.state = "landed";
        hazards.push({
          kind: "fallenBranch",
          x: branch.x,
          y: branch.y,
          w: branch.w,
          h: branch.h,
        });
        shakeTime = 0.22;
        playTone(90, 0.16, "triangle", 0.045, 0);
        canvas.dataset.lastSpecial = "fallingBranch";
        specialCounts.fallingBranch += 1;
      }
    }
    fallingBranches = fallingBranches.filter((branch) => branch.state === "falling");
  }

  function applyBlackHoleForces(dt) {
    canvas.dataset.blackHolePull = "false";
    const centerX = player.x + player.w * 0.5;
    const centerY = player.y + player.h * 0.5;
    for (const hole of hazards) {
      if (hole.kind !== "blackHole") continue;
      const holeX = hole.x + hole.w * 0.5;
      const holeY = hole.y + hole.h * 0.5;
      const dx = holeX - centerX;
      const dy = holeY - centerY;
      const distance = Math.hypot(dx, dy);
      if (distance >= 185 || distance < 1) continue;
      const strength = (1 - distance / 185) * (hole.pull || 1);
      player.x += (dx / distance) * strength * 42 * dt;
      if (!player.onGround) player.vy += (dy / distance) * strength * 360 * dt;
      canvas.dataset.blackHolePull = "true";
    }
  }

  function updateCrows(dt) {
    let active = 0;
    for (const crow of crows) {
      if (!crow.alive) continue;
      active += 1;
      crow.x += crow.speed * crow.direction * dt;
      if (crow.x <= crow.minX) {
        crow.x = crow.minX;
        crow.direction = 1;
      } else if (crow.x >= crow.maxX) {
        crow.x = crow.maxX;
        crow.direction = -1;
      }
      crow.y = crow.baseY + Math.sin(elapsed * 4.4 + crow.phase) * 8;
    }
    canvas.dataset.activeCrows = String(active);
  }

  function updateAirplanes(dt) {
    let active = 0;
    for (const plane of airplanes) {
      if (!plane.active) continue;
      active += 1;
      plane.x += plane.speed * plane.direction * dt;
      if (plane.x <= plane.minX) {
        plane.x = plane.minX;
        plane.direction = 1;
      } else if (plane.x >= plane.maxX) {
        plane.x = plane.maxX;
        plane.direction = -1;
      }
      plane.y = plane.baseY + Math.sin(elapsed * 2.8 + plane.phase) * 7;
      plane.dropCooldown = Math.max(0, Number(plane.dropCooldown || 0) - dt);
      if (plane.dropsRemaining <= 0 || plane.dropCooldown > 0) continue;

      const lead = plane.x - player.x;
      const minimumLead = Math.max(235, runSpeed * 0.5);
      const maximumLead = Math.max(590, runSpeed * 1.08 + 170);
      const nearbyBomb = airplaneBombs.some((bomb) => bomb.state !== "done" && Math.abs(bomb.x - player.x) < 410);
      const warningBusy = specialEvents.some((event) => event.state === "warning");
      if (lead < minimumLead || lead > maximumLead || nearbyBomb || warningBusy) continue;

      airplaneBombs.push({
        id: `${plane.id}-bomb-${plane.dropsRemaining}-${Math.round(elapsed * 1000)}`,
        sourcePlaneId: plane.id,
        x: plane.x + plane.w * 0.5,
        y: plane.y + plane.h - 2,
        radius: 11,
        vy: 35,
        rotation: 0,
        state: "falling",
        timer: 0,
        explosionDuration: 0.52,
        explosionRadius: 62 + Math.min(18, currentLevel * 0.9),
        damagedPlayer: false,
      });
      plane.dropsRemaining -= 1;
      plane.dropCooldown = Math.max(1.65, 2.8 - currentLevel * 0.045) + (plane.phase % 0.45);
      specialCounts.airplaneBomb += 1;
      canvas.dataset.lastSpecial = "airplaneBombDrop";
      if (specialCounts.airplaneBomb === 1) announce("小心飞机！它正在向地面投放炸弹！");
      playTone(245, 0.06, "sawtooth", 0.022, 0);
      playTone(190, 0.08, "triangle", 0.02, 0.07);
    }
    canvas.dataset.activeAirplanes = String(active);
  }

  function updateAirplaneBombs(dt) {
    for (const bomb of airplaneBombs) {
      if (bomb.state === "falling") {
        bomb.vy += 1120 * dt;
        bomb.y += bomb.vy * dt;
        bomb.rotation += dt * 5.5;
        if (bomb.y + bomb.radius >= GROUND_Y && bomb.vy > 0 && hasGroundAt(bomb.x)) {
          bomb.y = GROUND_Y - 3;
          bomb.state = "exploding";
          bomb.timer = bomb.explosionDuration;
          specialCounts.bombExplosion += 1;
          canvas.dataset.lastSpecial = "airplaneBombExplosion";
          shakeTime = Math.max(shakeTime, 0.19);
          spawnHitBurst(bomb.x, GROUND_Y - 8);
          spawnHitBurst(bomb.x, GROUND_Y - 8);
          playTone(78, 0.13, "sawtooth", 0.045, 0);
          playTone(126, 0.09, "square", 0.032, 0.04);
        } else if (bomb.y > WORLD_HEIGHT + 80) {
          bomb.state = "done";
        }
      } else if (bomb.state === "exploding") {
        bomb.timer -= dt;
        if (bomb.timer <= 0) bomb.state = "done";
      }
    }
    airplaneBombs = airplaneBombs.filter((bomb) => bomb.state !== "done");
    canvas.dataset.activeAirplaneBombs = String(airplaneBombs.length);
  }

  function checkFallingBranchCollision(previousX, previousY) {
    const playerBoxes = getSweptPlayerHitboxes(previousX, previousY);
    for (const branch of fallingBranches) {
      const rect = { x: branch.x + 4, y: branch.y + 3, w: branch.w - 8, h: branch.h - 6 };
      if (playerBoxes.some((box) => rectsOverlap(box, rect))) {
        handleDamage(false, 1, "fallingBranch");
        return true;
      }
    }
    return false;
  }

  function update(dt) {
    elapsed += dt;
    updateBgm(dt);
    shakeTime = Math.max(0, shakeTime - dt);
    player.invulnerable = Math.max(0, player.invulnerable - dt);
    jumpBuffer = Math.max(0, jumpBuffer - dt);
    skillBadge.remaining = Math.max(0, skillBadge.remaining - dt);
    flairMoveCooldown = Math.max(0, flairMoveCooldown - dt);
    if (skillBadge.remaining <= 0) canvas.dataset.skillBadge = "";
    if (player.flairDuration > 0) {
      player.flairElapsed = Math.min(player.flairDuration, player.flairElapsed + dt);
      if (player.flairElapsed >= player.flairDuration) player.flairMove = "";
    }

    const ability = currentCharacter();
    player.thirdJumpRecovery = Math.max(0, Number(player.thirdJumpRecovery || 0) - dt);
    if (player.pendingThirdJump > 0) {
      player.pendingThirdJump = Math.max(0, player.pendingThirdJump - dt);
      if (player.pendingThirdJump <= 0 && !player.onGround) performAirJump(ability, true);
    }
    if (player.onGround) {
      coyoteTime = selectedCharacter === "cloud" && (currentLevel === 8 || currentLevel === 9)
        ? 0.075
        : 0.082 + Math.min(0.04, effectiveAgility(ability) * 0.023);
    }
    else coyoteTime = Math.max(0, coyoteTime - dt);

    if (jumpBuffer > 0) {
      if (coyoteTime > 0) {
        setPlayerHeight(NORMAL_HEIGHT);
        const jumpStrength = 0.96 + staminaRatio() * 0.04;
        player.vy = -ability.jumpPower * jumpStrength;
        consumeStamina(6);
        player.onGround = false;
        beginPlayerFlip(ability);
        coyoteTime = 0;
        jumpBuffer = 0;
        spawnDust(player.x + player.w * 0.5, player.surfaceY - 2, "#f2d893", 6);
        playTone(430, 0.075, "square", 0.033, 0);
        playTone(610, 0.06, "square", 0.02, 0.055);
      } else if (!player.onGround && player.airJumpsUsed < ability.airJumps) {
        player.airJumpsUsed += 1;
        if (player.airJumpsUsed >= ability.airJumps) player.jumpCycleLocked = true;
        const isThirdJump = player.airJumpsUsed >= 2;
        if (isThirdJump && !ability.instantTripleJump) {
          player.pendingThirdJump = 0.12;
          player.thirdJumpRecovery = 0.3;
          activateSkillBadge("◇", "第三跳蓄力", 0.45);
          canvas.dataset.lastSpecial = "thirdJumpDelay";
        } else {
          performAirJump(ability, isThirdJump);
        }
        jumpBuffer = 0;
      }
    }

    const shouldCrouch = (keyboardCrouchHeld || pointerCrouchHeld) && player.onGround;
    setPlayerHeight(shouldCrouch ? CROUCH_HEIGHT : NORMAL_HEIGHT);

    const movingRight = keyboardMoveRightHeld || controllerMoveRightHeld;
    const movingLeft = keyboardMoveLeftHeld || controllerMoveLeftHeld;
    const moveAxis = movingLeft && !movingRight ? -1 : 1;
    const boosting = Boolean(!cliffFallState?.active && ability.speedBoost > 1 && moveAxis > 0 && player.thirdJumpRecovery <= 0 && (keyboardBoostHeld || pointerBoostHeld));
    updateRunStamina(dt, ability, boosting);
    const effectiveBoost = ability.speedBoost > 1
      ? 1 + (ability.speedBoost - 1) * (0.72 + staminaRatio() * 0.28)
      : 1;
    if (boosting && !boostWasActive) {
      if (Array.isArray(ability.flairMoves) && ability.flairMoves.length > 0) triggerFlairMove(ability, ability.flairMoves[0]);
      else if (selectedCharacter === "qiang") activateSkillBadge("💪", "肌肉爆发", 0.9);
      else activateSkillBadge("⚡", "极速爆发", 0.9);
    }
    boostWasActive = boosting;
    const previousX = player.x;
    const previousY = player.y;
    const agility = effectiveAgility(ability);
    const agilitySpeed = 0.96 + Math.max(-0.06, Math.min(0.08, (agility - 1) * 0.2));
    const accelerationSpan = battleModeActive ? 42 : Math.max(24, levelBaseDuration(currentLevel) * 0.78);
    const accelerationProgress = Math.max(0, Math.min(1, elapsed / accelerationSpan));
    const accelerationPeak = currentLevel >= 15 ? 1.36 : currentLevel >= 10 ? 1.29 : 1.22;
    const automaticSpeedFactor = 0.88 + (accelerationPeak - 0.88) * accelerationProgress;
    const targetVelocity = cliffFallState?.active
      ? 0
      : runSpeed * agilitySpeed * automaticSpeedFactor * (moveAxis > 0 ? 1 : -0.58) * (boosting ? effectiveBoost : 1);
    const velocityDifference = targetVelocity - (Number(player.vx) || 0);
    const acceleration = (940 + agility * 540) * dt;
    player.vx += Math.max(-acceleration, Math.min(acceleration, velocityDifference));
    player.x += player.vx * dt;
    if (player.x < START_X - 55) {
      player.x = START_X - 55;
      player.vx = Math.max(0, player.vx);
    }
    canvas.dataset.boosting = String(boosting);
    canvas.dataset.playerVx = player.vx.toFixed(2);
    canvas.dataset.moveAxis = String(moveAxis);
    canvas.dataset.autoRun = "true";
    canvas.dataset.autoAcceleration = automaticSpeedFactor.toFixed(3);
    if (boosting) {
      boostSparkTimer -= dt;
      if (boostSparkTimer <= 0) {
        boostSparkTimer = 0.055;
        const colors = selectedCharacter === "mbappe"
          ? ["#6bd9ff", "#fff4a8", "#ffffff"]
          : ["#ffb15e", "#fff0a3", "#ffffff"];
        for (let i = 0; i < 3; i += 1) {
          particles.push({
            x: player.x + 4,
            y: player.y + 18 + Math.random() * 38,
            vx: -145 - Math.random() * 115,
            vy: (Math.random() - 0.5) * 45,
            gravity: 0,
            life: 0.26,
            maxLife: 0.26,
            size: 2.5 + Math.random() * 3,
            color: colors[i],
            shape: i === 1 ? "star" : "circle",
          });
        }
      }
    } else {
      boostSparkTimer = 0;
    }
    applyBlackHoleForces(dt);
    if (caveEnabled) {
      scoreFloat = player.x < caveStartX
        ? Math.max(0, Math.min(99, ((player.x - START_X) / Math.max(1, caveStartX - START_X)) * 99))
        : (player.x >= caveEndX ? TARGET_SCORE : 99);
    } else {
      scoreFloat = Math.max(0, Math.min(TARGET_SCORE,
        ((player.x - START_X) / Math.max(1, levelEnd - START_X)) * TARGET_SCORE));
    }
    const caveActive = caveEnabled && player.x >= caveStartX && player.x < caveEndX;
    canvas.dataset.caveActive = String(caveActive);
    if (caveActive && !caveAnnounced) activateCaveEntry();
    canvas.dataset.caveEntryProtected = String(caveEntryProtectionActive());
    if (caveActive) {
      const fadeDistance = Math.max(1, runSpeed * 3.2);
      const rawDarkness = Math.max(0, Math.min(1, (player.x - caveStartX) / fadeDistance));
      caveDarknessProgress = rawDarkness * rawDarkness * (3 - 2 * rawDarkness);
    } else {
      caveDarknessProgress = 0;
    }
    canvas.dataset.caveDarknessProgress = caveDarknessProgress.toFixed(3);
    previousScoreX = player.x;
    const previousBottom = player.y + player.h;
    player.vy += GRAVITY * (ability.gravityScale || 1) * dt;
    player.y += player.vy * dt;
    updateCliffFallState(dt, ability);

    updateSpecialEvents(dt);
    updateFallingBranches(dt);
    updateFallingBalls(dt);
    updateFallingRocks(dt);
    updateAirplanes(dt);
    updateAirplaneBombs(dt);

    const springBounced = checkSpringBounce(previousBottom, player.y + player.h);
    const landingSurface = springBounced ? null : findLandingSurface(previousBottom, player.y + player.h);
    if (springBounced) {
      player.onGround = false;
    } else if (landingSurface) {
      const wasAirborne = !player.onGround;
      const rescuedFromCliff = Boolean(cliffFallState?.active);
      player.y = landingSurface.y - player.h;
      player.vy = 0;
      player.onGround = true;
      player.surfaceY = landingSurface.y;
      if (wasAirborne) {
        player.airJumpsUsed = 0;
        player.jumpCycleLocked = false;
        player.pendingThirdJump = 0;
      }
      if (player.flipDuration > 0 && player.flipTurns > 0) {
        player.flipElapsed = player.flipDuration;
        player.flipAngle = player.flipTurns * Math.PI * 2;
      }
      if (wasAirborne) {
        spawnDust(player.x + player.w * 0.5, landingSurface.y - 2, "#e8cb83", 4);
        spawnPremiumLandingBurst(player.x + player.w * 0.5, landingSurface.y);
      }
      if (rescuedFromCliff) clearCliffFallState(true);
    } else if (player.onGround && cliffRescueGrace > 0 && Math.abs(player.y + player.h - GROUND_Y) <= 1.5) {
      player.vy = 0;
      player.surfaceY = GROUND_Y;
    } else {
      player.onGround = false;
    }

    if (!player.onGround && player.flipDuration > 0 && player.flipTurns > 0) {
      player.flipElapsed = Math.min(player.flipDuration, player.flipElapsed + dt);
      const flipProgress = Math.min(1, player.flipElapsed / player.flipDuration);
      player.flipAngle = flipProgress * player.flipTurns * Math.PI * 2;
    }

    if ((keyboardCrouchHeld || pointerCrouchHeld) && player.onGround) {
      setPlayerHeight(CROUCH_HEIGHT);
      player.y = player.surfaceY - CROUCH_HEIGHT;
    }

    canvas.dataset.playerPose = player.onGround
      ? ((keyboardCrouchHeld || pointerCrouchHeld) ? "crouch" : Math.abs(player.vx || 0) > 8 ? "run" : "idle")
      : "air";
    canvas.dataset.playerX = player.x.toFixed(2);
    canvas.dataset.playerY = player.y.toFixed(2);
    canvas.dataset.playerVy = player.vy.toFixed(2);
    canvas.dataset.playerHeight = String(player.h);
    canvas.dataset.surfaceY = player.surfaceY.toFixed(2);
    canvas.dataset.crouchHeld = String(keyboardCrouchHeld || pointerCrouchHeld);
    canvas.dataset.levelScore = Math.round(scoreFloat).toString();
    canvas.dataset.elapsedSeconds = elapsed.toFixed(2);
    canvas.dataset.airJumpsRemaining = String(Math.max(0, ability.airJumps - player.airJumpsUsed));
    canvas.dataset.jumpCycleLocked = String(player.jumpCycleLocked);
    canvas.dataset.pendingThirdJump = Number(player.pendingThirdJump || 0).toFixed(3);
    canvas.dataset.thirdJumpRecovery = Number(player.thirdJumpRecovery || 0).toFixed(3);
    canvas.dataset.playerFlipAngle = player.flipAngle.toFixed(3);
    canvas.dataset.specialCounts = JSON.stringify(specialCounts);

    for (const checkpoint of checkpointPositions) {
      if (player.x > checkpoint + 100) checkpointX = checkpoint;
    }

    for (const enemy of enemies) {
      if (!enemy.alive) continue;
      enemy.x += enemy.speed * enemy.direction * dt;
      if (enemy.x < enemy.minX) {
        enemy.x = enemy.minX;
        enemy.direction = 1;
      } else if (enemy.x > enemy.maxX) {
        enemy.x = enemy.maxX;
        enemy.direction = -1;
      }
    }

    updateCrows(dt);

    updatePremiumCharacterEffects(dt, boosting);
    updateParticles(dt);
    collectCoins();
    updateBattleRuntime(dt);

    if (player.invulnerable <= 0) {
      if (checkHazardCollision(previousX, previousY, previousBottom)) return;
    }

    const fullyBelowScreen = player.y > WORLD_HEIGHT + 12;
    if (fullyBelowScreen) {
      handleDamage(true, 2, "fall");
      return;
    }

    if (battleModeActive) {
      if (player.x >= levelEnd) resetBattleLap();
      score = Math.max(0, Math.round(battleScore));
      updateHud();
      return;
    }

    if (scoreFloat >= TARGET_SCORE || player.x >= levelEnd) {
      completeLevel();
      return;
    }

    score = Math.max(0, Math.round(scoreFloat));
    updateHud();
  }

  function collectCoins() {
    const px = player.x + player.w * 0.5;
    const py = player.y + player.h * 0.5;
    const ability = currentCharacter();
    const magnet = crabTripleActive && selectedCharacter === "krabs"
      ? Math.max(ability.magnetRadius || 0, ability.tripleMagnetRadius || 0)
      : ability.magnetRadius || 0;
    for (const coin of coins) {
      if (coin.collected) continue;
      if (coin.requiresCombo && player.airJumpsUsed < 1) continue;
      const dx = px - coin.x;
      const dy = py - coin.y;
      const collectRadius = (coin.big ? 40 : 34) + magnet;
      if (dx * dx + dy * dy < collectRadius * collectRadius) {
        coin.collected = true;
        const value = coin.value || 1;
        coinCount += value;
        canvas.dataset.levelCoins = String(coinCount);
        runCoinPickupCount += 1;
        let walletReward = 0;
        if (battleModeActive) {
          const now = Date.now();
          battleCombo = now - battleLastCoinAt <= 2300 ? battleCombo + 1 : 1;
          battleLastCoinAt = now;
          battleBestCombo = Math.max(battleBestCombo, battleCombo);
          const comboBonus = battleCombo > 0 && battleCombo % 5 === 0 ? 2 : 0;
          battleScore += (coin.big ? 5 : 1) + comboBonus;
          battleCoinUnits += coin.big ? 5 : 1;
          if (coin.big) battleBigCoins += 1;
          updateBattleHud();
        } else {
          const pickupStep = currentLevel >= 15 ? 4 : 2;
          walletReward = coin.big ? 3 : (runCoinPickupCount % pickupStep === 0 ? 1 : 0);
          if (crabTripleActive && selectedCharacter === "krabs") walletReward *= 3;
          walletCoins += walletReward;
          runCoinsEarned += walletReward;
        }
        canvas.dataset.runCoinsEarned = String(runCoinsEarned);
        canvas.dataset.lastCoinWalletReward = String(walletReward);
        canvas.dataset.lastCoinTriple = String(Boolean(crabTripleActive && selectedCharacter === "krabs" && walletReward > 0));
        if (walletReward > 0) updateWalletUi();
        if (levelMission && !missionComplete && coinCount >= levelMission.target) {
          missionComplete = true;
          smashCharges += 1;
          announce("任务完成！下一次碰到石头会把它撞碎。");
          playTone(520, 0.08, "square", 0.035, 0);
          playTone(780, 0.13, "square", 0.03, 0.08);
        }
        updateMissionHud();
        spawnCoinBurst(coin.x, coin.y);
        if (coin.big) {
          if (characterVisualTier() >= 2) spawnPremiumLandingBurst(coin.x, coin.y + 18);
          specialCounts.bigCoin += 1;
          canvas.dataset.lastSpecial = "bigCoin";
          spawnCoinBurst(coin.x, coin.y);
          playTone(620, 0.08, "square", 0.035, 0);
          playTone(880, 0.11, "triangle", 0.035, 0.07);
          playTone(1120, 0.14, "square", 0.025, 0.15);
        } else {
          playTone(760, 0.055, "square", 0.03, 0);
          playTone(980, 0.07, "square", 0.02, 0.045);
        }
      }
    }
  }

  function getPlayerHitboxes(x = player.x, y = player.y, height = player.h) {
    if (height === CROUCH_HEIGHT) {
      return [{ x: x + 6, y: y + 5, w: 32, h: 28 }];
    }
    return [
      { x: x + 10, y: y + 3, w: 26, h: 25 },
      { x: x + 7, y: y + 27, w: 31, h: 25 },
      { x: x + 9, y: y + 52, w: 27, h: 8 },
    ];
  }

  function getSweptPlayerHitboxes(previousX, previousY) {
    const before = getPlayerHitboxes(previousX, previousY, player.h);
    const now = getPlayerHitboxes();
    return now.map((box, index) => {
      const old = before[index] || before[before.length - 1];
      const left = Math.min(box.x, old.x);
      const top = Math.min(box.y, old.y);
      const right = Math.max(box.x + box.w, old.x + old.w);
      const bottom = Math.max(box.y + box.h, old.y + old.h);
      return { x: left, y: top, w: right - left, h: bottom - top };
    });
  }

  function rockPolygon(hazard) {
    const y = GROUND_Y - hazard.h;
    return [
      { x: hazard.x + 5, y: GROUND_Y - 2 },
      { x: hazard.x + 10, y: y + hazard.h * 0.44 },
      { x: hazard.x + hazard.w * 0.37, y: y + 5 },
      { x: hazard.x + hazard.w * 0.75, y: y + 12 },
      { x: hazard.x + hazard.w - 4, y: GROUND_Y - 2 },
    ];
  }

  function checkHazardCollision(previousX, previousY, previousBottom) {
    const playerBoxes = getSweptPlayerHitboxes(previousX, previousY);

    for (const hazard of hazards) {
      let touched = false;
      if (hazard.kind === "rock") {
        touched = playerBoxes.some((box) => rectPolygonOverlap(box, rockPolygon(hazard)));
      } else if (hazard.kind === "blackHole") {
        touched = playerBoxes.some((box) => rectCircleOverlap(
          box,
          hazard.x + hazard.w * 0.5,
          hazard.y + hazard.h * 0.5,
          Math.min(hazard.w * 0.31, hazard.h * 0.42),
        ));
      } else if (hazard.kind === "branch") {
        // Low layer-two branches are one-way platforms from above, but their
        // underside is a real ceiling: stand up and collide, hold crouch to pass.
        const cameFromBelow = previousBottom > hazard.y + hazard.h + 2;
        touched = Boolean(hazard.crouchObstacle && cameFromBelow && playerBoxes.some((box) => rectsOverlap(box, {
          x: hazard.x + 7,
          y: hazard.y + 3,
          w: hazard.w - 14,
          h: hazard.h - 4,
        })));
      } else {
        touched = playerBoxes.some((box) => rectsOverlap(box, {
          x: hazard.x + 4,
          y: hazard.y + 3,
          w: hazard.w - 8,
          h: hazard.h - 5,
        }));
      }
      if (touched) {
        if (hazard.kind === "rock" && currentCharacter().stoneImmune) {
          hazards = hazards.filter((item) => item !== hazard);
          triggerPowerSmash(hazard.x + hazard.w * 0.5, GROUND_Y - hazard.h * 0.55, "rock");
          return false;
        }
        if (hazard.kind === "rock" && smashCharges > 0) {
          smashCharges -= 1;
          hazards = hazards.filter((item) => item !== hazard);
          if (selectedCharacter === "krabs") {
            triggerCrabSmash(hazard.x + hazard.w * 0.5, GROUND_Y - hazard.h * 0.5, "rock");
            canvas.dataset.smashCharges = String(smashCharges);
            updateMissionHud();
            return false;
          }
          if (selectedCharacter === "yuanyuan") {
            triggerYuanyuanSmash(hazard.x + hazard.w * 0.5, GROUND_Y - hazard.h * 0.5, "rock");
            canvas.dataset.smashCharges = String(smashCharges);
            updateMissionHud();
            return false;
          }
          shakeTime = 0.22;
          spawnHitBurst(hazard.x + hazard.w * 0.5, GROUND_Y - hazard.h * 0.5);
          playTone(105, 0.12, "sawtooth", 0.045, 0);
          playTone(340, 0.09, "square", 0.03, 0.08);
          canvas.dataset.lastSpecial = "rockSmash";
          canvas.dataset.smashCharges = String(smashCharges);
          activateSkillBadge("✦", "任务碎石", 0.95);
          announce("任务能力发动：石头被撞碎了！");
          updateMissionHud();
          return false;
        }
        handleDamage(false, hazard.kind === "blackHole" ? 2 : 1, hazard.kind);
        return true;
      }
    }

    for (const enemy of enemies) {
      if (!enemy.alive) continue;
      const rect = { x: enemy.x + 4, y: enemy.y + 3, w: enemy.w - 8, h: enemy.h - 3 };
      if (!playerBoxes.some((box) => rectsOverlap(box, rect))) continue;

      const stomped = player.vy > 110 && previousBottom <= enemy.y + 13;
      if (stomped) {
        enemy.alive = false;
        player.vy = -425;
        player.onGround = false;
        spawnEnemyBurst(enemy.x + enemy.w * 0.5, enemy.y + 10);
        playTone(245, 0.06, "square", 0.035, 0);
        playTone(360, 0.08, "square", 0.025, 0.05);
      } else {
        handleDamage(false, 1, "enemy");
        return true;
      }
    }


    for (const crow of crows) {
      if (!crow.alive) continue;
      const rect = { x: crow.x + 7, y: crow.y + 5, w: crow.w - 14, h: crow.h - 9 };
      if (!playerBoxes.some((box) => rectsOverlap(box, rect))) continue;
      const stomped = player.vy > 130 && previousBottom <= crow.y + 11;
      if (stomped) {
        crow.alive = false;
        player.vy = -390;
        player.onGround = false;
        spawnEnemyBurst(crow.x + crow.w * 0.5, crow.y + crow.h * 0.5);
        playTone(310, 0.07, "square", 0.03, 0);
        playTone(470, 0.09, "triangle", 0.025, 0.05);
      } else {
        handleDamage(false, 1, "crow");
        return true;
      }
    }

    if (!player.onGround) {
      for (const plane of airplanes) {
        if (!plane.active) continue;
        const rect = { x: plane.x + 9, y: plane.y + 6, w: plane.w - 18, h: plane.h - 11 };
        if (!playerBoxes.some((box) => rectsOverlap(box, rect))) continue;
        handleDamage(false, 1, "airplane");
        return true;
      }
    }

    for (const bomb of airplaneBombs) {
      if (bomb.state !== "exploding" || bomb.damagedPlayer) continue;
      const blastY = GROUND_Y - 8;
      if (!playerBoxes.some((box) => rectCircleOverlap(box, bomb.x, blastY, bomb.explosionRadius))) continue;
      bomb.damagedPlayer = true;
      handleDamage(false, 0.5, "airplaneBomb");
      return true;
    }

    for (const ball of fallingBalls) {
      if (ball.state !== "falling") continue;
      if (playerBoxes.some((box) => rectCircleOverlap(box, ball.x, ball.y, ball.radius - 3))) {
        ball.state = "done";
        handleDamage(false, 0.5, "football");
        return true;
      }
    }

    for (const rock of fallingRocks) {
      if (!playerBoxes.some((box) => rectCircleOverlap(box, rock.x, rock.y, rock.radius - 2))) continue;
      if (currentCharacter().stoneImmune) {
        rock.state = "destroyed";
        triggerPowerSmash(rock.x, rock.y, "fallingRock");
        return false;
      }
      if (smashCharges > 0) {
        smashCharges -= 1;
        rock.state = "destroyed";
        if (selectedCharacter === "krabs") triggerCrabSmash(rock.x, rock.y, "fallingRock");
        else if (selectedCharacter === "yuanyuan") triggerYuanyuanSmash(rock.x, rock.y, "fallingRock");
        else {
          shakeTime = 0.22;
          spawnHitBurst(rock.x, rock.y);
          activateSkillBadge("✦", "碎石能力", 0.95);
        }
        canvas.dataset.smashCharges = String(smashCharges);
        updateMissionHud();
        return false;
      }
      rock.state = "destroyed";
      handleDamage(false, 1, "fallingRock");
      return true;
    }
    return false;
  }

  function rectsOverlap(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  function rectCircleOverlap(rect, cx, cy, radius) {
    const closestX = Math.max(rect.x, Math.min(cx, rect.x + rect.w));
    const closestY = Math.max(rect.y, Math.min(cy, rect.y + rect.h));
    const dx = closestX - cx;
    const dy = closestY - cy;
    return dx * dx + dy * dy < radius * radius;
  }

  function triggerCrabSmash(x, y, source) {
    shakeTime = 0.24;
    spawnHitBurst(x, y);
    player.vy = Math.min(player.vy, -205);
    player.onGround = false;
    canvas.dataset.lastSpecial = "crabSmash";
    canvas.dataset.crabSmashSource = source;
    activateSkillBadge("🦀", `蟹钳碎石 · 剩余 ${smashCharges}`, 1.15);
    announce(`蟹老板用蟹钳夹碎石头！本局还可碎石 ${smashCharges} 次。`);
    playTone(118, 0.1, "sawtooth", 0.045, 0);
    playTone(390, 0.12, "square", 0.032, 0.07);
  }

  function triggerYuanyuanSmash(x, y, source) {
    shakeTime = 0.22;
    spawnHitBurst(x, y);
    player.vy = Math.min(player.vy, -175);
    player.onGround = false;
    canvas.dataset.lastSpecial = "yuanyuanSmash";
    canvas.dataset.yuanyuanSmashSource = source;
    activateSkillBadge("元", `厚实冲撞 · 剩余 ${smashCharges}`, 1.05);
    announce(`元元稳稳撞碎了石头！本局还可撞碎 ${smashCharges} 块。`);
    playTone(126, 0.1, "sawtooth", 0.042, 0);
    playTone(360, 0.1, "square", 0.03, 0.07);
  }

  function triggerPowerSmash(x, y, source) {
    shakeTime = 0.26;
    spawnHitBurst(x, y);
    spawnHitBurst(x, y);
    player.vy = Math.min(player.vy, -250);
    player.onGround = false;
    canvas.dataset.lastSpecial = "powerSmash";
    canvas.dataset.powerSmashSource = source;
    activateSkillBadge("💪", "肌肉碎石", 1.2);
    announce("强哥肌肉爆发！用头把石头顶碎了！");
    playTone(95, 0.11, "sawtooth", 0.05, 0);
    playTone(310, 0.12, "square", 0.038, 0.08);
    playTone(520, 0.15, "triangle", 0.028, 0.16);
  }

  function pointInRect(point, rect) {
    return point.x >= rect.x && point.x <= rect.x + rect.w &&
      point.y >= rect.y && point.y <= rect.y + rect.h;
  }

  function pointInPolygon(point, polygon) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
      const a = polygon[i];
      const b = polygon[j];
      const crosses = ((a.y > point.y) !== (b.y > point.y)) &&
        (point.x < ((b.x - a.x) * (point.y - a.y)) / (b.y - a.y || 1) + a.x);
      if (crosses) inside = !inside;
    }
    return inside;
  }

  function segmentsIntersect(a, b, c, d) {
    const cross = (p, q, r) =>
      (q.x - p.x) * (r.y - p.y) - (q.y - p.y) * (r.x - p.x);
    const abC = cross(a, b, c);
    const abD = cross(a, b, d);
    const cdA = cross(c, d, a);
    const cdB = cross(c, d, b);
    return ((abC > 0 && abD < 0) || (abC < 0 && abD > 0)) &&
      ((cdA > 0 && cdB < 0) || (cdA < 0 && cdB > 0));
  }

  function rectPolygonOverlap(rect, polygon) {
    const polygonBounds = polygon.reduce((bounds, point) => ({
      x: Math.min(bounds.x, point.x),
      y: Math.min(bounds.y, point.y),
      right: Math.max(bounds.right, point.x),
      bottom: Math.max(bounds.bottom, point.y),
    }), { x: Infinity, y: Infinity, right: -Infinity, bottom: -Infinity });
    if (!rectsOverlap(rect, {
      x: polygonBounds.x,
      y: polygonBounds.y,
      w: polygonBounds.right - polygonBounds.x,
      h: polygonBounds.bottom - polygonBounds.y,
    })) return false;

    const rectPoints = [
      { x: rect.x, y: rect.y },
      { x: rect.x + rect.w, y: rect.y },
      { x: rect.x + rect.w, y: rect.y + rect.h },
      { x: rect.x, y: rect.y + rect.h },
    ];
    if (rectPoints.some((point) => pointInPolygon(point, polygon))) return true;
    if (polygon.some((point) => pointInRect(point, rect))) return true;

    for (let i = 0; i < rectPoints.length; i += 1) {
      const a = rectPoints[i];
      const b = rectPoints[(i + 1) % rectPoints.length];
      for (let j = 0; j < polygon.length; j += 1) {
        const c = polygon[j];
        const d = polygon[(j + 1) % polygon.length];
        if (segmentsIntersect(a, b, c, d)) return true;
      }
    }
    return false;
  }

  function setRevivePromptMessage(message, isError = false) {
    if (!revivePromptStatus) return;
    revivePromptStatus.textContent = message;
    revivePromptStatus.classList.toggle("is-error", isError);
  }

  async function refreshRevivePromptStatus() {
    if (!accountAuthenticated || !accountToken || gameState !== "revivePrompt") return;
    const requestVersion = revivePromptRequestVersion;
    try {
      const payload = await accountRequest("storeStatus", {}, true);
      if (requestVersion !== revivePromptRequestVersion || gameState !== "revivePrompt" || revivePromptBusy) return;
      applyYunqingStore(payload?.store);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      renderReviveUi();
    } catch {
      setRevivePromptMessage("暂时无法刷新账号数据，仍可重试复活。", true);
    }
  }

  function openRevivePrompt(fell, source) {
    if (gameState !== "playing" || pendingRevive) return;
    pendingRevive = {
      id: newReviveTransactionId("death"),
      fell: Boolean(fell),
      source: String(source || "obstacle"),
      x: Number(player?.x) || START_X,
      y: Number(player?.y) || GROUND_Y - NORMAL_HEIGHT,
      surfaceY: Number(player?.surfaceY) || GROUND_Y,
      openedAt: Date.now(),
    };
    revivePromptRequestVersion += 1;
    gameState = "revivePrompt";
    canvas.dataset.gameState = gameState;
    canvas.dataset.revivePrompt = "true";
    keyboardCrouchHeld = false;
    pointerCrouchHeld = false;
    keyboardBoostHeld = false;
    pointerBoostHeld = false;
    keyboardMoveLeftHeld = false;
    keyboardMoveRightHeld = false;
    releaseControllerControls();
    clearGesture();
    if (player) {
      player.vx = 0;
      player.vy = 0;
    }
    pauseButton?.classList.add("is-hidden");
    compactHudButton?.classList.add("is-hidden");
    gameControls?.classList.add("is-hidden");
    gestureHint.classList.remove("is-visible");
    revivePrompt?.classList.remove("is-hidden");
    setRevivePromptMessage("请选择一种方式继续");
    renderReviveUi();
    playTone(210, 0.12, "triangle", 0.028, 0);
    playTone(310, 0.18, "triangle", 0.024, 0.12);
    window.setTimeout(() => {
      if (reviveCards > 0) reviveUseButton?.focus();
      else reviveEmergencyButton?.focus();
    }, 40);
    refreshRevivePromptStatus();
  }

  function safePositionAfterRevive(death) {
    const deathX = Math.max(START_X, Number(death?.x) || checkpointX || START_X);
    let resumeX = deathX + (death?.fell ? 0 : 46);
    const groundAt = (x) => groundSegments.find((segment) => x + 18 >= segment.start && x + 18 <= segment.end);
    let ground = groundAt(resumeX);
    if (death?.fell || !ground) {
      ground = groundSegments.find((segment) => segment.end >= deathX + 22 && segment.start > deathX - 36)
        || groundSegments.find((segment) => segment.end >= checkpointX + 20)
        || groundSegments[0];
      if (ground) resumeX = Math.max(ground.start + 44, Math.min(ground.end - 60, deathX + 28));
    }
    if (death?.source === "blackHole") {
      const hole = hazards
        .filter((hazard) => hazard.kind === "blackHole")
        .sort((a, b) => Math.abs(a.x - deathX) - Math.abs(b.x - deathX))[0];
      if (hole) resumeX = Math.max(resumeX, hole.x + hole.w + 50);
      ground = groundAt(resumeX) || ground;
    }
    if (!groundAt(resumeX)) {
      const next = groundSegments.find((segment) => segment.start > resumeX - 30);
      if (next) {
        ground = next;
        resumeX = next.start + 44;
      }
    }
    resumeX = Math.max(START_X, Math.min(levelEnd - 90, resumeX));
    const surface = getSurfaces()
      .filter((item) => resumeX + player.w * 0.5 >= item.start + 4 && resumeX + player.w * 0.5 <= item.end - 4)
      .sort((a, b) => a.y - b.y)[0];
    return {
      x: resumeX,
      surfaceY: surface?.y || GROUND_Y,
    };
  }

  function resumeFromRevive(healthPercent = reviveSettings.reviveHealthPercent) {
    if (gameState !== "revivePrompt" || !pendingRevive || !player) return;
    const death = pendingRevive;
    const position = safePositionAfterRevive(death);
    const restored = Math.max(0.5, Math.min(maxHearts, Math.ceil((maxHearts * Math.max(25, Number(healthPercent) || 100) / 100) * 2) / 2));
    hearts = restored;
    resetStaminaForCharacter();
    player.x = position.x;
    player.h = NORMAL_HEIGHT;
    player.y = position.surfaceY - NORMAL_HEIGHT;
    player.vx = 0;
    player.vy = -185;
    player.onGround = false;
    player.surfaceY = position.surfaceY;
    player.invulnerable = 2.35;
    player.airJumpsUsed = 0;
    player.jumpCycleLocked = false;
    player.pendingThirdJump = 0;
    player.thirdJumpRecovery = 0;
    player.flipAngle = 0;
    player.flipElapsed = 0;
    player.flipDuration = 0;
    player.flipTurns = 0;
    cliffFallState = null;
    cliffRescueGrace = 0.65;
    previousScoreX = player.x;
    checkpointX = Math.max(checkpointX, Math.min(player.x, levelEnd - 120));
    jumpBuffer = 0;
    coyoteTime = 0.1;
    pendingRevive = null;
    revivePromptBusy = false;
    gameState = "playing";
    canvas.dataset.gameState = gameState;
    canvas.dataset.revivePrompt = "false";
    canvas.dataset.lastSpecial = "revived";
    revivePrompt?.classList.add("is-hidden");
    pauseButton?.classList.remove("is-hidden");
    compactHudButton?.classList.remove("is-hidden");
    gameControls?.classList.toggle("is-hidden", !battleModeActive);
    updateHud(true);
    updateMissionHud();
    renderReviveUi();
    announce(`复活成功，恢复 ${restored} 滴血，从刚才附近继续。`);
    activateSkillBadge("✚", "复活成功", 1.25);
    spawnPremiumLandingBurst(player.x + player.w * 0.5, position.surfaceY);
    playTone(460, 0.08, "triangle", 0.03, 0);
    playTone(680, 0.11, "triangle", 0.03, 0.07);
    playTone(920, 0.16, "square", 0.025, 0.16);
    lastFrame = performance.now();
    try {
      canvas.focus({ preventScroll: true });
    } catch {
      canvas.focus();
    }
  }

  async function performRevive(action) {
    if (revivePromptBusy || gameState !== "revivePrompt" || !pendingRevive) return;
    if (!accountAuthenticated || !accountToken) {
      setRevivePromptMessage("请先保持账号登录，才能安全使用复活卡。", true);
      return;
    }
    const accountAction = action === "emergency" ? "purchaseEmergencyRevive" : "useReviveCard";
    revivePromptBusy = true;
    revivePromptRequestVersion += 1;
    renderReviveUi();
    setRevivePromptMessage(action === "emergency" ? "正在购买并复活…" : "正在使用复活卡…");
    try {
      const payload = await accountRequest(accountAction, {
        level: currentLevel,
        transactionId: `${pendingRevive.id}-${action === "emergency" ? "buy" : "card"}`.slice(0, 80),
      }, true);
      if (payload?.account?.gameData) applyAccountGameData(payload.account.gameData);
      applyRevivePayload(payload);
      if (!payload?.reviveGranted) throw new Error("服务器没有确认本次复活，请重试。");
      resumeFromRevive(payload.restoreHealthPercent);
      loadLeaderboard(true);
    } catch (error) {
      applyRevivePayload(error.payload);
      revivePromptBusy = false;
      renderReviveUi();
      setRevivePromptMessage(error.message || "复活暂时失败，请重试。", true);
      playTone(170, 0.08, "square", 0.02, 0);
      refreshRevivePromptStatus();
    }
  }

  function abandonRevive() {
    if (revivePromptBusy || gameState !== "revivePrompt") return;
    revivePromptRequestVersion += 1;
    pendingRevive = null;
    revivePrompt?.classList.add("is-hidden");
    canvas.dataset.revivePrompt = "false";
    if (battleModeActive) {
      const leavingMatchId = battleMatchId;
      sendBattle("leave_match", { matchId: leavingMatchId });
      battleModeActive = false;
      battleMatchId = "";
      battleFinished = true;
      gameState = "battleLobby";
      canvas.dataset.gameState = gameState;
      battleLiveHud?.classList.add("is-hidden");
      gameControls?.classList.add("is-hidden");
      battleUltimateButton?.classList.add("is-hidden");
      overlay.classList.add("is-hidden");
      openBattleDialog();
      return;
    }
    gameState = "playing";
    canvas.dataset.gameState = gameState;
    finishGame(false);
  }

  function handleDamage(fell, amount = 1, source = fell ? "fall" : "obstacle") {
    if (gameState !== "playing") return;
    if (cliffFallState?.active) clearCliffFallState(false);
    if (caveEntryProtectionActive()) {
      hearts = maxHearts;
      player.x = Math.max(caveStartX + 34, player.x + (fell ? 0 : 14));
      player.h = NORMAL_HEIGHT;
      player.y = GROUND_Y - NORMAL_HEIGHT;
      player.vy = 0;
      player.onGround = true;
      player.surfaceY = GROUND_Y;
      player.invulnerable = Math.max(player.invulnerable, 1.2);
      player.airJumpsUsed = 0;
      player.jumpCycleLocked = false;
      player.pendingThirdJump = 0;
      player.thirdJumpRecovery = 0;
      previousScoreX = player.x;
      checkpointX = Math.max(checkpointX, caveStartX + 34);
      canvas.dataset.lastDamage = "caveEntryBlocked";
      canvas.dataset.lastBlockedDamage = source;
      canvas.dataset.lastSpecial = "caveEntryShield";
      activateSkillBadge("◇", "洞穴入口保护", 0.95);
      updateHud(true);
      announce("洞穴入口保护生效：没有扣血，人物已安全回到地面。");
      return;
    }
    if (fell && doorCharges > 0 && currentCharacter().doorCharges) {
      doorCharges -= 1;
      const nextGround = groundSegments.find((segment) => segment.start > player.x - 20);
      const resumeX = nextGround ? nextGround.start + 38 : checkpointX;
      player.x = Math.max(checkpointX, resumeX);
      player.y = GROUND_Y - NORMAL_HEIGHT;
      player.h = NORMAL_HEIGHT;
      player.vy = -220;
      player.onGround = false;
      player.surfaceY = GROUND_Y;
      player.invulnerable = 1.2;
      player.airJumpsUsed = 0;
      player.jumpCycleLocked = false;
      player.pendingThirdJump = 0;
      player.thirdJumpRecovery = 0;
      canvas.dataset.doorCharges = String(doorCharges);
      canvas.dataset.lastSpecial = "anywhereDoor";
      activateSkillBadge("🚪", "任意门救援", 1.35);
      announce("哆啦A梦打开任意门，安全穿过了陷阱！");
      playTone(520, 0.08, "triangle", 0.03, 0);
      playTone(820, 0.13, "square", 0.025, 0.08);
      return;
    }
    const damage = Math.max(0.5, Math.min(hearts, Number(amount) || 1));
    canvas.dataset.lastDamage = source;
    canvas.dataset.lastDamageX = player.x.toFixed(2);
    canvas.dataset.lastDamageAmount = String(damage);
    hearts = Math.max(0, Number((hearts - damage).toFixed(1)));
    if (battleModeActive) battleDamageTaken = Number((battleDamageTaken + damage).toFixed(1));
    shakeTime = 0.3;
    spawnHitBurst(player.x + player.w * 0.5, Math.min(player.y + player.h * 0.5, GROUND_Y - 20));
    playTone(fell ? 155 : 125, 0.16, "sawtooth", 0.035, 0);
    updateHud(true);

    if (hearts <= 0) {
      openRevivePrompt(fell, source);
      return;
    }

    player.h = NORMAL_HEIGHT;
    if (fell) {
      const nextGround = groundSegments.find((segment) => segment.start > player.x - 20);
      const nearbyResume = nextGround ? nextGround.start + 34 : checkpointX;
      player.x = Math.max(checkpointX, nearbyResume);
      player.y = GROUND_Y - NORMAL_HEIGHT;
      player.vy = -280;
      player.onGround = false;
      player.surfaceY = GROUND_Y;
    } else {
      player.x += 16;
      player.y = Math.min(player.y, player.surfaceY - NORMAL_HEIGHT);
      player.vy = -360;
      player.onGround = false;
    }
    player.vx = 0;
    previousScoreX = player.x;
    if (fell) {
      player.airJumpsUsed = 0;
      player.jumpCycleLocked = false;
    }
    player.flipAngle = 0;
    player.flipElapsed = 0;
    player.flipDuration = 0;
    player.flipTurns = 0;
    keyboardCrouchHeld = false;
    pointerCrouchHeld = false;
    player.invulnerable = 1.85;
    jumpBuffer = 0;
    player.pendingThirdJump = 0;
    player.thirdJumpRecovery = 0;
    coyoteTime = fell ? 0.1 : 0;
    const damageMessage = source === "blackHole"
      ? "黑洞造成 2 滴伤害"
      : source === "football"
        ? "足球造成半滴伤害"
        : source === "airplaneBomb"
          ? "飞机炸弹爆炸，造成半滴伤害"
        : source === "airplane"
            ? "空中撞到飞机，造成 1 滴伤害"
            : source === "battleBomb"
              ? "对手的炸弹大招命中，造成 1 滴伤害"
              : source === "battleAirstrike"
                ? "对手的飞机轰炸命中，造成 1 滴伤害"
            : `受到 ${damage} 滴伤害`;
    announce(`${damageMessage}，还剩 ${hearts} 滴血。`);
  }

  function updateHud(force = false) {
    const roundedScore = battleModeActive
      ? Math.max(0, Math.round(battleScore))
      : Math.max(0, Math.min(TARGET_SCORE, Math.round(scoreFloat)));
    const progress = battleModeActive
      ? Math.max(0, Math.min(100, 100 - ((battleEndsAt - (Date.now() + battleServerOffset)) / 60000) * 100))
      : roundedScore;

    if (force || roundedScore !== lastHudScore) {
      scoreElement.textContent = battleModeActive ? `积分 ${roundedScore}` : `${String(roundedScore).padStart(3, "0")}/100`;
      if (levelLabel) levelLabel.textContent = battleModeActive ? `好友对战 · 第 ${battleLap + 1} 圈` : `第 ${currentLevel} / ${MAX_LEVELS} 关`;
      lastHudScore = roundedScore;
    }
    if (force || hearts !== lastHudHearts) {
      heartsElement.textContent = Array.from({ length: maxHearts }, (_, index) => {
        if (hearts >= index + 1) return "♥";
        if (hearts > index) return "◐";
        return "♡";
      }).join(maxHearts >= 7 ? "" : " ");
      heartsElement.setAttribute("aria-label", `${hearts} 滴血，最多 ${maxHearts} 滴`);
      lastHudHearts = hearts;
    }
    const roundedProgress = Math.round(progress);
    if (force || roundedProgress !== lastHudProgress) {
      progressBar.style.width = `${roundedProgress}%`;
      progressBar.parentElement.setAttribute("aria-label", battleModeActive ? `对战时间进度 ${roundedProgress}%` : `关卡进度 ${roundedProgress}%`);
      lastHudProgress = roundedProgress;
    }
    updateStaminaHud(force);
  }

  function spawnDust(x, y, color, count) {
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: x + (Math.random() - 0.5) * 24,
        y: y - Math.random() * 5,
        vx: -35 - Math.random() * 80,
        vy: -35 - Math.random() * 70,
        gravity: 180,
        life: 0.38 + Math.random() * 0.2,
        maxLife: 0.58,
        size: 4 + Math.random() * 5,
        color,
        shape: "circle",
      });
    }
  }

  function spawnPremiumLandingBurst(x, y, character = currentCharacter()) {
    const tier = characterVisualTier(character);
    if (tier <= 0) return;
    const palette = characterVisualPalette(character);
    const compact = cssWidth > 0 && cssWidth <= 620;
    const sparkleCount = Math.max(4, Math.min(compact ? 8 : 12, 3 + tier * 2));
    particles.push({
      x,
      y: y - 2,
      vx: 0,
      vy: 0,
      gravity: 0,
      life: 0.38,
      maxLife: 0.38,
      size: 18 + tier * 3,
      growth: 34 + tier * 7,
      color: palette[0],
      shape: "ring",
      glow: tier >= 3 ? 8 : 4,
    });
    for (let index = 0; index < sparkleCount; index += 1) {
      const angle = Math.PI + (Math.PI * index) / Math.max(1, sparkleCount - 1);
      const speed = 62 + Math.random() * (36 + tier * 13);
      particles.push({
        x: x + (Math.random() - 0.5) * 16,
        y: y - 4,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 18,
        gravity: 230,
        drag: 1.7,
        life: 0.42 + Math.random() * 0.18,
        maxLife: 0.6,
        size: 2.5 + Math.random() * (2 + tier * 0.45),
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 9,
        color: palette[index % palette.length],
        shape: index % 3 === 0 ? "diamond" : "circle",
        glow: tier >= 2 ? 5 : 0,
      });
    }
  }

  function updatePremiumCharacterEffects(dt, boosting = false) {
    const character = currentCharacter();
    const tier = characterVisualTier(character);
    canvas.dataset.characterVisualTier = String(tier);
    premiumEffectTimer = Math.max(0, premiumEffectTimer - dt);
    if (tier <= 0 || premiumEffectTimer > 0 || gameState !== "playing") return;
    const moving = Math.abs(Number(player?.vx) || 0) > 55;
    if (!moving && player?.onGround && !boosting) return;

    const compact = cssWidth > 0 && cssWidth <= 620;
    const baseInterval = tier >= 4 ? 0.055 : tier === 3 ? 0.075 : tier === 2 ? 0.11 : 0.17;
    premiumEffectTimer = baseInterval * (compact ? 1.22 : 1);
    const palette = characterVisualPalette(character);
    const count = tier >= 4 && !compact ? 2 : 1;
    for (let index = 0; index < count; index += 1) {
      const airLift = player.onGround ? 0 : 12 + Math.random() * 14;
      const color = palette[(Math.floor(elapsed * 8) + index) % palette.length];
      particles.push({
        x: player.x + 5 + Math.random() * 11,
        y: player.y + player.h * (0.35 + Math.random() * 0.5) + airLift,
        vx: -75 - Math.abs(Number(player.vx) || 0) * (0.16 + tier * 0.018) - Math.random() * 34,
        vy: (Math.random() - 0.5) * (28 + tier * 4),
        gravity: player.onGround ? -16 : 12,
        drag: 1.25,
        life: 0.3 + tier * 0.045,
        maxLife: 0.48,
        size: 2 + tier * 0.7 + Math.random() * 1.7,
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 7,
        color,
        shape: tier >= 3 && index % 2 === 0 ? "diamond" : "circle",
        glow: tier >= 2 ? 5 + tier : 0,
      });
    }
  }

  function spawnCoinBurst(x, y) {
    const colors = ["#ffd34f", "#fff2a6", "#ff984f"];
    for (let i = 0; i < 9; i += 1) {
      const angle = (Math.PI * 2 * i) / 9;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * (75 + Math.random() * 55),
        vy: Math.sin(angle) * (75 + Math.random() * 55),
        gravity: 110,
        life: 0.55,
        maxLife: 0.55,
        size: 3 + Math.random() * 3,
        color: colors[i % colors.length],
        shape: "star",
      });
    }
  }

  function spawnEnemyBurst(x, y) {
    const colors = ["#8257b8", "#b383df", "#def6c5"];
    for (let i = 0; i < 12; i += 1) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 210,
        vy: -60 - Math.random() * 150,
        gravity: 380,
        life: 0.65,
        maxLife: 0.65,
        size: 3 + Math.random() * 5,
        color: colors[i % colors.length],
        shape: "circle",
      });
    }
  }

  function spawnHitBurst(x, y) {
    const colors = ["#ff5d61", "#fff0b0", "#ffffff"];
    for (let i = 0; i < 14; i += 1) {
      const angle = (Math.PI * 2 * i) / 14;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * (95 + Math.random() * 90),
        vy: Math.sin(angle) * (95 + Math.random() * 90),
        gravity: 220,
        life: 0.72,
        maxLife: 0.72,
        size: 4 + Math.random() * 4,
        color: colors[i % colors.length],
        shape: i % 2 ? "star" : "circle",
      });
    }
  }

  function spawnCelebration() {
    const colors = ["#ff5d65", "#ffd34f", "#54ca84", "#66b8ef", "#a980de"];
    for (let i = 0; i < 50; i += 1) {
      particles.push({
        x: player.x + (Math.random() - 0.5) * 150,
        y: 120 + Math.random() * 210,
        vx: (Math.random() - 0.5) * 220,
        vy: -80 - Math.random() * 180,
        gravity: 240,
        life: 1.7 + Math.random(),
        maxLife: 2.7,
        size: 4 + Math.random() * 6,
        color: colors[i % colors.length],
        shape: i % 3 === 0 ? "star" : "square",
      });
    }
  }

  function updateParticles(dt) {
    for (const particle of particles) {
      particle.life -= dt;
      particle.vy += (Number(particle.gravity) || 0) * dt;
      if (particle.drag) {
        const damping = Math.exp(-Math.max(0, Number(particle.drag) || 0) * dt);
        particle.vx *= damping;
        particle.vy *= damping;
      }
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.rotation = (Number(particle.rotation) || 0) + (Number(particle.spin) || 0) * dt;
    }
    particles = particles.filter((particle) => particle.life > 0);
    const particleLimit = cssWidth > 0 && cssWidth <= 620 ? 112 : cssWidth > 0 && cssWidth <= 980 ? 156 : 220;
    if (particles.length > particleLimit) particles = particles.slice(-particleLimit);
  }

  function resizeCanvas(force = false) {
    if (!force && !canvasSizeDirty) return;
    const rect = canvas.getBoundingClientRect();
    const nextWidth = Math.max(1, rect.width);
    const nextHeight = Math.max(1, rect.height);
    const portrait = nextHeight > nextWidth * 1.15;
    const compactDevice = nextWidth <= 900;
    const phoneDevice = nextWidth <= 620;
    const hardwareThreads = Math.max(1, Number(window.navigator?.hardwareConcurrency) || 4);
    const deviceMemory = Math.max(0, Number(window.navigator?.deviceMemory) || 0);
    const constrainedDevice = hardwareThreads <= 4 || (deviceMemory > 0 && deviceMemory <= 4);
    const maximumDpr = phoneDevice
      ? constrainedDevice ? 1.22 : 1.36
      : compactDevice
        ? constrainedDevice ? 1.36 : 1.55
        : 1.78;
    renderDpr = Math.min(window.devicePixelRatio || 1, maximumDpr);
    const pixelWidth = Math.round(nextWidth * renderDpr);
    const pixelHeight = Math.round(nextHeight * renderDpr);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }
    cssWidth = nextWidth;
    cssHeight = nextHeight;
    worldYOffset = cssWidth <= 620 ? -18 : portrait ? -10 : 0;
    canvas.dataset.mobileWorldOffset = String(worldYOffset);
    if (portrait) {
      const portraitWorldWidth = Math.min(640, Math.max(480, cssWidth * 0.84));
      scale = Math.min(cssHeight / 650, cssWidth / portraitWorldWidth);
    } else {
      scale = cssHeight / WORLD_HEIGHT;
    }
    logicalWidth = cssWidth / scale;
    viewportYOffset = portrait ? Math.max(0, (cssHeight / scale - WORLD_HEIGHT) * 0.28) : 0;
    canvas.dataset.portraitViewport = String(portrait);
    canvas.dataset.visibleWorldWidth = logicalWidth.toFixed(1);
    canvas.dataset.viewportYOffset = viewportYOffset.toFixed(1);
    canvas.dataset.renderDpr = renderDpr.toFixed(2);
    ctx.setTransform(renderDpr, 0, 0, renderDpr, 0, 0);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    canvasSizeDirty = false;
  }

  function syncAppViewport() {
    const viewport = window.visualViewport;
    const width = Math.max(1, Number(viewport?.width) || window.innerWidth || document.documentElement.clientWidth || 1);
    const height = Math.max(1, Number(viewport?.height) || window.innerHeight || document.documentElement.clientHeight || 1);
    const offsetLeft = Math.max(0, Number(viewport?.offsetLeft) || 0);
    const offsetTop = Math.max(0, Number(viewport?.offsetTop) || 0);
    const root = document.documentElement;
    root.style.setProperty("--app-width", `${width}px`);
    root.style.setProperty("--app-height", `${height}px`);
    root.style.setProperty("--app-left", `${offsetLeft}px`);
    root.style.setProperty("--app-top", `${offsetTop}px`);
    canvasSizeDirty = true;
  }

  function draw() {
    resizeCanvas();
    ctx.setTransform(renderDpr, 0, 0, renderDpr, 0, 0);
    ctx.fillStyle = currentTheme().sky[0] || "#74d5ff";
    ctx.fillRect(0, 0, cssWidth, cssHeight);
    ctx.save();
    ctx.scale(scale, scale);
    ctx.translate(0, viewportYOffset);

    const runningCameraTarget = Math.max(0, Math.min(levelEnd - logicalWidth * 0.72, player.x - logicalWidth * 0.3));
    const targetCamera = cliffFallState?.active ? cliffFallState.cameraX : runningCameraTarget;
    const cameraEase = 1 - Math.exp(-7.05 * Math.max(1 / 240, renderFrameDelta));
    cameraX += (targetCamera - cameraX) * cameraEase;

    drawBackground();

    ctx.save();
    ctx.translate(0, worldYOffset);
    if (shakeTime > 0) {
      const magnitude = 7 * (shakeTime / 0.3);
      ctx.translate(
        Math.sin(elapsed * 89) * magnitude * 0.44,
        Math.cos(elapsed * 73) * magnitude * 0.34,
      );
    }
    drawCaveInterior();
    drawHoles();
    drawGround();
    drawSprings();
    drawSigns();
    drawCaveEntrance();
    drawFinishGate();
    drawCoins();
    drawHazards();
    drawSpecialEvents();
    drawEnemies();
    drawCrows();
    drawAirplanes();
    drawAirplaneBombs();
    drawBattleAttack();
    drawParticles();
    drawPremiumCharacterEffects();
    drawBoostEffect();
    drawFlairEffect();
    drawBattleOpponent();
    drawPlayer();
    drawCliffRescueGuide();
    drawSkillBadge();
    drawMotionAtmosphere();
    drawCaveDarkness();
    ctx.restore();

    ctx.restore();
  }

  function currentTheme() {
    return LEVEL_THEMES[Math.max(0, Math.min(LEVEL_THEMES.length - 1, currentLevel - 1))] || LEVEL_THEMES[0];
  }

  function drawBackground() {
    const theme = currentTheme();
    const sky = ctx.createLinearGradient(0, 0, 0, WORLD_HEIGHT);
    sky.addColorStop(0, theme.sky[0]);
    sky.addColorStop(0.62, theme.sky[1]);
    sky.addColorStop(1, theme.sky[2]);
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, logicalWidth, WORLD_HEIGHT);

    drawThemeCelestial(theme);
    if (!["machinery", "blackhole", "fortress"].includes(theme.feature)) {
      for (let tile = -1; tile < Math.ceil(logicalWidth / 1250) + 2; tile += 1) {
        for (const cloud of cloudBlueprints) {
          const x = cloud.x + tile * 1250 - (cameraX * 0.12) % 1250;
          drawCloud(x, cloud.y, cloud.s * (theme.feature === "storm" ? 1.2 : 1));
        }
      }
    }

    drawMountainLayer(0.18, 358, 185, theme.mountain, theme.snow, 410);
    drawMountainLayer(0.28, 404, 126, shadeColor(theme.mountain, -8), theme.hill[0], 330);
    drawHillLayer(theme);
    drawThemeDecorations(theme);
    ctx.save();
    ctx.globalAlpha = 0.14;
    ctx.fillStyle = theme.accent;
    ctx.font = "1000 34px system-ui, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(LEVEL_NAMES[currentLevel - 1] || "云朵小勇士", logicalWidth - 24, 185);
    ctx.restore();
  }

  function drawThemeCelestial(theme) {
    if (theme.celestial === "none") return;
    const x = logicalWidth - 88;
    const y = 96;
    const moon = theme.celestial === "moon";
    const glow = ctx.createRadialGradient(x, y, 7, x, y, moon ? 55 : 68);
    glow.addColorStop(0, moon ? "rgba(244,239,206,0.9)" : "rgba(255,252,204,0.96)");
    glow.addColorStop(0.48, moon ? "rgba(218,220,210,0.32)" : "rgba(255,238,142,0.55)");
    glow.addColorStop(1, "rgba(255,238,142,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, moon ? 55 : 68, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = moon ? "#f2edcf" : theme.accent;
    ctx.beginPath();
    ctx.arc(x, y, moon ? 27 : 32, 0, Math.PI * 2);
    ctx.fill();
    if (moon) {
      ctx.fillStyle = "rgba(112,113,126,0.2)";
      ctx.beginPath();
      ctx.arc(x - 8, y - 5, 6, 0, Math.PI * 2);
      ctx.arc(x + 9, y + 7, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawThemeDecorations(theme) {
    const offset = -((cameraX * 0.2) % 260);
    ctx.save();
    if (theme.feature === "river") {
      ctx.fillStyle = "rgba(63,185,207,0.38)";
      ctx.fillRect(0, 405, logicalWidth, 48);
      ctx.strokeStyle = "rgba(231,255,255,0.65)";
      ctx.lineWidth = 3;
      for (let x = -40; x < logicalWidth + 50; x += 75) {
        ctx.beginPath(); ctx.arc(x - (cameraX * 0.35) % 75, 420, 28, 0.2, 2.4); ctx.stroke();
      }
    } else if (theme.feature === "autumn" || theme.feature === "meadow") {
      for (let x = offset - 120; x < logicalWidth + 180; x += 210) {
        ctx.fillStyle = theme.feature === "autumn" ? "#68452f" : "#477453";
        ctx.fillRect(x + 70, 337, 13, 92);
        ctx.fillStyle = theme.feature === "autumn" ? (Math.floor(x / 210) % 2 ? "#d85f39" : "#eda343") : "#57a867";
        ctx.beginPath(); ctx.arc(x + 76, 326, 45, 0, Math.PI * 2); ctx.fill();
        if (theme.feature === "autumn") {
          ctx.fillStyle = "#f5bb54";
          for (let leaf = 0; leaf < 4; leaf += 1) {
            ctx.beginPath(); ctx.arc(x + 25 + leaf * 33, 260 + ((leaf * 29 + currentLevel) % 65), 4, 0, Math.PI * 2); ctx.fill();
          }
        }
      }
    } else if (theme.feature === "valley" || theme.feature === "desert") {
      for (let x = offset - 160; x < logicalWidth + 220; x += 300) {
        ctx.fillStyle = theme.feature === "desert" ? "rgba(177,104,55,0.48)" : "rgba(103,77,70,0.48)";
        ctx.beginPath();
        ctx.moveTo(x, 430); ctx.lineTo(x + 45, 320); ctx.lineTo(x + 135, 320); ctx.lineTo(x + 190, 430); ctx.closePath(); ctx.fill();
        if (theme.feature === "desert") {
          ctx.fillStyle = "rgba(235,184,94,0.55)";
          ctx.beginPath(); ctx.moveTo(x + 180, 430); ctx.lineTo(x + 245, 345); ctx.lineTo(x + 305, 430); ctx.closePath(); ctx.fill();
        }
      }
    } else if (theme.feature === "speed") {
      ctx.strokeStyle = "rgba(255,244,151,0.45)";
      ctx.lineWidth = 4;
      for (let y = 210; y < 420; y += 42) { ctx.beginPath(); ctx.moveTo(-30, y); ctx.lineTo(logicalWidth * 0.45, y - 55); ctx.stroke(); }
    } else if (theme.feature === "rift" || theme.feature === "collapse") {
      const lava = ctx.createLinearGradient(0, 390, 0, 460);
      lava.addColorStop(0, "rgba(255,151,59,0)"); lava.addColorStop(1, "rgba(255,82,36,0.55)");
      ctx.fillStyle = lava; ctx.fillRect(0, 370, logicalWidth, 90);
      for (let x = offset; x < logicalWidth + 200; x += 230) {
        ctx.fillStyle = "rgba(48,42,47,0.62)";
        ctx.beginPath(); ctx.arc(x + 90, 350, 28, 0, Math.PI * 2); ctx.arc(x + 65, 370, 20, 0, Math.PI * 2); ctx.fill();
      }
    } else if (theme.feature === "highsky") {
      for (let x = offset - 100; x < logicalWidth + 180; x += 250) {
        ctx.fillStyle = "rgba(86,135,145,0.42)";
        ctx.beginPath(); ctx.moveTo(x + 35, 320); ctx.lineTo(x + 150, 320); ctx.lineTo(x + 105, 370); ctx.lineTo(x + 70, 370); ctx.closePath(); ctx.fill();
        ctx.fillStyle = "rgba(180,239,207,0.78)"; ctx.fillRect(x + 35, 312, 115, 12);
      }
    } else if (theme.feature === "machinery") {
      ctx.strokeStyle = "rgba(44,53,57,0.72)"; ctx.lineWidth = 15;
      ctx.beginPath(); ctx.moveTo(0, 335); ctx.lineTo(logicalWidth, 335); ctx.stroke();
      for (let x = offset; x < logicalWidth + 180; x += 190) {
        ctx.strokeStyle = "rgba(229,177,75,0.58)"; ctx.lineWidth = 9;
        ctx.beginPath(); ctx.arc(x + 90, 360, 34, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = "rgba(44,53,57,0.7)"; ctx.beginPath(); ctx.arc(x + 90, 360, 9, 0, Math.PI * 2); ctx.fill();
      }
    } else if (theme.feature === "bounce") {
      for (let x = offset; x < logicalWidth + 180; x += 180) {
        ctx.fillStyle = Math.floor(x / 180) % 2 ? "rgba(255,240,104,0.48)" : "rgba(90,241,218,0.48)";
        ctx.beginPath(); ctx.arc(x + 80, 330 + (Math.floor(x / 180) % 3) * 25, 28, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.5)"; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(x + 60, 430); ctx.lineTo(x + 100, 390); ctx.lineTo(x + 60, 370); ctx.lineTo(x + 100, 345); ctx.stroke();
      }
    } else if (theme.feature === "storm") {
      ctx.strokeStyle = "rgba(205,232,248,0.34)"; ctx.lineWidth = 2;
      for (let x = -40; x < logicalWidth + 70; x += 38) {
        const rainX = x - (cameraX * 0.52) % 38;
        ctx.beginPath(); ctx.moveTo(rainX, 170); ctx.lineTo(rainX - 24, 250); ctx.stroke();
      }
      ctx.strokeStyle = "rgba(255,244,167,0.75)"; ctx.lineWidth = 5;
      ctx.beginPath(); ctx.moveTo(logicalWidth * 0.7, 150); ctx.lineTo(logicalWidth * 0.64, 220); ctx.lineTo(logicalWidth * 0.69, 210); ctx.lineTo(logicalWidth * 0.61, 302); ctx.stroke();
    } else if (theme.feature === "crows") {
      ctx.strokeStyle = "rgba(9,12,24,0.8)"; ctx.lineWidth = 4;
      for (let x = offset; x < logicalWidth + 180; x += 135) {
        const y = 240 + (Math.floor(x / 135) % 3) * 32;
        ctx.beginPath(); ctx.arc(x + 40, y, 13, Math.PI * 1.08, Math.PI * 1.88); ctx.arc(x + 65, y, 13, Math.PI * 1.12, Math.PI * 1.92); ctx.stroke();
      }
    } else if (theme.feature === "meteor") {
      ctx.strokeStyle = "rgba(255,193,118,0.62)"; ctx.lineWidth = 5;
      for (let x = 80; x < logicalWidth; x += 180) { ctx.beginPath(); ctx.moveTo(x, 165); ctx.lineTo(x - 75, 240); ctx.stroke(); }
    } else if (theme.feature === "maze") {
      for (let x = offset; x < logicalWidth + 180; x += 160) {
        ctx.fillStyle = "rgba(62,51,100,0.62)";
        const height = 78 + (Math.floor(x / 160) % 3) * 32;
        ctx.fillRect(x + 35, 430 - height, 72, height);
        ctx.fillStyle = "rgba(232,208,255,0.22)"; ctx.fillRect(x + 48, 370 - height * 0.35, 13, 19);
      }
    } else if (theme.feature === "temple") {
      for (let x = offset; x < logicalWidth + 180; x += 210) {
        ctx.fillStyle = "rgba(226,199,137,0.56)"; ctx.fillRect(x + 70, 300, 30, 130); ctx.fillRect(x + 52, 292, 66, 14); ctx.fillRect(x + 52, 425, 66, 10);
      }
    } else if (theme.feature === "blackhole") {
      ctx.fillStyle = "rgba(215,229,255,0.72)";
      for (let star = 0; star < 42; star += 1) {
        const x = (star * 97 - cameraX * 0.08) % (logicalWidth + 120); const y = 55 + (star * 53) % 310;
        ctx.beginPath(); ctx.arc(x, y, star % 4 === 0 ? 2.4 : 1.2, 0, Math.PI * 2); ctx.fill();
      }
      const bx = logicalWidth * 0.74, by = 245;
      const halo = ctx.createRadialGradient(bx, by, 8, bx, by, 70);
      halo.addColorStop(0, "#03040b"); halo.addColorStop(0.35, "#121329"); halo.addColorStop(0.63, "rgba(109,91,226,0.72)"); halo.addColorStop(1, "rgba(91,200,238,0)");
      ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(bx, by, 70, 0, Math.PI * 2); ctx.fill();
    } else if (theme.feature === "ice") {
      for (let x = offset - 80; x < logicalWidth + 180; x += 190) {
        ctx.fillStyle = "rgba(216,252,255,0.62)";
        ctx.beginPath(); ctx.moveTo(x + 60, 430); ctx.lineTo(x + 100, 305); ctx.lineTo(x + 132, 430); ctx.closePath(); ctx.fill();
      }
    } else if (theme.feature === "fortress") {
      ctx.fillStyle = "rgba(31,23,38,0.72)";
      for (let x = offset - 80; x < logicalWidth + 220; x += 290) {
        ctx.fillRect(x + 50, 300, 180, 135); ctx.fillRect(x + 35, 260, 48, 175); ctx.fillRect(x + 198, 260, 48, 175);
        ctx.fillStyle = "rgba(255,171,87,0.45)"; ctx.fillRect(x + 62, 292, 10, 19); ctx.fillRect(x + 211, 292, 10, 19); ctx.fillStyle = "rgba(31,23,38,0.72)";
      }
    } else if (theme.feature === "throne") {
      ctx.fillStyle = "rgba(255,247,174,0.16)";
      for (let ray = 0; ray < 7; ray += 1) {
        ctx.beginPath(); ctx.moveTo(logicalWidth * 0.5, 55); ctx.lineTo(ray * logicalWidth / 6 - 80, 440); ctx.lineTo(ray * logicalWidth / 6 + 35, 440); ctx.closePath(); ctx.fill();
      }
      for (let x = offset; x < logicalWidth + 200; x += 230) { ctx.fillStyle = "rgba(255,255,255,0.5)"; ctx.fillRect(x + 85, 310, 34, 125); }
    }
    ctx.restore();
  }

  function drawCaveInterior() {
    if (!caveEnabled) return;
    const left = caveStartX - cameraX;
    const right = caveEndX - cameraX;
    if (right < -80 || left > logicalWidth + 80) return;
    const visibleLeft = Math.max(-80, left);
    const visibleRight = Math.min(logicalWidth + 80, right);
    const width = Math.max(0, visibleRight - visibleLeft);
    const wall = ctx.createLinearGradient(0, 0, 0, WORLD_HEIGHT);
    wall.addColorStop(0, "#1d2630");
    wall.addColorStop(0.5, "#303b43");
    wall.addColorStop(1, "#171d24");
    ctx.fillStyle = wall;
    ctx.fillRect(visibleLeft, 0, width, WORLD_HEIGHT - worldYOffset);

    ctx.fillStyle = "#111820";
    const firstSpike = Math.floor((Math.max(caveStartX, cameraX - 120) - caveStartX) / 150);
    const lastSpike = Math.ceil((Math.min(caveEndX, cameraX + logicalWidth + 120) - caveStartX) / 150);
    for (let index = firstSpike; index <= lastSpike; index += 1) {
      const worldX = caveStartX + index * 150;
      const x = worldX - cameraX;
      const depth = 34 + Math.abs(Math.sin(index * 1.71 + currentLevel)) * 72;
      ctx.beginPath();
      ctx.moveTo(x - 48, 0);
      ctx.lineTo(x + 18, depth);
      ctx.lineTo(x + 54, 0);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = index % 2 ? "rgba(126,151,154,0.14)" : "rgba(83,117,123,0.18)";
      ctx.beginPath();
      ctx.arc(x + 65, 170 + (index % 3) * 84, 18 + (index % 4) * 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#111820";
    }
  }

  function drawCaveEntrance() {
    if (!caveEnabled) return;
    const x = caveStartX - cameraX;
    if (x < -170 || x > logicalWidth + 170) return;
    ctx.save();
    ctx.fillStyle = "#0d141b";
    ctx.beginPath();
    ctx.arc(x + 12, GROUND_Y - 2, 128, Math.PI, 0);
    ctx.lineTo(x + 140, GROUND_Y + 8);
    ctx.lineTo(x - 116, GROUND_Y + 8);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#59656a";
    ctx.lineWidth = 22;
    ctx.beginPath();
    ctx.arc(x + 12, GROUND_Y - 2, 116, Math.PI, 0);
    ctx.stroke();
    ctx.strokeStyle = "#879298";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(x + 12, GROUND_Y - 2, 103, Math.PI, 0);
    ctx.stroke();
    ctx.fillStyle = "#f4c75c";
    ctx.font = "1000 13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("隐藏洞穴 · 99分终章", x + 12, GROUND_Y - 128);
    ctx.restore();
  }

  function drawCaveDarkness() {
    if (!caveEnabled || player.x < caveStartX || player.x >= caveEndX) return;
    if (caveSunActive) {
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      const daylight = ctx.createLinearGradient(0, -worldYOffset, 0, WORLD_HEIGHT - worldYOffset);
      daylight.addColorStop(0, "rgba(255,244,176,0.64)");
      daylight.addColorStop(1, "rgba(255,207,103,0.34)");
      ctx.fillStyle = daylight;
      ctx.fillRect(0, -worldYOffset, logicalWidth, WORLD_HEIGHT - worldYOffset);
      ctx.globalCompositeOperation = "source-over";
      const sunX = logicalWidth - 76;
      const sunY = 72 - worldYOffset;
      ctx.strokeStyle = "rgba(255,210,73,0.9)";
      ctx.lineWidth = 4;
      for (let ray = 0; ray < 8; ray += 1) {
        const angle = ray * Math.PI / 4 + elapsed * 0.08;
        ctx.beginPath();
        ctx.moveTo(sunX + Math.cos(angle) * 26, sunY + Math.sin(angle) * 26);
        ctx.lineTo(sunX + Math.cos(angle) * 36, sunY + Math.sin(angle) * 36);
        ctx.stroke();
      }
      ctx.fillStyle = "#ffe16b";
      ctx.beginPath();
      ctx.arc(sunX, sunY, 19, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#7a5620";
      ctx.font = "1000 10px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("每日太阳", sunX, sunY + 42);
      ctx.restore();
      return;
    }
    const progress = Math.max(0, Math.min(1, caveDarknessProgress));
    if (progress <= 0.001) return;
    const playerScreenX = player.x - cameraX;
    const lightX = playerScreenX + player.w + 40 + Math.sin(elapsed * 8) * 3;
    const lightY = player.y + player.h * 0.48;
    const radius = caveFlashlightRadius();
    const darkness = ctx.createRadialGradient(lightX, lightY, 17, lightX, lightY, radius);
    darkness.addColorStop(0, "rgba(0,0,0,0)");
    darkness.addColorStop(0.48, `rgba(0,0,0,${(0.025 * progress).toFixed(3)})`);
    darkness.addColorStop(0.7, `rgba(0,0,0,${(0.4 * progress).toFixed(3)})`);
    darkness.addColorStop(0.9, `rgba(0,0,0,${(0.82 * progress).toFixed(3)})`);
    darkness.addColorStop(1, `rgba(0,0,0,${(0.94 * progress).toFixed(3)})`);
    ctx.save();
    ctx.fillStyle = darkness;
    ctx.fillRect(0, -worldYOffset, logicalWidth, WORLD_HEIGHT - worldYOffset);
    const flashlightGlow = ctx.createRadialGradient(lightX, lightY, 4, lightX, lightY, radius * 0.58);
    flashlightGlow.addColorStop(0, `rgba(255,250,205,${(0.42 * progress).toFixed(3)})`);
    flashlightGlow.addColorStop(0.45, `rgba(255,238,154,${(0.2 * progress).toFixed(3)})`);
    flashlightGlow.addColorStop(1, "rgba(255,224,125,0)");
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = flashlightGlow;
    ctx.fillRect(0, -worldYOffset, logicalWidth, WORLD_HEIGHT - worldYOffset);
    ctx.restore();
  }

  function drawCloud(x, y, s) {
    if (x < -180 || x > logicalWidth + 180) return;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(s, s);
    ctx.shadowColor = "rgba(42, 111, 146, 0.18)";
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 8;
    const cloudFill = ctx.createLinearGradient(0, -25, 0, 34);
    cloudFill.addColorStop(0, "rgba(255,255,255,0.98)");
    cloudFill.addColorStop(1, "rgba(224,244,249,0.9)");
    ctx.fillStyle = cloudFill;
    ctx.beginPath();
    ctx.arc(0, 12, 26, Math.PI, 0);
    ctx.arc(29, 3, 35, Math.PI, 0);
    ctx.arc(70, 15, 23, Math.PI, 0);
    ctx.lineTo(92, 29);
    ctx.lineTo(-25, 29);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawMountainLayer(parallax, baseY, height, front, snow, spacing) {
    const offset = -((cameraX * parallax) % spacing);
    for (let x = offset - spacing; x < logicalWidth + spacing; x += spacing) {
      const mountainFill = ctx.createLinearGradient(0, baseY - height, 0, baseY);
      mountainFill.addColorStop(0, snow);
      mountainFill.addColorStop(0.24, front);
      mountainFill.addColorStop(1, shadeColor(front, -18));
      ctx.fillStyle = mountainFill;
      ctx.beginPath();
      ctx.moveTo(x, baseY);
      ctx.lineTo(x + spacing * 0.52, baseY - height);
      ctx.lineTo(x + spacing, baseY);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = snow;
      ctx.beginPath();
      ctx.moveTo(x + spacing * 0.52, baseY - height);
      ctx.lineTo(x + spacing * 0.36, baseY - height * 0.68);
      ctx.lineTo(x + spacing * 0.48, baseY - height * 0.74);
      ctx.lineTo(x + spacing * 0.56, baseY - height * 0.66);
      ctx.lineTo(x + spacing * 0.66, baseY - height * 0.72);
      ctx.closePath();
      ctx.fill();
    }
  }

  function drawHillLayer(theme = currentTheme()) {
    const spacing = 270;
    const offset = -((cameraX * 0.42) % spacing);
    for (let x = offset - spacing; x < logicalWidth + spacing; x += spacing) {
      const hillFill = ctx.createLinearGradient(0, 318, 0, 470);
      hillFill.addColorStop(0, theme.hill[0]);
      hillFill.addColorStop(0.65, shadeColor(theme.hill[0], -10));
      hillFill.addColorStop(1, theme.hill[1]);
      ctx.fillStyle = hillFill;
      ctx.beginPath();
      ctx.arc(x + spacing * 0.48, 452, 138, Math.PI, 0);
      ctx.lineTo(x + spacing, 470);
      ctx.lineTo(x, 470);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.beginPath();
      ctx.arc(x + spacing * 0.37, 390, 13, 0, Math.PI * 2);
      ctx.arc(x + spacing * 0.61, 412, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawGround() {
    const theme = currentTheme();
    for (const segment of groundSegments) {
      const x = segment.start - cameraX;
      const w = segment.end - segment.start;
      if (x > logicalWidth + 100 || x + w < -100) continue;

      const soil = ctx.createLinearGradient(0, GROUND_Y + 8, 0, WORLD_HEIGHT);
      soil.addColorStop(0, theme.soil[0]);
      soil.addColorStop(0.22, shadeColor(theme.soil[0], -14));
      soil.addColorStop(1, theme.soil[1]);
      ctx.fillStyle = soil;
      ctx.fillRect(x, GROUND_Y + 10, w, WORLD_HEIGHT - GROUND_Y - worldYOffset);
      ctx.fillStyle = "rgba(77, 46, 30, 0.4)";
      ctx.fillRect(x, GROUND_Y + 25, w, 4);

      const grass = ctx.createLinearGradient(0, GROUND_Y, 0, GROUND_Y + 18);
      grass.addColorStop(0, theme.grass[0]);
      grass.addColorStop(0.38, shadeColor(theme.grass[0], -12));
      grass.addColorStop(1, theme.grass[1]);
      ctx.fillStyle = grass;
      ctx.fillRect(x, GROUND_Y, w, 16);
      ctx.fillStyle = "rgba(255,255,255,0.44)";
      ctx.fillRect(x, GROUND_Y, w, 3);
      ctx.fillStyle = "rgba(24, 91, 62, 0.34)";
      ctx.fillRect(x, GROUND_Y + 14, w, 4);

      const firstMark = Math.floor(segment.start / 64) * 64;
      for (let mark = firstMark; mark < segment.end; mark += 64) {
        const mx = mark - cameraX;
        if (mx < -20 || mx > logicalWidth + 20) continue;
        ctx.fillStyle = "rgba(255, 211, 141, 0.17)";
        ctx.fillRect(mx + 2, GROUND_Y + 31, 2, WORLD_HEIGHT - GROUND_Y - 31 - worldYOffset);
        ctx.fillStyle = "rgba(67, 40, 29, 0.24)";
        ctx.fillRect(mx + 4, GROUND_Y + 31, 2, WORLD_HEIGHT - GROUND_Y - 31 - worldYOffset);
        ctx.fillStyle = "rgba(65, 39, 27, 0.28)";
        fillRoundedRect(mx + 17, GROUND_Y + 43 + ((mark / 64) % 2) * 18, 22, 6, 3);
        ctx.fillStyle = "rgba(244, 185, 108, 0.22)";
        fillRoundedRect(mx + 18, GROUND_Y + 43 + ((mark / 64) % 2) * 18, 15, 2, 1);
      }
    }
  }

  function drawHoles() {
    for (let i = 0; i < groundSegments.length - 1; i += 1) {
      const start = groundSegments[i].end;
      const end = groundSegments[i + 1].start;
      const x = start - cameraX;
      const w = end - start;
      if (x > logicalWidth + 40 || x + w < -40) continue;

      const depth = ctx.createLinearGradient(0, GROUND_Y + 6, 0, WORLD_HEIGHT);
      depth.addColorStop(0, "rgba(38, 92, 105, 0.08)");
      depth.addColorStop(0.45, "rgba(34, 66, 79, 0.35)");
      depth.addColorStop(1, "rgba(20, 36, 49, 0.78)");
      ctx.fillStyle = depth;
      ctx.fillRect(x, GROUND_Y + 4, w, WORLD_HEIGHT - GROUND_Y - worldYOffset);

      const leftWall = ctx.createLinearGradient(x, 0, x + 13, 0);
      leftWall.addColorStop(0, "rgba(54, 34, 25, 0.58)");
      leftWall.addColorStop(1, "rgba(54, 34, 25, 0)");
      ctx.fillStyle = leftWall;
      ctx.fillRect(x, GROUND_Y + 8, 13, WORLD_HEIGHT - GROUND_Y - worldYOffset);

      const rightWall = ctx.createLinearGradient(x + w, 0, x + w - 13, 0);
      rightWall.addColorStop(0, "rgba(54, 34, 25, 0.58)");
      rightWall.addColorStop(1, "rgba(54, 34, 25, 0)");
      ctx.fillStyle = rightWall;
      ctx.fillRect(x + w - 13, GROUND_Y + 8, 13, WORLD_HEIGHT - GROUND_Y - worldYOffset);

      ctx.save();
      ctx.beginPath();
      ctx.rect(x, GROUND_Y, w, WORLD_HEIGHT - GROUND_Y - worldYOffset);
      ctx.clip();

      const ledgeShade = currentTheme().soil?.[1] || "#49362f";
      ctx.fillStyle = ledgeShade;
      ctx.beginPath();
      ctx.moveTo(x, GROUND_Y + 3);
      ctx.lineTo(x + 12, GROUND_Y + 12);
      ctx.lineTo(x + 7, GROUND_Y + 25);
      ctx.lineTo(x + 17, GROUND_Y + 38);
      ctx.lineTo(x + 9, WORLD_HEIGHT);
      ctx.lineTo(x, WORLD_HEIGHT);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x + w, GROUND_Y + 3);
      ctx.lineTo(x + w - 12, GROUND_Y + 14);
      ctx.lineTo(x + w - 7, GROUND_Y + 27);
      ctx.lineTo(x + w - 18, GROUND_Y + 41);
      ctx.lineTo(x + w - 9, WORLD_HEIGHT);
      ctx.lineTo(x + w, WORLD_HEIGHT);
      ctx.closePath();
      ctx.fill();

      for (let depthMark = 0; depthMark < 3; depthMark += 1) {
        const markY = GROUND_Y + 26 + depthMark * 27 + ((i * 11 + depthMark * 7) % 9);
        ctx.strokeStyle = `rgba(196, 154, 111, ${0.24 - depthMark * 0.045})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(x + 4, markY);
        ctx.lineTo(x + 11 + (depthMark % 2) * 4, markY + 7);
        ctx.lineTo(x + 7, markY + 14);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + w - 4, markY + 4);
        ctx.lineTo(x + w - 12 - (depthMark % 2) * 4, markY + 11);
        ctx.lineTo(x + w - 8, markY + 18);
        ctx.stroke();
      }

      const mist = ctx.createLinearGradient(0, WORLD_HEIGHT - 48, 0, WORLD_HEIGHT);
      mist.addColorStop(0, "rgba(137, 186, 200, 0)");
      mist.addColorStop(1, "rgba(123, 170, 185, .24)");
      ctx.fillStyle = mist;
      ctx.fillRect(x, WORLD_HEIGHT - 52, w, 52);
      ctx.restore();

      ctx.fillStyle = "rgba(255,255,255,.34)";
      ctx.beginPath();
      ctx.moveTo(x - 1, GROUND_Y);
      ctx.lineTo(x + 9, GROUND_Y + 3);
      ctx.lineTo(x + 3, GROUND_Y + 6);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(x + w + 1, GROUND_Y);
      ctx.lineTo(x + w - 9, GROUND_Y + 3);
      ctx.lineTo(x + w - 3, GROUND_Y + 6);
      ctx.closePath();
      ctx.fill();
    }
  }

  function drawSigns() {
    drawSign(460, "轻点", "跳");
    drawSign(1265, "下滑", "蹲");
    if (caveEnabled) drawSign(caveStartX - 250, "前方", "洞穴");
  }

  function drawSign(worldX, top, bottom) {
    const x = worldX - cameraX;
    if (x < -100 || x > logicalWidth + 100) return;
    ctx.save();
    ctx.shadowColor = "rgba(30, 52, 44, 0.24)";
    ctx.shadowBlur = 7;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 6;
    const postFill = ctx.createLinearGradient(x + 30, 0, x + 42, 0);
    postFill.addColorStop(0, "#8d633d");
    postFill.addColorStop(1, "#4e3427");
    ctx.fillStyle = postFill;
    fillRoundedRect(x + 31, GROUND_Y - 88, 8, 88, 4);
    const signFill = ctx.createLinearGradient(0, GROUND_Y - 115, 0, GROUND_Y - 55);
    signFill.addColorStop(0, "#fffef1");
    signFill.addColorStop(1, "#f3dfb1");
    ctx.fillStyle = signFill;
    ctx.strokeStyle = "#6d4b30";
    ctx.lineWidth = 4;
    pathRoundedRect(x, GROUND_Y - 115, 70, 60, 10);
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    ctx.fillStyle = "rgba(255,255,255,0.72)";
    fillRoundedRect(x + 9, GROUND_Y - 107, 49, 4, 2);
    ctx.fillStyle = "#43606d";
    ctx.textAlign = "center";
    ctx.font = "800 12px system-ui, sans-serif";
    ctx.fillText(top, x + 35, GROUND_Y - 91);
    ctx.fillStyle = "#ef7541";
    ctx.font = "1000 19px system-ui, sans-serif";
    ctx.fillText(bottom, x + 35, GROUND_Y - 68);
    ctx.restore();
  }

  function drawFinishGate() {
    const x = levelEnd - cameraX;
    if (x < -180 || x > logicalWidth + 220) return;

    ctx.save();
    ctx.lineCap = "round";
    const colors = ["#ff665f", "#ffb84f", "#ffe16a", "#58c984", "#62a9e8", "#a47ddd"];
    for (let i = 0; i < colors.length; i += 1) {
      ctx.strokeStyle = colors[i];
      ctx.lineWidth = 9;
      ctx.beginPath();
      ctx.arc(x, GROUND_Y - 3, 94 - i * 10, Math.PI, 0);
      ctx.stroke();
    }
    ctx.fillStyle = "#fff9df";
    ctx.strokeStyle = "#31596a";
    ctx.lineWidth = 4;
    pathRoundedRect(x - 47, GROUND_Y - 148, 94, 34, 12);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#31596a";
    ctx.textAlign = "center";
    ctx.font = "1000 16px system-ui, sans-serif";
    ctx.fillText("终 点", x, GROUND_Y - 125);
    ctx.restore();
  }

  function drawCoins() {
    for (let i = 0; i < coins.length; i += 1) {
      const coin = coins[i];
      if (coin.collected) continue;
      const x = coin.x - cameraX;
      const radius = coin.big ? 22 : 14;
      if (x < -45 || x > logicalWidth + 45) continue;
      const squeeze = 0.72 + Math.abs(Math.cos(elapsed * 4.8 + i * 0.7)) * 0.28;
      ctx.save();
      ctx.translate(x, coin.y + Math.sin(elapsed * 3 + i) * 2);
      ctx.scale(squeeze, 1);
      if (coin.big) {
        ctx.globalAlpha = 0.22 + Math.sin(elapsed * 5 + i) * 0.06;
        ctx.fillStyle = "#fff4a3";
        ctx.beginPath();
        ctx.arc(0, 0, 31, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      ctx.fillStyle = "rgba(63,66,46,0.18)";
      ctx.beginPath();
      ctx.ellipse(2, radius + 3, radius * 0.92, coin.big ? 6 : 4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowColor = "rgba(133, 83, 24, 0.28)";
      ctx.shadowBlur = coin.big ? 12 : 7;
      ctx.shadowOffsetY = 4;
      ctx.fillStyle = "#b96627";
      ctx.beginPath();
      ctx.arc(1.5, 2.5, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowColor = "transparent";
      const coinFill = ctx.createLinearGradient(-radius * 0.7, -radius, radius * 0.7, radius);
      coinFill.addColorStop(0, "#fff5a0");
      coinFill.addColorStop(0.35, "#ffd34f");
      coinFill.addColorStop(1, "#ee922f");
      ctx.fillStyle = coinFill;
      ctx.strokeStyle = "#a95d25";
      ctx.lineWidth = coin.big ? 4 : 3;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = "rgba(255,255,255,0.6)";
      ctx.lineWidth = coin.big ? 2 : 1.5;
      ctx.beginPath();
      ctx.arc(-1, -1, radius * 0.68, Math.PI * 1.08, Math.PI * 1.72);
      ctx.stroke();
      if (coin.big) {
        ctx.fillStyle = "#fff7bf";
        ctx.strokeStyle = "#b56b25";
        ctx.lineWidth = 1.5;
        ctx.font = "1000 18px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("3", 0, 1);
        ctx.strokeText("3", 0, 1);
        if (coin.requiresCombo) {
          ctx.save();
          ctx.scale(1 / squeeze, 1);
          ctx.fillStyle = "rgba(23,54,74,0.86)";
          ctx.font = "1000 9px system-ui, sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("二连跳", 0, -31);
          ctx.restore();
        }
      } else {
        drawStar(0, 0, 6, 2.8, 5, "#fff2a4");
      }
      ctx.restore();
    }
  }

  function drawSprings() {
    for (const spring of springs) {
      const x = spring.x - cameraX;
      if (x < -90 || x > logicalWidth + 90) continue;
      const squash = spring.bounceTime > 0 ? 0.58 : 1;
      const h = spring.h * squash;
      ctx.save();
      ctx.fillStyle = "rgba(31, 58, 55, 0.2)";
      ctx.beginPath();
      ctx.ellipse(x + spring.w * 0.5, GROUND_Y + 3, spring.w * 0.52, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#31536a";
      ctx.lineWidth = 4;
      ctx.beginPath();
      const coilTop = spring.y + spring.h - h;
      for (let i = 0; i < 4; i += 1) {
        const px = x + 10 + i * (spring.w - 20) / 3;
        ctx.moveTo(px, GROUND_Y - 1);
        ctx.lineTo(px + (i % 2 ? -5 : 5), coilTop + 3);
      }
      ctx.stroke();
      const pad = ctx.createLinearGradient(0, coilTop, 0, coilTop + 10);
      pad.addColorStop(0, "#fff07d");
      pad.addColorStop(0.45, "#ffb947");
      pad.addColorStop(1, "#e66b36");
      ctx.fillStyle = pad;
      ctx.strokeStyle = "#8e4b31";
      ctx.lineWidth = 3;
      pathRoundedRect(x, coilTop - 3, spring.w, 12, 6);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.62)";
      fillRoundedRect(x + 8, coilTop, spring.w - 20, 3, 1.5);
      ctx.restore();
    }
  }

  function drawSpecialEvents() {
    const pulse = 0.62 + Math.sin(elapsed * 14) * 0.28;
    for (const event of specialEvents) {
      if (event.state !== "warning" || event.x === null) continue;
      const x = event.x - cameraX;
      if (x < -180 || x > logicalWidth + 180) continue;
      ctx.save();
      if (event.kind === "surpriseHole") {
        ctx.globalAlpha = pulse;
        ctx.strokeStyle = "#6e3b2c";
        ctx.lineWidth = 4;
        ctx.setLineDash([9, 7]);
        ctx.beginPath();
        ctx.moveTo(x, GROUND_Y + 2);
        ctx.lineTo(x + event.width, GROUND_Y + 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.strokeStyle = "#4f3a32";
        ctx.lineWidth = 3;
        for (let i = 0; i < 4; i += 1) {
          const crackX = x + 12 + i * (event.width - 24) / 3;
          ctx.beginPath();
          ctx.moveTo(crackX, GROUND_Y + 1);
          ctx.lineTo(crackX + (i % 2 ? 7 : -6), GROUND_Y + 10);
          ctx.lineTo(crackX + (i % 2 ? 1 : 3), GROUND_Y + 17);
          ctx.stroke();
        }
        drawWarningMark(x + event.width * 0.5, GROUND_Y - 58, "地面要裂开");
      } else if (event.kind === "fallingBall" || event.kind === "fallingRock" || event.kind === "doubleDrop") {
        ctx.globalAlpha = pulse;
        ctx.fillStyle = "rgba(45, 55, 63, 0.3)";
        ctx.beginPath();
        ctx.ellipse(x + event.width * 0.5, GROUND_Y + 1, 28, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(52, 71, 83, 0.48)";
        ctx.lineWidth = 3;
        ctx.setLineDash([7, 8]);
        ctx.beginPath();
        ctx.moveTo(x + event.width * 0.5, 62);
        ctx.lineTo(x + event.width * 0.5, GROUND_Y - 7);
        ctx.stroke();
        ctx.setLineDash([]);
        const warningText = event.kind === "fallingRock" ? "石头坠落" : event.kind === "doubleDrop" ? "双重坠落" : "足球坠落";
        drawWarningMark(x + event.width * 0.5, 112, warningText);
      } else if (event.kind === "crowRush") {
        ctx.globalAlpha = pulse;
        ctx.strokeStyle = "rgba(37, 48, 58, 0.72)";
        ctx.lineWidth = 4;
        ctx.setLineDash([12, 8]);
        ctx.beginPath();
        ctx.moveTo(x - 30, 305);
        ctx.lineTo(x + event.width + 30, 305);
        ctx.moveTo(x - 30, 390);
        ctx.lineTo(x + event.width + 30, 390);
        ctx.stroke();
        ctx.setLineDash([]);
        drawWarningMark(x + event.width * 0.5, 250, "乌鸦突袭");
      } else {
        ctx.globalAlpha = pulse;
        ctx.fillStyle = "rgba(72, 45, 29, 0.42)";
        ctx.beginPath();
        ctx.ellipse(x + event.width * 0.5, GROUND_Y + 1, event.width * 0.55, 9, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(79, 52, 34, 0.5)";
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(x + 4, 60);
        ctx.lineTo(x + event.width - 4, 60);
        ctx.stroke();
        drawWarningMark(x + event.width * 0.5, 112, "上方掉落");
      }
      ctx.restore();
    }

    for (const branch of fallingBranches) {
      const x = branch.x - cameraX;
      if (x < -120 || x > logicalWidth + 120) continue;
      drawFallenBranch(x, branch.y, branch.w, branch.h, true);
    }

    for (const ball of fallingBalls) {
      const x = ball.x - cameraX;
      if (x < -70 || x > logicalWidth + 70) continue;
      drawFootball(x, ball.y, ball.radius, ball.rotation);
    }
    for (const rock of fallingRocks) {
      const x = rock.x - cameraX;
      if (x < -80 || x > logicalWidth + 80) continue;
      drawFallingRock(x, rock.y, rock.radius, rock.rotation);
    }
  }

  function drawFallingRock(x, y, radius, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.shadowColor = "rgba(27,38,43,0.34)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 5;
    const rockFill = ctx.createLinearGradient(-radius, -radius, radius, radius);
    rockFill.addColorStop(0, "#9ba9a8");
    rockFill.addColorStop(0.48, "#647777");
    rockFill.addColorStop(1, "#374d50");
    ctx.fillStyle = rockFill;
    ctx.strokeStyle = "#2c4145";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-radius * 0.82, radius * 0.36);
    ctx.lineTo(-radius * 0.64, -radius * 0.62);
    ctx.lineTo(-radius * 0.08, -radius);
    ctx.lineTo(radius * 0.74, -radius * 0.48);
    ctx.lineTo(radius, radius * 0.35);
    ctx.lineTo(radius * 0.33, radius * 0.9);
    ctx.lineTo(-radius * 0.48, radius * 0.76);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    ctx.fillStyle = "rgba(255,255,255,0.24)";
    ctx.beginPath();
    ctx.ellipse(-radius * 0.28, -radius * 0.35, radius * 0.28, radius * 0.13, -0.45, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawFootball(x, y, radius, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.shadowColor = "rgba(25,42,51,0.32)";
    ctx.shadowBlur = 7;
    ctx.shadowOffsetY = 5;
    ctx.fillStyle = "#fffdf3";
    ctx.strokeStyle = "#263c49";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    drawStar(0, 0, radius * 0.42, radius * 0.19, 5, "#263c49");
    ctx.strokeStyle = "#263c49";
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i += 1) {
      const angle = -Math.PI / 2 + i * Math.PI * 0.4;
      ctx.beginPath();
      ctx.moveTo(Math.cos(angle) * radius * 0.38, Math.sin(angle) * radius * 0.38);
      ctx.lineTo(Math.cos(angle) * radius * 0.82, Math.sin(angle) * radius * 0.82);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawWarningMark(x, y, label) {
    ctx.save();
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff7df";
    ctx.strokeStyle = "#713b2d";
    ctx.lineWidth = 3;
    pathRoundedRect(x - 48, y - 25, 96, 39, 12);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#f05a45";
    ctx.font = "1000 21px system-ui, sans-serif";
    ctx.fillText("!", x - 31, y + 3);
    ctx.fillStyle = "#4a5360";
    ctx.font = "900 11px system-ui, sans-serif";
    ctx.fillText(label, x + 11, y);
    ctx.restore();
  }

  function drawHazards() {
    for (const hazard of hazards) {
      const x = hazard.x - cameraX;
      if (x < -160 || x > logicalWidth + 160) continue;
      if (hazard.kind === "rock") drawRock(x, hazard);
      else if (hazard.kind === "branch") drawBranch(x, hazard);
      else if (hazard.kind === "blackHole") drawBlackHole(x, hazard);
      else drawFallenBranch(x, hazard.y, hazard.w, hazard.h, false);
    }
  }

  function drawBlackHole(x, hazard) {
    const cx = x + hazard.w * 0.5;
    const cy = hazard.y + hazard.h * 0.5;
    const radiusX = Math.max(32, hazard.w * 0.44);
    const radiusY = Math.max(22, hazard.h * 0.38);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = "rgba(18, 12, 43, .34)";
    ctx.beginPath();
    ctx.ellipse(0, radiusY * 0.7, radiusX * 1.08, radiusY * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.rotate(elapsed * 1.8);
    ctx.shadowColor = "rgba(45, 27, 91, 0.5)";
    ctx.shadowBlur = 18;
    for (let ring = 0; ring < 4; ring += 1) {
      ctx.strokeStyle = ["#bb75ff", "#6b65da", "#35b7d1", "#df8cff"][ring];
      ctx.globalAlpha = 0.78 - ring * 0.12;
      ctx.lineWidth = 8 - ring;
      ctx.beginPath();
      ctx.ellipse(
        0,
        0,
        radiusX - ring * radiusX * 0.12,
        radiusY - ring * radiusY * 0.105,
        ring * 0.42,
        0,
        Math.PI * 1.62,
      );
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    const coreRadius = Math.max(22, Math.min(radiusX * 0.67, radiusY * 0.94));
    const core = ctx.createRadialGradient(-5, -5, 1, 0, 0, coreRadius);
    core.addColorStop(0, "#111423");
    core.addColorStop(0.65, "#080914");
    core.addColorStop(1, "#010107");
    ctx.fillStyle = core;
    ctx.beginPath();
    ctx.ellipse(0, 0, coreRadius, coreRadius * 0.82, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowColor = "transparent";
    ctx.fillStyle = "#fff2a4";
    for (let dot = 0; dot < 3; dot += 1) {
      const angle = elapsed * (2 + dot * 0.3) + dot * 2.1;
      ctx.beginPath();
      ctx.arc(
        Math.cos(angle) * (radiusX * 0.82 + dot * 2),
        Math.sin(angle) * (radiusY * 0.72 + dot),
        2.2,
        0,
        Math.PI * 2,
      );
      ctx.fill();
    }
    ctx.restore();
    if (hazard.warning) {
      drawWarningMark(
        cx,
        Math.max(76, hazard.y - 27),
        hazard.tutorial ? "不能碰 · 跳" : "黑洞 · 跳",
      );
    }
  }

  function drawFallenBranch(x, y, w, h, falling) {
    ctx.save();
    ctx.shadowColor = "rgba(45, 35, 28, 0.32)";
    ctx.shadowBlur = 7;
    ctx.shadowOffsetY = 5;
    const wood = ctx.createLinearGradient(0, y, 0, y + h);
    wood.addColorStop(0, "#c48349");
    wood.addColorStop(0.52, "#815237");
    wood.addColorStop(1, "#4b342a");
    ctx.fillStyle = wood;
    ctx.strokeStyle = "#403229";
    ctx.lineWidth = 4;
    pathRoundedRect(x, y, w, h, 12);
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    ctx.fillStyle = "rgba(255, 210, 141, 0.35)";
    fillRoundedRect(x + 12, y + 5, w * 0.48, 5, 2.5);
    ctx.fillStyle = "#5e3e2f";
    ctx.beginPath();
    ctx.arc(x + w - 10, y + h * 0.5, 6, 0, Math.PI * 2);
    ctx.fill();
    if (falling) {
      ctx.fillStyle = "rgba(255,255,255,0.56)";
      fillRoundedRect(x + 11, y - 18, 4, 12, 2);
      fillRoundedRect(x + w - 16, y - 26, 4, 16, 2);
    }
    ctx.restore();
  }

  function drawRock(x, hazard) {
    const y = GROUND_Y - hazard.h;
    ctx.fillStyle = "rgba(25,53,54,0.22)";
    ctx.beginPath();
    ctx.ellipse(x + hazard.w * 0.5, GROUND_Y + 2, hazard.w * 0.55, 7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.shadowColor = "rgba(22, 47, 54, 0.35)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 6;
    const rockFill = ctx.createLinearGradient(x, y, x + hazard.w, GROUND_Y);
    rockFill.addColorStop(0, "#a9bec0");
    rockFill.addColorStop(0.38, "#718b90");
    rockFill.addColorStop(1, "#405a64");
    ctx.fillStyle = rockFill;
    ctx.strokeStyle = "#2e4b55";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x + 5, GROUND_Y - 2);
    ctx.lineTo(x + 10, y + hazard.h * 0.44);
    ctx.lineTo(x + hazard.w * 0.37, y + 5);
    ctx.lineTo(x + hazard.w * 0.75, y + 12);
    ctx.lineTo(x + hazard.w - 4, GROUND_Y - 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    const rockLight = ctx.createLinearGradient(x, y, x + hazard.w * 0.62, y + hazard.h * 0.6);
    rockLight.addColorStop(0, "rgba(239, 251, 244, 0.72)");
    rockLight.addColorStop(1, "rgba(174, 203, 201, 0.08)");
    ctx.fillStyle = rockLight;
    ctx.beginPath();
    ctx.moveTo(x + hazard.w * 0.34, y + 8);
    ctx.lineTo(x + hazard.w * 0.56, y + 13);
    ctx.lineTo(x + hazard.w * 0.43, y + hazard.h * 0.54);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function drawBranch(x, hazard) {
    ctx.fillStyle = "rgba(28,67,51,0.12)";
    ctx.beginPath();
    ctx.ellipse(x + hazard.w * 0.5, GROUND_Y + 1, hazard.w * 0.52, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.shadowColor = "rgba(31, 61, 42, 0.3)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = 6;
    const branchFill = ctx.createLinearGradient(0, hazard.y, 0, hazard.y + hazard.h);
    branchFill.addColorStop(0, "#ae7544");
    branchFill.addColorStop(0.46, "#795033");
    branchFill.addColorStop(1, "#4e3428");
    ctx.fillStyle = branchFill;
    ctx.strokeStyle = "#3d3328";
    ctx.lineWidth = 4;
    pathRoundedRect(x, hazard.y, hazard.w, hazard.h, 12);
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    ctx.fillStyle = "#9a693d";
    fillRoundedRect(x + 15, hazard.y + 6, hazard.w * 0.45, 6, 3);

    const leafFill = ctx.createLinearGradient(0, hazard.y - 30, 0, hazard.y + 5);
    leafFill.addColorStop(0, "#87dd84");
    leafFill.addColorStop(1, "#34955f");
    ctx.fillStyle = leafFill;
    for (let i = 0; i < 5; i += 1) {
      const lx = x + 10 + i * (hazard.w - 20) / 4;
      ctx.beginPath();
      ctx.ellipse(lx, hazard.y - 5 - (i % 2) * 5, 20, 14, i % 2 ? 0.3 : -0.3, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "#72cf78";
    ctx.beginPath();
    ctx.ellipse(x + hazard.w * 0.32, hazard.y - 13, 18, 10, -0.3, 0, Math.PI * 2);
    ctx.ellipse(x + hazard.w * 0.75, hazard.y - 10, 18, 10, 0.3, 0, Math.PI * 2);
    ctx.fill();
    if (hazard.crouchObstacle) {
      ctx.fillStyle = "#ffd45c";
      ctx.strokeStyle = "#7d552c";
      ctx.lineWidth = 2;
      pathRoundedRect(x + hazard.w * 0.5 - 21, hazard.y + hazard.h + 3, 42, 18, 7);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#6a431f";
      ctx.font = "1000 9px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("↓ 蹲", x + hazard.w * 0.5, hazard.y + hazard.h + 15);
    }
    ctx.restore();
  }

  function drawEnemies() {
    for (let i = 0; i < enemies.length; i += 1) {
      const enemy = enemies[i];
      if (!enemy.alive) continue;
      const x = enemy.x - cameraX;
      if (x < -80 || x > logicalWidth + 80) continue;
      const bob = Math.sin(elapsed * 6 + i) * 2;
      ctx.save();
      ctx.translate(x, enemy.y + bob);
      ctx.fillStyle = "rgba(33,40,52,0.17)";
      ctx.beginPath();
      ctx.ellipse(enemy.w * 0.5, enemy.h + 3, enemy.w * 0.48, 6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowColor = "rgba(45, 34, 71, 0.28)";
      ctx.shadowBlur = 7;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 4;
      const enemyFill = ctx.createLinearGradient(0, 0, enemy.w, enemy.h);
      enemyFill.addColorStop(0, "#c69ce6");
      enemyFill.addColorStop(0.46, "#8d68bd");
      enemyFill.addColorStop(1, "#604a8f");
      ctx.fillStyle = enemyFill;
      ctx.strokeStyle = "#463a67";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(2, enemy.h);
      ctx.quadraticCurveTo(4, 3, enemy.w * 0.5, 1);
      ctx.quadraticCurveTo(enemy.w - 4, 3, enemy.w - 2, enemy.h);
      ctx.quadraticCurveTo(enemy.w * 0.75, enemy.h - 6, enemy.w * 0.5, enemy.h);
      ctx.quadraticCurveTo(enemy.w * 0.25, enemy.h - 6, 2, enemy.h);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.shadowColor = "transparent";
      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.beginPath();
      ctx.ellipse(13, 8, 6, 3, -0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(15, 14, 5, 0, Math.PI * 2);
      ctx.arc(28, 14, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#25384a";
      ctx.beginPath();
      ctx.arc(17, 15, 2.2, 0, Math.PI * 2);
      ctx.arc(30, 15, 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function drawCrows() {
    for (let index = 0; index < crows.length; index += 1) {
      const crow = crows[index];
      if (!crow.alive) continue;
      const x = crow.x - cameraX;
      if (x < -90 || x > logicalWidth + 90) continue;
      const wing = Math.sin(elapsed * 13 + crow.phase) * 9;
      ctx.save();
      ctx.translate(x + crow.w * 0.5, crow.y + crow.h * 0.5);
      ctx.scale(crow.direction, 1);
      ctx.shadowColor = "rgba(23,35,45,0.24)";
      ctx.shadowBlur = 6;
      ctx.shadowOffsetY = 4;
      ctx.fillStyle = "#26333e";
      ctx.strokeStyle = "#17232d";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(0, 2, 17, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-5, 2);
      ctx.quadraticCurveTo(-18, -17 - wing, -25, -5);
      ctx.quadraticCurveTo(-14, -2, -4, 8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(4, 2);
      ctx.quadraticCurveTo(14, -16 + wing, 23, -4);
      ctx.quadraticCurveTo(14, 1, 5, 8);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.shadowColor = "transparent";
      ctx.fillStyle = "#364957";
      ctx.beginPath();
      ctx.arc(14, -4, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffd15c";
      ctx.beginPath();
      ctx.moveTo(20, -5);
      ctx.lineTo(30, -1);
      ctx.lineTo(20, 1);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(16, -7, 2.6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#111a21";
      ctx.beginPath();
      ctx.arc(17, -7, 1.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function drawAirplanes() {
    for (const plane of airplanes) {
      if (!plane.active) continue;
      const x = plane.x - cameraX;
      if (x < -130 || x > logicalWidth + 130) continue;
      ctx.save();
      ctx.translate(x + plane.w * 0.5, plane.y + plane.h * 0.5);
      ctx.scale(plane.direction, 1);
      ctx.shadowColor = "rgba(21,43,58,.28)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 5;

      ctx.fillStyle = "#dcecf3";
      ctx.strokeStyle = "#31536a";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-35, 4);
      ctx.quadraticCurveTo(-26, -12, 4, -11);
      ctx.quadraticCurveTo(26, -10, 38, 0);
      ctx.quadraticCurveTo(25, 12, -19, 12);
      ctx.quadraticCurveTo(-31, 11, -35, 4);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#5fb7dd";
      ctx.beginPath();
      ctx.moveTo(-6, -5);
      ctx.lineTo(-19, -25);
      ctx.lineTo(-6, -25);
      ctx.lineTo(12, -5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(-8, 7);
      ctx.lineTo(-23, 25);
      ctx.lineTo(-8, 25);
      ctx.lineTo(14, 7);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#ef7658";
      ctx.beginPath();
      ctx.moveTo(-27, -4);
      ctx.lineTo(-38, -20);
      ctx.lineTo(-27, -18);
      ctx.lineTo(-16, -5);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.shadowColor = "transparent";
      ctx.fillStyle = "#284d67";
      for (let windowIndex = 0; windowIndex < 3; windowIndex += 1) {
        ctx.beginPath();
        ctx.arc(2 + windowIndex * 9, -2, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "#fff";
      ctx.font = "900 7px system-ui";
      ctx.textAlign = "center";
      ctx.fillText("SKY", -12, 5);

      const propeller = elapsed * 21;
      ctx.strokeStyle = "#243945";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(38, 0);
      ctx.lineTo(44, 0);
      ctx.stroke();
      ctx.save();
      ctx.translate(45, 0);
      ctx.rotate(propeller);
      ctx.strokeStyle = "rgba(39,58,70,.76)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, -14);
      ctx.lineTo(0, 14);
      ctx.moveTo(-10, 0);
      ctx.lineTo(10, 0);
      ctx.stroke();
      ctx.restore();
      ctx.restore();
    }
  }

  function drawAirplaneBombs() {
    for (const bomb of airplaneBombs) {
      const x = bomb.x - cameraX;
      if (x < -120 || x > logicalWidth + 120) continue;
      if (bomb.state === "falling") {
        const warningPulse = 0.5 + Math.sin(elapsed * 15) * 0.18;
        if (hasGroundAt(bomb.x)) {
          ctx.save();
          ctx.globalAlpha = warningPulse;
          ctx.fillStyle = "rgba(231,67,45,.26)";
          ctx.strokeStyle = "#ef5e43";
          ctx.lineWidth = 3;
          ctx.setLineDash([7, 6]);
          ctx.beginPath();
          ctx.ellipse(x, GROUND_Y + 1, bomb.explosionRadius * 0.72, 10, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.restore();
        }
        ctx.save();
        ctx.translate(x, bomb.y);
        ctx.rotate(bomb.rotation);
        ctx.shadowColor = "rgba(15,25,30,.35)";
        ctx.shadowBlur = 7;
        ctx.fillStyle = "#303b42";
        ctx.strokeStyle = "#17242b";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 1, bomb.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.shadowColor = "transparent";
        ctx.fillStyle = "#ef7650";
        ctx.fillRect(-4, -bomb.radius - 5, 8, 7);
        ctx.strokeStyle = "#ffce51";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, -bomb.radius - 5);
        ctx.quadraticCurveTo(7, -bomb.radius - 12, 10, -bomb.radius - 8);
        ctx.stroke();
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(-4, -3, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else if (bomb.state === "exploding") {
        const progress = 1 - Math.max(0, bomb.timer) / bomb.explosionDuration;
        const radius = bomb.explosionRadius * (0.42 + progress * 0.72);
        ctx.save();
        ctx.globalAlpha = Math.max(0, 1 - progress * 0.78);
        const blast = ctx.createRadialGradient(x, GROUND_Y - 9, 3, x, GROUND_Y - 9, radius);
        blast.addColorStop(0, "#fff9c4");
        blast.addColorStop(0.26, "#ffd33f");
        blast.addColorStop(0.58, "#f16935");
        blast.addColorStop(1, "rgba(116,42,30,0)");
        ctx.fillStyle = blast;
        ctx.beginPath();
        ctx.arc(x, GROUND_Y - 9, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(52,61,64,${Math.max(0, 0.5 - progress * 0.3)})`;
        for (let smoke = 0; smoke < 4; smoke += 1) {
          ctx.beginPath();
          ctx.arc(x + (smoke - 1.5) * 17, GROUND_Y - 28 - progress * (18 + smoke * 4), 11 + progress * 8, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }
  }

  function drawPremiumCharacterEffects() {
    if (gameState !== "playing" || !player) return;
    const character = currentCharacter();
    const tier = characterVisualTier(character);
    if (tier <= 0) return;
    const palette = characterVisualPalette(character);
    const x = player.x - cameraX + player.w * 0.5;
    const y = player.y + player.h * 0.53;
    const speedRatio = Math.max(0, Math.min(1.6, Math.abs(Number(player.vx) || 0) / Math.max(1, runSpeed)));
    const pulse = 0.5 + Math.sin(elapsed * (3.2 + tier * 0.35)) * 0.5;

    ctx.save();
    ctx.globalCompositeOperation = "screen";
    if (tier >= 1 && (speedRatio > 0.25 || !player.onGround)) {
      ctx.globalAlpha = 0.12 + tier * 0.025;
      ctx.strokeStyle = palette[0];
      ctx.lineWidth = 2 + tier * 0.45;
      ctx.lineCap = "round";
      const wake = 25 + speedRatio * (30 + tier * 8);
      ctx.beginPath();
      ctx.moveTo(x - wake, player.surfaceY - 7);
      ctx.quadraticCurveTo(x - wake * 0.42, player.surfaceY - 15 - pulse * 4, x - 8, player.surfaceY - 8);
      ctx.stroke();
    }

    if (tier >= 2) {
      const radius = 27 + tier * 6 + pulse * 4;
      const aura = ctx.createRadialGradient(x, y, 4, x, y, radius);
      aura.addColorStop(0, "rgba(255,255,255,0.22)");
      aura.addColorStop(0.46, `${palette[0]}38`);
      aura.addColorStop(1, `${palette[0]}00`);
      ctx.globalAlpha = 0.52 + speedRatio * 0.13;
      ctx.fillStyle = aura;
      ctx.beginPath();
      ctx.ellipse(x, y, radius * (1 + speedRatio * 0.15), radius, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    if (tier >= 3) {
      ctx.globalAlpha = 0.32 + pulse * 0.14;
      ctx.strokeStyle = palette[1];
      ctx.lineWidth = 1.4;
      ctx.setLineDash([6, 8]);
      ctx.lineDashOffset = -elapsed * 18;
      ctx.beginPath();
      ctx.ellipse(x, y, 30 + tier * 4, 22 + tier * 3, -0.18, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      const lights = tier >= 4 ? 4 : 3;
      for (let index = 0; index < lights; index += 1) {
        const angle = elapsed * (1.8 + tier * 0.12) + (Math.PI * 2 * index) / lights;
        const orbitX = x + Math.cos(angle) * (30 + tier * 4);
        const orbitY = y + Math.sin(angle) * (20 + tier * 3);
        ctx.globalAlpha = 0.42 + pulse * 0.22;
        ctx.shadowColor = palette[index % palette.length];
        ctx.shadowBlur = 7 + tier;
        ctx.fillStyle = palette[index % palette.length];
        ctx.beginPath();
        ctx.arc(orbitX, orbitY, 1.8 + tier * 0.35, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    if (tier >= 4 && (speedRatio > 0.38 || !player.onGround)) {
      const direction = Number(player.vx) < 0 ? -1 : 1;
      for (let echo = 3; echo >= 1; echo -= 1) {
        const echoX = x - direction * echo * (7 + speedRatio * 7);
        ctx.globalAlpha = 0.035 + (4 - echo) * 0.018;
        ctx.fillStyle = palette[(echo - 1) % palette.length];
        ctx.beginPath();
        ctx.ellipse(echoX, y, 14, player.h * 0.37, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function drawMotionAtmosphere() {
    if (gameState !== "playing" || !player || cliffFallState?.active) return;
    const speedRatio = Math.abs(Number(player.vx) || 0) / Math.max(1, runSpeed);
    if (speedRatio < 1.02) return;
    const intensity = Math.max(0, Math.min(1, (speedRatio - 1.02) / 0.48));
    const compact = cssWidth > 0 && cssWidth <= 620;
    const lineCount = compact ? 4 : 7;
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.lineCap = "round";
    for (let index = 0; index < lineCount; index += 1) {
      const cycle = (elapsed * (215 + index * 13) + index * 127) % (logicalWidth + 240);
      const x = logicalWidth + 120 - cycle;
      const y = 100 + ((index * 83 + currentLevel * 29) % 295);
      const length = 46 + index * 7 + intensity * 65;
      const streak = ctx.createLinearGradient(x - length, y, x, y);
      streak.addColorStop(0, "rgba(255,255,255,0)");
      streak.addColorStop(1, `rgba(255,255,255,${(0.06 + intensity * 0.12).toFixed(3)})`);
      ctx.strokeStyle = streak;
      ctx.lineWidth = index % 3 === 0 ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(x - length, y + length * 0.08);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawBoostEffect() {
    if (gameState !== "playing" || canvas.dataset.boosting !== "true" || !(currentCharacter().speedBoost > 1)) return;
    const x = player.x - cameraX;
    const centerY = player.y + player.h * 0.55;
    const color = selectedCharacter === "mbappe" ? "107, 217, 255" : "255, 166, 82";
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    for (let i = 0; i < 6; i += 1) {
      const pulse = (elapsed * 260 + i * 31) % 120;
      const length = 35 + i * 9 + pulse * 0.3;
      const y = centerY - 29 + i * 11 + Math.sin(elapsed * 18 + i) * 3;
      const trail = ctx.createLinearGradient(x - length, y, x + 8, y);
      trail.addColorStop(0, `rgba(${color}, 0)`);
      trail.addColorStop(0.52, `rgba(${color}, 0.22)`);
      trail.addColorStop(1, `rgba(${color}, 0.82)`);
      ctx.strokeStyle = trail;
      ctx.lineWidth = i % 2 === 0 ? 3 : 1.5;
      ctx.beginPath();
      ctx.moveTo(x - length, y);
      ctx.lineTo(x + 8, y);
      ctx.stroke();
    }
    const aura = ctx.createRadialGradient(x + 19, centerY, 4, x + 19, centerY, 42);
    aura.addColorStop(0, `rgba(${color}, 0.34)`);
    aura.addColorStop(1, `rgba(${color}, 0)`);
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.ellipse(x + 19, centerY, 40, 34, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawFlairEffect() {
    if (!player.flairMove || player.flairDuration <= 0) return;
    const t = Math.min(1, player.flairElapsed / player.flairDuration);
    const x = player.x - cameraX + player.w * 0.5;
    const y = player.y + player.h * 0.58;
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.strokeStyle = `rgba(255, 214, 82, ${0.8 * (1 - t)})`;
    ctx.lineWidth = 3;
    ctx.setLineDash([7, 6]);
    ctx.beginPath();
    ctx.arc(x, y, 25 + t * 25, Math.PI * 0.1, Math.PI * (1.7 + t * 0.2));
    ctx.stroke();
    ctx.setLineDash([]);
    const ballX = x - 18 + t * 42;
    const ballY = y - Math.sin(Math.PI * t) * 42 - 10;
    const glow = ctx.createRadialGradient(ballX, ballY, 2, ballX, ballY, 14);
    glow.addColorStop(0, "rgba(255,250,190,0.96)");
    glow.addColorStop(0.42, "rgba(255,198,62,0.72)");
    glow.addColorStop(1, "rgba(255,198,62,0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(ballX, ballY, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffe36e";
    ctx.beginPath();
    ctx.arc(ballX, ballY, 4.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawSkillBadge() {
    if (skillBadge.remaining <= 0 || !skillBadge.icon) return;
    const life = skillBadge.remaining / Math.max(0.01, skillBadge.duration);
    const x = player.x - cameraX + player.w * 0.5;
    const y = Math.max(65, player.y - 16 - Math.sin(elapsed * 10) * 2);
    ctx.save();
    ctx.globalAlpha = Math.min(0.82, life * 2.2);
    ctx.shadowColor = "rgba(255, 193, 42, 0.72)";
    ctx.shadowBlur = 7;
    ctx.fillStyle = "#ffd34f";
    ctx.font = "900 13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(skillBadge.icon, x, y);
    ctx.shadowBlur = 4;
    ctx.fillStyle = "rgba(255,218,99,0.9)";
    ctx.font = "850 6px system-ui, sans-serif";
    ctx.fillText(skillBadge.label, x, y + 10);
    ctx.restore();
  }

  function drawCliffRescueGuide() {
    if (!cliffFallState?.active) return;
    const ability = currentCharacter();
    const canRescue = Number(ability.airJumps || 0) >= 2 && player.airJumpsUsed < Number(ability.airJumps || 0);
    const playerScreenX = player.x - cameraX + player.w * 0.5;
    const targetScreenX = cliffFallState.safeLandingX - cameraX + player.w * 0.5;
    const y = Math.max(86, Math.min(GROUND_Y - 42, player.y - 24));
    const label = cliffFallState.rescueActive
      ? "正在前往右侧安全地面"
      : canRescue
        ? "连续轻点补跳 · 向右救回"
        : "空中跳跃已用完";
    ctx.save();
    if (cliffFallState.rescueActive) {
      const startX = playerScreenX + 16;
      const endX = Math.max(startX + 28, Math.min(logicalWidth - 22, targetScreenX));
      const guideY = Math.max(96, Math.min(GROUND_Y - 28, player.y + player.h * 0.52));
      const pulse = 0.72 + Math.sin(elapsed * 8) * 0.18;
      ctx.globalAlpha = pulse;
      ctx.strokeStyle = "#ffe37a";
      ctx.fillStyle = "#ffe37a";
      ctx.lineWidth = 3;
      ctx.setLineDash([7, 6]);
      ctx.beginPath();
      ctx.moveTo(startX, guideY);
      ctx.quadraticCurveTo((startX + endX) * 0.5, guideY - 34, endX, guideY - 4);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(endX + 7, guideY - 4);
      ctx.lineTo(endX - 4, guideY - 11);
      ctx.lineTo(endX - 2, guideY + 3);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 0.9;
      ctx.fillStyle = "rgba(255, 227, 122, .2)";
      ctx.beginPath();
      ctx.ellipse(endX, GROUND_Y - 4, 25 + Math.sin(elapsed * 7) * 3, 7, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 0.93;
    ctx.font = "900 10px system-ui, sans-serif";
    const width = Math.max(116, ctx.measureText(label).width + 24);
    ctx.fillStyle = "rgba(24, 48, 62, .84)";
    fillRoundedRect(playerScreenX - width * 0.5, y - 15, width, 27, 10);
    ctx.fillStyle = canRescue ? "#ffe37a" : "#d9e3e5";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, playerScreenX, y - 1);
    ctx.restore();
  }

  function drawBattleOpponent() {
    if (!battleModeActive || !battleOpponentDisplay || !player) return;
    const courseLength = Math.max(1, levelEnd - START_X);
    const myDistance = battleLap * courseLength + Math.max(0, player.x - START_X);
    const opponentDistance = Number(battleOpponentDisplay.distance);
    if (!Number.isFinite(opponentDistance)) return;
    const delta = opponentDistance - myDistance;
    const ghostWorldX = player.x + delta;
    const x = ghostWorldX - cameraX;
    const y = Number.isFinite(Number(battleOpponentDisplay.y)) ? Number(battleOpponentDisplay.y) : GROUND_Y - NORMAL_HEIGHT;
    const name = cleanPlayerName(battleOpponentDisplay.name) || "对手";
    if (x < -45 || x > logicalWidth + 45) {
      const left = x < 0;
      const markerX = left ? 18 : logicalWidth - 18;
      ctx.save();
      ctx.globalAlpha = 0.72;
      ctx.fillStyle = "rgba(51,52,103,.86)";
      ctx.beginPath();
      if (left) {
        ctx.moveTo(markerX - 11, 248);
        ctx.lineTo(markerX + 9, 236);
        ctx.lineTo(markerX + 9, 260);
      } else {
        ctx.moveTo(markerX + 11, 248);
        ctx.lineTo(markerX - 9, 236);
        ctx.lineTo(markerX - 9, 260);
      }
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "850 8px system-ui, sans-serif";
      ctx.textAlign = left ? "left" : "right";
      ctx.fillText(`${name} · ${Math.round(Math.abs(delta) / 10)}m`, left ? markerX + 12 : markerX - 12, 250);
      ctx.restore();
      return;
    }
    const crouching = battleOpponentDisplay.pose === "crouch" || Number(battleOpponentDisplay.h) <= CROUCH_HEIGHT + 2;
    const character = characterDefinition(battleOpponentDisplay.character);
    const bodyHeight = crouching ? 34 : 58;
    const top = crouching ? y + Math.max(0, Number(battleOpponentDisplay.h) - bodyHeight) : y;
    ctx.save();
    ctx.globalAlpha = 0.34;
    const shadow = ctx.createRadialGradient(x + 21, GROUND_Y, 2, x + 21, GROUND_Y, 24);
    shadow.addColorStop(0, "rgba(35,40,75,.55)");
    shadow.addColorStop(1, "rgba(35,40,75,0)");
    ctx.fillStyle = shadow;
    ctx.beginPath();
    ctx.ellipse(x + 21, GROUND_Y + 2, 22, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = character.color;
    ctx.strokeStyle = "#eef8ff";
    ctx.lineWidth = 3;
    fillRoundedRect(x + 6, top + (crouching ? 10 : 23), 31, crouching ? 22 : 32, 10);
    ctx.strokeRect(x + 10, top + (crouching ? 14 : 27), 23, crouching ? 14 : 24);
    ctx.fillStyle = SKIN_TONES[battleOpponentDisplay.skin] || SKIN_TONES.light;
    ctx.beginPath();
    ctx.arc(x + 22, top + (crouching ? 11 : 16), crouching ? 11 : 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#243b58";
    ctx.font = "950 9px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(character.badge, x + 22, top + (crouching ? 11 : 16));
    ctx.restore();

    ctx.save();
    ctx.globalAlpha = 0.72;
    ctx.textAlign = "center";
    ctx.font = "850 7px system-ui, sans-serif";
    const nameWidth = Math.max(42, ctx.measureText(name).width + 12);
    ctx.fillStyle = "rgba(40,46,91,.82)";
    fillRoundedRect(x + 21 - nameWidth / 2, top - 17, nameWidth, 13, 6.5);
    ctx.fillStyle = "#fff";
    ctx.fillText(name, x + 21, top - 10);
    ctx.restore();
  }

  function drawBattleAttack() {
    if (!battleModeActive || !battleAttack) return;
    const elapsedAttack = battleAttack.elapsed;
    const targetX = battleAttack.targetX - cameraX;
    ctx.save();
    if (battleAttack.kind === "bomb") {
      const fallProgress = Math.max(0, Math.min(1, elapsedAttack / 1.18));
      const pulse = 1 + Math.sin(elapsed * 18) * 0.1;
      ctx.globalAlpha = Math.min(0.9, 0.45 + fallProgress * 0.45);
      ctx.strokeStyle = "#ff5b58";
      ctx.lineWidth = 4;
      ctx.setLineDash([8, 7]);
      ctx.beginPath();
      ctx.arc(targetX, GROUND_Y - 3, 32 * pulse, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      if (!battleAttack.hit) {
        const bombY = -25 + fallProgress * (GROUND_Y - 38);
        ctx.translate(targetX, bombY);
        ctx.rotate(elapsedAttack * 7);
        ctx.fillStyle = "#252f46";
        ctx.strokeStyle = "#fff0a0";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, 13, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "#ffcf4d";
        ctx.fillRect(7, -17, 4, 10);
      } else {
        const boom = Math.max(0, 1 - (elapsedAttack - 1.18) / 0.67);
        const radius = 24 + (1 - boom) * 58;
        const blast = ctx.createRadialGradient(targetX, GROUND_Y - 14, 3, targetX, GROUND_Y - 14, radius);
        blast.addColorStop(0, `rgba(255,250,178,${boom})`);
        blast.addColorStop(0.45, `rgba(255,130,50,${boom * .86})`);
        blast.addColorStop(1, "rgba(189,49,65,0)");
        ctx.fillStyle = blast;
        ctx.beginPath();
        ctx.arc(targetX, GROUND_Y - 14, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      const planeProgress = Math.max(0, Math.min(1, elapsedAttack / 2.1));
      const planeX = logicalWidth + 100 - planeProgress * (logicalWidth + 200);
      ctx.globalAlpha = 0.88;
      ctx.translate(planeX, 128);
      ctx.fillStyle = "#495b82";
      ctx.strokeStyle = "#e8f5ff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-42, 0);
      ctx.lineTo(35, -8);
      ctx.lineTo(49, 1);
      ctx.lineTo(34, 9);
      ctx.lineTo(-42, 6);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#ffcf58";
      ctx.fillRect(-8, -4, 18, 8);
      ctx.restore();
      ctx.save();
      if (elapsedAttack > 0.58) {
        const strikeProgress = Math.max(0, Math.min(1, (elapsedAttack - 0.58) / 0.84));
        ctx.globalAlpha = 0.35 + strikeProgress * 0.45;
        ctx.fillStyle = "#ff5b57";
        const warningWidth = 55 + Math.sin(elapsed * 17) * 5;
        ctx.fillRect(targetX - warningWidth / 2, 180, warningWidth, GROUND_Y - 180);
        ctx.fillStyle = "rgba(255,238,128,.76)";
        ctx.fillRect(targetX - 8, 180, 16, GROUND_Y - 180);
      }
      if (battleAttack.hit) {
        const boom = Math.max(0, 1 - (elapsedAttack - 1.42) / 0.83);
        ctx.globalAlpha = boom;
        ctx.fillStyle = "#ffad3e";
        ctx.beginPath();
        ctx.arc(targetX, GROUND_Y - 18, 25 + (1 - boom) * 62, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();
  }

  function drawPlayer() {
    if (player.invulnerable > 0 && Math.floor(elapsed * 16) % 2 === 0) return;
    const x = player.x - cameraX;
    const y = player.y;
    const crouching = player.h === CROUCH_HEIGHT;
    const stride = player.onGround && !crouching && Math.abs(player.vx || 0) > 8 ? Math.sin(elapsed * 16) * 5 : 0;

    const shadowY = player.onGround ? player.surfaceY : GROUND_Y;
    const playerShadow = ctx.createRadialGradient(
      x + 21, shadowY + 1, 2,
      x + 21, shadowY + 2, crouching ? 27 : 23,
    );
    playerShadow.addColorStop(0, "rgba(20,42,49,0.3)");
    playerShadow.addColorStop(1, "rgba(20,42,49,0)");
    ctx.fillStyle = playerShadow;
    ctx.beginPath();
    ctx.ellipse(x + 21, shadowY + 2, crouching ? 25 : 20, crouching ? 6 : 5, 0, 0, Math.PI * 2);
    ctx.fill();

    if (selectedCharacter !== "cloud") {
      ctx.save();
      applyPlayerTransform(x, y);
      ctx.shadowColor = "rgba(25, 56, 64, 0.22)";
      ctx.shadowBlur = 6;
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 4;
      if (selectedCharacter === "sponge") drawSpongeCharacter(crouching, stride);
      else if (selectedCharacter === "patrick") drawPatrickCharacter(crouching, stride);
      else if (selectedCharacter === "qiang") drawStrongCharacter(crouching, stride);
      else if (selectedCharacter === "beibei") drawBeibeiCharacter(crouching, stride);
      else if (selectedCharacter === "yuanyuan") drawYuanyuanCharacter(crouching, stride);
      else if (selectedCharacter === "guoguo") drawGuoguoCharacter(crouching, stride);
      else if (selectedCharacter === "krabs") drawCrabCharacter(crouching, stride);
      else if (selectedCharacter === "doraemon") drawDoraemonCharacter(crouching, stride);
      else drawFootballCharacter(selectedCharacter, crouching, stride);
      ctx.restore();
      return;
    }

    ctx.save();
    applyPlayerTransform(x, y);
    ctx.shadowColor = "rgba(25, 56, 64, 0.22)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 4;

    if (crouching) {
      const shoeFill = ctx.createLinearGradient(0, 24, 0, 35);
      shoeFill.addColorStop(0, "#3c6570");
      shoeFill.addColorStop(1, "#173844");
      ctx.fillStyle = shoeFill;
      fillRoundedRect(7, 24, 17, 10, 5);
      fillRoundedRect(23, 24, 17, 10, 5);
      const coatFill = ctx.createLinearGradient(3, 10, 40, 33);
      coatFill.addColorStop(0, "#77dc9c");
      coatFill.addColorStop(0.48, "#45b878");
      coatFill.addColorStop(1, "#27885f");
      ctx.fillStyle = coatFill;
      ctx.strokeStyle = "#224556";
      ctx.lineWidth = 4;
      pathRoundedRect(3, 10, 37, 23, 10);
      ctx.fill();
      ctx.stroke();
      ctx.shadowColor = "transparent";
      const faceFill = ctx.createRadialGradient(18, 5, 2, 24, 12, 17);
      faceFill.addColorStop(0, shadeColor(SKIN_TONES[selectedSkin], 24));
      faceFill.addColorStop(1, shadeColor(SKIN_TONES[selectedSkin], -13));
      ctx.fillStyle = faceFill;
      ctx.beginPath();
      ctx.arc(24, 10, 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      const capFill = ctx.createLinearGradient(8, 0, 37, 13);
      capFill.addColorStop(0, "#4f8190");
      capFill.addColorStop(1, "#1e4658");
      ctx.fillStyle = capFill;
      ctx.beginPath();
      ctx.arc(21, 6, 14, Math.PI, 0.15);
      ctx.lineTo(37, 10);
      ctx.lineTo(11, 10);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#243b47";
      ctx.beginPath();
      ctx.arc(29, 10, 2.3, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.strokeStyle = "#224556";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";

      const shoeFill = ctx.createLinearGradient(0, 47, 0, 62);
      shoeFill.addColorStop(0, "#416a75");
      shoeFill.addColorStop(1, "#173844");
      ctx.fillStyle = shoeFill;
      fillRoundedRect(7 + stride, 47, 13, 14, 5);
      fillRoundedRect(24 - stride, 47, 13, 14, 5);

      const coatFill = ctx.createLinearGradient(5, 25, 38, 55);
      coatFill.addColorStop(0, "#78dd9d");
      coatFill.addColorStop(0.5, "#45b878");
      coatFill.addColorStop(1, "#27875f");
      ctx.fillStyle = coatFill;
      pathRoundedRect(5, 25, 33, 29, 9);
      ctx.fill();
      ctx.stroke();
      ctx.shadowColor = "transparent";
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      fillRoundedRect(11, 29, 5, 17, 2.5);

      const scarfFill = ctx.createLinearGradient(0, 27, 38, 39);
      scarfFill.addColorStop(0, "#ffe06c");
      scarfFill.addColorStop(1, "#ee8d35");
      ctx.fillStyle = scarfFill;
      ctx.beginPath();
      ctx.moveTo(7, 29);
      ctx.lineTo(38, 27);
      ctx.lineTo(38, 34);
      ctx.lineTo(7, 36);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(8, 33);
      ctx.lineTo(-3, 39 + Math.sin(elapsed * 12) * 3);
      ctx.lineTo(6, 42);
      ctx.closePath();
      ctx.fill();

      const faceFill = ctx.createRadialGradient(16, 10, 2, 24, 21, 21);
      faceFill.addColorStop(0, shadeColor(SKIN_TONES[selectedSkin], 24));
      faceFill.addColorStop(1, shadeColor(SKIN_TONES[selectedSkin], -13));
      ctx.fillStyle = faceFill;
      ctx.beginPath();
      ctx.arc(22, 18, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      const capFill = ctx.createLinearGradient(7, 5, 39, 20);
      capFill.addColorStop(0, "#538595");
      capFill.addColorStop(0.52, "#2d596a");
      capFill.addColorStop(1, "#173a4d");
      ctx.fillStyle = capFill;
      ctx.beginPath();
      ctx.arc(19, 13, 16, Math.PI, 0.12);
      ctx.lineTo(39, 18);
      ctx.lineTo(7, 18);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(8, 12);
      ctx.quadraticCurveTo(22, 5, 39, 13);
      ctx.lineTo(32, 17);
      ctx.lineTo(10, 17);
      ctx.closePath();
      ctx.fill();

      const blink = Math.sin(elapsed * 1.7) > 0.985;
      ctx.fillStyle = "#243b47";
      if (blink) {
        fillRoundedRect(25, 18, 7, 2, 1);
      } else {
        ctx.beginPath();
        ctx.arc(29, 18, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = "#c66f56";
      ctx.lineWidth = 1.7;
      ctx.beginPath();
      ctx.arc(29, 23, 4, 0.2, 1.8);
      ctx.stroke();
    }
    ctx.restore();
  }

  function applyPlayerTransform(x, y) {
    ctx.translate(x + player.w * 0.5, y + player.h * 0.5);
    if (player.flairMove && player.flairDuration > 0) {
      const t = Math.min(1, player.flairElapsed / player.flairDuration);
      if (player.flairMove === "explosiveStepover") {
        ctx.translate(Math.sin(t * Math.PI * 4) * 4, 0);
        ctx.rotate(Math.sin(t * Math.PI * 2) * 0.12);
      } else if (player.flairMove === "advancedHeelFlick") {
        ctx.translate(0, -Math.sin(Math.PI * t) * 8);
        ctx.rotate(-Math.sin(Math.PI * t) * 0.42);
      } else if (player.flairMove === "dragToChop") {
        ctx.translate(Math.sin(t * Math.PI * 2) * 7, 0);
        ctx.rotate(Math.sin(t * Math.PI * 2) * 0.22);
      }
    }
    if (player.flipDuration > 0 && player.flipTurns > 0) {
      ctx.rotate(-player.flipAngle);
    }
    ctx.translate(-player.w * 0.5, -player.h * 0.5);
  }

  function drawCrabCharacter(crouching, stride) {
    const bodyY = crouching ? 13 : 22;
    const bodyH = crouching ? 20 : 29;
    const legY = crouching ? 31 : 50;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "#632e2c";
    ctx.lineWidth = 2.6;

    ctx.strokeStyle = "#8c302f";
    ctx.lineWidth = 3.4;
    for (const side of [-1, 1]) {
      const baseX = side < 0 ? 12 : 32;
      ctx.beginPath();
      ctx.moveTo(baseX, legY - 2);
      ctx.lineTo(baseX + side * (8 + Math.abs(stride) * 0.25), legY + 8);
      ctx.lineTo(baseX + side * 12, legY + 10);
      ctx.stroke();
    }

    const shell = ctx.createRadialGradient(15, bodyY + 4, 2, 22, bodyY + bodyH * 0.55, 27);
    shell.addColorStop(0, "#ff8370");
    shell.addColorStop(0.55, "#e95549");
    shell.addColorStop(1, "#a93235");
    ctx.fillStyle = shell;
    ctx.strokeStyle = "#632e2c";
    ctx.lineWidth = 2.8;
    pathRoundedRect(5, bodyY, 34, bodyH, 13);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#63c8b7";
    fillRoundedRect(7, bodyY + bodyH * 0.55, 30, bodyH * 0.38, 5);
    ctx.fillStyle = "#2a6f70";
    fillRoundedRect(8, bodyY + bodyH - 5, 28, 4, 2);
    ctx.fillStyle = "#ffd857";
    ctx.beginPath();
    ctx.arc(22, bodyY + bodyH - 3, 2.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#aa3838";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(8, bodyY + 10);
    ctx.lineTo(-1, bodyY + 4);
    ctx.moveTo(36, bodyY + 10);
    ctx.lineTo(45, bodyY + 4);
    ctx.stroke();
    for (const side of [-1, 1]) {
      const cx = side < 0 ? -3 : 47;
      ctx.fillStyle = "#ef5e51";
      ctx.strokeStyle = "#632e2c";
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.arc(cx, bodyY + 1, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.strokeStyle = "#fff0d1";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx - 4, bodyY - 1);
      ctx.lineTo(cx + 4, bodyY + 3);
      ctx.stroke();
    }

    if (!crouching) {
      ctx.strokeStyle = "#a93436";
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(15, bodyY + 3);
      ctx.lineTo(14, 8);
      ctx.moveTo(29, bodyY + 3);
      ctx.lineTo(30, 8);
      ctx.stroke();
      ctx.fillStyle = "#fff7da";
      ctx.strokeStyle = "#632e2c";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(14, 7, 6, 0, Math.PI * 2);
      ctx.arc(30, 7, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#24343b";
      ctx.beginPath();
      ctx.arc(15.5, 7.5, 2.2, 0, Math.PI * 2);
      ctx.arc(28.5, 7.5, 2.2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = "#642f31";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.arc(22, bodyY + 13, 7, 0.15, Math.PI - 0.15);
    ctx.stroke();
  }

  function drawStrongCharacter(crouching, stride) {
    const skin = SKIN_TONES[selectedSkin];
    const skinLight = shadeColor(skin, 18);
    const skinDark = shadeColor(skin, -22);
    ctx.strokeStyle = "#402f2b";
    ctx.lineWidth = 2.8;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    if (crouching) {
      ctx.fillStyle = "#263849";
      fillRoundedRect(3, 28, 18, 8, 4);
      fillRoundedRect(23, 28, 18, 8, 4);
      const body = ctx.createLinearGradient(3, 13, 41, 34);
      body.addColorStop(0, "#ffb15e");
      body.addColorStop(0.55, "#e97937");
      body.addColorStop(1, "#b94827");
      ctx.fillStyle = body;
      pathRoundedRect(4, 14, 36, 19, 7);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = skin;
      ctx.beginPath();
      ctx.arc(5, 23, 7, 0, Math.PI * 2);
      ctx.arc(39, 23, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(22, 9, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#25272a";
      ctx.beginPath();
      ctx.arc(21, 5, 11.5, Math.PI, Math.PI * 1.96);
      ctx.fill();
      drawCharacterEyes(25, 9, "#24282d");
      return;
    }

    ctx.fillStyle = "#263849";
    fillRoundedRect(4 + stride, 52, 17, 10, 5);
    fillRoundedRect(23 - stride, 52, 17, 10, 5);
    ctx.fillStyle = "#313d50";
    fillRoundedRect(8, 43, 28, 13, 4);

    ctx.fillStyle = skinDark;
    ctx.beginPath();
    ctx.ellipse(4, 35, 7.5, 14, -0.2, 0, Math.PI * 2);
    ctx.ellipse(40, 35, 7.5, 14, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = skinLight;
    ctx.beginPath();
    ctx.arc(4, 27, 8.5, 0, Math.PI * 2);
    ctx.arc(40, 27, 8.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const body = ctx.createLinearGradient(4, 23, 39, 50);
    body.addColorStop(0, "#ffc06d");
    body.addColorStop(0.52, "#ed7e38");
    body.addColorStop(1, "#b94526");
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.moveTo(9, 24);
    ctx.quadraticCurveTo(22, 18, 35, 24);
    ctx.lineTo(37, 45);
    ctx.quadraticCurveTo(22, 51, 7, 45);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    ctx.strokeStyle = "rgba(104,49,31,0.72)";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.arc(15, 31, 7, 3.5, 6.05);
    ctx.arc(29, 31, 7, 3.38, 5.9);
    ctx.moveTo(22, 27);
    ctx.lineTo(22, 43);
    ctx.stroke();

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(22, 15, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#402f2b";
    ctx.lineWidth = 2.8;
    ctx.stroke();
    ctx.fillStyle = "#25272a";
    ctx.beginPath();
    ctx.arc(21, 10, 13.3, Math.PI, Math.PI * 1.96);
    ctx.quadraticCurveTo(33, 8, 33, 15);
    ctx.lineTo(30, 11);
    ctx.closePath();
    ctx.fill();
    drawCharacterEyes(26, 15, "#24282d");
    ctx.fillStyle = "#fff0a4";
    ctx.font = "1000 9px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("强", 22, 39);
  }

  function drawBeibeiCharacter(crouching, stride) {
    const skin = SKIN_TONES[selectedSkin];
    ctx.strokeStyle = "#57394f";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const headY = crouching ? 9 : 15;

    ctx.fillStyle = "#4c3150";
    ctx.beginPath();
    ctx.ellipse(8, headY + 4, 7, crouching ? 8 : 12, -0.2, 0, Math.PI * 2);
    ctx.ellipse(36, headY + 4, 7, crouching ? 8 : 12, 0.2, 0, Math.PI * 2);
    ctx.fill();

    if (crouching) {
      ctx.fillStyle = "#663c78";
      fillRoundedRect(5, 28, 17, 8, 4);
      fillRoundedRect(23, 28, 16, 8, 4);
      const outfit = ctx.createLinearGradient(4, 13, 40, 34);
      outfit.addColorStop(0, "#ffd1e9");
      outfit.addColorStop(0.55, "#f28dbc");
      outfit.addColorStop(1, "#ba5c99");
      ctx.fillStyle = outfit;
      pathRoundedRect(4, 13, 36, 21, 9);
      ctx.fill();
      ctx.stroke();
    } else {
      ctx.fillStyle = "#664070";
      fillRoundedRect(5 + stride, 52, 16, 10, 5);
      fillRoundedRect(23 - stride, 52, 16, 10, 5);
      ctx.fillStyle = "#fff5fb";
      fillRoundedRect(9, 44, 10, 12, 4);
      fillRoundedRect(25, 44, 10, 12, 4);
      const shirt = ctx.createLinearGradient(4, 24, 40, 48);
      shirt.addColorStop(0, "#ffe0ee");
      shirt.addColorStop(0.5, "#f39ac2");
      shirt.addColorStop(1, "#c55a9c");
      ctx.fillStyle = shirt;
      pathRoundedRect(5, 24, 34, 23, 9);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#9d4d94";
      ctx.beginPath();
      ctx.moveTo(6, 43);
      ctx.lineTo(38, 43);
      ctx.lineTo(42, 51);
      ctx.lineTo(2, 51);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "#fff0a7";
      ctx.font = "1000 8px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("贝", 22, 37);
    }

    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(22, headY, crouching ? 11 : 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#4b304d";
    ctx.beginPath();
    ctx.arc(22, headY - 3, crouching ? 11.5 : 13.5, Math.PI, Math.PI * 1.98);
    ctx.quadraticCurveTo(31, headY - 6, 34, headY + 2);
    ctx.lineTo(30, headY - 2);
    ctx.lineTo(25, headY + 1);
    ctx.lineTo(20, headY - 3);
    ctx.lineTo(14, headY + 1);
    ctx.lineTo(10, headY - 1);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#ffcbdf";
    ctx.beginPath();
    ctx.moveTo(31, headY - 11);
    ctx.lineTo(39, headY - 16);
    ctx.lineTo(38, headY - 7);
    ctx.lineTo(31, headY - 5);
    ctx.lineTo(25, headY - 11);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = "#a84d83";
    ctx.stroke();
    drawCharacterEyes(26, headY, "#382c3b");
    ctx.fillStyle = "rgba(239,104,143,.28)";
    ctx.beginPath();
    ctx.ellipse(31, headY + 5, 3.4, 1.6, -0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawYuanyuanCharacter(crouching, stride) {
    const skin = SKIN_TONES[selectedSkin];
    const bodyTop = crouching ? 12 : 24;
    const bodyHeight = crouching ? 24 : 31;
    const bodyCenterY = bodyTop + bodyHeight * 0.52;
    const headY = crouching ? 9 : 15;

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = "#5e3829";
    ctx.lineWidth = 2.7;

    if (!crouching) {
      ctx.fillStyle = "#473a38";
      fillRoundedRect(3 + stride * 0.45, 52, 18, 10, 5);
      fillRoundedRect(23 - stride * 0.45, 52, 18, 10, 5);
      ctx.fillStyle = "#f3cf9b";
      fillRoundedRect(8, 47, 11, 9, 4);
      fillRoundedRect(25, 47, 11, 9, 4);
    } else {
      ctx.fillStyle = "#473a38";
      fillRoundedRect(1, 29, 20, 8, 4);
      fillRoundedRect(23, 29, 20, 8, 4);
    }

    const body = ctx.createRadialGradient(12, bodyTop + 3, 2, 22, bodyCenterY, 28);
    body.addColorStop(0, "#ffd27b");
    body.addColorStop(0.5, "#ee9e4f");
    body.addColorStop(1, "#b85f31");
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.ellipse(22, bodyCenterY, crouching ? 22 : 23, bodyHeight * 0.54, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = "rgba(116,57,31,.7)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(15, bodyCenterY - 1, 7, 3.55, 6.05);
    ctx.arc(29, bodyCenterY - 1, 7, 3.45, 5.95);
    ctx.stroke();
    ctx.fillStyle = "#fff0a8";
    ctx.beginPath();
    ctx.arc(22, bodyCenterY + 4, crouching ? 5 : 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#8e492b";
    ctx.font = "1000 8px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("元", 22, bodyCenterY + 4.5);

    ctx.fillStyle = skin;
    ctx.strokeStyle = "#5b3a2e";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(22, headY, crouching ? 13 : 14, crouching ? 11 : 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    const hair = ctx.createLinearGradient(9, headY - 14, 34, headY + 2);
    hair.addColorStop(0, "#42302c");
    hair.addColorStop(1, "#211f20");
    ctx.fillStyle = hair;
    ctx.beginPath();
    ctx.arc(22, headY - 2, crouching ? 13.5 : 14.5, Math.PI, Math.PI * 1.98);
    ctx.quadraticCurveTo(34, headY - 8, 35, headY + 1);
    ctx.lineTo(30, headY - 4);
    ctx.lineTo(25, headY);
    ctx.lineTo(20, headY - 4);
    ctx.lineTo(14, headY);
    ctx.lineTo(9, headY - 2);
    ctx.closePath();
    ctx.fill();

    drawCharacterEyes(26, headY, "#302828");
    ctx.strokeStyle = "#a7654c";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(27, headY + 5, 4.5, 0.28, 1.85);
    ctx.stroke();
    ctx.fillStyle = "rgba(225,116,92,.22)";
    ctx.beginPath();
    ctx.ellipse(31, headY + 4, 3.5, 1.8, -0.15, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawGuoguoCharacter(crouching, stride) {
    const skin = SKIN_TONES[selectedSkin];
    ctx.strokeStyle = "#284a48";
    ctx.lineWidth = 2.8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (crouching) {
      ctx.fillStyle = "#28414c";
      fillRoundedRect(4, 28, 18, 8, 4);
      fillRoundedRect(23, 28, 17, 8, 4);
      ctx.fillStyle = "#66c995";
      pathRoundedRect(4, 13, 36, 20, 8);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = skin;
      ctx.beginPath();
      ctx.arc(22, 9, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      drawGuoguoFace(22, 9, true);
      return;
    }
    ctx.fillStyle = "#253b47";
    fillRoundedRect(4 + stride, 52, 17, 10, 5);
    fillRoundedRect(23 - stride, 52, 17, 10, 5);
    ctx.fillStyle = "#f0efe7";
    fillRoundedRect(8, 43, 28, 13, 4);
    const shirt = ctx.createLinearGradient(4, 24, 40, 51);
    shirt.addColorStop(0, "#a3ecc4");
    shirt.addColorStop(0.5, "#59c48e");
    shirt.addColorStop(1, "#2b8d68");
    ctx.fillStyle = shirt;
    pathRoundedRect(4, 24, 36, 27, 8);
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    ctx.fillStyle = "rgba(255,255,255,0.38)";
    fillRoundedRect(8, 28, 5, 16, 2);
    ctx.fillStyle = "#fff6b4";
    ctx.font = "1000 9px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("果", 22, 39);
    ctx.fillStyle = skin;
    ctx.strokeStyle = "#284a48";
    ctx.lineWidth = 2.8;
    ctx.beginPath();
    ctx.arc(22, 15, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    drawGuoguoFace(22, 15, false);
  }

  function drawGuoguoFace(cx, cy, compact) {
    const radius = compact ? 11 : 13;
    ctx.fillStyle = "#263a37";
    ctx.beginPath();
    ctx.arc(cx, cy - 3, radius + 0.5, Math.PI, Math.PI * 1.96);
    ctx.quadraticCurveTo(cx + radius, cy + 1, cx + radius * 0.68, cy + radius * 0.52);
    ctx.lineTo(cx + 3, cy - radius * 0.38);
    ctx.lineTo(cx - radius * 0.65, cy + radius * 0.5);
    ctx.closePath();
    ctx.fill();
    const glassesY = cy + (compact ? 0 : 1);
    ctx.strokeStyle = "#172a34";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx - 5, glassesY, compact ? 3.8 : 4.5, 0, Math.PI * 2);
    ctx.arc(cx + 5, glassesY, compact ? 3.8 : 4.5, 0, Math.PI * 2);
    ctx.moveTo(cx - 1, glassesY);
    ctx.lineTo(cx + 1, glassesY);
    ctx.stroke();
    ctx.fillStyle = "rgba(151,224,240,0.22)";
    ctx.beginPath();
    ctx.arc(cx - 5, glassesY, compact ? 3.2 : 3.8, 0, Math.PI * 2);
    ctx.arc(cx + 5, glassesY, compact ? 3.2 : 3.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#21343c";
    ctx.beginPath();
    ctx.arc(cx - 4, glassesY, 1.1, 0, Math.PI * 2);
    ctx.arc(cx + 6, glassesY, 1.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#b96658";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(cx + 1, cy + (compact ? 5 : 7), 3.6, 0.2, 1.8);
    ctx.stroke();
  }

  function drawDoraemonCharacter(crouching, stride) {
    ctx.strokeStyle = "#174c69";
    ctx.lineWidth = 2.7;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    const bodyTop = crouching ? 13 : 25;
    const bodyBottom = crouching ? 34 : 55;
    if (!crouching) {
      ctx.fillStyle = "#f4f7fa";
      fillRoundedRect(3 + stride, 53, 19, 9, 5);
      fillRoundedRect(23 - stride, 53, 18, 9, 5);
    }
    const blue = ctx.createLinearGradient(3, bodyTop, 40, bodyBottom);
    blue.addColorStop(0, "#65c8f1");
    blue.addColorStop(0.52, "#2aa4df");
    blue.addColorStop(1, "#0878ba");
    ctx.fillStyle = blue;
    pathRoundedRect(4, bodyTop, 36, bodyBottom - bodyTop, 15);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.ellipse(22, crouching ? 24 : 41, 13, crouching ? 9 : 14, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "#df3c44";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(8, bodyTop + 2);
    ctx.lineTo(36, bodyTop + 2);
    ctx.stroke();
    ctx.fillStyle = "#ffd94e";
    ctx.strokeStyle = "#9b6c14";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.arc(22, bodyTop + 5, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#174c69";
    ctx.lineWidth = 2.7;
    ctx.beginPath();
    ctx.ellipse(22, crouching ? 9 : 15, crouching ? 15 : 16, crouching ? 11 : 16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = blue;
    ctx.beginPath();
    ctx.arc(22, crouching ? 6 : 11, crouching ? 16 : 17, Math.PI, Math.PI * 2);
    ctx.lineTo(38, crouching ? 8 : 14);
    ctx.quadraticCurveTo(22, crouching ? -3 : -7, 6, crouching ? 8 : 14);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#174c69";
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.ellipse(18, crouching ? 5 : 8, 4, 6, 0, 0, Math.PI * 2);
    ctx.ellipse(26, crouching ? 5 : 8, 4, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#273747";
    ctx.beginPath();
    ctx.arc(19, crouching ? 6 : 9, 1.2, 0, Math.PI * 2);
    ctx.arc(25, crouching ? 6 : 9, 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#e7474d";
    ctx.strokeStyle = "#8b2630";
    ctx.beginPath();
    ctx.arc(22, crouching ? 10 : 14, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.strokeStyle = "#6c7480";
    ctx.lineWidth = 1.2;
    for (const side of [-1, 1]) {
      for (let row = -1; row <= 1; row += 1) {
        ctx.beginPath();
        ctx.moveTo(22 + side * 5, (crouching ? 14 : 19) + row * 3);
        ctx.lineTo(22 + side * 17, (crouching ? 13 : 18) + row * 4);
        ctx.stroke();
      }
    }
    ctx.strokeStyle = "#82909a";
    ctx.beginPath();
    ctx.arc(22, crouching ? 17 : 23, 6, 0.15, Math.PI - 0.15);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(22, crouching ? 25 : 43, 8, 0, Math.PI);
    ctx.stroke();
  }

  function drawFootballCharacter(id, crouching, stride) {
    const chosenSkin = SKIN_TONES[selectedSkin];
    const styles = {
      messi: { shirt: "#8ed6ef", stripe: "#f8fbff", shorts: "#f5f7f9", hair: "#443226", skin: chosenSkin, number: "10" },
      mbappe: { shirt: "#263f91", stripe: "#e94e57", shorts: "#26346e", hair: "#27231f", skin: chosenSkin, number: "10" },
      haaland: { shirt: "#79d5ea", stripe: "#ffffff", shorts: "#eef7fa", hair: "#e8c46e", skin: chosenSkin, number: "9" },
      qihang: { shirt: "#486a9c", stripe: "#f0c45b", shorts: "#243b61", hair: "#302820", skin: chosenSkin, number: "航" },
      yunqing: { shirt: "#49a99a", stripe: "#dffbf2", shorts: "#286f69", hair: "#263a38", skin: chosenSkin, number: "青" },
      zhixuan: { shirt: "#c64f3c", stripe: "#ffd96b", shorts: "#722d2a", hair: "#27201c", skin: chosenSkin, number: "炫" },
    };
    const ability = characterDefinition(id);
    const style = styles[id] || {
      shirt: ability.color || "#58c88b",
      stripe: "#f7fbff",
      shorts: "#284658",
      hair: "#302820",
      skin: chosenSkin,
      number: String(ability.badge || "新").slice(0, 2),
    };
    ctx.strokeStyle = "#233d4b";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";

    if (crouching) {
      ctx.fillStyle = "#263849";
      fillRoundedRect(5, 27, 17, 8, 4);
      fillRoundedRect(22, 27, 17, 8, 4);
      ctx.fillStyle = style.shirt;
      pathRoundedRect(4, 13, 35, 20, 8);
      ctx.fill();
      ctx.stroke();
      ctx.shadowColor = "transparent";
      ctx.fillStyle = style.stripe;
      fillRoundedRect(18, 14, 7, 18, 2);
      ctx.fillStyle = style.skin;
      ctx.beginPath();
      ctx.arc(22, 9, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      drawFootballHair(id, style, 22, 9, 10);
      drawCharacterEyes(24, 9, selectedSkin === "deep" ? "#171514" : "#263849");
      return;
    }

    ctx.fillStyle = "#243746";
    fillRoundedRect(5 + stride, 51, 16, 10, 5);
    fillRoundedRect(23 - stride, 51, 16, 10, 5);
    ctx.fillStyle = style.shorts;
    fillRoundedRect(7, 43, 30, 12, 5);
    ctx.fillStyle = style.shirt;
    pathRoundedRect(4, 25, 36, 25, 8);
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    ctx.fillStyle = style.stripe;
    fillRoundedRect(18, 27, 8, 20, 2);
    ctx.fillStyle = "rgba(255,255,255,0.28)";
    fillRoundedRect(7, 28, 5, 15, 2);
    ctx.fillStyle = "#203a4a";
    ctx.font = "900 9px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(style.number, 22, 38);

    ctx.fillStyle = style.skin;
    ctx.beginPath();
    ctx.arc(22, 15, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    drawFootballHair(id, style, 22, 15, 13);
    drawCharacterEyes(26, 15, selectedSkin === "deep" ? "#171514" : "#263849");
    if (id === "messi") {
      ctx.fillStyle = "#6d4934";
      ctx.beginPath();
      ctx.arc(22, 20, 7, 0, Math.PI);
      ctx.fill();
    }
  }

  function drawFootballHair(id, style, cx, cy, radius) {
    ctx.fillStyle = style.hair;
    ctx.beginPath();
    ctx.arc(cx - 1, cy - 3, radius + 0.8, Math.PI, Math.PI * 1.94);
    ctx.quadraticCurveTo(cx + radius * 0.35, cy - radius * 0.4, cx + radius * 0.75, cy + 1);
    ctx.lineTo(cx + radius * 0.7, cy - radius * 0.75);
    ctx.closePath();
    ctx.fill();
    if (id === "haaland") {
      ctx.strokeStyle = style.hair;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(cx - radius * 0.65, cy - 2);
      ctx.quadraticCurveTo(cx - radius - 5, cy + 5, cx - radius * 0.65, cy + radius * 0.85);
      ctx.stroke();
    }
  }

  function drawCharacterEyes(x, y, color) {
    ctx.shadowColor = "transparent";
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 1.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(104,55,47,0.75)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.arc(x, y + 5, 3.5, 0.25, 1.6);
    ctx.stroke();
  }

  function drawSpongeCharacter(crouching, stride) {
    const top = crouching ? 2 : 5;
    const bodyHeight = crouching ? 29 : 43;
    ctx.strokeStyle = "#5d5229";
    ctx.lineWidth = 3;
    ctx.fillStyle = "#f4d84c";
    pathRoundedRect(5, top, 34, bodyHeight, 6);
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    ctx.fillStyle = "rgba(176,135,26,0.48)";
    ctx.beginPath();
    ctx.arc(10, top + 8, 2.4, 0, Math.PI * 2);
    ctx.arc(34, top + 13, 2.1, 0, Math.PI * 2);
    ctx.arc(12, top + 25, 1.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff";
    fillRoundedRect(7, top + bodyHeight - 12, 30, 7, 1);
    ctx.fillStyle = "#9b6b35";
    fillRoundedRect(7, top + bodyHeight - 6, 30, 8, 2);
    const eyeY = top + (crouching ? 9 : 13);
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(17, eyeY, crouching ? 5 : 7, 0, Math.PI * 2);
    ctx.arc(28, eyeY, crouching ? 5 : 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#4b93bd";
    ctx.beginPath();
    ctx.arc(18, eyeY, 2.5, 0, Math.PI * 2);
    ctx.arc(29, eyeY, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#23333e";
    ctx.beginPath();
    ctx.arc(18.5, eyeY, 1.2, 0, Math.PI * 2);
    ctx.arc(29.5, eyeY, 1.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#b44d3f";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(23, eyeY + 8, 5, 0.1, 2.9);
    ctx.stroke();
    ctx.fillStyle = "#263849";
    if (crouching) {
      fillRoundedRect(5, 29, 17, 7, 3);
      fillRoundedRect(23, 29, 17, 7, 3);
    } else {
      ctx.fillRect(12, 50, 3, 8);
      ctx.fillRect(31, 50, 3, 8);
      fillRoundedRect(5 + stride, 56, 15, 6, 3);
      fillRoundedRect(25 - stride, 56, 15, 6, 3);
    }
  }

  function drawPatrickCharacter(crouching, stride) {
    ctx.strokeStyle = "#754a56";
    ctx.lineWidth = 3;
    ctx.fillStyle = "#f49aa5";
    ctx.beginPath();
    if (crouching) {
      ctx.moveTo(4, 31);
      ctx.quadraticCurveTo(7, 14, 16, 13);
      ctx.quadraticCurveTo(22, 0, 28, 13);
      ctx.quadraticCurveTo(39, 15, 40, 31);
    } else {
      ctx.moveTo(5, 48);
      ctx.quadraticCurveTo(9, 27, 16, 23);
      ctx.quadraticCurveTo(22, -3, 28, 23);
      ctx.quadraticCurveTo(37, 28, 39, 48);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.shadowColor = "transparent";
    const shortsY = crouching ? 25 : 42;
    ctx.fillStyle = "#82b95d";
    pathRoundedRect(6, shortsY, 32, crouching ? 10 : 15, 5);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#76519a";
    ctx.beginPath();
    ctx.moveTo(12, shortsY + 2);
    ctx.lineTo(18, shortsY + 7);
    ctx.lineTo(12, shortsY + 9);
    ctx.closePath();
    ctx.fill();
    const eyeY = crouching ? 15 : 23;
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.ellipse(20, eyeY, 4, 6, -0.1, 0, Math.PI * 2);
    ctx.ellipse(27, eyeY, 4, 6, 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#2b3941";
    ctx.beginPath();
    ctx.arc(21, eyeY, 1.5, 0, Math.PI * 2);
    ctx.arc(28, eyeY, 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#954f5d";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(24, eyeY + 8, 4, 0.2, 2.7);
    ctx.stroke();
    ctx.fillStyle = "#754a56";
    if (crouching) {
      fillRoundedRect(5, 30, 16, 6, 3);
      fillRoundedRect(23, 30, 16, 6, 3);
    } else {
      fillRoundedRect(6 + stride, 54, 15, 8, 4);
      fillRoundedRect(24 - stride, 54, 15, 8, 4);
    }
  }

  function drawParticles() {
    for (const particle of particles) {
      const x = particle.x - cameraX;
      if (x < -40 || x > logicalWidth + 40) continue;
      const alpha = Math.max(0, Math.min(1, particle.life / particle.maxLife));
      ctx.save();
      ctx.globalAlpha = alpha;
      if (particle.glow) {
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = Number(particle.glow) || 0;
      }
      if (particle.shape === "star") {
        drawStar(x, particle.y, particle.size, particle.size * 0.45, 5, particle.color);
      } else if (particle.shape === "square") {
        ctx.fillStyle = particle.color;
        ctx.translate(x, particle.y);
        ctx.rotate(Number(particle.rotation) || particle.life * 5);
        ctx.fillRect(-particle.size * 0.5, -particle.size * 0.5, particle.size, particle.size);
      } else if (particle.shape === "diamond") {
        ctx.fillStyle = particle.color;
        ctx.translate(x, particle.y);
        ctx.rotate((Number(particle.rotation) || 0) + Math.PI / 4);
        ctx.fillRect(-particle.size * 0.5, -particle.size * 0.5, particle.size, particle.size);
      } else if (particle.shape === "ring") {
        const progress = 1 - alpha;
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = Math.max(1, 3.2 * alpha);
        ctx.beginPath();
        ctx.ellipse(
          x,
          particle.y,
          particle.size + (Number(particle.growth) || 0) * progress,
          (particle.size + (Number(particle.growth) || 0) * progress) * 0.28,
          0,
          0,
          Math.PI * 2,
        );
        ctx.stroke();
      } else {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  function drawStar(x, y, outer, inner, points, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    for (let i = 0; i < points * 2; i += 1) {
      const radius = i % 2 === 0 ? outer : inner;
      const angle = -Math.PI / 2 + (Math.PI * i) / points;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  function shadeColor(hex, amount) {
    const value = Number.parseInt(hex.replace("#", ""), 16);
    const clamp = (channel) => Math.max(0, Math.min(255, channel));
    const r = clamp((value >> 16) + amount);
    const g = clamp(((value >> 8) & 0xff) + amount);
    const b = clamp((value & 0xff) + amount);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function pathRoundedRect(x, y, w, h, r) {
    const radius = Math.max(0, Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2));
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  function fillRoundedRect(x, y, w, h, r) {
    pathRoundedRect(x, y, w, h, r);
    ctx.fill();
  }

  function handlePointerDown(event) {
    if (gameState !== "playing") return;
    event.preventDefault();
    if (gesture) clearGesture();
    gesture = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      started: performance.now(),
      swiped: false,
      jumped: false,
      timer: 0,
      boostTimer: 0,
    };
    try {
      canvas.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture can be unavailable in older embedded browsers.
    }
    gesture.timer = window.setTimeout(() => {
      if (!gesture || gesture.swiped || gesture.jumped) return;
      const distance = Math.hypot(gesture.lastX - gesture.x, gesture.lastY - gesture.y);
      if (distance < 13) {
        gesture.jumped = true;
        requestJump();
      }
    }, 105);
    gesture.boostTimer = window.setTimeout(() => {
      if (!gesture || gesture.swiped || !(currentCharacter().speedBoost > 1)) return;
      const distance = Math.hypot(gesture.lastX - gesture.x, gesture.lastY - gesture.y);
      if (distance < 18) {
        pointerBoostHeld = true;
        canvas.dataset.lastSpecial = "speedBoost";
        playTone(selectedCharacter === "mbappe" ? 720 : 520, 0.09, "sawtooth", 0.024, 0);
      }
    }, 340);
  }

  function handlePointerMove(event) {
    if (!gesture || gesture.id !== event.pointerId || gameState !== "playing") return;
    event.preventDefault();
    gesture.lastX = event.clientX;
    gesture.lastY = event.clientY;
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    if (!gesture.swiped && dy > 32 && dy > Math.abs(dx) * 1.12) {
      gesture.swiped = true;
      window.clearTimeout(gesture.timer);
      window.clearTimeout(gesture.boostTimer);
      pointerBoostHeld = false;
      setCrouchHeld("pointer", true);
    }
  }

  function handlePointerUp(event) {
    if (!gesture || gesture.id !== event.pointerId) return;
    event.preventDefault();
    const dx = event.clientX - gesture.x;
    const dy = event.clientY - gesture.y;
    const duration = performance.now() - gesture.started;
    const isTap = !gesture.swiped && Math.hypot(dx, dy) < 28 && duration < 520;
    if (isTap && !gesture.jumped) requestJump();
    if (gesture.swiped) setCrouchHeld("pointer", false);
    clearGesture();
  }

  function clearGesture() {
    pointerBoostHeld = false;
    if (!gesture) return;
    window.clearTimeout(gesture.timer);
    window.clearTimeout(gesture.boostTimer);
    if (gesture.swiped) setCrouchHeld("pointer", false);
    gesture = null;
  }

  function handleKeyDown(event) {
    if (siteLockActive) {
      event.preventDefault();
      siteLockRefreshButton?.focus();
      return;
    }
    if (event.code === "Escape") {
      event.preventDefault();
      if (noticeDialog && !noticeDialog.classList.contains("is-hidden")) closeNotice(false);
      else if (battleResultDialog && !battleResultDialog.classList.contains("is-hidden")) battleResultHomeButton?.click();
      else if (battleDialog && !battleDialog.classList.contains("is-hidden")) closeBattleDialog();
      else if (profileDialog && !profileDialog.classList.contains("is-hidden")) closeProfile();
      else if (gameState === "home" && chatFullscreen) setChatFullscreen(false);
      else if (gameState === "playing") pauseGame();
      else if (gameState === "paused") resumeGame();
      return;
    }
    const interactiveTarget = event.target?.closest?.("input, textarea, select, button, [contenteditable='true']");
    if (interactiveTarget) return;
    if (event.code === "Space" || event.code === "ArrowUp" || event.code === "KeyW") {
      event.preventDefault();
      if (!event.repeat) requestJump();
    } else if (event.code === "ArrowDown" || event.code === "KeyS") {
      event.preventDefault();
      if (!event.repeat) setCrouchHeld("keyboard", true);
    } else if (event.code === "ArrowRight" || event.code === "KeyD") {
      if (gameState === "playing") {
        event.preventDefault();
        keyboardMoveRightHeld = true;
        if (currentCharacter().speedBoost > 1) {
          keyboardBoostHeld = true;
          canvas.dataset.lastSpecial = "speedBoost";
        }
      }
    } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
      if (gameState === "playing") {
        event.preventDefault();
        keyboardMoveLeftHeld = true;
      }
    } else if (event.code === "KeyX" && gameState === "playing" && battleModeActive) {
      event.preventDefault();
      if (!event.repeat) useBattleUltimate();
    } else if (event.code === "Enter" && gameState !== "playing" && gameState !== "paused" && gameState !== "revivePrompt") {
      event.preventDefault();
      handlePrimaryAction();
    }
  }

  function handleKeyUp(event) {
    if (event.code === "ArrowDown" || event.code === "KeyS") {
      event.preventDefault();
      setCrouchHeld("keyboard", false);
    } else if (event.code === "ArrowRight" || event.code === "KeyD") {
      keyboardMoveRightHeld = false;
      keyboardBoostHeld = false;
    } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
      keyboardMoveLeftHeld = false;
    }
  }

  function setControllerControl(control, held, button = null) {
    if (gameState !== "playing") return;
    if (button) button.classList.toggle("is-held", held);
    if (control === "up") {
      if (held) requestJump();
      return;
    }
    if (control === "down") {
      setCrouchHeld("pointer", held);
      return;
    }
    if (control === "left") controllerMoveLeftHeld = held;
    if (control === "right") {
      controllerMoveRightHeld = held;
      pointerBoostHeld = held && currentCharacter().speedBoost > 1;
      if (pointerBoostHeld) canvas.dataset.lastSpecial = "speedBoost";
    }
  }

  function releaseControllerControls() {
    controllerMoveLeftHeld = false;
    controllerMoveRightHeld = false;
    pointerBoostHeld = false;
    setCrouchHeld("pointer", false);
    for (const button of gameControlButtons) button.classList.remove("is-held");
  }

  primaryButton.addEventListener("click", handlePrimaryAction);
  siteLockRefreshButton?.addEventListener("click", () => loadSiteStatus(true));
  battleEntryButton?.addEventListener("click", openBattleDialog);
  homeButton.addEventListener("click", showHome);
  for (const [index, button] of homeTabButtons.entries()) {
    button.addEventListener("click", () => setHomeTab(button.dataset.homeTab));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.code)) return;
      event.preventDefault();
      const nextIndex = event.code === "Home"
        ? 0
        : event.code === "End"
          ? homeTabButtons.length - 1
          : (index + (event.code === "ArrowRight" ? 1 : -1) + homeTabButtons.length) % homeTabButtons.length;
      const nextButton = homeTabButtons[nextIndex];
      setHomeTab(nextButton?.dataset.homeTab);
      nextButton?.focus();
    });
  }
  for (const [index, button] of storeCategoryButtons.entries()) {
    button.addEventListener("click", () => setStoreCategory(button.dataset.storeCategory));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.code)) return;
      event.preventDefault();
      const nextIndex = event.code === "Home"
        ? 0
        : event.code === "End"
          ? storeCategoryButtons.length - 1
          : (index + (event.code === "ArrowRight" ? 1 : -1) + storeCategoryButtons.length) % storeCategoryButtons.length;
      const nextButton = storeCategoryButtons[nextIndex];
      setStoreCategory(nextButton?.dataset.storeCategory);
      nextButton?.focus();
    });
  }
  homeHeartShortcut?.addEventListener("click", () => {
    setHomeTab("shop");
    setStoreCategory("other");
  });
  homeReviveShortcut?.addEventListener("click", () => {
    if (reviveQuizClaimedDate !== singaporeDateKey() && reviveCards < reviveSettings.maxInventory) {
      openDailyReviveQuiz();
      return;
    }
    setHomeTab("shop");
    setStoreCategory("other");
  });
  dailyReviveButton?.addEventListener("click", openDailyReviveQuiz);
  reviveSingleButton?.addEventListener("click", () => purchaseReviveOffer("single"));
  reviveBundleButton?.addEventListener("click", () => purchaseReviveOffer("bundle"));
  reviveQuizCloseButton?.addEventListener("click", closeReviveQuiz);
  reviveQuizDialog?.addEventListener("pointerdown", (event) => {
    if (event.target === reviveQuizDialog) closeReviveQuiz();
  });
  reviveQuizForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    submitDailyReviveQuiz();
  });
  reviveUseButton?.addEventListener("click", () => performRevive("card"));
  reviveEmergencyButton?.addEventListener("click", () => performRevive("emergency"));
  reviveAbandonButton?.addEventListener("click", abandonRevive);
  profileButton?.addEventListener("click", openOwnProfile);
  profileCloseButton?.addEventListener("click", closeProfile);
  profileInviteButton?.addEventListener("click", () => invitePlayerToBattle(publicProfileTarget));
  profileDialog?.addEventListener("pointerdown", (event) => {
    if (event.target === profileDialog) closeProfile();
  });
  profileSaveButton?.addEventListener("click", saveOwnProfile);
  noticeActionButton?.addEventListener("click", () => closeNotice(true));
  noticeCloseButton?.addEventListener("click", () => closeNotice(false));
  noticeDialog?.addEventListener("pointerdown", (event) => {
    if (event.target === noticeDialog) closeNotice(false);
  });
  registerTab?.addEventListener("click", () => setAccountGateMode("register"));
  loginTab?.addEventListener("click", () => setAccountGateMode("login"));
  for (const tab of [registerTab, loginTab].filter(Boolean)) {
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.code)) return;
      event.preventDefault();
      const next = tab === registerTab ? loginTab : registerTab;
      setAccountGateMode(next === registerTab ? "register" : "login");
      next?.focus();
    });
  }
  registerForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = cleanPlayerName(registerNameInput?.value);
    const password = String(registerPasswordInput?.value || "");
    const confirmPassword = String(registerConfirmInput?.value || "");
    if (accountGateMessage) {
      accountGateMessage.textContent = "正在创建云端账号…";
      accountGateMessage.classList.remove("is-error", "is-success");
    }
    if (registerAccountButton) registerAccountButton.disabled = true;
    try {
      const payload = await accountRequest("register", {
        name,
        password,
        confirmPassword,
        playerId,
        showCoins: Boolean(registerShowCoins?.checked),
        showOnlineStatus: Boolean(registerShowOnlineStatus?.checked),
        avatar: accountAvatar,
        gameData: collectAccountGameData(),
      });
      finishAccountAuthentication(payload);
      if (accountGateMessage) {
        accountGateMessage.textContent = "注册成功，当前记录已保存到云端";
        accountGateMessage.classList.add("is-success");
      }
      showHome();
    } catch (error) {
      if (error.code === "name_taken") {
        if (loginNameInput) loginNameInput.value = name;
        setAccountGateMode("login");
      }
      if (accountGateMessage) {
        accountGateMessage.textContent = error.message;
        accountGateMessage.classList.add("is-error");
      }
    } finally {
      if (registerAccountButton) registerAccountButton.disabled = false;
    }
  });
  loginForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = cleanPlayerName(loginNameInput?.value);
    const password = String(loginPasswordInput?.value || "");
    if (accountGateMessage) {
      accountGateMessage.textContent = "正在登录并恢复记录…";
      accountGateMessage.classList.remove("is-error", "is-success");
    }
    if (loginAccountButton) loginAccountButton.disabled = true;
    try {
      const payload = await accountRequest("login", { name, password });
      finishAccountAuthentication(payload);
      showHome();
    } catch (error) {
      if (accountGateMessage) {
        accountGateMessage.textContent = error.message;
        accountGateMessage.classList.add("is-error");
      }
    } finally {
      if (loginAccountButton) loginAccountButton.disabled = false;
    }
  });
  showCoinsToggle?.addEventListener("change", () => {
    accountShowCoins = Boolean(showCoinsToggle.checked);
    writeSetting("cloud-jumper-show-coins", accountShowCoins);
    updateCloudAccountUi(accountShowCoins ? "你的金币会显示在排行榜" : "你的金币已设为私密");
    scheduleAccountSync(20);
  });
  showOnlineStatusToggle?.addEventListener("change", () => {
    accountShowOnlineStatus = Boolean(showOnlineStatusToggle.checked);
    writeSetting("cloud-jumper-show-online-status", accountShowOnlineStatus);
    updateCloudAccountUi(accountShowOnlineStatus ? "排行榜会显示你的在线状态圆点" : "排行榜已隐藏你的在线状态");
    scheduleAccountSync(20);
    if (accountShowOnlineStatus) schedulePresenceHeartbeat(120);
  });
  logoutAccountButton?.addEventListener("click", async () => {
    if (!accountAuthenticated || !confirm("退出后，本机记录会清除；重新登录即可从云端恢复。确定退出吗？")) return;
    try {
      await syncAccountNow();
      await accountRequest("logout", {}, true);
    } catch {
      // Local logout still proceeds if the network is temporarily unavailable.
    }
    try {
      const resetVersion = String(readSetting("cloud-jumper-reset-version", DATA_RESET_VERSION));
      const keys = [];
      for (let index = 0; index < window.localStorage.length; index += 1) {
        const key = window.localStorage.key(index);
        if (key?.startsWith("cloud-jumper-")) keys.push(key);
      }
      for (const key of keys) window.localStorage.removeItem(key);
      window.localStorage.setItem("cloud-jumper-reset-version", resetVersion);
    } catch { /* no-op */ }
    window.location.reload();
  });
  entryNameButton?.addEventListener("click", () => {
    if (!savePlayerName(entryNameInput?.value)) {
      if (entryNameError) entryNameError.textContent = "必须输入名字才能进入游戏";
      entryNameError?.classList.add("is-error");
      return;
    }
    showHome();
  });
  entryNameInput?.addEventListener("keydown", (event) => {
    if (event.code !== "Enter") return;
    event.preventDefault();
    entryNameButton?.click();
  });
  accountUpgradeButton?.addEventListener("click", purchaseAccountUpgrade);
  dailyCheckinButton?.addEventListener("click", claimDailyCheckin);
  redeemCodeButton?.addEventListener("click", redeemGiftCode);
  redeemCodeInput?.addEventListener("keydown", (event) => {
    if (event.code !== "Enter") return;
    event.preventDefault();
    redeemGiftCode();
  });
  pauseButton?.addEventListener("pointerdown", (event) => event.stopPropagation());
  pauseButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    pauseGame();
  });
  resumeButton?.addEventListener("click", resumeGame);
  exitRunButton?.addEventListener("click", exitCurrentRun);
  refreshLeaderboard?.addEventListener("click", () => loadLeaderboard(true));
  for (const button of rankingModeButtons) {
    button.addEventListener("click", () => {
      selectedRankingMode = ["overall", "solo", "battle"].includes(button.dataset.rankingMode) ? button.dataset.rankingMode : "overall";
      renderLeaderboard(leaderboardSourceSnapshot, selectedRankingMode === "overall" ? "综合成绩排名" : selectedRankingMode === "battle" ? "好友对战排名" : "单人闯关排名");
    });
  }
  battleCloseButton?.addEventListener("click", closeBattleDialog);
  battleDialog?.addEventListener("pointerdown", (event) => {
    if (event.target === battleDialog) closeBattleDialog();
  });
  battleCreateButton?.addEventListener("click", () => createBattleRoom());
  battleJoinForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    joinBattleRoom(battleRoomInput?.value);
  });
  battleRoomInput?.addEventListener("input", () => {
    battleRoomInput.value = cleanRoomCode(battleRoomInput.value);
  });
  battleCopyLinkButton?.addEventListener("click", async () => {
    const code = cleanRoomCode(battleRoomSnapshot?.code);
    if (!code) return;
    const url = new URL(window.location.href);
    url.searchParams.set("battle", code);
    try {
      await navigator.clipboard.writeText(url.toString());
      battleCopyLinkButton.textContent = "✓ 链接已复制";
      window.setTimeout(() => { if (battleCopyLinkButton) battleCopyLinkButton.textContent = "复制邀请链接"; }, 1600);
    } catch {
      window.prompt("复制这个邀请链接发给朋友：", url.toString());
    }
  });
  battleReadyButton?.addEventListener("click", () => {
    const me = myBattleRoomPlayer();
    sendBattle("ready", { roomCode: battleRoomSnapshot?.code, ready: !me?.ready });
  });
  for (const button of battleDifficultyButtons) {
    button.addEventListener("click", () => {
      const difficulty = battleDifficultyDefinition(button.dataset.battleDifficulty);
      if (!battleRoomSnapshot || String(battleRoomSnapshot.hostId) !== String(playerId)) return;
      sendBattle("set_difficulty", { roomCode: battleRoomSnapshot.code, difficulty: difficulty.id });
    });
  }
  battleLeaveButton?.addEventListener("click", () => {
    sendBattle("leave_room", { roomCode: battleRoomSnapshot?.code });
    battleRoomSnapshot = null;
    renderBattleRoom();
  });
  battleAcceptInviteButton?.addEventListener("click", () => {
    const code = cleanRoomCode(battlePendingInvite?.roomCode);
    battlePendingInvite = null;
    renderBattleInvite();
    if (code) joinBattleRoom(code);
  });
  battleDeclineInviteButton?.addEventListener("click", () => {
    if (battlePendingInvite) sendBattle("decline_invite", { roomCode: battlePendingInvite.roomCode });
    battlePendingInvite = null;
    renderBattleInvite();
  });
  battleUltimateButton?.addEventListener("pointerdown", (event) => event.stopPropagation());
  battleUltimateButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    useBattleUltimate();
  });
  battleResultReturnButton?.addEventListener("click", () => {
    battleResultDialog?.classList.add("is-hidden");
    openBattleDialog();
  });
  battleResultHomeButton?.addEventListener("click", () => {
    sendBattle("leave_room", { roomCode: battleRoomSnapshot?.code });
    battleRoomSnapshot = null;
    battleResultDialog?.classList.add("is-hidden");
    showHome();
  });
  for (const button of gameControlButtons) {
    const control = String(button.dataset.gameControl || "");
    button.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      event.stopPropagation();
      try { button.setPointerCapture(event.pointerId); } catch { /* no-op */ }
      setControllerControl(control, true, button);
    }, { passive: false });
    const release = (event) => {
      event.preventDefault();
      event.stopPropagation();
      setControllerControl(control, false, button);
    };
    button.addEventListener("pointerup", release, { passive: false });
    button.addEventListener("pointercancel", release, { passive: false });
    button.addEventListener("lostpointercapture", () => setControllerControl(control, false, button));
  }
  chatRefreshButton?.addEventListener("click", () => loadChatMessages(false));
  chatFullscreenButton?.addEventListener("click", () => setChatFullscreen(!chatFullscreen));
  chatAdminManageButton?.addEventListener("click", () => setChatAdminSelectionMode(true));
  chatAdminCancelButton?.addEventListener("click", () => setChatAdminSelectionMode(false));
  chatAdminSelectAllButton?.addEventListener("click", () => {
    const deletable = chatMessagesSnapshot.filter((message) => message.adminDeletable === true);
    const allSelected = deletable.length > 0 && deletable.every((message) => chatAdminSelectedIds.has(message.id));
    chatAdminSelectedIds.clear();
    if (!allSelected) {
      for (const message of deletable) chatAdminSelectedIds.add(message.id);
    }
    chatRenderFingerprint = "";
    updateChatAdminTools();
    renderChatMessages(chatMessagesSnapshot);
  });
  chatAdminDeleteButton?.addEventListener("click", deleteSelectedChatMessages);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden || gameState !== "home" || selectedHomeTab === "chat" || !accountAuthenticated) return;
    stopChatUnreadPolling();
    refreshChatUnread().finally(() => scheduleChatUnreadPolling());
  });
  chatForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    sendChatMessage();
  });
  chatImageRemove?.addEventListener("click", clearChatImage);
  chatImageInput?.addEventListener("change", async () => {
    const file = chatImageInput.files?.[0];
    if (!file) return;
    setChatStatus("正在压缩图片…");
    try {
      chatDraftImage = await compressChatImage(file);
      if (chatImagePreviewImage) chatImagePreviewImage.src = chatDraftImage;
      chatImagePreview?.classList.remove("is-hidden");
      setChatStatus("图片已准备好，点击发送即可");
    } catch (error) {
      clearChatImage();
      setChatStatus(error.message || "无法处理这个图片", true);
    }
  });
  if (playerNameInput) {
    playerNameInput.value = playerName;
    playerNameInput.addEventListener("input", () => {
      const value = cleanPlayerName(playerNameInput.value);
      playerNameInput.parentElement?.classList.remove("has-error");
      if (nameError) nameError.textContent = value ? "保存后将使用这个新名称登录" : "请输入 1–12 个字符";
    });
  }
  if (entryNameInput) entryNameInput.value = playerName;
  if (registerNameInput) registerNameInput.value = playerName;
  if (loginNameInput) loginNameInput.value = playerName;

  soundButton.addEventListener("pointerdown", (event) => event.stopPropagation());
  soundButton.addEventListener("click", (event) => {
    event.stopPropagation();
    soundOn = !soundOn;
    writeSetting("cloud-jumper-sound", soundOn);
    scheduleAccountSync();
    updateSoundButton();
    if (soundOn) {
      initAudio();
      playTone(520, 0.08, "square", 0.03, 0);
    }
  });
  compactHudButton?.addEventListener("pointerdown", (event) => event.stopPropagation());
  compactHudButton?.addEventListener("click", (event) => {
    event.stopPropagation();
    simpleHudMode = !simpleHudMode;
    writeSetting("cloud-jumper-simple-hud", simpleHudMode);
    applySimpleHudMode();
    announce(simpleHudMode ? "已打开简洁模式：只保留生命和必要按钮。" : "已恢复完整游戏信息。");
  });

  canvas.addEventListener("pointerdown", handlePointerDown, { passive: false });
  canvas.addEventListener("pointermove", handlePointerMove, { passive: false });
  canvas.addEventListener("pointerup", handlePointerUp, { passive: false });
  canvas.addEventListener("pointercancel", clearGesture, { passive: false });
  canvas.addEventListener("dblclick", (event) => event.preventDefault());
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
  document.addEventListener("contextmenu", (event) => {
    if (event.target === canvas) event.preventDefault();
  });
  document.addEventListener("visibilitychange", () => {
    keyboardCrouchHeld = false;
    pointerCrouchHeld = false;
    keyboardMoveLeftHeld = false;
    keyboardMoveRightHeld = false;
    releaseControllerControls();
    clearGesture();
    if (document.hidden && gameState === "playing") pauseGame();
    if (!document.hidden) {
      loadSiteStatus();
      schedulePresenceHeartbeat(180);
    }
    lastFrame = performance.now();
  });
  window.addEventListener("resize", syncAppViewport, { passive: true });
  window.addEventListener("orientationchange", () => window.setTimeout(syncAppViewport, 80), { passive: true });
  window.visualViewport?.addEventListener("resize", syncAppViewport, { passive: true });
  window.visualViewport?.addEventListener("scroll", syncAppViewport, { passive: true });
  window.addEventListener("offline", () => {
    if (accountAuthenticated) updateCloudAccountUi("当前离线，进度会在联网后自动同步");
    if (selectedHomeTab === "chat") setChatStatus("当前离线，联网后会自动重连", true);
  });
  window.addEventListener("online", async () => {
    const siteOpen = await loadSiteStatus(true);
    if (!siteOpen) return;
    loadCharacterCatalog();
    if (accountToken && !accountAuthenticated) restoreAccountSession();
    if (!accountAuthenticated) return;
    schedulePresenceHeartbeat(160);
    scheduleAccountSync(120);
    loadLeaderboard(true);
    if (selectedHomeTab === "chat") openChat();
    else {
      refreshChatUnread();
      scheduleChatUnreadPolling(800);
    }
    connectBattleSocket();
  });

  function frame(now) {
    const dt = Math.min(0.05, Math.max(0, (now - lastFrame) / 1000));
    lastFrame = now;
    renderFrameDelta = dt > 0 ? dt : renderFrameDelta;
    if (gameState === "playing" && !siteLockActive) {
      const stepCount = Math.max(1, Math.min(3, Math.ceil(dt / (1 / 60))));
      const stepDelta = dt / stepCount;
      for (let step = 0; step < stepCount && gameState === "playing" && !siteLockActive; step += 1) {
        update(stepDelta);
      }
    }
    else if (gameState !== "paused" && gameState !== "revivePrompt") updateParticles(dt);
    if (gameState === "home") updateYuanyuanOffer();
    if (gameState === "playing" || canvasSizeDirty || now - lastPassiveDrawAt >= 90) {
      draw();
      lastPassiveDrawAt = now;
    }
    window.requestAnimationFrame(frame);
  }

  syncAppViewport();
  buildLevel(1);
  player = createPlayer();
  coins = coinBlueprints.map((item) => ({ ...item, collected: false }));
  hazards = hazardBlueprints.map((item) => ({ ...item }));
  enemies = enemyBlueprints.map((item, index) => ({
    ...item,
    y: GROUND_Y - 30,
    w: 42,
    h: 30,
    direction: index % 2 === 0 ? 1 : -1,
    alive: true,
  }));
  springs = springBlueprints.map((item) => ({ ...item }));
  specialEvents = specialEventBlueprints.map((item, index) => ({
    ...item,
    id: `1-${index}`,
    state: "idle",
    timer: 0,
    x: null,
  }));
  updateSoundButton();
  applySimpleHudMode();
  updateHud(true);
  renderCharacterShop();
  setupSkinPicker();
  showHome();
  siteLockCountdownTimer = window.setInterval(() => updateSiteLockClock(), 1000);
  loadSiteStatus().then((siteOpen) => {
    if (!siteOpen) return;
    loadCharacterCatalog().finally(restoreAccountSession);
  });
  window.requestAnimationFrame(frame);
})();
