import React from "react";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";


function portfolio() {
  return (
    <section className="bg-green-500 w-full h-screen flex justify-center items-center">
      <Navbar />
      <motion.div
        className="bg-transparent w-full h-screen flex justify-center items-center"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
          },
          children: {
            y: -100,
            opacity: 1,
            transition: {
              ease: [0.6, 0.01, 0.05, 0.95],
              duration: 0.5,
            },
          },
        }}
      >
        <h1>Hello</h1>
      </motion.div>
      <div className="bg-green-500 w-full h-screen"></div>
    </section>
  );
}

export default portfolio;
