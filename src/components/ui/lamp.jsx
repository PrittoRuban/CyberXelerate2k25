"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-transparent py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent dark:from-gray-50 dark:to-gray-300 dark:text-opacity-90 md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center backdrop-blur-sm w-full rounded-md z-0 text-gray-950 dark:text-gray-50 dark:text-opacity-90",
        className
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center">
        {/* Left Gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-cyan-400 via-transparent to-transparent dark:from-cyan-500 dark:via-gray-900 dark:to-transparent z-10 [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute left-0 bottom-0 h-40 w-full bg-gray-50 dark:bg-gray-900 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Right Gradient */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-400 dark:via-gray-900 dark:to-cyan-500 z-10 [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute right-0 bottom-0 h-40 w-full bg-gray-50 dark:bg-gray-900 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Base Shadows */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 bg-gray-50 dark:bg-gray-900 blur-2xl z-0" />
        <div className="absolute top-1/2 h-48 w-full bg-transparent opacity-10 backdrop-blur-md z-0" />

        {/* Glow Effects */}
        <div className="absolute z-10 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-400 dark:bg-cyan-500 opacity-50 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute z-10 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-500 dark:bg-cyan-400 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute z-10 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 dark:bg-cyan-300"
        />

        {/* Top Cover */}
        <div className="absolute z-10 h-44 w-full bg-gray-50 dark:bg-gray-900 -translate-y-[13rem]" />
      </div>

      {/* Content Area */}
      <div className="relative z-50 flex -translate-y-16 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
