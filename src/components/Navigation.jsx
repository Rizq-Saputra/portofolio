import { Link } from "react-router-dom";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToProjects = () => {
    scroll.scrollTo("project", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
    toggleMenu();
  };

  return (
    <header className="bg-[#0C0C0C] relative">
      <div className="container mx-auto px-4 py-4 md:px-0">
        <div className="flex items-center justify-between py-4">
          <div className="text-white text-2xl cursor-pointer font-semibold">
            Portofolio
          </div>
          <nav className="block text-center absolute top-0 right-0 w-full z-10 md:text-left md:static md:w-auto">
            <div className="md:hidden text-end">
              <button onClick={toggleMenu} className="text-white px-6 py-8 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
            </div>
            <ul
              className={`md:flex md:flex-row md:items-center md:space-x-4 transition-transform duration-300 ease-in-out ${isOpen ? "transform scale-100 opacity-100" : "transform scale-90 opacity-0"} md:transform-none md:opacity-100 bg-[#0C0C0C] pb-2`}
            >
              <li className="py-2 md:py-0">
                <Link to='/#' className="text-white block px-5 py-2 hover:text-[#913DCB] transition duration-500">Home</Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to='#about' className="text-white block px-5 py-2 hover:text-[#913DCB] transition duration-500">About</Link>
              </li>
              <li className="py-2 md:py-0">
                <ScrollLink to="project" smooth={true} duration={800} className="text-white cursor-pointer block px-5 py-2 hover:text-[#913DCB] transition duration-500" onClick={scrollToProjects}>Project</ScrollLink>
              </li>
              <li className="py-2 md:py-0">
                <Link to='/#' className="text-white block px-5 py-2 hover:text-[#913DCB] transition duration-500">Blog</Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to='mailto:rizky002211@gmail.com' className="text-[#913DCB] block px-5 py-2 hover:text-white hover:bg-[#913DCB] transition duration-500 border-2 border-[#913DCB] rounded">Contact Me</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
