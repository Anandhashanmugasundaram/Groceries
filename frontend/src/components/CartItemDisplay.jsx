import React from "react";
import DynamicButton from "./DynamicButton";
import { currency } from "../context/CartContext";

const CartItemDisplay = ({ groupedItems }) => {
  return groupedItems.map((item) => (
    <div
      key={item.id}
      className="itemWrapper w-[90%] mt-4 flex flex-row drop-shadow-sm hover:scale-105 ease-in-out duration-300 gap-6 rounded-lg p-4 border-[1px] border-opacity-30 border-gray-400 m-2 items-center justify-between"
    >
      <div className="flex flex-row gap-6">
        <div className="img object-cover">
          <img src={item.images[0]} alt={item.name} />
        </div>
        <div className="info flex flex-col gap-1 items-start justify-between">
          <span className="font-semibold mt-1">{item.name}</span>
          <span className="text-gray-500">Quantity: {item.quantity}</span>
          <span className="text-gray-500">Unit: {item.selectedUnit}</span>
          <div className="price-add-btn max-w-[100%] flex flex-row items-center gap-5">
            <span className="text-green-600">{`${currency}${item.price.toFixed(
              2
            )}`}</span>{" "}
          </div>
        </div>
      </div>
      <div className="dynamic-button">
        <DynamicButton item={item} />{" "}
      </div>
    </div>
  ));
};

export default CartItemDisplay;