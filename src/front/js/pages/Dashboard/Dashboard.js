import React from "react";
import { Messages } from "./component/Messages/Messages";
import { ServicesPets } from "./component/ServicesPets/ServicesPets";
import { UserInfo } from "./component/UserInfo/UserInfo";


export const Dashboard = () => {

  return (
    <div className="container pt-4 d-flex">
      <div className="col-5">
        <UserInfo />
      </div>
      <div className="col-8 gap-3">
        <ServicesPets />
        <Messages />
      </div>
    </div>
  );
};
