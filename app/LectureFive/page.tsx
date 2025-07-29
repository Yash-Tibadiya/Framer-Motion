"use client";

import { IconRocket } from "@tabler/icons-react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function LectureFive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgrounds = ["#343434", "#00193b", "#05291c"];
  const [background, setBackground] = useState(backgrounds[0]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const finalBackground = Math.floor(progress * backgrounds.length);
    setBackground(backgrounds[finalBackground]);
  });

  return (
    <motion.div
      ref={containerRef}
      animate={{
        backgroundColor: background,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="flex items-center justify-center min-h-screen bg-neutral-900"
    >
      <div className="flex flex-col gap-10 max-w-5xl mx-auto py-40">
        {feature.map((feature) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </motion.div>
  );
}

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, -200]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    }
  );
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);

  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 gap-20 items-center py-40"
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale: scale,
        }}
        className="flex flex-col gap-5"
      >
        {feature.icon}
        <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
        <p className="text-neutral-400 text-lg">{feature.discription}</p>
      </motion.div>
      <motion.div style={{ y: translateContent, opacity: opacityContent }}>
        {feature.content}
      </motion.div>
    </div>
  );
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  discription: string;
  content: React.ReactNode;
};

const feature: Feature[] = [
  {
    icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
    title: "Generate Ultra Realistic Images in Seconds 1",
    discription:
      "With our AI-powered image generation, you can create stunning visuals in just a few clicks, saving you time and effort.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-1.jpg"
          width={500}
          height={500}
          alt="car"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
    title: "Generate Ultra Realistic Images in Seconds 2",
    discription:
      "With our AI-powered image generation, you can create stunning visuals in just a few clicks, saving you time and effort.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-2.jpg"
          width={500}
          height={500}
          alt="car"
          className="rounded-lg"
        />
      </div>
    ),
  },
  {
    icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
    title: "Generate Ultra Realistic Images in Seconds 3",
    discription:
      "With our AI-powered image generation, you can create stunning visuals in just a few clicks, saving you time and effort.",
    content: (
      <div>
        <Image
          src="https://assets.aceternity.com/pro/car-3.jpg"
          width={500}
          height={500}
          alt="car"
          className="rounded-lg"
        />
      </div>
    ),
  },
  // {
  //   icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
  //   title: "Generate Ultra Realistic Images in Seconds 4",
  //   discription:
  //     "With our AI-powered image generation, you can create stunning visuals in just a few clicks, saving you time and effort.",
  //   content: (
  //     <div>
  //       <Image
  //         src="https://assets.aceternity.com/pro/car-3.jpg"
  //         width={500}
  //         height={500}
  //         alt="car"
  //         className="rounded-lg"
  //       />
  //     </div>
  //   ),
  // },
  // {
  //   icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
  //   title: "Generate Ultra Realistic Images in Seconds 5",
  //   discription:
  //     "With our AI-powered image generation, you can create stunning visuals in just a few clicks, saving you time and effort.",
  //   content: (
  //     <div>
  //       <Image
  //         src="https://assets.aceternity.com/pro/car-3.jpg"
  //         width={500}
  //         height={500}
  //         alt="car"
  //         className="rounded-lg"
  //       />
  //     </div>
  //   ),
  // },
  // {
  //   icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
  //   title: "Generate Ultra Realistic Images in Seconds 6",
  //   discription:
  //     "With our AI-powered image generation, you can create stunning visuals in just a few clicks, saving you time and effort.",
  //   content: (
  //     <div>
  //       <Image
  //         src="https://assets.aceternity.com/pro/car-3.jpg"
  //         width={500}
  //         height={500}
  //         alt="car"
  //         className="rounded-lg"
  //       />
  //     </div>
  //   ),
  // },
  // {
  //   icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
  //   title: "Generate Ultra Realistic Images in Seconds 7",
  //   discription:
  //     "With our AI-powered image generation, you can create stunning visuals in just a few clicks, saving you time and effort.",
  //   content: (
  //     <div>
  //       <Image
  //         src="https://assets.aceternity.com/pro/car-3.jpg"
  //         width={500}
  //         height={500}
  //         alt="car"
  //         className="rounded-lg"
  //       />
  //     </div>
  //   ),
  // },
];
