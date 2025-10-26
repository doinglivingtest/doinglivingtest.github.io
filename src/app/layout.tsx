import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";

export const metadata: Metadata = {
  title: "Alejandro Tellez",
  description: "Software engineer based in Barcelona, Spain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <KeyboardShortcuts />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
