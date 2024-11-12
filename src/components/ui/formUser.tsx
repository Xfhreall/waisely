"use client";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/extension/multi-select";

const formSchema = z.object({
  nama: z.string().min(1, "Masukkan nama anda"),
  telfon: z
    .string()
    .min(13, "Nomor telepon harus minimal 10 digit")
    .max(18, "Nomor telepon tidak boleh lebih dari 15 digit"),
  alamat: z.string().min(3, "Masukkan alamat anda"),
  link: z.string().url("Masukkan link yang valid"),
  jadwal: z.array(z.string()).nonempty("Pilih setidaknya satu hari"),
});

const hari = [
  { value: "Senin", label: "Senin" },
  { value: "Selasa", label: "Selasa" },
  { value: "Rabu", label: "Rabu" },
  { value: "Kamis", label: "Kamis" },
  { value: "Jumat", label: "Jumat" },
  { value: "Sabtu", label: "sabtu" },
  { value: "Minggu", label: "Minggu" },
];
export default function MyForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const date = new Date();

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(JSON.stringify(values));

      toast({
        title: "Data berhasil dikirim!",
        description: "Created at: " + date.toLocaleDateString("id-ID"),
      });
    } catch (error) {
      console.error("Form submission error", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-3xl"
      >
        {/* Form fields */}
        <FormField
          control={form.control}
          name="nama"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input placeholder="Nama" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telfon"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Nomor Telepon</FormLabel>
              <FormControl className="w-full">
                <PhoneInput
                  placeholder="8xxxxx"
                  {...field}
                  defaultCountry="ID"
                  type="number"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="alamat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat</FormLabel>
              <FormControl>
                <Input placeholder="Alamat" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link Google Maps</FormLabel>
              <FormControl>
                <Input placeholder="Link" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jadwal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pilihan Hari:</FormLabel>
              <FormControl>
                <MultiSelector
                  values={field.value}
                  onValuesChange={field.onChange}
                  loop
                  className="w-full"
                >
                  <MultiSelectorTrigger>
                    <MultiSelectorInput
                      placeholder="Pilih hari"
                      className="text-sm w-full"
                    />
                  </MultiSelectorTrigger>
                  <MultiSelectorContent>
                    <MultiSelectorList>
                      {hari.map((data, index) => (
                        <div key={index}>
                          <MultiSelectorItem value={data.value}>
                            {data.label}
                          </MultiSelectorItem>
                        </div>
                      ))}
                    </MultiSelectorList>
                  </MultiSelectorContent>
                </MultiSelector>
              </FormControl>
              <FormDescription>
                Catatan: Privasi data Anda kami pastikan terjaga dengan baik dan
                aman
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-transparent text-neutral-100 border-neutral-100 border rounded-2xl hover:text-neutral-800 py-3 px-10"
          >
            Kirim
          </Button>
        </div>
      </form>
    </Form>
  );
}
