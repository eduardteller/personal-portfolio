import StarsBackground from "@/components/StarsBG";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <StarsBackground />
      <div className="absolute left-0 top-0 h-20 w-full from-[#2b001f] via-[#1a002b] to-black"></div>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex w-fit flex-col justify-center gap-2">
          <h1 className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-rose-600 bg-clip-text text-7xl font-black tracking-tight text-transparent">
            Eduard Teller
          </h1>
          <h3 className="text-3xl font-semibold text-white/60">
            <span className="text-blue-400">Full Stack Developer</span> with
            expertise in Next.js and React
          </h3>
        </div>
      </div>
    </div>
  );
}
