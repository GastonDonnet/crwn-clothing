import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => (
  <div className="header">
    <Link to="/">
      <Logo className="logo-container"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      <div className="shop-cart"></div>
    </div>
  </div>
);
