import React from "react";
import TistoryImage from "../atoms/TistoryImage";
import { RESUME_BACKGROUND_COLOR, BLOG_URL, GITHUB_URL } from "@/constants";
import GithubImage from "../atoms/GithubImage";
import { LuMail as Mail } from "react-icons/lu";

const MenuActions = () => {
  const onMouseEnter: React.MouseEventHandler<SVGElement> = (e) => {
    const logo = e.currentTarget.querySelector("#logo");
    logo?.setAttribute("fill", "black");
  };

  const onMouseLeave: React.MouseEventHandler<SVGElement> = (e) => {
    const logo = e.currentTarget.querySelector("#logo");
    logo?.setAttribute("fill", RESUME_BACKGROUND_COLOR);
  };

  return (
    <div className="absolute top-0 right-5 ">
      <div className="h-10 flex pt-4 gap-4">
        <GithubImage
          className="w-6 h-6"
          fill={RESUME_BACKGROUND_COLOR}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={() =>
            window.open(GITHUB_URL, "_blank", "noopener,noreferrer")
          }
        />
        <TistoryImage
          className="w-6 h-6"
          fill={RESUME_BACKGROUND_COLOR}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={() => window.open(BLOG_URL, "_blank", "noopener,noreferrer")}
        />
        <Mail
          className="h-6 w-6 text-gray-400"
          stroke={RESUME_BACKGROUND_COLOR}
          onMouseEnter={(e) => (e.currentTarget.style.stroke = "black")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.stroke = RESUME_BACKGROUND_COLOR)
          }
          onClick={() => (location.href = "mailto:sksyag@naver.com")}
        />
      </div>
    </div>
  );
};

export default MenuActions;
