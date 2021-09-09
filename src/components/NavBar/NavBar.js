import ShoppingCart from "./CardWidget";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="">MCDONALDS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-right" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item ml-auto">
                <a className="nav-link ml-auto" href="#">Hamburgesas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Helados</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Combos</a>
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
