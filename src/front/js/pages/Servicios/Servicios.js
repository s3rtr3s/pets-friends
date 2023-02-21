import React from "react";

const listaServicios = [
  {
    id: 1,
    title: "Energia por una hora",
    price: 15,
    description: "Paseo de una hora",
    carer_id: 1,
  },
];

export const Servicios = () => {
  return (
    <div className="container mt-5 pt-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {listaServicios.map((servicio) => (
          <div key={servicio.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://picsum.photos/200/300"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{servicio.title}</h5>
                    <span className="text-primary">${servicio.price}</span>
                  </div>
                  <p className="card-text">{servicio.description}</p>
                  <p className="card-text">
                    <button type="button" className="btn btn-dark">
                      Contactar
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
