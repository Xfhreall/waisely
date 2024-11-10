import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import definisi from "@/public/assets/definisi.png";
import jenis from "@/public/assets/jenis.png";
import akibat from "@/public/assets/akibat.png";

export function Definisi() {
  const data = [
    {
      title: "definisi",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
            Sampah adalah material atau benda yang tidak lagi diinginkan atau
            digunakan dan dibuang oleh pemiliknya. Dalam pengertian yang lebih
            luas, sampah adalah hasil sampingan dari aktivitas manusia, baik di
            rumah tangga, industri, maupun kegiatan lainnya. Berdasarkan
            penjelasan tersebut sampah merupakan masalah yang kompleks dan
            memerlukan perhatian dari berbagai pihak. Dengan pengelolaan yang
            tepat dan peran aktif masyarakat, sampah bisa dikurangi dan diolah
            menjadi sumber daya yang bermanfaat.
          </p>
          <div>
            <Image
              src={definisi}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jenis",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
            Jenisnya bermacam-macam, diantaranya:
            <br /> Sampah Organik: Sampah yang berasal dari bahan alami dan
            dapat terurai dengan mudah di alam. Sampah Anorganik: Sampah yang
            tidak mudah terurai dengan memerlukan waktu waktu puluhan hingga
            ribuan tahun untuk terurai secara alami dan berasal dari bahan-bahan
            buatan atau hasil industri. Sampah B3 (Bahan Berbahaya dan Beracun):
            Sampah yang mengandung bahan kimia berbahaya dan dapat menimbulkan
            risiko bagi kesehatan dan lingkungan jika tidak dikelola dengan
            baik. Sampah Elektronik (E-Waste): Sampah dari perangkat elektronik
            yang sudah tidak digunakan lagi dan mengandung logam berat yang
            berbahaya bagi kesehatan dan lingkungan.
          </p>

          <div>
            <Image
              src={jenis}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "akibat",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8">
            Sampah yang menumpuk dapat mengakibatkan beberapa pencemaran,
            seperti pencemaran tanah, air, dan udara. Selain dapat mengakibatkan
            pencemaran dapat beresiko terhadap kesehatan, yang mana dengan
            adanya tumpukan sampah dapat menjadi berkembak biaknya sumber
            penyakit. Sumber penyakit dapat berupa bakteri, virus, dan hama
            penyakit, seperti lalat dan tikus.
          </p>

          <div>
            <Image
              src={akibat}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-48 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />{" "}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
