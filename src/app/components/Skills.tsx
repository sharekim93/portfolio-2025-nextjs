"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./Badge";

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
      className=" w-full h-full min-h-screen flex flex-col justify-start items-start mt-10"
    >
      <h2 className="text-3xl font-bold mb-4 text-foreground ">Skills</h2>
      <div className="w-full flex flex-wrap gap-2 sm:flex">
        <Card className="flex-1/2 sm:flex-1">
          <CardHeader>
            <CardTitle>Core</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Badge variant="outline">HTML</Badge>
            <Badge variant="outline">CSS</Badge>
            <Badge variant="outline">Javascript</Badge>
            <Badge variant="outline">Typescript</Badge>
          </CardContent>
        </Card>
        <Card className="flex-1/2 sm:flex-1">
          <CardHeader>
            <CardTitle>Frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline">React</Badge>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
