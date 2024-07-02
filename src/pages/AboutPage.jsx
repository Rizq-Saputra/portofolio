import React, { useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="font-poppins px-6 lg:px-36 text-center mt-12">
      <h1  data-aos="fade-up" className="text-white font-semibold text-3xl lg:text-4xl">Profile</h1>
      <div
        className="mx-auto mt-4 flex flex-col items-center"
        data-aos="fade-up"
      >
        <img
          className="mt-4 w-48 md:w-64 lg:w-72 h-auto rounded-full border-4 border-transparent hover:border-secondary_purple transition duration-300"
          src="/images/about.png"
          alt="profile picture"
        />
        <h2
          className="text-white font-semibold text-2xl mt-4 lg:mt-6"
          data-aos="fade-up"
        >
          Muhammad Rizq Saputra
        </h2>
        <div className="flex mt-4" data-aos="fade-up">
          <FaGithub className="text-white text-2xl cursor-pointer hover:text-[#913DCB] transition duration-500 mr-4" />
          <FaInstagram className="text-white text-2xl cursor-pointer hover:text-[#913DCB] transition duration-500 mr-4" />
          <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-[#913DCB] transition duration-500 mr-4" />
        </div>

        <hr className="w-[76px] mt-4 mb-[15px]" data-aos="fade-up" />
        <p
          className="text-[#999999] text-lg md:text-xl px-20 md:px-40 mb-4 text-justify"
          data-aos="fade-up"
        >
          I'm a web developer with a keen interest in both front-end and
          back-end development. I believe that an attractive and functional
          design is crucial for effective product branding. To create
          high-quality web solutions, I focus on proper composition, visual
          details, and seamless user experiences.
        </p>
        <button
          className="py-2 sm:py-3 px-2 md:px-4 flex justify-center items-center gap-4 font-semibold text-sm text-nowrap sm:text-lg border-2 rounded-md text-secondary_purple border-secondary_purple hover:bg-secondary_purple hover:text-white transition-all duration-500 ease-in-out"
          data-aos="fade-up"
        >
          My Certificate
        </button>
      </div>
    </div>
  );
}
