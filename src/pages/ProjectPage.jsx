import React from "react";
import { Link } from "react-router-dom";

export default function ProjectPage() {
  return (
    <div className="font-poppins px-6 lg:px-36 text-center mt-12">
      <h1 className="text-white font-semibold text-[32px]">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 mt-8 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div
          className="rounded-lg shadow-lg overflow-hidden group cursor-pointer"
          data-aos="fade-up"
        >
          <div className="overflow-hidden">
            <img
              src="/images/restaurant.png"
              alt="Project 1"
              className="rounded-t-lg w-full max-w-xl mx-auto transform group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="p-4">
            <h2 className="text-white font-semibold text-lg">Project 1</h2>
            <div className="flex gap-3 justify-evenly">
              <Link to="/blog-detail/1">
                <button className="border-2 border-secondary_purple text-secondary_purple px-2 py-2 md:px-8 mt-4 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center">
                  Learn More
                </button>
              </Link>
              <a target="_blank" href="https://resto.pusling.my.id/">
                <button className="border-2 border-secondary_purple text-secondary_purple px-2 py-2 md:px-8 mt-4 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center">
                  Visit Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="rounded-lg shadow-lg overflow-hidden group cursor-pointer"
          data-aos="fade-up"
        >
          <div className="overflow-hidden">
            <img
              src="/images/stuntcare.png"
              alt="Project 2"
              className="rounded-t-lg w-full max-w-xl mx-auto transform group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="p-4">
            <h2 className="text-white font-semibold text-lg">Project 2</h2>
            <div className="flex gap-3 justify-evenly">
              <button className="border-2 border-secondary_purple text-secondary_purple px-2 py-2 md:px-8 mt-4 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center">
                Learn More
              </button>
              <a target="_blank" href="https://stuntcare.my.id/">
                <button className="border-2 border-secondary_purple text-secondary_purple px-2 py-2 md:px-8 mt-4 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center">
                  Visit Website
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="rounded-lg shadow-lg overflow-hidden group cursor-pointer"
          data-aos="fade-up"
        >
          <div className="overflow-hidden">
            <img
              src="/images/notes.png"
              alt="Project 3"
              className="rounded-t-lg w-full max-w-xl mx-auto transform group-hover:scale-110 transition duration-500"
            />
          </div>
          <div className="p-4">
            <h2 className="text-white font-semibold text-lg">Project 3</h2>
            <div className="flex gap-3 justify-evenly">
              <button className="border-2 border-secondary_purple text-secondary_purple px-2 py-2 md:px-8 mt-4 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center">
                Learn More
              </button>
              <a target="_blank" href="https://notes.pusling.my.id/">
                <button className="border-2 border-secondary_purple text-secondary_purple px-2 py-2 md:px-8 mt-4 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center">
                  Visit Website
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
