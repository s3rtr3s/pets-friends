import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../store/appContext";
import styles from "./iniciosesion.module.css";

export const InicioSesion = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div className="logodos">
       { /*<img src={logodos} alt="Logodos" /> AQUÍ ESTÁ EL LOGO*/} 
      </div>
      <div className="card-3d-wrap mx-auto">
        <div className="card-3d-wrapper">
          <header className={styles.heading}> Iniciar Sesión </header>
          <div className="row ">
            <div className="col-sm-12"></div>

            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                  <input
                    className={styles.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                  <input
                    className={styles.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="btn btn-dark ">Iniciar sesión</div>
            </div>
          </div>
          <p className="text-center">
            <Link to="/registro" className={styles.link}>
              ¿No tienes una cuenta? Regístrate
            </Link>
          </p>
          <p className="text-center">
            <a href="#1" className={styles.link2}>
              Recuperar contraseña
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
