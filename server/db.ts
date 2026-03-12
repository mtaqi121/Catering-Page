import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// in production we require a database URL; during development we tolerate missing
// DATABASE_URL so the app can start without a live Postgres instance.
let pool: pg.Pool | undefined;
if (process.env.DATABASE_URL) {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
} else if (process.env.NODE_ENV === "development") {
  console.warn("DATABASE_URL not set; running in development without a database.");
} else {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

export const db = pool ? drizzle(pool, { schema }) : ({} as any);
