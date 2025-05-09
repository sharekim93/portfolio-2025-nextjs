"use client";
import { useMenuStore } from "@/store/menuStore";
import GnbMenu from "@/components/ui/molecules/Gnb";
import Resume from "@/components/resume";
import Introduce from "@/components/introduce";

export default function Home() {
  const tabIndex = useMenuStore((state) => state.tabIndex);
  return (
    <div className="w-full h-full ">
      <GnbMenu />
      <div className="mt-10">{tabIndex === 0 ? <Introduce /> : <Resume />}</div>
      {/* {tabIndex === 0 ? <CanvasArea /> : undefined} */}
    </div>
  );
}
