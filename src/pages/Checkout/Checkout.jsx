import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { StripeCheckoutButton } from "../../components/StripeButton/StripeButton";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import "./Checkout.scss";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout">
      <div className="checkout-header">
        <div className="header-block">
          <span>Producto</span>
        </div>
        <div className="header-block">
          <span>Descripcion</span>
        </div>
        <div className="header-block">
          <span>Cantidad</span>
        </div>
        <div className="header-block">
          <span>Precio</span>
        </div>
        <div className="header-block">
          <span>Remover</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        Podes usar la siguiente informacion para testear:
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, null)(Checkout);
