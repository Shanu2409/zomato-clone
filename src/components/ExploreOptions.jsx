import React, { useState } from "react";

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

export default ExploreOptions;
