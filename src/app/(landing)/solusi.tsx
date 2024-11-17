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
          <div className="hidden sm:block text-center">
            <TextGenerateEffect words="Maka waisely hadir" />
            <TextGenerateEffect words="sebagai solusi" />
            <TextGenerateEffect words="permasalahan sampah anda" />
          </div>
          <div className="sm:hidden block">
            <TextGenerateEffect
              words="Maka waisely"
              className="text-start pr-12"
            />
            <TextGenerateEffect words="hadir sebagai" className="text-end" />
            <TextGenerateEffect words="solusi" className="text-center" />
            <TextGenerateEffect words="permasalahan" className="text-start" />
            <TextGenerateEffect words="sampah anda" className="text-end" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Solusi;
