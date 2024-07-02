import React from "react";
import { IoBook } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <div className="font-poppins px-6 lg:px-36 text-center mt-12">
      <h1 className="text-white font-semibold text-[32px]">Blog</h1>
      <div className="flex flex-col md:flex-row mt-9 justify-center items-center gap-10">
        <div className="w-full md:w-1/2 rounded-md overflow-hidden">
          <Link to="/blog-detail/1">
            <img
              className="w-full rounded-md mx-auto transform hover:scale-110 transition duration-300"
              src="/images/restaurant.png"
              alt="Project"
            />
          </Link>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-[31px] mt-4 text-white">
            Restaurant App with PWA
          </h2>
          <p className="text-[#999999] text-lg mt-2">
            This is a brief description of the project. It provides an overview
            of the project&apos;s purpose, technologies used, and key features.
            This should be engaging and concise to grab the viewer&apos;s
            attention.
          </p>
          <div className="flex gap-5 justify-center md:justify-start mt-4 md:mt-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Rizq-Saputra/Restaurant-App"
              className="flex"
            >
              <Link to="/blog-detail/1"><button className="border-2 border-secondary_purple text-secondary_purple px-3 md:px-8 py-2 mt-4 md:mt-0 hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-300 flex items-center gap-2">
                <IoBook /> Case Study
              </button></Link>
            </a>
          </div>
        </div>
      </div>
      {/* Repeat similar structure for other blog sections */}
    </div>
  );
}
