import React from "react";
import { connect } from "react-redux";
import { Button } from "../Button/Button";
import { CartItem } from "../CartItem/CartItem";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem}></CartItem>;
        })}
      </div>
      <Button>CONTINUAR COMPRA</Button>
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cartItems: cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
