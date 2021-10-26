import * as React from "react";
import { getFirestore } from "../firebase/";
import ItemDetail from "../components/ItemDetail/ItemDetail"


const Electrodomesticos = () => {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const db = getFirestore();
    const productCollection = db.collection("items");


    productCollection.get()
    .then((querySnapshot) => {
      if(querySnapshot.empty) {
        console.log("No hay productos")
      }else{
        setData(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      }
    })
    .catch(() => {});
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
            if (item.categoryId == "Electrodomesticos"){
          return (
            <ItemDetail
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
              />
          );
        }})}
      </div>
    </>
  );
};

export default Electrodomesticos;
