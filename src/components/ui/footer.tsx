import Link from "next/link";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer
      className="bg-neutral-950 text-white w-full h-[45vh] px-6 grid items-end py-4"
      id="footer"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-8xl font-bayon tracking-tighter">WAISELY</h2>
            <p className="text-sm md:text-base max-w-md font-semibold">
              Kelola Sampah Anda, Kami Tuntaskan dengan Tuntas!
            </p>
          </div>
          <div className="space-y-3">
            <Link
              href="mailto:waisely.bantuan@gmail.com"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <IconMail className="h-7 w-7 bg-neutral-200 text-black rounded-full p-1" />
              waisely.bantuan@gmail.com
            </Link>
            <Link
              href="https://wa.me/621515603020"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors underline"
            >
              <IconBrandWhatsapp className="h-7 w-7 bg-neutral-200 text-black rounded-full p-1" />
              +6215-1560-3020
            </Link>
            <Link
              href="https://instagram.com/waisely._"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <IconBrandInstagram className="h-7 w-7 bg-neutral-200 text-black rounded-full p-1" />
              waisely._
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-neutral-200 text-center">
            © 2024 Tim Aduh Apaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
