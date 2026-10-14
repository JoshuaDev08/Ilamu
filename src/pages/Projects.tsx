import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import Project1 from "../assets/Gallery/projects-1.jpeg";
import Project2 from "../assets/Gallery/projects-2.jpeg";
import Project3 from "../assets/Gallery/projects-3.jpeg";
import Project4 from "../assets/Gallery/projects-4.jpeg";

const projects = [
  {
    image: Project1,
    category: "Residential",
    title: "Modern Family Residence",
    location: "Lipa City, Batangas",
    year: "2025",
  },
  {
    image: Project2,
    category: "Commercial",
    title: "Atria Business Center",
    location: "Makati City",
    year: "2024",
  },
  {
    image: Project3,
    category: "Residential",
    title: "Courtyard House",
    location: "Tagaytay City",
    year: "2025",
  },
  {
    image: Project4,
    category: "Design & Build",
    title: "Northpoint Offices",
    location: "Quezon City",
    year: "2024",
  },
];

const containerVariants = {
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
      duration: 0.5,
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
        bg-base-100
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
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
            duration: 0.5,
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

          {/* Desktop CTA */}
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

        {/* Project Grid */}
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
            auto-rows-[280px]
            grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:auto-rows-[310px]
            lg:grid-cols-3
          "
        >
          {projects.map((project, index) => {
            const layout =
              index === 0
                ? "sm:row-span-2 lg:row-span-2"
                : index === 3
                  ? "sm:col-span-2 lg:col-span-2"
                  : "";

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                className={`
                  group
                  relative
                  overflow-hidden
                  bg-neutral
                  ${layout}
                `}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={`${project.title}, ${project.category} project`}
                  loading="lazy"
                  decoding="async"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    will-change-transform
                    group-hover:scale-[1.045]
                  "
                />

                {/* Single overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-neutral/95
                    via-neutral/30
                    to-transparent
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-10
                    flex
                    items-end
                    justify-between
                    gap-5
                    p-6
                    sm:p-7
                  "
                >
                  {/* Project Info */}
                  <div
                    className="
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:-translate-y-1
                    "
                  >
                    <span
                      className="
                        mb-2
                        block
                        font-['Manrope']
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-accent
                      "
                    >
                      {project.category}
                    </span>

                    <h3
                      className="
                        font-['Manrope']
                        text-lg
                        font-bold
                        leading-tight
                        text-white
                        sm:text-xl
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        font-['Inter']
                        text-xs
                        text-white/65
                      "
                    >
                      {project.location}
                    </p>
                  </div>

                  {/* Year + Arrow */}
                  <div className="flex flex-col items-end gap-3">
                    <span
                      className="
                        font-['Inter']
                        text-[11px]
                        font-medium
                        text-white/60
                      "
                    >
                      {project.year}
                    </span>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        translate-y-1
                        items-center
                        justify-center
                        border
                        border-white/20
                        bg-white/10
                        text-white
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Gold hover line */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    z-20
                    h-[3px]
                    w-0
                    bg-accent
                    transition-[width]
                    duration-300
                    ease-out
                    group-hover:w-full
                  "
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="
            btn
            btn-neutral
            mt-7
            w-full
            font-['Manrope']
            text-xs
            font-bold
            lg:hidden
          "
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
