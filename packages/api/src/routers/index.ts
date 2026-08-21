import { protectedProcedure, publicProcedure } from "../index";
import type { RouterClient } from "@orpc/server";
import { z } from "zod";
import { createDb } from "@madeagent/db";
import { inquiries } from "@madeagent/db/schema";

export const inquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Service type is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  locale: z.string().optional().default("zh-CN"),
});

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return {
      status: "OK",
      timestamp: new Date().toISOString(),
      service: "MadeAgent Studio API",
      domain: "madeagent.cc",
    };
  }),

  submitInquiry: publicProcedure
    .input(inquirySchema)
    .handler(async ({ input }) => {
      const id = `inq_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      try {
        const db = createDb();
        await db.insert(inquiries).values({
          id,
          name: input.name,
          email: input.email,
          company: input.company || null,
          serviceType: input.serviceType,
          message: input.message,
          budget: input.budget || null,
          timeline: input.timeline || null,
          locale: input.locale || "zh-CN",
          createdAt: new Date(),
        });
      } catch (err) {
        console.warn("D1 DB insert fallback (e.g. preview mode without binding):", err);
      }

      return {
        success: true,
        inquiryId: id,
        message: "需求提交成功，我们将于 24 小时内与您联系！",
        contactEmail: "mymuse@foxmail.com",
      };
    }),

  privateData: protectedProcedure.handler(({ context }) => {
    return {
      message: "This is private",
      user: context.session?.user,
    };
  }),
};

export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
