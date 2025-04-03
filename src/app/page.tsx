"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// CanvasArea를 별도로 로드
const CanvasArea = dynamic(() => import("@/components/molecules/CanvasArea"), {
  ssr: false,
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <>
      {mounted && <CanvasArea />}
      <div className="container w-screen h-full px-8 md:px-20">
        <IntroComponent />
        <SkillsComponent />
        <ExperienceComponent />
        <ProjectsComponent />
        <FloatingActionButtonComponent />
      </div>
    </>
  );
}
