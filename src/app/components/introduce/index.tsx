import dynamic from "next/dynamic";
import React from "react";

const Introduce = () => {
  const IntroComponent = dynamic(() => import("@/components/introduce/Intro"), {
    ssr: false,
  });
  const SkillsComponent = dynamic(
    () => import("@/components/introduce/Skills"),
    {
      ssr: false,
    }
  );
  return (
    <div className="px-4 md:px-20">
      <IntroComponent />
      <SkillsComponent />
    </div>
  );
};

export default Introduce;
