import { IoMdMail } from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';

function Profile() {
    return (
        <section
            id="home"
            className="flex flex-col md:flex-row mt-12 items-center"
        >
            <div
                data-aos="fade-right"
                className="text-white md:me-28 mb-8 md:mb-0"
            >
                <h1 className="font-semibold text-3xl md:text-[52px] text-center md:text-left">
                    I am{' '}
                    <span className="text-secondary_purple">Rizq Saputra</span>
                </h1>
                <p className="text-[#999999] mt-2 text-lg md:text-xl text-center md:text-left">
                    Web Developer
                </p>
                <hr className="w-[76px] mt-[50px] mb-[15px] mx-auto md:mx-0" />
                <p className="text-[#999999] text-lg md:text-xl text-center md:text-left">
                    Im a web developer with a keen interest in both front-end
                    and back-end development. I believe that an attractive and
                    functional design is crucial for effective product branding.
                    To create high-quality web solutions, I focus on proper
                    composition, visual details, and seamless user experiences.
                </p>
                <div className="flex flex-row gap-7 mt-14 justify-center md:justify-start">
                    <a target='_blank' href="https://www.linkedin.com/in/muhammad-rizq-saputra-378088281/">
                        <button className="py-2 sm:py-3 px-2 md:px-4 flex justify-center items-center gap-4 font-semibold text-sm text-nowrap sm:text-lg border-2 rounded-md text-secondary_purple border-secondary_purple hover:bg-secondary_purple hover:text-white transition-all duration-500 ease-in-out">
                            <FaLinkedin /> Linkedin
                        </button>
                    </a>
                    <a href="mailto:rizky002211@gmail.com">
                        <button className="py-2 sm:py-3 px-6 sm:px-8 font-semibold text-sm sm:text-lg flex justify-center items-center gap-4 border-2 rounded-md border-white hover:bg-white hover:text-[#0e0e0e] transition-all duration-500 ease-in-out">
                            <IoMdMail /> Email
                        </button>
                    </a>
                </div>
            </div>
            <img
                data-aos="fade-left"
                className="w-[300px] md:w-[425px] mx-auto md:mx-0 hidden lg:block hover:border-secondary_purple hover:border-4 rounded-full hover:transition-all hover:duration-500"
                src="../../public/images/profile.png"
                alt="profile picture"
            />
        </section>
    );
}

export default Profile;
