import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import {
  GlobeIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { location, linkedin, github } from "@/constants";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

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

          <main className="md:container px-4 min-h-[calc(100vh-92px)]">
            {children}
          </main>

          <footer className="md:container px-4">
            <Separator />
            <div className="flex justify-between">
              <a href={linkedin} target="_blank">
                <LinkedInLogoIcon className="size-5 my-2" />
              </a>

              <span>
                <GlobeIcon className="size-5 inline-block m-2" />
                <small>{location}</small>
              </span>

              <a href={github} target="_blank">
                <GitHubLogoIcon className="size-5 my-2" />
              </a>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
