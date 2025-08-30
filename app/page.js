"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-[#750000] text-4xl md:text-6xl font-extrabold mb-4 dark:text-[#4C4CA8]"
      >
        Welcome to Blog Showcase
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-black text-lg md:text-2xl text-gray-700 dark:text-[#B3AC6D] mb-6"
      >
        <Typewriter
          words={[
            "A place to discover amazing blogs",
            "Built with Next.js and TailwindCSS",
            "Start exploring now!"
          ]}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1200}
        />
      </motion.p>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8"
      >
        <img
          src="/next.svg"
          alt="Blog Showcase"
          className="mx-auto w-40 md:w-60 rounded-2xl shadow-lg"
        />
      </motion.div>
    </section>
  );
}