"use client";
import { motion } from "framer-motion";

const PromptXtreme = () => {
  return (
    <section className="relative w-full py-20 md:py-40 backdrop-blur-sm">
      <div className="relative bg-gradient-to-br">
        {/* Background Glow */}
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
          sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#595584]"
        ></div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Top Section: Welcome & Description */}
          <div className="text-center py-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
                PromptXtreme
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4 font-mono"
            >
              Step into the Solo Leveling-themed AI battleground with
              PromptXtreme! Test your prompt engineering skills in an intense
              challenge where precision, creativity, and strategy decide your
              fate. Craft the most effective prompts, outsmart adversarial
              traps, and rise as the S-Rank Prompter in this high-stakes AI
              showdown!
            </motion.p>
          </div>

          {/* Middle Section: Poster & Rules & Guidelines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start py-8">
            {/* Event Poster */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/PromptXtreme.png" // Replace with your actual poster path
                alt="PromptXtreme Poster"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md object-cover rounded-2xl shadow-lg dark:shadow-black/50"
              />
            </motion.div>

            {/* Rules & Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-5 md:p-10 rounded-2xl shadow-lg dark:shadow-black/50 bg-white/30 dark:bg-black/30 
                         backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 font-mono"
            >
              <h2 className="text-2xl font-bold underline text-gray-800 dark:text-gray-200 mb-4">
                Rules &amp; Guidelines
              </h2>
              <ul className="list-none space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-semibold">Participation:</span>{" "}
                  Individual event.
                </li>
                <li>
                  <span className="font-semibold">Timing:</span> 11:00 AM –
                  12:30 PM (approx).
                </li>
                <li>
                  <span className="font-semibold">No External Assistance:</span>{" "}
                  Pre-written prompts, external AI models, or teamwork are
                  strictly prohibited.
                </li>
                <li>
                  <span className="font-semibold">Challenge Categories:</span>
                  <span className="font-bold">
                    {" "}
                    Prompt Optimization, Creative Prompting
                  </span>{" "}
                  &amp;
                  <span className="font-bold"> Chatbot Jailbreaking</span>.
                </li>
                <li>
                  <span className="font-semibold">Rounds:</span> Two rounds:
                  <br />
                  <span className="ml-4">
                    • <span className="font-semibold">Round 1:</span> Generate
                    an AI image matching the provided reference.
                  </span>
                  <br />
                  <span className="ml-4">
                    • <span className="font-semibold">Round 2:</span> Interact
                    with a Chatbot using strategic prompts to reveal a hidden
                    secret phrase.
                  </span>
                  <br />
                  <span className="font-semibold">Scoring:</span> Based on image
                  similarity and prompt efficiency.
                </li>
                <li>
                  <span className="font-semibold">Systems:</span> Provided.
                </li>
                <li>
                  <span className="font-semibold">Scoring Criteria:</span>{" "}
                  Accuracy, creativity, and effectiveness of prompts with
                  specific keywords.
                </li>
                <li>
                  <span className="font-semibold">Venue:</span> ME Block, 1st
                  Floor Lab.
                </li>
                <li>
                  <span className="font-semibold">Prizes:</span> Exciting cash
                  prizes for the winners!
                </li>
                <li>
                  <span className="font-semibold">Facilities:</span> Food and
                  Transport provided.
                </li>
              </ul>
              <p className="mt-4 font-bold text-indigo-600">
                Do you have what it takes to be the S-Rank Prompter? Join
                PromptXtreme and prove your dominance! ⚔🔥🚀
              </p>
            </motion.div>
          </div>

          {/* Contact Details */}
          {/* <div className="text-center py-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 dark:text-gray-100"
            >
              Contact for Queries
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              📞 <span className="font-bold">MOHAMMED MUSTAFA A</span> - +91
              9087949027
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 dark:text-gray-300"
            >
              📞 <span className="font-bold">PRAVIN S</span> - +91 8682834774
            </motion.p>
          </div> */}

          {/* Register Now Button */}
          <div className="flex justify-center py-4">
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBIXHLRkJBHDj47eLN04acwbtsJel4h8Su_wpwfIUyQM05Vg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-lg"
            >
              Register Now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromptXtreme;
