import * as React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from "./Pages/Cart"
import { CartProvider } from "./context/CartContext";
import Thanks from "./Pages/Thanks";
import {getFirestore} from "./firebase"
import Bazar from "./Pages/Bazar";
import Electrodomesticos from "./Pages/Electrodomesticos";
import Tecnologia from "./Pages/Tecnologia";

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer name="Usuario" />
        </Route>
        <Route exact path="/itemcount">
          <ItemCount />
        </Route>
        <Route exact path="/itemdetailcontainer">
          <ItemDetailContainer />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/Thanks">
          <Thanks />
        </Route>
        <Route exact path="/Bazar">
          <Bazar />
        </Route>
        <Route exact path="/Electrodomesticos">
          <Electrodomesticos />
        </Route>
        <Route exact path="/Tecnologia">
          <Tecnologia />
        </Route>
      </Switch>
    </BrowserRouter>
  </CartProvider>
);
}

export default App;
