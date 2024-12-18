import React from "react";
import bgImg from "../assets/banner-img.png";
import "../App.css";

const Header = () => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Centered Navbar */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4">
        <div className="flex justify-center items-center space-x-8 text-white text-sm font-medium">
          <a href="#" className="hover:underline transition duration-200">
            Get the App
          </a>
          <a href="#" className="hover:underline transition duration-200">
            Investor Relations
          </a>
          <a href="#" className="hover:underline transition duration-200">
            Add restaurant
          </a>
          <a href="#" className="hover:underline transition duration-200">
            Log in
          </a>
          <a href="#" className="hover:underline transition duration-200">
            Sign up
          </a>
        </div>
      </div>

      {/* Header Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">zomato</h1>
        <p className="text-2xl mb-6">
          Discover the best food & drinks in Mumbai
        </p>

        {/* Search Bar */}
        <div className="flex bg-white rounded-full shadow-md w-3/4 md:w-1/2">
          {/* Location */}
          <div className="flex items-center px-4 border-r">
            <span className="text-gray-400 material-icons">place</span>
            <select className="outline-none ml-2 text-gray-700">
              <option>Mumbai</option>
            </select>
          </div>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="flex-1 p-3 outline-none text-gray-700"
          />
          <button className="px-4 text-gray-500 material-icons">search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
