import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "./navbar.css";


export const Navbar = () => {
  const { store, actions} = useContext(Context);


  useEffect(() =>{
    actions.setClientInfo()
  },[])



  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbarPet">
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
              <a className="nav-link" href="/#carrusel">
                Galería
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contacto">
                Contacto
              </a>
            </li>
            <li className="nav-item dropdown" id="nav-item-dropdown">
            {
                  store.clientInfo ? (
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menú
              </a>):
               <a
               className="nav-link dropdown-toggle"
               href="#"
               role="button"
               data-bs-toggle="dropdown"
               aria-expanded="false"
             >
               Iniciar sesión
             </a>
              
            }
            
                {
                  store.clientInfo ? (
                    
                  <ul className="dropdown-menu">
                    
                   <li>
                      <Link className="dropdown-item" to="/dashboard">
                          Mi perfil
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mensajes
                      </a>
                    </li>
                    <li>
                    <Link className="dropdown-item" to="/" onClick={()=>actions.logout()}>
                        Cerrar sesión
                        </Link>
                    </li>
                    </ul>
                  ) : <ul className="dropdown-menu">
                    
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
                   </ul>  
                }
            </li>
          </ul>
        </div>
      
    </nav>
  );
 
};
