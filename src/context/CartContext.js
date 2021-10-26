import * as React from "react";
import "firebase/compat/firestore";

const CartContext = React.createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [subtotal, setSubtotal] = React.useState();
  const [total, setTotal] = React.useState();
  const [envio, setEnvio] = React.useState();

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

  const cartSummary = () => {
    let subtotal = 0;
    let envio = 0;

    cart.forEach((item) => {
      subtotal += (item.price * item.qty);
      envio = (parseFloat(subtotal * 0.15));
    });

    setSubtotal(subtotal);
    setEnvio(envio);
    setTotal(parseFloat(subtotal + envio));
  };


  const value = { cart, addItem, removeItem, clear, exist, getQuantity, cartSummary, subtotal, envio, total };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const UseCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("UseCart debe usarse desde adentro de un CartProvider");
  }
  return context;
};
