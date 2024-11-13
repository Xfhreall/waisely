import { service } from "@/lib/service";
import Image from "next/image";

const CardService = () => {
  const serviceData = service;
  return (
    <section className="h-screen w-full relative bg-neutral-950" id="service">
      <main className="w-full h-full flex justify-center items-center">
        <div className="text-8xl space-y-12">
          <h2 className="text-center font-bayon">Layanan</h2>
          <div className="flex items-center gap-16">
            {serviceData.map((item, index) => (
              <div
                key={index}
                className="w-full justify-center items-center text-center flex relative"
              >
                <Image
                  src={item.image}
                  alt={item.description}
                  width={300}
                  height={300}
                  className="object-cover"
                />
                <p className="z-10 absolute max-w-sm text-3xl font-bold space-y-2">
                  {item.description.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="block">
                      {word.toUpperCase()}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default CardService;
