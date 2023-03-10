import React from "react";
import "./contact.css";
import pedro from "../../../../../img/pedro.jpg";
import manudos from "../../../../../img/manudos.jpg";
import irene from "../../../../../img/irene.jpg";

export const Contact = () => {
  return (
    <div className="contact container">
      <div className="letrero d-flex justify-content-center">
        <h1 className="fw-bold">Contacta con el equipo de PET FRIENDS</h1>
        <br />
      </div>
      <div className="h3 d-flex justify-content-center">
        <h3>info@petfriends.com</h3>
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="text-center">
          <img className="pedro" src={pedro} alt="imagen de los fundadores" />
          <p className="fs-4 group-names">Pedro Peña</p>
        </div>
        <div className="text-center">
          <img
            className="manudos"
            src={manudos}
            alt="imagen de los fundadores"
          />
          <p className="fs-4 group-names">Manuel Cabrera</p>
        </div>
        <div className="text-center">
          <img className="irene" src={irene} alt="imagen de los fundadores" />
          <p className="fs-4 group-names">Irene Quero</p>
        </div>
      </div>
      <div className="fotos d-flex justify-content-around"></div>
      <div className="names d-flex justify-content-around"></div>
    </div>
  );
};
