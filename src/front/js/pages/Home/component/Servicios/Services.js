import React from "react";
import { useNavigate } from "react-router-dom";
import "./services.css";

const servicesList = [
  {
    id: 1,
    title: "Paseo de mediodía",
    img: "https://images.unsplash.com/photo-1637441607612-43944d988e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    description: "Paseo por zonas cercanas a tu hogar",
    duration: "30 min",
  },
  {
    id: 2,
    title: "Energía por una hora",
    img: "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    description: "Paseo para los mas traviesos",
    duration: "1 h",
  },
  {
    id: 3,
    title: "Pijamada perruna",
    img: "https://images.unsplash.com/photo-1601758063541-d2f50b4aafb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1105&q=80",
    description: "Cuidado integral de tu mascota",
    duration: "8 h",
  },
  {
    id: 4,
    title: "Servicios Personalizados",
    img: "https://images.unsplash.com/photo-1567644495368-82cb64d087f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description:
      "Servicios creados por nuestros paseadores, con actividades exclusivas para tu mascota",
  },
];

export const Services = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/servicios/${id}`);
  };

  return (
    <div
      className="container mt-4 mb-3 bg-white p-5 services d-flex flex-column gap-3"
      style={{ borderRadius: "2vh" }}
    >
      {servicesList.map((service) => (
        <div key={service.id} className="home-service-card d-flex">
          <div className="col-8 p-0 rounded overflow-hidden m-3">
            <img src={service.img} className="w-100" />
          </div>
          <div className="w-100 d-flex flex-column align-items-center justify-content-center my-3 mr-3">
            <p className="fs-1 fw-bold home-service-card-title">{service.title}</p>
            <p className="fs-5 home-service-card-text text-center">{service.description}</p>
            <p
              onClick={() => handleClick(service.id)}
              className="home-service-card-link fw-bold fs-5 mt-5 p-3 rounded-pill"
            >RESERVA AHORA</p>
          </div>
        </div>
      ))}
    </div>
  );
};
