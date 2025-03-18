"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import luffy from "../assets/luffy.png";
import SpaceBackground from "./SpaceBackground";

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const luffyVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } },
    hover: { scale: 1.1, rotate: 3 },
  };

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 relative pt-10 space-y-8 md:space-y-0 text-center md:text-left">
      {/* Left Side - Text */}
      {/* 3D Stars Background */}

      <motion.div
        className="flex-1 space-y-6"
        variants={textVariants}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-snug">
          Ahoy! I'm <span className="text-red-500">Sarthak Bhimgade</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Dev 🧑‍💻",
            2000,
            "MERN Stack Expert ⚡",
            2000,
            "ReactJS Wizard 🧙‍♂️",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-2xl sm:text-3xl text-gray-300"
        />

        <p className="text-gray-400 max-w-md mx-auto md:mx-0">
          Software Developer skilled in MERN, FastAPI, Redis, and
          more. Passionate about building efficient, scalable applications and
          solving real-world problems with clean & optimized code. 🚀
        </p>
      </motion.div>

      {/* Right Side - Luffy Image */}
      <motion.div
        className="flex justify-center flex-1"
        variants={luffyVariants}
        initial="hidden"
        animate="show"
        whileHover="hover"
      >
        <img
          src={luffy}
          alt="Luffy"
          className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[350px] lg:mt-15  object-contain z-10 drop-shadow-2xl"
        />
      </motion.div>

      {/* Floating Glow Effect */}
      <div className="absolute inset-0 bg-dark-glow pointer-events-none"></div>
    </section>
  );
};

export default Hero;
