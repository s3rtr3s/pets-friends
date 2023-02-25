import React, {useEffect,useState} from "react";
import { Carousel } from '@sefailyasoz/react-carousel';
import "./carrusel.css";

export const Carrusel = () =>
{
  const itemsInfo=[
    {
      url: "https://www.vetcomunicaciones.com.ar/uploadsfotos/animales_domesticos.jpg",
      title:"Club Social",
      caption: "Organizamos reuniones y pijamadas nocturnas",
      interval: "3000",
      height: "400"
    },
    {
      url: "https://cdn.pixabay.com/photo/2019/11/07/08/40/puppy-4608266_1280.jpg",
      title:"Paseos",
      caption: "Programa con el cuidador la duración del mejor momento del dia para tu mascota ",
      interval: "3000",
      height: "400"
    },
    {
      url: "https://www.dogalize.com/wp-content/uploads/2017/06/rabbit-1422882_640.jpg",
      title:"Adiestramiento",
      caption: "Enseña a tu macota con ayuda de un cuidador especializado",
      interval: "3000",
      height: "400"
    },
    {
      url: "//cdn.pixabay.com/photo/2021/01/25/01/35/flying-dog-5946987_1280.jpg",
      title:"Busca",
      caption: "Encuentra entre nuestros cuidadores el mejor servicio especializado para tu mascota",
      interval: "3000",
      height: "400"
    }
  ];
  
  return (
    <div  id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner col-11" id="carrouselId">
            <div className="carousel-item active" data-bs-interval="3000">
                <img src="https://www.vetcomunicaciones.com.ar/uploadsfotos/animales_domesticos.jpg" 
                className="d-block w-100"  height="500" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h4>"Organizamos reuniones y pijamadas nocturnas"</h4>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
                <img src="https://cdn.pixabay.com/photo/2019/11/07/08/40/puppy-4608266_1280.jpg" 
                className="d-block w-100" height="500" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h4>"Programa con el cuidador la duración del mejor momento del dia para tu mascota"</h4>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
                <img src="https://www.dogalize.com/wp-content/uploads/2017/06/rabbit-1422882_640.jpg" 
                className="d-block w-100" height="500" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h4>"Enseña a tu macota con ayuda de un cuidador especializado"</h4>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
                <img src="//cdn.pixabay.com/photo/2021/01/25/01/35/flying-dog-5946987_1280.jpg" 
                className="d-block w-100" height="500" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h4>"Encuentra entre nuestros cuidadores el mejor servicio especializado para tu mascota"</h4>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  );
}

