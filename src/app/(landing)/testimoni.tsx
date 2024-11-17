"use client";

import { useState } from "react";
import AnimatedTestimonials from "@/components/ui/animated-testimonials";
import { motion, AnimatePresence } from "framer-motion";
import {
  allTestimonials,
  serviceCol,
  TestimonialCategories,
} from "@/lib/testimoni";

const Testimoni = () => {
  const [activeService, setActiveService] =
    useState<TestimonialCategories>("rumah tangga");

  const handleServiceClick = (title: TestimonialCategories) => {
    setActiveService(title);
  };

  return (
    <section className="min-h-screen w-full bg-black text-white py-16">
      <h2 className="font-bayon text-7xl md:text-8xl text-center mb-16">
        TESTIMONI
      </h2>
      <main className="flex flex-col md:flex-row w-10/12 sm:w-11/12 md:10/12 mx-auto relative h-full">
        <div className="w-full md:w-1/3 flex flex-col space-y-4 items-center justify-center md:border-r-2 border-neutral-300">
          {serviceCol.map((item) => (
            <div
              key={item.title}
              className={`px-10 py-2 rounded-xl transition-colors cursor-pointer ${
                activeService === item.title
                  ? "bg-red-500"
                  : "hover:bg-red-500/10"
              }`}
              onClick={() =>
                handleServiceClick(item.title as TestimonialCategories)
              }
            >
              <span className="text-base font-medium whitespace-nowrap">
                {item.title.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full md:w-2/3 pl-0 md:pl-8"
          >
            <AnimatedTestimonials
              testimonials={allTestimonials[activeService]}
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </section>
  );
};

export default Testimoni;
