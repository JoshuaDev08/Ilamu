import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo.webp";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Why Choose Us", "why"],
  ["Contact", "contact"],
];

/*
  Sections where navbar text should be WHITE.

  Add/remove section IDs here depending on
  the background of each section.
*/
const darkSections = ["home", "why"];

const navbarVariants = {
  hidden: {
    y: -30,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    y: -8,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const [isWhiteText, setIsWhiteText] = useState(true);

  /*
    SCROLL STATE

    Controls only whether navbar becomes
    floating glass.
  */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
    CURRENT SECTION DETECTION

    Determines whether navbar text should
    be white or dark based on the section
    behind it.
  */
  useEffect(() => {
    const checkCurrentSection = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]"),
      );

      const navbarPosition = window.scrollY + 40;

      const currentSection = sections.find((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = section.offsetTop + section.offsetHeight;

        return navbarPosition >= sectionTop && navbarPosition < sectionBottom;
      });

      if (!currentSection) {
        setIsWhiteText(true);
        return;
      }

      setIsWhiteText(darkSections.includes(currentSection.id));
    };

    checkCurrentSection();

    window.addEventListener("scroll", checkCurrentSection, {
      passive: true,
    });

    window.addEventListener("resize", checkCurrentSection);

    return () => {
      window.removeEventListener("scroll", checkCurrentSection);

      window.removeEventListener("resize", checkCurrentSection);
    };
  }, []);

  return (
    <>
      <motion.header
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-500
          ${
            isScrolled
              ? "px-2 pt-2 sm:px-3 lg:px-4"
              : "px-4 pt-0 sm:px-6 lg:px-8"
          }
        `}
      >
        <motion.div
          animate={{
            borderRadius: isScrolled ? 10 : 0,
          }}
          transition={{
            duration: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            navbar
            relative
            mx-auto
            w-full
            max-w-7xl
            overflow-hidden
            transition-all
            duration-500

            ${
              isScrolled
                ? `
                    h-[58px]
                    border
                    border-white/15
                    bg-white/10
                    px-3
                    shadow-[0_12px_40px_rgba(0,0,0,0.14)]
                    backdrop-blur-xl
                    sm:px-4
                  `
                : `
                    h-[50px]
                    border
                    border-transparent
                    bg-transparent
                    px-0
                    shadow-none
                    backdrop-blur-none
                  `
            }
          `}
        >
          {/* Glass highlight */}
          <motion.div
            animate={{
              opacity: isScrolled ? 1 : 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-1/2
              bg-gradient-to-b
              from-white/20
              via-white/[0.03]
              to-transparent
            "
          />

          {/* Soft Glass Glow */}
          <motion.div
            animate={{
              opacity: isScrolled ? 0.5 : 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              pointer-events-none
              absolute
              -top-12
              left-1/2
              h-20
              w-[45%]
              -translate-x-1/2
              rounded-full
              bg-white/20
              blur-3xl
            "
          />

          {/* ================= LOGO ================= */}

          <motion.a
            href="#home"
            variants={itemVariants}
            className="
              relative
              z-10
              flex
              flex-1
              items-center
              gap-3
            "
          >
            <img
              src={Logo}
              alt="Ilamu Logo"
              className="
                h-14
                w-auto
                object-contain
                sm:h-16
              "
            />

            <span className="flex flex-col">
              <strong
                className={`
                  font-['Manrope']
                  text-[18px]
                  font-bold
                  leading-none
                  tracking-[0.13em]
                  transition-colors
                  duration-500
                  sm:text-[20px]

                  ${isWhiteText ? "text-white" : "text-base-content"}
                `}
              >
                ILAMU
              </strong>

              <small
                className={`
                  mt-[5px]
                  font-['Manrope']
                  text-[7px]
                  font-bold
                  leading-none
                  tracking-[0.27em]
                  transition-colors
                  duration-500
                  sm:text-[8px]

                  ${isWhiteText ? "text-accent" : "text-secondary"}
                `}
              >
                CONSTRUCTION
              </small>
            </span>
          </motion.a>

          {/* ================= DESKTOP NAV ================= */}

          <nav
            className="
              relative
              z-10
              hidden
              items-center
              gap-6
              lg:flex
              xl:gap-8
            "
          >
            {navItems.map(([label, href]) => (
              <motion.a
                key={href}
                href={`#${href}`}
                variants={itemVariants}
                whileHover={{
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className={`
                  group
                  relative
                  font-['Inter']
                  text-[13px]
                  font-semibold
                  transition-colors
                  duration-500

                  ${
                    isWhiteText
                      ? `
                          text-white/85
                          hover:text-white
                        `
                      : `
                          text-base-content/75
                          hover:text-primary
                        `
                  }
                `}
              >
                {label}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    w-0
                    bg-accent
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </motion.a>
            ))}

            {/* CTA */}
            <motion.a
              href="#contact"
              variants={itemVariants}
              className="
                btn
                btn-primary
                ml-1
                rounded-md
                px-5
                font-['Manrope']
                text-xs
                font-bold
                tracking-[0.02em]
              "
            >
              Request a Quote
            </motion.a>
          </nav>

          {/* ================= MOBILE BUTTON ================= */}

          <motion.div
            variants={itemVariants}
            className="
              relative
              z-10
              flex-none
              lg:hidden
            "
          >
            <motion.button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{
                scale: 0.92,
              }}
              className={`
                btn
                btn-ghost
                btn-square
                transition-colors
                duration-500

                ${
                  isWhiteText
                    ? "text-white hover:bg-white/10"
                    : "text-base-content"
                }
              `}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={() => setMenuOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-neutral/30
                backdrop-blur-sm
                lg:hidden
              "
            />

            {/* Mobile Panel */}
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                left-3
                right-3
                top-[82px]
                z-50
                overflow-hidden
                rounded-xl
                border
                border-base-content/10
                bg-base-100/90
                p-3
                shadow-[0_18px_50px_rgba(0,0,0,0.18)]
                backdrop-blur-xl
                lg:hidden
              "
            >
              <nav className="flex flex-col">
                {navItems.map(([label, href], index) => (
                  <motion.a
                    key={href}
                    href={`#${href}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{
                      opacity: 0,
                      x: 12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.045,
                      duration: 0.25,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                        rounded-lg
                        px-4
                        py-3
                        font-['Inter']
                        text-sm
                        font-semibold
                        text-base-content/80
                        transition-colors
                        duration-300
                        hover:bg-primary/5
                        hover:text-primary
                      "
                  >
                    {label}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: navItems.length * 0.045,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    btn
                    btn-primary
                    mt-3
                    font-['Manrope']
                    text-xs
                    font-bold
                  "
                >
                  Request a Quote
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
