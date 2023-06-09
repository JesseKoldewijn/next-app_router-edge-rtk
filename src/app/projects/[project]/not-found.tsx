/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import { getProjectNames } from "@/server/api/zact-calls";
import { type tProject } from "@/server/schemas/projects";
import { slugify } from "@/utils/string-slug";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<tProject[]>();

  useEffect(() => {
    const getData = async () => {
      const data = await getProjectNames();
      setData(data);
    };
    void getData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 text-gray-200">
      {data !== null ? (
        <>
          <h1 className="mx-auto text-xl text-gray-200 lg:text-2xl">
            Project not found
          </h1>
          <p>Did you try to go to any of these projects?</p>
          <div className="text-300 mt-4 flex max-w-md flex-wrap gap-4">
            {data?.flatMap((proj: tProject) => {
              return (
                <Link
                  key={slugify(String(proj.title))}
                  href={slugify(String(proj.title))}
                  className="flex min-h-[7rem] min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl bg-purple-800 px-6 py-3 font-semibold shadow-sm shadow-gray-900 hover:shadow-xl"
                >
                  <h2 className="mt-2">{proj.title}</h2>
                  <p className="text-center">{proj.desc_short}</p>
                </Link>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h1 className="mx-auto text-xl text-gray-200 lg:text-2xl">
            Project not found
          </h1>
          <Link href={"/"}>Go back</Link>
        </>
      )}
    </div>
  );
};
export default ProjectsPage;
