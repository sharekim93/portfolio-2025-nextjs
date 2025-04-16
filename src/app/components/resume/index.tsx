import React, { useRef } from "react";
import { Header } from "./Header";
import { Contact } from "./Contact";
import { Position } from "./Position";
import { Skills } from "./Skills";
import { Careers } from "./Careers";
// import { Experiences } from "./Experiences";
import { Education } from "./Education";
import { Etc } from "./Etc";

const Resume: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={contentRef}
      className="bg-white text-gray-800 max-w-5xl mx-auto p-8 shadow-lg"
    >
      <Header ref={contentRef} />
      <Contact />
      <Position />
      <Skills />
      <Careers />
      {/* <Experiences /> */}
      <Education />
      <Etc />
    </div>
  );
};

export default Resume;
