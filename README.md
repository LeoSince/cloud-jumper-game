# 云朵跳跳王 v36

这是 Cloudflare Pages 版本的《云朵跳跳王》完整源代码。

## Cloudflare Pages 部署

在 Cloudflare **Workers 和 Pages → 创建应用程序 → Pages → 连接到 Git** 中选择：

- GitHub 仓库：`LeoSince/cloud-jumper-game`
- 生产分支：`main`
- 构建命令：留空
- 构建输出目录：`.`
- 根目录：仓库根目录

部署后，在 Pages 项目的设置中绑定：

- KV namespace：变量名必须是 `LEADERBOARD`
- 可选 Durable Object：变量名 `BATTLE_ROOMS`（启用好友实时对战时需要）
- 可选环境变量：`ADMIN_PASSWORD`（后台地址为 `/admin`；未设置时默认密码为 `2026`）

部署后检查：

- `/api/health`
- `/api/leaderboard`
- `/admin`

网站依赖根目录的 `_worker.js`，不要删除或移动它。
