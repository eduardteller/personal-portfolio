import { LucideIcon } from "lucide-react";

interface BadgeFancySmallProps {
  text: string;
  link: string;
  IconElement: LucideIcon;
}

const BadgeFancySmall = ({ text, link, IconElement }: BadgeFancySmallProps) => {
  return (
    <a href={link} className="group relative">
      <div
        className={`animate-gradient absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600`}
      />
      <div className="relative flex items-center justify-center overflow-hidden rounded-lg border border-zinc-100/80 bg-zinc-900 p-3 transition-all duration-150 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border-zinc-100">
        <IconElement className="h-6 w-6 flex-shrink-0 fill-zinc-100/80 group-hover:fill-zinc-100" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-zinc-100/80 opacity-0 transition-all duration-150 group-hover:ml-2 group-hover:max-w-40 group-hover:text-zinc-100 group-hover:opacity-100">
          {text}
        </span>
      </div>
    </a>
  );
};

export default BadgeFancySmall;
