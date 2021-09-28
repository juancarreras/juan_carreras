import * as React from "react";
import { Link } from "react-router-dom";

function ItemCount({ count, btnSubs, btnAdd, comprar }) {

  return (
    <div className="container item-count">
      <div className="row">
        <div className="col d-flex align-items-center">
          <a onClick={() => btnSubs()} className="btn btn-danger btn-count"><i className="fas fa-minus"></i></a>
        </div>
        <div className="col d-flex align-items-center">
          <p className="count"><b>{count}</b></p>
        </div>
        <div className="col d-flex align-items-center">
          <a onClick={() => btnAdd()} className="btn btn-success btn-count"><i className="fas fa-plus"></i></a>
        </div>
      </div>
    <Link to={`/cart`}>
    <button className="btn btn-succes" type="button" onClick={() => comprar()}>COMPRAR</button>
    </Link>
    </div>
  );
}
export default ItemCount;
