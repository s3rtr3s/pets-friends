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
          <header className={styles.heading}> Regístrate </header>
          <div className="row ">
            <div className="col-sm-12 d-flex flex-column gap-2 justify-content-center align-items-center p-0">
                  <input
                    className={styles.fname}
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Nombre"
                    autoComplete="off"
                  />
            
                  <input
                    className={styles.lname}
                    type="text"
                    name="lname"
                    id="lname"
                    placeholder="Apellidos"
                    autoComplete="off"
                  />
           
           
                  <input
                    className={styles.lciudad}
                    type="text"
                    name="lciudad"
                    id="lciudad"
                    placeholder="Ciudad"
                    autoComplete="off"
                  />
             
                  <input
                    className={styles.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                  />
               
                  <input
                    className={styles.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Contraseña"
                    autoComplete="off"
                  />
              
                <div className="btn btn-dark">Regístrate</div>
            </div></div>
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
