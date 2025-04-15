import React from "react";

export const Experiences: React.FC = () => {
  const data = {
    opensource: [
      "미국 국정원 오픈소스 프로젝트 Ghidra에 ARM 64비트 프로세서 명령어 인덱싱 <a href='https://github.com/NationalSecurityAgency/ghidra/pull/724' class='text-blue-600 hover:underline'>PR [링크]</a>",
      "구글 Tensorflow예제 코드에서 stackTwoBitmaps() 메소드 오타 수정 <a href='https://github.com/tensorflow/examples/pull/316' class='text-blue-600 hover:underline'>[링크]</a>",
    ],
    projects: [
      {
        title: "Short Term (21.04.29 ~ 21.05.22) [링크]",
        period: "21.04.29 ~ 21.05.22",
        description:
          "URL을 특정 문자열로 단축하여 제공하는 URL Shortener 프로젝트",
        details: [
          "Base62 Encoder와 XOR Cipher를 사용하여 Short URL을 생성",
          "Redis를 통해 Short URL과 Target URL을 매핑하여 캐싱하고 클라이언트에게 값을 반환하는 방식",
          "TestContainers를 이용하여 실제 운영 환경과 최대한 유사하게 통합 테스트를 구성 <a href='#' class='text-blue-600 hover:underline'>(공부하며 정리한 글)</a>",
          "Docker, TestContainers, Redis 등을 활용 방법 학습",
        ],
      },
      {
        title: "Somaeja (20.11.20 ~ 21.03.01) [링크]",
        period: "20.11.20 ~ 21.03.01",
        description: "지역 정보 물품 거래 플랫폼 RESTful API 서버 프로젝트",
        details: [
          "RESTful 규약을 준수하여 URI 설계와 API Spec(HTTP Method, Status Code)을 만족하는 API 개발",
          "민감한 설정 정보 보호를 위해 Jasypt Library를 이용해 설정 파일 암호화",
          "Local Session 방식의 Session 정보의 동기화 문제와 발생 네트워크 트래픽 등을 고려하여 JWT를 통한 State-less 방식으로 고도화 진행",
          "SFTP를 이용한 build-copy-paste-execute 수동 방식에서 Git Branch와 Jenkins를 연동하여 자동화로 변경",
        ],
        technologies: "Spring Boot, Mybatis, NCP, AWS EC2, Github, Jenkins",
      },
    ],
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Experiences</h2>
      <div className="h-px bg-gray-300 my-4"></div>

      {/* Open Source */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Open-source Contribution</h3>
        <ul className="list-disc pl-6">
          {data.opensource.map((item, idx) => (
            <li
              key={idx}
              className="mb-1"
              dangerouslySetInnerHTML={{ __html: item }}
            ></li>
          ))}
        </ul>
      </div>

      {/* Projects */}
      {data.projects.map((project, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold">
            개인 프로젝트 / {project.title}
          </h3>
          <p className="mb-2">{project.description}</p>
          <ul className="list-disc pl-6">
            {project.details.map((detail, idx) => (
              <li
                key={idx}
                className="mb-1"
                dangerouslySetInnerHTML={{ __html: detail }}
              ></li>
            ))}
          </ul>
          {project.technologies && (
            <p className="mt-2 text-gray-600">
              기술 스택: {project.technologies}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};
