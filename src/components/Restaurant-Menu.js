import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json_data = await data.json();
    setResInfo(json_data);
    console.log("FULL RESPONSE:", json_data?.data?.cards[2]?.card?.card?.info);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, id, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  console.log(itemCards);

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <p>
          <strong>
            {cuisines?.join(", ")} - {costForTwoMessage}
          </strong>
          <br />
        </p>
        <h3>Recommended : </h3>
        <ul className="recommended-menu">
          {itemCards?.map((item) => (
            <li key={item?.card?.info?.id} className="link">
              {item?.card?.info?.name} - Rs.{item?.card?.info?.defaultPrice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
