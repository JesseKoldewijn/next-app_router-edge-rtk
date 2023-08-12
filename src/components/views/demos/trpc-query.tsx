"use client";

import { api } from "@/utils/api";
import ProjectListItem from "../projects/projectListItem";
import { Suspense } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

const TRPC_Demonstration = () => {
  const { data, isLoading } = api.projects.getAll.useQuery();

  return (
    <div className="mb-4 flex min-w-full flex-col gap-6">
      <Suspense>
        {isLoading == true ? (
          <div className="flex w-full justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            {data !== undefined ? (
              data.flatMap((project) => (
                <ProjectListItem
                  key={project.id}
                  title={project.title}
                  desc_short={project.desc_short}
                />
              ))
            ) : (
              <>No data</>
            )}
          </>
        )}
      </Suspense>
    </div>
  );
};

export default TRPC_Demonstration;
