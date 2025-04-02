"use client";
import dynamic from "next/dynamic";

export default function Home() {
  const IntroComponent = dynamic(() => import("@/components/Intro"), {
    ssr: false,
  });
  const SkillsComponent = dynamic(() => import("@/components/Skills"), {
    ssr: false,
  });
  const ExperienceComponent = dynamic(() => import("@/components/Experience"), {
    ssr: false,
  });
  const ProjectsComponent = dynamic(() => import("@/components/Projects"), {
    ssr: false,
  });
  const FloatingActionButtonComponent = dynamic(
    () => import("@/components/molecules/FloatingActionButton"),
    { ssr: false }
  );
  const CanvasArea = dynamic(
    () => import("@/components/molecules/CanvasArea"),
    { ssr: false }
  );

  return (
    <div className="container w-screen h-full px-8 md:px-20">
      <IntroComponent />
      <SkillsComponent />
      <ExperienceComponent />
      <ProjectsComponent />
      <FloatingActionButtonComponent />
      <CanvasArea />
    </div>
  );
}
