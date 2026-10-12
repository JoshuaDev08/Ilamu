import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  Hammer,
  HardHat,
  House,
  PanelsTopLeft,
  Ruler,
} from "lucide-react";

const services = [
  {
    icon: House,
    title: "Residential Construction",
    text: "Purpose-built homes crafted around the way your family lives.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    text: "Efficient, enduring spaces designed to support business growth.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    text: "Thoughtful transformations that give existing spaces new purpose.",
  },
  {
    icon: Ruler,
    title: "Design & Build",
    text: "One accountable team guiding your project from first sketch to completion.",
  },
  {
    icon: PanelsTopLeft,
    title: "Project Management",
    text: "Disciplined coordination that keeps quality, budget, and schedule aligned.",
  },
  {
    icon: HardHat,
    title: "General Construction",
    text: "Dependable execution and skilled workmanship across every project phase.",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        bg-base-200
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-120px]
          top-20
          h-72
          w-72
          rounded-full
          bg-primary/5
          blur-[100px]
        "
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 max-w-2xl lg:mb-14"
        >
          <div
            className="
              mb-4
              flex
              items-center
              gap-3
              font-['Manrope']
              text-[11px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-primary
            "
          >
            <span className="h-[2px] w-7 bg-accent" />
            Our expertise
          </div>

          <h2
            className="
              font-['Manrope']
              text-[clamp(2.3rem,5vw,3.5rem)]
              font-extrabold
              leading-[1.06]
              tracking-[-0.04em]
              text-base-content
            "
          >
            What We Build
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              font-['Inter']
              text-[15px]
              leading-7
              text-base-content/60
              sm:text-base
            "
          >
            Reliable construction solutions designed to bring your vision to
            life.
          </p>
        </motion.div>

        {/* Service Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            grid
            grid-cols-1
            border-l
            border-t
            border-base-300
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {services.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              variants={cardVariants}
              whileHover={{
                y: -6,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                group
                relative
                min-h-[300px]
                overflow-hidden
                border-b
                border-r
                border-base-300
                bg-base-100
                p-7
                transition-shadow
                duration-300
                hover:z-10
                hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                sm:p-8
              "
            >
              {/* Service number */}
              <span
                className="
                  absolute
                  right-6
                  top-6
                  font-['Manrope']
                  text-[12px]
                  font-bold
                  tracking-[0.08em]
                  text-base-content/15
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.06,
                  rotate: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  mb-7
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  border-l-[3px]
                  border-accent
                  bg-primary/10
                  text-primary
                  transition-colors
                  duration-300
                  group-hover:bg-primary
                  group-hover:text-primary-content
                "
              >
                <Icon className="h-6 w-6" />
              </motion.div>

              {/* Content */}
              <h3
                className="
                  pr-8
                  font-['Manrope']
                  text-[18px]
                  font-bold
                  leading-snug
                  text-base-content
                "
              >
                {title}
              </h3>

              <p
                className="
                  mt-3
                  max-w-sm
                  font-['Inter']
                  text-sm
                  leading-6
                  text-base-content/60
                "
              >
                {text}
              </p>

              {/* Link */}
              <motion.a
                href="#contact"
                whileHover={{
                  x: 4,
                }}
                className="
                  group/link
                  absolute
                  bottom-7
                  left-7
                  inline-flex
                  items-center
                  gap-2
                  font-['Manrope']
                  text-xs
                  font-bold
                  text-primary
                  sm:left-8
                "
              >
                Learn More
                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover/link:translate-x-1
                  "
                />
              </motion.a>

              {/* Hover accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-0
                  bg-accent
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
