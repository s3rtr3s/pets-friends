import React from "react";
import "./formContact.css";
export const FormContact = () => {
    return (
        <div className="contacto px-4" id="formulario">
            <div className="form-floating-sm mb-1 mt-2">
                <input type="text" className="form-control" id="email" placeholder="Nombre" name="nombre"/>
            </div>
            <div className="form-floating-sm mt-2 mb-2">
                <input type="text" className="form-control" id="pwd" placeholder="Email" name="email"/>
            </div>
            <div className="form-floating-sm mt-2 mb-2">
                <input type="text" className="form-control" id="asunto" placeholder="Asunto" name="asunto"/>
            </div>
            <div className="form-floating-sm mt-2 mb-2">
                <textarea className="form-control" id="comment" name="text" placeholder="Tus comentarios aqui!!!"></textarea>      
            </div>
            <div className="col d-md-flex justify-content-around">
                <button type="submit" className="btn btn-dark btn-lg me-md-2" id="botonForm">Enviar...</button>
                <h6 className="pt-3">Gracias por tu mensaje!!!</h6>
            </div>
        </div>
    ); 
};
