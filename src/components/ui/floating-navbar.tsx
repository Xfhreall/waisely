"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import title from "@/public/assets/title.png";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    dropdownItems?: { name: string; link: string }[];
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [visible, setVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleMouseEnter = (name: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveDropdown(name);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 1500);
    setTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -200,
        }}
        animate={{
          y: visible ? 20 : -200,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-10/12 fixed inset-x-0 mx-auto border border-transparent rounded-[20px] bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-12 py-5 items-center justify-center space-x-4",
          className
        )}
      >
        <nav className="flex w-full font-medium items-center">
          <Image src={title} alt="title" className="h-full w-auto" />
          <div className="flex ml-auto gap-8 items-center">
            {navItems.map((navItem, idx) => (
              <div
                key={`nav-item-${idx}`}
                className="relative"
                onMouseEnter={() =>
                  navItem.dropdownItems && handleMouseEnter(navItem.name)
                }
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={navItem.link}
                  className={cn(
                    "relative items-center flex space-x-1 text-neutral-950 hover:text-[#D64949] transition duration-300"
                  )}
                >
                  <span className="hidden sm:block text-sm">
                    {navItem.name}
                  </span>
                  {navItem.dropdownItems && (
                    <ChevronDown className="w-4 h-4 ml-1" />
                  )}
                </Link>

                <AnimatePresence
                  mode="wait"
                  onExitComplete={() => setActiveDropdown(null)}
                >
                  {navItem.dropdownItems &&
                    activeDropdown === navItem.name &&
                    isDropdownVisible && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -left-1/2 mt-12 w-48 bg-white rounded-2xl shadow-lg py-2 px-2 z-50 text-center"
                      >
                        {navItem.dropdownItems.map((item, dropdownIdx) => (
                          <Link
                            key={`dropdown-item-${dropdownIdx}`}
                            href={item.link}
                            className={`block px-4 py-2 text-sm text-neutral-950 hover:bg-neutral-100 hover:text-[#D64949] transition-all duration-300 ease-in-out ${
                              dropdownIdx == 1
                                ? "border-y border-black w-max mx-auto"
                                : ""
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
            <button className="border text-sm relative border-neutral-950 hover:bg-[#D64949] hover:text-neutral-100 text-black px-6 py-1 rounded-full transition duration-300 ease-in-out">
              <Link href="#footer">Hubungi kami</Link>
            </button>
          </div>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};
