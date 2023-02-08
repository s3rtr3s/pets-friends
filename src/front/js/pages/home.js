import React, { useContext } from "react";
import { Context } from "../store/appContext";
import styles from "./home.module.css"

export const Home = () => {
  return (
    <div className="container mt-4">
      <div className="col d-flex justify-content-center">
        <div className={`${"card mb-3 col-10"} ${styles.cardBody}`}>
          <div className="row g-0">
            <div className="col-md-8">
              <img
                src="https://images.unsplash.com/photo-1637441607612-43944d988e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <div className="card-body text-center">
                <h5 className="card-title">Paseo de mediodía</h5>
                <p className="card-text">
                  Paseo por zonas cercanas a tu hogar 
                </p>
				<p>30 min</p>
                <a className={`${"btn"} ${styles.button}`} href="#" role="button">
                  Reserva ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
	  <div className="col d-flex justify-content-center">
        <div className={`${"card mb-3 col-10"} ${styles.cardBody}`}>
          <div className="row g-0">
            <div className="col-md-8">
              <img
                src="https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <div className="card-body text-center">
                <h5 className="card-title">Energía por una hora</h5>
                <p className="card-text">
                  Paseo para los mas traviesos
                </p>
				<p>1 h</p>
                <a className={`${"btn"} ${styles.button}`} href="#" role="button">
                  Reserva ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
	  <div className="col d-flex justify-content-center">
        <div className={`${"card mb-3 col-10"} ${styles.cardBody}`}>
          <div className="row g-0">
            <div className="col-md-8">
              <img
                src="https://images.unsplash.com/photo-1601758063541-d2f50b4aafb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1105&q=80"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <div className="card-body text-center">
                <h5 className="card-title">Pijamada perruna</h5>
                <p className="card-text">
                  Cuidado integral de tu mascota
                </p>
				<p>
					8 h
				</p>
                <a className={`${"btn"} ${styles.button}`} href="#" role="button">
                  Reserva ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
