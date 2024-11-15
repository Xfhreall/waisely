import React from "react";
import bg from "@/public/background/solusi.svg";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Solusi = () => {
  return (
    <section className="h-screen w-full relative">
      <Image
        className="object-cover w-full h-auto absolute -z-10"
        src={bg}
        alt="Background"
        fill
      />
      <div className="absolute h-48 w-full top-0 bg-gradient-to-b from-neutral-950 to-transparent"></div>
      <div className="absolute h-32 w-full bottom-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      <main className="w-full h-full flex justify-center items-center">
        <div className="w-10/12 font-bayon text-7xl tracking-wide flex flex-col items-center">
          <TextGenerateEffect words="Maka waisely hadir" />
          <TextGenerateEffect words="sebagai solusi" />
          <TextGenerateEffect words="permasalahan sampah anda" />
        </div>
      </main>
    </section>
  );
};

export default Solusi;
