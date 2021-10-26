import * as React from "react";

function ItemCount({ count, btnSubs, btnAdd, comprar }) {

  return (
    <div className="container item-count">
      <div className="row text-center ml-4">
        <div className="col d-flex align-items-center">
          <a onClick={() => btnSubs()} className="btn btn-dark btn-count ml-4"><i className="fas fa-minus"></i></a>
        </div>
        <div className="col d-flex align-items-center">
          <p className="count"><b>{count}</b></p>
        </div>
        <div className="col d-flex align-items-center">
          <a onClick={() => btnAdd()} className="btn btn-dark btn-count"><i className="fas fa-plus"></i></a>
        </div>
      </div>
    <button className="add-cart text-center" type="button" onClick={() => comprar()}>COMPRAR</button>
    </div>
  );
}
export default ItemCount;
