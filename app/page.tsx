import { Contact } from "@/components/sections/Contact/Contact";
import { FAQ } from "@/components/sections/FAQ/FAQ";
import { Guarantees } from "@/components/sections/Guarantees/Guarantees";
import { Hero } from "@/components/sections/Hero/Hero";
import { Portfolio } from "@/components/sections/Portfolio/Portfolio";
import { Process } from "@/components/sections/Process/Process";
import { Services } from "@/components/sections/Services/Services";
import { Specialties } from "@/components/sections/Specialties/Specialties";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar/TrustBar";
import { WhyUs } from "@/components/sections/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Specialties />
      <WhyUs />
      <Process />
      <Portfolio />
      <Guarantees />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
