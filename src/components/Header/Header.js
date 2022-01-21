import React from "react";
import "./Header.css";
import image from "../../image/GitHub.png";

const Header = () => {
  return (
    <div className="Header">
      <img src={image} alt="Logo Github" width="150" />
    </div>
  );
};

export default Header;
