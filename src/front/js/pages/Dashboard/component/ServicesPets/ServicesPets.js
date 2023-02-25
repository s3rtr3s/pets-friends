import React from "react";
import "./servicespets.css"

const mascotas = [
    {
        id: 1,
        name: "milka",
        image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "soy una perrita adorable"
    },
    {
        id: 2,
        name: "milka",
        image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "soy una perrita adorable"
    },
    {
        id: 3,
        name: "milka",
        image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "soy una perrita adorable"
    },
    {
        id: 4,
        name: "milka",
        image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "soy una perrita adorable"
    },
]

export const ServicesPets = () => {
  return (
    <div className="dashboard-box container mt-4 mb-4 p-3 d-flex flex-column align-items-center bg-white">
      <p className="fs-4">Mis Mascotas / Mis Servicios</p>
      <div className="w-100">
        {mascotas.map((mascota) => (
            <div key={mascota.id} className="p-2 d-flex mb-2 pet-service-card col-12">
                <div className="img-container mr-2">
                    <img className="img-fluid" src={mascota.image} />
                </div>
                <div>
                    <p className="fs-4">{mascota.name}</p>
                    <p className="fs-6">{mascota.description}</p>
                </div>
            </div>
        ))}
        <div className="p-4 d-flex mb-2 pet-service-card col-12 justify-content-center">
            <i className="fa-solid fa-circle-plus fs-1"></i>
        </div> 
      </div>
    </div>
  );
};
