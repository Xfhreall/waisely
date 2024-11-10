import React from "react";
import Image from "next/image";
import bg from "@/public/background/about.svg";

const About = () => {
  return (
    <section className="h-screen w-full relative">
      <Image
        className="object-cover w-full h-full transform scale-x-[-1] -z-10"
        src={bg}
        alt="Background"
        fill
      />
      <div className="absolute h-48 w-full top-0 bg-gradient-to-b from-neutral-950 to-transparent"></div>
      <div className="absolute h-32 w-full bottom-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      <main className="w-10/12 h-full mx-auto">
        <div className="flex items-center h-full w-full space-x-8">
          <div className="font-bayon text-8xl w-5/12">
            <h2 className="text-start">Tentang</h2>
            <h2 className="text-end">Waisely</h2>
          </div>
          <p className="w-7/12 leading-8">
            {`Waisely adalah platform atau layanan yang berfokus pada pengelolaan
          sampah secara bijak dan bertanggung jawab. Nama Waisely merupakan
          akronim dari kata "Waste" (sampah) dan "Wisely" (dengan bijak), yang
          mencerminkan misi utama platform ini yaitu, membantu masyarakat
          mengelola sampah dengan cara yang lebih efektif, berkelanjutan, dan
          ramah lingkungan.`}
          </p>
        </div>
      </main>
    </section>
  );
};

export default About;
