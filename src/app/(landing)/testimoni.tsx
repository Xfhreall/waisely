"use client";

import { useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import desta from "@/public/testimoni/desta.jpg";
import mozaki from "@/public/testimoni/mozaki.jpg";
import fauzan from "@/public/testimoni/fauzan.jpg";
import farel from "@/public/testimoni/farel.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string | StaticImageData;
  rating: number;
};

type TestimonialCategories = "rumah tangga" | "pengada acara" | "darurat";

type AllTestimonials = {
  [Categories in TestimonialCategories]: Testimonial[];
};

export function Testimoni() {
  const allTestimonials: AllTestimonials = {
    "rumah tangga": [
      {
        quote:
          "Layanan pengangkutan sampah rumah tangga sangat membantu. Tepat waktu dan bersih!",
        name: "Ferrel Desta",
        designation: "Kepala Keluarga",
        src: desta,
        rating: 5,
      },
      {
        quote:
          "Sangat puas dengan layanan ini. Membuat rumah kami selalu bersih dan nyaman.",
        name: "Mozaki",
        designation: "Ibu Rumah Tangga",
        src: mozaki,
        rating: 4.5,
      },
    ],
    "pengada acara": [
      {
        quote:
          "Pengelolaan sampah acara kami jadi lebih mudah. Terima kasih atas layanan profesionalnya!",
        name: "Muhammad Fauzan",
        designation: "Event Organizer",
        src: fauzan,
        rating: 5,
      },
      {
        quote:
          "Acara kami berjalan lancar tanpa masalah sampah. Layanan yang sangat direkomendasikan!",
        name: "Dewi Lestari",
        designation: "Manajer Acara",
        src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4.5,
      },
    ],
    darurat: [
      {
        quote:
          "Tim pengangkut sampah sangat efisien, tangkas, dan ramah. Mereka benar-benar memahami pekerjaan mereka dalam keadaan darurat.",
        name: "Farel",
        designation: "Manajer Properti",
        src: farel,
        rating: 5,
      },
      {
        quote:
          "Layanan pengangkutan sampah yang cepat dan bersih. Sangat membantu bisnis kami.",
        name: "Linda Wijaya",
        designation: "Pemilik Restoran",
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rating: 4,
      },
    ],
  };

  const [activeService, setActiveService] =
    useState<TestimonialCategories>("rumah tangga");

  const serviceCol = [
    { title: "rumah tangga" },
    { title: "pengada acara" },
    { title: "darurat" },
  ];

  const handleServiceClick = (title: TestimonialCategories) => {
    setActiveService(title);
  };

  return (
    <section className="min-h-screen w-full bg-black text-white py-16">
      <h2 className="font-bayon text-7xl md:text-8xl text-center mb-16">
        TESTIMONI
      </h2>
      <main className="flex flex-col md:flex-row w-full container relative h-full">
        <div className="w-full md:w-1/3 flex flex-col space-y-4 items-center justify-center border-r-2 border-neutral-300">
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
            className="w-full md:w-2/3 pl-8"
          >
            <AnimatedTestimonials
              testimonials={allTestimonials[activeService]}
            />
          </motion.div>
        </AnimatePresence>
      </main>
    </section>
  );
}
