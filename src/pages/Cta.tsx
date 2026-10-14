import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section
      id="cta"
      className="
        relative
        overflow-hidden
        bg-primary
        py-16
        text-primary-content
        sm:py-20
        lg:py-24
      "
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-20
          h-72
          w-72
          rounded-full
          bg-white/10
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          left-10
          h-64
          w-64
          rounded-full
          bg-accent/10
          blur-[100px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          gap-8
          px-6
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:px-8
        "
      >
        {/* Copy */}
        <div className="max-w-2xl">
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
              text-accent
            "
          >
            <span className="h-[2px] w-7 bg-accent" />
            Let's build your vision
          </div>

          <h2
            className="
              font-['Manrope']
              text-[clamp(2.2rem,5vw,3.5rem)]
              font-extrabold
              leading-[1.05]
              tracking-[-0.04em]
              text-primary-content
            "
          >
            Ready to Build Something That Lasts?
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              font-['Inter']
              text-[15px]
              leading-7
              text-primary-content/75
              sm:text-base
            "
          >
            Tell us about your vision and let ILAMU Construction help turn it
            into reality.
          </p>
        </div>

        {/* Actions */}
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.15,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            w-full
            flex-col
            gap-3
            sm:w-auto
            sm:flex-row
          "
        >
          <motion.a
            href="#contact"
            whileHover={{
              y: -2,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              btn
              border-none
              bg-base-100
              px-6
              font-['Manrope']
              text-xs
              font-bold
              text-base-content
              shadow-lg
              hover:bg-base-200
            "
          >
            Request a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              btn
              border
              border-primary-content/35
              bg-transparent
              px-6
              font-['Manrope']
              text-xs
              font-bold
              text-primary-content
              hover:border-primary-content/60
              hover:bg-primary-content/10
            "
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
