import React from "react";
import ServiceCard from "./ServiceCard";
import CollectionsCard from "./CollectionsCard";
import LocalityCard from "./LocalityCard";

import dining from "../assets/services/dining.png";
import liveEvents from "../assets/services/live-events.png";
import onlineOrder from "../assets/services/order-online.png";

import one from "../assets/collections/one.png";
import two from "../assets/collections/two.png";

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

export default Services;
