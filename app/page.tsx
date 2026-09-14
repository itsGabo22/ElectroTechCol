import { Contact } from "@/components/sections/Contact/Contact";
import { FAQ } from "@/components/sections/FAQ/FAQ";
import { Hero } from "@/components/sections/Hero/Hero";
import { Process } from "@/components/sections/Process/Process";
import { Services } from "@/components/sections/Services/Services";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar/TrustBar";
import { WhyUs } from "@/components/sections/WhyUs/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
