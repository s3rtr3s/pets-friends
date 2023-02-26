import React, { useEffect, useState } from "react";
import styles from "./carer.css";

export const Carer = () => {
    const [carer, setCarer ] = useState("");
    const [services, setServices ] = useState([]);
    const [image, setImage ] = useState([]);


    const getCarer = async () => {
        const resp = await fetch ("https://3001-s3rtr3s-petsfriends-5muz0sjdacq.ws-eu88.gitpod.io/api/clients/1")
        const data = await resp.json()
        setCarer(data.result)
    }

    const getServices = async () => {
        const resp = await fetch ("https://3001-s3rtr3s-petsfriends-5muz0sjdacq.ws-eu88.gitpod.io/api/services_by_carer/1")
        const data = await resp.json()
        setServices(data.results)
    }

    const getImage = async () => {
        const resp = await fetch ("https://3001-s3rtr3s-petsfriends-5muz0sjdacq.ws-eu88.gitpod.io/api/gallery/1")
        const data = await resp.json()
        setImage(data.results)
    }

    useEffect(() => {
        getCarer()
        getServices()
        getImage()
    },[]);
// QUEDA MODIFICAR LA PARTE DE SERVICIOS Y DE IMAGENES SEGÚN EL SERIALIZE
// pedro tiene que añadir al serialize de servicios las imagenes para poder crear las cards de servicios con sus img

    return(
        <div className="container emp-profile">
        <form method="post">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img pt-4">
                        <img src={carer?.avatar} alt=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                                <h2>
                                    {carer?.name} {carer?.surname}
                                </h2>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sobre mí</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Servicios</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Galería</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-work">
                        <h6>DATOS DE CONTACTO</h6><br/>
                        <p>Nombre: {carer?.name}</p>
                        <p>Apellidos: {carer?.surname}</p>
                        <p>Email: {carer?.email}</p>
                        <p>Ciudad: {carer?.city}</p>

                    </div>
                </div>
                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="col-md-9">
                                <div className="bio-content">
                                    {carer.description}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="d-flex justify-content-start" id="cardspets"> 
                                    {/* {services?.map(service =>(
                                        <div className="col">   
                                        <div className="ica">
                                            <img src={service.image} className="card-img-top"></img>
                                            <div className="card-body">
                                                <p className="card-text">{pet.name}, {pet.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                    } */}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                
                                <div className="carousel-inner">
                                    {image?.map(image =>(
                                    <div className="carousel-item active">
                                        <img src={image.url} className="d-block w-80" alt="..."/>
                                    </div>
                                    ))
                                    }  
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                
                    </div>
                </div>
            </div>
        
        </form>           
    </div>
    );   
};