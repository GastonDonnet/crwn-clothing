import React from "react";
import { withRouter } from "react-router-dom";
import CollectionItem from "../CollectionItem/CollectionItem";

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./CollectionPreview.jstyles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer
      className="title"
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
