import Comet from "./Comet";

interface StarsBackgroundProps {
  count?: number;
}

const StarsBackground = ({ count = 250 }: StarsBackgroundProps) => {
  const stars = generateStars(count);

  return (
    <div className="pointer-events-none fixed left-0 top-0 -z-[1] h-full w-full bg-zinc-950">
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        preserveAspectRatio="none"
      >
        {stars.map((star, index) => (
          <circle
            key={index}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.radius}
            fill="white"
            opacity={star.initialOpacity}
          >
            <animate
              attributeName="opacity"
              values={`${star.initialOpacity};${star.minOpacity};${star.initialOpacity}`}
              dur={`${star.duration}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
      <Comet />
    </div>
  );
};

function generateStars(count: number) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    radius: Math.random() * 0.8 + 0.2, // 0.2-1.0 pixels
    initialOpacity: Math.random() * 0.7 + 0.3, // 0.3-1.0
    minOpacity: Math.random() * 0.3,
    duration: Math.random() * 1.5 + 0.5, // 0.5-2.0 seconds
  }));
}

export default StarsBackground;
