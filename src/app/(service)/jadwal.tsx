"use client";

import React, { useState } from "react";
import Image from "next/image";
import jadwal from "@/public/service/jadwal.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Schedule = {
  location: string;
  time: string;
};

type ScheduleData = {
  [key: string]: Schedule[];
};

const scheduleData: ScheduleData = {
  Senin: [
    { location: "suhat", time: "5-7" },
    { location: "panjaitan", time: "7-9" },
    { location: "veteran", time: "9-11" },
    { location: "sigura", time: "13-15" },
  ],
  Selasa: [
    { location: "suhat", time: "5-9" },
    { location: "veteran", time: "9-10" },
    { location: "sigura - gura", time: "10-12" },
  ],
  Rabu: [
    { location: "suhat", time: "5-8" },
    { location: "sigura - gura", time: "8-11" },
  ],
  Kamis: [
    { location: "panjaitan", time: "5-6" },
    { location: "ijen", time: "6-8" },
    { location: "veteran", time: "8-9" },
    { location: "bendungan sutami", time: "9-11" },
  ],
  Jumat: [
    { location: "suhat", time: "5-6" },
    { location: "ijen", time: "6-8" },
    { location: "veteran", time: "8-11" },
    { location: "merjosari", time: "13-14" },
    { location: "sumbersari", time: "14-15" },
  ],
  Sabtu: [
    { location: "belimbing", time: "5-11" },
    { location: "suhat", time: "13-14" },
    { location: "veteran", time: "14-15" },
  ],
  Minggu: [
    { location: "belimbing", time: "5-7" },
    { location: "suhat", time: "7-8" },
    { location: "ijen", time: "8-11" },
    { location: "veteran", time: "13-15" },
  ],
};

const Jadwal = () => {
  const [selectedDay, setSelectedDay] = useState<string>("");

  return (
    <section
      className="w-full min-h-screen flex relative bg-neutral-950 py-14 text-white"
      id="jadwal"
    >
      <main className="container flex flex-col lg:flex-row gap-12">
        <div className="w-full pt-4 space-y-8">
          <h2 className="font-bayon text-5xl">Jadwal operasi truk</h2>
          <p className="text-xl leading-7">
            Begitu Anda sudah memberikan alamat dengan detail, Anda dapat
            melihat jadwal truk beroperasi di daerah Anda. Dengan begitu Anda
            dapat mempersiapkan dan memperkirakan kapan truk sampah akan tiba.
            Berikut jadwal yang kami sediakan:
          </p>

          <div className="space-y-6">
            <Select onValueChange={setSelectedDay} value={selectedDay}>
              <SelectTrigger className="w-56 h-8 bg-white text-black">
                <SelectValue placeholder="Pilih hari" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-200 text-neutral-800">
                {Object.keys(scheduleData).map((day) => (
                  <SelectItem key={day} value={day}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {selectedDay && (
              <ul className="space-y-3">
                {scheduleData[selectedDay].map((schedule, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="capitalize">{schedule.location}</span>
                    <span className="text-neutral-400">({schedule.time})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex items-center justify-center w-max h-full">
          <Image
            className="object-cover h-full w-60"
            src={jadwal}
            alt="Jadwal Operasi Truk"
            priority
          />
        </div>
      </main>
    </section>
  );
};

export default Jadwal;
