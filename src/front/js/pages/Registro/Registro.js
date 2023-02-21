import React, {useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import styles from "./registro.module.css";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");


  const navigate = useNavigate();
        console.log(email, password, name, surname);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": email,
        "password": password,
        "name": name,
        "surname": surname
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        };

    fetch("https://3001-s3rtr3s-petsfriends-hlkkemt25ya.ws-eu87.gitpod.io/api/clients", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.access_token) {
                localStorage.setItem("token", result.access_token);
                navigate("/NombreInicio");
            } else {
                store.message = result.message;
                navigate("/Registro");
            }})
        .catch(error => console.log('error', error));
  
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
                  <select>
                    <option>Selecciona una opción</option>
                    <option value="43.37012643,-8.39114853">La Coruña</option>
                    <option value="38.4786378049,-0.568699068376">Alicante</option>
                    <option value="38.8254086192, -1.98037326935">Albacete</option>
                    <option value="37.1960852121, -2.3448128003">Almería</option>
                    <option value="42.8351264353, -2.72060346921">Álava</option>
                    <option value="43.292357861, -5.99350932547">Asturias</option>
                    <option value="40.5710367492, -4.94553505619">Ávila</option>
                    <option value="38.7097707381, -6.14158521981">Badajoz</option>
                    <option value="41.7310008895, 1.98405401772">Barcelona</option>
                    <option value="43.2376797057, -2.85260007926">Vizcaya</option>
                    <option value="42.3687127267, -3.58574245567">Burgos</option>
                    <option value="39.7118899607, -6.16082194997">Cáceres</option>
                    <option value="36.5538729195, -5.7604183752">Cádiz</option>
                    <option value="43.1975220484, -4.03002122038">Cantabria</option>
                    <option value="40.2413705852, -0.146777086937">Castellón</option>
                    <option value="35.8934069863, -5.34342403891">Ceuta</option>
                    <option value="38.9256128254, -3.82809764894">Ciudad Real</option>
                    <option value="37.9926944409, -4.80926161095">Córdoba</option>
                    <option value="39.8960496846, -2.19567153274">Cuenca</option>
                    <option value="43.1437759117, -2.19417845709">Guipúzcoa</option>
                    <option value="42.1280117119, 2.6735559327">Gerona</option>
                    <option value="37.3125169672, -3.26788107732">Granada</option>
                    <option value="40.8134495654, -2.62368878371">Guadalajara</option>
                    <option value="37.5771794021, -6.82930221031">Huelva</option>
                    <option value="42.2030557371, -0.0728865943582">Huesca</option>
                    <option value="39.5751889864, 2.91229172079">Islas Baleares</option>
                    <option value="38.0165122783, -3.44169215171">Jaén</option>
                    <option value="42.2748706958, -2.5170441194">La Rioja</option>
                    <option value="28.3624928216, -14.5509933924">Las Palmas</option>
                    <option value="42.6199552439, -5.83988102629">León</option>
                    <option value="42.0439686698, 1.04798206104">Lleida</option>
                    <option value="43.011764, -7.44638404764">Lugo</option>
                    <option value="40.4950873744, -3.71704619215">Madrid</option>
                    <option value="36.8138591651, -4.72586195603">Málaga</option>
                    <option value="35.2908279949, -2.95053552337">Melilla</option>
                    <option value="	38.0023681653, -1.48575629332">Murcia</option>
                    <option value="42.6672011509, -1.64611414443">Navarra</option>
                    <option value="42.1964503002, -7.59259790937">Orense</option>
                    <option value="42.3718338546, -4.53585717538">Palencia</option>
                    <option value="42.435764706, -8.46106294738">Pontevedra</option>
                    <option value="40.8049892162, -6.06541224773">Salamanca</option>
                    <option value="28.3125567678, -17.017856743">Santa Cruz de Tenerife</option>
                    <option value="41.1710254065, -4.05415057783">Segovia</option>
                    <option value="37.4356699135, -5.68277303032">Sevilla</option>
                    <option value="41.6207742504, -2.58874304739">Soria</option>
                    <option value="41.0876143957, 0.818127863314">Tarragona</option>
                    <option value="40.6612619615, -0.815532258446">Teruel</option>
                    <option value="39.7937341614, -4.14815562595">Toledo</option>
                    <option value="39.3702562375, -0.800789615081">Valencia</option>
                    <option value="41.6341260695, -4.84719141141">Valladolid</option>
                    <option value="41.7271743961, -5.98053925522">Zamora</option>
                    <option value="41.6203648019, -1.06449678144">Zaragoza</option>
                  </select>
                </div>

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
