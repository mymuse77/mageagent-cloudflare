import * as schema from "./schema";
import { drizzle } from "drizzle-orm/d1";
import { env } from "@madeagent/env/server";

export * from "./schema";

export function createDb() {
	return drizzle(env.DB, { schema });
}
