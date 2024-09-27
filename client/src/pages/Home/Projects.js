import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  return (
    <div id="projects" className="h-[100vh] flex flex-col justify-center">
      <SectionTitle title="Projects" />
      <div className="flex md:items-center lg:items-center lg:min-h-[50%] lg:max-h-[70%] md:min-h-[50%] md:max-h-[70%] gap-20 md:gap-10 sm:flex-col">
        <div className="flex flex-col justify-center gap-10 border-l-2 sm:border-l-0 sm:border-b-2 border-tertiary border-opacity-20 w-1/3 sm:flex-row sm:justify-start sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              className="cursor-pointer"
              onClick={() => {
                setSelectedItemIndex(index);
              }}
            >
              <h1
                className={`text-xl px-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 sm:border-b-4 sm:border-l-0 bg-tertiary bg-opacity-10 -ml-[2px] py-3"
                    : "text-white"
                }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 grid-rows-4 sm:flex sm:flex-col sm:gap-4 md:flex md:flex-col md:gap-4 overflow-scroll">

          <div className="flex items-center col-start-1 col-end-3 order-1 row-start-1 row-span-4">
            <img
              className="w-full"
              src={projects[selectedItemIndex].image}
              alt=""
            />
          </div>

          <h1 className="text-secondary flex items-center text-xl col-start-3 col-end-6 order-2 row-span-1">
            {projects[selectedItemIndex].title}
          </h1>

          <div className="text-tertiary flex flex-row items-center sm:flex-nowrap flex-wrap overflow-scroll col-start-3 col-end-6 order-3 row-span-1">
            {projects[selectedItemIndex].technologies.map(
              (technologies, index) => (
                <h1 className="border flex justify-center text-xs border-tertiary m-4 p-3 items-center min-w-28">
                  {technologies}
                </h1>
              )
            )}
          </div>

          <p className="text-white order-4 ml-4 col-start-3 col-end-6 row-span-1">
            {projects[selectedItemIndex].description}
          </p>

          <div className="order-5 col-start-3 col-end-6 row-span-1 flex justify-end p-5 items-center">
            <Link to={projects[selectedItemIndex].link}>
            <button className="text-secondary w-28 h-8 border border-secondary">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
