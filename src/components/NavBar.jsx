import React from "react";
import logoHome from "../img/logoHome.png";
import { BrowserRouter, Link } from "react-router-dom";
import "../css/cssNav.css";
const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-navBar ">
        <div className="container-fluid space-around">
          <div>
          <img
            src={logoHome}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block"
          />
          TecnoCompras
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex css-otro" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <BrowserRouter>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mg-5">
                  <Link to="/inicio" className="nav-link">
                    Inicio
                  </Link>
                  <Link to="/productos" className="nav-link">
                    Productos
                  </Link>
                </ul>
              </BrowserRouter>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default navbar;
