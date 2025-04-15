import React from "react";

export const Etc: React.FC = () => {
  const data = {
    certification: [
      {
        title: "SQLD(SQL Developer)",
      },
    ],
  };

  return (
    <section>
      <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">ETC</h2>
      <div className="h-px bg-gray-300 my-2 sm:my-4"></div>

      {/* Awards */}
      <div className="mb-6">
        <h3 className="text-base sm:text-xl font-semibold mb-3">
          Certification
        </h3>
        <ul className="list-disc pl-6">
          {data.certification.map((certification, idx) => (
            <li key={idx} className="text-sm sm:text-base mb-1">
              {certification.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
