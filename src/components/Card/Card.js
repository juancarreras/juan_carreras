const Card = ({ title, description, image, comprar, price }) => {
    return (
      <div>
        <h3></h3>
        <div>
          <img src={image} alt={title} />
        </div>
        <p>{description}</p>
        <p>$ {price}</p>
      </div>
    );
  };


export default Card;
