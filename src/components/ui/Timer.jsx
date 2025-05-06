import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Countdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="flex gap-5 p-5 rounded-lg bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="countdown font-mono text-4xl text-blue-600 dark:text-blue-500">
          <span>{time.days}</span>
        </span>
        <div className="text-gray-600 dark:text-gray-400">days</div>
      </motion.div>
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.1, rotate: -3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="countdown font-mono text-4xl text-green-500 dark:text-green-500">
          <span>{time.hours}</span>
        </span>
        <div className="text-gray-600 dark:text-gray-400">hours</div>
      </motion.div>
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="countdown font-mono text-4xl text-indigo-400 dark:text-indigo-500">
          <span>{time.minutes}</span>
        </span>
        <div className="text-gray-600 dark:text-gray-400">min</div>
      </motion.div>
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.1, rotate: -3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="countdown font-mono text-4xl text-red-700 dark:text-indigo-400">
          <span>{time.seconds}</span>
        </span>
        <div className="text-gray-600 dark:text-gray-400">sec</div>
      </motion.div>
    </motion.div>
  );
};

export default Countdown;