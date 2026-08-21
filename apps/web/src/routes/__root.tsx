import {
  HeadContent,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { orpc } from "@/utils/orpc";
import "../index.css";

export interface RouterAppContext {
  orpc: typeof orpc;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "MadeAgent Studio | 智造智能体工作室 · 关键技术定制研发",
      },
      {
        name: "description",
        content:
          "MadeAgent 工作室（madeagent.cc）专注于高壁垒关键技术定制研发：视频监控平台、OCR与智能文档识别、音视频实时处理、离线地图与纯离线网络闭环系统交付。联系邮箱：mymuse@foxmail.com。",
      },
    ],
  }),
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Outlet />
      </div>
    </>
  );
}
