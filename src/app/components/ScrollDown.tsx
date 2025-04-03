"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/styles/animation";
import arrowDown from "@/images/arrow-down.svg";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ScrollDown() {
  const scrollRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      const lastSectionHeight =
        document?.getElementById("projects")?.clientHeight;

      if (
        lastSectionHeight &&
        // 가장 아래까지 스크롤 했을 때의 ScrollY 는 body.clientHeight - lastSectionHeight 이다
        // 따라서 Contact Section의 시작 Y값보다 ScrollY 가 커지면 clearTimeout
        window.scrollY > document?.body.clientHeight - lastSectionHeight * 2
      ) {
        clearTimeout(timerId);
        return;
      }

      const id = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      setTimerId(id);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      setIsVisible(true);
    };
  }, [timerId]);

  const down = () => {
    const sections = document.querySelectorAll("section");
    const currentSectionIndex = Array.from(sections).findIndex((section) => {
      const rect = section.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      );
    });

    if (
      currentSectionIndex !== -1 &&
      currentSectionIndex < sections.length - 1
    ) {
      sections[currentSectionIndex + 1].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      ref={scrollRef}
      variants={fadeIn}
      animate={isVisible ? "visible" : "hidden"}
      initial="hidden"
      className={`fixed bottom-16 flex justify-center gap-2 w-screen md:w-full right-0 left-0 mt-16 pt-8 select-none   ${
        isVisible && "hover:cursor-pointer"
      }`}
      onClick={down}
    >
      <Image
        src={arrowDown}
        alt="arrow-down"
        width={15}
        height={15}
        className="animate-bounce fill-gray-300"
      />
      <p className="h-8 text-lg text-gray-600 self-start">Scroll down</p>
    </motion.div>
  );
}
