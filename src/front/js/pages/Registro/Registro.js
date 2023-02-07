import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import styles from "./registro.module.css";

export const Registro = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div className="card-3d-wrap mx-auto">
        <div className="card-3d-wrapper">
          <header className={styles.heading}> REGÍSTRATE </header>
          <div className="row ">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                  <input
                    className={styles.fname}
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Nombre"
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
                    className={styles.lname}
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Apellidos"
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
                    className={styles.lciudad}
                    type="text"
                    name="lciudad"
                    id="lciudad"
                    placeholder="Ciudad"
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
            <div classNAme="col-sm-12">
                <div className="btn btn-dark">Regístrate</div>
              </div>
            </div>
          </div>
          <p className="text-center">
            <Link to="/iniciosesion" className={styles.link}>
              ¿Ya tienes una cuenta? Inicia Sesión
            </Link>
          </p>
        </div>
      </div>
    
  );
};
