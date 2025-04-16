import React from "react";

export const Careers: React.FC = () => {
  const data = {
    careers: [
      {
        company: "체카",
        position: "Frontend Engineer",
        period: "2024.07 ~ 2025.02",
        projects: [
          {
            title: "딜러용 웹앱 개발",
            description: [
              "React(SPA) 기반 딜러용 서비스 웹앱 신규 개발",
              "Jotai, Tanstack-query 를 사용한 상태관리 및 캐싱 구현",
              "Access Token 유효성 확인 및 권한에 따른 라우팅 구현",
              "외부 API 연동 탁송 정보 확인 및 차량정보 조회 기능 구현",
              "앱 버전 확인 및 업데이트 기능 표시/숨김 등",
            ],
          },
          {
            title: "파트너스용 웹앱 개발",
            description: [
              "React(SPA) 사내 작업자(파트너스)용 서비스 웹앱 신규 개발",
              "iOS 네이티브 카메라 및 앨범 연동, S3 Presigned URL 업로드 기능 구현",
              "작업 중복 방지를 위한 tanstack-query 활용 낙관적 업데이트 기능 구현 등",
            ],
          },
        ],
      },
      {
        company: "빅솔론",
        position: "Software Engineer",
        period: "2021.04 ~ 2023.07",
        projects: [
          {
            title: "Label Artist Web 개발",
            description: [
              "React, Next.js 기반 프린터용 라벨 디자인 웹앱 개발",
              "Canvas(Konva) 활용 컴포넌트형 디자인 시스템 구현",
              "웹 폰트 사용 글꼴 변경, 바코즈 22종 생성 기능 구현",
              "디자인 파일 Dropbox, Google Drive 등 Cloud 저장 및 로컬 저장 기능 구현",
              "흑백 프린터 이미지 미리보기를 위한 dithering 기능 구현",
              "프린터 해상도에 따른 디자인 용지 사이즈 변경 기능 구현",
            ],
          },
          {
            title: "Web Print SDK 개발 및 유지보수",
            description: [
              "C++, MFC 기반의 웹 서버 유지보수",
              "CORS 대응을 위한 Preflight 요청 응답 기능 추가",
            ],
          },
          {
            title: "XPM(Printer MDM) 유지보수",
            description: ["Java/Spring 기반 MDM 프로그램 유지보수"],
          },
        ],
      },
    ],
  };

  return (
    <section className="mb-4 sm:mb-8 print:break-before-page print:pt-10">
      <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">Careers</h2>
      <div className="h-px bg-gray-300 my-2 sm:my-4"></div>
      {data.careers.map((career, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-base sm:text-xl font-semibold flex flex-wrap sm:gap-2">
            <span>
              {career.company} / {career.position}
            </span>
            <span> ({career.period})</span>
          </h3>
          {career.projects.map((project, idx) => (
            <div key={idx} className="mt-4">
              <h4 className="pl-2 text-base sm:text-lg font-black">
                {project.title}
              </h4>
              <ul className="list-disc pl-6 mt-2">
                {project.description.map((desc, descIdx) => (
                  <li className="text-sm sm:text-base" key={descIdx}>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
