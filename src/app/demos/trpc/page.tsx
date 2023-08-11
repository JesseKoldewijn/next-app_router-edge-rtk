import React from "react";
import LinkButton from "@/components/ui/link-button";

export const runtime = "edge";
export const revalidate = 86400;

const tRPC_Demo = () => {
  return (
    <>
      <h1 className="mx-auto text-xl text-gray-200 lg:text-2xl">
        Welcome to Next.js
        <strong className="ml-3 rounded-xl border-x-2 px-2 py-1">
          EdgeReady
        </strong>
      </h1>
      <h2 className="max-w-lg text-center text-lg text-gray-300">
        {
          "Curious about how to implement tRPC? Well... let me show you how I did it!"
        }
      </h2>
      <div className="text-md mt-2 flex max-w-lg flex-wrap gap-3 border-t-2 border-t-brandMain pt-5 text-center font-light text-gray-300">
        <h3 className="mx-auto text-xl text-gray-200 lg:text-2xl">
          tRPC App-Router example
        </h3>
        <p className="max-w-lg text-center text-lg text-gray-300">{"WIP"}</p>
        <LinkButton
          name="Go back"
          href="/demos"
          className="flex h-12 min-w-[10rem] flex-1 items-center justify-center rounded-xl bg-brandMain font-semibold shadow-sm shadow-gray-900 hover:cursor-pointer"
        />
      </div>
    </>
  );
};
export default tRPC_Demo;