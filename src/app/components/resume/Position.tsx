import React from "react";

export const Position: React.FC = () => {
  const data = {
    position: "Frontend Engineer",
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">지원 직무</h2>
      <p>{data.position}</p>
    </section>
  );
};
