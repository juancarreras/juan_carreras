import Producto from "../src/components/ItemDetailContainer/ItemDetailContainer"

function ItemDetail({ prod }) {
 
    return (
        <div>
        {prod?.map(producto => {
            return(
                <div>
                <h3>{producto.title}</h3>
                <h6>Precio: ${producto.price}</h6>
                <p>{producto.description}</p>
                <img src={producto.image} style={{height:'200px'}, {width: '200px'}}/>
                </div>

            );
        })}
    </div>
  );
   
  }
  


  export default ItemDetail
