// components/Comet.tsx
"use client";

import { useEffect, useState } from "react";

const Comet = () => {
  const [comets, setComets] = useState<
    { id: number; x: number; y: number; angle: number }[]
  >([]);

  const generateComet = () => {
    // Random starting position and angle
    const startSide = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
    let x, y, angle;

    switch (startSide) {
      case 0: // top
        x = Math.random() * window.innerWidth;
        y = -100;
        angle = Math.random() * 180;
        break;
      case 1: // right
        x = window.innerWidth;
        y = Math.random() * window.innerHeight;
        angle = 180 + (Math.random() * 180 - 90);
        break;
      case 2: // bottom
        x = Math.random() * window.innerWidth;
        y = window.innerHeight;
        angle = Math.random() * 180 + 180;
        break;
      case 3: // left
        x = -100;
        y = Math.random() * window.innerHeight;
        angle = 0 + (Math.random() * 180 - 90);
        break;
      default:
        x = -100;
        y = Math.random() * window.innerHeight;
        angle = 0 + (Math.random() * 180 - 90);
        break;
    }

    console.log(`x: ${x}, y: ${y}, angle: ${angle}, startSide: ${startSide}`);

    return { id: Date.now(), x, y, angle };
  };

  useEffect(() => {
    const addComet = () => {
      setComets((prev) => [...prev, generateComet()]);
      // Remove comet after animation completes
      setTimeout(() => {
        setComets((prev) => prev.slice(1));
      }, 1000); // Match this with animation duration
    };

    addComet();
    const interval = setInterval(addComet, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {comets.map((comet) => (
        <div
          key={comet.id}
          className="absolute"
          style={{
            left: comet.x,
            top: comet.y,
            transform: `rotate(${comet.angle}deg)`,
          }}
        >
          <svg
            width="100"
            height="100"
            className="pointer-events-none absolute animate-comet"
          >
            <rect
              x="20"
              y="49"
              width="60"
              height="2"
              fill="url(#gradient)"
              className="origin-center"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#b4f2ff", stopOpacity: 0 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#48dcf9", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </>
  );
};

export default Comet;
