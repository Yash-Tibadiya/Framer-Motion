"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300  border-b border-slate-200/60 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-white"
      }`}
    >
      <div className="lg:container mx-auto px-5 lg:px-10 flex h-20 items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-bold">
          <Link href="/LectureFour" className="flex items-center gap-2">
            <p className="bg-gradient-to-r from-amber-600/90 to-orange-600/90 bg-clip-text text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-transparent">
              Reactivity
            </p>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/LectureFour"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/LectureFour"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Testimonials
          </Link>
          <Link
            href="/LectureFour"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/LectureFour"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/LectureFour"
            className="group relative z-20 flex h-10 w-full cursor-pointer items-center justify-center space-x-2 rounded-lg bg-black p-px px-4 py-2 text-center text-sm font-semibold leading-6 text-white no-underline shadow-input transition duration-200 hover:-translate-y-0.5 sm:w-32"
          >
            <span className="transition-colors duration-700">Log in</span>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
        >
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="py-2 pl-3 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="py-2 pl-3 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="py-2 pl-3 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="py-2 pl-3 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col gap-2">
              <Link
                href="/LectureFour"
                className="group relative z-20 flex h-10 max-w-full mx-4 cursor-pointer items-center justify-center space-x-2 rounded-lg bg-black p-px px-4 py-2 text-center text-sm font-semibold leading-6 text-white no-underline"
              >
                <span className="">Log in</span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
