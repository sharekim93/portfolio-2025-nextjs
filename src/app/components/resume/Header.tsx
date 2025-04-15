import React from "react";

export const Header: React.FC = () => {
  const data = {
    name: "Nanum Kim",
    title: "Software Engineer",
  };

  return (
    <header className="mb-4 sm:mb-8">
      <h1 className="text-lg sm:text-3xl font-bold">
        {data.name}, {data.title}
      </h1>
      <div className="h-px bg-gray-300 my-2 sm:my-4"></div>
    </header>
  );
};
