import * as React from "react";

const CartContext = React.createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const addItem = (item) => {
    if (!exist(item.id)) {
      setCart([...cart, item]);
    } else {
      cart.forEach((product, index) => {
        if (product.id === item.id) {
          cart[index].qty = item.qty;
          setCart([...cart]);
        }
      });
    }
  };

 
  const exist = (id) => {
    const isIqual = cart.find((item) => item.id === id);
    return isIqual === undefined ? false : true;
  };



  const removeItem = (id) => {
    const deleteProduct = cart.filter((item) => item.id !== id);
    setCart(deleteProduct);
  };

  const clear = () => {
    setCart([]);
  };


  const getQuantity = () => {
    let quantity = 0;
    cart.forEach((product) => {
      quantity += Number(product.quantity);
    });
    return quantity;
  };

  const value = { cart, addItem, removeItem, clear, exist, getQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse desde adentro de un CartProvider");
  }
  return context;
};
