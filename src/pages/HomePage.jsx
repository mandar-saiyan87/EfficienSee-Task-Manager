import React from "react";
import { appimages } from "../assets/constants";
function HomePage() {
  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-b from-slate-200 to-red-300">
        <div className="w-full max-w-[1536px] pt-32 mx-auto px-2 lg:flex-center lg:h-screen">
          <div className="w-full h-full flex-center flex-col">
            <p className="text-4xl font-semibold text-center  text-secondary md:text-7xl md:leading-[5rem]">
              Your Productivity, Simplified.
            </p>
            <button className="text-white bg-primary py-2 px-4 font-medium rounded-md my-10 hover:bg-primary/70 md:text-xl md:py-2 md:px-5">
              Get Started
            </button>
          </div>
          <div className="w-full h-full flex-center">
            <img src={appimages.heroimage} alt="heroimage" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
