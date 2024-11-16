"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { motion } from "framer-motion";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const text = setTimeout(() => {
      setLoadingText("Waisely");
    }, 50);
    return () => {
      clearTimeout(timer);
      clearTimeout(text);
    };
  }, []);

  return (
    <div className="absolute min-h-screen w-full overflow-hidden">
      <motion.div
        className="fixed top-0 h-1/2 w-full bg-neutral-200 z-50"
        initial={{ y: 0 }}
        animate={{ y: isLoading ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed bottom-0 w-full h-1/2 bg-neutral-200 z-50"
        initial={{ y: 0 }}
        animate={{ y: isLoading ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none`}
      >
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.8,
              type: "spring",
              stiffness: 400,
            }}
          >
            <Image
              src={logo}
              alt="Waisely Logo"
              className="w-32 h-32"
              width={128}
              height={128}
            />
          </motion.div>
          <motion.div
            className={`font-bayon text-neutral-800 text-xl tracking-widest ${
              loadingText != "Waisely" ? "animate-pulse" : null
            }`}
            initial={{ y: -50 }}
            animate={{
              y: loadingText === "Waisely" ? 24 : 0,
              opacity: [0, 1],
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              type: "spring",
              stiffness: 200,
            }}
          >
            {loadingText}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
