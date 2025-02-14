import Link from "next/link";
import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaHandsClapping } from "react-icons/fa6";

const WelcomeScreen = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-5">
      <div className="w-[95%] sm:w-[75%] md:w-[50%] lg:w-[40%] xl:w-[35%] h-auto flex items-center justify-center flex-col bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-14 border border-white/20">
        {/* Icon section */}
        <div className="w-16 h-16 backdrop-blur-md flex items-center justify-center rounded-full shadow-lg p-3 bg-[#ad5431] ">
          <BsFillSendFill className="text-white text-3xl  animate-pulse bg-[#ad5431]" />
        </div>

        {/* Content section */}
        <div className="w-full h-auto flex flex-col items-center justify-around mt-8">
          <div className="text-center mb-4">
            <h3 className="text-3xl font-bold text-white tracking-wide">
              Hey User <FaHandsClapping className="w-10 h-10 inline-block pl-2 animate-bounce" />
            </h3>
            <h3 className="text-2xl font-semibold text-white mt-2">
              Welcome to Our App!
            </h3>
          </div>
          <p className="text-center text-white text-lg mb-6 max-w-md mx-auto">
            We are thrilled to have you here. Our app helps you achieve your goals with ease and efficiency. Let's get started!
          </p>

          <div className="w-full flex justify-center mt-8">
            <Link
              href="/login"
              className="text-lg font-semibold text-white bg-[#ad5431]  py-3 px-10 rounded-lg transition-all duration-300 hover:bg-[#9c4230] shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
