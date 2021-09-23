import {Link} from 'react-router-dom';
import ShoppingCart from "./CardWidget";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="">Mi Ecommerce</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to ={`/`} className="nav-link active text-right" aria-current="page">Inicio</Link>
              </li>
              <li className="nav-item ml-auto">
                <Link to= {`/ItemCount`} className="nav-link ml-auto">Contador</Link>
              </li>
              <li className="nav-item">
                <Link to={`/ItemDetailContainer`} className="nav-link">Productos</Link>
              </li>
            </ul>

            <form className="d-flex">
            <div> <ShoppingCart /></div>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
