import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from "./components/ItemList/ItemList"

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
      </header>
      <main>
      <ItemListContainer hola="USUARI@"/>
      </main>
      <ItemCount hola="usuari@"/>
      <ItemList />
    </div>
  );
}

export default App;
