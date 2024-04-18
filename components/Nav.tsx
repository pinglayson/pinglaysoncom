"use client";

import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { UserButton, SignedIn } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import GitHubIcon from "./shared/GitHubIcon";

export default function Nav() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="md:container px-4 pb-4">
      <div className="py-2 flex flex-row justify-between gap-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/favicon.png"
            alt="pinglayson logo"
            height={24}
            width={24}
          />
          <span className="hidden font-bold sm:inline-block ">pinglayson</span>
        </Link>
        <span className="flex gap-3">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.title}
              href={navLink.url}
              className={` ${
                pathname === navLink.url ? "text-foreground/90" : ""
              } transition-colors hover:text-foreground/90 text-foreground/60`}
            >
              {navLink.title}
            </Link>
          ))}
          <GitHubIcon className="flex items-center" />
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </span>
      </div>

      <Separator />
    </nav>
  );
}
