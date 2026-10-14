import { motion } from "motion/react";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import ContactForm from "../components/Form/ContactForm";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+63 XXX XXX XXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@ilamuconstruction.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Philippines",
  },
  {
    icon: Clock3,
    label: "Office Hours",
    value: "Monday–Saturday, 8:00 AM–5:00 PM",
  },
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

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-base-200
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          bottom-10
          h-80
          w-80
          rounded-full
          bg-primary/5
          blur-[110px]
        "
      />

      <div
        className="
          relative
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-14
          px-6
          lg:grid-cols-[0.75fr_1.25fr]
          lg:gap-20
          lg:px-8
        "
      >
        {/* Contact Information */}
        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Heading */}
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
            Start a conversation
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
            Let’s Build Together
          </h2>

          <p
            className="
              mt-5
              max-w-md
              font-['Inter']
              text-[15px]
              leading-7
              text-base-content/60
              sm:text-base
            "
          >
            Have a project in mind? We’d love to hear about it.
          </p>

          {/* Contact Details */}
          <div className="mt-9 space-y-3">
            {contactInfo.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.4,
                }}
                className="
                    group
                    flex
                    items-start
                    gap-4
                    border-b
                    border-base-300
                    py-4
                  "
              >
                <span
                  className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-field
                      bg-primary/10
                      text-primary
                      transition-colors
                      duration-300
                      group-hover:bg-primary
                      group-hover:text-primary-content
                    "
                >
                  <Icon className="h-[18px] w-[18px]" />
                </span>

                <div>
                  <span
                    className="
                        block
                        font-['Inter']
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.09em]
                        text-base-content/40
                      "
                  >
                    {label}
                  </span>

                  <p
                    className="
                        mt-1
                        font-['Manrope']
                        text-sm
                        font-semibold
                        leading-6
                        text-base-content/80
                      "
                  >
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Media */}
          <div className="mt-8 flex items-center gap-3">
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
                    btn-outline
                    border-base-300
                    text-base-content/65
                    hover:border-primary
                    hover:bg-primary
                    hover:text-primary-content
                  "
              >
                <Icon className="h-[17px] w-[17px]" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Reusable Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
