import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import KeyboardShortcuts from "@/components/KeyboardShortcuts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doinglivingtest.github.io"),
  title: {
    default: "Alejandro Tellez — Senior QA Engineer",
    template: "%s — Alejandro Tellez",
  },
  description:
    "Senior QA Engineer & SDET based in Barcelona, Spain. Building reliable test automation for Web3, fintech, and enterprise products.",
  openGraph: {
    title: "Alejandro Tellez — Senior QA Engineer",
    description:
      "Senior QA Engineer & SDET based in Barcelona, Spain. Building reliable test automation for Web3, fintech, and enterprise products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body suppressHydrationWarning className="font-sans antialiased">
        <KeyboardShortcuts />
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
