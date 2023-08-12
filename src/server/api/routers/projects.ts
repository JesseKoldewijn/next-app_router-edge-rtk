// import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { db } from "@/server/db";
import { projects } from "@/server/schemas/projects";
import { cache } from "react";

export const projectsRouter = createTRPCRouter({
  getAll: publicProcedure.query(
    cache(async () => {
      const result = await db.select().from(projects);

      return result;
    }),
  ),
});
