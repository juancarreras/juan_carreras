import React, { useState } from 'react';

function ItemCount() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
        <h3>Contador de clicks</h3>
        <button onClick={() => setCount(count - 1)} className="btn btn-danger">-</button>
        <button onClick={() => setCount(count + 1)} className="btn btn-success">+</button>
      <p>Clickeaste {count} veces</p>
    </div>
  );
}
export default ItemCount;

