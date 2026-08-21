# MadeAgent Studio | 智造智能体工作室

<p align="center">
  <a href="./README.zh-CN.md"><b>🇨🇳 简体中文</b></a> | <a href="./README.md"><b>🇬🇧 English</b></a>
</p>

<p align="center">
  <b>深度工程落地 · 高壁垒定制系统研发工作室</b><br/>
  从音视频流媒体到纯离线网络闭环系统交付
</p>

<p align="center">
  <a href="https://madeagent.cc"><img src="https://img.shields.io/badge/Website-madeagent.cc-c44d2d?style=flat-square" alt="Website"></a>
  <a href="https://api.madeagent.cc"><img src="https://img.shields.io/badge/API-api.madeagent.cc-2563eb?style=flat-square" alt="API"></a>
  <a href="mailto:mymuse@foxmail.com"><img src="https://img.shields.io/badge/Contact-mymuse%40foxmail.com-10b981?style=flat-square" alt="Email"></a>
  <img src="https://img.shields.io/badge/Cloudflare-Edge%20Workers-f38020?style=flat-square" alt="Cloudflare">
  <img src="https://img.shields.io/badge/Stack-Better--T--Stack-purple?style=flat-square" alt="Tech Stack">
</p>

---

## 🏛️ 工作室定位与核心专长

**MadeAgent Studio**（[madeagent.cc](https://madeagent.cc)）专注于高技术壁垒、底层与边缘闭环工程的资深定制研发，具备从底层 C/C++/WebAssembly 到现代边缘全栈云原生端到端研发能力。

### 🌟 六大核心研发矩阵

1. **📹 视频监控平台与智能分析**
   - 全面兼容国标 GB28181、RTSP、RTMP 与 WebRTC 协议；
   - 支持上千路视频流毫秒级并发分发（延迟 <280ms）、录像切片存储、云台控制及 AI 边缘智能预警。
2. **📄 OCR 智能文档结构化解析**
   - 复杂表格还原、混排合同/发票要素精准抽取（准确率 99.2%+）；
   - 支持端侧轻量化模型纯离线推理，0 数据出域，满足军工与金融保密审计要求。
3. **🎞️ 音视频实时流媒体处理流水线**
   - 基于 FFmpeg / GStreamer 与 GPU 硬件加速（CUDA / Intel QSV）；
   - WebAssembly 浏览器端低开销流畅渲染，低抖动实时混音混流。
4. **🗺️ 私有化离线 GIS 与空间地图**
   - 100% 无外网依赖的高精度离线矢量/栅格地图切片服务；
   - 毫秒级空间坐标计算、千万级点位承载、离线轨迹平滑回放与三维空间热力图。
5. **🛡️ 纯离线网络闭环系统落地**
   - 针对军工、保密专网、封闭生产车间量身打造；
   - 单文件全量自包含打包、嵌入式 SQLite/D1 数据同步引擎、内置看门狗故障自愈。
6. **💻 端到端现代全栈软件定制**
   - 基于 Better-T-Stack 全栈体系，端到端 100% 全类型安全，毫秒级边缘冷启动。

---

## 🛠️ 技术栈架构 (Better-T-Stack)

| 模块 / 层级 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **Monorepo** | Turborepo + pnpm (v11) | 统一管理前后端与公共共享包 |
| **前端应用 (Web)** | React 19 + TanStack Router + Vite | 全类型安全路由系统，单页极速响应 |
| **视觉设计** | Warm Craftsman Design System | Takram 科技诗意与出版级温润质感 (Newsreader + Plus Jakarta Sans) |
| **多语言 (i18n)** | 中文 (zh-CN) / English (en-US) | 客户端无缝即时切换 |
| **后端服务 (Server)** | Hono + Cloudflare Workers | 超轻量边缘运行时，亚毫秒级冷启动 |
| **API / RPC** | oRPC + OpenAPI | 前后端强类型契约共享，自动生成文档 |
| **数据库** | Cloudflare D1 (SQLite) + Drizzle ORM | 全球分布式边缘数据库 |
| **部署与域名** | Cloudflare Workers Custom Domains | 全自动 DNS 解析与边缘 SSL 证书签发 |

---

## 📁 目录结构

```text
.
├── apps/
│   ├── web/                     # 前端应用 (TanStack Router + Vite + React 19)
│   │   ├── src/
│   │   │   ├── components/      # Header, Hero, ServicesMatrix, AirgapHighlight, InquiryForm, Footer
│   │   │   ├── lib/i18n.ts      # 中英双语完整字典
│   │   │   └── routes/          # 全类型安全页面路由
│   │   └── wrangler.jsonc       # Cloudflare 静态资源与自定义域名配置
│   └── server/                  # 后端 API 服务 (Hono + Cloudflare Workers)
│       ├── src/index.ts         # Hono 入口与 RPC 路由分发
│       └── wrangler.jsonc       # 绑定 api.madeagent.cc 与 D1 数据库
├── packages/
│   ├── api/                     # oRPC 路由契约定义 (submitInquiry, healthCheck 等)
│   ├── db/                      # Cloudflare D1 + Drizzle ORM Schema (inquiries 表)
│   ├── auth/                    # Better-Auth 认证框架
│   └── env/                     # 类型安全环境变量校验
├── design-demos/                # huashu-design 流程 3 个方向高保真原型与快照
└── direction-approved.md        # 设计选定 Gate 文件
```

---

## 🚀 本地开发与运行

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动本地开发服务

```bash
pnpm run dev
```

* 前端开发预览：`http://localhost:3001`
* 后端 API 接口：`http://localhost:3000`

### 3. 项目构建与类型检查

```bash
# 全量构建
pnpm run build

# 类型检查
pnpm run check-types
```

---

## ☁️ Cloudflare 边缘部署指南

项目已配置 Cloudflare Workers 全托管部署：

```bash
# 部署后端 API (自动绑定 api.madeagent.cc)
pnpm run deploy:server

# 部署前端主站 (自动绑定 madeagent.cc / www.madeagent.cc)
pnpm run deploy:web
```

---

## 📬 商务接单与合作咨询

* **官方网站**：[https://madeagent.cc](https://madeagent.cc) / [https://www.madeagent.cc](https://www.madeagent.cc)
* **商务对接邮箱**：[mymuse@foxmail.com](mailto:mymuse@foxmail.com)
* **响应时效**：工作日 24 小时内完成技术方案与工期评估反馈。
