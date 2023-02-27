import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import styles from "./registro.module.css";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [ciudades, setCiudades] = useState(null);


  const [roles, setRoles] = useState("");


  const navigate = useNavigate();

  const registrar = () => {
    const ciudad = ciudades.value;
    const longitude =
      ciudades.options[ciudades.selectedIndex].getAttribute("data-longitud");
    const latitude =
      ciudades.options[ciudades.selectedIndex].getAttribute("data-latitud");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      password: password,
      name: name,
      surname: surname,
      ciudad: ciudad,
      longitude: longitude,
      latitude: latitude,

    

      roles: roles,

    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(`${store.BACKEND_URL}api/clients`, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          navigate("/iniciosesion");
          return response.json();
        } else {
          alert("Ha ocurrido un error");
        }
      })

      .catch((error) => alert("Ha ocurrido un error", error));
  };

  return (
    <div className="mt-5">
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
                onChange={(event) => setName(event.target.value)}
              />

              <input
                className={styles.lname}
                type="text"
                name="lname"
                id="lname"
                placeholder="Apellidos"
                autoComplete="off"
                onChange={(event) => setSurname(event.target.value)}
              />

              <input
                className={styles.email}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                onChange={(event) => setEmail(event.target.value)}
              />

              <input
                className={styles.password}
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                autoComplete="off"
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className="desplegable">
                <select
                  name="roles"
                  onChange={(event) => setRoles(event.target.value)}
                >
                  <option>-- Selecciona un rol --</option>
                  <option value="Owner">Dueño de mascota</option>
                  <option value="Carer">Cuidador</option>
                </select>
              </div>

              <div className="desplegable">
                <select
                  id="provincia"
                  name="provincia"
                  onChange={(event) => setCiudades(event.target)}
                >
                  <option value="">-- Selecciona una provincia --</option>
                  <option
                    value="Álava"
                    data-latitud="42.847831"
                    data-longitud="-2.672338"
                  >
                    Álava
                  </option>
                  <option
                    value="Albacete"
                    data-latitud="38.997777"
                    data-longitud="-1.860737"
                  >
                    Albacete
                  </option>
                  <option
                    value="Alicante"
                    data-latitud="38.345487"
                    data-longitud="-0.483166"
                  >
                    Alicante
                  </option>
                  <option
                    value="Almería"
                    data-latitud="36.834047"
                    data-longitud="-2.463713"
                  >
                    Almería
                  </option>
                  <option
                    value="Asturias"
                    data-latitud="43.361914"
                    data-longitud="-5.849389"
                  >
                    Asturias
                  </option>
                  <option
                    value="Ávila"
                    data-latitud="40.656265"
                    data-longitud="-4.700299"
                  >
                    Ávila
                  </option>
                  <option
                    value="Badajoz"
                    data-latitud="38.879449"
                    data-longitud="-6.970657"
                  >
                    Badajoz
                  </option>
                  <option
                    value="Barcelona"
                    data-latitud="41.394768"
                    data-longitud="2.078727"
                  >
                    Barcelona
                  </option>
                  <option
                    value="Burgos"
                    data-latitud="42.340873"
                    data-longitud="-3.699731"
                  >
                    Burgos
                  </option>
                  <option
                    value="Cáceres"
                    data-latitud="39.476048"
                    data-longitud="-6.372197"
                  >
                    Cáceres
                  </option>
                  <option
                    value="Cádiz"
                    data-latitud="36.524905"
                    data-longitud="-6.288858"
                  >
                    Cádiz
                  </option>
                  <option
                    value="Cantabria"
                    data-latitud="43.182839"
                    data-longitud="-3.987842"
                  >
                    Cantabria
                  </option>
                  <option
                    value="Castellón"
                    data-latitud="39.986068"
                    data-longitud="-0.037647"
                  >
                    Castellón
                  </option>
                  <option
                    value="Ciudad Real"
                    data-latitud="38.986545"
                    data-longitud="-3.929977"
                  >
                    Ciudad Real
                  </option>
                  <option
                    value="Córdoba"
                    data-latitud="37.891871"
                    data-longitud="-4.819501"
                  >
                    Córdoba
                  </option>
                  <option
                    value="Cuenca"
                    data-latitud="40.071268"
                    data-longitud="-2.134134"
                  >
                    Cuenca
                  </option>
                  <option
                    value="Girona"
                    data-latitud="41.981468"
                    data-longitud="2.823611"
                  >
                    Girona
                  </option>
                  <option
                    value="Granada"
                    data-latitud="37.177336"
                    data-longitud="-3.598557"
                  >
                    Granada
                  </option>
                  <option
                    value="Guadalajara"
                    data-latitud="40.629396"
                    data-longitud="-3.166228"
                  >
                    Guadalajara
                  </option>
                  <option
                    value="Guipúzcoa"
                    data-latitud="43.158961"
                    data-longitud="-2.330748"
                  >
                    Guipúzcoa
                  </option>
                </select>
              </div><br/>
                <div className="d-flex justify-content-start align-items-center">
                  <div className="form-check col-7">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={(event) => setRoles(event.target.value)}/>
                    <label className="form-check-label" for="flexRadioDefault1">
                      ¿Eres cuidador?
                    </label>
                    
                  </div>
                  <div class="form-check col-7">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked onChange={(event) => setRoles(event.target.value)}/>
                    <label className="form-check-label" for="flexRadioDefault2">
                      ¿Eres dueño?
                    </label>
                  </div>
                </div>
                <br/>
                <div className="btn btn-dark rounded-pill px-3 text-white" onClick={registrar}>
                  Regístrate
                </div>
              </div>



              <div
                className="btn btn-dark rounded-pill px-3 text-white"
                onClick={registrar}
              >
                Regístrate
              </div>
            </div>

          </div>
        </div>
        <br/>
        <p className="text-center">
          <Link to="/iniciosesion" className={styles.link}>
            ¿Ya tienes una cuenta? Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
};
