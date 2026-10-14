import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpg";
import Project4 from "../../assets/project4.jpg";

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

const projectVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
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
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
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

          <motion.a
            href="#contact"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
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
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            staggerChildren: 0.1,
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
                variants={projectVariants}
                className={`
                  group
                  relative
                  overflow-hidden
                  bg-neutral
                  ${layout}
                `}
              >
                {/* Image */}
                <motion.img
                  src={project.image}
                  alt={`${project.title}, ${project.category} project`}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                  whileHover={{
                    scale: 1.045,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-neutral/95
                    via-neutral/30
                    to-transparent
                  "
                />

                {/* Subtle hover tint */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-primary/0
                    transition-colors
                    duration-500
                    group-hover:bg-primary/5
                  "
                />

                {/* Content */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    flex
                    items-end
                    justify-between
                    gap-5
                    p-6
                    sm:p-7
                  "
                >
                  <motion.div
                    initial={false}
                    whileHover={{
                      y: -2,
                    }}
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
                  </motion.div>

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

                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                      }}
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        border
                        border-white/20
                        bg-white/10
                        text-white
                        opacity-0
                        backdrop-blur-sm
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.span>
                  </div>
                </div>

                {/* Gold accent line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-accent
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Mobile CTA */}
        <motion.a
          href="#contact"
          whileTap={{
            scale: 0.97,
          }}
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
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
