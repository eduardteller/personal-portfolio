import { Poppins } from "next/font/google";
import Image from "next/image";

interface Props {
  logo: string;
  alt: string;
  title: string;
  org: string;
  date: string;
  location?: string;
  current?: boolean;
  logoFill?: boolean;
  children?: React.ReactNode;
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const ExperienceCard = ({
  logo,
  alt,
  title,
  org,
  date,
  location,
  current,
  logoFill,
  children,
}: Props) => {
  return (
    // 1px wrapper acts as the border: rainbow for the current role, gray otherwise
    <div
      className={`${current ? "animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-red-600" : "bg-zinc-600 hover:bg-zinc-100/80"} group cursor-default rounded-lg p-px text-zinc-100/80 duration-150`}
    >
      <div className="flex gap-4 rounded-[7px] bg-zinc-900 p-5 sm:gap-6 sm:p-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-zinc-100">
          <Image
            width={96}
            height={96}
            alt={alt}
            src={logo}
            className={`h-full w-full ${logoFill ? "object-cover" : "object-contain p-1.5"}`}
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h4
              className={`text-lg font-bold text-zinc-100/90 ${poppins.className}`}
            >
              {title}
            </h4>
            <p className="whitespace-nowrap text-sm font-medium text-zinc-100/60">
              {date}
            </p>
          </div>
          <p className="font-medium text-zinc-100/70">{org}</p>
          {location && <p className="text-sm text-zinc-100/50">{location}</p>}
          {children && (
            <div className="mt-3 flex flex-wrap gap-2">{children}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
