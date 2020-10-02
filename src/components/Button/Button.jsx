import React from "react";
import "./Button.scss";

export const Button = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } button`}
    {...otherProps}
  >
    {children}
  </button>
);
