import './ItemDetail';
import * as React from "react";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({ title, description, image, price }) => {

  const [count, setCount] = React.useState(0);
  const [cantAComprar, setCantAComprar] = React.useState(0);

  const btnAdd = () => {
    setCount((count) => count + 1);
    console.log(count);
  };
  const btnSubs = () => {
    setCount((count) => count - 1);
  };

  const comprar = () => {
    const dataToSend = {
      title: title,
      description: description,
      qty: count,
      price: price
    }
    console.log(dataToSend);
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
      comprar={comprar}
      />
    </div>
  );
};
export default ItemDetail;
