import { FaGithub } from "react-icons/fa";

function Project() {
    return(
        <section id="project" className="mt-16 md:mt-64">
            <h1 className="font-semibold text-3xl md:text-4xl text-center text-white" data-aos="fade-up">Projects</h1>
            <div className="flex flex-col md:flex-row mt-9 justify-center items-center gap-10">
                <div className="w-full md:w-1/2" data-aos="fade-up">
                    <img className="w-full rounded-md" src="../../public/images/project_PA.jpg" alt="Project" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-up">
                    <h2 className="text-[31px] mt-4 text-white">Website Wood Store</h2>
                    <p className="text-[#999999] text-lg mt-2">This is a brief description of the project. It provides an overview of the project&apos;s purpose, technologies used, and key features. This should be engaging and concise to grab the viewer&apos;s attention.</p>
                    <a href="https://github.com/RizqSaputra/PA-WEB" className="flex mt-4 justify-center md:justify-start"><button className="border-2 border-secondary_purple text-secondary_purple px-8 py-2 mt-4 md:mt-0 hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center"><FaGithub/> Github</button></a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-9 justify-center items-center gap-10">
                <div className="w-full md:w-1/2" data-aos="fade-up">
                    <img className="w-full rounded-md" src="../../public/images/project_PA.jpg" alt="Project" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-up">
                    <h2 className="text-[31px] mt-4 text-white">Website Wood Store</h2>
                    <p className="text-[#999999] text-lg mt-2">This is a brief description of the project. It provides an overview of the project&apos;s purpose, technologies used, and key features. This should be engaging and concise to grab the viewer&apos;s attention.</p>
                    <a href="https://github.com/RizqSaputra/PA-WEB" className="flex mt-4 justify-center md:justify-start"><button className="border-2 border-secondary_purple text-secondary_purple px-8 py-2 mt-4 md:mt-0 hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center"><FaGithub/> Github</button></a>
                </div>
            </div>
        </section>
    );
}

export default Project;
