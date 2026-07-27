(() => {
  "use strict";

  const loginScreen = document.getElementById("loginScreen");
  const loginForm = document.getElementById("loginForm");
  const passwordInput = document.getElementById("passwordInput");
  const loginButton = document.getElementById("loginButton");
  const loginError = document.getElementById("loginError");
  const dashboard = document.getElementById("dashboard");
  const logoutButton = document.getElementById("logoutButton");
  const refreshButton = document.getElementById("refreshButton");
  const exportButton = document.getElementById("exportButton");
  const clearButton = document.getElementById("clearButton");
  const searchInput = document.getElementById("searchInput");
  const visibleCount = document.getElementById("visibleCount");
  const adminStatus = document.getElementById("adminStatus");
  const seasonText = document.getElementById("seasonText");
  const playerRows = document.getElementById("playerRows");
  const emptyState = document.getElementById("emptyState");
  const adminTabButtons = [...document.querySelectorAll("[data-admin-tab]")];
  const adminPanels = [...document.querySelectorAll("[data-admin-panel]")];
  const refreshCharactersButton = document.getElementById("refreshCharactersButton");
  const addCharacterButton = document.getElementById("addCharacterButton");
  const characterStatus = document.getElementById("characterStatus");
  const characterForm = document.getElementById("characterForm");
  const characterEditorKicker = document.getElementById("characterEditorKicker");
  const characterEditorTitle = document.getElementById("characterEditorTitle");
  const cancelCharacterButton = document.getElementById("cancelCharacterButton");
  const saveCharacterButton = document.getElementById("saveCharacterButton");
  const deleteCharacterButton = document.getElementById("deleteCharacterButton");
  const resetCharacterButton = document.getElementById("resetCharacterButton");
  const adminCharacterGrid = document.getElementById("adminCharacterGrid");
  const characterEmptyState = document.getElementById("characterEmptyState");
  const characterInputs = {
    id: document.getElementById("characterIdInput"),
    builtIn: document.getElementById("characterBuiltInInput"),
    name: document.getElementById("characterNameInput"),
    badge: document.getElementById("characterBadgeInput"),
    color: document.getElementById("characterColorInput"),
    cost: document.getElementById("characterCostInput"),
    trait: document.getElementById("characterTraitInput"),
    agility: document.getElementById("characterAgilityInput"),
    jumpPower: document.getElementById("characterJumpPowerInput"),
    airJumps: document.getElementById("characterAirJumpsInput"),
    flipTurns: document.getElementById("characterFlipTurnsInput"),
    flipDuration: document.getElementById("characterFlipDurationInput"),
    magnetRadius: document.getElementById("characterMagnetInput"),
    freeSmash: document.getElementById("characterSmashInput"),
    speedBoost: document.getElementById("characterSpeedBoostInput"),
    staminaStars: document.getElementById("characterStaminaStarsInput"),
    staminaCapacity: document.getElementById("characterStaminaCapacityInput"),
    staminaRecovery: document.getElementById("characterStaminaRecoveryInput"),
    gravityScale: document.getElementById("characterGravityInput"),
    doorCharges: document.getElementById("characterDoorInput"),
    stoneImmune: document.getElementById("characterStoneImmuneInput"),
    instantTripleJump: document.getElementById("characterInstantTripleInput"),
    sunCaveDaily: document.getElementById("characterSunInput"),
    flairStep: document.getElementById("characterFlairStepInput"),
    flairChop: document.getElementById("characterFlairChopInput"),
    availableFrom: document.getElementById("characterAvailableFromInput"),
    availableUntil: document.getElementById("characterAvailableUntilInput"),
    salePrice: document.getElementById("characterSalePriceInput"),
    saleStartAt: document.getElementById("characterSaleStartInput"),
    saleEndAt: document.getElementById("characterSaleEndInput"),
    active: document.getElementById("characterActiveInput"),
    newCharacter: document.getElementById("characterNewInput"),
    rewardOnly: document.getElementById("characterRewardOnlyInput"),
  };
  const refreshRedeemCodesButton = document.getElementById("refreshRedeemCodesButton");
  const addRedeemCodeButton = document.getElementById("addRedeemCodeButton");
  const redeemCodeAdminStatus = document.getElementById("redeemCodeAdminStatus");
  const redeemCodeForm = document.getElementById("redeemCodeForm");
  const redeemCodeEditorTitle = document.getElementById("redeemCodeEditorTitle");
  const cancelRedeemCodeButton = document.getElementById("cancelRedeemCodeButton");
  const saveRedeemCodeButton = document.getElementById("saveRedeemCodeButton");
  const deleteRedeemCodeButton = document.getElementById("deleteRedeemCodeButton");
  const adminRedeemCodeGrid = document.getElementById("adminRedeemCodeGrid");
  const redeemCodeEmptyState = document.getElementById("redeemCodeEmptyState");
  const redeemCharacterOptions = document.getElementById("redeemCharacterOptions");
  const redeemCodeInputs = {
    original: document.getElementById("redeemCodeOriginalInput"),
    value: document.getElementById("redeemCodeValueInput"),
    label: document.getElementById("redeemCodeLabelInput"),
    coins: document.getElementById("redeemCodeCoinsInput"),
    characterId: document.getElementById("redeemCodeCharacterInput"),
    startsAt: document.getElementById("redeemCodeStartsInput"),
    expiresAt: document.getElementById("redeemCodeExpiresInput"),
    active: document.getElementById("redeemCodeActiveInput"),
  };
  const stats = {
    totalPlayers: document.getElementById("statTotal"),
    challengedPlayers: document.getElementById("statChallenged"),
    passedPlayers: document.getElementById("statPassed"),
    pendingResets: document.getElementById("statResets"),
    issuedGifts: document.getElementById("statGifts"),
    onlinePlayers: document.getElementById("statOnline"),
  };
  const statCharacters = document.getElementById("statCharacters");
  const statRedeemCodes = document.getElementById("statRedeemCodes");
  const statSiteLock = document.getElementById("statSiteLock");
  const siteControlStatus = document.getElementById("siteControlStatus");
  const siteControlStatusCard = document.getElementById("siteControlStatusCard");
  const siteControlBadge = document.getElementById("siteControlBadge");
  const siteControlTitle = document.getElementById("siteControlTitle");
  const siteControlSummary = document.getElementById("siteControlSummary");
  const siteControlCountdown = document.getElementById("siteControlCountdown");
  const siteControlWindow = document.getElementById("siteControlWindow");
  const siteLockForm = document.getElementById("siteLockForm");
  const siteLockReasonInput = document.getElementById("siteLockReasonInput");
  const siteLockStartInput = document.getElementById("siteLockStartInput");
  const siteLockEndInput = document.getElementById("siteLockEndInput");
  const siteLockDurationButtons = [...document.querySelectorAll("[data-lock-duration]")];
  const activateSiteLockButton = document.getElementById("activateSiteLockButton");
  const unlockSiteButton = document.getElementById("unlockSiteButton");
  const refreshSiteControlButton = document.getElementById("refreshSiteControlButton");
  const yuanyuanDropStatus = document.getElementById("yuanyuanDropStatus");
  const yuanyuanDropRemaining = document.getElementById("yuanyuanDropRemaining");
  const yuanyuanDropRelease = document.getElementById("yuanyuanDropRelease");
  const yuanyuanBuyerList = document.getElementById("yuanyuanBuyerList");

  let password = "";
  let players = [];
  let characters = [];
  let editingCharacter = null;
  let redeemCodes = [];
  let editingRedeemCode = null;
  let siteControlData = null;
  let siteControlServerOffset = 0;
  let selectedAdminTab = "players";
  let busy = false;

  function setBusy(value) {
    busy = Boolean(value);
    for (const button of [loginButton, refreshButton, exportButton, clearButton, refreshCharactersButton, addCharacterButton, saveCharacterButton, deleteCharacterButton, resetCharacterButton, refreshRedeemCodesButton, addRedeemCodeButton, saveRedeemCodeButton, deleteRedeemCodeButton, activateSiteLockButton, unlockSiteButton, refreshSiteControlButton, ...siteLockDurationButtons]) {
      if (button) button.disabled = busy;
    }
    for (const button of adminCharacterGrid?.querySelectorAll("button") || []) button.disabled = busy;
    for (const button of adminRedeemCodeGrid?.querySelectorAll("button") || []) button.disabled = busy;
    dashboard?.setAttribute("aria-busy", String(busy));
  }

  function setStatus(message, error = false) {
    adminStatus.textContent = message;
    adminStatus.classList.toggle("is-error", error);
  }

  function setCharacterStatus(message, error = false) {
    if (!characterStatus) return;
    characterStatus.textContent = message;
    characterStatus.classList.toggle("is-error", error);
  }

  function setRedeemCodeStatus(message, error = false) {
    if (!redeemCodeAdminStatus) return;
    redeemCodeAdminStatus.textContent = message;
    redeemCodeAdminStatus.classList.toggle("is-error", error);
  }

  function setSiteControlStatus(message, error = false) {
    if (!siteControlStatus) return;
    siteControlStatus.textContent = message;
    siteControlStatus.classList.toggle("is-error", error);
  }

  function setAdminTab(tab) {
    const selected = ["players", "characters", "redeem-codes", "site-control"].includes(tab) ? tab : "players";
    selectedAdminTab = selected;
    for (const button of adminTabButtons) {
      const active = button.dataset.adminTab === selected;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    }
    for (const panel of adminPanels) {
      const active = panel.dataset.adminPanel === selected;
      panel.classList.toggle("is-hidden", !active);
      panel.hidden = !active;
    }
  }

  function formatDate(value) {
    const date = new Date(Number(value) || 0);
    if (!Number.isFinite(date.getTime()) || date.getTime() <= 0) return "—";
    return new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(date);
  }

  function formatDateTimeInput(value) {
    const date = new Date(Number(value) || 0);
    if (!Number.isFinite(date.getTime()) || date.getTime() <= 0) return "";
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 16);
  }

  function parseDateTimeInput(value) {
    const text = String(value || "").trim();
    if (!text) return 0;
    const parsed = new Date(text).getTime();
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function resultText(player) {
    const coins = ` · 金币 ${Math.max(0, Number(player.coins) || 0)}${player.showCoins ? "（公开）" : "（私密）"}`;
    if (Number(player.score) === 0 && Number(player.time) === 0) return `尚未挑战${coins}`;
    return `第 ${player.level} 关 · ${player.score} 分${Number(player.time) > 0 ? ` · ${Number(player.time).toFixed(1)} 秒` : ""}${coins}`;
  }

  function playerPresence(player, now = Date.now()) {
    const lastActiveAt = Math.max(0, Number(player?.lastActiveAt) || 0);
    if (lastActiveAt > 0 && now - lastActiveAt <= 5 * 60 * 1000) {
      return { state: "online", label: "在线", detail: `最近 ${formatDate(lastActiveAt)}` };
    }
    if (lastActiveAt > 0 && now - lastActiveAt <= 24 * 60 * 60 * 1000) {
      return { state: "recent", label: "一天内在线", detail: formatDate(lastActiveAt) };
    }
    return {
      state: "away",
      label: "离线",
      detail: lastActiveAt > 0 ? formatDate(lastActiveAt) : "暂无记录",
    };
  }

  async function requestAdmin(method = "GET", body = null, endpoint = "/api/admin") {
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    const timer = controller ? window.setTimeout(() => controller.abort(), 12000) : 0;
    let response;
    try {
      response = await fetch(endpoint, {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Admin-Password": password,
        },
        body: body ? JSON.stringify(body) : null,
        ...(controller ? { signal: controller.signal } : {}),
      });
    } catch (cause) {
      const error = new Error(controller?.signal.aborted
        ? "连接超时，请检查网络后重试"
        : navigator.onLine === false
          ? "当前没有网络，联网后再试"
          : "无法连接 Cloudflare 后台，请稍后重试");
      error.code = controller?.signal.aborted ? "request_timeout" : "network_error";
      throw error;
    } finally {
      if (timer) window.clearTimeout(timer);
    }
    let data = {};
    try { data = await response.json(); } catch { data = {}; }
    if (response.status === 401) {
      const error = new Error("密码错误");
      error.code = "unauthorized";
      throw error;
    }
    if (response.status === 503) {
      const error = new Error("LEADERBOARD KV 尚未绑定");
      error.code = "kv_not_bound";
      throw error;
    }
    if (!response.ok) {
      const readableErrors = {
        server_error: "后台暂时忙碌，请稍后重试",
        invalid_character_id: "人物编号不正确",
        custom_id_required: "新增人物必须使用系统生成的编号",
        invalid_availability_window: "结束上架时间必须晚于开始时间",
        invalid_sale_window: "优惠结束时间必须晚于优惠开始时间",
        builtin_character_protected: "内置人物不能永久删除，可以下架或恢复默认",
        builtin_character_required: "只有内置人物可以恢复默认",
        character_not_found: "找不到这个人物，可能已经被删除",
        invalid_redeem_code: "兑换码只能使用 3–24 位英文字母、数字、横线或下划线",
        empty_redeem_reward: "金币和人物至少要设置一种奖励",
        invalid_redeem_window: "兑换截止时间必须晚于开始时间",
        redeem_character_not_found: "找不到兑换码对应的人物",
        redeem_code_not_found: "找不到这个兑换码，可能已经被删除",
        invalid_site_lock_window: "封锁结束时间必须晚于开始时间，且最长不能超过 30 天",
      };
      const error = new Error(readableErrors[data.error] || data.error || "后台操作失败");
      error.code = String(data.error || "request_failed");
      throw error;
    }
    return data;
  }

  function render(data) {
    players = Array.isArray(data.entries) ? data.entries : [];
    for (const [key, element] of Object.entries(stats)) element.textContent = String(Number(data.stats?.[key]) || 0);
    if (data.season?.endAt) seasonText.textContent = `第 ${data.season.number} 赛季 · ${formatDate(data.season.startAt)}—${formatDate(data.season.endAt)}`;
    renderRows();
    if (data.message) setStatus(data.message);
  }

  function renderRows() {
    const keyword = String(searchInput.value || "").trim().toLocaleLowerCase();
    const filtered = players.filter((player) => !keyword || player.name.toLocaleLowerCase().includes(keyword) || player.playerId.toLocaleLowerCase().includes(keyword));
    visibleCount.textContent = `${filtered.length} / ${players.length} 人`;
    playerRows.replaceChildren();
    emptyState.classList.toggle("is-hidden", filtered.length > 0);

    filtered.forEach((player) => {
      const rank = players.findIndex((item) => item.playerId === player.playerId) + 1;
      const row = document.createElement("tr");
      row.dataset.playerId = player.playerId;

      const rankCell = document.createElement("td");
      rankCell.className = "rank";
      rankCell.textContent = String(rank);

      const playerCell = document.createElement("td");
      playerCell.className = "player-cell";
      const name = document.createElement("strong");
      name.textContent = player.name;
      const id = document.createElement("small");
      id.textContent = player.playerId;
      id.title = "玩家编号";
      playerCell.append(name, id);

      const resultCell = document.createElement("td");
      resultCell.className = "result-cell";
      const result = document.createElement("strong");
      result.textContent = resultText(player);
      resultCell.append(result);

      const presence = playerPresence(player);
      const presenceCell = document.createElement("td");
      presenceCell.className = "presence-cell";
      const presenceLine = document.createElement("strong");
      presenceLine.className = `is-${presence.state}`;
      presenceLine.innerHTML = `<i aria-hidden="true"></i>${presence.label}`;
      const presenceDetail = document.createElement("small");
      presenceDetail.textContent = `${presence.detail}${player.showOnlineStatus ? " · 玩家公开" : " · 玩家隐藏"}`;
      presenceCell.append(presenceLine, presenceDetail);

      const updatedCell = document.createElement("td");
      updatedCell.textContent = formatDate(player.updatedAt);

      const actionCell = document.createElement("td");
      const actions = document.createElement("div");
      actions.className = "row-actions";
      for (const config of [
        ["gift", "赠送金币", "gift"],
        ["set", "校正余额", "set"],
        ["delete", "只删排名", "delete"],
        ["reset", "删除并重置", "reset"],
      ]) {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.action = config[0];
        button.className = config[2];
        button.textContent = config[1];
        actions.append(button);
      }
      actionCell.append(actions);
      row.append(rankCell, playerCell, resultCell, presenceCell, updatedCell, actionCell);
      playerRows.append(row);
    });
  }

  function characterAvailability(character, now = Date.now()) {
    if (character.active === false) return { label: "已下架", className: "is-offline" };
    if (Number(character.availableFrom) > 0 && now < Number(character.availableFrom)) return { label: "等待上架", className: "is-scheduled" };
    if (Number(character.availableUntil) > 0 && now > Number(character.availableUntil)) return { label: "限时结束", className: "is-offline" };
    const salePriceSet = character.salePrice !== null && character.salePrice !== undefined && character.salePrice !== "";
    const saleStarted = !Number(character.saleStartAt) || now >= Number(character.saleStartAt);
    const saleNotEnded = !Number(character.saleEndAt) || now <= Number(character.saleEndAt);
    if (salePriceSet && saleStarted && saleNotEnded) return { label: "优惠中", className: "is-sale" };
    if (character.rewardOnly) return { label: "奖励专属", className: "is-reward" };
    return { label: "正在上架", className: "is-online" };
  }

  function renderCharacterData(data) {
    characters = Array.isArray(data?.characters) ? data.characters : [];
    if (statCharacters) statCharacters.textContent = String(characters.length);
    if (redeemCharacterOptions) {
      redeemCharacterOptions.replaceChildren();
      for (const character of characters.filter((item) => item.id !== "cloud")) {
        const option = document.createElement("option");
        option.value = character.id;
        option.label = character.name;
        redeemCharacterOptions.append(option);
      }
    }
    renderCharacterCards();
    if (data?.message) setCharacterStatus(data.message);
  }

  function renderCharacterCards() {
    if (!adminCharacterGrid) return;
    adminCharacterGrid.replaceChildren();
    characterEmptyState?.classList.toggle("is-hidden", characters.length > 0);
    const now = Date.now();
    for (const character of characters) {
      const availability = characterAvailability(character, now);
      const card = document.createElement("article");
      card.className = `admin-character-card ${availability.className}`;
      card.dataset.characterId = character.id;

      const hero = document.createElement("div");
      hero.className = "admin-character-hero";
      const avatar = document.createElement("span");
      avatar.className = "admin-character-avatar";
      avatar.style.setProperty("--character-color", character.color || "#58c88b");
      avatar.textContent = character.badge || "新";
      const copy = document.createElement("div");
      const heading = document.createElement("div");
      heading.className = "admin-character-name";
      const name = document.createElement("h3");
      name.textContent = character.name || "未命名人物";
      const type = document.createElement("small");
      type.textContent = character.builtIn ? "内置人物" : "自建人物";
      heading.append(name, type);
      const status = document.createElement("span");
      status.className = "admin-character-status";
      status.textContent = availability.label;
      copy.append(heading, status);
      hero.append(avatar, copy);

      const trait = document.createElement("p");
      trait.className = "admin-character-trait";
      trait.textContent = character.trait || "暂无介绍";

      const price = document.createElement("div");
      price.className = "admin-character-price";
      const normalPrice = Math.max(0, Number(character.regularCost ?? character.cost) || 0);
      const activeSale = availability.className === "is-sale";
      price.textContent = character.rewardOnly
        ? "不能购买"
        : activeSale
          ? `优惠 ●${Math.max(0, Number(character.salePrice) || 0)} · 原价 ●${normalPrice}`
          : `售价 ●${normalPrice}`;

      const attributes = document.createElement("div");
      attributes.className = "admin-character-attributes";
      for (const [label, value] of [
        ["灵敏", Number(character.agility || 1).toFixed(2)],
        ["跳跃", `${Math.max(1, Number(character.airJumps || 0) + 1)} 次`],
        ["体力", `${Math.max(1, Number(character.staminaStars) || 1)} 星`],
        ["碎石", `${Math.max(0, Number(character.freeSmash) || 0)} 次`],
      ]) {
        const item = document.createElement("span");
        item.innerHTML = `<small>${label}</small><b>${value}</b>`;
        attributes.append(item);
      }

      const actions = document.createElement("div");
      actions.className = "admin-character-actions";
      for (const [action, label, className] of [
        ["edit", "编辑", "edit"],
        ["duplicate", "复制新增", "duplicate"],
        ["toggle", character.active === false ? "重新上架" : "下架", "toggle"],
        [character.builtIn ? "reset" : "delete", character.builtIn ? "恢复默认" : "删除", character.builtIn ? "reset-default" : "delete"],
      ]) {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.characterAction = action;
        button.className = className;
        button.textContent = label;
        actions.append(button);
      }

      card.append(hero, trait, price, attributes, actions);
      adminCharacterGrid.append(card);
    }
  }

  function newCharacterTemplate() {
    const random = Math.random().toString(36).slice(2, 7);
    return {
      id: `custom-${Date.now().toString(36)}-${random}`,
      builtIn: false,
      name: "新人物",
      badge: "新",
      color: "#58c88b",
      cost: 499,
      regularCost: 499,
      salePrice: null,
      saleStartAt: 0,
      saleEndAt: 0,
      availableFrom: 0,
      availableUntil: 0,
      active: true,
      rewardOnly: false,
      newCharacter: true,
      agility: 1,
      jumpPower: 680,
      airJumps: 1,
      flipTurns: 0,
      flipDuration: 0,
      magnetRadius: 0,
      freeSmash: 0,
      stoneImmune: false,
      instantTripleJump: false,
      sunCaveDaily: false,
      speedBoost: 1,
      gravityScale: 1,
      doorCharges: 0,
      staminaCapacity: 72,
      staminaStars: 1,
      staminaRecovery: 0,
      flairMoves: [],
      trait: "均衡型人物",
    };
  }

  function setInputValue(input, value) {
    if (!input) return;
    if (input.type === "checkbox") input.checked = value === true;
    else input.value = value ?? "";
  }

  function openCharacterEditor(character = null, clone = false) {
    let target = character ? { ...character } : newCharacterTemplate();
    if (clone) {
      const fresh = newCharacterTemplate();
      target = {
        ...target,
        id: fresh.id,
        builtIn: false,
        name: `${String(target.name || "人物").slice(0, 12)}副本`,
        active: true,
        newCharacter: true,
      };
    }
    editingCharacter = target;
    setInputValue(characterInputs.id, target.id);
    setInputValue(characterInputs.builtIn, String(target.builtIn === true));
    setInputValue(characterInputs.name, target.name);
    setInputValue(characterInputs.badge, target.badge);
    setInputValue(characterInputs.color, target.color || "#58c88b");
    setInputValue(characterInputs.cost, target.regularCost ?? target.cost ?? 499);
    setInputValue(characterInputs.trait, target.trait);
    setInputValue(characterInputs.agility, target.agility ?? 1);
    setInputValue(characterInputs.jumpPower, target.jumpPower ?? 680);
    setInputValue(characterInputs.airJumps, target.airJumps ?? 1);
    setInputValue(characterInputs.flipTurns, target.flipTurns ?? 0);
    setInputValue(characterInputs.flipDuration, target.flipDuration ?? 0);
    setInputValue(characterInputs.magnetRadius, target.magnetRadius ?? 0);
    setInputValue(characterInputs.freeSmash, target.freeSmash ?? 0);
    setInputValue(characterInputs.speedBoost, target.speedBoost ?? 1);
    setInputValue(characterInputs.staminaStars, target.staminaStars ?? 1);
    setInputValue(characterInputs.staminaCapacity, target.staminaCapacity ?? 72);
    setInputValue(characterInputs.staminaRecovery, target.staminaRecovery ?? 0);
    setInputValue(characterInputs.gravityScale, target.gravityScale ?? 1);
    setInputValue(characterInputs.doorCharges, target.doorCharges ?? 0);
    setInputValue(characterInputs.stoneImmune, target.stoneImmune === true);
    setInputValue(characterInputs.instantTripleJump, target.instantTripleJump === true);
    setInputValue(characterInputs.sunCaveDaily, target.sunCaveDaily === true);
    setInputValue(characterInputs.flairStep, target.flairMoves?.includes("explosiveStepover"));
    setInputValue(characterInputs.flairChop, target.flairMoves?.includes("dragToChop"));
    setInputValue(characterInputs.availableFrom, formatDateTimeInput(target.availableFrom));
    setInputValue(characterInputs.availableUntil, formatDateTimeInput(target.availableUntil));
    setInputValue(characterInputs.salePrice, target.salePrice ?? "");
    setInputValue(characterInputs.saleStartAt, formatDateTimeInput(target.saleStartAt));
    setInputValue(characterInputs.saleEndAt, formatDateTimeInput(target.saleEndAt));
    setInputValue(characterInputs.active, target.active !== false);
    setInputValue(characterInputs.newCharacter, target.newCharacter === true);
    setInputValue(characterInputs.rewardOnly, target.rewardOnly === true);
    if (characterEditorKicker) characterEditorKicker.textContent = target.builtIn ? "编辑内置人物" : character ? clone ? "复制为新人物" : "编辑自建人物" : "新增人物";
    if (characterEditorTitle) characterEditorTitle.textContent = target.name || "创建新人物";
    deleteCharacterButton?.classList.toggle("is-hidden", target.builtIn === true);
    resetCharacterButton?.classList.toggle("is-hidden", target.builtIn !== true);
    characterForm?.classList.remove("is-hidden");
    characterForm?.scrollIntoView({ behavior: "smooth", block: "start" });
    characterInputs.name?.focus({ preventScroll: true });
  }

  function closeCharacterEditor() {
    editingCharacter = null;
    characterForm?.classList.add("is-hidden");
  }

  function collectCharacterForm() {
    if (!editingCharacter) return null;
    const number = (input, fallback = 0) => {
      const parsed = Number(input?.value);
      return Number.isFinite(parsed) ? parsed : fallback;
    };
    const normalCost = Math.round(number(characterInputs.cost, 499));
    const saleText = String(characterInputs.salePrice?.value || "").trim();
    const flairMoves = [];
    if (characterInputs.flairStep?.checked) flairMoves.push("explosiveStepover");
    if (characterInputs.flairChop?.checked) flairMoves.push("dragToChop");
    return {
      ...editingCharacter,
      id: String(characterInputs.id?.value || editingCharacter.id),
      name: String(characterInputs.name?.value || "").trim(),
      badge: String(characterInputs.badge?.value || "").trim(),
      color: String(characterInputs.color?.value || "#58c88b"),
      cost: normalCost,
      regularCost: normalCost,
      trait: String(characterInputs.trait?.value || "").trim(),
      agility: number(characterInputs.agility, 1),
      jumpPower: number(characterInputs.jumpPower, 680),
      airJumps: number(characterInputs.airJumps, 1),
      flipTurns: number(characterInputs.flipTurns, 0),
      flipDuration: number(characterInputs.flipDuration, 0),
      magnetRadius: number(characterInputs.magnetRadius, 0),
      freeSmash: number(characterInputs.freeSmash, 0),
      speedBoost: number(characterInputs.speedBoost, 1),
      staminaStars: number(characterInputs.staminaStars, 1),
      staminaCapacity: number(characterInputs.staminaCapacity, 72),
      staminaRecovery: number(characterInputs.staminaRecovery, 0),
      gravityScale: number(characterInputs.gravityScale, 1),
      doorCharges: number(characterInputs.doorCharges, 0),
      stoneImmune: characterInputs.stoneImmune?.checked === true,
      instantTripleJump: characterInputs.instantTripleJump?.checked === true,
      sunCaveDaily: characterInputs.sunCaveDaily?.checked === true,
      flairMoves,
      availableFrom: parseDateTimeInput(characterInputs.availableFrom?.value),
      availableUntil: parseDateTimeInput(characterInputs.availableUntil?.value),
      salePrice: saleText ? Math.round(Number(saleText)) : null,
      saleStartAt: parseDateTimeInput(characterInputs.saleStartAt?.value),
      saleEndAt: parseDateTimeInput(characterInputs.saleEndAt?.value),
      active: characterInputs.active?.checked === true,
      newCharacter: characterInputs.newCharacter?.checked === true,
      rewardOnly: characterInputs.rewardOnly?.checked === true,
    };
  }

  async function loadCharacterDashboard() {
    if (busy) return;
    setBusy(true);
    setCharacterStatus("正在读取人物设置…");
    try {
      const data = await requestAdmin("GET", null, "/api/admin-characters");
      renderCharacterData(data);
      setCharacterStatus(`已载入 ${data.characters?.length || 0} 个人物`);
    } catch (error) {
      setCharacterStatus(error.message, true);
    } finally {
      setBusy(false);
    }
  }

  async function runCharacterAction(body, workingMessage) {
    if (busy) return;
    setBusy(true);
    setCharacterStatus(workingMessage);
    try {
      const data = await requestAdmin("POST", body, "/api/admin-characters");
      renderCharacterData(data);
      closeCharacterEditor();
      setCharacterStatus(data.message || "人物设置已保存");
    } catch (error) {
      setCharacterStatus(error.message, true);
    } finally {
      setBusy(false);
    }
  }

  function redeemCodeAvailability(code, now = Date.now()) {
    if (code.active === false) return { label: "已停用", className: "is-offline" };
    if (Number(code.startsAt) > 0 && now < Number(code.startsAt)) return { label: "等待开放", className: "is-scheduled" };
    if (Number(code.expiresAt) > 0 && now > Number(code.expiresAt)) return { label: "已过期", className: "is-expired" };
    return { label: "可兑换", className: "is-online" };
  }

  function redeemCodeRewardText(code) {
    const parts = [];
    if (Number(code.coins) > 0) parts.push(`● ${Math.round(Number(code.coins))} 金币`);
    if (code.characterId) {
      const character = characters.find((item) => item.id === code.characterId);
      parts.push(`人物：${character?.name || code.characterId}`);
    }
    return parts.join(" + ") || "未设置奖励";
  }

  function renderRedeemCodeData(data) {
    redeemCodes = Array.isArray(data?.codes) ? data.codes : [];
    if (statRedeemCodes) statRedeemCodes.textContent = String(redeemCodes.length);
    renderRedeemCodeCards();
    if (data?.message) setRedeemCodeStatus(data.message);
  }

  function renderRedeemCodeCards() {
    if (!adminRedeemCodeGrid) return;
    adminRedeemCodeGrid.replaceChildren();
    redeemCodeEmptyState?.classList.toggle("is-hidden", redeemCodes.length > 0);
    const now = Date.now();
    const sorted = [...redeemCodes].sort((a, b) => {
      const aState = redeemCodeAvailability(a, now).className === "is-online" ? 0 : 1;
      const bState = redeemCodeAvailability(b, now).className === "is-online" ? 0 : 1;
      return aState - bState || Number(b.updatedAt) - Number(a.updatedAt);
    });
    for (const code of sorted) {
      const availability = redeemCodeAvailability(code, now);
      const card = document.createElement("article");
      card.className = `admin-redeem-code-card ${availability.className}`;
      card.dataset.redeemCode = code.code;

      const heading = document.createElement("div");
      heading.className = "redeem-code-card-heading";
      const identity = document.createElement("div");
      const codeText = document.createElement("code");
      codeText.textContent = code.code;
      const label = document.createElement("strong");
      label.textContent = code.label || "兑换码奖励";
      identity.append(codeText, label);
      const status = document.createElement("span");
      status.textContent = availability.label;
      heading.append(identity, status);

      const reward = document.createElement("p");
      reward.className = "redeem-code-reward";
      reward.textContent = redeemCodeRewardText(code);

      const metadata = document.createElement("div");
      metadata.className = "redeem-code-meta";
      for (const [name, value] of [
        ["开放", Number(code.startsAt) > 0 ? formatDate(code.startsAt) : "立即"],
        ["截止", Number(code.expiresAt) > 0 ? formatDate(code.expiresAt) : "长期"],
        ["已领取", `${Math.max(0, Math.round(Number(code.uses) || 0))} 次`],
      ]) {
        const item = document.createElement("span");
        const small = document.createElement("small");
        small.textContent = name;
        const strong = document.createElement("b");
        strong.textContent = value;
        item.append(small, strong);
        metadata.append(item);
      }

      const actions = document.createElement("div");
      actions.className = "admin-character-actions";
      for (const [action, text, className] of [
        ["edit", "编辑", "edit"],
        ["toggle", code.active === false ? "启用" : "停用", "toggle"],
        ["delete", "删除", "delete"],
      ]) {
        const button = document.createElement("button");
        button.type = "button";
        button.dataset.redeemCodeAction = action;
        button.className = className;
        button.textContent = text;
        actions.append(button);
      }
      card.append(heading, reward, metadata, actions);
      adminRedeemCodeGrid.append(card);
    }
  }

  function newRedeemCodeTemplate() {
    return {
      code: "",
      label: "兑换码奖励",
      coins: 200,
      characterId: "",
      startsAt: 0,
      expiresAt: 0,
      active: true,
      uses: 0,
    };
  }

  function openRedeemCodeEditor(code = null) {
    editingRedeemCode = code ? { ...code } : newRedeemCodeTemplate();
    setInputValue(redeemCodeInputs.original, editingRedeemCode.code);
    setInputValue(redeemCodeInputs.value, editingRedeemCode.code);
    setInputValue(redeemCodeInputs.label, editingRedeemCode.label);
    setInputValue(redeemCodeInputs.coins, editingRedeemCode.coins ?? 0);
    setInputValue(redeemCodeInputs.characterId, editingRedeemCode.characterId || "");
    setInputValue(redeemCodeInputs.startsAt, formatDateTimeInput(editingRedeemCode.startsAt));
    setInputValue(redeemCodeInputs.expiresAt, formatDateTimeInput(editingRedeemCode.expiresAt));
    setInputValue(redeemCodeInputs.active, editingRedeemCode.active !== false);
    if (redeemCodeInputs.value) redeemCodeInputs.value.readOnly = Boolean(code);
    if (redeemCodeEditorTitle) redeemCodeEditorTitle.textContent = code ? `编辑 ${code.code}` : "创建兑换码";
    deleteRedeemCodeButton?.classList.toggle("is-hidden", !code);
    redeemCodeForm?.classList.remove("is-hidden");
    redeemCodeForm?.scrollIntoView({ behavior: "smooth", block: "start" });
    (code ? redeemCodeInputs.label : redeemCodeInputs.value)?.focus({ preventScroll: true });
  }

  function closeRedeemCodeEditor() {
    editingRedeemCode = null;
    redeemCodeForm?.classList.add("is-hidden");
    if (redeemCodeInputs.value) redeemCodeInputs.value.readOnly = false;
  }

  function collectRedeemCodeForm() {
    if (!editingRedeemCode) return null;
    const coins = Math.round(Number(redeemCodeInputs.coins?.value) || 0);
    return {
      ...editingRedeemCode,
      code: String(redeemCodeInputs.value?.value || "").trim().toLowerCase(),
      label: String(redeemCodeInputs.label?.value || "").trim(),
      coins,
      characterId: String(redeemCodeInputs.characterId?.value || "").trim().toLowerCase(),
      startsAt: parseDateTimeInput(redeemCodeInputs.startsAt?.value),
      expiresAt: parseDateTimeInput(redeemCodeInputs.expiresAt?.value),
      active: redeemCodeInputs.active?.checked === true,
    };
  }

  async function loadRedeemCodeDashboard() {
    if (busy) return;
    setBusy(true);
    setRedeemCodeStatus("正在读取兑换码…");
    try {
      const data = await requestAdmin("GET", null, "/api/admin-redeem-codes");
      renderRedeemCodeData(data);
      setRedeemCodeStatus(`已载入 ${data.codes?.length || 0} 个兑换码`);
    } catch (error) {
      setRedeemCodeStatus(error.message, true);
    } finally {
      setBusy(false);
    }
  }

  async function runRedeemCodeAction(body, workingMessage) {
    if (busy) return;
    setBusy(true);
    setRedeemCodeStatus(workingMessage);
    try {
      const data = await requestAdmin("POST", body, "/api/admin-redeem-codes");
      renderRedeemCodeData(data);
      closeRedeemCodeEditor();
      setRedeemCodeStatus(data.message || "兑换码设置已保存");
    } catch (error) {
      setRedeemCodeStatus(error.message, true);
    } finally {
      setBusy(false);
    }
  }

  function formatDuration(milliseconds) {
    const totalSeconds = Math.max(0, Math.ceil(Number(milliseconds) / 1000));
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (days > 0) return `${days} 天 ${String(hours).padStart(2, "0")} 时 ${String(minutes).padStart(2, "0")} 分`;
    if (hours > 0) return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function setSiteControlBadge(label) {
    if (!siteControlBadge) return;
    const dot = document.createElement("i");
    siteControlBadge.replaceChildren(dot, document.createTextNode(label));
  }

  function renderYuanyuanDrop(data, now) {
    const drop = data && typeof data === "object" ? data : {};
    const releaseAt = Math.max(0, Number(drop.releaseAt) || Date.parse("2026-07-27T10:00:00+08:00"));
    const limit = Math.max(1, Math.round(Number(drop.limit) || 3));
    const sold = Math.max(0, Math.min(limit, Math.round(Number(drop.sold) || 0)));
    const remaining = Math.max(0, Math.min(limit, Number.isFinite(Number(drop.remaining)) ? Math.round(Number(drop.remaining)) : limit - sold));
    const soldOut = drop.soldOut === true || remaining <= 0;
    const released = now >= releaseAt;
    if (yuanyuanDropStatus) {
      yuanyuanDropStatus.textContent = soldOut ? "已售罄" : released ? "正在抢购" : "等待开售";
      yuanyuanDropStatus.className = soldOut ? "is-sold-out" : released ? "is-live" : "is-waiting";
    }
    if (yuanyuanDropRemaining) yuanyuanDropRemaining.textContent = `剩余 ${remaining} / ${limit}`;
    if (yuanyuanDropRelease) {
      yuanyuanDropRelease.textContent = released
        ? `开售于 ${formatDate(releaseAt)}`
        : `${formatDate(releaseAt)} 开抢`;
    }
    if (!yuanyuanBuyerList) return;
    yuanyuanBuyerList.replaceChildren();
    const buyers = Array.isArray(drop.buyers) ? drop.buyers : [];
    if (!buyers.length) {
      const empty = document.createElement("span");
      empty.textContent = "还没有抢购记录";
      yuanyuanBuyerList.append(empty);
      return;
    }
    for (const [index, buyer] of buyers.entries()) {
      const item = document.createElement("span");
      const rank = document.createElement("b");
      rank.textContent = String(index + 1);
      const name = document.createElement("strong");
      name.textContent = String(buyer?.name || "玩家").slice(0, 12);
      const time = document.createElement("small");
      time.textContent = formatDate(buyer?.purchasedAt);
      item.append(rank, name, time);
      yuanyuanBuyerList.append(item);
    }
  }

  function renderSiteControlData(data = siteControlData, syncForm = false) {
    if (!data) return;
    siteControlData = data;
    if (syncForm && Number.isFinite(Number(data.serverTime))) {
      siteControlServerOffset = Number(data.serverTime) - Date.now();
    }
    const now = Date.now() + siteControlServerOffset;
    const lock = data.lock && typeof data.lock === "object" ? data.lock : {};
    const startsAt = Math.max(0, Number(lock.startsAt) || 0);
    const endsAt = Math.max(0, Number(lock.endsAt) || 0);
    const enabled = lock.enabled === true;
    const active = Boolean(enabled && startsAt > 0 && now >= startsAt && endsAt > now);
    const scheduled = Boolean(enabled && startsAt > now && endsAt > startsAt);
    const remaining = active ? endsAt - now : scheduled ? startsAt - now : 0;

    if (siteControlStatusCard) {
      siteControlStatusCard.className = `site-control-live-card ${active ? "is-locked" : scheduled ? "is-scheduled" : "is-open"}`;
    }
    if (active) {
      setSiteControlBadge("玩家端已封锁");
      if (siteControlTitle) siteControlTitle.textContent = "流动维护膜正在显示";
      if (siteControlSummary) siteControlSummary.textContent = String(lock.message || "云端正在进行临时维护，请稍后回来。");
      if (siteControlCountdown) siteControlCountdown.textContent = `剩余 ${formatDuration(remaining)}`;
      if (siteControlWindow) siteControlWindow.textContent = `${formatDate(endsAt)} 自动恢复`;
      if (statSiteLock) statSiteLock.textContent = "封锁中";
    } else if (scheduled) {
      setSiteControlBadge("已预约封锁");
      if (siteControlTitle) siteControlTitle.textContent = "玩家端目前正常开放";
      if (siteControlSummary) siteControlSummary.textContent = `${formatDate(startsAt)} 起显示维护膜`;
      if (siteControlCountdown) siteControlCountdown.textContent = `${formatDuration(remaining)} 后开始`;
      if (siteControlWindow) siteControlWindow.textContent = `${formatDate(startsAt)}—${formatDate(endsAt)}`;
      if (statSiteLock) statSiteLock.textContent = "已预约";
    } else {
      setSiteControlBadge("正常开放");
      if (siteControlTitle) siteControlTitle.textContent = "玩家可以正常进入";
      if (siteControlSummary) siteControlSummary.textContent = "闯关、商店、排行、聊天和好友对战均可使用。";
      if (siteControlCountdown) siteControlCountdown.textContent = "无需倒计时";
      if (siteControlWindow) siteControlWindow.textContent = "未设置下一次封锁";
      if (statSiteLock) statSiteLock.textContent = "开放";
    }

    if (syncForm) {
      if (siteLockReasonInput) siteLockReasonInput.value = String(lock.message || "云端正在进行临时维护，请稍后回来。");
      if (siteLockStartInput) siteLockStartInput.value = scheduled ? formatDateTimeInput(startsAt) : "";
      if (siteLockEndInput) {
        siteLockEndInput.value = active || scheduled
          ? formatDateTimeInput(endsAt)
          : formatDateTimeInput(Date.now() + 30 * 60 * 1000);
      }
    }
    renderYuanyuanDrop(data.yuanyuan, now);
  }

  async function loadSiteControlDashboard() {
    if (busy) return;
    setBusy(true);
    setSiteControlStatus("正在读取网站封锁和限量活动状态…");
    try {
      const data = await requestAdmin("GET", null, "/api/admin-site-control");
      renderSiteControlData(data, true);
      setSiteControlStatus("网站状态已更新");
    } catch (error) {
      setSiteControlStatus(error.message, true);
    } finally {
      setBusy(false);
    }
  }

  async function runSiteControlAction(body, workingMessage) {
    if (busy) return;
    setBusy(true);
    setSiteControlStatus(workingMessage);
    try {
      const data = await requestAdmin("POST", body, "/api/admin-site-control");
      renderSiteControlData(data, true);
      setSiteControlStatus(data.message || "网站状态已保存");
    } catch (error) {
      setSiteControlStatus(error.message, true);
    } finally {
      setBusy(false);
    }
  }

  async function loadDashboard() {
    if (busy) return;
    setBusy(true);
    setStatus("正在读取 Cloudflare KV…");
    try {
      const [data, characterData, redeemCodeData, siteData] = await Promise.all([
        requestAdmin(),
        requestAdmin("GET", null, "/api/admin-characters"),
        requestAdmin("GET", null, "/api/admin-redeem-codes"),
        requestAdmin("GET", null, "/api/admin-site-control"),
      ]);
      render(data);
      renderCharacterData(characterData);
      renderRedeemCodeData(redeemCodeData);
      renderSiteControlData(siteData, true);
      setStatus(`已载入 ${data.entries?.length || 0} 位玩家`);
      setCharacterStatus(`已载入 ${characterData.characters?.length || 0} 个人物`);
      setRedeemCodeStatus(`已载入 ${redeemCodeData.codes?.length || 0} 个兑换码`);
      setSiteControlStatus("网站状态已更新");
      sessionStorage.setItem("cloud-jumper-admin-session", password);
      loginScreen.classList.add("is-hidden");
      dashboard.classList.remove("is-hidden");
    } catch (error) {
      if (error.code === "unauthorized") {
        sessionStorage.removeItem("cloud-jumper-admin-session");
        password = "";
        dashboard.classList.add("is-hidden");
        loginScreen.classList.remove("is-hidden");
        passwordInput.focus();
      } else if (!dashboard.classList.contains("is-hidden")) {
        setStatus(error.message, true);
      }
      loginError.textContent = error.message;
    } finally {
      setBusy(false);
    }
  }

  async function runAction(body, workingMessage) {
    if (busy) return;
    setBusy(true);
    setStatus(workingMessage);
    try {
      const data = await requestAdmin("POST", body);
      render(data);
    } catch (error) {
      setStatus(error.message, true);
    } finally {
      setBusy(false);
    }
  }

  async function runCoinRepair(player, amount) {
    if (busy) return;
    setBusy(true);
    setStatus(`正在校正 ${player.name} 的云端账号余额…`);
    try {
      await requestAdmin("POST", { phase: "account", playerId: player.playerId, amount }, "/api/admin-coin-repair");
      setStatus(`账号余额已校正，正在更新 ${player.name} 的排行榜…`);
      await requestAdmin("POST", { phase: "ranking", playerId: player.playerId, amount }, "/api/admin-coin-repair");
      const data = await requestAdmin();
      render(data);
      setStatus(`${player.name} 的云端金币已准确校正为 ${amount}，其他进度未改变。`);
    } catch (error) {
      setStatus(error.message, true);
    } finally {
      setBusy(false);
    }
  }

  playerRows.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    const row = button?.closest("tr[data-player-id]");
    if (!button || !row) return;
    const player = players.find((item) => item.playerId === row.dataset.playerId);
    if (!player) return;

    if (button.dataset.action === "gift") {
      const raw = prompt(`赠送给 ${player.name} 多少金币？（1–10000）`, "200");
      if (raw === null) return;
      const amount = Math.round(Number(raw));
      if (!Number.isFinite(amount) || amount < 1 || amount > 10000) return setStatus("金币数量必须是 1–10000", true);
      runAction({ action: "grantCoins", playerId: player.playerId, amount }, `正在向 ${player.name} 发放金币…`);
    } else if (button.dataset.action === "set") {
      const raw = prompt(`把 ${player.name} 的云端金币准确设为多少？（不会删除人物和关卡）`, String(Math.max(0, Number(player.coins) || 0)));
      if (raw === null) return;
      const amount = Math.round(Number(raw));
      if (!Number.isFinite(amount) || amount < 0 || amount > 1000000000) return setStatus("金币余额必须是 0–1000000000", true);
      if (!confirm(`确定把 ${player.name} 的金币余额设为 ${amount}？\n人物、关卡、生命和成绩都会保留。`)) return;
      runCoinRepair(player, amount);
    } else if (button.dataset.action === "delete") {
      if (!confirm(`只删除 ${player.name} 的排行榜记录？\n玩家本地金币和进度不会改变，重新进入后还能再次登记。`)) return;
      runAction({ action: "deleteScore", playerId: player.playerId }, `正在删除 ${player.name} 的排名…`);
    } else if (button.dataset.action === "reset") {
      if (!confirm(`确定删除并重置 ${player.name}？\n该玩家下次连接时，金币、已购人物、关卡和生命升级都会恢复初始状态。`)) return;
      runAction({ action: "resetPlayer", playerId: player.playerId }, `正在重置 ${player.name}…`);
    }
  });

  for (const [index, button] of adminTabButtons.entries()) {
    button.addEventListener("click", () => setAdminTab(button.dataset.adminTab));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.code)) return;
      event.preventDefault();
      const nextIndex = event.code === "Home"
        ? 0
        : event.code === "End"
          ? adminTabButtons.length - 1
          : (index + (event.code === "ArrowRight" ? 1 : -1) + adminTabButtons.length) % adminTabButtons.length;
      const next = adminTabButtons[nextIndex];
      setAdminTab(next?.dataset.adminTab);
      next?.focus();
    });
  }

  addCharacterButton?.addEventListener("click", () => openCharacterEditor());
  refreshCharactersButton?.addEventListener("click", loadCharacterDashboard);
  cancelCharacterButton?.addEventListener("click", closeCharacterEditor);

  adminCharacterGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-character-action]");
    const card = button?.closest("[data-character-id]");
    if (!button || !card) return;
    const character = characters.find((item) => item.id === card.dataset.characterId);
    if (!character) return;
    const action = button.dataset.characterAction;
    if (action === "edit") {
      openCharacterEditor(character);
    } else if (action === "duplicate") {
      openCharacterEditor(character, true);
    } else if (action === "toggle") {
      const nextActive = character.active === false;
      if (!nextActive && !confirm(`确定下架 ${character.name}？\n已购买的玩家仍然可以继续使用。`)) return;
      runCharacterAction({
        action: "upsertCharacter",
        character: { ...character, active: nextActive },
      }, nextActive ? `正在重新上架 ${character.name}…` : `正在下架 ${character.name}…`);
    } else if (action === "reset") {
      if (!confirm(`确定把 ${character.name} 的价格和全部能力恢复成系统默认？`)) return;
      runCharacterAction({ action: "resetCharacter", id: character.id }, `正在恢复 ${character.name}…`);
    } else if (action === "delete") {
      if (!confirm(`确定永久删除自建人物 ${character.name}？\n这个操作不能撤销，已拥有该人物的玩家会自动改回基础人物。`)) return;
      runCharacterAction({ action: "deleteCharacter", id: character.id }, `正在删除 ${character.name}…`);
    }
  });

  characterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const character = collectCharacterForm();
    if (!character) return;
    if (!character.name || !character.badge || !character.trait) {
      return setCharacterStatus("请填写人物名称、标志和人物介绍", true);
    }
    runCharacterAction({ action: "upsertCharacter", character }, `正在保存 ${character.name}…`);
  });

  deleteCharacterButton?.addEventListener("click", () => {
    if (!editingCharacter || editingCharacter.builtIn) return;
    if (!confirm(`确定永久删除 ${editingCharacter.name}？\n这个操作不能撤销。`)) return;
    runCharacterAction({ action: "deleteCharacter", id: editingCharacter.id }, `正在删除 ${editingCharacter.name}…`);
  });

  resetCharacterButton?.addEventListener("click", () => {
    if (!editingCharacter?.builtIn) return;
    if (!confirm(`确定把 ${editingCharacter.name} 恢复成系统默认属性？`)) return;
    runCharacterAction({ action: "resetCharacter", id: editingCharacter.id }, `正在恢复 ${editingCharacter.name}…`);
  });

  characterInputs.name?.addEventListener("input", () => {
    if (characterEditorTitle) characterEditorTitle.textContent = String(characterInputs.name.value || "创建新人物");
  });

  addRedeemCodeButton?.addEventListener("click", () => openRedeemCodeEditor());
  refreshRedeemCodesButton?.addEventListener("click", loadRedeemCodeDashboard);
  cancelRedeemCodeButton?.addEventListener("click", closeRedeemCodeEditor);

  adminRedeemCodeGrid?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-redeem-code-action]");
    const card = button?.closest("[data-redeem-code]");
    if (!button || !card) return;
    const code = redeemCodes.find((item) => item.code === card.dataset.redeemCode);
    if (!code) return;
    const action = button.dataset.redeemCodeAction;
    if (action === "edit") {
      openRedeemCodeEditor(code);
    } else if (action === "toggle") {
      const nextActive = code.active === false;
      runRedeemCodeAction({
        action: "upsertRedeemCode",
        code: { ...code, active: nextActive },
      }, nextActive ? `正在启用 ${code.code}…` : `正在停用 ${code.code}…`);
    } else if (action === "delete") {
      if (!confirm(`确定删除兑换码 ${code.code}？\n删除后玩家将无法继续兑换，已经领取的奖励不会被收回。`)) return;
      runRedeemCodeAction({ action: "deleteRedeemCode", codeValue: code.code }, `正在删除 ${code.code}…`);
    }
  });

  redeemCodeForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const code = collectRedeemCodeForm();
    if (!code) return;
    if (!/^[a-z0-9][a-z0-9_-]{2,23}$/.test(code.code)) {
      return setRedeemCodeStatus("兑换码只能使用 3–24 位英文字母、数字、横线或下划线", true);
    }
    if (!code.label) return setRedeemCodeStatus("请填写奖励名称", true);
    if (code.coins < 0 || code.coins > 10000) return setRedeemCodeStatus("金币数量必须是 0–10000", true);
    if (!code.coins && !code.characterId) return setRedeemCodeStatus("金币和人物至少要设置一种奖励", true);
    if (code.startsAt && code.expiresAt && code.expiresAt <= code.startsAt) {
      return setRedeemCodeStatus("截止时间必须晚于开始时间", true);
    }
    runRedeemCodeAction({ action: "upsertRedeemCode", code }, `正在保存 ${code.code}…`);
  });

  deleteRedeemCodeButton?.addEventListener("click", () => {
    if (!editingRedeemCode?.code) return;
    if (!confirm(`确定删除兑换码 ${editingRedeemCode.code}？\n已经领取的奖励不会被收回。`)) return;
    runRedeemCodeAction({ action: "deleteRedeemCode", codeValue: editingRedeemCode.code }, `正在删除 ${editingRedeemCode.code}…`);
  });

  for (const button of siteLockDurationButtons) {
    button.addEventListener("click", () => {
      const minutes = Math.max(1, Math.min(43200, Number(button.dataset.lockDuration) || 30));
      const selectedStart = parseDateTimeInput(siteLockStartInput?.value);
      const startsAt = selectedStart > Date.now() ? selectedStart : Date.now();
      if (siteLockEndInput) siteLockEndInput.value = formatDateTimeInput(startsAt + minutes * 60 * 1000);
      for (const item of siteLockDurationButtons) item.classList.toggle("is-selected", item === button);
      setSiteControlStatus(`已设置 ${button.textContent.trim()}，确认说明后即可开启`);
    });
  }

  siteLockStartInput?.addEventListener("change", () => {
    for (const item of siteLockDurationButtons) item.classList.remove("is-selected");
  });
  siteLockEndInput?.addEventListener("change", () => {
    for (const item of siteLockDurationButtons) item.classList.remove("is-selected");
  });

  siteLockForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const now = Date.now();
    const selectedStart = parseDateTimeInput(siteLockStartInput?.value);
    const startsAt = selectedStart || now;
    const endsAt = parseDateTimeInput(siteLockEndInput?.value);
    if (!endsAt || endsAt <= Math.max(now, startsAt)) {
      return setSiteControlStatus("结束时间必须晚于开始时间", true);
    }
    if (endsAt - startsAt > 30 * 24 * 60 * 60 * 1000) {
      return setSiteControlStatus("单次封锁最长只能设置 30 天", true);
    }
    const message = String(siteLockReasonInput?.value || "").trim() || "云端正在进行临时维护，请稍后回来。";
    const timing = startsAt > now + 5000
      ? `${formatDate(startsAt)} 开始，${formatDate(endsAt)} 结束`
      : `现在开始，${formatDate(endsAt)} 自动结束`;
    if (!confirm(`确认封锁玩家端？\n\n${timing}\n玩家将看到：“${message}”\n\n后台不会被封锁。`)) return;
    runSiteControlAction({
      action: "setSiteLock",
      startsAt,
      endsAt,
      message,
    }, startsAt > now + 5000 ? "正在预约网站封锁…" : "正在开启网站封锁…");
  });

  unlockSiteButton?.addEventListener("click", () => {
    const lock = siteControlData?.lock;
    if (!lock?.enabled) return setSiteControlStatus("玩家端当前没有封锁或预约");
    if (!confirm("确定立即解除当前封锁或取消预约？\n玩家端将在自动检查后恢复。")) return;
    runSiteControlAction({ action: "unlockSite" }, "正在解除网站封锁…");
  });
  refreshSiteControlButton?.addEventListener("click", loadSiteControlDashboard);

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    password = String(passwordInput.value || "");
    loginError.textContent = "";
    loginButton.disabled = true;
    loadDashboard();
  });

  logoutButton.addEventListener("click", () => {
    password = "";
    players = [];
    characters = [];
    redeemCodes = [];
    siteControlData = null;
    closeCharacterEditor();
    closeRedeemCodeEditor();
    setAdminTab("players");
    sessionStorage.removeItem("cloud-jumper-admin-session");
    passwordInput.value = "";
    dashboard.classList.add("is-hidden");
    loginScreen.classList.remove("is-hidden");
  });

  refreshButton.addEventListener("click", loadDashboard);
  searchInput.addEventListener("input", renderRows);

  exportButton.addEventListener("click", () => {
    const rows = [["排名", "玩家名字", "玩家编号", "关卡", "分数", "用时", "上线状态", "最后活动时间", "玩家是否公开", "更新时间"]];
    players.forEach((player, index) => {
      const presence = playerPresence(player);
      const lastActiveAt = Math.max(0, Number(player.lastActiveAt) || 0);
      rows.push([
        index + 1,
        player.name,
        player.playerId,
        player.level,
        player.score,
        player.time,
        presence.label,
        lastActiveAt ? new Date(lastActiveAt).toISOString() : "",
        player.showOnlineStatus ? "是" : "否",
        new Date(player.updatedAt).toISOString(),
      ]);
    });
    const csv = `\uFEFF${rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n")}`;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    link.download = `cloud-jumper-players-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
    setStatus("玩家名单已经导出");
  });

  clearButton.addEventListener("click", () => {
    const confirmation = prompt("危险操作：只清空排行榜，不重置玩家本地进度。\n请输入 CLEAR 确认：");
    if (confirmation !== "CLEAR") return setStatus("已取消清空排行榜", true);
    runAction({ action: "clearLeaderboard", confirm: "CLEAR" }, "正在清空排行榜…");
  });

  window.setInterval(() => {
    if (siteControlData && !dashboard.classList.contains("is-hidden")) renderSiteControlData();
  }, 1000);

  password = String(sessionStorage.getItem("cloud-jumper-admin-session") || "");
  if (password) loadDashboard();
  else passwordInput.focus();
})();
