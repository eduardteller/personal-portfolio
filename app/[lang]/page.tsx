import ContactForm from "@/components/ContactForm";
import CopyMail from "@/components/EmailComponent";
import ExperienceCard from "@/components/ExperienceCard";
import LanguageSwitch from "@/components/LanguageSwitch";
import LinkBadge from "@/components/LinkBadge";
import Panel from "@/components/Panel";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import SkillBadgeSmall from "@/components/SkillBadgeSmall";
import StarsBackground from "@/components/StarsBG";
import Typewriter from "@/components/Typewriter";
import { isEnabledLocale, isMultilingual } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { FileUser } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
});

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: requestedLang } = await params;
  const lang = isEnabledLocale(requestedLang) ? requestedLang : "en";
  const t = getDictionary(lang);

  return (
    <>
      <main className="flex flex-col gap-6">
        <section className="relative mx-auto h-screen w-full max-w-7xl px-4 py-16">
          <StarsBackground />

          {isMultilingual && (
            <div className="absolute right-4 top-6">
              <LanguageSwitch lang={lang} label={t.languageSwitch} />
            </div>
          )}

          <div className="flex h-full w-full flex-col justify-center">
            <div className="flex flex-col justify-center gap-4">
              <p className={`font-semibold text-zinc-100/80`}>
                {t.hero.greeting}
              </p>
              <h1
                className={`animate-gradient w-fit -translate-x-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-8xl font-black uppercase tracking-tight text-transparent max-sm:text-6xl`}
              >
                Eduard Teller
              </h1>
              <h3 className="text-2xl font-medium text-zinc-100/80 max-sm:text-xl">
                {t.hero.tagline}{" "}
                {/* <span className="font-semibold text-zinc-100">NEXT.JS</span> */}
                <Typewriter />
              </h3>
              <div className="flex gap-4">
                <LinkBadge />
              </div>
            </div>
          </div>
        </section>
        <Panel>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

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
              className={`${inter.className} flex flex-col justify-center gap-4 sm:px-8 md:basis-2/3`}
            >
              <div className="prose prose-lg text-zinc-100/80">
                <span>
                  {t.about.hi}{" "}
                  <span className="font-semibold duration-150 hover:text-blue-600">
                    Eduard Teller
                  </span>
                  , {t.about.rolePrefix}
                  <span className="font-semibold duration-150 hover:text-purple-600">
                    {t.about.role}
                  </span>{" "}
                  {t.about.placePrefix}
                  <span className="font-semibold duration-150 hover:text-red-600">
                    {t.about.place}
                  </span>
                  .{" "}
                </span>
                {t.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
        </Panel>
        <Panel>
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4">
            <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

            <div
              className={`mt-12 flex w-full flex-col items-center justify-center gap-8 tracking-tight ${inter.className}`}
            >
              {/* Frontend Development */}
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-bold uppercase text-zinc-100/90">
                  {t.skills.frontend}
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
                  {t.skills.backend}
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
                  {t.skills.databases}
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
                <h3 className="font-bold uppercase text-zinc-100/90">
                  {t.skills.devops}
                </h3>
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
                  {t.skills.native}
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
                  {t.skills.tools}
                </h3>
                <div className="flex w-fit flex-wrap items-center justify-center gap-4">
                  <SkillBadge title="Linux" image="/linux.svg" alt="Linux" />
                  <SkillBadge title="Windows" image="/w.png" alt="Windows" />
                </div>
              </div>

              {/* Testing */}
              <div className="flex w-full flex-col items-center gap-4">
                <h3 className="font-bold uppercase text-zinc-100/90">
                  {t.skills.testing}
                </h3>
                <div className="flex w-fit flex-wrap items-center justify-center gap-4">
                  <SkillBadge title="Jest" image="/jest.svg" alt="Jest" />
                  <SkillBadge title="Vitest" image="/vitest.png" alt="Vitest" />
                  <SkillBadge title="Junit" image="/junit.png" alt="Junit" />
                </div>
              </div>
            </div>
          </div>
        </Panel>
        <Panel>
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
          />
          <div
            className={`mt-12 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 ${inter.className}`}
          >
            <ProjectCard
              link="https://koolitech.ee"
              title={t.projects.koolitech.title}
              desc={t.projects.koolitech.desc}
              image="/legacy/kool.png"
              alt="KooliTech"
              github="https://github.com/eduardteller/koolitech-dashboard"
              demo="https://koolitech.ee"
              codeLabel={t.projects.viewCode}
              demoLabel={t.projects.liveDemo}
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
              title={t.projects.kahoot.title}
              desc={t.projects.kahoot.desc}
              image="/legacy/kahoot-4.png"
              alt="Kahoot"
              github="https://github.com/eduardteller/kahoot-remake"
              demo="https://kahoot-clone-1a7dcaeaf061.herokuapp.com"
              codeLabel={t.projects.viewCode}
              demoLabel={t.projects.liveDemo}
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
              title={t.projects.events.title}
              desc={t.projects.events.desc}
              image="/legacy/events_managment.png"
              alt={t.projects.events.title}
              github="https://github.com/eduardteller/yrituste-haldamissysteem"
              codeLabel={t.projects.viewCode}
              demoLabel={t.projects.liveDemo}
            >
              <SkillBadgeSmall image="/java.webp" title="Java" />
              <SkillBadgeSmall image="/spring.svg" title="Java Spring" />
              <SkillBadgeSmall image="/react.png" title="React" />
              <SkillBadgeSmall image="/ts.png" title="TypeScript" />
              <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
            </ProjectCard>
            <ProjectCard
              link="https://github.com/eduardteller/sol-scanner"
              title={t.projects.solana.title}
              desc={t.projects.solana.desc}
              image="/legacy/bot.png"
              github="https://github.com/eduardteller/sol-scanner"
              alt="bot"
              codeLabel={t.projects.viewCode}
              demoLabel={t.projects.liveDemo}
            >
              <SkillBadgeSmall image="/python.svg" title="Python" />
            </ProjectCard>
            <ProjectCard
              link="https://byteboard.vercel.app/"
              title={t.projects.reddit.title}
              desc={t.projects.reddit.desc}
              image="/legacy/reddit-4.png"
              alt="Reddit"
              github="https://github.com/eduardteller/byteboard"
              demo="https://byteboard.vercel.app/"
              codeLabel={t.projects.viewCode}
              demoLabel={t.projects.liveDemo}
            >
              <SkillBadgeSmall image="/react.png" title="React" />
              <SkillBadgeSmall image="/ts.png" title="TypeScript" />
              <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
              <SkillBadgeSmall image="/supa.png" title="Supabase" />
            </ProjectCard>
            <ProjectCard
              link="https://neosec.tech"
              title={t.projects.neosec.title}
              desc={t.projects.neosec.desc}
              image="/legacy/neo2.png"
              alt="NeoSec"
              github="https://github.com/eduardteller/neosec-landing"
              demo="https://neosec.tech"
              codeLabel={t.projects.viewCode}
              demoLabel={t.projects.liveDemo}
            >
              <SkillBadgeSmall image="/next.png" title="NextJS" />
              <SkillBadgeSmall image="/react.png" title="React" />
              <SkillBadgeSmall image="/ts.png" title="TypeScript" />
              <SkillBadgeSmall image="/tail.png" title="TailwindCSS" />
            </ProjectCard>
          </div>
        </Panel>
        <Panel>
          <SectionHeading
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
          />

          <div
            className={`mt-12 flex w-full max-w-4xl flex-col gap-12 ${inter.className}`}
          >
            <div className="flex flex-col gap-4">
              <h3 className="font-bold uppercase text-zinc-100/90">
                {t.experience.experience}
              </h3>
              <ExperienceCard
                current
                logo="/helmes.png"
                logoFill
                alt="Helmes"
                title={t.experience.helmes.title}
                org={t.experience.helmes.org}
                location={t.experience.helmes.location}
                date={t.experience.helmes.date}
              />
              <ExperienceCard
                logo="/AI-Eesti-dark.svg"
                alt="AI Eesti"
                title={t.experience.aiEesti.title}
                org="AI Eesti"
                date={t.experience.aiEesti.date}
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold uppercase text-zinc-100/90">
                {t.experience.education}
              </h3>
              <ExperienceCard
                logo="/taltech.png"
                alt="TalTech"
                title={t.experience.taltech.title}
                org={t.experience.taltech.org}
                date={t.experience.taltech.date}
              >
                {t.experience.taltech.courses.map((course) => (
                  <SkillBadgeSmall key={course} title={course} />
                ))}
              </ExperienceCard>
            </div>
          </div>
        </Panel>
        <Panel>
          <div className="flex w-full gap-4 max-sm:flex-col max-sm:gap-8">
            <div className="flex basis-1/2 flex-col gap-4 sm:px-8">
              <h5 className="text-sm font-bold uppercase text-blue-600">
                {t.contact.eyebrow}
              </h5>
              <h2 className="text-3xl font-bold text-zinc-100/80 md:text-4xl">
                {t.contact.title}
              </h2>
              <p
                className={`text-base font-medium text-zinc-100/60 ${inter.className}`}
              >
                {t.contact.text}
              </p>
              <CopyMail copiedText={t.contact.copied} />
            </div>
            <div className={`${inter.className} basis-1/2 sm:px-8`}>
              <ContactForm text={t.contact.form} />
            </div>
          </div>
        </Panel>
      </main>
      <footer className="py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between">
          {/* <div className="flex gap-4">
            <LinkBadge />
          </div> */}
          <p className="text-sm font-semibold text-zinc-100/60">
            © {new Date().getFullYear()} Eduard Teller. {t.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
