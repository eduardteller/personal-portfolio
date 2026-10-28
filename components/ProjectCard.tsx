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
  codeLabel: string;
  demoLabel: string;
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
  codeLabel,
  demoLabel,
}: Props) => {
  return (
    <div className="group flex min-h-20 flex-col space-y-2 overflow-hidden rounded-lg border border-zinc-600 bg-transparent text-zinc-100/80 duration-150 hover:border-zinc-100/80">
      <div className="overflow-hidden border-b border-zinc-700">
        <Image
          width={400}
          height={225}
          alt={alt}
          src={image}
          className="aspect-video h-auto w-full object-cover object-top grayscale duration-300 group-hover:scale-105 group-hover:grayscale-0"
        />
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
            title={codeLabel}
          />
          {demo && (
            <CustomButton
              optionalClass="max-sm:w-full sm:basis-1/2"
              link={demo}
              icon={ExternalLink}
              title={demoLabel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
