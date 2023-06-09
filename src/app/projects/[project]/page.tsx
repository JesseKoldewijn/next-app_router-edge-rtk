import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/server/dbHelpers/projects";
import { type tProject } from "@/server/schemas/projects";

const ProjectsPage = async ({ params }: { params: { project: string } }) => {
  const projectsData: tProject | undefined = await getProjectBySlug(
    params.project
  );

  if (projectsData == undefined) {
    notFound();
    return false;
  }

  return (
    <div className="mx-2 flex min-h-screen flex-col items-center justify-center gap-6 text-gray-200">
      <h1 className="mx-auto text-xl text-gray-200 lg:text-2xl">Project</h1>
      {projectsData ? (
        <div className="text-300 flex max-w-md flex-wrap gap-4">
          <div className="flex min-h-[7rem] min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl bg-purple-800 px-6 py-3 font-semibold shadow-sm shadow-gray-900">
            <h2 className="mt-2">{projectsData.title}</h2>
            <p className="text-center">{projectsData.desc_short}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Link href={"/"}>Go back</Link>
    </div>
  );
};
export default ProjectsPage;
