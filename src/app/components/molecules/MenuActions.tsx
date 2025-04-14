import React from "react";
import TistoryImage from "../atoms/TistoryImage";

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
      <div className="h-10 flex pt-4">
        <TistoryImage
          className="w-6 h-6"
          fill={BACKGROUND_COLOR}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      </div>
    </div>
  );
};

export default MenuActions;
