import React from "react";
import "./nombre.css";
import Diseño from "../../../../../img/Diseño.png";

export const NombreInicio = () => {
  return (
    <div className="nombre container my-5">
      <img src={Diseño} alt="Diseño" id="Diseño" />
      <p className="title-home">Pet Friends</p>
      <p className="subtitle-home">Amigos de tus mascotas</p>
    </div>
  );
};
