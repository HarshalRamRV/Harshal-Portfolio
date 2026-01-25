import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="glow-line" />
      <Experience />
      <div className="glow-line" />
      <Projects />
      <div className="glow-line" />
      <Contact />
    </>
  );
}
