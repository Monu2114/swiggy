import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
  console.log("Body rendered");

  const [allRestaurants] = useState([]); // original full list
  const [restaurant, setRestaurant] = useState([]); // filtered list
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    console.log("use effect after component loaded");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_"
    );

    const json_data = await data.json();

    setRestaurant(
      json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    return json_data;
  };

  if (restaurant.length === 0) return <h1>Loading....</h1>;
  return (
    <div className="body">
      <div className="search">
        <input
          className="search-input"
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);

            // always filter from the original list
            setRestaurant(
              allRestaurants.filter((res) =>
                res.info.name.toLowerCase().startsWith(value.toLowerCase())
              )
            );
          }}
        />
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurant(
              allRestaurants.filter((res) => res?.info?.avgRating > 4.2)
            );
            console.log("am re-rendered");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {restaurant.map((res) => (
          <RestaurantCard resData={res} key={res?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
