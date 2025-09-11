import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import Category from "./Category";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const status = useOnlineStatus();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards?.[2]?.card?.card?.info;

  if (status === false) {
    return <h1>Offline</h1>;
  }

  const categories =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleClick = (index) => {
    setShowIndex(showIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center gap-8 my-12">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="text-lg font-medium">
        {cuisines?.join(", ")} - {costForTwoMessage}
        <br />
      </p>

      {/* category accordians */}
      <div className="flex flex-col gap-4 items-center ">
        {categories.map((category, index) => (
          // controlled component

          <Category
            onClick={() => handleClick(index)}
            categoryCard={category}
            key={category?.card?.card?.categoryId}
            showItems={index === showIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
