import { LucideIcon } from "lucide-react";

interface Props {
  link: string;
  icon: LucideIcon;
  title: string;
  optionalClass?: string;
}

const CustomButton = ({ link, icon: Icon, title, optionalClass }: Props) => {
  return (
    <div
      className={`relative w-fit cursor-default max-sm:mx-auto ${optionalClass}`}
    >
      <div
        className={`animate-gradient absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600`}
      ></div>
      <a
        href={link}
        className="relative flex items-center gap-2 rounded-lg border border-zinc-600 bg-zinc-900 px-3 py-2 leading-none text-zinc-100/80 duration-150 hover:-translate-x-1 hover:-translate-y-1 group-hover:border-zinc-100/80 group-hover:text-zinc-100"
      >
        <Icon className="h-6 w-6" />
        <p className="text-sm font-bold">{title}</p>
      </a>
    </div>
  );
};

export default CustomButton;
