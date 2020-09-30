import React from "react";
import "./HomePage.scss";
import DirectoryMenu from "../../components/DirectoryMenu/DirectoryMenu";

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <DirectoryMenu />
  </div>
);

export default HomePage;
