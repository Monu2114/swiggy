import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  const [restaurant, setRestaurant] = useState(resData);
  return (
    <div className="body">
      {console.log("ig i am not re rendered")}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurant(
              restaurant.filter(
                (restaurant) => restaurant.card.card.info.avgRating > 4.2
              )
            );
            console.log("am re rednered");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurant.map((restaurant) => {
          return (
            <RestaurantCard
              resData={restaurant}
              key={restaurant.card.card.info.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
