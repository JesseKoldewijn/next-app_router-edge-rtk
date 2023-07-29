import LinkButton from "@/components/ui/link-button";
import Technologies from "@/components/views/home/technologies";
import { type Metadata } from "next/types";

export const runtime = "edge";
export const revalidate = 60 * 60 * 24; // 24 hours

export const metadata: Metadata = {
  title: "EdgeReady Next.js by JKinsight",
  description:
    "On this website you'll find a description of the tech I currently use most of the times, projects I've build and more tech related stuff!",
};

const Home = () => {
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
          "In this project I show you how to build a fully edge-ready FullStack application using the following tech:"
        }
      </h2>
      <Technologies />
      <div className="text-md mt-2 flex max-w-lg flex-wrap gap-3 border-t-2 border-t-brandMain pt-5 text-center font-light text-gray-300">
        <h3 className="mx-auto text-xl text-gray-200 lg:text-2xl">
          EdgeReady DB flow example
        </h3>
        <p className="max-w-lg text-center text-lg text-gray-300">
          {
            "In this example I've used PlanetScaleDB as the Database, Planetscale-db (the package) to connect to the Database,\
             Drizzle-ORM to interface the contents of this DB and server-components to display this content."
          }
        </p>
        <LinkButton
          name="Check the example!"
          href="/projects"
          className="flex h-12 min-w-[10rem] flex-1 items-center justify-center rounded-xl bg-brandMain font-semibold shadow-sm shadow-gray-900 hover:cursor-pointer"
        />
      </div>
    </>
  );
};
export default Home;
