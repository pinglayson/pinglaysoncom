import { linkedin, location, github } from "@/constants";
import {
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import GitHubIcon from "./shared/GitHubIcon";

export default function Footer() {
  return (
    <footer className="md:container px-4 mt-4">
      <Separator />
      <div className="flex justify-between">
        <a href={linkedin} target="_blank">
          <LinkedInLogoIcon className="size-5 my-2" />
        </a>

        <span>
          <GlobeIcon className="size-5 inline-block m-2" />
          <small>{location}</small>
        </span>

        <GitHubIcon className="my-2" />
      </div>
    </footer>
  );
}
