import React from "react";

import { NombreInicio } from "./component/NombreInicio/NombreInicio";
import { SobrePetFriends } from "./component/SobrePetFiends/SobrePetFriends";
import { Services } from "./component/Servicios/Services";

import { Footer } from "../../component/footer/Footer.js";

export const Home = () => {
  return (
    <div>
      <div id="inicio" className="pt-4">
        <NombreInicio />
      </div>

      <div id="sobre">
        <SobrePetFriends />
      </div>

      <div id="servicios">
        <Services />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
