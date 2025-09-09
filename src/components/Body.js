import RestaurantCard from "./RestaurantCard";
import useRestaurantData from "../utils/useRestaurantData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  console.log("🔄 Body rendered");
  const { allRestaurants, error } = useRestaurantData();
  // original full list
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // filtered list
  const [searchText, setSearchText] = useState("");

  // Runs whenever allRestaurants changes
  useEffect(() => {
    console.log(
      "📥 useEffect triggered because allRestaurants changed. Length:",
      allRestaurants.length
    );
    setFilteredRestaurant(allRestaurants);
  }, [allRestaurants]);

  const status = useOnlineStatus();

  if (status === false) {
    return <h1>Offline</h1>;
  }
  if (error) return <h1 className="text-3xl">{error}</h1>;

  if (allRestaurants.length === 0) {
    console.log("⏳ allRestaurants is empty → showing Shimmer");
    return <Shimmer />;
  }

  console.log(
    "✅ Ready to render UI with",
    filteredRestaurant.length,
    "restaurants"
  );

  return (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input
            className="search-input"
            value={searchText}
            onChange={(e) => {
              const value = e.target.value;
              console.log("⌨️ Typing in search box:", value);
              setSearchText(value);
            }}
          />
          <button
            onClick={() => {
              console.log("🔍 Search button clicked with text:", searchText);
              const results = allRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log("🔍 Search results length:", results.length);
              setFilteredRestaurant(results);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              console.log("⭐ Top Rated filter clicked");
              const results = allRestaurants.filter(
                (res) => res?.info?.avgRating > 4.2
              );
              console.log("⭐ Top Rated results length:", results.length);
              setFilteredRestaurant(results);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4">
        {filteredRestaurant.map((res) => (
          <Link to={`/restaurant/${res?.info?.id}`} key={res?.info?.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
