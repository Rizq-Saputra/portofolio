import { FaGithub, FaArrowRight } from "react-icons/fa";

function Project() {
    return(
        <section id="project" className="mt-16 md:mt-64">
            <h1 className="font-semibold text-3xl md:text-4xl text-center text-white" data-aos="fade-up">Projects</h1>
            <div className="flex flex-col md:flex-row mt-9 justify-center items-center gap-10">
                <div className="w-full md:w-1/2 hover:border-2 hover:transition-all hover:duration-500 cursor-pointer hover:ease-in-out border-secondary_purple rounded-md" data-aos="fade-up">
                    <img className="w-full rounded-md" src="/images/restaurant.png" alt="Project" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-up">
                    <h2 className="text-[31px] mt-4 text-white">Restaurat App with PWA</h2>
                    <p className="text-[#999999] text-lg mt-2">This is a brief description of the project. It provides an overview of the project&apos;s purpose, technologies used, and key features. This should be engaging and concise to grab the viewer&apos;s attention.</p>
                    <div className="flex gap-5  justify-center md:justify-start mt-4 md:mt-10">
                        <a target="_blank" href="https://github.com/Rizq-Saputra/Restaurant-App" className="flex"><button className="border-2 border-secondary_purple text-secondary_purple px-3 md:px-8 py-2 mt-4 md:mt-0 hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center"><FaGithub/> Github</button></a>
                        <a target="_blank" href="https://resto.pusling.my.id/" className="flex"><button className="border-2 border-secondary_purple text-secondary_purple px-3 py-2 md:px-8 mt-4 md:mt-0 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center"><FaArrowRight /> Visit Website</button></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-9 justify-center items-center gap-10">
                <div className="w-full md:w-1/2 hover:border-2 hover:transition-all hover:duration-500 hover:border-secondary_purple cursor-pointer hover:ease-in-out rounded-md" data-aos="fade-up">
                    <img className="w-full rounded-md" src="/images/project_PA.jpg" alt="Project" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-up">
                    <h2 className="text-[31px] mt-4 text-white">Wood Store</h2>
                    <p className="text-[#999999] text-lg mt-2">This is a brief description of the project. It provides an overview of the project&apos;s purpose, technologies used, and key features. This should be engaging and concise to grab the viewer&apos;s attention.</p>
                    <div className="flex gap-5  justify-center md:justify-start mt-4 md:mt-10">
                        <a target="_blank" href="https://github.com/Rizq-Saputra/PA-WEB" className="flex"><button className="border-2 border-secondary_purple text-secondary_purple px-3 md:px-8 py-2 mt-4 md:mt-0 hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center"><FaGithub/> Github</button></a>
                        <a target="_blank" href="https://github.com/Rizq-Saputra/PA-WEB" className="flex"><button className="border-2 border-secondary_purple text-secondary_purple px-3 py-2 md:px-8 mt-4 md:mt-0 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center"><FaArrowRight /> Visit Website</button></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-9 justify-center items-center gap-10">
                <div className="w-full md:w-1/2 hover:border-2 hover:transition-all hover:duration-500 cursor-pointer hover:ease-in-out border-secondary_purple rounded-md" data-aos="fade-up">
                    <img className="w-full rounded-md" src="/images/notes_project.png" alt="Project" />
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-up">
                    <h2 className="text-[31px] mt-4 text-white">Notes App</h2>
                    <p className="text-[#999999] text-lg mt-2">This is a brief description of the project. It provides an overview of the project&apos;s purpose, technologies used, and key features. This should be engaging and concise to grab the viewer&apos;s attention.</p>
                    <div className="flex gap-5  justify-center md:justify-start mt-4 md:mt-10">
                        <a target="_blank" href="https://github.com/Rizq-Saputra/notes-app" className="flex"><button className="border-2 border-secondary_purple text-secondary_purple px-3 md:px-8 py-2 mt-4 md:mt-0 hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center"><FaGithub/> Github</button></a>
                        <a target="_blank" href="https://notes.pusling.my.id/" className="flex"><button className="border-2 border-secondary_purple text-secondary_purple px-3 py-2 md:px-8 mt-4 md:mt-0 text-nowrap hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center"><FaArrowRight /> Visit Website</button></a>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-14"><button className="border-2 border-secondary_purple text-secondary_purple px-8 py-2 mt-4 md:mt-0 hover:bg-secondary_purple hover:text-white rounded-md transition-all duration-500 ease-in-out flex gap-2 items-center" ><FaArrowRight /> See More Project</button></div>
        </section>
    );
}

export default Project;
