import React from "react";
import { Button } from "../Button/Button";
import "./CartDropdown.scss";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <Button>CONTINUAR COMPRA</Button>
      </div>
    </div>
  );
};
