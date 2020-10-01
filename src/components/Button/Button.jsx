import React from "react";
import "./Button.scss";

export const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} button`}
    {...otherProps}
  >
    {children}
  </button>
);
