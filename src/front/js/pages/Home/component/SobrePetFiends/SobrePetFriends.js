import React from "react";
import "./sobre.css";
import { Link } from "react-router-dom";
import pata from "../../../../../img/pata.png";
import pelota from "../../../../../img/pelota.png";
import hueso from "../../../../../img/hueso.png";

export const SobrePetFriends = () => {
  return (
    <div className="SobrePetFriends container" id="sobrePetFriends">
      <img className="heroImg" src={pata} alt="pata" id="pata" />
      <img className="heroImg" src={pata} alt="pata" id="pataUno" />
      <img className="heroImg" src={pata} alt="pata" id="pataDos" />
      <img className="heroImg" src={pelota} alt="pelota" id="pelota" />
      <img className="heroImg" src={pelota} alt="pelota" id="pelotaDos" />
      <img className="heroImg" src={hueso} alt="hueso" id="hueso" />
      <div className="d-flex align-items-center justify-content-evenly w-100">
        <div id="texto">
          <p id="titulo" className="text-center fw-bold">
            Sobre Pet Friends
          </p>
          <p className="fs-6">
            ¿Necesitas una persona responsable y cuidadosa para cuidar de tus
            mascotas? ¡Estás en el lugar correcto!
          </p>
          <p className="fs-6">
            Pet Friends nació de tres amartes de los animales con necesidades
            como las tuyas! encontrar a un cuidador que mime y ame a nuestras
            mascotas como si fueran suyas.
          </p>
          <p className="fs-6">
            Ya sea que estés de vacaciones, viajando por negocios o simplemente
            no te gusta dejar a tu mascota en casa todo el día, déjala con
            alguien que realmente ame a los animales. Además de ofrecer atención
            especializada, te ofrecemos tranquilidad.
          </p>
        </div>
        <img
          className="heroImg"
          src="https://image.europafm.com/clipping/cmsimages01/2021/10/17/062EC2FA-A697-438D-A069-C2D152AB7A29/98.jpg?crop=1920,1080,x0,y102&width=1900&height=1069&optimize=high&format=webply"
        />
      </div>
    </div>
  );
};
