import { Poppins } from "next/font/google";
import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  title: string;
  desc: string;
  link: string;
  children?: React.ReactNode;
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const ProjectCard = ({ image, alt, title, children, desc, link }: Props) => {
  return (
    <div className="min-h-20 basis-1/3 space-y-2 overflow-hidden rounded-lg border border-zinc-100/80 bg-transparent text-zinc-100/80">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <Image
          width={400}
          height={400}
          alt={alt}
          src={image}
          className="h-64 w-full object-cover duration-300 hover:scale-110"
        />
      </a>
      <div className="flex h-full w-full flex-col gap-4 p-6">
        <h3 className={`text-xl font-bold ${poppins.className}`}>{title}</h3>
        <p className="prose prose-base text-zinc-100/60">{desc}</p>
        <div className="flex flex-wrap gap-2">{children}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
