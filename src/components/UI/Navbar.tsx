import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/logo.png";

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

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
            ${isScrolled ? "px-2 pt-2 sm:px-3 lg:px-4" : "px-4 pt-0 sm:px-6 lg:px-8"}
        `}
      >
        <motion.div
          animate={{
            borderRadius: isScrolled ? 10 : 0,
          }}
          transition={{
            duration: 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            navbar
            relative
            mx-auto
            max-h-[60px]
            w-full
            max-w-7xl
            overflow-hidden
            px-0
            transition-all
            duration-500
            ${
            isScrolled
          ? `
              border
              border-base-content/10
              bg-base-100/75
              px-5
              shadow-[0_16px_50px_rgba(0,0,0,0.10)]
              backdrop-blur-xl
              sm:px-3
            `
          : `
              border
              border-transparent
              bg-transparent
              shadow-none
              backdrop-blur-none
            `
      }
    `}
        >
          {/* Glass top highlight */}
          <motion.div
            animate={{
              opacity: isScrolled ? 1 : 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              absolute
              inset-x-0
              top-0
              h-1/2
              bg-gradient-to-b
              from-base-content/[0.05]
              to-transparent
            "
          />

          {/* Soft glow */}
          <motion.div
            animate={{
              opacity: isScrolled ? 0.7 : 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
                absolute
                -top-14
                left-1/2
                h-24
                w-[50%]
                -translate-x-1/2
                rounded-full
                bg-primary/10
                blur-3xl
            "
          />

          {/* Logo */}
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
                className="
                  font-['Manrope']
                  text-[18px]
                  font-bold
                  leading-none
                  tracking-[0.13em]
                  text-base-content
                  sm:text-[20px]
                "
              >
                ILAMU
              </strong>

              <small
                className="
                  mt-[5px]
                  font-['Manrope']
                  text-[7px]
                  font-bold
                  leading-none
                  tracking-[0.27em]
                  text-secondary
                  sm:text-[8px]
                "
              >
                CONSTRUCTION
              </small>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="relative z-10 hidden items-center gap-7 lg:flex xl:gap-8">
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
                className="
                  group
                  relative
                  font-['Inter']
                  text-[13px]
                  font-semibold
                  text-base-content/75
                  transition-colors
                  duration-300
                  hover:text-primary
                "
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
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                btn
                btn-primary
                ml-2
                min-h-10
                px-5
                rounded-md
                font-['Manrope']
                text-xs
                font-bold
                tracking-[0.02em]
                shadow-[0_8px_24px_rgba(19,121,201,0.18)]
              "
            >
              Request a Quote
            </motion.a>
          </nav>

          {/* Mobile */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 flex-none lg:hidden"
          >
            <motion.button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{
                scale: 0.92,
              }}
              className="
                btn
                btn-ghost
                btn-square
                text-base-content
              "
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
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
                top-[92px]
                z-50
                overflow-hidden
                rounded-2xl
                border
                border-base-content/10
                bg-base-100/95
                p-3
                shadow-2xl
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
                      rounded-xl
                      px-4
                      py-3
                      font-['Inter']
                      text-sm
                      font-semibold
                      text-base-content/80
                      transition-colors
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
