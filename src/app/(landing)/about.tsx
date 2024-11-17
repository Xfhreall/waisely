"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import bg from "@/public/background/about.svg";

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section ref={ref} className="h-screen w-full relative" id="about">
      <Image
        className="object-cover w-full h-full transform scale-x-[-1] -z-10"
        src={bg}
        alt="Background"
        fill
      />
      <div className="absolute h-48 w-full top-0 bg-gradient-to-b from-neutral-950 to-transparent"></div>
      <div className="absolute h-32 w-full bottom-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      <main className="w-10/12 h-full mx-auto">
        <div className="flex flex-col sm:flex-row items-center h-full justify-center w-full space-x-0 sm:space-x-8">
          <div className="font-bayon text-6xl sm:text-8xl w-9/12 sm:w-5/12 mb-4 sm:mb-0">
            <motion.h2
              className="text-star"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeRight}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Tentang
            </motion.h2>
            <motion.h2
              className="text-end"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeRight}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Waisely
            </motion.h2>
          </div>
          <motion.p
            className="w-11/12 sm:w-7/12 leading-6 sm:leading-8 text-xs sm:text-base text-center sm:text-start"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeLeft}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {`Waisely adalah platform atau layanan yang berfokus pada pengelolaan sampah secara bijak dan bertanggung jawab. Nama Waisely merupakan akronim dari kata "Waste" (sampah) dan "Wisely" (dengan bijak), yang mencerminkan misi utama platform ini yaitu, membantu masyarakat mengelola sampah dengan cara yang lebih efektif, berkelanjutan, dan ramah lingkungan. Melalui pemberdayaan masyarakat dan edukasi yang terus dikembangkan, Waisely berkomitmen menciptakan ekosistem hijau yang mendukung pembangunan berkelanjutan serta masa depan yang cerah bagi generasi mendatang.`}
          </motion.p>
        </div>
      </main>
    </section>
  );
};

export default About;
