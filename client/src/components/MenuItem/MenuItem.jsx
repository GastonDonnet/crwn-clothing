import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./MenuItem.styles";

export default withRouter(function MenuItem({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        imageUrl={imageUrl}
      />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>COMPRA AHORA!</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
});
