import React from "react";
import Image from "next/image";
import darurat from "@/public/service/darurat.png";
import Link from "next/link";

const Darurat = () => {
  return (
    <section
      className="w-full min-h-screen flex relative bg-neutral-950 py-14 text-neutral-200"
      id="darurat"
    >
      <main className="flex flex-col sm:flex-row gap-12 w-10/12 mx-auto">
        <div className="flex items-center justify-center w-max h-full">
          <Image
            className=" object-cover h-[90px] w-[300px] sm:h-full sm:w-60"
            src={darurat}
            alt="Jemput"
          />
        </div>
        <div className="w-full pt-4 space-y-4 ">
          <h2 className="font-bayon text-5xl text-center sm:text-start">
            Kondisi Darurat
          </h2>
          <p className="text-sm sm:text-xl leading-6 sm:leading-7 text-center sm:text-start">
            Bagi Anda yang membutuhkan pengangkutan sampah secara mendadak,
            terutama ketika Anda memiliki acara besar yang menghasilkan sampah
            dalam kuantitas yang banyak, untuk menghindari penumpukan sampah
            Anda dapat menghubungi kami. Perlu diingat bahwa layanan ini hanya
            diperuntukan untuk Anda yang berlangganan pada website kami. Jika
            Anda memerlukan layanan ini, Anda bisa mengunjungi section “Temukan
            kami” agar kami dapat memverifikasi keberadaan anda. Berikut section
            terkait informasi dimana Anda dapat meminta bantuan :
          </p>
          <button className="border border-white py-3 px-10 rounded-[20px] hover:bg-neutral-100 hover:text-neutral-700 transition duration-300 translate-x-1/4 sm:translate-x-0">
            <Link href="#footer">Hubungi kami</Link>
          </button>
        </div>
      </main>
    </section>
  );
};

export default Darurat;
