"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/public/assets/title.svg";
import Image from "next/image";
import Link from "next/link";
export function Navbar() {
  const navItems = [
    {
      name: "Tentang Kami",
      link: "#about",
    },
    {
      name: "Sampah",
      link: "#sampah",
    },
    {
      name: "Layanan",
      link: "#service",
      dropdownItems: [
        { name: "Jemput Sampah", link: "#jemput" },
        { name: "Jadwal Operasi Truk", link: "#jadwal" },
        { name: "Kondisi Darurat", link: "#darurat" },
      ],
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== undefined) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== undefined) {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  return (
    <main>
      <div className="relative max-w-screen-md hidden md:block">
        <FloatingNav navItems={navItems} />
      </div>
      <div className="block md:hidden">
        <header
          className={`fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md text-white z-50 transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Image src={logo} alt="logo" className="h-auto w-24 invert pl-2" />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-50"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 w-[280px] bg-neutral-200 text-black z-50 flex flex-col"
              >
                <div className="p-4 flex justify-between items-center border-b border-neutral-800">
                  <Image src={logo} alt="logo" className="h-auto w-24 pl-2" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <nav className="flex-1 p-4">
                  <ul className="space-y-4">
                    {navItems.map((item, index) => (
                      <li key={index} className=" border-b">
                        {item.dropdownItems ? (
                          <div className="relative">
                            <button
                              className="w-full text-left py-2 flex items-center justify-between hover:text-neutral-400 transition-colors"
                              onClick={() => toggleDropdown(item.name)}
                            >
                              {item.name}
                              {openDropdown === item.name ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </button>
                            <AnimatePresence>
                              {openDropdown === item.name && (
                                <motion.ul
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-2 ml-4 space-y-2 overflow-hidden"
                                >
                                  {item.dropdownItems.map(
                                    (dropdownItem, dropdownIndex) => (
                                      <motion.li
                                        key={dropdownIndex}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                          duration: 0.2,
                                          delay: dropdownIndex * 0.05,
                                        }}
                                      >
                                        <a
                                          href={dropdownItem.link}
                                          className="block py-1 hover:text-neutral-400 transition-colors"
                                          onClick={() => setIsOpen(false)}
                                        >
                                          {dropdownItem.name}
                                        </a>
                                      </motion.li>
                                    )
                                  )}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <a
                            href={item.link}
                            className="block py-2 hover:text-neutral-400 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="p-4 border-t border-neutral-800">
                  <Button
                    className="w-full bg-white text-black hover:bg-neutral-200"
                    size="lg"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="#footer">Hubungi Kami</Link>
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
