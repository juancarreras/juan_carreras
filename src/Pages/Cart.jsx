import * as React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart)  
  return (
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        <h1>Cart</h1>
      </div>
    );
  };
  export default Cart;
