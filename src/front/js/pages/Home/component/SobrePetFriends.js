import React from "react";
import "./sobre.css"
import { Link } from "react-router-dom";



export const SobrePetFriends = () => {
    
	return (
        <div className="SobrePetFriends">
            <p id="titulo">Sobre Pet Friends</p>
            <div >
            <img src="https://image.europafm.com/clipping/cmsimages01/2021/10/17/062EC2FA-A697-438D-A069-C2D152AB7A29/98.jpg?crop=1920,1080,x0,y102&width=1900&height=1069&optimize=high&format=webply"/>
                <p id="texto"><spam>¿Necesitas una persona responsable y cuidadosa para cuidar de tus mascotas? ¡Estás en el lugar correcto!</spam>
                    <spam>Pet Friends nació de tres amartes de los animales con necesidades como las tuyas! encontrar a un cuidador que mime y ame a nuestras mascotas como si fueran suyas.</spam>
                    <spam>Ya sea que estés de vacaciones, viajando por negocios o simplemente no te gusta dejar a tu mascota en casa todo el día, déjala con alguien que realmente ame a los animales. Además de ofrecer atención especializada, te ofrecemos tranquilidad.</spam>
                </p>
            </div>
        </div>
        
    );
};