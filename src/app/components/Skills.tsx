"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/Badge";

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
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="outline">HTML</Badge>
            <Badge variant="outline">CSS</Badge>
            <Badge variant="outline">Javascript</Badge>
            <Badge variant="outline">Typescript</Badge>
            <Badge variant="outline">Java</Badge>
            <Badge variant="outline">Python</Badge>
            <Badge variant="outline">C++</Badge>
          </CardContent>
        </Card>
        <Card className="flex-1/2 sm:flex-1">
          <CardHeader>
            <CardTitle>Frontend</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">Remix</Badge>
            <Badge variant="outline">React Router</Badge>
            <Badge variant="outline">Zustand</Badge>
            <Badge variant="outline">Jotai</Badge>
            <Badge variant="outline">Redux</Badge>
            <Badge variant="outline">Tanstack-query</Badge>
          </CardContent>
        </Card>
        <Card className="flex-1/2 sm:flex-1">
          <CardHeader>
            <CardTitle>Backend</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="outline">Spring Framework</Badge>
            <Badge variant="outline">JPA</Badge>
            <Badge variant="outline">Mybatis</Badge>
            <Badge variant="outline">SQL</Badge>
            <Badge variant="outline">log4j</Badge>
          </CardContent>
        </Card>
        <Card className="flex-1/2 sm:flex-1">
          <CardHeader>
            <CardTitle>Monitoring</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="outline">Sentry</Badge>
          </CardContent>
        </Card>
        <Card className="flex-1/2 sm:flex-1">
          <CardHeader>
            <CardTitle>Testing</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge variant="outline">Storybook</Badge>
            <Badge variant="outline">Jest</Badge>
            <Badge variant="outline">Mockito</Badge>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
