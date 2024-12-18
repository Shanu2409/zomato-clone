import React from "react";
import appImg from "../assets/app-img.png";
import googlyPlay from "../assets/GooglePlay.png";
import appStore from "../assets/appStore.png";
import { useState } from "react";

const AppPromotion = () => {
  const [inputType, setInputType] = useState("email"); // Default input type is 'email'

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 lg:px-32 py-16 bg-[#fffbf7]">
      {/* App Image */}
      <div className="mb-8 lg:mb-0 lg:mr-16">
        <img src={appImg} alt="Zomato App" className="w-64 lg:w-80" />
      </div>

      {/* Text and Input Section */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          Get the Zomato app
        </h1>
        <p className="text-gray-600 mb-6">
          We will send you a link, open it on your phone to download the app
        </p>

        {/* Email/Phone Selector */}
        <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="contact"
              value="email"
              checked={inputType === "email"}
              onChange={() => setInputType("email")}
            />
            <span>Email</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="contact"
              value="phone"
              checked={inputType === "tel"}
              onChange={() => setInputType("tel")}
            />
            <span>Phone</span>
          </label>
        </div>

        {/* Input and Button */}
        <div className="flex">
          <input
            type={inputType}
            placeholder={inputType === "email" ? "email" : "phone number"}
            className="p-3 border border-gray-300 rounded-l-lg outline-none flex-grow"
          />
          <button className="bg-red-500 text-white px-6 rounded-r-lg">
            Share App Link
          </button>
        </div>

        {/* App Store Buttons */}
        <p className="text-gray-600 mt-6">Download app from</p>
        <div className="flex justify-center lg:justify-start space-x-4 mt-2">
          <img src={googlyPlay} alt="Google Play" className="w-32" />
          <img src={appStore} alt="App Store" className="w-32" />
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;
