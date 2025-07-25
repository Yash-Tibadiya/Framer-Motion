"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  BarChart,
  User,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <Home />,
    },
    {
      name: "Analytics",
      href: "/",
      icon: <BarChart />,
    },
    {
      name: "Users",
      href: "/",
      icon: <User />,
    },
    {
      name: "Settings",
      href: "/",
      icon: <Settings />,
    },
  ];

  const sidebarVariants = {
    open: {
      width: "16rem",
    },
    closed: {
      width: "4.5rem",
    },
  };

  const parentVariants = {
    open: {
      transition: {
        staggerChildren: 0.7,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const childVariants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      exit={"closed"}
      transition={{ duration: 0.3 }}
      className="border-r h-full border-neutral-100"
    >
      <motion.nav
        variants={sidebarVariants}
        className="bg-white shadow-md h-full"
      >
        <div className="p-4 flex justify-between items-center border-b border-dashed">
          <h2 className={`text-xl font-semibold ${!isOpen && "sr-only"}`}>
            Dashboard
          </h2>
          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <div className="relative">
          <nav className="p-4">
            <motion.ul variants={parentVariants} className="space-y-2">
              {links.map((link) => (
                <motion.li variants={childVariants} key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
                    title={!isOpen ? link.name : ""}
                  >
                    {link.icon}

                    {isOpen && <span className="ml-4">{link.name}</span>}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;
