import React from "react";

const ServiceCard = ({ imgSrc, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
