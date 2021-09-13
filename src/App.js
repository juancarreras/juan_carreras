import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

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
    </div>
  );
}

export default App;
