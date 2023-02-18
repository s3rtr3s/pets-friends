import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary text-center">
            <div className="container-fluid" id="container">
                <div className="inicioHome" id="inicioHome">
                    <Link to="/" className="navbar-brand">Inicio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Sobre Pet Friends</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <li className="nav-item dropdown" id="nav-item-dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Iniciar Sesión
                                </a>
                            <ul className="dropdown-menu">
                                
                                
                                <li><Link className="dropdown-item" to="/iniciosesion">Iniciar sesión</Link></li>
                                
                                
                                <li><Link className="dropdown-item" to="/registro">Registrarme</Link></li>
                                
                                <li><a className="dropdown-item" href="#">Mi perfil</a></li>
                                <li><a className="dropdown-item" href="#">Mis revervas</a></li>
                                <li><a className="dropdown-item" href="#">Mensajes</a></li>
                                <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
	);
};
