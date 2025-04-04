"use client";

import { motion } from "motion/react";
import { slideLeft } from "@/styles/animation";
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
        variants={slideLeft}
        transition={{ duration: 1.5 }}
        className="container w-full h-full min-h-screen flex flex-col justify-start mt-10 pt-20 items-start"
      >
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 min-w-xs">
          안녕하세요, 김나눔입니다
        </h1>
        <div className="flex flex-col gap-8">
          <motion.div
            variants={slideLeft}
            className="flex flex-wrap  gap-x-4 my-8 text-md sm:text-lg min-w-xs mt-10"
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
            variants={slideLeft}
            transition={{ duration: 1.5 }}
            className="flex flex-col flex-wrap gap-y-4"
          >
            <div className="flex gap-x-2">
              <h2 className="font-semibold text-lg md:text-xl text-pink-500">
                프론트엔드 개발자
              </h2>
              <span className="text-lg text-gray-400">입니다</span>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-gray-600 text-sm">
                반응형 웹, 적응형 웹, SPA, SSR 등 다양한 웹 경험을 가지고 있으며
              </p>
              <p className="text-gray-600 text-sm">
                React 기반의 Next.js, Remix, React Router 프로젝트 경험을 가지고
                있습니다
              </p>
              <p className="text-gray-600 text-sm">
                웹 프론트 기술에도 관심이 많지만 사용자 UX 및 비즈니스 문제
                해결에도 관심이 많습니다
              </p>
            </div>
          </motion.section>
        </div>
      </motion.section>
    </>
  );
}
