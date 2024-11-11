import { StaticImageData } from "next/image";
import service1 from "@/public/service/service1.png";
import service2 from "@/public/service/service2.png";
import service3 from "@/public/service/service3.png";

type serviceProps = { image: StaticImageData; description: string };
export const service: serviceProps[] = [
  {
    image: service1,
    description: "Jemput Sampah",
  },
  {
    image: service2,
    description: "Jadwal Operasi Truk",
  },
  {
    image: service3,
    description: "Kondisi darurat",
  },
];
