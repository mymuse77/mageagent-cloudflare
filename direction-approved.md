# 设计方向确认（Gate 文件）

- **确认时间**：2026-08-21 14:57:46
- **用户选择原话**：`方向三`
- **选定方向**：方向三 · 出版级温暖工匠与工业信赖风格（Warm Craftsman Editorial）
- **设计语言**：Takram 科技诗意 × Anthropic 出版级温暖质感（Newsreader 衬线大字、Plus Jakarta Sans 正文、奶油纸暖底 `#F8F6F0`、赤陶赭石 `#C44D2D`、严谨离线闭环叙事）
- **原型文件**：[direction-3-craftsman-warm.html](file:///d:/AI/Test/gemini/madeagent/design-demos/direction-3-craftsman-warm.html)
- **视觉快照**：[direction-3.png](file:///d:/AI/Test/gemini/madeagent/design-demos/direction-3.png)

---

## 主干落地目标
1. 采用 **Better-T-Stack** 构建 Monorepo 全栈工程：
   - **Frontend**: TanStack Router + Vite + React + Vanilla CSS (Warm Craftsman Design System) + 多语言 i18n
   - **Backend**: Hono + Cloudflare Workers
   - **API / RPC**: oRPC 端到端全类型安全
   - **Database**: Cloudflare D1 + Drizzle ORM
   - **Auth / Leads**: 咨询接单表单持久化 + Better-Auth 基础框架
   - **Tooling**: Bun + Turborepo + Oxlint + Lefthook
2. 绑定自定义域名 `madeagent.cc` 并部署至 Cloudflare 边缘计算平台。
