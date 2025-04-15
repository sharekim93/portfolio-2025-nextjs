import { BlogURL } from "@/constants";
import React from "react";
import { isMobile } from "react-device-detect";

export const Contact: React.FC = () => {
  const data = {
    phone: "010-9887-6284",
    email: "sksyag@naver.com",
    blog: BlogURL,
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      <p>
        {isMobile ? (
          <a
            href={`tel:${data.phone}`}
            className="text-blue-600 hover:underline"
          >
            {data.phone}
          </a>
        ) : (
          data.phone
        )}{" "}
        ·{" "}
        <a
          href={`mailto:${data.email}`}
          className="text-blue-600 hover:underline"
        >
          {data.email}
        </a>{" "}
        ·{" "}
        <a href={data.blog} className="text-blue-600 hover:underline">
          {data.blog}
        </a>
      </p>
    </section>
  );
};
