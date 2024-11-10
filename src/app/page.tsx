import About from "./(landing)/about";
import Data from "./(landing)/data";
import { Definisi } from "./(landing)/definisi";
import Hero from "./(landing)/hero";
import Solusi from "./(landing)/solusi";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Definisi />
      <Data />
      <Solusi />
    </>
  );
}
