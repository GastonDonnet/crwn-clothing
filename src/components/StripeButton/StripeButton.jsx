import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HZLJnCpwfvtfGvhP2INZVlN3UVVwki7Ck9m1lcbVcbekqU8jW9FNGbeEsvaPx5VCWLM4fciF7W4iChB9Mz8SaZu00nhctcVwJ";

  const onToken = (token) => {
    console.log(token);
    alert("Se realizo el pago exitosamente!");
  };

  return (
    <StripeCheckout
      label="Pagar"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Tu total es $${price}`}
      amount={priceForStripe}
      panelLabel="Pagar Ahora"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
