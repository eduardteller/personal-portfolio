const Sandbox = () => {
  return (
    <>
      <div className="group relative cursor-pointer">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 opacity-0 blur transition duration-700 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="relative flex justify-start rounded-lg bg-zinc-950 px-8 py-6 leading-none ring-1 ring-zinc-400 duration-700 group-hover:ring-transparent group-hover:duration-200">
          <p className="text-zinc-400">Glowing Gradient Border</p>
        </div>
      </div>
      <div className="group relative cursor-pointer">
        <div className="absolute inset-0 rounded-lg bg-red-500 opacity-0 group-hover:opacity-100"></div>
        <div className="relative flex justify-start rounded-lg bg-transparent px-8 py-6 leading-none ring-1 ring-zinc-400 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:bg-zinc-950">
          <p className="text-zinc-400">Glowing Gradient Border</p>
        </div>
      </div>
      <div className="group relative cursor-pointer">
        <div className="relative flex justify-start rounded-lg bg-gradient-to-br from-zinc-900/80 to-transparent px-8 py-6 leading-none ring-1 ring-zinc-400 duration-200 group-hover:bg-zinc-900/80">
          <p className="text-zinc-400">Glowing Gradient Border</p>
        </div>
      </div>
    </>
  );
};

export default Sandbox;
