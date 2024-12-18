// import Header from "./components/Header";
// import Services from "./components/Services";
import bgImg from "./assets/banner-img.png";

// import AppPromotionPage from "./components/AppPromotionPage";
// import Footer from "./components/Footer";

import dining from "./assets/services/dining.png";
import liveEvents from "./assets/services/live-events.png";
import onlineOrder from "./assets/services/order-online.png";

import one from "./assets/collections/one.png";
import two from "./assets/collections/two.png";
import appImg from "./assets/app-img.png";
import googlyPlay from "./assets/GooglePlay.png";
import appStore from "./assets/appStore.png";
import { useState } from "react";
import { ImLinkedin } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook, FaLocationDot, FaXTwitter } from "react-icons/fa6";
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

const ExploreOptions = () => {
  return (
    <div className="py-16 px-6 sm:px-12 lg:px-96 bg-[#fcfcfc]">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center lg:text-left">
        Explore options near me
      </h2>
      <div className="space-y-4">
        <AccordionItem title="Popular Cuisines Near Me" />
        <AccordionItem title="Popular Restaurant Types Near Me" />
        <AccordionItem title="Top Restaurant Chains" />
        <AccordionItem title="Cities We Deliver To" />
      </div>
    </div>
  );
};

const AccordionItem = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle visibility

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle the open/close state
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/* Accordion Header */}
      <button
        onClick={toggleAccordion}
        className="w-full text-left p-4 bg-white focus:outline-none flex justify-between items-center"
      >
        <span className="font-medium text-gray-800">{title}</span>
        <span className="text-gray-500 transform transition-transform duration-300">
          {isOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-4 bg-white text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
            urna sit amet justo venenatis faucibus. Phasellus consequat eros sit
            amet turpis facilisis, eget vulputate mi fringilla.
          </p>
        </div>
      )}
    </div>
  );
};

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
            <span className="text-gray-400 material-icons">
              <FaLocationDot color="red" />
            </span>
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

const LocalityCard = ({ locality, places }) => (
  <div className="bg-white text-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
    <h4 className="text-gray-800 font-medium">{locality}</h4>
    <p className="text-sm text-gray-500">{places}</p>
  </div>
);

const CollectionsCard = ({ imgSrc, title, places }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer">
    <img src={imgSrc} alt={title} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
    <div className="absolute bottom-0 p-4 text-white">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm opacity-90">{places} &#9654;</p>
    </div>
  </div>
);

const ServiceCard = ({ imgSrc, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-16 lg:px-48 xl:px-72 py-8">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <ServiceCard
          imgSrc={onlineOrder}
          title="Order Online"
          description="Stay home and order to your doorstep"
        />
        <ServiceCard
          imgSrc={dining}
          title="Dining"
          description="View the city’s favourite dining venues"
        />
        <ServiceCard
          imgSrc={liveEvents}
          title="Live Events"
          description="Discover India’s best events & concerts"
        />
      </div>

      {/* Collections Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-2">Collections</h2>
        <p className="text-gray-600 mb-6">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Mumbai, based on trends
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CollectionsCard
            imgSrc={one}
            title="Christmas Special Restaurants"
            places="46 Places"
          />
          <CollectionsCard
            imgSrc={two}
            title="New Year’s Celebration"
            places="27 Places"
          />
          <CollectionsCard
            imgSrc={one}
            title="Newly Opened Places"
            places="36 Places"
          />
          <CollectionsCard
            imgSrc={two}
            title="Top Trending Spots"
            places="24 Places"
          />
        </div>
      </div>

      {/* Localities Section */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">
          Popular localities in and around{" "}
          <span className="text-red-500">Mumbai</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <LocalityCard locality="Lower Parel" places="490 places" />
          <LocalityCard locality="Powai" places="439 places" />
          <LocalityCard locality="Malad West" places="957 places" />
          <LocalityCard locality="Borivali West" places="684 places" />
          <LocalityCard locality="Bandra Kurla Complex" places="159 places" />
          <LocalityCard locality="Vashi" places="664 places" />
          <LocalityCard locality="Fort" places="289 places" />
          <LocalityCard locality="Juhu" places="249 places" />
          <LocalityCard locality="see more" places="" />
        </div>
      </div>
    </div>
  );
};

const AppPromotionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* App Promotion Section */}
      <AppPromotion />

      {/* Explore Options Section */}
      <ExploreOptions />
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Services />
      <AppPromotionPage />

      <Footer />
    </div>
  );
}

export default App;
