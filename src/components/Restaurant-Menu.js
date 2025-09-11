import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import Category from "./Category";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const status = useOnlineStatus();

  if (resInfo === null) {
    return <Shimmer />;
  }

  if (status === false) {
    return <h1>Offline</h1>;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards?.[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  const { itemCards } =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  console.log(itemCards);

  return (
    <div className="flex flex-col items-center gap-8 my-12">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="text-lg font-medium">
        {cuisines?.join(", ")} - {costForTwoMessage}
        <br />
      </p>

      {/* category accordians */}
      <div className="flex flex-col gap-4">
        {categories.map((category) => {
          return (
            <Category
              categoryCard={category}
              key={category?.card?.card?.categoryId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
