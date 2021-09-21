import React, { useState } from 'react';

function ItemDetailContainer() {
    const [prod, setProd] = React.useState([]);

    React.useEffect(()=> {
        const url = 'https://fakestoreapi.com/products?limit=1';        
        fetch(url).then((response)=>{
            if (response.ok){
                return response.json();
            }else {
                throw response;
            }
        })
        .then((data) => setProd(data))
        .catch((error)=> console.log('Se rompio todo'));
    }, [])
    return(
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
    )

    
}

export default ItemDetailContainer;
