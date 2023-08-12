import React from "react";
import LinkButton from "@/components/ui/link-button";
import TRPC_Demonstration from "@/components/views/demos/trpc-query";

export const revalidate = 86400;

export const metadata = {
  title: "tRPC Demo",
  description: "tRPC Demo - A demonstration of tRPC in the App Router",
};

const tRPC_Demo = () => {
  return (
    <>
      <h1 className="mx-auto text-xl text-gray-200 lg:text-2xl">
        <strong className="ml-3 rounded-xl border-x-2 px-2 py-1">tRPC</strong>
        {" in the App Router"}
      </h1>
      <h2 className="max-w-lg text-center text-lg text-gray-300">
        Curious about how to implement tRPC? Well... let me show you how I did
        it!
      </h2>
      <div className="text-md mt-2 flex max-w-lg flex-col flex-wrap gap-3 border-t-2 border-t-brandMain pt-5 text-center font-light text-gray-300">
        <TRPC_Demonstration />
        <LinkButton
          name="Go back"
          href={"/"}
          className="flex h-12 min-w-[10rem] items-center justify-center rounded-xl bg-brandMain font-semibold shadow-sm shadow-gray-900 hover:cursor-pointer"
        />
      </div>
    </>
  );
};
export default tRPC_Demo;
