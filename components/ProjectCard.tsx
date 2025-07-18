import { ExternalLink, Github } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface Props {
  image: string;
  alt: string;
  title: string;
  desc: string;
  link: string;
  github: string;
  demo?: string;
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
  demo,
  github,
}: Props) => {
  return (
    <div className="group min-h-20 space-y-2 overflow-hidden rounded-lg border border-zinc-600 bg-transparent text-zinc-100/80 duration-150 hover:border-zinc-100/80 max-lg:max-w-96 lg:basis-1/3">
      <div className="relative overflow-hidden">
        <Image
          width={400}
          height={400}
          alt={alt}
          src={image}
          className="h-64 w-full object-cover duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-black/80" />
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {/* <div className="mt-4 flex w-full justify-between gap-4">
            <CustomButton
              optionalClass="basis-1/2"
              link={github}
              icon={Github}
              title="View Code"
            />
            {demo && (
              <CustomButton
                optionalClass="basis-1/2"
                link={demo}
                icon={ExternalLink}
                title="Live Demo"
              />
            )}
          </div> */}
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col justify-between gap-4 p-6">
        <div className="flex flex-col gap-4">
          <h3 className={`text-xl font-bold ${poppins.className}`}>{title}</h3>
          <p className="prose prose-base text-zinc-100/60">{desc}</p>
          <div className="flex flex-wrap gap-2">{children}</div>
        </div>
        <div className="mt-4 flex w-full justify-between gap-4 max-sm:flex-col">
          <CustomButton
            optionalClass=" max-sm:w-full sm:basis-1/2"
            link={github}
            icon={Github}
            title="View Code"
          />
          {demo && (
            <CustomButton
              optionalClass="max-sm:w-full sm:basis-1/2"
              link={demo}
              icon={ExternalLink}
              title="Live Demo"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
