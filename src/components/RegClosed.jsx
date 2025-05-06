"use client";
import { motion } from "framer-motion";

const RegClosed = () => {
  return (
    <div className="flex justify-center items-center h-screen px-10 bg-opacity-50 backdrop-blur-sm">
      {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[30rem] w-[50.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#423d3d]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-25rem] h-[30rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}
      <div className="relative p-16 border-8 border-gray-200 dark:border-gray-600 shadow-2xl animate-swing-bounce rounded-lg backdrop-blur-3xl bg-white dark:bg-gray-800 ">
        <div className="absolute w-8 h-8 border border-gray-400 dark:border-gray-500 top-[-16px] left-1/2 transform -translate-x-1/2 rotate-45 border-b-0 border-r-0"></div>
        <div className="absolute w-4 h-4 bg-black dark:bg-white rounded-full top-[-20px] left-1/2 transform -translate-x-1/2"></div>
        <div className="text-center">
          <h2 className="text-4xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text py-3 dark:from-blue-400 dark:via-green-400 dark:to-indigo-300 font-lg">
            Registration Closed
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 font-serif">
            Transport details: (17th March, 2025)
          </p>
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
              Download PDF
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes swing-bounce {
          0% {
            transform: rotate(5deg);
          }
          50% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(5deg);
          }
        }

        .animate-swing-bounce {
          animation: swing-bounce ease-in-out 1.5s infinite alternate;
          transform-origin: center -30px;
        }
      `}</style>
    </div>
  );
};

export default RegClosed;
