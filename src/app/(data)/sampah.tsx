"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { capaian: "Pengurangan sampah", kuantitas: 5227607 },
  { capaian: "Sampah tidak tersedia", kuantitas: 14738806 },
  { capaian: "Penanganan sampah", kuantitas: 18436746 },
  { capaian: "Sampah terkelola", kuantitas: 23664353 },
  { capaian: "Timbulan sampah", kuantitas: 38403159 },
];

const chartConfig = {
  kuantitas: {
    label: "ton/tahun",
    color: "#fff",
  },
} satisfies ChartConfig;

export function SampahChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="capaian"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="kuantitas" fill="white" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
