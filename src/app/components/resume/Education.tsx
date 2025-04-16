import React from "react";

export const Education: React.FC = () => {
  const data = {
    education: [
      {
        school: "가천대학교",
        degree: "경영학 학사",
        period: "2012.03 ~ 2019.07",
        gpa: "3.75/4.5",
      },
      {
        school: "그린 컴퓨터 아카데미 JAVA/SPRING 과정",
        degree: "",
        period: "2020.09-2021.02",
        details: [
          "Spring Framework를 활용한 REST API 개발",
          "팀 프로젝트 및 Spring 포트폴리오 구현을 통한 백엔드 대한 기초적인 이해 보유",
        ],
      },
    ],
  };

  return (
    <section className="mb-4 sm:mb-8 print:break-before-page print:pt-10">
      <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">Education</h2>
      <div className="h-px bg-gray-300 my-2 sm:my-4"></div>
      {data.education.map((edu, index) => (
        <div key={index} className="mb-2 sm:mb-4">
          <h3 className="text-base sm:text-xl font-semibold ">
            {edu.school} / {edu.degree} ({edu.period})
          </h3>
          {edu.details && (
            <ul className="list-disc pl-6 mt-2">
              {edu.details.map((detail, idx) => (
                <li key={idx} className="text-sm sm:text-lg mb-1">
                  {detail}
                </li>
              ))}
            </ul>
          )}
          {edu.gpa && (
            <p className="text-sm sm:text-lg mt-1">- GPA: {edu.gpa}</p>
          )}
        </div>
      ))}
    </section>
  );
};
