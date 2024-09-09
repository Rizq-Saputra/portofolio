import React from "react";
import ProjectCard from "../components/ProjectCards";

const projects = [
  {
    id: 1,
    imageSrc: "/images/restaurant.png",
    title: "Restaurant App with PWA",
    learnMoreLink: "/blog-detail/1",
    visitWebsiteLink: "https://resto.pusling.my.id/"
  },
  {
    id: 2,
    imageSrc: "/images/siemahat.png",
    title: "SIE MAHAT",
    learnMoreLink: "#",
    visitWebsiteLink: "https://siemahat.com/"
  },
  {
    id: 3,
    imageSrc: "/images/stuntcare.png",
    title: "Stuntcare",
    learnMoreLink: "#",
    visitWebsiteLink: "https://stuntcare.my.id/"
  },
  {
    id: 4,
    imageSrc: "/images/notes.png",
    title: "Notes App",
    learnMoreLink: "#",
    visitWebsiteLink: "https://notes.pusling.my.id/"
  },
  {
    id: 5,
    imageSrc: "/images/pusling.png",
    title: "Pusling App",
    learnMoreLink: "#",
    visitWebsiteLink: "https://pusling.my.id/"
  },
  {
    id: 6,
    imageSrc: "/images/forum.png",
    title: "Forum App",
    learnMoreLink: "#",
    visitWebsiteLink: "https://forum-app-delta.vercel.app/"
  },
  {
    id: 7,
    imageSrc: "/images/Wood.png",
    title: "Wood Store",
    learnMoreLink: "#",
    visitWebsiteLink: "https://github.com/RizqSaputra/PA-WEB"
  }
];

export default function ProjectPage() {
  return (
    <div className="font-poppins px-6 lg:px-36 text-center mt-12">
      <h1 className="text-white font-semibold text-[32px]">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 mt-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
