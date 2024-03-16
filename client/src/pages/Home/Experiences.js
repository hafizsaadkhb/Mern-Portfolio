import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <div id="experiences" className="h-[100vh] flex flex-col justify-center">
      <SectionTitle title="Experience" />
      <div className="flex md:items-center lg:items-center lg:min-h-[50%] lg:max-h-[70%] md:min-h-[50%] md:max-h-[70%] gap-20 md:gap-10 sm:flex-col">
        <div className="flex flex-col lg:min-h-[50%] lg:max-h-[70%] md:min-h-[50%] md:max-h-[70%] overflow-scroll gap-10 border-l-2 sm:border-l-0 sm:border-b-2 border-tertiary border-opacity-20 w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                setSelectedItemIndex(index);
              }}
            >
              <h1
                className={`text-[1.3rem] px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 sm:border-b-4 sm:border-l-0 bg-tertiary bg-opacity-10 -ml-[2px] py-3"
                    : "text-white"
                }`}
              >
                {experience.start} - {experience.end}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-3/4 sm:w-full">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            {experiences[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
