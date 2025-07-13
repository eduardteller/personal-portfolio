import { Github } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  title: string;
  desc: string;
  link: string;
  github: string;
  children?: React.ReactNode;
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const ProjectCard = ({
  image,
  alt,
  title,
  children,
  desc,
  link,
  github,
}: Props) => {
  return (
    <div className="min-h-20 space-y-2 overflow-hidden rounded-lg border border-zinc-600 bg-transparent text-zinc-100/80 duration-150 hover:border-zinc-100/80 max-lg:max-w-96 lg:basis-1/3">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <Image
          width={400}
          height={400}
          alt={alt}
          src={image}
          className="h-64 w-full object-cover duration-300 hover:scale-105"
        />
      </a>
      <div className="flex w-full flex-1 flex-col justify-between gap-4 p-6">
        <div className="flex flex-col gap-4">
          <h3 className={`text-xl font-bold ${poppins.className}`}>{title}</h3>
          <p className="prose prose-base text-zinc-100/60">{desc}</p>
          <div className="flex flex-wrap gap-2">{children}</div>
        </div>
        <div className="group relative w-fit cursor-default max-sm:mx-auto">
          <div
            className={`animate-gradient absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600`}
          ></div>
          <a
            href={github}
            className="relative flex items-center gap-2 rounded-lg border border-zinc-600 bg-zinc-900 p-3 leading-none text-zinc-100/80 duration-150 hover:border-zinc-100/80 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-zinc-100"
          >
            <Github className="h-6 w-6" />
            <p className="text-sm font-bold">GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
