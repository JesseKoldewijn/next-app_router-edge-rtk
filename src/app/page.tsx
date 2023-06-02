import Link from "next/link";

const Home = () => {
  const usedTech = [
    { name: "Next.js", link: "https://nextjs.org" },
    {
      name: "Drizzle-ORM",
      link: "https://orm.drizzle.team",
    },
    {
      name: "PlanetScaleDB",
      link: "https://planetscale.com",
    },
    {
      name: "TailwindCSS",
      link: "https://tailwindcss.com",
    },
    {
      name: "Shadcn-UI",
      link: "https://ui.shadcn.com",
    },
    {
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "React-Motion (Custom)",
      link: "https://github.com/GlitchTech-Developments/react-motion",
    },
  ];

  return (
    <div className="mx-2 flex min-h-screen flex-col items-center justify-center gap-6">
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
            className="flex h-12 min-w-[10rem] flex-1 items-center justify-center rounded-xl bg-purple-800 font-semibold shadow-sm shadow-gray-900 hover:cursor-pointer"
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
    </div>
  );
};
export default Home;
