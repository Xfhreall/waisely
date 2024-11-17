import Image from "next/image";
import jemput from "@/public/service/jemput.png";
import Form from "../(landing)/form";
const Jemput = () => {
  return (
    <section
      className="w-full min-h-screen flex relative justify-center bg-neutral-950 py-14"
      id="jemput"
    >
      <main className="flex flex-col sm:flex-row gap-8 justify-center items-center w-10/12">
        <div className="flex items-center justify-center w-max h-full">
          <Image
            className="object-cover h-[90px] sm:h-full w-[300px] sm:w-60"
            src={jemput}
            alt="Jemput"
          />
        </div>
        <div className="w-full pt-4 space-y-4 grid">
          <h2 className="font-bayon text-5xl text-center sm:text-start">
            Jemput sampah
          </h2>
          <p className="text-sm sm:text-xl text-center sm:text-start">
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
