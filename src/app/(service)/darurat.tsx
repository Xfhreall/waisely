import React from "react";
import Image from "next/image";
import darurat from "@/public/service/darurat.png";

const Darurat = () => {
  return (
    <section
      className="w-full min-h-screen flex relative bg-neutral-950 py-14"
      id="darurat"
    >
      <main className="container flex gap-12">
        <div className="flex items-center justify-center w-max h-full">
          <Image
            className=" object-cover h-full w-60"
            src={darurat}
            alt="Jemput"
          />
        </div>
        <div className="w-full pt-4 space-y-4 ">
          <h2 className="font-bayon text-5xl">Kondisi Darurat</h2>
          <p className="text-xl leading-7">
            Bagi Anda yang membutuhkan pengangkutan sampah secara mendadak,
            terutama ketika Anda memiliki acara besar yang menghasilkan sampah
            dalam kuantitas yang banyak, untuk menghindari penumpukan sampah
            Anda dapat menghubungi kami. Perlu diingat bahwa layanan ini hanya
            diperuntukan untuk Anda yang berlangganan pada website kami. Jika
            Anda memerlukan layanan ini, Anda bisa mengunjungi section “Temukan
            kami” agar kami dapat memverifikasi keberadaan anda. Berikut section
            terkait informasi dimana Anda dapat meminta bantuan :
          </p>
          <button className="border border-white py-3 px-10 rounded-[20px]">
            Hubungi Kami
          </button>
        </div>
      </main>
    </section>
  );
};

export default Darurat;
