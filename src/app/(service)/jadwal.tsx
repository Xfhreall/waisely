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
import { motion, AnimatePresence } from "framer-motion";
type Schedule = {
  location: string;
  time: string;
};

type ScheduleData = {
  [key: string]: Schedule[];
};

const scheduleData: ScheduleData = {
  Senin: [
    { location: "suhat", time: "05.00-07.00" },
    { location: "panjaitan", time: "07.00-09.00" },
    { location: "veteran", time: "09.00-11.00" },
    { location: "sigura", time: "13.00-15.00" },
  ],
  Selasa: [
    { location: "suhat", time: "05.00-09.00" },
    { location: "veteran", time: "09.00-10.00" },
    { location: "sigura - gura", time: "10.00-12.00" },
  ],
  Rabu: [
    { location: "suhat", time: "05.00-08.00" },
    { location: "sigura - gura", time: "08.00-11.00" },
  ],
  Kamis: [
    { location: "panjaitan", time: "05.00-06.00" },
    { location: "ijen", time: "06.00-08.00" },
    { location: "veteran", time: "08.00-09.00" },
    { location: "bendungan sutami", time: "09.00-11.00" },
  ],
  Jumat: [
    { location: "suhat", time: "05.00-06.00" },
    { location: "ijen", time: "06.00-08.00" },
    { location: "veteran", time: "08.00-11.00" },
    { location: "merjosari", time: "13.00-14.00" },
    { location: "sumbersari", time: "14.00-15.00" },
  ],
  Sabtu: [
    { location: "belimbing", time: "5.00-11.00" },
    { location: "suhat", time: "13.00-14.00" },
    { location: "veteran", time: "14.00-15.00" },
  ],
  Minggu: [
    { location: "belimbing", time: "05.00-07.00" },
    { location: "suhat", time: "07.00-08.00" },
    { location: "ijen", time: "08.00-11.00" },
    { location: "veteran", time: "13.00-15.00" },
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
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedDay}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-3">
                    {scheduleData[selectedDay].map((schedule, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-neutral-200 rounded-full" />
                        <span className="capitalize">{schedule.location},</span>
                        <span className="text-neutral-400">
                          {schedule.time} WIB
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
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
