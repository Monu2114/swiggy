import { useState, useEffect } from "react";

const useRestaurantData = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/..."
        );
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setAllRestaurants(data?.restaurants || []);
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
