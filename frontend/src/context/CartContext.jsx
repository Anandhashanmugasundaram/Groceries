import { createContext, useState, useContext } from "react";
import { toast, Flip } from "react-toastify";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    if (!item.selectedUnit) {
      item.selectedUnit = item.unit[0];
      toast.info("Selected Default Unit", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
      });
    }
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (id, selectedUnit) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (cartItem) =>
          cartItem.id === id && cartItem.selectedUnit === selectedUnit
      );

      if (itemIndex === -1) return prevItems; // If item not found, return the cart as is

      const updatedItems = [...prevItems];
      updatedItems.splice(itemIndex, 1); // Remove the item at the found index
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
