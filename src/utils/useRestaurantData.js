import { useState, useEffect } from "react";
import { RESTAURANT_API } from "../utils/constants";
const useRestaurantData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(RESTAURANT_API);
        if (!res.ok) throw new Error("Network response was not ok");
        const json_data = await res.json();
        setAllRestaurants(
          json_data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (err) {
        console.log("Failed to fetch restaurants:", err);
        setError("Failed to fetch restaurants. Please try again later.");
      }
    };
    fetchData();
  }, []);

  return { allRestaurants, error };
};

export default useRestaurantData;
