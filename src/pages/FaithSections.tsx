import { motion } from "motion/react";
import FaithImage from "../assets/faith.jpg";

const FaithSection = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-neutral
        py-24
        text-neutral-content
        sm:py-28
        lg:py-32
      "
    >
      {/* Background image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: `url(${FaithImage})`,
        }}
      />

      {/* Dark overlay */}
      <div
        className="
          absolute
          inset-0
          bg-neutral/80
        "
      />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-neutral
          to-transparent
        "
      />

      {/* Soft primary glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-80
          w-80
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 28,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          mx-auto
          max-w-4xl
          px-6
          text-center
          lg:px-8
        "
      >
        {/* Eyebrow */}
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.1,
            duration: 0.5,
          }}
          className="
            mb-5
            flex
            items-center
            justify-center
            gap-3
            font-['Manrope']
            text-[11px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-accent
          "
        >
          <span className="h-[2px] w-7 bg-accent" />
          Built on a stronger foundation
          <span className="h-[2px] w-7 bg-accent" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.18,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-['Manrope']
            text-[clamp(2.4rem,6vw,4.4rem)]
            font-extrabold
            leading-[1.03]
            tracking-[-0.04em]
            text-neutral-content
          "
        >
          We Build With Excellence,
          <br />
          Integrity, and{" "}
          <em
            className="
              font-serif
              font-normal
              italic
              text-accent
            "
          >
            Purpose.
          </em>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.28,
            duration: 0.6,
          }}
          className="
            mx-auto
            mt-7
            max-w-2xl
            font-['Inter']
            text-[15px]
            leading-7
            text-neutral-content/65
            sm:text-base
            sm:leading-8
          "
        >
          For us, construction is more than building structures. It is about
          serving people, honoring commitments, and creating something
          meaningful that will stand for generations.
        </motion.p>

        {/* Quote */}
        <motion.blockquote
          initial={{
            opacity: 0,
            scale: 0.97,
            y: 18,
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
            delay: 0.38,
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-10
            max-w-2xl
            border-l-[3px]
            border-accent
            bg-neutral-content/[0.05]
            px-6
            py-5
            text-left
            backdrop-blur-md
            sm:px-7
          "
        >
          <p
            className="
              font-serif
              text-[17px]
              italic
              leading-7
              text-neutral-content/90
              sm:text-[19px]
              sm:leading-8
            "
          >
            “Commit to the LORD whatever you do, and He will establish your
            plans.”
          </p>

          <cite
            className="
              mt-4
              block
              font-['Manrope']
              text-[11px]
              font-semibold
              not-italic
              tracking-[0.08em]
              text-accent
            "
          >
            — Proverbs 16:3
          </cite>
        </motion.blockquote>
      </motion.div>
    </section>
  );
};

export default FaithSection;
