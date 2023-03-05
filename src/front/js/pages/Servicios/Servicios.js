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
  const [city, setCity] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [url, setUrl] = useState("");
  const [servicesList, setServicesList] = useState([]);
  const { store } = useContext(Context);
  const { id } = useParams();
  const navigate = useNavigate();

  const getServices = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  };

  useEffect(() => {
    let urlBase = store.BACKEND_URL + "api/services";
    if (serviceType !== "" && city !== "") {
      urlBase += "?service_type=" + serviceType + "&city=" + city;
    } else if (serviceType !== "" && city === "") {
      urlBase += "?service_type=" + serviceType;
    } else if (serviceType === "" && city !== "") {
      urlBase += "?city=" + city;
    }
    setUrl(urlBase);
  }, [serviceType, city]);

  useEffect(() => {
    id && setServiceType(id);
    getServices();
  }, [url]);

  const handleClick = (id) => {
    navigate(`/carer/${id}`);
  };

  return (
    <div className="padre">
      <nav class="bg-dark navbar-dark">
            <div class="container">
              <a href="" class="navbar-brand"><i class="fas fa-tree mr-2"></i>SERVICIOS</a>
            </div>
      </nav>
            <section id="header" class="jumbotron text-center">
              <h3 class="display-3">Servicios</h3>
              <h5 class="aaa">Encuentra al cuidador que más te guste</h5>
              <ServicesNav setCity={setCity} setServiceType={setServiceType}/>
          </section>
          <section id="gallery">
            <div className="d-flex flex-wrap gap-5 mx-5 justify-content-center">
            {listaServicios.map((servicio) => (
              <div key={servicio.id} class="card" style={{width: "28rem"}}>
                <img src={servicio.img} class="card-img-top"/>
                <div class="card-body">
                  <h5 class="card-title">{servicio.title}</h5>
                  <p class="card-text">{servicio.description}</p>
                  <a href="" class="btn btn-outline-warning btn-sm" onClick={() => handleClick(servicio.id)}>Contactar</a>
                </div>
              </div>
            ))}
          </div>
          </section>
          
    </div>
  );
};


