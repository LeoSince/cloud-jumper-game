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
  const stats = {
    totalPlayers: document.getElementById("statTotal"),
    challengedPlayers: document.getElementById("statChallenged"),
    passedPlayers: document.getElementById("statPassed"),
    pendingResets: document.getElementById("statResets"),
    issuedGifts: document.getElementById("statGifts"),
  };

  let password = "";
  let players = [];
  let busy = false;

  function setBusy(value) {
    busy = Boolean(value);
    for (const button of [loginButton, refreshButton, exportButton, clearButton]) {
      if (button) button.disabled = busy;
    }
    dashboard?.setAttribute("aria-busy", String(busy));
  }

  function setStatus(message, error = false) {
    adminStatus.textContent = message;
    adminStatus.classList.toggle("is-error", error);
  }

  function formatDate(value) {
    const date = new Date(Number(value) || 0);
    if (!Number.isFinite(date.getTime()) || date.getTime() <= 0) return "—";
    return new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(date);
  }

  function resultText(player) {
    const coins = ` · 金币 ${Math.max(0, Number(player.coins) || 0)}${player.showCoins ? "（公开）" : "（私密）"}`;
    if (Number(player.score) === 0 && Number(player.time) === 0) return `尚未挑战${coins}`;
    return `第 ${player.level} 关 · ${player.score} 分${Number(player.time) > 0 ? ` · ${Number(player.time).toFixed(1)} 秒` : ""}${coins}`;
  }

  async function requestAdmin(method = "GET", body = null, endpoint = "./api/admin") {
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
      const error = new Error(data.error === "server_error" ? "后台暂时忙碌，请稍后重试" : (data.error || "后台操作失败"));
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
      row.append(rankCell, playerCell, resultCell, updatedCell, actionCell);
      playerRows.append(row);
    });
  }

  async function loadDashboard() {
    if (busy) return;
    setBusy(true);
    setStatus("正在读取 Cloudflare KV…");
    try {
      const data = await requestAdmin();
      render(data);
      setStatus(`已载入 ${data.entries?.length || 0} 位玩家`);
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
      await requestAdmin("POST", { phase: "account", playerId: player.playerId, amount }, "./api/admin-coin-repair");
      setStatus(`账号余额已校正，正在更新 ${player.name} 的排行榜…`);
      await requestAdmin("POST", { phase: "ranking", playerId: player.playerId, amount }, "./api/admin-coin-repair");
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
    sessionStorage.removeItem("cloud-jumper-admin-session");
    passwordInput.value = "";
    dashboard.classList.add("is-hidden");
    loginScreen.classList.remove("is-hidden");
  });

  refreshButton.addEventListener("click", loadDashboard);
  searchInput.addEventListener("input", renderRows);

  exportButton.addEventListener("click", () => {
    const rows = [["排名", "玩家名字", "玩家编号", "关卡", "分数", "用时", "更新时间"]];
    players.forEach((player, index) => rows.push([index + 1, player.name, player.playerId, player.level, player.score, player.time, new Date(player.updatedAt).toISOString()]));
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

  password = String(sessionStorage.getItem("cloud-jumper-admin-session") || "");
  if (password) loadDashboard();
  else passwordInput.focus();
})();
