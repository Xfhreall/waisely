import { StaticImageData } from "next/image";
import desta from "@/public/testimoni/desta.jpg";
import mozaki from "@/public/testimoni/mozaki.jpg";
import fauzan from "@/public/testimoni/fauzan.jpg";
import farel from "@/public/testimoni/farel.jpg";

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
      rating: 4.5,
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
      name: "Dewi Lestari",
      role: "Manajer Acara",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      name: "Linda Wijaya",
      role: "Pemilik Restoran",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
    },
  ],
};

export const serviceCol = [
  { title: "rumah tangga" },
  { title: "pengada acara" },
  { title: "darurat" },
];
