import * as React from "react";
import Item from "../Item/Item";
import Card from "../Card/Card";
const ItemList = () => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
  
    React.useEffect(() => {
      const url = <Item />;
  
      setLoading(true);
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw response;
          }
        })
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);
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
            <Card
              key={item.id}
              name={item.title}
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

export default ItemList;
