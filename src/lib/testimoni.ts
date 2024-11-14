import { StaticImageData } from "next/image";
import desta from "@/public/testimoni/desta.jpg";
import mozaki from "@/public/testimoni/mozaki.jpg";
import fauzan from "@/public/testimoni/fauzan.jpg";
import farel from "@/public/testimoni/farel.jpg";
import melody from "@/public/testimoni/melody.jpg";
import zahra from "@/public/testimoni/zahra.jpg";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  src: string | StaticImageData;
  rating: number;
};

export type TestimonialCategories =
  | "rumah tangga"
  | "pengada acara"
  | "darurat";

export type AllTestimonials = {
  [Category in TestimonialCategories]: Testimonial[];
};

export const allTestimonials: AllTestimonials = {
  "rumah tangga": [
    {
      quote:
        "Layanan pengangkutan sampah rumah tangga sangat membantu. Tepat waktu dan bersih!",
      name: "Ferrel Desta",
      role: "Kepala Keluarga",
      src: desta,
      rating: 5,
    },
    {
      quote:
        "Sangat puas dengan layanan ini. Membuat rumah kami selalu bersih dan nyaman.",
      name: "Mozaki",
      role: "Kepala Keluarga",
      src: mozaki,
      rating: 5,
    },
  ],
  "pengada acara": [
    {
      quote:
        "Pengelolaan sampah acara kami jadi lebih mudah. Terima kasih atas layanan profesionalnya!",
      name: "Muhammad Fauzan",
      role: "Event Organizer",
      src: fauzan,
      rating: 5,
    },
    {
      quote:
        "Acara kami berjalan lancar tanpa masalah sampah. Layanan yang sangat direkomendasikan!",
      name: "Vincetia Melody",
      role: "Manajer Acara",
      src: melody,
      rating: 4.5,
    },
  ],
  darurat: [
    {
      quote:
        "Tim pengangkut sampah sangat efisien, tangkas, dan ramah. Mereka benar-benar memahami pekerjaan mereka dalam keadaan darurat.",
      name: "Risqi Fahreal",
      role: "Manajer Properti",
      src: farel,
      rating: 5,
    },
    {
      quote:
        "Layanan pengangkutan sampah yang cepat dan bersih. Sangat membantu bisnis kami.",
      name: "Ana Zahra",
      role: "Pemilik Restoran",
      src: zahra,
      rating: 4.4,
    },
  ],
};

export const serviceCol = [
  { title: "rumah tangga" },
  { title: "pengada acara" },
  { title: "darurat" },
];
