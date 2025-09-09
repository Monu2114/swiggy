import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="flex flex-col p-4 w-86 rounded-2xl shadow-md bg-white hover:shadow-lg transition">
      <img
        className="w-full h-40 object-cover rounded-lg mb-3"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt={name}
      />

      <h3 className="font-bold text-lg truncate">{name}</h3>
      <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
      <h4 className="text-sm font-medium text-gray-800 mt-1">⭐ {avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
