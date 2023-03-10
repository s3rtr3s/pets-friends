import React, { useEffect, useState } from "react";
import { Carousel } from "@sefailyasoz/react-carousel";
import pata from "../../../../../img/pata.png";
import pelota from "../../../../../img/pelota.png";
import hueso from "../../../../../img/hueso.png";
import "./carrusel.css";

export const Carrusel = () => {
  const itemsInfo = [
    {
      url: "https://www.vetcomunicaciones.com.ar/uploadsfotos/animales_domesticos.jpg",
      title: "Club Social",
      caption: "Organizamos reuniones y pijamadas nocturnas",
      interval: "3000",
      height: "400",
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/11/07/08/40/puppy-4608266_1280.jpg",
      title: "Paseos",
      caption:
        "Programa con el cuidador la duración del mejor momento del dia para tu mascota ",
      interval: "3000",
      height: "400",
    },
    {
      url: "https://www.dogalize.com/wp-content/uploads/2017/06/rabbit-1422882_640.jpg",
      title: "Adiestramiento",
      caption: "Enseña a tu macota con ayuda de un cuidador especializado",
      interval: "3000",
      height: "400",
    },
    {
      url: "//cdn.pixabay.com/photo/2021/01/25/01/35/flying-dog-5946987_1280.jpg",
      title: "Busca",
      caption:
        "Encuentra entre nuestros cuidadores el mejor servicio especializado para tu mascota",
      interval: "3000",
      height: "400",
    },
  ];

  return (
    <div
      id="carouselExampleControls"
      className="carousel-slide container d-flex p-5 mb-4"
      data-bs-ride="carousel"
    >
      <div className="col-6">
        <h2 className="carruselTitle fs-1 text-center fw-bold">Galería de Pet Friends</h2>
        <p className="textDescripcionCarrusel">
          ¿Tienes un gato, un pájaro, un conejo o un hamster que necesita ser
          cuidado? No hay ningún problema, en Pet Friends podrás encontrar
          cuidadores para todas tus mascotas.
        </p>
      </div>
      <div
        className="align-items-center carousel-inner col-6 justify-content-center"
        id="carrouselId"
      >
        <div className="carousel-item active" data-bs-interval="3000">
          <img
            src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="d-block w-100 rounded"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="https://images.unsplash.com/photo-1628071554664-0b8942cbd11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="d-block w-100 rounded"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="https://images.unsplash.com/photo-1589130674510-6dadfc8a1266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className="d-block w-100 rounded"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="https://images.unsplash.com/photo-1654338771169-5ba24d6db85e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            className="d-block w-100 rounded"
            alt="..."
          />
        </div>
      </div>

      <img className="pPataDos" src={pata} alt="pata" />
      <img className="pePelota" src={pelota} alt="pelota" id="pePelota" />
      <img className="pePelotaDos" src={pelota} alt="pelota" />
      <img className="hHueso" src={hueso} alt="hueso" />
      <img className="hHuesoDos" src={hueso} alt="hueso" id="hueso" />
      <img className="hHuesoTres" src={hueso} alt="hueso" />
      <img className="pPataTres" src={pata} alt="pata" />
      <div className="textoC"></div>
    </div>
  );
};
