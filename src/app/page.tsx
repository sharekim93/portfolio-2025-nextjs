"use client";
import dynamic from "next/dynamic";
import { useMenuStore } from "@/store/menuStore";
import GnbMenu from "@/components/molecules/Gnb";
import Resume from "@/components/resume";
import Introduce from "@/components/introduce";

const CanvasArea = dynamic(() => import("@/components/molecules/CanvasArea"), {
  ssr: false,
});

export default function Home() {
  const tabIndex = useMenuStore((state) => state.tabIndex);
  return (
    <div className="w-full h-full ">
      <GnbMenu />
      <div className="mt-10">{tabIndex === 0 ? <Introduce /> : <Resume />}</div>
      {tabIndex === 0 ? <CanvasArea /> : undefined}
    </div>
  );
}
