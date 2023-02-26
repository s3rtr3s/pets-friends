import React from "react";
import "./userinfomodal.css";

export const UserInfoModal = ({ handleOpenModal }) => {
  return (
    <div className="content">
      <div
        className="dashboard-box container mt-4 mb-4 p-3 d-flex 
         flex-column align-items-center bg-secondary col-3"
      >
        <div className="w-100 d-flex justify-content-end">
          <i
            className="fa-solid fa-xmark p-2 close-button"
            onClick={handleOpenModal}
          ></i>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="introName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
