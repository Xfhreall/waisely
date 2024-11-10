import React from "react";
import { SampahChart } from "../(data)/sampah";

const Data = () => {
  return (
    <section className="h-screen w-full relative bg-neutral-950">
      <main className="w-9/12 mx-auto h-full flex flex-col space-y-12 justify-center">
        <div className=" font-bayon text-8xl mx-auto w-full">
          <h2>Capaian kerja</h2>
          <h2 className="text-end">pengelolaan sampah</h2>
        </div>
        <div className="mx-auto flex items-center space-x-8">
          <div className="max-w-3xl w-7/12">
            <SampahChart />
          </div>
          <p className="text-base w-5/12">
            Berikut akan kami sajikan data capaian kinerja pengelolaan sampah
            berdasarkan hasil dari penginputan data yang dilakukan oleh 367
            Kabupaten/kota se-Indonesia pada tahun 2023 oleh Kementerian
            Lingkungan Hidup dan Kehutanan Direktorat Jenderal Pengelolaan
            Sampah, Limbah dan B3 Direktorat Penanganan Sampah.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Data;
