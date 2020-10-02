import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo-container"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        TIENDA
      </Link>
      <Link className="option" to="/contact">
        CONTACTO
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SALIR
        </div>
      ) : (
        <Link className="option" to="/signin">
          INGRESAR
        </Link>
      )}

      <div className="shop-cart"></div>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
