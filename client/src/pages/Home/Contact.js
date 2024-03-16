import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  return (
    <div id="contact" className="h-[85vh] flex flex-col justify-center ">
      <SectionTitle title="Contact" />
      <div className="flex w-full items-center justify-around sm:flex-col sm:items-start">
        <div className="flex flex-col gap-4 w-1/3 sm:w-full">
          <h1 className="text-tertiary">{"{"}</h1>
          {Object.keys(contact).map((key) => {
            if (key === "_id") {
              return;
            }
            return (
              <h1 className="text-tertiary ml-5">
                <span className="lowercase">"{key}"</span> : <span>"{contact[key]}"</span>
              </h1>
            );
          })}
          <h1 className="text-tertiary">{"}"}</h1>
        </div>
        <div className="flex justify-center items-center w-1/3 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/073d320d-aac8-44ad-9a2e-c9cb606e5831/N2hENybQkn.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
