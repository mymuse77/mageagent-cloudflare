import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const inquiries = sqliteTable("inquiries", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  serviceType: text("service_type").notNull(), // video_surveillance, ocr_doc, audio_video, offline_gis, air_gapped, custom_dev
  message: text("message").notNull(),
  budget: text("budget"),
  timeline: text("timeline"),
  locale: text("locale").default("zh-CN"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;
