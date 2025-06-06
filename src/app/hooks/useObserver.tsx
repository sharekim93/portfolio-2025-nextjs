"use client";

import { useEffect } from "react";
import { useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";

const useObserver = () => {
  const animation = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  return { ref, animation };
};

export default useObserver;
