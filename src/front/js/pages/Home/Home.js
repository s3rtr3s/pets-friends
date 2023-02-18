import React from "react";

import { NombreInicio } from "./component/NombreInicio";
import { SobrePetFriends } from "./component/SobrePetFriends";
import { Services } from "./component/Services";

export const Home = () => {
    
	return (
        <div>
            <NombreInicio/>
            <SobrePetFriends/>
            <Services />
        </div>
        
    );
}
