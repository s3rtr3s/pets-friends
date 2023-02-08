import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary fixed">
            <div className="container-fluid">
                <div className={styles.inicio} id="inicio" nombre="inicio">
                    <a className="navbar-brand" href="#">Inicio</a>
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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Iniciar Sesión
                                </a>
                            <ul className="dropdown-menu">
                                
                                <Link to="/iniciosesion">
                                <li><a className="dropdown-item" href="#">Iniciar sesión</a></li>
                                </Link>
                                <Link to="/registro">
                                <li><a className="dropdown-item" href="#">Registrarme</a></li>
                                </Link>
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
