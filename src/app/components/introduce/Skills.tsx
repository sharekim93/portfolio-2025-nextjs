"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/PopOver";
import { RiCss3Fill, RiHtml5Fill } from "react-icons/ri";
import { isMobile } from "react-device-detect";

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
      <p className="pb-4 text-gray-600 font-light text-sm sm:text-base">
        버튼을 {isMobile ? "터치" : "클릭"}해보세요
      </p>
      <div className="w-full flex flex-wrap gap-2 sm:flex">
        <Card className="flex-1/2 sm:flex-1">
          <CardHeader>
            <CardTitle>Core</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="flex justify-center items-center p-2 w-20"
              title="HTML"
            >
              <Popover>
                <PopoverTrigger className="flex justify-center items-center">
                  <RiHtml5Fill size={30} color="#E44D26" /> HTML
                </PopoverTrigger>
                <PopoverContent>
                  마크업 언어를 활용해 웹 페이지를 구조화 할 수 있습니다. 시멘틱
                  태그 활용 및 웹 접근성에 관심이 많습니다.
                </PopoverContent>
              </Popover>
            </Badge>
            <Badge
              variant="outline"
              className="flex justify-center items-center p-2 w-20"
              title="CSS"
            >
              <Popover>
                <PopoverTrigger className="flex justify-center items-center">
                  <RiCss3Fill size={30} color="#264de4" /> CSS
                </PopoverTrigger>
                <PopoverContent>
                  CSS 선택자를 활용한 스타일링에 능숙합니다. @규칙(At rules)를
                  활용한 적응형 디자인과 grid, flex 를 활용한 반응형 디자인,
                  애니메이션 효과 등을 부여할 수 있습니다.
                </PopoverContent>
              </Popover>
            </Badge>
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
