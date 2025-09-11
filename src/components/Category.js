import DisplayItem from "./DisplayItem";

const Category = ({ categoryCard, showItems, onClick }) => {
  //   const [dropdown, setDropdown] = useState(false);
  //   const [items, showItems] = useState(false);
  const { title, itemCards } = categoryCard?.card?.card;
  console.log(title + "title");

  //   const handleShow = () => {
  //     showItems(!items);
  //     setDropdown(!dropdown);
  //   };
  return (
    <div className="flex flex-col gap-8 max-w-5xl" onClick={onClick}>
      <hr className="bg-gray-200  h-[12px] border-0" />

      <div className="flex justify-between rounded-xl border-2 border-gray-200 p-4 w-5xl cursor-pointer">
        <h3 className="font-bold text-xl tracking-tighter">
          {title} ({itemCards.length})
        </h3>
        {/* <button>{dropdown ? "▲" : "▽"}</button> */}
        <button>▽</button>
      </div>
      <div className="flex flex-col gap-8 items-center">
        {showItems &&
          itemCards.map((item) => {
            return <DisplayItem item={item} key={item?.card?.info?.id} />;
          })}
      </div>
    </div>
  );
};

export default Category;
