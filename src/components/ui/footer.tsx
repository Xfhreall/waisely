import Link from "next/link";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";
import Image from "next/image";
import logo from "@/public/assets/title.svg";

export default function Footer() {
  return (
    <footer
      className="bg-neutral-950 text-white w-full min-h-[45vh] px-6 grid items-end py-4"
      id="footer"
    >
      <div className="mx-auto w-10/12">
        <div className="flex flex-col md:flex-row sm:justify-between items-center gap-8">
          <div className="flex flex-col items-center">
            <Image
              src={logo}
              alt="logo"
              className="h-auto w-48 sm:w-52 invert sm:mr-auto"
            />
            <p className="text-sm md:text-base max-w-md font-semibold text-center sm:text-start pt-2 sm:pt-0">
              Kelola Sampah Anda, Kami Tuntaskan dengan Tuntas!
            </p>
          </div>
          <div className="space-y-3 scale-75 sm:scale-100">
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
          <p className="text-xs sm:text-sm text-neutral-200 text-center w-max">
            © 2024 Tim Aduh Apaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
