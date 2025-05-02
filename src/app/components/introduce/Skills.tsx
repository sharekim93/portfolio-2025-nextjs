"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";

import {
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoRedux,
  BiLogoSpringBoot,
  BiLogoTypescript,
} from "react-icons/bi";

import { RiNextjsFill, RiRemixRunFill } from "react-icons/ri";
import { SiJest, SiSentry, SiStorybook } from "react-icons/si";

import jotaiLogo from "@/images/jotai-mascot.png";
import tanstackLogo from "@/images/react-query-seeklogo.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";

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
      <div className="w-full flex flex-wrap pb-10">
        <Accordion className="w-full" type="multiple">
          <AccordionItem value="core">
            <AccordionTrigger className="w-full flex items-center align-middle pt-4">
              <h3 className="text-primary text-xl font-semibold w-full">
                Core
              </h3>
              <div className={`flex data-[state=open]:hidden`}>
                <BiLogoHtml5 size={28} color="#E44D26" />
                <BiLogoCss3 size={28} color="#264de4" />
                <BiLogoJavascript color="#F0DB4F" size={28} />
                <BiLogoTypescript size={28} color="#3178C6" />
                <BiLogoJava size={28} color="#f89820" />
                <BiLogoPython size={28} fill="#4B8BBE" />
                <BiLogoCPlusPlus size={28} fill="#659AD2" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="w-full flex flex-wrap gap-2 pb-2">
              {/* <div className="h-0 w-full border-b-1" /> */}
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <BiLogoHtml5 size={28} color="#E44D26" />
                  <span className="font-semibold">HTML</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    마크업 언어를 활용해 웹 페이지를 구조화 할 수 있습니다.
                    시멘틱 태그 활용 및 웹 접근성에 관심이 많습니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <BiLogoCss3 size={28} color="#264de4" />
                  <span className="font-semibold">CSS</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    CSS 선택자를 활용한 스타일링에 능숙합니다. @규칙(At rules)를
                    활용한 적응형 디자인과 grid, flex 를 활용한 반응형 디자인,
                    애니메이션 효과 등을 부여할 수 있습니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <BiLogoJavascript color="#F0DB4F" size={28} />
                  <span className="font-semibold">Javascript</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    ES6 이후의 모던 자바스크립트 문법에 관심이 있습니다. spread
                    문법 등을 활용한 코드 가독성 및 성능 향상에 관심이 있습니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <BiLogoTypescript size={28} color="#3178C6" />
                  <span className="font-semibold">Typescript</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    변수 및 상수에 대한 타입 지정, Class, Utility 등 컴파일 시
                    javascript 의 안정성을 더해주는 타입스크립트 활용에
                    익숙합니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <BiLogoJava size={28} color="#f89820" />
                  <span className="font-semibold">Java</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    객체지향 언어인 Java 및 JVM에 대한 이해를 바탕으로 Java
                    문법을 구사할 수 있습니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <BiLogoPython size={28} fill="#4B8BBE" />
                  <span className="font-semibold">Python</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    Python으로 데이터 시각화 및 데이터 크롤링을 수행한 경험이
                    있습니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <BiLogoCPlusPlus size={28} fill="#659AD2" />
                  <span className="font-semibold">C++</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    간단한 C++을 활용하여 MFC 로 UI및 응용프로그램을 만들 수
                    있고 MFC 기반 Web Server 를 유지보수한 경험이 있습니다
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="frontend">
            <AccordionTrigger className="w-full flex items-center align-middle pt-4">
              <h3 className="text-primary text-xl font-semibold w-full">
                Frontend
              </h3>
              <div className={`flex data-[state=open]:hidden`}>
                <BiLogoReact size={28} fill="#61dafb" />
                <RiNextjsFill size={28} />
                <RiRemixRunFill size={28} />
                <div className="w-[28] h-[28]">
                  <Image
                    src={jotaiLogo}
                    alt="jotai_logo"
                    width={25}
                    height={25}
                  />
                </div>
                <BiLogoRedux size={28} color="#764ABC" />
                <div className="w-[28] h-[28]">
                  <Image
                    src={tanstackLogo}
                    alt="tanstack_logo"
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="w-full flex flex-wrap gap-2 pb-2">
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <BiLogoReact size={28} fill="#61dafb" />
                  <span className="font-semibold">React</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    함수형 컴포넌트 활용 및 디자인 패턴에 맞게 컴포넌트를 설계
                    및 활용할 수 있고 컴포넌트 생명주기, React Hook을 상황에
                    맞게 활용할 수 있습니다. 최신 React 기술에도 꾸준히 관심을
                    가지고 프로젝트에 접목하고 있습니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <RiNextjsFill size={28} />
                  <span className="font-semibold">Next.js</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    App Router 및 Page Router 활용이 가능하며 SSR, SSG, ISR
                    방식으로 화면을 렌더링 할 수 있습니다. React 의 lazy에
                    해당하는 dynamic import 를 활용한 코드스플리팅 활용도
                    가능합니다. MetaData 를 활용한 SEO 향상, next/font 를 활용한
                    폰트 적용 등 Nextjs 활용에 능숙합니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <RiRemixRunFill size={28} />
                  <span className="font-semibold">Remix & React Router</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    Remix 를 활용하여 프로젝트를 구성하고 활용할 수 있습니다.
                    Remix 에서 React Router v7로 마이그레이션하고 프로젝트를
                    구성할 수 있습니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <div className="w-[28] h-[28]">
                    <Image
                      src={jotaiLogo}
                      alt="jotai_logo"
                      width={25}
                      height={25}
                    />
                  </div>
                  <span className="font-semibold">Jotai</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    Jotai 를 활용한 전역 상태관리 및 atomWithStorage 와 같은
                    유틸함수를 활용할 수 있습니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <BiLogoRedux size={28} color="#764ABC" />
                  <span className="font-semibold">Redux</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    Flux 와 유사한 Redux 의 패턴을 활용하여 전역상태관리를 할 수
                    있습니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <div className="w-[28] h-[28]">
                    <Image
                      src={tanstackLogo}
                      alt="tanstack_logo"
                      width={25}
                      height={25}
                    />
                  </div>
                  <span className="font-semibold">Tanstack-query</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    tanstack-query(react-query)를 활용한 API 호출 및 서버상태
                    관리를 수행할 수 있습니다. 커스텀 훅 작성 및 캐싱 전략,
                    낙관적(Optimistic) Update 를 수행할 수 있습니다
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="backend">
            <AccordionTrigger className="w-full flex items-center align-middle pt-4">
              <h3 className="text-primary text-xl font-semibold w-full">
                Backend
              </h3>
              <div className={`flex data-[state=open]:hidden`}>
                <BiLogoSpringBoot size={28} color="#6DB33F" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="w-full flex flex-wrap gap-2 pb-2">
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <BiLogoSpringBoot size={28} color="#6DB33F" />
                  <span className="font-semibold">Spring Framework</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    Spring framework를 사용하여 서버를 구축하고 WAS 를 활용하여
                    운영할 수 있습니다. MVC 패턴에 익숙하며 JPA, Mybatis 를
                    활용한 DB 트랜잭션을 수행할 수 있습니다
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="monitoring">
            <AccordionTrigger className="w-full flex items-center align-middle pt-4">
              <h3 className="text-primary text-xl font-semibold w-full">
                Monitoring
              </h3>
              <div className={`flex data-[state=open]:hidden`}>
                <div className="w-[28] h-[28]">
                  <SiSentry size={22} />
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="w-full flex flex-wrap gap-2 pb-2">
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <div className="w-[28] h-[28]">
                    <SiSentry size={22} />
                  </div>
                  <span className="font-semibold">Sentry</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    Sentry 를 프로젝트에 설정하고 에러를 트래킹 할 수 있습니다.
                    Custom Event 를 설정하여 특정 상황에 대한 데이터를 강화할 수
                    있습니다
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="testing">
            <AccordionTrigger className="w-full flex items-center align-middle">
              <h3 className="text-primary text-xl font-semibold w-full">
                Testing
              </h3>
              <div className={`flex data-[state=open]:hidden gap-1`}>
                <SiStorybook size={22} color="#FF4785" />
                <SiJest size={22} color="#99425B" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="w-full flex flex-wrap gap-2 pb-2">
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <div className="w-[28] h-[28]">
                    <SiStorybook size={22} color="#FF4785" />
                  </div>
                  <span className="font-semibold">Storybook</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    Storybook 을 통한 단위 컴포넌트 테스트 및 통합 테스트를
                    작성하고 수행할 수 있습니다. 페이지를 배포하여 디자이너 및
                    QA 와 내용을 공유할 수 있습니다
                  </p>
                </CardContent>
              </Card>
              <Card className="p-2 sm:p-4 w-full max-w-sm">
                <CardTitle className="flex flex-wrap gap-1 items-center">
                  <div className="w-[28] h-[28]">
                    <SiJest size={22} color="#99425B" />
                  </div>
                  <span className="font-semibold">Jest</span>
                </CardTitle>
                <CardContent>
                  <p className="text-xs sm:text-sm pl-2">
                    Jest 를 활용하여 단위 테스트를 수행할 수 있습니다. 주로
                    작성한 함수가 올바르게 작동하는지 테스트합니다.
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.section>
  );
}
