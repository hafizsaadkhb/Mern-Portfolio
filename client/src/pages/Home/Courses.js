import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { courses } = portfolioData;
  return (
    <div className="h-[100vh] flex flex-col justify-center overflow-hidden">
      <SectionTitle title="Courses" />
      <div className="flex items-center lg:min-h-[50%] lg:max-h-[70%] md:min-h-[50%] md:max-h-[70%] gap-20 md:gap-10 sm:flex-col">
        <div className="flex flex-col lg:min-h-[50%] lg:max-h-[70%] md:min-h-[50%] md:max-h-[70%] overflow-visible gap-10 border-l-2 sm:border-l-0 sm:border-b-2 border-tertiary border-opacity-20 w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {courses.map((course, index) => (
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
                {course.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 grid-rows-4 sm:flex-col sm:gap-4 md:flex-col md:gap-4 overflow-scroll">
          
          <div className=" col-start-6 col-span-6 row-start-1 row-span-4 flex items-center order-1">
            <img
              className="w-full"
              src={courses[selectedItemIndex].image}
              alt=""
            />
          </div>

          <h1 className="text-secondary col-start-1 col-span-5 flex items-center text-[1.25rem] order-2">
            {courses[selectedItemIndex].title}
          </h1>

          <h2 className="text-tertiary col-start-1 col-span-5 flex items-center text-[1rem] order-3">
            {courses[selectedItemIndex].platform}
          </h2>

          <h1 className="text-white col-start-1 col-span-5 flex items-center text-[1.25rem] order-4">
            {courses[selectedItemIndex].instructor}
          </h1>

          <div className="order-5 col-start-1 col-span-5 flex justify-start items-center">
            <button className="text-secondary w-28 h-8 border border-secondary">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
