import React from "react";

export const Skills: React.FC = () => {
  const data = {
    skills: [
      {
        category: "Frontend Engineering",
        items: [
          "Media query, tailwindcss 를 활용한 적응형, 반응형 웹 개발 가능",
          "React(SPA), Next.js(SSR, ISR), Remix(React Router) 기반으로 프론트엔드 자체 개발 가능",
          "Tanstack-query, jotai, zustand, redux, context API 등 상태관리 가능",
          "Storybook 을 활용한 UI 테스트, MSW 활용 통합 테스트 가능",
          "JSP, mustache 등 템플릿 엔진 사용 가능",
          "Canvas(Konva.js)를 사용한 프린터 라벨 디자인 웹앱 개발 경험",
          "iOS, Android 연동 2개의 웹앱 개발 경험",
        ],
      },
      {
        category: "Backend Engineering",
        items: [
          "Java, Spring 을 활용한 서버 구축 가능",
          "SQL 및 Spring JPA, Mybatis 를 활용한 DB 활용 가능",
          "프린터 상태 모니터링 시스템(MDM) Spring 프로젝트 유지보수 경험",
          "그린컴퓨터아카데미 6개월 Java/Spring 과정 수료 및 팀 프로젝트를 통한 백엔드 대한 이해",
        ],
      },
      {
        category: "Software Development",
        items: [
          "Storybook, jest, Mockito 등을 이용한 테스트 수행 경험",
          "Sentry 적용을 통한 에러 모니터링 경험",
          "Python 을 이용한 데이터 크롤링 및 시각화 경험",
        ],
      },
    ],
  };

  return (
    <section className="mb-6 sm:mb-12">
      <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
        보유 역량 요약
      </h2>
      {data.skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-base sm:text-xl font-semibold mb-2">
            {skill.category}
          </h3>
          <ul className="list-disc pl-6">
            {skill.items.map((item, idx) => (
              <li className="text-sm sm:text-base" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
