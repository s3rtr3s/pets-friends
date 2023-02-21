import React from "react";
import { NombreInicio } from "./component/NombreInicio/NombreInicio";
import { SobrePetFriends } from "./component/SobrePetFiends/SobrePetFriends";


export const Home = () => {
    
	return (
        <div>
            <div id="inicio" class="pt-4">
                <NombreInicio/>
            </div>
            
            <div id="sobre">
               <SobrePetFriends/> 
            </div>
            
        </div>
        
    );
};