import React from "react";
import {FormContact} from "./FormContact";
import "./contact.css";

export const Contact = () => {
	return (
    		<div className="row" id="contactoId">
				<div id="cuadroForm">
                    <div className="col-3 p-5" id="imagenGato">
						<img src=
                        "https://cdn.pixabay.com/photo/2016/03/31/19/23/cat-1294968_1280.png" 
					 	alt="animal" width="280" height="240" />
        			</div>
					<div className="col-4 p-5 ml-5" id="#letreroPetFriends">
						<h2>CONTACTA CON </h2>
						<h2>PET FRIENDS</h2>
             			<p>info@petfriends.com</p>
       				</div>
       				<div className="col-5 py-5">
                       <FormContact />
        			</div>
				</div>
   			</div>
		
	);
};

