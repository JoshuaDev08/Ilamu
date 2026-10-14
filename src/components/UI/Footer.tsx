import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Logo from "../../assets/logo.png";

const footerLinks = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Why Choose Us", "why"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const services = [
  "Residential",
  "Commercial",
  "Renovation",
  "Design & Build",
  "Project Management",
];

const socials = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "#",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "#",
  },
];

const footerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
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

const Footer = () => {
  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden
        bg-neutral
        text-neutral-content
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          top-10
          h-72
          w-72
          rounded-full
          bg-primary/10
          blur-[110px]
        "
      />

      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-10
          px-6
          py-16
          sm:grid-cols-2
          lg:grid-cols-[1.4fr_0.8fr_1fr_1fr]
          lg:gap-14
          lg:px-8
          lg:py-20
        "
      >
        {/* Brand */}
        <motion.div variants={itemVariants} className="max-w-sm">
          <div className="flex items-center gap-3">
            <img
              src={Logo}
              alt="ILAMU Construction"
              className="h-14 w-auto object-contain"
            />

            <span className="flex flex-col">
              <strong
                className="
                  font-['Manrope']
                  text-[20px]
                  font-bold
                  leading-none
                  tracking-[0.13em]
                  text-neutral-content
                "
              >
                ILAMU
              </strong>

              <small
                className="
                  mt-[5px]
                  font-['Manrope']
                  text-[8px]
                  font-bold
                  leading-none
                  tracking-[0.27em]
                  text-accent
                "
              >
                CONSTRUCTION
              </small>
            </span>
          </div>

          <p
            className="
              mt-6
              max-w-xs
              font-['Inter']
              text-sm
              leading-6
              text-neutral-content/55
            "
          >
            Building strong foundations, lasting relationships, and structures
            designed for generations.
          </p>

          {/* Socials */}
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  btn
                  btn-square
                  btn-sm
                  border
                  border-neutral-content/15
                  bg-transparent
                  text-neutral-content/70
                  hover:border-primary
                  hover:bg-primary
                  hover:text-primary-content
                "
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3
            className="
              mb-5
              font-['Manrope']
              text-sm
              font-bold
              text-neutral-content
            "
          >
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            {footerLinks.map(([label, href]) => (
              <a
                key={href}
                href={`#${href}`}
                className="
                  w-fit
                  font-['Inter']
                  text-sm
                  text-neutral-content/55
                  transition-colors
                  duration-300
                  hover:text-accent
                "
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div variants={itemVariants}>
          <h3
            className="
              mb-5
              font-['Manrope']
              text-sm
              font-bold
              text-neutral-content
            "
          >
            Services
          </h3>

          <div className="flex flex-col gap-3">
            {services.map((item) => (
              <a
                key={item}
                href="#services"
                className="
                  w-fit
                  font-['Inter']
                  text-sm
                  text-neutral-content/55
                  transition-colors
                  duration-300
                  hover:text-accent
                "
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants}>
          <h3
            className="
              mb-5
              font-['Manrope']
              text-sm
              font-bold
              text-neutral-content
            "
          >
            Contact
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

              <p
                className="
                  font-['Inter']
                  text-sm
                  leading-6
                  text-neutral-content/55
                "
              >
                +63 XXX XXX XXXX
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

              <p
                className="
                  break-all
                  font-['Inter']
                  text-sm
                  leading-6
                  text-neutral-content/55
                "
              >
                info@ilamuconstruction.com
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />

              <p
                className="
                  font-['Inter']
                  text-sm
                  leading-6
                  text-neutral-content/55
                "
              >
                Philippines
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Verse */}
      <div
        className="
          border-y
          border-neutral-content/10
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-6
            py-5
            text-center
            lg:px-8
          "
        >
          <p
            className="
              font-serif
              text-sm
              italic
              leading-6
              text-neutral-content/60
            "
          >
            “Unless the Lord builds the house, the builders labor in vain.”
            <span
              className="
                ml-2
                font-['Manrope']
                text-[10px]
                font-semibold
                not-italic
                tracking-[0.08em]
                text-accent
              "
            >
              Psalm 127:1
            </span>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-neutral">
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            gap-2
            px-6
            py-5
            text-center
            font-['Inter']
            text-[11px]
            text-neutral-content/40
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
            lg:px-8
          "
        >
          <span>© 2026 ILAMU Construction. All Rights Reserved.</span>

          <span className="text-neutral-content/55">
            Built with purpose. Built with faith.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
