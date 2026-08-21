# MadeAgent Studio | Custom Engineering Lab

<p align="center">
  <a href="./README.zh-CN.md"><b>🇨🇳 简体中文</b></a> | <a href="./README.md"><b>🇬🇧 English</b></a>
</p>

<p align="center">
  <b>Deep Engineering · Mission-Critical Custom Software Lab</b><br/>
  From Video Streaming to Air-Gapped Closed-Loop System Delivery
</p>

<p align="center">
  <a href="https://madeagent.cc"><img src="https://img.shields.io/badge/Website-madeagent.cc-c44d2d?style=flat-square" alt="Website"></a>
  <a href="https://api.madeagent.cc"><img src="https://img.shields.io/badge/API-api.madeagent.cc-2563eb?style=flat-square" alt="API"></a>
  <a href="mailto:mymuse@foxmail.com"><img src="https://img.shields.io/badge/Contact-mymuse%40foxmail.com-10b981?style=flat-square" alt="Email"></a>
  <img src="https://img.shields.io/badge/Cloudflare-Edge%20Workers-f38020?style=flat-square" alt="Cloudflare">
  <img src="https://img.shields.io/badge/Stack-Better--T--Stack-purple?style=flat-square" alt="Tech Stack">
</p>

---

## 🏛️ About MadeAgent Studio

**MadeAgent Studio** ([madeagent.cc](https://madeagent.cc)) is a specialized engineering lab focused on high-barrier, low-level, and isolated closed-loop custom software development. We bridge the gap between low-level systems (C/C++/WASM) and modern Edge cloud-native architectures.

### 🌟 Six Core Engineering Verticals

1. **📹 Video Surveillance & AI Analytics Platform**
   - Full compatibility with GB28181, RTSP, RTMP, and WebRTC protocols.
   - Synchronized streaming for 1,000+ IP cameras (latency <280ms), sliced video storage, PTZ control, and perimeter AI vision alerts.
2. **📄 Intelligent OCR & Document Parsing**
   - Complex table reconstruction and multi-format document extraction (99.2%+ accuracy).
   - 100% on-device lightweight ONNX inference with zero data egress, meeting defense and banking audit standards.
3. **🎞️ Realtime Media Processing Pipeline**
   - GPU hardware-accelerated transcoding (CUDA / Intel QSV) powered by FFmpeg/GStreamer.
   - WebAssembly client-side zero-overhead rendering and low-jitter realtime audio mixing (<15ms).
4. **🗺️ Air-Gapped GIS & Vector Map Engine**
   - Zero-dependency offline vector/raster map tile engine.
   - Sub-millisecond geographic calculation, 10M+ coordinate capacity, and 3D spatial heatmap visualization.
5. **🛡️ Air-Gapped Closed-Loop System Delivery**
   - Engineered for classified networks, defense facilities, and isolated factory lines.
   - Single-file self-contained packaging, embedded SQLite/D1 synchronization, and automated watchdog self-healing.
6. **💻 End-to-End Modern Fullstack Development**
   - Built on the Better-T-Stack with 100% end-to-end type safety and sub-5ms edge cold starts.

---

## 🛠️ Tech Stack Architecture (Better-T-Stack)

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Monorepo** | Turborepo + pnpm (v11) | Unified management of apps and packages |
| **Frontend (Web)** | React 19 + TanStack Router + Vite | Type-safe routing system with responsive SPA |
| **Design Language** | Warm Craftsman Design System | Takram engineering elegance & editorial typography (Newsreader + Plus Jakarta Sans) |
| **Internationalization** | Bilingual (zh-CN / en-US) | Instant client-side language switching |
| **Backend (Server)** | Hono + Cloudflare Workers | Lightweight edge runtime with sub-millisecond cold starts |
| **API / RPC** | oRPC + OpenAPI | Shared end-to-end type contracts |
| **Database** | Cloudflare D1 (SQLite) + Drizzle ORM | Global distributed edge database |
| **Deployment** | Cloudflare Workers Custom Domains | Automated DNS & SSL certificate provisioning |

---

## 📁 Repository Structure

```text
.
├── apps/
│   ├── web/                     # Frontend Application (TanStack Router + Vite + React 19)
│   │   ├── src/
│   │   │   ├── components/      # Header, Hero, ServicesMatrix, AirgapHighlight, InquiryForm, Footer
│   │   │   ├── lib/i18n.ts      # Bilingual Dictionary (zh / en)
│   │   │   └── routes/          # Type-safe Page Routes
│   │   └── wrangler.jsonc       # Cloudflare Workers Assets & Custom Domains (madeagent.cc)
│   └── server/                  # Backend API (Hono + Cloudflare Workers)
│       ├── src/index.ts         # Hono entry & oRPC handlers
│       └── wrangler.jsonc       # api.madeagent.cc & D1 Database binding
├── packages/
│   ├── api/                     # oRPC procedure definitions (submitInquiry, healthCheck)
│   ├── db/                      # Cloudflare D1 + Drizzle ORM Schema (inquiries table)
│   ├── auth/                    # Better-Auth framework
│   └── env/                     # Type-safe environment variable validation
├── design-demos/                # 3 Design Prototypes (huashu-design) & Screenshots
└── direction-approved.md        # Approved Design Gate File
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Local Development Server

```bash
pnpm run dev
```

* Frontend: `http://localhost:3001`
* Backend API: `http://localhost:3000`

### 3. Build & Type Check

```bash
# Build all packages
pnpm run build

# Type check
pnpm run check-types
```

---

## ☁️ Cloudflare Edge Deployment

The project is configured for Cloudflare Workers custom domains:

```bash
# Deploy Backend API (bound to api.madeagent.cc)
pnpm run deploy:server

# Deploy Frontend (bound to madeagent.cc / www.madeagent.cc)
pnpm run deploy:web
```

---

## 📬 Business Inquiry & Commissioning

* **Official Website**: [https://madeagent.cc](https://madeagent.cc) / [https://www.madeagent.cc](https://www.madeagent.cc)
* **Direct Inquiry Email**: [mymuse@foxmail.com](mailto:mymuse@foxmail.com)
* **Response SLA**: Technical spec & timeline evaluation within 24 hours (business days).
