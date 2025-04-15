import React from "react";
import TistoryImage from "../atoms/TistoryImage";
import { BlogURL, GithubURL } from "@/constants";
import GithubImage from "../atoms/GithubImage";
import { Mail } from "lucide-react";

const MenuActions = () => {
  const BACKGROUND_COLOR = "#71717a";

  const onMouseEnter: React.MouseEventHandler<SVGElement> = (e) => {
    const logo = e.currentTarget.querySelector("#logo");
    logo?.setAttribute("fill", "black");
  };

  const onMouseLeave: React.MouseEventHandler<SVGElement> = (e) => {
    const logo = e.currentTarget.querySelector("#logo");
    logo?.setAttribute("fill", BACKGROUND_COLOR);
  };

  return (
    <div className="absolute top-0 right-5 ">
      <div className="h-10 flex pt-4 gap-4">
        <GithubImage
          className="w-6 h-6"
          fill={BACKGROUND_COLOR}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={() =>
            window.open(GithubURL, "_blank", "noopener,noreferrer")
          }
        />
        <TistoryImage
          className="w-6 h-6"
          fill={BACKGROUND_COLOR}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={() => window.open(BlogURL, "_blank", "noopener,noreferrer")}
        />
        <Mail
          className="h-6 w-6 text-gray-400"
          stroke={BACKGROUND_COLOR}
          onMouseEnter={(e) => (e.currentTarget.style.stroke = "black")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.stroke = BACKGROUND_COLOR)
          }
          onClick={() => (location.href = "mailto:sksyag@naver.com")}
        />
      </div>
    </div>
  );
};

export default MenuActions;
