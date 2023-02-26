import React from "react";
import "./userinfomodal.css";


export const UserInfoModal = () => {
  
  return (
    <div className="content">
      <div className="dashboard-box container mt-4 mb-4 p-3 d-flex 
         flex-column align-items-center bg-secondary col-3">
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="inputName" aria-describedby="introName"/>
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword"/>
          </div>
          <button type="submit" class="btn btn-dark">Submit</button>
        </form>
      </div>
    </div>
  );
};
