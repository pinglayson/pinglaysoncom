import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Nav() {
  return (
    <nav className="md:container px-4">
      <div className="py-4 flex flex-row justify-between ">
        <Link href="/">
          <Image
            src="/pinglayson.svg"
            alt="pinglayson logo"
            height={20}
            width={130}
          />
        </Link>
        <Link href="/tech-timeline">TechTimeline</Link>
      </div>

      <Separator />
    </nav>
  );
}
