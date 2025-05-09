"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/styles/animation";
import useObserver from "@/hooks/useObserver";

export default function Intro() {
  const { ref, animation } = useObserver();

  return (
    <>
      <motion.section
        title="Intro"
        ref={ref}
        initial="hidden"
        animate={animation}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
        className="container w-full h-full min-h-screen flex flex-col justify-start mt-10 pt-20 items-start"
      >
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 min-w-xs">
            안녕하세요, <br />웹 개발자 김나눔입니다.
          </h1>
          <p className="text-sm sm:text-xs text-gray-600 font-light">
            React 를 기반으로 주로 프론트엔드를 개발합니다
            <br />
            함께 제품을 만들고 성장할 곳을 찾고 있습니다.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap  gap-x-4 my-8 text-md sm:text-lg min-w-xs "
            transition={{ duration: 1 }}
          >
            <span className="min-w-1/24">#프론트엔드</span>
            <span className="min-w-1/24">#웹앱</span>
            <span className="min-w-1/24">#모바일 웹뷰</span>
            <span className="min-w-1/24">#백엔드</span>
            <span className="min-w-1/24">#프린터</span>
            <span className="min-w-1/24">#중고차상품화</span>
            <span className="min-w-1/24">#도전정신</span>
            <span className="min-w-1/24">#적응력</span>
          </motion.div>
          <motion.section
            variants={fadeIn}
            transition={{ duration: 1.5 }}
            className="flex flex-col flex-wrap gap-y-4"
          >
            <div className="flex gap-x-2">
              <h2 className="font-semibold text-lg md:text-xl text-primary">
                프론트엔드 개발자
              </h2>
              <span className="text-lg text-gray-400">입니다</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-gray-600 text-sm">
                웹 표준에 근거한 프론트엔드 기술을 기반으로
              </p>
              <p className="text-gray-600 text-sm">
                React 기반의 웹 사이트 및 라벨 디자인 웹앱, 모바일용 웹앱(웹뷰)
                개발 경험이 있습니다
              </p>
              <p className="text-gray-600 text-sm">
                웹 프론트 기술에도 관심이 많지만 사용자 UX 및 비즈니스 문제
                해결에도 관심이 많습니다
              </p>
              <p className="text-gray-600 text-sm font-semibold">
                다국어로 된 웹 페이지 및 웹앱을 구성하고 구현하며, 라우팅,
                렌더링 최적화 등을 수행할 수 있습니다
              </p>
            </div>
          </motion.section>
          <motion.section
            variants={fadeIn}
            transition={{ duration: 1.5 }}
            className="flex flex-col flex-wrap gap-y-4"
          >
            <div className="flex gap-x-2">
              <h2 className="font-semibold text-lg md:text-xl text-primary">
                백엔드 개발자
              </h2>
              <span className="text-lg text-gray-400">입니다</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-gray-600 text-sm">
                웹 기반 서버 통신에 대한 경험을 가진 백엔드 개발자입니다
              </p>
              <p className="text-gray-600 text-sm">
                글로벌 프린터 제조사 빅솔론에서 Java-Spring 기반의 프린터 관리
                서버 유지보수, C++(MFC) 기반의 프린터 웹 서버 유지보수 경험이
                있습니다
              </p>
              <p className="text-gray-600 text-sm">
                SQL Developer 자격증을 보유하고 있고 국비학원 Java-Spring 6개월
                과정을 수료하였습니다
              </p>
              <p className="text-gray-600 text-sm font-semibold">
                REST API를 설계하고 이에 맞게 내부 Controller 및 Service 를
                구성할 수 있습니다. JPA/Mybatis 를 활용하여 DB 트랜잭션을 수행할
                수 있습니다
              </p>
            </div>
          </motion.section>
        </div>
      </motion.section>
    </>
  );
}
