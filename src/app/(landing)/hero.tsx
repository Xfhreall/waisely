"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bg from "@/public/background/hero.svg";

type Position = {
  x: string;
  y: string;
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const text = "waisely";

  const getInitialPosition = (char: string): Position => {
    switch (char) {
      case "w":
        return { x: "100vw", y: "100vh" };
      case "s":
        return { x: "-100vw", y: "-100vh" };
      case "y":
        return { x: "100vw", y: "-100vh" };
      case "i":
        return { x: "-100vw", y: "100vh" };
      default:
        const edge = Math.floor(Math.random() * 4);
        switch (edge) {
          case 0:
            return { x: "-100vw", y: `${Math.random() * 100}vh` };
          case 1:
            return { x: "100vw", y: `${Math.random() * 100}vh` };
          case 2:
            return { x: `${Math.random() * 100}vw`, y: "-100vh" };
          default:
            return { x: `${Math.random() * 100}vw`, y: "100vh" };
        }
    }
  };

  return (
    <section className="h-screen w-full relative overflow-clip">
      <Image
        className="absolute -z-10 object-cover"
        src={bg}
        alt="Background"
        fill
        priority
      />
      <div className="absolute h-48 w-full bottom-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      <main className="w-10/12 h-full flex mx-auto text-neutral-200">
        <div className="my-auto space-y-0 sm:space-y-4 text-center mx-auto">
          <h1 className="font-bayon text-7xl sm:text-8xl h-24 relative">
            {mounted &&
              text.split("").map((char, index) => {
                const { x, y } = getInitialPosition(char);
                return (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      x,
                      y,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    transition={{
                      type: "spring",
                      damping: 12,
                      stiffness: 100,
                      duration: 1,
                      delay: 2.2 + index * 0.1,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
          </h1>
          <div className="space-y-2 sm:space-y-4">
            <motion.p
              className="text-base sm:text-xl font-bold"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 3.3 }}
            >
              Kelola Sampah Anda, Kami Tuntaskan dengan Tuntas!
            </motion.p>
            <motion.p
              className="text-sm sm:text-xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 3.8 }}
            >
              Dengan menghadirkan solusi inovatif dalam pengelolaan sampah,
              platform ini memiliki tujuan untuk membentuk generasi yang peduli
              lingkungan dan mendukung tercapainya Indonesia Emas 2045, sebuah
              visi Indonesia yang bersih, maju, dan sehat.
            </motion.p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
