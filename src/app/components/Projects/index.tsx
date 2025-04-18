"use client";

import dynamic from "next/dynamic";

import { motion } from "motion/react";
import { fadeIn } from "@/styles/animation";

import useObserver from "@/hooks/useObserver";

export default function Projects() {
  const { ref, animation } = useObserver();

  const ProjectChexcarDealer = dynamic(() => import("./ProjectChexcarDealer"), {
    ssr: false,
  });
  const ProjectChexcarPartners = dynamic(
    () => import("./ProjectChexcarPartners"),
    { ssr: false }
  );
  const ProjectLabelArtist = dynamic(() => import("./ProjectLabelArtist"), {
    ssr: false,
  });

  return (
    <motion.section
      id="projects"
      title="Projects"
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={fadeIn}
      className="w-full h-full min-h-screen flex flex-col justify-center items-start"
    >
      <h2 className="text-3xl font-bold mb-4 text-foreground">Projects</h2>
      <ul className="list-image-none list-inside gap-4 mt-4">
        <ProjectChexcarPartners />
        <ProjectChexcarDealer />
        <ProjectLabelArtist />
      </ul>
    </motion.section>
  );
}
