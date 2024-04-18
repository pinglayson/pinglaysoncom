import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function page() {
  return (
    <div className="flex flex-wrap gap-4">
      {projects.map((project) => (
        <Link key={project.title} href={project.url} target="_blank">
          <Card className="md:w-[322px] sm:w-[400px] h-[350px]">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                // className="rounded-full mx-auto py-2"
                height={400}
                width={400}
                src={project.img as string}
                alt={project.title}
              />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
