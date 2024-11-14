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
              <div
                key={index}
                className="w-[300px] h-[300px] relative cursor-pointer"
                onClick={() => setSelectedId(index)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <motion.div
                  layoutId={`service-content-${index}`}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
                >
                  <p className="z-10 max-w-sm text-3xl font-bold text-center text-white">
                    {item.title.split(" ").map((word, wordIndex) => (
                      <span key={wordIndex} className="block">
                        {word.toUpperCase()}
                      </span>
                    ))}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center z-50"
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
              <motion.div
                layoutId={`service-content-${selectedId}`}
                className="text-neutral-800 space-y-2"
              >
                <h3 className="text-3xl font-bold">
                  {service[selectedId].title.toUpperCase()}
                </h3>
                <p className="text-base">{service[selectedId].description}</p>
              </motion.div>
              <button
                onClick={() => setSelectedId(null)}
                className="bg-neutral-900 text-neutral-100 px-4 py-2 rounded w-20 ml-auto mt-4"
                aria-label="Close details"
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
