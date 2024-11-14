"use client";

import { useState } from "react";
import { service } from "@/lib/service";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CardService = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section
      className="min-h-screen w-full relative bg-neutral-950"
      id="service"
    >
      <main className="w-full h-full flex justify-center items-center py-16">
        <div className="text-8xl space-y-12">
          <h2 className="text-center font-bayon">Layanan</h2>
          <div className="flex items-center gap-16 flex-wrap justify-center">
            {service.map((item, index) => (
              <motion.div
                key={index}
                layoutId={`service-${index}`}
                onClick={() => setSelectedId(index)}
                className="w-[300px] h-[300px] justify-center items-center text-center flex relative cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="object-cover"
                />
                <p className="z-10 absolute max-w-sm text-3xl font-bold space-y-2">
                  {item.title.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="block">
                      {word.toUpperCase()}
                    </span>
                  ))}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence mode="popLayout">
        {selectedId !== null && (
          <motion.div
            layoutId={`service-${selectedId}`}
            className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="bg-neutral-200 p-8 rounded-lg max-w-2xl w-full grid"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={service[selectedId].image}
                alt={service[selectedId].title}
                width={600}
                height={400}
                className="object-cover w-full h-64 mb-4 rounded-xl"
              />
              <div className="text-neutral-800 space-y-2">
                <h3 className="text-3xl font-bold">
                  {service[selectedId].title.toUpperCase()}
                </h3>
                <p className="text-base">{service[selectedId].description}</p>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="bg-neutral-900 text-neutral-100 px-4 py-2 rounded w-20 ml-auto mt-4"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CardService;
