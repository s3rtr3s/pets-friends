
import React, { useEffect, useState } from "react";
import styles from "./owner.css";

export const Owner = () => {
    const [owner, setOwner ] = useState("");
    const [pets, setPets ] = useState([]);

    const getOwner = async () => {
        const resp = await fetch ("https://3001-s3rtr3s-petsfriends-5muz0sjdacq.ws-eu88.gitpod.io/api/clients/1")
        const data = await resp.json()
        setOwner(data.result)
    }

    const getPets = async () => {
        const resp = await fetch ("https://3001-s3rtr3s-petsfriends-5muz0sjdacq.ws-eu88.gitpod.io/api/pets_by_owner/1")
        const data = await resp.json()
        setPets(data.results)
    }

    useEffect(() => {
        getPets()
        getOwner()
    },[]);



    // FALTA FETCH DE IMAGENES

    return(
        <div className="container emp-profile">
        <form method="post">
            <div className="row">
                <div className="col-md-4">
                    <div className="profile-img pt-4">
                        <img src={owner?.avatar} alt=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-head">
                                <h2>
                                    {owner?.name} {owner?.surname}
                                </h2>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sobre mí</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Mascotas</button>
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
                        <p>Nombre: {owner?.name}</p>
                        <p>Apellidos: {owner?.surname}</p>
                        <p>Email: {owner?.email}</p>
                        <p>Ciudad: {owner?.city}</p>

                    </div>
                </div>
                <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className="col-md-9">
                                <div className="bio-content">
                                    {owner.description}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="d-flex justify-content-start" id="cardspets"> 
                                    {pets?.map(pet =>(
                                        <div className="col">   
                                        <div className="ica">
                                            <img src={pet.image} className="card-img-top"></img>
                                            <div className="card-body">
                                                <p className="card-text">{pet.name}, {pet.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src="https://images.unsplash.com/photo-1494205577727-d32e58564756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpaHVhaHVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-80" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                    <img src="https://images.unsplash.com/photo-1658416726035-91f5287f9b80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBlcnJvJTIwZ29sZGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-80" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                    <img src="https://images.unsplash.com/photo-1609510471617-b2e55f24d821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHBlcnJvJTIwZ29sZGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-80" alt="..."></img>
                                    </div>
                                    <div className="carousel-item">
                                    <img src="https://images.unsplash.com/photo-1514134136604-e14631dd3477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWh1YWh1YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-80" alt="..."></img>
                                    </div>
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