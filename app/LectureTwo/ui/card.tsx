"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Icon24Hours,
  Icon360View,
  Icon3dCubeSphere,
  IconMessage,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Card = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={cn(
              "w-72 min-h-[28rem] h-[28rem] rounded-xl bg-white",
              "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
              "p-6 flex flex-col"
            )}
          >
            <h2 className="text-[10px] font-bold">Prometheus UI Component</h2>
            <p className="text-neutral-600 mt-2 text-[10px]">
              A collection of beautifully designed components. Use them to build
              your next project.
            </p>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setOpen(false)}
                className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-4 h-4"
                  alt="Prometheus UI"
                  src="/logo.jpg"
                />{" "}
                Prometheus
                <IconX className="w-3 h-3 text-neutral-400" />
              </button>
            </div>

            <div className="flex-1 bg-gray-100 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                // transition={{ type: "spring", stiffness: 100, damping: 15 }}
                className="absolute inset-0 h-full w-full border border-neutral-200 bg-white rounded-lg divide-y divide-neutral-200"
              >
                <div className="flex gap-2 p-4">
                  <div className="w-7 h-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconMessage className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      Prometheus UI Components
                    </p>
                    <p className="text-[8px] text-neutral-400 mt-1">
                      A collection of UI components
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="w-7 h-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon24Hours className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      24 hours turnaround
                    </p>
                    <p className="text-[8px] text-neutral-400 mt-1">
                      Super fast delivery at warp speed
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="w-7 h-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon360View className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      360 days all around
                    </p>
                    <p className="text-[8px] text-neutral-400 mt-1">
                      We&apos;re here to help you 24/7
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4">
                  <div className="w-7 h-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <Icon3dCubeSphere className="h-4 w-4 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] font-bold text-neutral-600">
                      3d models for everyone
                    </p>
                    <p className="text-[8px] text-neutral-400 mt-1">
                      Explore our vast collection of 3D models
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 p-4 justify-center items-center">
                  <div className="w-4 h-4 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                    <IconPlus className="h-3 w-3 text-neutral-600" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[8px] mt-1 text-neutral-400">
                      Create Project
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
