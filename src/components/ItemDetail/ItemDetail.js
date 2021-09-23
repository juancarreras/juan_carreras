import './ItemDetail';


const ItemDetail = ({ title, description, image, price }) => {
  return (
    <div className="cardContainer">
      <h3 className="cardTitle">{title}</h3>
      <div>
        <img src={image} alt={title} className="cardImg" />
      </div>
      <p className="cardDescription">{description}</p>
      <p className="cardPrice">$ {price}</p>
    </div>
  );
};

export default ItemDetail;
