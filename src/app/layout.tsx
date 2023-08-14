import "@/styles/globals.css";

import { type Metadata } from "next/types";
import { headers } from "next/headers";

import { MetatagsGlobals } from "@/layout/meta";
import { TRPCReactProvider } from "@/providers/tRPC_Providers";
import PWA_Provider from "@/providers/PWA_Provider";
import { env } from "@/env.mjs";

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
  const isPWAEnabled = env.NODE_ENV === "production";

  return (
    <html lang="en">
      <head>
        <MetatagsGlobals />
      </head>
      <body>
        <PWA_Provider isEnabled={isPWAEnabled}>
          <TRPCReactProvider headers={headersList}>
            <main>
              <div className="mx-4 flex min-h-screen flex-col items-center justify-center gap-6 py-6 text-gray-300">
                {children}
              </div>
            </main>
          </TRPCReactProvider>{" "}
        </PWA_Provider>
      </body>
    </html>
  );
};
export default RootLayout;
