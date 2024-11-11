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
      <main className="w-10/12 h-full flex mx-auto">
        <div className="my-auto w-10/12 space-y-4 text-center mx-auto">
          <h1 className="font-bayon text-8xl h-24 relative">
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
                      delay: index * 0.1,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
          </h1>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="space-y-4"
          >
            <p className="text-xl font-bold">
              Kelola Sampah Anda, Kami Tuntaskan dengan Tuntas!
            </p>
            <p className="text-xl">
              Dengan menghadirkan solusi inovatif dalam pengelolaan sampah,
              platform ini memiliki tujuan untuk membentuk generasi yang peduli
              lingkungan dan mendukung tercapainya Indonesia Emas 2045, sebuah
              visi Indonesia yang bersih, maju, dan sehat.
            </p>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Hero;
