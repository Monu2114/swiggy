import withPromotedLabel, { RestaurantCard } from "./RestaurantCard";
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

  const RestauarantPromoted = withPromotedLabel(RestaurantCard);

  // Runs whenever allRestaurants changes
  useEffect(() => {
    console.log(
      "📥 useEffect triggered because allRestaurants changed. Length:",
      allRestaurants
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
    <div className="flex flex-col gap-12 p-8">
      <div className="flex mt-14 gap-12 justify-center">
        <div className="flex gap-2">
          <input
            className="border-2 w-84 border-gray-500 rounded-xl"
            value={searchText}
            onChange={(e) => {
              const value = e.target.value;
              console.log("⌨️ Typing in search box:", value);
              setSearchText(value);
            }}
          />
          <button
            className="bg-orange-200 rounded-xl p-2 w-20"
            onClick={() => {
              console.log("🔍 Search button clicked with text:", searchText);
              const results = allRestaurants.filter((res) =>
                res?.card?.card?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              console.log("🔍 Search results length:", results.length);
              setFilteredRestaurant(results);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="bg-gray-200 p-2"
            onClick={() => {
              console.log("⭐ Top Rated filter clicked");
              const results = allRestaurants.filter(
                (res) => res?.card?.card?.info?.avgRating > 4.2
              );
              console.log("⭐ Top Rated results length:", results.length);
              setFilteredRestaurant(results);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
        {filteredRestaurant.map((res) => (
          <Link
            to={`/restaurant/${res?.card?.card?.info?.id}`}
            key={res?.card?.card?.info?.id}
          >
            {res?.card?.card?.info?.promoted ? (
              <RestauarantPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
