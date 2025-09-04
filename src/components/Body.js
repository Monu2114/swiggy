import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("Body rendered");

  const [allRestaurants, setAllRestaurants] = useState([]); // original full list
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // filtered list
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("use effect after component loaded");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_"
    );

    const json_data = await data.json();

    setAllRestaurants(
      json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    return json_data;
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input
            className="search-input"
            value={searchText}
            onChange={(e) => {
              const value = e.target.value;
              setSearchText(value);

              // always filter from the original list
            }}
          />
          <button
            onClick={() => {
              setFilteredRestaurant(
                allRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              setFilteredRestaurant(
                allRestaurants.filter((res) => res?.info?.avgRating > 4.2)
              );
              console.log("am re-rendered");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="restaurant-container">
        {filteredRestaurant.map((res) => (
          <RestaurantCard resData={res} key={res?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
