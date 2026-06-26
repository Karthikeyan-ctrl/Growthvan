import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import Careers from "@/components/Careers";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <Services />
      <Solutions />
      <Industries />
      <Stats />
      <Projects />
      <WhyChooseUs />
      <Testimonials />
      <Technologies />
      <Careers />
      <Blog />
      <Contact />
    </main>
  );
}
