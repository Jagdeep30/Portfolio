import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Work } from "@/components/work";
import { Toolkit } from "@/components/toolkit";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-[660px] px-6 pb-24 sm:pb-[120px]">
        <Hero />
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Work />
        </Reveal>
        <Reveal>
          <Toolkit />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
        <Footer />
      </main>
    </>
  );
}
