import { motion } from "motion/react";
import {
  BadgeCheck,
  Clock3,
  Cross,
  Handshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Quality Craftsmanship",
    text: "Skilled hands, proven materials, and exacting standards in every detail.",
  },
  {
    icon: BadgeCheck,
    title: "Integrity & Transparency",
    text: "Clear communication and honest guidance from proposal to turnover.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Responsible practices protect our people, partners, and every job site.",
  },
  {
    icon: Clock3,
    title: "Reliable Project Delivery",
    text: "Disciplined planning keeps your project moving with purpose.",
  },
  {
    icon: Handshake,
    title: "Client-Focused Approach",
    text: "We listen first, collaborate closely, and build around your goals.",
  },
  {
    icon: Cross,
    title: "Faith & Purpose",
    text: "Our work is grounded in service, stewardship, and lasting value.",
  },
];

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      id="why"
      className="
        relative
        overflow-hidden
        bg-neutral
        py-20
        text-neutral-content
        sm:py-24
        lg:py-28
      "
    >
      {/* Blueprint pattern */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          [background-size:44px_44px]
        "
      />

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-24
          h-80
          w-80
          rounded-full
          bg-primary/10
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          right-0
          h-72
          w-72
          rounded-full
          bg-accent/5
          blur-[100px]
        "
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Heading */}
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.65,
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
              text-accent
            "
          >
            <span className="h-[2px] w-7 bg-accent" />
            The ILAMU difference
          </div>

          <h2
            className="
              font-['Manrope']
              text-[clamp(2.3rem,5vw,3.5rem)]
              font-extrabold
              leading-[1.06]
              tracking-[-0.04em]
              text-neutral-content
            "
          >
            Why Build With ILAMU?
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              font-['Inter']
              text-[15px]
              leading-7
              text-neutral-content/60
              sm:text-base
            "
          >
            Your vision deserves a partner who treats every detail, deadline,
            and commitment with care.
          </p>
        </motion.div>

        {/* Benefits */}
        {/* Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
    grid
    grid-cols-1
    gap-4
    md:grid-cols-2
    lg:grid-cols-3
  "
        >
          {benefits.map(({ icon: Icon, title, text }) => (
            <motion.article
              key={title}
              variants={itemVariants}
              className="
        card
        group
        relative
        overflow-hidden
        border
        border-neutral-content/10
        bg-neutral-content/[0.035]
        shadow-none

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:border-primary/30
        hover:bg-neutral-content/[0.06]
      "
            >
              {/* Hover highlight */}
              <div
                className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-24
          bg-gradient-to-b
          from-neutral-content/[0.08]
          to-transparent

          opacity-0
          transition-opacity
          duration-300

          group-hover:opacity-100
        "
              />

              <div
                className="
          card-body
          relative
          flex-row
          items-start
          gap-5
          p-6
          sm:p-7
        "
              >
                {/* Icon */}
                <div
                  className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center

            rounded-field

            border
            border-accent/30

            bg-accent/10
            text-accent

            transition-all
            duration-300
            ease-out

            group-hover:-rotate-3
            group-hover:scale-105
            group-hover:border-primary
            group-hover:bg-primary
            group-hover:text-primary-content
          "
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div
                  className="
            min-w-0

            transition-transform
            duration-300
            ease-out

            group-hover:-translate-y-1
          "
                >
                  <h3
                    className="
              card-title
              font-['Manrope']
              text-[16px]
              font-bold
              leading-snug
              text-neutral-content

              transition-colors
              duration-300

              group-hover:text-white
            "
                  >
                    {title}
                  </h3>

                  <p
                    className="
              mt-2
              font-['Inter']
              text-sm
              leading-6
              text-neutral-content/55

              transition-colors
              duration-300

              group-hover:text-neutral-content/70
            "
                  >
                    {text}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="
          absolute
          bottom-0
          left-0

          h-[3px]
          w-full

          origin-left
          scale-x-0

          bg-accent

          transition-transform
          duration-300
          ease-out

          group-hover:scale-x-100
        "
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
