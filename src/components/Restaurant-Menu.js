import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
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
              {item?.card?.info?.name} - Rs.{item?.card?.info?.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
