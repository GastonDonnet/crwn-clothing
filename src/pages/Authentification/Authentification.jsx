import React from "react";
import Signin from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import "./Authentification.scss";

export const Authentification = () => (
  <div className="authentification">
    <Signin />
    <SignUp />
  </div>
);
