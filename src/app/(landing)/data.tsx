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
        threshold: 0.8,
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
      className="min-h-screen w-full relative bg-neutral-950"
    >
      <motion.main
        className="w-9/12 mx-auto h-full flex flex-col space-y-12 justify-center py-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="font-bayon text-8xl mx-auto w-full"
          variants={itemVariants}
        >
          <motion.h2 variants={itemVariants}>Capaian kerja</motion.h2>
          <motion.h2 className="text-end" variants={itemVariants}>
            pengelolaan sampah
          </motion.h2>
        </motion.div>
        <motion.div className="mx-auto flex items-center space-x-8">
          <motion.div className="max-w-3xl w-7/12" variants={itemVariants}>
            <SampahChart />
          </motion.div>
          <motion.p className="text-base w-5/12" variants={itemVariants}>
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
