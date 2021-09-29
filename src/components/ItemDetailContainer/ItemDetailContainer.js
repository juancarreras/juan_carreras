import * as React from "react";
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {



    setLoading(true);
    getProductos()
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const getProductos = () => {
    const url = 'https://fakestoreapi.com/products?limit=14';
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(url)
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw response;
              }
            })
        )
      },)
    })
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {loading && <p>Cargando...</p>}
        {error && (
          <p>
            Ha habido un error: {error.status} {error.statusText}
          </p>
        )}

        {data?.map((item) => {
          return (
            <ItemDetail
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemDetailContainer;
