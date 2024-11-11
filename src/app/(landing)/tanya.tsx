const Tanya = () => {
  return (
    <section className="h-screen w-full relative bg-neutral-950" id="sampah">
      <div className="absolute h-48 w-full top-0 bg-gradient-to-b from-neutral-950 to-transparent"></div>
      <div className="absolute h-32 w-full bottom-0 bg-gradient-to-t from-neutral-950 to-transparent"></div>
      <main className="w-full h-full flex justify-center items-center">
        <div className="w-8/12 font-bayon text-7xl tracking-wide">
          <h2 className="text-center">Apakah anda</h2>
          <h2 className="text-start">Yakin telah mengetahui</h2>
          <h2 className="text-end">
            tentang <span className="text-[#D64949]">sampah</span>?
          </h2>
        </div>
      </main>
    </section>
  );
};

export default Tanya;
