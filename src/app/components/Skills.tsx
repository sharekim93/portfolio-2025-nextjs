"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";

export default function Skills() {
  const { ref, animation } = useObserver();

  return (
    <motion.section
      id="skills"
      title="Skills"
      ref={ref}
      initial="hidden"
      animate={animation}
      variants={fadeIn}
      className="w-full h-full min-h-screen flex flex-col justify-center items-start gap-4"
    >
      <h2 className="text-3xl font-bold mb-4 text-foreground ">Skills</h2>
    </motion.section>
  );
}
