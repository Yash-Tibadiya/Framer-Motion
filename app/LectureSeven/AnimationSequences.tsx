"use client";

import { motion, useAnimate } from "framer-motion";

const AnimationSequences = () => {
  const [scope, animate] = useAnimate();
  const startAnimating = async () => {
    animate(".text", { display: "none" }, { duration: 0.1 });
    await animate(
      "button",
      { width: "5rem", borderRadius: "1000px" },
      { duration: 0.3 }
    );
    animate(
      "button",
      { opacity: 1, scale: [1, 1.2, 0.8, 1], backgroundColor: "#48bb78" },
      { duration: 0.8 }
    );
    animate("button", { backgroundColor: "#48bb78" }, { duration: 0.8 });
    animate(".check-icon", { opacity: 1 }, { duration: 0.1 });
    animate(".check-icon path", { pathLength: 1 }, { duration: 0.3 });
  };

  return (
    <div
      ref={scope}
      className="relative w-60 h-20 flex items-center justify-center"
    >
      <motion.button
        onClick={startAnimating}
        style={{ width: "30rem" }}
        className="h-20 rounded-lg bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500 text-white font-medium cursor-pointer"
      >
        <span className="text">Purchase Now ($169)</span>
      </motion.button>

      <motion.svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="#FFFFFF"
        strokeWidth={3}
        style={{
          opacity: 0,
        }}
        className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "easeInOut",
          }}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </motion.svg>
    </div>
  );
};

export default AnimationSequences;
