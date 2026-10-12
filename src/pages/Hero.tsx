import { motion } from "motion/react";
import { ArrowRight, Cross, ChevronDown } from "lucide-react";
import HeroImage from "../assets/hero.jpeg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 30,
    y: 15,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.25,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-neutral
        text-neutral-content
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      />

      {/* Main Dark Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-neutral
          via-neutral/90
          to-neutral/40
        "
      />

      {/* Bottom Gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-52
          bg-gradient-to-t
          from-neutral/80
          to-transparent
        "
      />
      {/* Blueprint Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          [background-size:46px_46px]
        "
      />

      {/* Soft Brand Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-[15%]
          top-[20%]
          h-72
          w-72
          rounded-full
          bg-primary/10
          blur-[100px]
        "
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          items-end
          gap-12
          px-6
          pb-20
          pt-36
          lg:grid-cols-[1.45fr_0.65fr]
          lg:gap-16
          lg:px-8
          lg:pb-28
          lg:pt-40
        "
      >
        {/* Left Content */}
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariants}
            className="
              mb-6
              flex
              items-center
              gap-3
              font-['Manrope']
              text-[11px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-accent
              sm:text-xs
            "
          >
            <span className="h-[2px] w-7 bg-accent" />

            <span>Building with purpose</span>

            <span className="h-1 w-1 rounded-full bg-accent" />

            <span>Built with faith</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUpVariants}
            className="
              max-w-4xl
              font-['Manrope']
              text-[clamp(2.75rem,7vw,5rem)]
              font-extrabold
              leading-[0.98]
              tracking-[-0.045em]
              text-white
            "
          >
            Building Strong Foundations.
            <span className="mt-2 block text-primary">
              Creating Lasting Legacies.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            className="
              mt-7
              max-w-2xl
              font-['Inter']
              text-[15px]
              leading-7
              text-white/70
              sm:text-[17px]
              sm:leading-8
            "
          >
            At ILAMU Construction, we transform ideas into spaces built with
            quality, integrity, and purpose. From concept to completion, we
            create structures that stand strong for generations.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUpVariants}
            className="
              mt-9
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <motion.a
              href="#contact"
              whileHover={{
                y: -3,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                btn
                btn-primary
                min-h-12
                px-6
                font-['Manrope']
                text-[13px]
                font-bold
              "
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                btn
                min-h-12
                border-white/30
                bg-white/5
                px-6
                font-['Manrope']
                text-[13px]
                font-bold
                text-white
                backdrop-blur-sm
                hover:border-accent
                hover:bg-white/10
                hover:text-accent
              "
            >
              View Our Projects
            </motion.a>
          </motion.div>
        </div>

        {/* Scripture Card */}
        <motion.aside
          variants={cardVariants}
          whileHover={{
            y: -5,
          }}
          className="
            relative
            overflow-hidden
            border
            border-white/15
            border-l-[3px]
            border-l-accent
            bg-neutral/55
            p-7
            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
            backdrop-blur-xl
            sm:p-8
            lg:mb-2
          "
        >
          {/* Highlight */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-20
              bg-gradient-to-b
              from-white/[0.06]
              to-transparent
            "
          />

          {/* Accent Corner */}
          <div
            className="
              absolute
              right-0
              top-0
              h-0
              w-0
              border-l-[26px]
              border-t-[26px]
              border-l-transparent
              border-t-primary
            "
          />

          {/* Faith Icon */}
          <div
            className="
              absolute
              right-6
              top-6
              text-accent/70
            "
          >
            <Cross className="h-5 w-5" />
          </div>

          <span
            className="
              relative
              block
              font-['Manrope']
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-accent
            "
          >
            Our Foundation
          </span>

          <blockquote
            className="
              relative
              mt-5
              font-serif
              text-[17px]
              italic
              leading-7
              text-white/90
              sm:text-[19px]
              sm:leading-8
            "
          >
            “Unless the Lord builds the house,
            <br />
            the builders labor in vain.”
          </blockquote>

          <cite
            className="
              relative
              mt-5
              block
              font-['Manrope']
              text-[11px]
              font-semibold
              not-italic
              tracking-[0.08em]
              text-accent
            "
          >
            — Psalm 127:1
          </cite>
        </motion.aside>
      </motion.div>

      {/* Scroll Cue */}
      <motion.a
        href="#about"
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.15,
          duration: 0.6,
        }}
        className="
          absolute
          bottom-5
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          font-['Inter']
          text-[9px]
          uppercase
          tracking-[0.16em]
          text-white/55
          lg:flex
        "
      >
        <span>Scroll to discover</span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-4 w-4 text-accent" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
