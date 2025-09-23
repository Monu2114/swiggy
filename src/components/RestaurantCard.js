import React from "react";
import { CDN_URL } from "../utils/constants";
export const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } =
    resData?.card?.card?.info;
  console.log(resData);
  return (
    <div className="flex flex-col p-4 w-full md:w-84 h-72 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
      <img
        className="w-full h-40 object-cover rounded-lg mb-3"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt={name}
      />

      <h3 className="font-bold text-lg truncate">{name}</h3>
      <h4 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h4>
      <h4 className="text-sm font-medium text-gray-800 mt-1">⭐ {avgRating}</h4>
    </div>
  );
};

// Higher Order Component

// input - Restaurant Card => output - PromotedRestroCard

const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-500 rounded-xl text-white p-2">
          ⭐ Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default WithPromotedLabel;
