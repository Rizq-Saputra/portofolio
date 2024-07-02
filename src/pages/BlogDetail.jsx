import React from "react";

export default function BlogDetail() {
  const blogData = {
    id: 1,
    title: "Restaurant App with PWA",
    description:
      "This is a detailed description of the project. It provides an in-depth overview of the project’s purpose, technologies used, and key features. This should be engaging and informative to provide a comprehensive understanding to the reader.",
    imageUrl: "/images/restaurant.png",
    githubLink: "https://github.com/Rizq-Saputra/Restaurant-App",
  };

  return (
    <div className="font-poppins px-6 lg:px-36 text-center mt-12">
      <h1 className="text-white font-semibold text-[32px]" data-aos="fade-up">Blog Detail</h1>
      <div className="mt-9 justify-center items-center gap-10">
        <div className="w-full rounded-md overflow-hidden">
          <img
          data-aos="fade-up"
            className="w-3/5 rounded-md mx-auto"
            src={blogData.imageUrl}
            alt="Project"
          />
        </div>
        <h2 className="text-[31px] mt-4 text-white">{blogData.title}</h2>
        <div className="flex justify-evenly mt-4 text-[#999]">
            <p className="">Front End Website</p>
            <p className="">June 2024</p>
        </div>
        <p className="text-[#999999] text-lg md:px-44 px- mt-4">{blogData.description}</p>
      </div>
    </div>
  );
}
