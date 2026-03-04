import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Harshal Ram R V | Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Harshal Ram R V - A passionate Full-Stack Developer and AI Engineer building intelligent applications that solve real-world problems.",
  keywords: [
    "Harshal Ram R V",
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Harshal Ram R V" }],
  creator: "Harshal Ram R V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshalramrv.com",
    title: "Harshal Ram R V | Full-Stack Developer & AI Engineer",
    description:
      "Portfolio of Harshal Ram R V - A passionate Full-Stack Developer and AI Engineer building intelligent applications.",
    siteName: "Harshal Ram R V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshal Ram R V | Full-Stack Developer & AI Engineer",
    description:
      "Portfolio of Harshal Ram R V - A passionate Full-Stack Developer and AI Engineer building intelligent applications.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
