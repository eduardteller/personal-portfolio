"use client";

import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "Java Spring",
        4000,
        "Next.JS",
        4000,
        ".NET",
        4000,
        "React Native",
        4000,
      ]}
      wrapper="span"
      className="font-semibold text-zinc-100"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default Typewriter;
