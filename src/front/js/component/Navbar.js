import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary" id="navbarPet">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavDropdown">

          <div className="inicioHome" id="inicioHome">
            <a href="/#inicio" className="navbar-brand">
              Inicio
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#sobre">
                Sobre Pet Friends
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#servicios">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
            <li className="nav-item dropdown" id="nav-item-dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Iniciar sesión
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/iniciosesion">
                    Iniciar sesión
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/registro">
                    Registrarme
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      
    </nav>
  );
};
