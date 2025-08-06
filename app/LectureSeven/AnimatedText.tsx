"use client";

import { useAnimate, motion, stagger } from "framer-motion";
// import { useEffect } from "react";

const AnimatedText = () => {
  const [scope, animate] = useAnimate();

  const text =
    "Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eveniet dignissimos sequi, natus asperiores blanditiis adipisci provident architecto ea earum impedit quos vel minus sed, ducimus fugiat nulla quis a commodi beatae omnis doloremque.";

  // useEffect(() => {
  //   startAnimating();
  // }, []);

  const startAnimating = () => {
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)", y: 0 },
      { duration: 0.5, ease: "easeInOut", delay: stagger(0.02) }
    );
  };

  return (
    <div
      ref={scope}
      className="text-white max-w-3xl mx-auto font-bold text-3xl"
    >
      <button
        onClick={startAnimating}
        className="bg-neutral-800 px-2 py-2 rounded-md cursor-pointer active:scale-110 transition duration-300"
      >
        what is Fc?
      </button>{" "}
      {text.split(" ").map((word, index) => (
        <motion.span
          key={word + index}
          className="inline-block"
          style={{
            opacity: 0,
            filter: "blur(10px)",
            y: 10,
          }}
        >
          {word} &nbsp;
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
