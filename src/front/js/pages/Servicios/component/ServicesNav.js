import React from "react";

export const ServicesNav = ({ setCity }) => {
  const hanldeCityClick = (city) => {
    setCity(city);
  };

  return (
    <div className="bg-white p-4 mb-5 rounded">
      <div className="d-flex justify-content-evenly">
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
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
            <li onClick={() => hanldeCityClick("Castellón")}>
              <a className="dropdown-item">Castellón</a>
            </li>
            <li onClick={() => hanldeCityClick("Ciudad Real")}>
              <a className="dropdown-item">Ciudad Real</a>
            </li>
            <li onClick={() => hanldeCityClick("Córdoba")}>
              <a className="dropdown-item">Córdoba</a>
            </li>
            <li onClick={() => hanldeCityClick("Cuenca")}>
              <a className="dropdown-item">Cuenca</a>
            </li>
            <li onClick={() => hanldeCityClick("Girona")}>
              <a className="dropdown-item">Girona</a>
            </li>
            <li onClick={() => hanldeCityClick("Granada")}>
              <a className="dropdown-item">Granada</a>
            </li>
            <li onClick={() => hanldeCityClick("Guadalajara")}>
              <a className="dropdown-item">Guadalajara</a>
            </li>
            <li onClick={() => hanldeCityClick("Guipúzcoa")}>
              <a className="dropdown-item">Guipúzcoa</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
