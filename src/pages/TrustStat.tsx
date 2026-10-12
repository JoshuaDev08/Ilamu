import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 100,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    value: 50,
    suffix: "+",
    label: "Satisfied Clients",
  },
  {
    value: 100,
    suffix: "%",
    label: "Commitment to Quality",
  },
];

type CountUpProps = {
  value: number;
  suffix?: string;
};

const CountUp = ({ value, suffix = "" }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    return `${Math.round(latest)}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });

    return controls.stop;
  }, [isInView, count, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const TrustStats = () => {
  return (
    <section
      aria-label="Company statistics"
      className="
        relative
        z-20
        overflow-hidden
        border-t
        border-neutral-content/10
        bg-neutral
      "
    >
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-32
          w-1/2
          -translate-x-1/2
          bg-primary/5
          blur-3xl
        "
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.35,
        }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-2
          px-6
          lg:grid-cols-4
          lg:px-8
        "
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            className={`
              relative
              flex
              min-h-[125px]
              items-center
              justify-center
              gap-4
              px-4
              py-7
              text-center
              sm:min-h-[135px]
              sm:text-left

              ${index % 2 === 0 ? "border-r border-neutral-content/10" : ""}

              ${
                index < 2
                  ? "border-b border-neutral-content/10 lg:border-b-0"
                  : ""
              }

              ${
                index !== stats.length - 1
                  ? "lg:border-r lg:border-neutral-content/10"
                  : "lg:border-r-0"
              }
            `}
          >
            <strong
              className="
                font-['Manrope']
                text-3xl
                font-extrabold
                leading-none
                tracking-[-0.03em]
                text-accent
                sm:text-4xl
              "
            >
              <CountUp value={stat.value} suffix={stat.suffix} />
            </strong>

            <span
              className="
                max-w-[120px]
                font-['Inter']
                text-[11px]
                font-medium
                leading-5
                text-neutral-content/65
                sm:text-xs
              "
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TrustStats;
