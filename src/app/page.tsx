"use client";

import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import MySkills from "./components/layout/MySkills";
import ExperienceSection from "./components/layout/ExperienceSection";

/**hydration error due to extensions no on the incognito */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <MySkills />
    </>
  );
}
