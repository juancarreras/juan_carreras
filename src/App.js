import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

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
     <ItemDetailContainer />
   </div>
  );
}

export default App;
