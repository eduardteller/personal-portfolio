import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  title: string;
  color?: "red" | "blue" | "purple";
}

const SkillBadge = ({ image, alt, title, color }: Props) => {
  return (
    <div className="group relative w-24 cursor-default">
      <div
        className={` ${color === "blue" ? "bg-blue-600" : color === "red" ? "bg-red-600" : color === "purple" ? "bg-purple-600" : "bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"} animate-gradient absolute inset-0 rounded-lg`}
      ></div>
      <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border border-zinc-100/60 bg-zinc-900 px-2 py-4 leading-none duration-150 group-hover:-translate-x-1 group-hover:-translate-y-1">
        <Image
          width={48}
          height={48}
          alt={alt}
          className="h-12 w-12 rounded-md object-contain grayscale duration-150 group-hover:grayscale-0"
          src={image}
        />
        <p className="overflow-hidden whitespace-nowrap text-xs font-bold uppercase text-zinc-300">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SkillBadge;
