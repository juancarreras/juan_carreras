import * as React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
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
    </Switch>
  </BrowserRouter>

  );
}

export default App;
