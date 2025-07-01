"use client";

import { motion } from "framer-motion";

const LectureOne = () => {
  return (
    <div className="h-full w-full">
      <div
        className="[perspective:1000px] [transform-style:preserve-3d] flex items-center justify-center w-full h-screen bg-neutral-800"
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)`,
          backgroundSize: `8px 8px`,
          backgroundRepeat: `repeat`,
        }}
      >
        <motion.button
          // initial={{ rotate: 0 }}
          // animate={{ rotate: 20 }}
          // transition={{
          //   duration: 1,
          //   ease: "easeInOut",
          // }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          whileHover={{
            rotateX: 20,
            rotateY: 20,
            boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
            y: -5,
          }}
          whileTap={{
            y: 0,
          }}
          style={{
            translateZ: 100,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="group relative px-12 py-4 bg-black rounded-lg text-neutral-500 shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] cursor-pointer"
        >
          <span className="group-hover:text-cyan-500 transition-colors duration-300">
            Click me
          </span>
          <span className="absolute inset-x-0 w-3/4 h-px mx-auto bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
          <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 w-full h-[4px] mx-auto bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent blur-xs"></span>
        </motion.button>
      </div>
    </div>
  );
};

export default LectureOne;
