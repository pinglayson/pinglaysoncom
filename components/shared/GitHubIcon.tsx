import { github } from "@/constants";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface Props {
  className?: String;
}

export default function GitHubIcon({ className }: Props) {
  return (
    <a
      className="hover:text-slate-500 dark:hover:text-slate-300"
      href={github}
      target="_blank"
    >
      <GitHubLogoIcon className={`${className} size-5 `} />
    </a>
  );
}
