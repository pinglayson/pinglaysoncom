import { Inter } from "next/font/google";
import "../styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ping Layson",
  description: "Ping Layson Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className="scroll-smoothfocus:scroll-auto"
      >
        <body className={`${inter.className} min-h-screen`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header>
              <Nav />
            </header>

            <main className="md:container px-4 min-h-[calc(100vh-110px)]">
              {children}
            </main>

            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
