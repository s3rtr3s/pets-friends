import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import styles from "./iniciosesion.module.css";

export const InicioSesion = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email,
      "password": password,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    fetch(`${store.BACKEND_URL}api/login`, requestOptions)
    .then(response => 
      {
        if (response.status===200) {
        return response.json()}else{
          alert("Ha ocurrido un error")
        }})
    .then(result => {
      navigate(`/dashboard/${result.client_info.id}`)
    })

    .catch(error => alert("Ha ocurrido un error", error));
  }


  return (
    <div className="text-center">
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
                    autoComplete="off"
                    onChange={(event) => setEmail(event.target.value)}
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
                    autoComplete="off"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <br/>
                  <br/>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="btn btn-dark rounded-pill text-white px-3"
                              onClick={login}>Iniciar sesión
              </div>
            </div>
          </div>
          <p className="text-center my-3">
            <Link to="/registro" className={styles.link}>
              ¿No tienes una cuenta? Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
