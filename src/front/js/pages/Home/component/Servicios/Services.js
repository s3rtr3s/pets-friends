import React from "react";
import { useNavigate } from "react-router-dom";

const servicesList = [
  {
    title: "Paseo de mediodía",
    img: "https://images.unsplash.com/photo-1637441607612-43944d988e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    description: "Paseo por zonas cercanas a tu hogar",
    duration: "30 min",
  },
  {
    title: "Energía por una hora",
    img: "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    description: "Paseo para los mas traviesos",
    duration: "1 h",
  },
  {
    title: "Pijamada perruna",
    img: "https://images.unsplash.com/photo-1601758063541-d2f50b4aafb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1105&q=80",
    description: "Cuidado integral de tu mascota",
    duration: "8 h",
  },
  {
    title: "Servicios Personalizados",
    img: "https://images.unsplash.com/photo-1567644495368-82cb64d087f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    description:
      "Servicios creados por nuestros paseadores, con actividades exclusivas para tu mascota",
  },
];

export const Services = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/servicios");
  };

  return (
    <div className="container mt-4">
      {servicesList.map((service, i) => (
        <div key={i} className="col d-flex justify-content-center">
          <div className="card mb-3 bg-white">
            <div className="row g-0">
              <div className="col-md-8">
                <img
                  src={service.img}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <div className="card-body text-center">
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                  <p>{service.duration}</p>
                  <a
                    className="btn btn-dark rounded-pill px-3 text-white"
                    role="button"
                    onClick={handleClick}
                  >
                    Reserva ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
