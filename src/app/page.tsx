"use client";

import Hero from "./components/layout/Hero";
import MySkills from "./components/layout/MySkills";
import ExperienceSection from "./components/layout/ExperienceSection";
import ProjectsSection from "./components/common/ProjectSection";
import AboutSection from "./components/common/AboutSection";

/**hydration error due to extensions no on the incognito */
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <MySkills />
      <ProjectsSection />
    </>
  );
}
