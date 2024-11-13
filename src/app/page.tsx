import About from "./(landing)/about";
import Data from "./(landing)/data";
import { Definisi } from "./(landing)/definisi";
import Hero from "./(landing)/hero";
import Quotes from "./(landing)/quotes";
import Service from "./(landing)/service";
import Solusi from "./(landing)/solusi";
import Tanya from "./(landing)/tanya";
import { Testimoni } from "./(landing)/testimoni";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tanya />
      <Definisi />
      <Data />
      <Solusi />
      <Service />
      <Testimoni />
      <Quotes />
    </>
  );
}
