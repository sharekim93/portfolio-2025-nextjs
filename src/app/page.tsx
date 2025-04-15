"use client";
import dynamic from "next/dynamic";
import { useMenuStore } from "@/store/menuStore";
import GnbMenu from "@/components/molecules/Gnb";

const CanvasArea = dynamic(() => import("@/components/molecules/CanvasArea"), {
  ssr: false,
});

const IntroComponent = dynamic(() => import("@/components/Intro"), {
  ssr: false,
});
const SkillsComponent = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});
const CareersComponent = dynamic(() => import("@/components/Careers"), {
  ssr: false,
});

export default function Home() {
  const tabIndex = useMenuStore((state) => state.tabIndex);
  return (
    <div className="w-full h-full ">
      <GnbMenu />
      {tabIndex === 0 ? (
        <div className="px-4 md:px-20">
          <IntroComponent />
          <SkillsComponent />
          <CareersComponent />
        </div>
      ) : (
        <div className="w-screen h-screen px-8 md:px-20 flex flex-col justify-center items-center">
          <p className="font-semibold text-black z-1">준비중입니다</p>
        </div>
      )}
      <CanvasArea />
    </div>
  );
}
