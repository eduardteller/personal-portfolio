"use client";

import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Next.JS",
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        "React Native",
        4000,
        "Electron",
        4000,
        "Expo",
        4000,
        "Python",
        4000,
        ".NET",
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
