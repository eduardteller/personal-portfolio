import Image from "next/image";

interface Props {
  image: string;
  title: string;
}

const SkillBadgeSmall = ({ image, title }: Props) => {
  return (
    <div className="group/badge relative cursor-default">
      <div
        className={`animate-gradient absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-red-600`}
      />
      <div className="relative flex items-center gap-1 overflow-hidden rounded-2xl border border-zinc-600 bg-zinc-900 p-2 leading-none duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] group-hover:border-zinc-100/80">
        <Image
          width={24}
          height={24}
          alt={title}
          className="h-4 w-4 rounded-sm object-contain grayscale duration-150 group-hover/badge:grayscale-0"
          src={image}
        />
        <p className="text-xs font-semibold uppercase tracking-tight">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SkillBadgeSmall;
