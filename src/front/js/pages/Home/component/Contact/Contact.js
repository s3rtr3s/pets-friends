import React from "react";
import {FormContact} from "./FormContact";
import "./contact.css";

export const Contact = () => {
	return (
    		<div className="row" id="contactoId">
				<div id="cuadroForm">
					<div className="col-4 p-5 ml-5" id="letreroPetFriends">
						<h1>Contacta con PET FRIENDS</h1><br/><br/>
						<h4>info@petfriends.com</h4>
       				</div>
       				<div className="col-5 py-5">
                       <FormContact />
        			</div>
				</div>
   			</div>
		
	);
};

