import { type Project } from "@/server/schemas/projects";
import React from "react";

interface ProjectListItemProps {
  title: Project["title"];
  desc_short?: Project["desc_short"];
  desc_long?: Project["desc_short"];
  className?: string;
}

const ProjectListItem = ({
  title,
  desc_short,
  desc_long,
  className,
}: ProjectListItemProps) => {
  if (desc_short === undefined && desc_long === undefined) return <></>;

  return (
    <div
      className={`text-300 flex max-w-md flex-wrap gap-4${
        className ? " " + className : ""
      }`}
    >
      <div className="flex min-h-[7rem] min-w-[15rem] flex-1 flex-col items-center gap-3 rounded-xl bg-brandMain px-6 py-4 font-semibold shadow-sm shadow-gray-900">
        <h2>{title}</h2>
        <p className="text-center font-light">
          {desc_short ? desc_short : desc_long ?? ""}
        </p>
      </div>
    </div>
  );
};

export default ProjectListItem;
