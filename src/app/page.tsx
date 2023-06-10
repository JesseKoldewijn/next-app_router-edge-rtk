import { usedTech } from "@/data/usedTech";
import Link from "next/link";
import { type Metadata } from "next/types";

export const metadata: Metadata = {
  title: "EdgeReady Next.js by JKinsight",
  description:
    "On this website you'll find a description of the tech I currently use most of the times, projects I've build and more tech related stuff!",
};

const Home = () => {
  return (
    <>
      <h1 className="mx-auto text-xl text-gray-200 lg:text-2xl">
        Welcome to Next.js <strong>EdgeReady</strong>
      </h1>
      <h2 className="max-w-lg text-center text-lg text-gray-300">
        {
          "In this project I display how to implement a fully edge-ready FullStack application using the following tech:"
        }
      </h2>
      <div className="text-md flex max-w-lg flex-wrap gap-3 text-center font-light text-gray-300">
        {usedTech.flatMap((technology, idx) => (
          <Link
            href={technology.link}
            target="_blank"
            key={idx}
            className="flex h-12 min-w-[10rem] flex-1 items-center justify-center rounded-xl bg-purple-800 font-semibold shadow-sm shadow-gray-900 hover:cursor-pointer hover:shadow-xl"
          >
            {technology.name}
          </Link>
        ))}
      </div>
      <div className="text-md mt-2 flex max-w-lg flex-wrap gap-3 border-t-2 border-t-purple-900 pt-5 text-center font-light text-gray-300">
        <h3 className="mx-auto text-xl text-gray-200 lg:text-2xl">
          EdgeReady DB flow example
        </h3>
        <p className="max-w-lg text-center text-lg text-gray-300">
          {
            "In this example I've used PlanetScaleDB as the Database, Planetscale-db (the package) to connect to the Database,\
             Drizzle-ORM to interface the contents of this DB and server-components to display this content."
          }
        </p>
        <Link
          href="/projects"
          className="flex h-12 min-w-[10rem] flex-1 items-center justify-center rounded-xl bg-purple-800 font-semibold shadow-sm shadow-gray-900 hover:cursor-pointer"
        >
          Check the example!
        </Link>
      </div>
    </>
  );
};
export default Home;
