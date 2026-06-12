import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshal Ram R V | Software Engineer",
  description:
    "Portfolio of Harshal Ram R V, a software engineer building full-stack and Gen-AI systems.",
  keywords: [
    "Harshal Ram R V",
    "Software Engineer",
    "Full-Stack Engineer",
    "Gen-AI",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Harshal Ram R V" }],
  creator: "Harshal Ram R V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.harshal-ram.me",
    title: "Harshal Ram R V | Software Engineer",
    description:
      "Full-stack and Gen-AI portfolio of Harshal Ram R V.",
    siteName: "Harshal Ram R V",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshal Ram R V | Software Engineer",
    description:
      "Full-stack and Gen-AI portfolio of Harshal Ram R V.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
