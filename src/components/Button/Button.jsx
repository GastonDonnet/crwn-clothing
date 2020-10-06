import React from "react";

import { ButtonContainer } from "./Button.styles";

export const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
);
