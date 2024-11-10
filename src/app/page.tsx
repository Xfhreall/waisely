import About from "./(landing)/about";
import Data from "./(landing)/data";
import { Definisi } from "./(landing)/definisi";
import Form from "./(landing)/form";
import Hero from "./(landing)/hero";
import Solusi from "./(landing)/solusi";
import Tanya from "./(landing)/tanya";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tanya />
      <Definisi />
      <Data />
      <Solusi />
      <Form />
    </>
  );
}
