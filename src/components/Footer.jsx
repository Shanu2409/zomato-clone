import React from "react";
import googlyPlay from "../assets/GooglePlay.png";
import appStore from "../assets/appStore.png";
import { ImLinkedin } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const CountryLanguageDropdown = () => {
  return (
    <div className="flex space-x-4 items-center">
      {/* Country Dropdown */}
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1.5 shadow-sm cursor-pointer hover:shadow-md">
        <span className="mr-2">🇮🇳</span>
        <select
          className="bg-transparent text-gray-800 outline-none appearance-none"
          defaultValue="India"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
        <span className="ml-2 text-gray-500">▼</span>
      </div>

      {/* Language Dropdown */}
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1.5 shadow-sm cursor-pointer hover:shadow-md">
        <span className="mr-2 text-gray-800">🌐</span>
        <select
          className="bg-transparent text-gray-800 outline-none appearance-none"
          defaultValue="English"
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        <span className="ml-2 text-gray-500">▼</span>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#fffbf7] py-8">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Logo and Dropdowns */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="text-3xl font-bold text-gray-800 mb-4 lg:mb-0">
            zomato
          </div>

          <CountryLanguageDropdown />
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-gray-600 mb-8">
          {/* About Zomato */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">ABOUT ZOMATO</h3>
            <ul className="space-y-2">
              <li>Who We Are</li>
              <li>Blog</li>
              <li>Work With Us</li>
              <li>Investor Relations</li>
              <li>Report Fraud</li>
              <li>Press Kit</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Zomaverse */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">ZOMAVERSE</h3>
            <ul className="space-y-2">
              <li>Zomato</li>
              <li>Blinkit</li>
              <li>District</li>
              <li>Feeding India</li>
              <li>Hyperpure</li>
              <li>Zomato Live</li>
              <li>Zomaland</li>
              <li>Weather Union</li>
            </ul>
          </div>

          {/* For Restaurants */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              FOR RESTAURANTS
            </h3>
            <ul className="space-y-2">
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">LEARN MORE</h3>
            <ul className="space-y-2">
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">SOCIAL LINKS</h3>
            <div className="flex space-x-4 mb-4">
              {/* Social Media Icons */}
              <a href="#" className="text-black">
                <ImLinkedin />
              </a>
              <a href="#" className="text-black">
                <LuInstagram />
              </a>
              <a href="#" className="text-black">
                <FaXTwitter />
              </a>
              <a href="#" className="text-black">
                <IoLogoYoutube />
              </a>
              <a href="#" className="text-black">
                <FaFacebook />
              </a>
            </div>
            {/* App Store Buttons */}
            <div className="space-y-2">
              <img src={appStore} alt="App Store" className="w-32" />
              <img src={googlyPlay} alt="Google Play" className="w-32" />
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-gray-500 text-sm border-t border-gray-300 pt-4 text-center">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy, and Content Policies. 2024 © Zomato™
          Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
