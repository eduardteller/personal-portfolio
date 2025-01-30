import ContactForm from "@/components/ContactForm";
import CopyMail from "@/components/EmailComponent";
import LinkBadge from "@/components/LinkBadge";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import SkillBadgeSmall from "@/components/SkillBadgeSmall";
import StarsBackground from "@/components/StarsBG";
import Typewriter from "@/components/Typewriter";
import { FileUser } from "lucide-react";
import Image from "next/image";
import { inter } from "./layout";

export default function Home() {
  return (
    <>
      <main>
        <section className="relative mx-auto h-screen w-full max-w-7xl px-4 py-16">
          <StarsBackground />

          <div className="flex h-full w-full flex-col justify-center">
            <div className="flex flex-col justify-center gap-4">
              <p className={`font-semibold text-zinc-100/80`}>
                hi👋, my name is
              </p>
              <h1
                className={`animate-gradient w-fit -translate-x-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-8xl font-black uppercase tracking-tight text-transparent max-sm:text-6xl`}
              >
                Eduard Teller
              </h1>
              <h3 className="text-2xl font-medium text-zinc-100/80 max-sm:text-xl">
                Full Stack Developer with expertise in{" "}
                {/* <span className="font-semibold text-zinc-100">NEXT.JS</span> */}
                <Typewriter />
              </h3>
              <div className="flex gap-4">
                {/* <a
                className="group rounded-md border border-zinc-100/60 p-2 hover:border-zinc-100"
                href="https://linkedin.com"
              >
                <Linked />
              </a> */}
                <LinkBadge />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-zinc-900/80">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 py-24">
            <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
              about
            </h5>
            <h2 className="text-4xl font-bold text-zinc-100/80 max-sm:text-3xl">
              My Story
            </h2>

            <div
              className={`mt-12 flex gap-4 max-sm:flex-col ${inter.className}`}
            >
              <div className="mt-2 flex justify-center md:basis-1/3">
                <div className="group relative h-72 w-72">
                  <div className="animate-gradient absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600" />
                  {/* <div className="animate-gradient absolute -inset-[1px] hidden rounded-lg bg-zinc-100 opacity-0 duration-300 group-hover:opacity-80" /> */}
                  {/* <div className="animate-gradient absolute -inset-[2px] rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600" /> */}
                  <Image
                    width={400}
                    height={400}
                    alt="Me"
                    src="/me.jpg"
                    className="relative rounded-lg object-cover grayscale duration-300 hover:grayscale-0"
                  />
                </div>
              </div>
              <div
                className={`${inter.className} flex flex-col justify-center gap-4 px-8 md:basis-2/3`}
              >
                <div className="prose prose-lg text-zinc-100/80">
                  <p>
                    Hi, I’m{" "}
                    <span className="font-semibold duration-150 hover:text-blue-600">
                      Eduard Teller
                    </span>
                    , a{" "}
                    <span className="font-semibold duration-150 hover:text-purple-600">
                      Fullstack Web Developer
                    </span>{" "}
                    based in{" "}
                    <span className="font-semibold duration-150 hover:text-red-600">
                      Tallinn, Estonia
                    </span>
                    .{" "}
                    {`I’m currently studying Hardware Development and Programming at TalTech.

I started web development in 2020 as a hobby, and it quickly became my passion. Since then, I’ve gained strong experience with modern web technologies. I love building scalable, efficient, and user-friendly applications that solve real-world problems.

When I’m not coding, I enjoy learning about new technologies!`}
                  </p>
                  <p>
                    <span className="font-semibold">Other Interests:</span> AI,
                    Crypto, Fitness
                  </p>
                </div>

                <div className="group relative w-fit cursor-default max-sm:mx-auto">
                  <div
                    className={`animate-gradient absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600`}
                  ></div>
                  <a
                    href="/cv-eng.pdf"
                    className="relative flex items-center gap-2 rounded-lg border border-zinc-100/80 bg-[#151517] p-4 leading-none text-zinc-100/80 duration-150 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-zinc-100"
                  >
                    <FileUser className="h-6 w-6" />
                    <p className="text-sm font-bold uppercase">Download CV</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-zinc-900">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-4 py-24">
            <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
              Skills
            </h5>
            <h2 className="text-4xl font-bold text-zinc-100/80">I Excel At</h2>

            <div
              className={`mt-12 flex w-fit flex-wrap items-center justify-center gap-4 tracking-tight ${inter.className}`}
            >
              {/* first */}
              <SkillBadge title="Next.JS" image="/next.png" alt="Next.js" />
              <SkillBadge title="React" image="/react.png" alt="React" />
              <SkillBadge
                title="React Native"
                image="/native.png"
                alt="React Native"
              />
              <SkillBadge title="JavaScript" image="/js.png" alt="JavaScript" />
              <SkillBadge title="typeScript" image="/ts.png" alt="TypeScript" />
              <SkillBadge title="HTML & CSS" image="/cs.png" alt="CSS" />
              <SkillBadge
                title="TailwindCSS"
                image="/tail.png"
                alt="TailwindCSS"
              />
              <SkillBadge title="Node.js" image="/node.png" alt="Node" />

              {/* second */}
              <SkillBadge title="Express.js" image="/exx.png" alt="Express" />
              <SkillBadge title="SQL" image="/sql.png" alt="SQL" />
              <SkillBadge
                title="PostgreSQL"
                image="/postgre.png"
                alt="PostgreSQL"
              />
              <SkillBadge title="MongoDB" image="/mongo.png" alt="MongoDB" />
              <SkillBadge title="SupaBase" image="/supa.png" alt="SupaBase" />
              <SkillBadge title="Sqlite" image="/sqlite.png" alt="Sqlite" />
              <SkillBadge
                title="Electron"
                image="/electron.png"
                alt="Electron"
              />
              <SkillBadge title="Expo" image="/expo.png" alt="Expo" />
              <SkillBadge title="Python" image="/python.svg" alt="Python" />
              <SkillBadge title="C#" image="/csh.png" alt="C#" />
              <SkillBadge title=".NET" image="/net.png" alt=".NET" />
              <SkillBadge
                title="Git/GITHUB"
                image="/git.png"
                alt="Git/GitHub"
              />
              <SkillBadge title="Docker" image="/dock.webp" alt="Docker" />
              <SkillBadge title="Linux" image="/linux.svg" alt="Linux" />
              <SkillBadge title="Windows" image="/w.png" alt="Windows" />
            </div>
          </div>
        </section>
        <section className="bg-zinc-900">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 py-24">
            <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
              projects
            </h5>
            <h2 className="text-3xl font-bold text-zinc-100/80 md:text-4xl">
              Stuff I Built
            </h2>
            <div
              className={`mt-12 flex w-full gap-4 max-lg:flex-wrap max-lg:items-center max-lg:justify-center max-sm:flex-col ${inter.className}`}
            >
              <ProjectCard
                link="https://koolitech.ee"
                title="KooliTech - E-Kell"
                desc={`A software solution for schools to manage bells and alarms via desktop
          or web. Easily control, schedule, and monitor systems remotely,
          enhancing safety and efficiency.`}
                image="/legacy/kool.png"
                alt="KooliTech"
              >
                <SkillBadgeSmall image="/react.png" title="React" />
                <SkillBadgeSmall image="/electron.png" title="Electron" />
                <SkillBadgeSmall image="/ts.png" title="TypeScript" />
                <SkillBadgeSmall image="/node.png" title="Node.js" />
                <SkillBadgeSmall image="/exx.png" title="Express" />
                <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
              </ProjectCard>
              <ProjectCard
                link="https://neosec.tech"
                title="NeoSec Website"
                desc={`A software solution for schools to manage bells and alarms via desktop
          or web. Easily control, schedule, and monitor systems remotely,
          enhancing safety and efficiency.`}
                image="/legacy/neo2.png"
                alt="NeoSec"
              >
                <SkillBadgeSmall image="/next.png" title="NextJS" />
                <SkillBadgeSmall image="/react.png" title="React" />
                <SkillBadgeSmall image="/ts.png" title="TypeScript" />
                <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
              </ProjectCard>

              <ProjectCard
                link="https://kahoot-clone-1a7dcaeaf061.herokuapp.com"
                title="Kahoot! Clone"
                desc={`I recreated the popular quiz game Kahoot as a full-stack web application. This project includes features like user authentication, real-time multiplayer quizzes, and a responsive design for different devices.`}
                image="/legacy/kahoot-4.png"
                alt="Kahoot"
              >
                <SkillBadgeSmall image="/react.png" title="React" />
                <SkillBadgeSmall image="/ts.png" title="TypeScript" />
                <SkillBadgeSmall image="/node.png" title="Node.js" />
                <SkillBadgeSmall image="/exx.png" title="Express" />
                <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
                <SkillBadgeSmall image="/mongo.png" title="MongoDB" />
              </ProjectCard>
            </div>
            <div
              className={`mt-4 flex w-full flex-row justify-center gap-4 max-sm:flex-col ${inter.className}`}
            >
              <ProjectCard
                link=""
                title="Solana Scanner - Telegram Bot"
                desc={`My Solana Scanner Telegram Bot makes it easy to check key stats for any new token on the Solana blockchain. Just enter the contract address, and the bot shows details like burn/mint status, price, market cap, liquidity, all-time high, rug pull warnings, developer info, social links, holders, and more.`}
                image="/legacy/bot.png"
                alt="bot"
              >
                <SkillBadgeSmall image="/python.svg" title="Python" />
              </ProjectCard>
              <ProjectCard
                link=""
                title="Reddit-Like Forum"
                desc={`A web app inspired by Reddit, where users can create, share, and discuss content within various communities. Engage in conversations, upvote posts, and explore trending topics in a clean, user-friendly interface.`}
                image="/legacy/reddit-4.png"
                alt="Reddit"
              >
                <SkillBadgeSmall image="/react.png" title="React" />
                <SkillBadgeSmall image="/ts.png" title="TypeScript" />
                <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
                <SkillBadgeSmall image="/supa.png" title="Supabase" />
              </ProjectCard>
            </div>
          </div>
        </section>
        {/* <section className="bg-zinc-900">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-4 py-24">
          <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
            education
          </h5>
          <h2 className="text-4xl font-bold text-zinc-100/80">
            {`I'm Studying At`}
          </h2>
          <div className="relative mt-12">
            <div className="animate-gradient absolute -inset-[2px] rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600" />
            <div className="relative flex gap-4 rounded-lg bg-zinc-900 p-8 text-zinc-100/80">
              <Image
                src={"/tal.jpg"}
                width={200}
                height={200}
                alt="TalTech"
                className="rounded-md object-cover grayscale"
              />
              <div className="flex flex-col gap-2">
                <h5 className="text-xl font-semibold">
                  Bachelor of Hardware Development <br /> and Programming
                </h5>
                <h6 className="text-lg font-semibold text-zinc-100/70">
                  Tallinn Unviersity of Technology
                </h6>
                <p className="text-sm font-bold uppercase text-zinc-100/70">
                  Sept 2022 - Present
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
        <section className="relative bg-zinc-900/80">
          {/* <div className="absolute right-0 top-0 z-[1] h-full w-full bg-zinc-950/40"></div> */}
          <div className="z-50 mx-auto flex h-full w-full max-w-7xl flex-col items-center px-4 py-24">
            <div className="flex w-full gap-4 max-sm:flex-col max-sm:gap-8">
              <div className="flex basis-1/2 flex-col gap-4 px-8">
                <h5 className="text-sm font-bold uppercase text-blue-600">
                  contact
                </h5>
                <h2 className="text-4xl font-bold text-zinc-100/80">{`Let's Connect`}</h2>
                <p
                  className={`text-base font-medium text-zinc-100/60 ${inter.className}`}
                >
                  {`Send me an Email or Fill out the form and I'll get back to you
                  within 24 hours.`}
                </p>
                <CopyMail />
              </div>
              <div className={`${inter.className} basis-1/2 px-8`}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between">
          {/* <div className="flex gap-4">
            <LinkBadge />
          </div> */}
          <p className="text-sm font-semibold text-zinc-100/60">
            © 2025 Eduard Teller. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
