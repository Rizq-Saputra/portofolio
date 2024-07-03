import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div
      className="rounded-lg shadow-lg overflow-hidden group cursor-pointer"
      data-aos="fade-up"
    >
      <div className="overflow-hidden">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="rounded-t-lg w-full max-w-xl mx-auto transform group-hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-4">
        <h2 className="text-white font-semibold text-lg">{project.title}</h2>
        <div className="flex gap-3 justify-evenly">
          <Link to={project.learnMoreLink}>
            <button className="border-2 border-secondary_purple text-secondary_purple px-2 py-2 md:px-8 mt-4 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center">
              Learn More
            </button>
          </Link>
          <a target="_blank" href={project.visitWebsiteLink} rel="noopener noreferrer">
            <button className="border-2 border-secondary_purple text-secondary_purple px-2 py-2 md:px-8 mt-4 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center">
              Visit Website
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
