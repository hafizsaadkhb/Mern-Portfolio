import React from "react";
import { Link } from "react-scroll";

function RightSider() {
  return (
    <div className="w-40 fixed right-0 top-0 lg:h-[100vh] md:h-[100vh] sm:fixed sm:bottom-0 sm:top-auto sm:w-full md:w-20 flex items-center sm:bg-primary">
      <div className="lg:h-[50vh] md:h-[50vh] w-full flex flex-col-reverse justify-around items-center sm:flex-row-reverse sm:items-around">
        <Link className="text-gray-700 hover:text-tertiary cursor-pointer" to="contact" spy={true} smooth={true} activeClass="text-tertiary scale-[2] transition-all duration-500">
          <i class="ri-contacts-book-2-fill text-xl"></i>
        </Link>
        <Link className="text-gray-700 hover:text-tertiary cursor-pointer" to="projects" spy={true} smooth={true} activeClass="text-tertiary scale-[2] transition-all duration-500">
          <i class="ri-code-s-slash-fill text-xl"></i>
        </Link>
        <Link className="text-gray-700 hover:text-tertiary cursor-pointer" to="experiences" spy={true} smooth={true} activeClass="text-tertiary scale-[2] transition-all duration-500">
          <i class="ri-suitcase-fill text-xl"></i>
        </Link>
        <Link className="text-gray-700 hover:text-tertiary cursor-pointer" to="about" spy={true} smooth={true} activeClass="text-tertiary scale-[2] transition-all duration-500">
          <i class="ri-user-3-fill text-xl"></i>
        </Link>
        <Link className="text-gray-700 hover:text-tertiary cursor-pointer" to="intro" spy={true} smooth={true} activeClass="text-tertiary scale-[2] transition-all duration-500" offset={-200}>
          <i class="ri-github-fill text-xl"></i>
        </Link>
        {/* <div className="sm:hidden h-[15vh] w-[1px] bg-gray-700"></div> */}
      </div>
    </div>
  );
}

export default RightSider;
