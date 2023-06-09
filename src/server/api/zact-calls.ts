/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use server";

import { db } from "../db";
import { projects, type tProject } from "../schemas/projects";

export const getProjectNames = async () => {
  const data = (await db.select().from(projects)) as tProject[];
  const cleanedData = data.map((project) => {
    return {
      id: "None of your business!",
      title: project.title,
      desc_short: project.desc_short,
      desc_long: project.desc_long,
    };
  });

  return cleanedData;
};
