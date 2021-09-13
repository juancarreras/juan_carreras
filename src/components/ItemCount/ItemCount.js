import React, { useState } from 'react';

function ItemCount() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
        <h3>Contador de clicks</h3>
        <button onClick={() => setCount(count + 1)} class="btn btn-success">Apretar</button>
      <p>Clickeaste {count} veces</p>
    </div>
  );
}
export default ItemCount;

