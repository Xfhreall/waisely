import Image from "next/image";
import jemput from "@/public/service/jemput.png";
import Form from "../(landing)/form";
const Jemput = () => {
  return (
    <section className="w-full min-h-screen flex relative bg-neutral-950 py-14">
      <main className="container flex gap-8">
        <div className="flex items-center justify-center w-max h-full">
          <Image
            className=" object-cover h-full w-60"
            src={jemput}
            alt="Jemput"
          />
        </div>
        <div className="w-full pt-4 space-y-4">
          <h2 className="font-bayon text-5xl">Jemput sampah</h2>
          <p className="text-xl">
            Dalam proses pengangkutan sampah, kami mengunjungi lokasi yang sudah
            berlangganan pada website kami. Oleh karena itu, kami perlu
            memverifikasi keberadaan Anda dengan memberikan alamat detail Anda
            pada kami. Bagi Anda yang ingin berlangganan pada website kami,
            cukup dengan melengkapi data berikut :
          </p>
          <Form />
        </div>
      </main>
    </section>
  );
};

export default Jemput;
