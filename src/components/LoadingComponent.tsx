import { motion } from "motion/react";

type PageLoaderProps = {
  exiting: boolean;
};

const PageLoader = ({ exiting }: PageLoaderProps) => {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: exiting ? 0 : 1,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-neutral
        text-neutral-content

        ${exiting ? "pointer-events-none" : ""}
      `}
      role="status"
      aria-live="polite"
      aria-label="Loading ILAMU Construction"
    >
      {/* Blueprint background */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.07]
          [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Large architectural circles */}
      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-white/[0.05]
          sm:h-[560px]
          sm:w-[560px]
        "
      />

      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: 1.15,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.4,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-primary/10
          sm:h-[420px]
          sm:w-[420px]
        "
      />

      {/* Soft glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          h-80
          w-80
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      {/* Corner architectural marks */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-6
          top-6
          h-12
          w-12
          border-l
          border-t
          border-white/10
          sm:left-10
          sm:top-10
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-6
          right-6
          h-12
          w-12
          border-b
          border-r
          border-white/10
          sm:bottom-10
          sm:right-10
        "
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-md
          flex-col
          items-center
          px-8
          text-center
        "
      >
        {/* Logo Mark */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-7
            flex
            h-24
            w-24
            items-center
            justify-center
          "
        >
          <svg viewBox="0 0 72 47" className="h-full w-full overflow-visible">
            <motion.path
              d="M4 37 30 8l10 11 8-9 20 23"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="text-white"
            />

            <motion.path
              d="M18 37h42M25 37V25h13v12M47 22v15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: "easeInOut",
              }}
              className="text-white/75"
            />

            <motion.path
              d="M7 41h54"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-accent"
            />
          </svg>
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{
            opacity: 0,
            y: 14,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col"
        >
          <strong
            className="
              font-['Manrope']
              text-3xl
              font-extrabold
              tracking-[0.17em]
              text-white
              sm:text-4xl
            "
          >
            ILAMU
          </strong>

          <span
            className="
              mt-2
              font-['Manrope']
              text-[9px]
              font-bold
              uppercase
              tracking-[0.42em]
              text-accent
              sm:text-[10px]
            "
          >
            Construction
          </span>
        </motion.div>

        {/* Detail line */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "center",
          }}
          className="
            my-7
            h-px
            w-28
            bg-white/15
          "
        />

        {/* Status */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.9,
          }}
          className="w-full"
        >
          <p
            className="
              font-['Inter']
              text-[11px]
              uppercase
              tracking-[0.18em]
              text-white/45
            "
          >
            Preparing your foundation
          </p>

          {/* Progress Bar */}
          <div
            className="
              relative
              mx-auto
              mt-5
              h-[2px]
              w-full
              max-w-[230px]
              overflow-hidden
              bg-white/10
            "
          >
            <motion.span
              initial={{
                x: "-100%",
              }}
              animate={{
                x: "280%",
              }}
              transition={{
                duration: 1.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-y-0
                left-0
                w-1/3
                bg-gradient-to-r
                from-transparent
                via-accent
                to-transparent
              "
            />
          </div>
        </motion.div>

        <motion.small
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 0.5,
          }}
          className="
            mt-7
            font-['Inter']
            text-[10px]
            uppercase
            tracking-[0.14em]
            text-white/30
          "
        >
          Building with purpose
        </motion.small>
      </div>

      {/* Bottom line */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: exiting ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "left",
        }}
        className="
          absolute
          bottom-0
          left-0
          h-[3px]
          w-full
          bg-accent
        "
      />
    </motion.div>
  );
};

export default PageLoader;
