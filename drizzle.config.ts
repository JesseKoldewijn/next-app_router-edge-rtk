/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { Config } from "drizzle-kit";

import * as dotenv from "dotenv";
dotenv.config();

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/server/schemas/*",
  out: "./.drizzle",
  driver: "mysql2",
  dbCredentials: {
    connectionString: String(process.env.DATABASE_URL),
  },
} satisfies Config;
