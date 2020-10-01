import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

export const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}

      <div className="shop-cart"></div>
    </div>
  </div>
);
