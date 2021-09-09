import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import List from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
      </header>
      <main>
      <List hola="usuari@"/>
      </main>
    </div>
  );
}

export default App;
