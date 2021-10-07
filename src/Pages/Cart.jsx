import * as React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cart } = useCart();
  const { removeItem } = useCart();
  const { clear } = useCart();
  console.log(cart)
  const cartLenght = cart.length;
  let subtotal = 0;
  let envio = 0;
  let total = 0;





  return (
    <>
    {cartLenght === 0 && (
    <>
    <div className="container d-flex justify-content-around flex-column">
    <h2 className="mt-5 text-center">Su carrito está vacío!</h2>
    <div className="d-flex justify-content-around">
    <Link className="btn btn-block btn-secondary mt-5 w-25 " to={`/itemdetailcontainer`}>Agregar productos</Link>
    </div>
    </div>
    </>
    )}
    {cartLenght > 0 && (
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> </th>
                    <th scope="col">Producto</th>
                    <th scope="col">Disponibilidad</th>
                    <th scope="col" className="text-center" >Cantidad</th>
                    <th scope="col" className="text-right">Precio</th>
                    <th> </th>

                  </tr>
                </thead>
                <tbody id="resumenCarrito">

                  {cart?.map((item) => {
                    subtotal += (item.price * item.qty);
                    envio = parseFloat(subtotal * 0.15);
                  total = parseFloat(subtotal + envio);
                    return (
                      <tr>
                        <td><img src={item.img} style={{ height: 150, width: 150, }} /> </td>
                        <td>{item.title}</td>
                        <td>En stock</td>
                        <td className="text-right"><input className="form-control text-center" type="number" value={item.qty} min="0" name="price"></input></td>
                        <td className="text-right"> $<span name="price">{item.price}</span></td>
                        <td className="text-right"><button className="btn btn-sm btn-danger" onClick={() => { removeItem(item.id) }} ><i className="fa fa-trash"></i> </button> </td>
                      </tr>
                    )
                  })}
                  
                  <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Sub-Total</td>
                    <td className="text-right" id="subTotal">{subtotal}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Envío</td>
                    <td className="text-right" id="shipping">{envio}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td ><strong>Total</strong></td>
                    <td className="text-right" id="total" >{total}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button className="btn btn-danger" onClick={() => { clear() }}>Vaciar carrito</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col mb-2">
            <div className="row">
              <div className="col-sm-12  col-md-6">
                <a className="btn btn-block btn-secondary" href="index.html">Continuar Comprando</a>
              </div>
              <div className="col-sm-12 col-md-6 text-right">
                <a href="#" className="btn btn-lg btn-block btn-success text-uppercase">Finalizar Compra</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
    
  );
};
export default Cart;

