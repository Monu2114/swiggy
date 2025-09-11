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
    <div className="flex flex-col gap-12">
      <div className="flex justify-between">
        <h3 className="font-bold text-xl tracking-tighter">
          {title} ({itemCards.length})
        </h3>
        <button onClick={handleShow}>{dropdown ? "▲" : "▽"}</button>
      </div>
      <div className="flex flex-col gap-8">
        {items.map((item) => {
          return <DisplayItem item={item} key={item?.card?.info?.id} />;
        })}
      </div>
      <hr className="bg-gray-200 w-2/3 h-[10px] border-0" />
    </div>
  );
};

export default Category;
