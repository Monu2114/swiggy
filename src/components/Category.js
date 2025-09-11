import { useState } from "react";
import DisplayItem from "./DisplayItem";

const Category = ({ categoryCard }) => {
  const [dropdown, setDropdown] = useState(false);
  const [items, showItems] = useState([]);
  const { title, itemCards } = categoryCard?.card?.card;
  console.log(title + "title");

  const handleShow = () => {
    items.length > 0 ? showItems([]) : showItems(itemCards);
    setDropdown(!dropdown);
  };
  return (
    <div className="flex flex-col gap-8">
      <hr className="bg-gray-200 w-full h-[12px] border-0" />

      <div className="flex justify-between rounded-xl border-2 border-gray-200 p-4 w-5xl">
        <h3 className="font-bold text-xl tracking-tighter">
          {title} ({itemCards.length})
        </h3>
        <button onClick={handleShow}>{dropdown ? "▲" : "▽"}</button>
      </div>
      <div className="flex flex-col gap-8 items-center">
        {items.map((item) => {
          return <DisplayItem item={item} key={item?.card?.info?.id} />;
        })}
      </div>
    </div>
  );
};

export default Category;
