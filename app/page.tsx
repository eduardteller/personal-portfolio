import ContactForm from "@/components/ContactForm";
import LinkBadge from "@/components/LinkBadge";
import SkillBadge from "@/components/SkillBadge";
import StarsBackground from "@/components/StarsBG";
import Typewriter from "@/components/Typewriter";
import { FileUser, Mail } from "lucide-react";
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
                className={`animate-gradient w-fit -translate-x-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-8xl font-black uppercase tracking-tight text-transparent`}
              >
                Eduard Teller
              </h1>
              <h3 className="text-2xl font-medium text-zinc-100/80">
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
            <h2 className="text-4xl font-bold text-zinc-100/80">My Story</h2>

            <div className={`mt-12 flex gap-4 ${inter.className}`}>
              <div className="mt-2 flex basis-1/3 justify-center">
                <div className="group relative h-72 w-72">
                  <div className="animate-gradient absolute -inset-[1px] rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600" />
                  {/* <div className="animate-gradient absolute -inset-[1px] hidden rounded-lg bg-zinc-100 opacity-0 duration-300 group-hover:opacity-80" /> */}
                  {/* <div className="animate-gradient absolute -inset-[2px] rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600" /> */}
                  <Image
                    width={400}
                    height={400}
                    alt="Me"
                    src="/me.jpg"
                    className="rounded-lg object-cover grayscale duration-300 hover:grayscale-0"
                  />
                </div>
              </div>
              <div
                className={`${inter.className} flex basis-2/3 flex-col justify-center gap-4 px-8`}
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

                <div className="group relative w-fit cursor-default">
                  <div
                    className={`animate-gradient absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600`}
                  ></div>
                  <a
                    href="/cv-eng.pdf"
                    className="relative flex items-center gap-2 rounded-lg border border-zinc-100/80 bg-zinc-900 p-4 leading-none text-zinc-100/80 duration-150 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-zinc-100"
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
              <SkillBadge
                title="Express.js"
                image="/express.png"
                alt="Express"
              />
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
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-4 py-24">
            <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
              projects
            </h5>
            <h2 className="text-4xl font-bold text-zinc-100/80">
              Stuff I Built
            </h2>
            <div className="mt-12 flex w-full gap-4">
              <div className="h-20 basis-1/2 rounded-lg border border-zinc-100 p-4"></div>
              <div className="h-20 basis-1/2 rounded-lg border border-zinc-100 p-4"></div>
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
            <div className="flex w-full gap-4">
              <div className="flex basis-1/2 flex-col gap-4 px-8">
                <h5 className="text-sm font-bold uppercase text-blue-600">
                  contact
                </h5>
                <h2 className="text-4xl font-bold text-zinc-100/80">{`Let's Connect`}</h2>
                <p className="text-base font-medium text-zinc-100/60">
                  {`Send an Email or Fill out the form and I'll get back to you
                  within 24 hours.`}
                </p>
                <div className="flex w-fit items-center gap-2 rounded-md font-medium text-zinc-100/60">
                  <Mail className="h-6 w-6 text-zinc-100/80" />
                  hello@eduardteller.me
                </div>
              </div>
              <div className="basis-1/2 px-8">
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
