import React from "react";
import { Link } from "react-router-dom";
import "./nombre.css"


export const NombreInicio = () => {
    
	return (
        <div className="text-center nombre">
            <p>Pet Friends</p>
            <h5>Amigos de tus mascotas</h5>
            <div className="col-sm-12">
              <div className="btn btn-dark" id="boton-pasear">¡Vamos a pasear!</div>
            </div>
            
        </div>
       
    );
};