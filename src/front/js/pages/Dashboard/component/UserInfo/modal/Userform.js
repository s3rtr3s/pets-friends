import React, { useContext, useState } from "react";
import { Context } from "../../../../../../store/appContext";

export const UserForm = ({ handleOpenModal, getItems }) => {
  const { store } = useContext(Context);
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname:"",
    image: "",
    description: "",
    password:"",
    city:""
  });

  const addUser = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    };
    const resp = await fetch(`${store.BACKEND_URL}api/clients`, options);
    const data = await resp.json();
    console.log(data);
  };

  const handleClick = () => {
    addUser();
    handleOpenModal();
    getItems();
  };

  return (
    <form className="user-form gap-3 p-3 w-100 d-flex flex-column align-items-center">
      <label className="fs-5 fw-bold">Nombre</label>
      <input
        className="col-8"
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <label className="fs-5 fw-bold">Apellido</label>
      <input
        className="col-8"
        value={userInfo.surname}
        onChange={(e) => setUserInfo({ ...userInfo, surname: e.target.value })}
      />
      <label className="fs-5 fw-bold">Ciudad</label>
      <input
        className="col-8"
        value={userInfo.surname}
        onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
      />
      <label className="fs-5 fw-bold">Imagen</label>
      <input
        className="col-8"
        value={userInfo.image}
        onChange={(e) => setUserInfo({ ...userInfo, image: e.target.value })}
      />
      <label className="fs-5 fw-bold">Descripción</label>
      <input
        className="col-8"
        value={userInfo.description}
        onChange={(e) =>
          setUserInfo({ ...userInfo, description: e.target.value })
        }
      />
      <label className="fs-5 fw-bold">Password</label>
      <input type="password"
        className="col-8"
        value={userInfo.password}
        onChange={(e) =>
          setUserInfo({ ...userInfo, password: e.target.value })
        }
      />
      <a
        className="btn btn-dark rounded-pill px-3 text-white"
        onClick={handleClick}
      >
        Save
      </a>
    </form>
  );
};
