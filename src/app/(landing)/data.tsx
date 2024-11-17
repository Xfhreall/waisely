"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { SampahChart } from "../(data)/sampah";

export default function Data() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full overflow-x-hidden relative bg-neutral-950 py-8 sm:py-12 lg:py-16 text-neutral-200"
    >
      <motion.main
        className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto h-full flex flex-col space-y-8 sm:space-y-12 justify-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="font-bayon mx-auto w-full"
          variants={itemVariants}
        >
          <div className="hidden sm:block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <motion.h2 variants={itemVariants}>
              Capaian <span className="text-[#D64949]">kinerja</span>
            </motion.h2>
            <motion.h2 className="text-end" variants={itemVariants}>
              pengelolaan <span className="text-[#D64949]">sampah</span>
            </motion.h2>
          </div>
          <div className="sm:hidden block text-5xl">
            <motion.h2 variants={itemVariants} className="text-end pr-12">
              Capaian
            </motion.h2>
            <motion.h2 variants={itemVariants} className="text-center">
              <span className="text-[#D64949]">kinerja</span>
            </motion.h2>
            <motion.h2
              className="text-center tracking-wide"
              variants={itemVariants}
            >
              pengelolaan
            </motion.h2>
            <motion.h2 className="text-end pr-12" variants={itemVariants}>
              <span className="text-[#D64949]">sampah</span>
            </motion.h2>
          </div>
        </motion.div>
        <motion.div className="mx-auto w-full flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          <motion.div
            className="w-full sm:w-7/12 order-2 sm:order-1"
            variants={itemVariants}
          >
            <SampahChart />
          </motion.div>
          <motion.p
            className="text-sm sm:text-base lg:text-lg w-full sm:w-5/12 order-1 sm:order-2 text-center sm:text-left"
            variants={itemVariants}
          >
            Berikut akan kami sajikan data capaian kinerja pengelolaan sampah
            berdasarkan hasil dari penginputan data yang dilakukan oleh 367
            Kabupaten/kota se-Indonesia pada tahun 2023 oleh Kementerian
            Lingkungan Hidup dan Kehutanan Direktorat Jenderal Pengelolaan
            Sampah, Limbah dan B3 Direktorat Penanganan Sampah.
          </motion.p>
        </motion.div>
      </motion.main>
    </section>
  );
}
