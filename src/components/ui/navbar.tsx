"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
export function Navbar() {
  const navItems = [
    {
      name: "Tentang Kami",
      link: "#about",
    },
    {
      name: "Sampah",
      link: "#sampah",
    },
    {
      name: "Layanan",
      link: "#service",
      dropdownItems: [
        { name: "Jemput Sampah", link: "#jemput" },
        { name: "Jadwal Operasi Truk", link: "#jadwal" },
        { name: "Kondisi Darurat", link: "#darurat" },
      ],
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
