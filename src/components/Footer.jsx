import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="mt-16 sm:mt-64 bg-[#1D1B24] px-4 sm:px-8 md:px-24 py-8 sm:py-20">
      <div className="mx-auto text-center">
        <p className="font-bold text-secondary_purple text-lg sm:text-xl text-nowrap">Created By Rizq Saputra</p>
        <ul className="flex justify-center text-white gap-6 sm:gap-8 mt-4 sm:mt-6">
          <li className="cursor-pointer hover:text-secondary_purple hover:transition-all hover:duration-500 hover:ease-in-out"><a href="#">Home</a></li>
          <li className="cursor-pointer hover:text-secondary_purple hover:transition-all hover:duration-500 hover:ease-in-out"><a href="#">About</a></li>
          <li className="cursor-pointer hover:text-secondary_purple hover:transition-all hover:duration-500 hover:ease-in-out"><a href="#">Project</a></li>
          <li className="cursor-pointer hover:text-secondary_purple hover:transition-all hover:duration-500 hover:ease-in-out"><a href="#">Blog</a></li>
        </ul>
        <ul className="flex justify-center text-white gap-3 sm:gap-4 mt-6 sm:mt-10">
          <li className="size-10 rounded-full bg-secondary_purple cursor-pointer justify-center items-center flex hover:text-[#0e0e0e] hover:bg-white hover:transition-all hover:ease-in-out hover:duration-500"><a className="text-lg sm:text-xl" target="_blank" href="https://www.instagram.com/rizqsptr/"><FaInstagram /></a></li>
          <li className="size-10 rounded-full bg-secondary_purple cursor-pointer justify-center items-center flex hover:text-[#0e0e0e] hover:bg-white hover:transition-all hover:ease-in-out hover:duration-500"><a className="text-lg sm:text-xl" target="_blank" href="https://www.linkedin.com/in/muhammad-rizq-saputra-378088281/"><FaLinkedin /></a></li>
          <li className="size-10 rounded-full bg-secondary_purple cursor-pointer justify-center items-center flex hover:text-[#0e0e0e] hover:bg-white hover:transition-all hover:ease-in-out hover:duration-500"><a className="text-lg sm:text-xl" target="_blank" href="https://github.com/Rizq-Saputra"><FaGithub /></a></li>
          <li className="size-10 rounded-full bg-secondary_purple cursor-pointer justify-center items-center flex hover:text-[#0e0e0e] hover:bg-white hover:transition-all hover:ease-in-out hover:duration-500"><a className="text-lg sm:text-xl" target="_blank" href="mailto:rizky002211@gmail.com"><IoMdMail /></a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
