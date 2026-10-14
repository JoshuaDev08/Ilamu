import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";

const projectTypes = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation & Remodeling",
  "Design & Build",
];

const budgetRanges = ["Below ₱2M", "₱2M – ₱5M", "₱5M – ₱10M", "₱10M+"];

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSent(true);

    // Replace this later with your API request.
  };

  return (
    <motion.form
      initial={{
        opacity: 0,
        x: 30,
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
      onSubmit={handleSubmit}
      className="
        card
        border
        border-base-300
        bg-base-100
        shadow-[0_20px_55px_rgba(0,0,0,0.06)]
      "
    >
      <div className="card-body p-6 sm:p-8 lg:p-9">
        {/* Heading */}
        <div className="mb-7">
          <span
            className="
              font-['Manrope']
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-primary
            "
          >
            Project Inquiry
          </span>

          <h3
            className="
              mt-2
              font-['Manrope']
              text-xl
              font-bold
              text-base-content
              sm:text-2xl
            "
          >
            Tell us what you’re planning.
          </h3>

          <p
            className="
              mt-2
              font-['Inter']
              text-sm
              leading-6
              text-base-content/55
            "
          >
            Share a few project details and our team will get back to you.
          </p>
        </div>

        {/* Form Fields */}
        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
          "
        >
          <FormField label="Full Name" required>
            <input
              required
              name="name"
              type="text"
              placeholder="Your full name"
              className="input input-bordered w-full"
            />
          </FormField>

          <FormField label="Email Address" required>
            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
            />
          </FormField>

          <FormField label="Phone Number">
            <input
              name="phone"
              type="tel"
              placeholder="+63"
              className="input input-bordered w-full"
            />
          </FormField>

          <FormField label="Project Type">
            <select
              name="type"
              defaultValue=""
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select a service
              </option>

              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Project Location">
            <input
              name="location"
              type="text"
              placeholder="City or province"
              className="input input-bordered w-full"
            />
          </FormField>

          <FormField label="Estimated Budget">
            <select
              name="budget"
              defaultValue=""
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select budget range
              </option>

              {budgetRanges.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </FormField>

          <div className="sm:col-span-2">
            <FormField label="Message / Project Details" required>
              <textarea
                required
                name="message"
                rows={5}
                placeholder="Tell us about your vision, timeline, and requirements..."
                className="
                  textarea
                  textarea-bordered
                  min-h-36
                  w-full
                  resize-y
                "
              />
            </FormField>
          </div>
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          disabled={sent}
          className={`
            btn
            mt-7
            min-h-12
            w-full
            font-['Manrope']
            text-xs
            font-bold
            sm:w-auto

            ${sent ? "btn-success" : "btn-primary"}
          `}
        >
          {sent ? (
            <>
              Inquiry Sent — Thank You
              <Check className="h-4 w-4" />
            </>
          ) : (
            <>
              Send Project Inquiry
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
};

type FormFieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

const FormField = ({ label, required = false, children }: FormFieldProps) => {
  return (
    <label className="form-control w-full">
      <span
        className="
          mb-2
          font-['Manrope']
          text-[11px]
          font-bold
          text-base-content/75
        "
      >
        {label}

        {required && <span className="ml-1 text-error">*</span>}
      </span>

      {children}
    </label>
  );
};

export default ContactForm;
