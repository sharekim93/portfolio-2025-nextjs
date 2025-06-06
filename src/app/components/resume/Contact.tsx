import { BLOG_URL } from "@/constants";
import React from "react";
import { isMobile } from "react-device-detect";

export const Contact: React.FC = () => {
  const data = {
    phone: "010-9887-6284",
    email: "sksyag@naver.com",
    blog: BLOG_URL,
  };

  return (
    <section className="mb-4 sm:mb-8">
      <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">Contacts</h2>
      <p className="flex flex-wrap text-sm sm:text-base gap-1">
        {isMobile ? (
          <a
            href={`tel:${data.phone}`}
            className=" text-blue-600 hover:underline"
          >
            {data.phone}
          </a>
        ) : (
          data.phone
        )}
        <span>·</span>
        <a
          href={`mailto:${data.email}`}
          className="text-blue-600 hover:underline"
        >
          {data.email}
        </a>
        <span>·</span>
        <a href={data.blog} className="text-blue-600 hover:underline">
          {data.blog}
        </a>
      </p>
    </section>
  );
};
