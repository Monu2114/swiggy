import { CDN_URL } from "../utils/constants";
import { NonVegIcon, VegIcon } from "../svg/NonVeg";

const DisplayItem = ({ item }) => {
  const item_info = item?.card?.info;
  const {
    name,
    imageId,
    itemAttribute,
    defaultPrice,
    ratings,
    price,
    description,
  } = item_info;
  const final_price = defaultPrice || price;

  return (
    <div className="flex justify-between w-full relative">
      <div className="flex flex-col gap-2">
        {itemAttribute.vegClassifier === "NONVEG" ? (
          <NonVegIcon className="w-4 h-4" />
        ) : (
          <VegIcon className="w-4 h-4" />
        )}

        <p className="text-lg text-gray-700 font-bold">{name}</p>
        <p>₹{final_price / 100 || ""}</p>
        <p className="text-sm text-gray-600">
          {ratings.aggregatedRating?.rating}
        </p>
        <p className="text-sm w-3/4">{description}</p>

        <hr className="bg-gray-200 w-2/3 h-[1px] border-0 mt-8" />
      </div>

      <img
        src={`${CDN_URL}${imageId}`}
        className="w-44 h-44 rounded-xl"
        alt={name}
      />
      <button className="w-26 h-12 absolute bottom-2 right-8 bg-white text-green-500 rounded-xl p-2">
        ADD
      </button>
    </div>
  );
};

export default DisplayItem;
