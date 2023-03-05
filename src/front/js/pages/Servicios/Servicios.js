import React, { useContext, useEffect, useState } from "react";
import { ServicesNav } from "./component/ServicesNav";
import { Context } from "../../store/appContext";

import "./servicios.css";
import { useNavigate, useParams } from "react-router-dom";

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
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1567644495368-82cb64d087f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Energia por una hora",
    price: 15,
    description: "Paseo de una hora",
    carer_id: 1,
    city: "Alicante",
  },
];

export const Servicios = () => {
  const { id } = useParams();
  const [city, setCity] = useState("");
  const [serviceType, setServiceType] = useState(id);
  const [url, setUrl] = useState("");
  const [servicesList, setServicesList] = useState([]);
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const getServices = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setServicesList(data.results);
    console.log(data.results);
  };

  const buildUrl = () => {
    let baseUrl = `${store.BACKEND_URL}api/services`;
    if (serviceType !== "" && city !== "") {
      baseUrl += "?service_type=" + serviceType + "&city=" + city;
    } else if (serviceType !== "" && city === "") {
      baseUrl += "?service_type=" + serviceType;
    } else if (serviceType === "" && city !== "") {
      baseUrl += "?city=" + city;
    }
    setUrl(baseUrl);
  };

  useEffect(() => {
    buildUrl();
  }, [serviceType, city]);

  useEffect(() => {
    getServices(url);
  }, [url]);

  const handleClick = (id) => {
    navigate(`/carer/${id}`);
  };

  return (
    <div className="padre">
      <nav className="bg-dark navbar-dark">
        <div className="container">
          <a href="" className="navbar-brand">
            <i className="fas fa-tree mr-2"></i>SERVICIOS
          </a>
        </div>
      </nav>
      <section id="header" className="jumbotron text-center">
        <h3 className="display-3">Servicios</h3>
        <h5 className="aaa">Encuentra al cuidador que más te guste</h5>
        <ServicesNav setCity={setCity} setServiceType={setServiceType} />
      </section>
      <section id="gallery">
        <div className="d-flex flex-wrap gap-5 mx-5 justify-content-center">
          {servicesList?.map((servicio) => (
            <div key={servicio?.id} className="card" style={{ width: "28rem" }}>
              <img src={servicio?.img} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{servicio?.title}</h5>
                <p className="card-text">{servicio?.description}</p>
                <a
                  href=""
                  className="btn btn-outline-warning btn-sm"
                  onClick={() => handleClick(servicio?.carer_id)}
                >
                  Contactar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
