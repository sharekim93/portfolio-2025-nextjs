"use client";
import dynamic from "next/dynamic";
import { useMenuStore } from "./store/menuStore";

const GnbMenu = dynamic(() => import("@/components/Gnb"));

const CanvasArea = dynamic(() => import("@/components/molecules/CanvasArea"), {
  ssr: false,
});

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

export default function Home() {
  const tabIndex = useMenuStore((state) => state.tabIndex);
  return (
    <>
      <GnbMenu />
      <CanvasArea />
      {tabIndex === 0 ? (
        <div className="w-screen h-full px-4 md:px-20">
          <IntroComponent />
          <SkillsComponent />
          <ExperienceComponent />
          <ProjectsComponent />
        </div>
      ) : (
        <div className="w-screen h-screen px-8 md:px-20 flex flex-col justify-center items-center">
          <p className="font-semibold text-black z-1">준비중입니다</p>
        </div>
      )}
      <FloatingActionButtonComponent />
    </>
  );
}
