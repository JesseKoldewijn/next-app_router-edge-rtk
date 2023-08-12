import "@/styles/globals.css";

import { type Metadata } from "next/types";
import { headers } from "next/headers";

import { MetatagsGlobals } from "@/layout/meta";
import { TRPCReactProvider } from "@/providers/tRPC_Providers";

export const metadata: Metadata = {
  title: {
    default: "",
    template: "%s | EdgeReady Next.js by JKinsight",
  },
  description:
    "On this page you'll find a description of multiple projects that I've build over the past two to three years.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const headersList = headers();

  return (
    <html lang="en">
      <head>
        <MetatagsGlobals />
      </head>
      <body>
        <TRPCReactProvider headers={headersList}>
          <main>
            <div className="mx-4 flex min-h-screen flex-col items-center justify-center gap-6 py-6 text-gray-300">
              {children}
            </div>
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
};
export default RootLayout;
