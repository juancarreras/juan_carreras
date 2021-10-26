import {Link} from 'react-router-dom';
import ShoppingCart from "./CardWidget";

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="">Electrodomestika</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to ={`/`} className="nav-link active text-right" aria-current="page">Inicio</Link>
            </li>
            <li className="nav-item ml-auto">
              <Link to= {`/ItemCount`} className="nav-link ml-auto">Contador</Link>
            </li>
            <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Productos
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li className="nav-item">
              <Link to ={`/Bazar`} className="nav-link  text-right" aria-current="page">Bazar</Link>
            </li>
            <li className="nav-item">
              <Link to ={`/Electrodomesticos`} className="nav-link  text-right" aria-current="page">Electrodomesticos</Link>
            </li>
            <li className="nav-item">
              <Link to ={`/Tecnologia`} className="nav-link text-right" aria-current="page">Tecnología</Link>
            </li>
          <li><hr class="dropdown-divider" /></li>
          <li className="nav-item">
              <Link to ={`/ItemDetailContainer`} className="nav-link  text-right" aria-current="page">Todos los productos</Link>
            </li>
        </ul>
      </li>
          </ul>

          <form className="d-flex">
          <Link className="nav-link" to={`/cart`}>
          <div> <ShoppingCart /></div>
          </Link>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
        </div>
      </div>
    </nav>
    );
  }

export default Navbar;
