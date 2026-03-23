import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEAMUN I Conference — Mid- & High School MUN",
  description:
    "SEAMUN I is a mid- and high school Model UN conference (grades 7–12), January 23–24, 2027. Policies with a Purpose.",
  icons: { icon: "/assets/seamun-logo.png" },
};

import { Providers } from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0B2A45" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Display:wght@600;700&family=Inter+Tight:ital,wght@0,400;0,500;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
