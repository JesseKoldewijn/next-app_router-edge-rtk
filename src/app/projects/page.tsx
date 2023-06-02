import { type tProject } from "@/server/db";
import { getAllProjects } from "@/server/dbHelpers/projects";
import Link from "next/link";

const ProjectsPage = async () => {
  const projectsData: tProject[] = await getAllProjects();

  return (
    <div className="mx-2 flex min-h-screen flex-col items-center justify-center gap-6 text-gray-200">
      <h1 className="mx-auto text-xl text-gray-200 lg:text-2xl">Projects</h1>
      {projectsData.length > 0 ? (
        <div className="text-300 flex max-w-md flex-wrap gap-4">
          {projectsData.flatMap((project: tProject) => (
            <div
              key={project.id}
              className="flex min-h-[7rem] min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl bg-purple-800 px-6 py-3 font-semibold shadow-sm shadow-gray-900"
            >
              <h2 className="mt-2">{project.title}</h2>
              <p className="text-center">{project.desc_short}</p>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
      <Link href={"/"}>Go back</Link>
    </div>
  );
};
export default ProjectsPage;
