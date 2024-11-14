import { StaticImageData } from "next/image";
import service1 from "@/public/service/service1.png";
import service2 from "@/public/service/service2.png";
import service3 from "@/public/service/service3.png";

type serviceProps = {
  image: StaticImageData;
  title: string;
  description: string;
};
export const service: serviceProps[] = [
  {
    image: service1,
    title: "Jemput Sampah",
    description:
      "Menyediakan layanan pengangkutan sampah rutin, yang tetap beroperasi bahkan di hari libur!",
  },
  {
    image: service2,
    title: "Jadwal Operasi Truk",
    description:
      "Anda dapat melihat jadwal operasi truk di area Anda sehingga akan bisa lebih siap dan tahu kapan truk sampah akan tiba di lokasi Anda!",
  },
  {
    image: service3,
    title: "Kondisi darurat",
    description:
      "Butuh pengangkutan sampah mendadak? Untuk acara besar atau saat volume sampah meningkat, hindari penumpukan dengan memanfaatkan layanan darurat kami!",
  },
];
