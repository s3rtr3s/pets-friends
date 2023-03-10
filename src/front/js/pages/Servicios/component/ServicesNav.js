import React from "react";
import "./servicesNav.css";

export const ServicesNav = ({ setCity, setServiceType }) => {
  const hanldeCityClick = (city) => {
    setCity(city);
  };
  const handleServiceClick = (serviceType) => {
    setServiceType(serviceType);
  };

  return (
    <div className="p-4 mb-5 rounded">
      <div className="d-flex justify-content-center gap-5">
        <div className="dropdown">
          <button
            className="bCiudad btn btn-dark text-white px-5 rounded-pill dropdown-toggle fs-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Ciudad
          </button>
          <ul className="dropdown-menu">
            <li onClick={() => hanldeCityClick("Álava")}>
              <a className="dropdown-item">Álava</a>
            </li>
            <li onClick={() => hanldeCityClick("Albacete")}>
              <a className="dropdown-item">Albacete</a>
            </li>
            <li onClick={() => hanldeCityClick("Alicante")}>
              <a className="dropdown-item">Alicante</a>
            </li>
            <li onClick={() => hanldeCityClick("Almería")}>
              <a className="dropdown-item">Almería</a>
            </li>
            <li onClick={() => hanldeCityClick("Asturias")}>
              <a className="dropdown-item">Asturias</a>
            </li>
            <li onClick={() => hanldeCityClick("Ávila")}>
              <a className="dropdown-item">Ávila</a>
            </li>
            <li onClick={() => hanldeCityClick("Badajoz")}>
              <a className="dropdown-item">Badajoz</a>
            </li>
            <li onClick={() => hanldeCityClick("Barcelona")}>
              <a className="dropdown-item">Barcelona</a>
            </li>
            <li onClick={() => hanldeCityClick("Burgos")}>
              <a className="dropdown-item">Burgos</a>
            </li>
            <li onClick={() => hanldeCityClick("Cáceres")}>
              <a className="dropdown-item">Cáceres</a>
            </li>
            <li onClick={() => hanldeCityClick("Cádiz")}>
              <a className="dropdown-item">Cádiz</a>
            </li>
            <li onClick={() => hanldeCityClick("Cantabria")}>
              <a className="dropdown-item">Cantabria</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="bCiudad btn btn-dark text-white px-5 rounded-pill dropdown-toggle fs-4"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Servicio
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => handleServiceClick(1)}>
              Paseos de 30 min
            </li>
            <li className="dropdown-item" onClick={() => handleServiceClick(2)}>
              Paseos de 1 h
            </li>
            <li className="dropdown-item" onClick={() => handleServiceClick(3)}>
              Pijamadas
            </li>
            <li className="dropdown-item" onClick={() => handleServiceClick(4)}>
              Personalizados
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
