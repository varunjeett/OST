import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider.js";
import HistoryIcon from "@material-ui/icons/History";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import loginBanner from "./Media/default.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "./firebase.js";
import { actionTypes } from "./reducer";

function Header() {
  const [{ user, name, photo }, dispatch] = useStateValue();

  const signOut = () => {
    auth
      .signOut()
      .then(function () {
        dispatch({
          type: actionTypes.REMOVE_USER,
        });
      })
      .catch(function () {
        console.log("Error in Signout");
      });
  };

  return (
    <nav className="header">
      <div>
        <Link to="/" className="make_cursor">
          <img
            className="header_logo"
            src={loginBanner}
            alt="header_logo_here"
          />
        </Link>
      </div>

      <div className=" make_cursor">
        <a
          className="tag_line"
          href="https://drive.google.com/file/d/1aODMVhnQ98zluRcV33f6VvP1g20yIBm5/view?usp=sharing"
          target="_blank"
        >
          <h2 className="header_font">
            Image Enhancement using Deep Convolutional Generative Adversarial
            Network
          </h2>
        </a>
      </div>

      <div className="header_Right_nav">
        <div className="header_right_columns make_cursor">
          <Avatar className="header_icons" src={photo} />
          <h4 className="header_font">Hello, {name} !</h4>
        </div>

        <div className="header_right_columns make_cursor">
          <HistoryIcon className="header_icons" />
          <h4 className="header_font">History</h4>
        </div>

        <div className="header_right_columns make_cursor" onClick={signOut}>
          <ExitToAppIcon className="header_icons" />
          <h4 className="header_font">Signout</h4>
        </div>
      </div>
    </nav>
  );
}

export default Header;
