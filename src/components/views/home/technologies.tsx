import { getAllTechnologies } from "@/server/dbHelpers/technologies";
import React from "react";
import LinkButton from "@/components/ui/link-button";

const Technologies = async () => {
  const allTechnologies = await getAllTechnologies();

  return (
    <div className="text-md flex max-w-lg flex-wrap gap-3 text-center font-light text-gray-300">
      {allTechnologies.flatMap((technology, idx) => (
        <React.Fragment key={idx + 1}>
          <LinkButton
            name={technology.name}
            href={technology.link}
            target="_blank"
            className={
              "flex h-12 min-w-[10rem] flex-1 items-center justify-center rounded-xl bg-brandMain font-semibold shadow-sm shadow-gray-900 hover:cursor-pointer hover:shadow-xl"
            }
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Technologies;
