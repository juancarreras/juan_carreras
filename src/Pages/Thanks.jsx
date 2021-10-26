import * as React from "react";
import { Link } from "react-router-dom";

const Thanks = () =>{
return(
<div class="container gracias-p">
    <div class="jumbotron text-center">
    <h1 class="display-3">Muchas gracias por su pedido!</h1>
    <p class="lead">En breves le llegará un email para coordinar zona de entrega y pago.</p>
    <hr/>
    <p class="lead">
      <Link to={'/'}>
      <a class="btn btn-primary btn-sm" role="button">Volver a ecommerce</a>
      </Link>
    </p>
  </div>
</div>
)
}

export default Thanks;
