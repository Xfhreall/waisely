import React from "react";
import bg from "@/public/background/hero.svg";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="h-screen w-full relative overflow-clip">
      <Image
        className="absolute -z-10 object-cover"
        src={bg}
        alt="Background"
        fill
      />
      <div className="absolute h-48 w-full bottom-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      <main className="w-10/12 h-full flex mx-auto">
        <div className="my-auto w-10/12 space-y-4">
          <h1 className="font-bayon text-8xl">Waisely</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            deleniti vel ullam culpa omnis rerum recusandae consectetur voluptas
            quod tempora! Voluptatum, harum voluptate tenetur nostrum quod animi
            quam adipisci corrupti.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Hero;
