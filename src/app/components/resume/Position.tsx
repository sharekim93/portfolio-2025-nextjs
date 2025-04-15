import React from "react";

export const Position: React.FC = () => {
  const data = {
    position: "Frontend Engineer",
  };

  return (
    <section className="mb-4 sm:mb-8">
      <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">지원 직무</h2>
      <p className="text-sm sm:text-base">{data.position}</p>
    </section>
  );
};
