/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { db } from "../db";
import { projects, type tProject } from "../schemas/projects";

export const getProjectNames = async () => {
  const data = (await db.select().from(projects)) as tProject[];
  const cleanedData = data.map((project) => {
    return {
      ...project,
    };
  });

  return cleanedData;
};
