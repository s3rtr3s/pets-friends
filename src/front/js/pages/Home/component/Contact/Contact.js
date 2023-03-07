import React from "react";
import "./contact.css";
import pedro from "../../../../../img/pedro.jpg";
import manudos from "../../../../../img/manudos.jpg";
import irene from "../../../../../img/irene.jpg";

export const Contact = () => {
	return (
		<div className="contact">
			<div className="letrero d-flex justify-content-center">
				<h1>Contacta con el equipo de PET FRIENDS</h1><br/>
			</div>
			<div className="h3 d-flex justify-content-center">
				<h3>info@petfriends.com</h3>
			</div>
			<div className="fotos d-flex justify-content-around">
				<img className="pedro" src={pedro} alt="imagen de los fundadores" />
				<img className="manudos" src={manudos} alt="imagen de los fundadores" />
				<img className="irene" src={irene} alt="imagen de los fundadores" />
			</div>
			<div className="names d-flex justify-content-around">
				<h4>Pedro Peña</h4>
				<h4>Manuel Cabrera</h4>
				<h4>Irene Quero</h4>
			</div>
		</div>
	
	);
};

