import { useSectionObserver } from "@/hooks/intersection-observer";
// Removed unused import: SectionHeading
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function About() {
  useSectionObserver("about", "CyberXelerate-2k25");

  const features = [
    {
      text: "No Registration Fees",
      description: "Participate at absolutely no cost.",
    },
    {
      text: "Exciting Cash Prizes",
      description: "Showcase your cybersecurity expertise and win big.",
    },
    {
      text: "Complimentary Food",
      description: "Enjoy free meals while you dive into the challenges.",
    },
    {
      text: "Professional Atmosphere",
      description: "Dress formally and connect with industry experts.",
    },
    {
      text: "Transport Facilities",
      description: "Convenient transport provided (will be updated soon).",
    },
  ];

  return (
    <section id="about" className="relative py-8 bg-transparent mt-40 sm:mt-0">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0.5, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl tracking-tight text-gray-800 dark:text-gray-100 font-medium"
          >
            Ignite Your Cybersecurity Passion
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-serif"
          >
            Join us for the{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              CyberXelerate' 2k25 Symposium
            </span>
            , organized by the{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              Department of CSE (Cyber Security)
            </span>{" "}
            at{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              R.M.K. College of Engineering and Technology
            </span>
            . This thrilling event is packed with exciting competitions designed
            to challenge your skills and knowledge in the dynamic world of{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              cybersecurity
            </span>
            .
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <ul className="space-y-4 md:space-y-3">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-4">
                  <span
                    className="text-blue-500 dark:text-teal-300 font-semibold"
                    aria-hidden="true"
                  >
                    ➤
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 text-base md:text-xl">
                    <span className="font-bold text-gray-900 dark:text-white font-serif">
                      {item.text}
                    </span>{" "}
                    <span className="font-serif">: {item.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-12 font-serif"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-500 dark:text-teal-300">
              Event Details
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-base md:text-lg">
              📅{" "}
              <span className="font-bold text-gray-900 dark:text-white font-serif">
                Date
              </span>
              : March 17, 2025 <br />
              📍{" "}
              <span className="font-bold text-gray-900 dark:text-white font-serif">
                Location
              </span>
              : R.M.K College of Engineering and Technology, Tamil Nadu
            </p>
          </motion.div>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <a
              href="/transport-details.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-md font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all dark:from-teal-400 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-teal-400 font-serif"
            >
              Transport Details
            </a>
          </motion.div>
        </motion.div>
      </LampContainer>
    </section>
  );
}
