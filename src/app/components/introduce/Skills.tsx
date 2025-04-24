"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

import htmlLogo from "@/images/HTML5_Badge.svg";
import cssLogo from "@/images/Official_CSS_Logo.svg";
import javascriptLogo from "@/images/Unofficial_JavaScript_logo_2.svg";
import typescriptLogo from "@/images/ts-logo-128.svg";
import Image from "next/image";

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
        <h3 className="text-pink-500 text-xl font-semibold">Core</h3>
        <div className="h-0 w-full border-b-1" />
        <ul title="Core" className="flex flex-col gap-4 pl-1">
          <li>
            <div className="flex flex-wrap gap-1">
              <Image
                src={htmlLogo}
                alt="html Logo"
                width={22}
                height={22}
                style={{ borderRadius: "10%" }}
              />
              <span className="font-semibold">HTML</span>
            </div>
            <p className="text-xs sm:text-sm pl-6.5">
              마크업 언어를 활용해 웹 페이지를 구조화 할 수 있습니다. 시멘틱
              태그 활용 및 웹 접근성에 관심이 많습니다.
            </p>
          </li>
          <li>
            <div className="flex flex-wrap gap-1">
              <Image
                src={cssLogo}
                alt="css Logo"
                width={22}
                height={22}
                style={{ borderRadius: "10%" }}
              />
              <span className="font-semibold">CSS</span>
            </div>
            <p className="text-xs sm:text-sm pl-6.5">
              CSS 선택자를 활용한 스타일링에 능숙합니다. @규칙(At rules)를
              활용한 적응형 디자인과 grid, flex 를 활용한 반응형 디자인,
              애니메이션 효과 등을 부여할 수 있습니다.
            </p>
          </li>
          <li>
            <div className="flex flex-wrap gap-1">
              <Image
                src={javascriptLogo}
                alt="javascript Logo"
                width={20}
                height={20}
                style={{ borderRadius: "10%" }}
              />
              <span className="font-semibold">Javascript</span>
            </div>
            <p className="text-xs sm:text-sm pl-6.5">
              ES6 이후의 모던 자바스크립트 문법에 관심이 있습니다. spread 문법
              등을 활용한 코드 가독성 및 성능 향상에 관심이 있습니다.
            </p>
          </li>
          <li>
            <div className="flex flex-wrap gap-1">
              <Image
                src={typescriptLogo}
                alt="typescript Logo"
                width={20}
                height={20}
                style={{ borderRadius: "10%" }}
              />
              <span className="font-semibold">Typescript</span>
            </div>
            <p className="text-xs sm:text-sm pl-6.5">
              변수 및 상수에 대한 타입 지정, Class, Utility 등 컴파일 시
              javascript 의 안정성을 더해주는 타입스크립트 활용에 익숙합니다
            </p>
          </li>
        </ul>
        <Badge variant="outline">Java</Badge>
        <Badge variant="outline">Python</Badge>
        <Badge variant="outline">C++</Badge>

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
