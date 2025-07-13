import ContactForm from "@/components/ContactForm";
import CopyMail from "@/components/EmailComponent";
import LinkBadge from "@/components/LinkBadge";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import SkillBadgeSmall from "@/components/SkillBadgeSmall";
import StarsBackground from "@/components/StarsBG";
import Typewriter from "@/components/Typewriter";
import { FileUser } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
});

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
                  {/* 1. Initial gray border (always visible in the background) */}
                  <div className="absolute -inset-[1px] rounded-lg bg-zinc-600" />

                  {/* 2. Colored gradient that smoothly fades in on top */}
                  <div className="animate-gradient absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                  <Image
                    width={400}
                    height={400}
                    alt="Me"
                    src="/me.jpg"
                    className="relative rounded-lg object-cover grayscale transition-all duration-200 group-hover:grayscale-0"
                  />
                </div>
              </div>
              <div
                className={`${inter.className} flex flex-col justify-center gap-4 px-8 md:basis-2/3`}
              >
                <div className="prose prose-lg text-zinc-100/80">
                  <span>
                    {`Hi, I'm`}{" "}
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
                  </span>
                  <p>
                    {`I recently finished my Bachelor's degree and have a lot of experience building personal projects like my school bell management system, as well as real-world work experience where I was one of the main team members developing a web system using Java and React, which helps automate the management of real estate documents.`}
                  </p>
                  <p>
                    {`While studying hardware development, I found a strong interest in software engineering. Since then, I've spent a lot of time learning and improving my skills in different areas of software development. I like building solutions that help solve real problems.`}
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
                    <p className="text-sm font-bold uppercase">{`CV`}</p>
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
              className={`mt-12 flex w-full flex-col items-center justify-center gap-8 tracking-tight ${inter.className}`}
            >
              {/* Frontend Development */}
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-bold uppercase text-zinc-100/90">
                  Frontend
                </h3>
                <div className="flex w-fit flex-wrap items-center justify-center gap-4">
                  <SkillBadge title="React" image="/react.png" alt="React" />
                  <SkillBadge title="Next.JS" image="/next.png" alt="Next.js" />
                  <SkillBadge
                    title="typeScript"
                    image="/ts.png"
                    alt="TypeScript"
                  />
                  <SkillBadge
                    title="JavaScript"
                    image="/js.png"
                    alt="JavaScript"
                  />
                  <SkillBadge title="HTML & CSS" image="/cs.png" alt="CSS" />
                  <SkillBadge
                    title="TailwindCSS"
                    image="/tail.png"
                    alt="TailwindCSS"
                  />
                </div>
              </div>

              {/* Backend Development */}
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-bold uppercase text-zinc-100/90">
                  Backend
                </h3>
                <div className="flex w-fit flex-wrap items-center justify-center gap-4">
                  <SkillBadge title="Node.js" image="/node.png" alt="Node" />
                  <SkillBadge
                    title="Express.js"
                    image="/exx.png"
                    alt="Express"
                  />
                  <SkillBadge title="Java" image="/java.webp" alt="Java" />
                  <SkillBadge
                    title="Java Spring"
                    image="/spring.svg"
                    alt="Java Spring"
                  />
                  <SkillBadge title="Python" image="/python.svg" alt="Python" />
                  <SkillBadge title="C#" image="/csh.png" alt="C#" />
                  <SkillBadge title=".NET" image="/net.png" alt=".NET" />
                </div>
              </div>

              {/* Database Technologies */}
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-bold uppercase text-zinc-100/90">
                  Databases
                </h3>
                <div className="flex w-fit flex-wrap items-center justify-center gap-4">
                  <SkillBadge
                    title="PostgreSQL"
                    image="/postgre.png"
                    alt="PostgreSQL"
                  />
                  <SkillBadge
                    title="MongoDB"
                    image="/mongo.png"
                    alt="MongoDB"
                  />
                  <SkillBadge title="SQL" image="/sql.png" alt="SQL" />
                  <SkillBadge
                    title="SupaBase"
                    image="/supa.png"
                    alt="SupaBase"
                  />
                  <SkillBadge title="Neon" image="/neon.png" alt="Neon" />
                  <SkillBadge title="Sqlite" image="/sqlite.png" alt="Sqlite" />
                </div>
              </div>

              {/* DevOps & Cloud */}
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-bold uppercase text-zinc-100/90">DevOps</h3>
                <div className="flex w-fit flex-wrap items-center justify-center gap-4">
                  <SkillBadge title="AWS" image="/aws.png" alt="AWS" />
                  <SkillBadge title="Docker" image="/dock.webp" alt="Docker" />
                  <SkillBadge
                    title="Git/GITHUB"
                    image="/git.png"
                    alt="Git/GitHub"
                  />
                </div>
              </div>

              {/* Mobile & Desktop Development */}
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-bold uppercase text-zinc-100/90">
                  Native Development
                </h3>
                <div className="flex w-fit flex-wrap items-center justify-center gap-4">
                  <SkillBadge
                    title="React Native"
                    image="/native.png"
                    alt="React Native"
                  />
                  <SkillBadge title="Expo" image="/expo.png" alt="Expo" />
                  <SkillBadge
                    title="Electron"
                    image="/electron.png"
                    alt="Electron"
                  />
                </div>
              </div>

              {/* Tools & Systems */}
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-bold uppercase text-zinc-100/90">
                  Tools & Systems
                </h3>
                <div className="flex w-fit flex-wrap items-center justify-center gap-4">
                  <SkillBadge title="Linux" image="/linux.svg" alt="Linux" />
                  <SkillBadge title="Windows" image="/w.png" alt="Windows" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-zinc-900">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 py-24">
            <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
              projects
            </h5>
            <h2 className="text-3xl font-bold text-zinc-100/80 md:text-4xl">
              Some of My Work
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
                github="https://github.com/eduardteller/koolitech-dashboard"
              >
                <SkillBadgeSmall image="/react.png" title="React" />
                <SkillBadgeSmall image="/electron.png" title="Electron" />
                <SkillBadgeSmall image="/ts.png" title="TypeScript" />
                <SkillBadgeSmall image="/node.png" title="Node.js" />
                <SkillBadgeSmall image="/exx.png" title="Express" />
                <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
              </ProjectCard>

              <ProjectCard
                link="https://kahoot-clone-1a7dcaeaf061.herokuapp.com"
                title="Kahoot! Clone"
                desc={`I recreated the popular quiz game Kahoot as a full-stack web application. This project includes features like user authentication, real-time multiplayer quizzes, and a responsive design for different devices.`}
                image="/legacy/kahoot-4.png"
                alt="Kahoot"
                github="https://github.com/eduardteller/kahoot-remake"
              >
                <SkillBadgeSmall image="/react.png" title="React" />
                <SkillBadgeSmall image="/ts.png" title="TypeScript" />
                <SkillBadgeSmall image="/node.png" title="Node.js" />
                <SkillBadgeSmall image="/exx.png" title="Express" />
                <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
                <SkillBadgeSmall image="/mongo.png" title="MongoDB" />
              </ProjectCard>
              <ProjectCard
                link="https://github.com/eduardteller/yrituste-haldamissysteem"
                title="Events Management System"
                desc={`A Web App that allows users to create and manage events and also add the participants to the event, add existing participants to other events.`}
                image="/legacy/events_managment.png"
                alt="bot"
                github="https://github.com/eduardteller/yrituste-haldamissysteem"
              >
                <SkillBadgeSmall image="/java.webp" title="Java" />
                <SkillBadgeSmall image="/spring.svg" title="Java Spring" />
                <SkillBadgeSmall image="/react.png" title="React" />
                <SkillBadgeSmall image="/ts.png" title="TypeScript" />
                <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
              </ProjectCard>
            </div>
            <div
              className={`mt-4 flex w-full gap-4 max-lg:flex-wrap max-lg:items-center max-lg:justify-center max-sm:flex-col ${inter.className}`}
            >
              <ProjectCard
                link="https://github.com/eduardteller/sol-scanner"
                title="Solana Scanner - Telegram Bot"
                desc={`My Solana Scanner Telegram Bot makes it easy to check key stats for any new token on the Solana blockchain. Just enter the contract address, and the bot shows details like burn/mint status, price, market cap, liquidity, all-time high, rug pull warnings, developer info, social links, holders, and more.`}
                image="/legacy/bot.png"
                github="https://github.com/eduardteller/sol-scanner"
                alt="bot"
              >
                <SkillBadgeSmall image="/python.svg" title="Python" />
              </ProjectCard>
              <ProjectCard
                link="https://byteboard.vercel.app/"
                title="Reddit-Like Forum"
                desc={`A web app inspired by Reddit, where users can create, share, and discuss content within various communities. Engage in conversations, upvote posts, and explore trending topics in a clean, user-friendly interface.`}
                image="/legacy/reddit-4.png"
                alt="Reddit"
                github="https://github.com/eduardteller/byteboard"
              >
                <SkillBadgeSmall image="/react.png" title="React" />
                <SkillBadgeSmall image="/ts.png" title="TypeScript" />
                <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
                <SkillBadgeSmall image="/supa.png" title="Supabase" />
              </ProjectCard>
              <ProjectCard
                link="https://neosec.tech"
                title="NeoSec Website"
                desc={`A software solution for schools to manage bells and alarms via desktop
          or web. Easily control, schedule, and monitor systems remotely,
          enhancing safety and efficiency.`}
                image="/legacy/neo2.png"
                alt="NeoSec"
                github="https://github.com/eduardteller/neosec-landing"
              >
                <SkillBadgeSmall image="/next.png" title="NextJS" />
                <SkillBadgeSmall image="/react.png" title="React" />
                <SkillBadgeSmall image="/ts.png" title="TypeScript" />
                <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
              </ProjectCard>
            </div>
          </div>
        </section>
        <section className="bg-zinc-900">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 py-24">
            <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
              Experience
            </h5>
            <h2 className="text-4xl font-bold text-zinc-100/80">
              Work History & Education
            </h2>

            <div className="flex justify-between gap-8 p-4">
              <ol className="relative basis-1/2 border-s border-zinc-600">
                <li className="group ms-4">
                  <div className="absolute -start-1.5 h-3 w-3 rounded-full border border-zinc-600 bg-zinc-600 duration-150 group-hover:border-zinc-100/80 group-hover:bg-zinc-100/80"></div>
                  <div className="relative mt-4">
                    {/* 1. Initial gray border (always visible in the background) */}
                    <div className="absolute -inset-[1px] rounded-lg bg-zinc-600" />

                    {/* 2. Colored gradient that smoothly fades in on top */}
                    <div className="animate-gradient absolute -inset-[1px] rounded-lg bg-zinc-100/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    <div className="relative flex items-start gap-8 rounded-lg bg-zinc-900 p-8 text-zinc-100/80 max-sm:flex-col">
                      <Image
                        src={"/AI-Eesti-dark.svg"}
                        width={200}
                        height={200}
                        alt="TalTech"
                        className="h-fit w-32 object-contain"
                      />
                      <div className="flex flex-col gap-3">
                        <h5 className="text-xl font-semibold">AI Eesti</h5>
                        <h6 className="text-lg font-semibold text-zinc-100/70">
                          Full Stack Engineer
                        </h6>
                        <p className="text-sm font-bold uppercase text-zinc-100/70">
                          Feb 2025 - Jun 2025
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
              <ol className="relative basis-1/2 border-s border-zinc-600">
                <li className="group ms-4">
                  <div className="absolute -start-1.5 h-3 w-3 rounded-full border border-zinc-600 bg-zinc-600 duration-150 group-hover:border-zinc-100/80 group-hover:bg-zinc-100/80"></div>
                  <div className="relative mt-4">
                    {/* 1. Initial gray border (always visible in the background) */}
                    <div className="absolute -inset-[1px] rounded-lg bg-zinc-600" />

                    {/* 2. Colored gradient that smoothly fades in on top */}
                    <div className="animate-gradient absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    <div className="relative flex items-start gap-8 rounded-lg bg-zinc-900 p-8 text-zinc-100/80 max-sm:flex-col">
                      <Image
                        src={"/taltech.png"}
                        width={200}
                        height={200}
                        alt="TalTech"
                        className="w-32 object-contain pt-2"
                      />
                      <div className="flex flex-col gap-3">
                        <h5 className="text-xl font-semibold">
                          Bachelor of Hardware Development and Programming
                        </h5>
                        <h6 className="text-lg font-semibold text-zinc-100/70">
                          Tallinn University of Technology (TalTech)
                        </h6>
                        <p className="text-sm font-bold uppercase text-zinc-100/70">
                          Sept 2022 - Jun 2025
                        </p>
                        {/* <div className="mt-2">
                          <p className="mb-2 text-sm text-zinc-100/60">
                            Key coursework completed:
                          </p>
                          <ul className="list-inside list-disc space-y-1 text-sm text-zinc-100/60">
                            <li>
                              <span className="font-medium">
                                Web Technologies
                              </span>{" "}
                              (ICD0007)
                            </li>
                            <li>
                              <span className="font-medium">
                                Data Security and Cryptology
                              </span>{" "}
                              (ICA0003)
                            </li>
                            <li>
                              <span className="font-medium">
                                Programming II
                              </span>{" "}
                              (IAX0584)
                            </li>
                            <li>
                              <span className="font-medium">
                                Algorithms and Data Structures
                              </span>{" "}
                              (IAS0090)
                            </li>
                            <li>
                              <span className="font-medium">
                                Software Engineering
                              </span>{" "}
                              (IAS0110)
                            </li>
                            <li>
                              <span className="font-medium">
                                Software Project
                              </span>{" "}
                              (IAS1410)
                            </li>
                            <li>
                              <span className="font-medium">
                                Foundations of Cyber Security
                              </span>{" "}
                              (ITI0216)
                            </li>
                          </ul>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </li>
                <li className="group ms-4">
                  <div className="absolute -start-1.5 h-3 w-3 rounded-full border border-zinc-600 bg-zinc-600 duration-150 group-hover:border-zinc-100/80 group-hover:bg-zinc-100/80"></div>
                  <div className="relative mt-8 w-full">
                    {/* 1. Initial gray border (always visible in the background) */}
                    <div className="absolute -inset-[1px] rounded-lg bg-zinc-600" />

                    {/* 2. Colored gradient that smoothly fades in on top */}
                    <div className="animate-gradient absolute -inset-[1px] rounded-lg bg-zinc-100/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    <div className="relative flex gap-8 rounded-lg bg-zinc-900 p-8 text-zinc-100/80 max-sm:flex-col">
                      <Image
                        src={"/kk.png"}
                        width={200}
                        height={200}
                        alt="Kallavere Keskkool"
                        className="w-32 object-cover"
                      />
                      <div className="flex flex-col gap-3">
                        <h5 className="text-xl font-semibold">
                          Secondary Education
                        </h5>
                        <h6 className="text-lg font-semibold text-zinc-100/70">
                          Kallavere Keskkool
                        </h6>
                        <p className="text-sm font-bold uppercase text-zinc-100/70">
                          Sept 2019 - Jun 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
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
