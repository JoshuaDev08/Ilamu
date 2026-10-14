import { motion } from "motion/react";
import {
  ClipboardCheck,
  DraftingCompass,
  FileText,
  HardHat,
  SearchCheck,
  KeyRound,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    text: "We listen closely, understand your goals, and define the project direction.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Planning & Design",
    text: "We translate your ideas into a clear and practical construction plan.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Costing & Proposal",
    text: "A transparent scope, realistic budget, and clear project expectations.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Construction",
    text: "Our team executes the approved plan with discipline and craftsmanship.",
    icon: HardHat,
  },
  {
    number: "05",
    title: "Quality Inspection",
    text: "Every major detail is reviewed before the project moves to completion.",
    icon: SearchCheck,
  },
  {
    number: "06",
    title: "Project Turnover",
    text: "A complete and confident handover of your finished project.",
    icon: KeyRound,
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
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

const Process = () => {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        bg-base-200
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Background Pattern */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          top-16
          h-80
          w-80
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          px-6
          lg:px-8
        "
      >
        {/* Header */}
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
          className="
            mb-14
            flex
            flex-col
            gap-6
            lg:mb-16
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
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
                text-primary
              "
            >
              <span className="h-[2px] w-7 bg-accent" />
              Our process
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
              From Vision to Reality
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
              A clear, collaborative process that keeps every phase organized,
              transparent, and focused on delivering quality results.
            </p>
          </div>

          <div
            className="
              hidden
              font-['Manrope']
              text-[11px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-base-content/30
              lg:block
            "
          >
            6 Steps to Completion
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            relative
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {processSteps.map(({ number, title, text, icon: Icon }, index) => (
            <motion.article
              key={number}
              variants={cardVariants}
              className="
                  card
                  group
                  relative
                  overflow-hidden
                  border
                  border-base-300
                  bg-base-100
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:shadow-md
                "
            >
              {/* Large background number */}
              <span
                className="
                    pointer-events-none
                    absolute
                    -right-2
                    -top-5
                    font-['Manrope']
                    text-[88px]
                    font-extrabold
                    leading-none
                    tracking-[-0.08em]
                    text-base-content/[0.035]
                    transition-colors
                    duration-300
                    group-hover:text-primary/[0.05]
                  "
              >
                {number}
              </span>

              <div className="card-body relative p-6 sm:p-7">
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
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
                        border-primary/15
                        bg-primary/10
                        text-primary
                        transition-all
                        duration-300
                        group-hover:border-primary
                        group-hover:bg-primary
                        group-hover:text-primary-content
                      "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <span
                    className="
                        font-['Manrope']
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-base-content/35
                      "
                  >
                    Step {number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3
                    className="
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
                        text-base-content/55
                      "
                  >
                    {text}
                  </p>
                </div>

                {/* Bottom Progress */}
                <div className="mt-7 flex items-center gap-3">
                  <div
                    className="
                        h-[2px]
                        flex-1
                        overflow-hidden
                        bg-base-300
                      "
                  >
                    <div
                      className="
                          h-full
                          w-0
                          bg-accent
                          transition-all
                          duration-500
                          group-hover:w-full
                        "
                    />
                  </div>

                  <span
                    className="
                        font-['Inter']
                        text-[10px]
                        font-semibold
                        text-base-content/30
                      "
                  >
                    {index + 1}/{processSteps.length}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Process Line */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "left",
          }}
          className="
            mt-12
            hidden
            h-px
            w-full
            bg-gradient-to-r
            from-primary
            via-accent
            to-primary/10
            lg:block
          "
        />
      </div>
    </section>
  );
};

export default Process;
