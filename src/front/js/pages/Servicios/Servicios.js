import React, { useEffect, useState } from "react";
import { ServicesNav } from "./component/ServicesNav";

import "./servicios.css";

const listaServicios = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1567644495368-82cb64d087f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Energia por una hora",
    price: 15,
    description: "Paseo de una hora",
    carer_id: 1,
    city: "Badajoz",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1567644495368-82cb64d087f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Energia por una hora",
    price: 15,
    description: "Paseo de una hora",
    carer_id: 1,
    city: "Badajoz",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1567644495368-82cb64d087f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Energia por una hora",
    price: 15,
    description: "Paseo de una hora",
    carer_id: 1,
    city: "Alicante",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1567644495368-82cb64d087f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Energia por una hora",
    price: 15,
    description: "Paseo de una hora",
    carer_id: 1,
    city: "Alicante",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1567644495368-82cb64d087f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Energia por una hora",
    price: 15,
    description: "Paseo de una hora",
    carer_id: 1,
    city: "Alicante",
  },
];


export const Servicios = () => {
  const [city, setCity] = useState("");
  const [servicesList, setServicesList] = useState([]);

  const getServices = async () => {
    const resp = await fetch("https://3001-s3rtr3s-petsfriends-ad95d8v6pp4.ws-eu88.gitpod.io/api/services")
    const data = await resp.json()
    console.log(data)
  };

  useEffect(() => {
    getServices()
  },[])

  return (
    <div className="container mt-5 pt-5">
      <ServicesNav setCity={setCity} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {listaServicios.filter(servicio => servicio.city === city).map((servicio) => (
          <div key={servicio.id} className="col">
            <div className="card">
              <img src={servicio.img} className="card-img-top"/>
              <div className="card-body text-center">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title ">{servicio.title}</h5>
                  <span className="text-warning">${servicio.price}</span>
                </div>
                <p className="card-text">{servicio.description}</p>
                <button className="btn btn-dark rounded-pill service-button">
                  Contratar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ServicesNav setCity={setCity} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {listaServicios.filter(servicio => servicio.city === city).map((servicio) => (
          <div key={servicio.id} className="col">
            <div className="card">
              <img src={servicio.img} className="card-img-top"/>
              <div className="card-body text-center">
                <div className="d-flex justify-content-between">
                  <h5 className="card-title ">{servicio.title}</h5>
                  <span className="text-warning">${servicio.price}</span>
                </div>
                <p className="card-text">{servicio.description}</p>
                <button className="btn btn-dark rounded-pill service-button">
                  Contratar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
