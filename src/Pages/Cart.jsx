import * as React from "react";
import { useCart } from "../context/CartContext";


const Cart = () => {
  const { cart } = useCart();
  const { removeItem } = useCart();
  const {clear} = useCart();

  console.log(cart)
  return (
    <>

      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        
      </div>
      {cart?.map((item) => {
      return(
       <div>
 <tr>
            <td><img src={item.img} style={{height: 150, width: 150,}}/> </td>
            <td>${item.title}</td>
            <td>En stock</td>
            <td>
                <div class="row">
                    <div class="col-2">
                   
                    </div>
                    <div class="col-8">
                    </div>
                    <div class="col-2">
                    
                    </div>
                </div>
            </td>
            <td class="text-right"><span name="price">{item.qty}</span></td>
            <td class="text-right"> $<span name="price">{item.price}</span></td>
            <td className="text-right"><button className="btn btn-sm btn-danger" onClick={() => { removeItem(item.id) }} ><i className="fa fa-trash"></i> </button> </td>
        </tr>
        <button className="btn btn-danger" onClick={()=>{clear()}}>Vaciar carrito</button>
       </div>
        
    )
        })}
      </>
    );
  };
export default Cart;

