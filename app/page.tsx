import LinkBadge from "@/components/LinkBadge";
import SkillBadge from "@/components/SkillBadge";
import StarsBackground from "@/components/StarsBG";
import Image from "next/image";
import { inter } from "./layout";

export default function Home() {
  return (
    <main>
      <section className="relative mx-auto h-screen w-full max-w-7xl px-4 py-16">
        <StarsBackground />

        <div className="flex h-full w-full flex-col justify-center">
          <div className="flex flex-col justify-center gap-4">
            <p className={`font-semibold text-zinc-100/80`}>hi👋, my name is</p>
            <h1
              className={`animate-gradient w-fit -translate-x-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-8xl font-black uppercase tracking-tight text-transparent`}
            >
              Eduard Teller
            </h1>
            <h3 className="text-2xl font-medium text-zinc-100/80">
              Full Stack Developer with expertise in{" "}
              <span className="font-semibold text-zinc-100">NEXT.JS</span>
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
      <section className="bg-zinc-900">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 py-24">
          <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
            about
          </h5>
          <h2 className="text-4xl font-bold text-zinc-100/80">My Story</h2>

          <div className={`mt-4 flex gap-4 ${inter.className}`}>
            <div className="flex basis-1/3 items-center justify-center">
              <div className="relative h-72 w-72">
                <div className="animate-gradient absolute -inset-[2px] rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-red-600"></div>
                <Image
                  width={400}
                  height={400}
                  alt="Me"
                  src="/me.jpg"
                  className="rounded-lg object-cover grayscale duration-300 hover:grayscale-0"
                />
              </div>
            </div>
            <div className="flex basis-2/3 items-center justify-center px-8">
              <p className="prose prose-lg text-zinc-100/80">{`My name is Eduard Teller, and I'm a Fullstack Web Developer from Tallinn, Estonia.
              I'm currently studying IT at TalTech, Estonia's largest tech university.
              
              My journey began in 2020 when I decided to learn web development for a hobby project, and I was hooked immediately. I later pursued IT studies at TalTech, where I gained extensive knowledge about software development. I also developed skills in teamwork, essential algorithms, design patterns, and programming fundamentals.
              
              Since then, I've learned a lot about modern technologies and protocols that power the web, including TypeScript, React, Next.js, Node.js, Express, backend systems like Supabase, to name a few. `}</p>
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
            className={`mt-4 flex w-fit flex-wrap items-center justify-center gap-4 tracking-tight ${inter.className}`}
          >
            {/* first */}
            <SkillBadge title="Next" image="/next.png" alt="Next" />
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
            <SkillBadge title="Express.js" image="/express.png" alt="Express" />
            <SkillBadge title="SQL" image="/sql.png" alt="SQL" />
            <SkillBadge
              title="PostgreSQL"
              image="/postgre.png"
              alt="PostgreSQL"
            />
            <SkillBadge title="MongoDB" image="/mongo.png" alt="MongoDB" />
            <SkillBadge title="SupaBase" image="/supa.png" alt="SupaBase" />
            <SkillBadge title="Sqlite" image="/sqlite.png" alt="Sqlite" />
            <SkillBadge title="Electron" image="/electron.png" alt="Electron" />
            <SkillBadge title="Expo" image="/expo.png" alt="Expo" />
            <SkillBadge title="Python" image="/python.svg" alt="Python" />
            <SkillBadge title="C#" image="/csh.png" alt="C#" />
            <SkillBadge title=".NET" image="/net.png" alt=".NET" />
            <SkillBadge title="Git/GITHUB" image="/git.png" alt="Git/GitHub" />
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
          <h2 className="text-4xl font-bold text-zinc-100/80">Stuff I Built</h2>
        </div>
      </section>
      <section className="bg-zinc-900">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-4 py-24">
          <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
            education
          </h5>
          <h2 className="text-4xl font-bold text-zinc-100/80">I Studied At</h2>
        </div>
      </section>
      <section className="bg-zinc-900">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-4 py-24">
          <h5 className="mx-auto w-fit text-sm font-bold uppercase text-blue-600">
            contact
          </h5>
          <h2 className="text-4xl font-bold text-zinc-100/80">{`Let's Connect`}</h2>
        </div>
      </section>
    </main>
  );
}
