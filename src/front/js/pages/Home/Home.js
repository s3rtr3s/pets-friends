import React from "react";

import { NombreInicio } from "./component/NombreInicio/NombreInicio";
import { SobrePetFriends } from "./component/SobrePetFiends/SobrePetFriends";
import { Services } from "./component/Servicios/Services";
import { Carrusel } from "./component/Carrusel/Carrusel";
import { Contact } from "./component/Contact/Contact";
import { Footer } from "../../component/footer/Footer";

export const Home = () => {
  return (
    <div>
      <div id="inicio" className="pt-4">
        <NombreInicio />
      </div>

      <div id="sobre" className="pt-4">
        <SobrePetFriends />
      </div>

      <div id="servicios"  className="pt-4">
        <Services />
      </div>
      
      <div id="carrusel" className="pt-4">
        <Carrusel />
      </div>
      <div id="contacto" className="pt-4">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
