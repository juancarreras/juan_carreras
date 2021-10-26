
  
import * as React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";



const ItemDetail = ({ id,title, description, image, price }) => {

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
      id:id,
      title: title,
      description: description,
      qty: count,
      price: price,
      img:image
    }
    
    addItem(dataToSend);
  };


  return (
    <div class="card estilo-c">
      <a href="#">
        <div class="img-container">
          <img src={image} alt="producto 1"/>
        </div>
       </a>
      <div class="info-container">
        <h3>{title}</h3>
        <p className="cardDescription">{description}</p>
        <strong>$ {price}</strong>
        <ItemCount count={count}
      btnSubs={btnSubs}
      btnAdd={btnAdd}
      comprar={addToCart}
      />
      </div>
     
    </div>    
  );
};

export default ItemDetail;
