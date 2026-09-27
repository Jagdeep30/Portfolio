import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Work } from "@/components/work";
import { Toolkit } from "@/components/toolkit";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

/** Tells search engines this page is about a person, and where else they can be found. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressCountry: "IN" },
  worksFor: { "@type": "Organization", name: "Aztlan" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Chitkara University" },
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
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
