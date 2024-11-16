import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./(landing)/hero"));
const About = dynamic(() => import("./(landing)/about"));
const Tanya = dynamic(() => import("./(landing)/tanya"));
const Definisi = dynamic(() => import("./(landing)/definisi"));
const Data = dynamic(() => import("./(landing)/data"));
const Solusi = dynamic(() => import("./(landing)/solusi"));
const Service = dynamic(() => import("./(landing)/service"));
const Testimoni = dynamic(() => import("./(landing)/testimoni"));
const Quotes = dynamic(() => import("./(landing)/quotes"));

export default function Home() {
  return (
    <main className="relative">
      <section className="-z-[11] sticky top-0">
        <Hero />
      </section>
      <section className="z-10 shadow-xl">
        <About />
        <Tanya />
        <Definisi />
        <Data />
        <Solusi />
        <Service />
        <Testimoni />
        <Quotes />
      </section>
    </main>
  );
}
