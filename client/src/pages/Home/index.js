import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "../../components/Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";
import RightSider from "./RightSider";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      {portfolioData && (
        <div>
          <Header />
          <div className="bg-primary px-40 sm:px-5 md:px-20">
            <Intro />
            <About />
            <Experiences />
            <Projects />
            <Courses />
            <Contact />
            <Footer />
            <LeftSider />
            <RightSider />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
