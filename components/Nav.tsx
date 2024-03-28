import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { UserButton, SignedIn } from "@clerk/nextjs";

export default function Nav() {
  return (
    <nav className="md:container px-4">
      <div className="py-2 flex flex-row justify-between ">
        <Link href="/">
          <Image
            src="/pinglayson.svg"
            alt="pinglayson logo"
            height={32}
            width={208}
          />
        </Link>
        <span className="flex gap-2">
          <Link href="/tech-timeline" className="text-2xl text-center">
            TechTimeline
          </Link>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </span>
      </div>

      <Separator />
    </nav>
  );
}
