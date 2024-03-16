import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, middleName, lastName, welcomeText, description, caption } =
    intro;
  return (
    <div id="intro" className="h-[90vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">{welcomeText || ""}</h1>
      <h1 className="text-7xl sm:text-3xl md:text-7xl text-secondary font-semibold">
        {firstName || ""} {middleName[0] + "." || ""} {lastName || ""}
      </h1>
      <h1 className="text-7xl sm:text-3xl md:text-4xl text-white font-semibold">
        {caption}
      </h1>
      <p className="text-white w-3/4">{description}</p>
      <Link to="/admin">
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">
        Get Started
      </button>
      </Link>
    </div>
  );
}

export default Intro;
