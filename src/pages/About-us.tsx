import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Cross,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import AboutImage from '../assets/about.jpeg';

const values = [
  {
    label: "Integrity",
    icon: ShieldCheck,
  },
  {
    label: "Quality",
    icon: Sparkles,
  },
  {
    label: "Safety",
    icon: Check,
  },
  {
    label: "Commitment",
    icon: Star,
  },
  {
    label: "Faith",
    icon: Cross,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-base-100
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Soft background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-100px]
          top-20
          h-80
          w-80
          rounded-full
          bg-primary/5
          blur-[100px]
        "
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-center
          gap-14
          px-6
          lg:grid-cols-2
          lg:gap-20
          lg:px-8
        "
      >
        {/* Left Visual */}
        <motion.div
          variants={imageVariants}
          className="
            relative
            mx-auto
            w-full
            max-w-xl
            lg:mx-0
          "
        >
          {/* Architectural back plate */}
          <div
            className="
              absolute
              bottom-[-20px]
              right-[-18px]
              h-[85%]
              w-[85%]
              bg-secondary
            "
          />

          {/* Decorative line */}
          <div
            className="
              absolute
              -left-5
              -top-5
              h-20
              w-28
              border-l-2
              border-t-2
              border-primary
              opacity-60
            "
          />

          {/* Image */}
          <motion.div
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              relative
              z-10
              overflow-hidden
            "
          >
            <img
              src={AboutImage}
              alt="Construction professional inspecting structural steelwork"
              className="
                h-[420px]
                w-full
                object-cover
                sm:h-[500px]
                lg:h-[560px]
              "
            />

            {/* Subtle overlay */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-neutral/15
                via-transparent
                to-transparent
              "
            />
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.45,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              bottom-[-24px]
              right-[-8px]
              z-20
              flex
              items-center
              gap-4
              border-b-[3px]
              border-accent
              bg-neutral
              px-5
              py-4
              text-neutral-content
              shadow-xl
              sm:right-[-20px]
            "
          >
            <strong
              className="
                font-['Manrope']
                text-3xl
                font-extrabold
                leading-none
                text-accent
              "
            >
              10+
            </strong>

            <span
              className="
                font-['Inter']
                text-[10px]
                font-semibold
                uppercase
                leading-4
                tracking-[0.05em]
                text-neutral-content/75
              "
            >
              Years building
              <br />
              with integrity
            </span>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <div>
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariants}
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
            Who we are
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUpVariants}
            className="
              max-w-xl
              font-['Manrope']
              text-[clamp(2.3rem,5vw,3.5rem)]
              font-extrabold
              leading-[1.06]
              tracking-[-0.04em]
              text-base-content
            "
          >
            Building More Than Structures
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            variants={fadeUpVariants}
            className="
              mt-6
              max-w-xl
              font-['Inter']
              text-[15px]
              leading-7
              text-base-content/65
              sm:text-base
              sm:leading-8
            "
          >
            ILAMU Construction is committed to delivering reliable, high-quality
            construction solutions founded on integrity, craftsmanship, and
            strong relationships. We believe every project represents more than
            a structure—it represents the vision, dreams, and future of the
            people behind it.
          </motion.p>

          {/* Values */}
          <motion.div
            variants={fadeUpVariants}
            className="
              mt-8
              grid
              grid-cols-2
              gap-4
              sm:grid-cols-3
            "
          >
            {values.map(({ label, icon: Icon }) => (
              <motion.div
                key={label}
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  font-['Manrope']
                  text-xs
                  font-bold
                  text-base-content/80
                "
              >
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    border-l-[3px]
                    border-accent
                    bg-primary/10
                    text-primary
                  "
                >
                  <Icon className="h-4 w-4" />
                </span>

                {label}
              </motion.div>
            ))}
          </motion.div>

          {/* Link */}
          <motion.div variants={fadeUpVariants} className="mt-9">
            <motion.a
              href="#why"
              whileHover={{
                x: 4,
              }}
              className="
                group
                inline-flex
                items-center
                gap-3
                border-b-2
                border-accent
                pb-2
                font-['Manrope']
                text-[13px]
                font-bold
                text-secondary
                transition-colors
                duration-300
                hover:text-primary
              "
            >
              Learn More About Us
              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
