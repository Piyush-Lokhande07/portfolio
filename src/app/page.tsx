import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Hero />
      <Education />
      <CompetitiveProgramming />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}