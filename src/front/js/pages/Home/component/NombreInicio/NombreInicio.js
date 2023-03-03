import React from "react";
import "./nombre.css";
import Diseño from "../../../../../img/Diseño.png";

export const NombreInicio = () => {
  return (
    <div className="text-center nombre">
      <img src={Diseño} alt="Diseño" id="Diseño" />
      <p>Pet Friends</p>
      <h5>Amigos de tus mascotas</h5>
      <div className="col-sm-12">
      <a className="btn btn-dark" id="boton-pasear" href="/#servicios">
      ¡Vamos a pasear!
      </a>
        
      </div>
    </div>
  );
};
