import React from "react";
import AppPromotion from "./AppPromotion";
import ExploreOptions from "./ExploreOptions";

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

export default AppPromotionPage;
