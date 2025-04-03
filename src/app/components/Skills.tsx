"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Badge } from "./Badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/HoverCard";

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
      <p className="text-md md:text-lg text-gray-600">
        클릭하거나 마우스를 올려 상세내용을 확인해보세요
      </p>
      <div className="w-full flex flex-wrap gap-2 sm:flex">
        <Card className="flex-1/2 sm:flex-1">
          <CardHeader>
            <CardTitle>Core</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Badge variant="outline">HTML</Badge>
              </HoverCardTrigger>
              <HoverCardContent>HTML에 대한 지식</HoverCardContent>
            </HoverCard>
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
