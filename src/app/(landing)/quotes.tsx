import Image from "next/image";
import bg from "@/public/background/quotes.svg";

const Quotes = () => {
  return (
    <section className="h-screen w-full relative" id="sampah">
      <Image
        className="object-cover w-full h-full -z-10"
        src={bg}
        alt="Background"
        fill
      />
      <div className="absolute h-48 w-full top-0 bg-gradient-to-b from-neutral-950 to-transparent"></div>
      <div className="absolute h-32 w-full bottom-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      <main className="w-full h-full flex justify-center items-center">
        <div className="w-8/12 space-y-8">
          <div className=" font-bayon text-7xl tracking-wide">
            <h2 className="text-start pl-14">&quot;Hijau dan bersih</h2>
            <h2 className="text-center">
              Bukan hanya sebuah{" "}
              <span className="text-[#D64949]">aspirasi</span>
            </h2>
            <h2 className="text-end translate-x-10">
              tetapi sebuah <span className="text-[#D64949]">tindakan</span>
              .&quot;
            </h2>
          </div>
          <h3 className="text-center font-bold text-lg">- Christine Pelosi</h3>
        </div>
      </main>
    </section>
  );
};

export default Quotes;
