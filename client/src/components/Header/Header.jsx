import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, dispatch }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo-container"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">TIENDA</OptionLink>
      <OptionLink to="/contact">CONTACTO</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => dispatch(signOutStart())}>
          SALIR
        </OptionLink>
      ) : (
        <OptionLink to="/signin">INGRESAR</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>

    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
