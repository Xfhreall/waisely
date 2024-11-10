import React from "react";
import bg from "@/public/background/solusi.svg";
import Image from "next/image";

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
        <div className="w-10/12 font-bayon text-7xl">
          <h3 className="font-bold text-center text-white">
            Maka Waisely hadir
          </h3>
          <h3 className="font-bold text-center text-white">
            sebagai <span className="text-[#D64949]">solusi</span>
          </h3>
          <h3 className="font-bold text-center text-white">
            permasalahan sampah anda
          </h3>
        </div>
      </main>
    </section>
  );
};

export default Solusi;
