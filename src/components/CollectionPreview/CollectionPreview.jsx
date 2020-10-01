import React from "react";
import { CollectionItem } from "../CollectionItem/CollectionItem";
import "./CollectionPreview.scss";

export const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps}></CollectionItem>
        ))}
    </div>
  </div>
);
