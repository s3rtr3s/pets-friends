import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Registro } from "./pages/Registro/Registro";
import { InicioSesion } from "./pages/InicioSesion/InicioSesion";
import { Servicios } from "./pages/Servicios/Servicios";

import injectContext from "./store/appContext";

import { Navbar } from "./component/Navbar";

import { Home } from "./pages/Home/Home";

//import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Registro />} path="/registro" />
            <Route element={<InicioSesion />} path="/iniciosesion" />
            <Route element={<Servicios />} path="/servicios" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
