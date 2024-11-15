import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Tanya = () => {
  return (
    <section className="h-screen w-full relative bg-neutral-950" id="sampah">
      <div className="absolute h-48 w-full top-0 bg-gradient-to-b from-neutral-950 to-transparent"></div>
      <div className="absolute h-32 w-full bottom-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      <main className="w-full h-full flex justify-center items-center">
        <div className="w-9/12 font-bayon text-7xl tracking-wide flex flex-col">
          <div className="self-center">
            <TextGenerateEffect words="Apakah anda" />
          </div>
          <div className="self-start">
            <TextGenerateEffect words="Yakin telah mengetahui" />
          </div>
          <div className="self-end">
            <TextGenerateEffect words="tentang sampah ?" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default Tanya;
