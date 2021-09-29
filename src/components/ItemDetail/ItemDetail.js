
  
import * as React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";



const ItemDetail = ({ title, description, image, price }) => {

  const { addItem } = useCart();
  const [count, setCount] = React.useState(0);

  const btnAdd = () => {
    setCount((count) => count + 1);

  };
  const btnSubs = () => {
    setCount((count) => count - 1);
  };

  const addToCart = () => {
    const dataToSend = {
      title: title,
      description: description,
      qty: count,
      price: price
    }
    
    addItem(dataToSend);
  };


  return (
    <div className="cardContainer col-lg-4">
      <h3 className="cardTitle">{title}</h3>
      <div  className="cardImgContainer">
        <img src={image} alt={title} className="cardImg" />
      </div>
      <p className="cardDescription">{description}</p>
      <p className="cardPrice">$ {price}</p>
      <ItemCount count={count}
      btnSubs={btnSubs}
      btnAdd={btnAdd}
      comprar={addToCart}
      />
    </div>
  );
};

export default ItemDetail;
