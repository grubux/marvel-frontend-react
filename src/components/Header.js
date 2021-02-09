import { useState } from "react";
import { Link } from "react-router-dom";
import marvellogo from "../assets/marvellogo.png";
import more from "../assets/more.svg";

import "../Reset.css";
import "../App.css";
//BEST PRACTIVE FOR MENU LINKS ?

const Header = () => {
  const [show, setShow] = useState("none");
  const handleMoreButton = () => {
    show === "none" ? setShow("block") : setShow("none");
  };
  return (
    <>
      <div className="wrapper">
        <div style={{ backgroundColor: "#ee161f" }}>
          <div className="logo max-width">
            <img className="logo-image" src={marvellogo} alt="marvel logo" />
            <img
              className="logo-more"
              src={more}
              alt="more"
              onClick={handleMoreButton}
            />
          </div>
        </div>
        <div style={{ backgroundColor: "#ee161f" }}>
          <div className="menu max-width">
            <Link to="/characters">Characters</Link>
            <Link to="/comics">Comics</Link>
            <Link to="/favorites">Favorites</Link>
          </div>
        </div>
        <div className="menu-small" style={{ display: show }}>
          <ul onClick={handleMoreButton}>
            <li className="menu-small-items">
              <Link to="/characters">Characters</Link>
            </li>
            <li className="menu-small-items">
              <Link to="/comics">Comics</Link>
            </li>
            <li className="menu-small-items">
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
