import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import Project1 from "../assets/Gallery/projects-1.webp";
import Project2 from "../assets/Gallery/projects-2.webp";
import Project3 from "../assets/Gallery/projects-3.webp";
import Project4 from "../assets/Gallery/projects-4.webp";

const projects = [
  {
    number: "01",
    image: Project1,
    category: "Residential",
    title: "Modern Family Residence",
    location: "Lipa City, Batangas",
    year: "2025",
    description:
      "A thoughtfully planned family home built around comfort, functionality, and lasting quality.",
  },
  {
    number: "02",
    image: Project2,
    category: "Commercial",
    title: "Atria Business Center",
    location: "Makati City",
    year: "2024",
    description:
      "A modern commercial development designed to support efficient operations and long-term business growth.",
  },
  {
    number: "03",
    image: Project3,
    category: "Residential",
    title: "Courtyard House",
    location: "Tagaytay City",
    year: "2025",
    description:
      "A contemporary residence balancing natural light, open living spaces, and connection to its surroundings.",
  },
  {
    number: "04",
    image: Project4,
    category: "Design & Build",
    title: "Northpoint Offices",
    location: "Quezon City",
    year: "2024",
    description:
      "A complete design-and-build workplace shaped around efficiency, professional identity, and everyday usability.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectVariants = {
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

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-base-100
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Background detail */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
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
            amount: 0.35,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-12
            flex
            flex-col
            gap-7
            lg:mb-14
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
              Featured projects
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
              Our Work Speaks for Itself
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
              Explore projects built through craftsmanship, planning, and
              attention to detail.
            </p>
          </div>

          <a
            href="#contact"
            className="
              btn
              btn-neutral
              hidden
              font-['Manrope']
              text-xs
              font-bold
              lg:inline-flex
            "
          >
            View All Projects
          </a>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            grid
            gap-4
            md:grid-cols-2
            lg:gap-5
          "
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={projectVariants}
              className={`
                group
                relative
                overflow-hidden
                border
                border-base-300
                bg-neutral

                ${index === 0 || index === 3 ? "md:col-span-2" : ""}
              `}
            >
              <div
                className="
                  relative
                  min-h-[390px]
                  overflow-hidden
                  sm:min-h-[440px]
                  lg:min-h-[500px]
                "
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={`${project.title}, ${project.category} project`}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.035]
                  "
                />

                {/* Main overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-neutral
                    via-neutral/45
                    to-transparent
                  "
                />

                {/* Subtle default tint */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-neutral/10
                    transition-colors
                    duration-500
                    group-hover:bg-transparent
                  "
                />

                {/* Top Meta */}
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    z-10
                    flex
                    items-start
                    justify-between
                    p-5
                    sm:p-6
                  "
                >
                  <span
                    className="
                      font-['Manrope']
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-white/60
                    "
                  >
                    {project.number}
                  </span>

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      transition-all
                      duration-300
                      group-hover:border-primary
                      group-hover:bg-primary
                      group-hover:text-primary-content
                    "
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Bottom content */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-10
                    p-5
                    sm:p-6
                    lg:p-8
                  "
                >
                  <div
                    className="
                      mb-3
                      flex
                      flex-wrap
                      items-center
                      gap-x-3
                      gap-y-1
                    "
                  >
                    <span
                      className="
                        font-['Manrope']
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-accent
                      "
                    >
                      {project.category}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/35" />

                    <span
                      className="
                        font-['Inter']
                        text-[11px]
                        text-white/55
                      "
                    >
                      {project.location}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-white/35" />

                    <span
                      className="
                        font-['Inter']
                        text-[11px]
                        text-white/55
                      "
                    >
                      {project.year}
                    </span>
                  </div>

                  <h3
                    className="
                      max-w-2xl
                      font-['Manrope']
                      text-2xl
                      font-bold
                      leading-tight
                      tracking-[-0.025em]
                      text-white
                      sm:text-3xl
                      lg:text-4xl
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      font-['Inter']
                      text-sm
                      leading-6
                      text-white/60
                      sm:text-[15px]
                    "
                  >
                    {project.description}
                  </p>

                  {/* Animated accent */}
                  <div
                    className="
                      mt-6
                      h-[2px]
                      w-full
                      origin-left
                      scale-x-0
                      bg-accent
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-x-100
                    "
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-7 lg:hidden">
          <a
            href="#contact"
            className="
              btn
              btn-neutral
              w-full
              font-['Manrope']
              text-xs
              font-bold
            "
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
