import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.scss";

export default withRouter(function MenuItem({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(match.url + linkUrl)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
});
