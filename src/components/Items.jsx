import { Link } from "react-router-dom";

const Items = ({ item }) => {
  return (
    <Link to="/item-view">
      <div className="itemWrapper px-4 flex flex-col drop-shadow-sm hover:scale-110 ease-in-out duration-300 gap-3 min-w-40 flex-shrink-0 rounded-lg p-4 border-[1px] border-opacity-30 border-gray-400 m-2 items-center justify-center">
        <div className="img object-cover">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="info flex flex-col gap-1 items-start justify-start">
          <span className="font-semibold">{item.name}</span>
          <div className="price-add-btn flex items-center gap-5">
            <span className="text-green-600">{`$${item.price.toFixed(
              2
            )}`}</span>
            <button className="h-8 px-4 text-[14px] py-[2px] border-2 text-red-600 bg-red-500 hover:bg-red-600 ease-in duration-150 hover:text-white bg-opacity-10 border-red-600  border-opacity-85 rounded-lg text-center cursor-pointer">
              ADD
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Items;
