"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/" },
    { title: "Contact", href: "/" },
    { title: "Pricing", href: "/" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="py-4 bg-white">
      <nav className="max-w-xl mx-auto bg-gray-100 rounded-full px-2 py-1 flex">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="w-full relative group text-center py-3 text-xs text-neutral-500"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="relative group-hover:text-neutral-200 text-neutral-500 z-20">
              {link.title}
            </span>
            {hovered === index && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 rounded-full w-full h-full bg-black"
              ></motion.div>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
