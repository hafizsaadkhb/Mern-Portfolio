import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const {lottieURL, description1, description2, skills} = about;
  return (
    <div id="about" className="h-[100vh] overflow-scroll">
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col md:flex-col">
        <div className="h-auto sm:h-auto md:h-auto w-1/2 sm:w-full md:w-full">
          <div className="md:flex md:w-full md:gap-6 md:items-center lg:h-[60vh] md:h-auto">
            <dotlottie-player
              src={lottieURL}
              background="transparent"
              speed="1"
              autoplay
              loop
            ></dotlottie-player>
            <p className="text-white lg:hidden md:block md:w-1/2 sm:hidden">
              {description1}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full md:w-full">
          <p className="text-[1rem] text-white md:hidden sm:block">
            {description1}
          </p>
          <p className="text-white">
            {description2}
          </p>
        </div>
      </div>
      <div className="sm:py-5 md:py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap lg:flex-nowrap overflow-scroll gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10 whitespace-nowrap">
              <h1 className="text-tertiary min-w-16 flex justify-center items-center">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
