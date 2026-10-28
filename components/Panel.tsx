interface Props {
  children: React.ReactNode;
}

const Panel = ({ children }: Props) => {
  return (
    <section className="reveal mx-auto w-full max-w-7xl px-4">
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-16 sm:px-8 md:py-20">
        {children}
      </div>
    </section>
  );
};

export default Panel;
