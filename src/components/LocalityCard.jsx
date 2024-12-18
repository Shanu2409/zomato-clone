import React from "react";

const LocalityCard = ({ locality, places }) => (
  <div className="bg-white text-center p-4 border rounded-lg shadow-sm cursor-pointer hover:shadow-md transition">
    <h4 className="text-gray-800 font-medium">{locality}</h4>
    <p className="text-sm text-gray-500">{places}</p>
  </div>
);

export default LocalityCard;
