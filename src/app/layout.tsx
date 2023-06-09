import "@/styles/globals.css";
import { type Metadata } from "next/types";

export const metadata: Metadata = {
  title: {
    default: "",
    template: "%s | EdgeReady Next.js by JKinsight",
  },
  description:
    "On this page you'll find a description of multiple projects that I've build over the past two to three years.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
