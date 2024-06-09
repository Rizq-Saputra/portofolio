function Language() {
    return (
        <section className="mt-16 md:mt-24 px-4 md:px-8 lg:px-16">
            <h1 data-aos="fade-up" className="font-semibold text-3xl md:text-4xl text-center text-white">Programming Language</h1>
            <div className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-16 md:gap-32 justify-center">
                <img data-aos="fade-right" data-aos-delay="100" className="filter cursor-pointer grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105 mx-auto" src="../../public/svg/nodejs.svg" alt="node js" />
                <img data-aos="fade-up" data-aos-delay="200" className="filter cursor-pointer grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105 mx-auto" src="../../public/svg/html.svg" alt="html" />
                <img data-aos="fade-down" data-aos-delay="300" className="filter cursor-pointer grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105 mx-auto" src="../../public/svg/css.svg" alt="css" />
                <img data-aos="fade-left" data-aos-delay="400" className="filter cursor-pointer grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105 mx-auto" src="../../public/svg/js.svg" alt="javascript" />
                <img data-aos="fade-right" data-aos-delay="500" className="filter cursor-pointer grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105 mx-auto" src="../../public/svg/react.svg" alt="react js" />
                <img data-aos="fade-left" data-aos-delay="600" className="filter cursor-pointer grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105 mx-auto" src="../../public/svg/tailwindcss.svg" alt="tailwind css" />
                <img data-aos="fade-up" data-aos-delay="700" className="filter cursor-pointer grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105 mx-auto" src="../../public/svg/python.svg" alt="python" />
                <img data-aos="fade-down" data-aos-delay="800" className="filter cursor-pointer grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105 mx-auto" src="../../public/svg/bootstrap.svg" alt="bootstrap" />
                <img data-aos="fade-right" data-aos-delay="900" className="filter cursor-pointer grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105 mx-auto" src="../../public/svg/php.svg" alt="php" />
                <img data-aos="fade-left" data-aos-delay="1000" className="filter cursor-pointer grayscale hover:grayscale-0 transition duration-300 transform hover:scale-105 mx-auto" src="../../public/svg/mysql.svg" alt="mysql" />
            </div>
        </section>
    );
}

export default Language;
