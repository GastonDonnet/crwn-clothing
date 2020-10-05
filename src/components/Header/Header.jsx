import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>

    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
