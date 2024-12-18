import React from "react";

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

export default CollectionsCard;
