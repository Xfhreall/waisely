"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import { motion } from "framer-motion";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
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
          className="relative"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2,
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
          <div className="absolute font-bayon -bottom-12 left-1/2 -translate-x-1/2 text-neutral-800 text-xl tracking-widest animate-pulse">
            LOADING...
          </div>
        </motion.div>
      </div>
    </div>
  );
}
