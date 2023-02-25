import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../../store/appContext";
import { UserInfoModal } from "./modal/UserInfoModal";
import "./userinfo.css";

export const UserInfo = () => {
  const [clientInfo, setClientInfo] = useState({});

  const { store, actions } = useContext(Context);
  const getClientInfo = async (id) => {
    const resp = await fetch(`${store.BACKEND_URL}api/clients/${id}`);
    const data = await resp.json();
    setClientInfo(data.result);
  };

  useEffect(() => {
    actions.setClientId();
    getClientInfo(store.clientId);
  }, []);

  const vacio={
              name:"Nombre",
              surname:"Apellido",
              avatar:"https://ionicframework.com/docs/img/demos/avatar.svg",
              city:"Citylandia",
              email:"email@email.com",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            };

  return (
      <div className="dashboard-box container mr-5 mt-4 p-3 d-flex 
                      flex-column align-items-center bg-white">
          <h3>Mi Perfil</h3>
          <div className="p-2 d-flex mb-2 mt-3 pet-service-card col-12">
            <div className="img-container col-5">
              <img className="img-fluid" 
              src={clientInfo.avatar? clientInfo.avatar:vacio.avatar} 
              width="20" height="20"/>
            </div>
            <div>
              <p className="fs-6">{clientInfo.name? clientInfo.name:vacio.name}</p>
              <p className="fs-5">{clientInfo.surname? clientInfo.surname:vacio.surname}</p>
            </div>           
          </div>
          <div>
            <p className="fs-5">
              {clientInfo.city? clientInfo.city:vacio.city}
            </p>
            <p className="fs-5 text-muted">{clientInfo.email? clientInfo:vacio.email}</p>
            <p className="fs-6">{clientInfo.description ? clientInfo.description:vacio.description}</p>
            
            <div class="d-grid gap-5 d-md-flex justify-content-md-center">
              <a className="btn btn-dark text-white rounded-pill px-3 mb-2">
                edit profile
              </a>
              <a className="btn btn-danger text-white rounded-pill px-3 mb-2">
                log out
              </a>
            </div>
              <UserInfoModal />
          </div>
      </div>
  );
};
