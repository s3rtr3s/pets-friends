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
    console.log(email, password)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": email,
      "password": password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    fetch("https://3001-s3rtr3s-petsfriends-sgmotwrxid7.ws-eu88.gitpod.io/api/login", requestOptions)
    .then(response => 
      {
        if (response.status===200) {
        return response.json()}else{
          alert("Ha ocurrido un error")
        }})
    .then(result => console.log(result))

    .catch(error => alert("Ha ocurrido un error", error));
  }


  return (
    <div className="text-center mt-5">
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
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="btn btn-dark" onClick={login}>Iniciar sesión</div>
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
