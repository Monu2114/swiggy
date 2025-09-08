import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json_data = await data.json();
    setResInfo(json_data);
    console.log("FULL RESPONSE:", json_data?.data?.cards[2]?.card?.card?.info);
  };

  return resInfo;
};

export default useRestaurantMenu;
