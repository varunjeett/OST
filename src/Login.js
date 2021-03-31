import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase.js";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import loginBanner from "./Media/cover.png";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result?.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img className="loginBanner" src={loginBanner} alt="app logo here" />
        <h1>Professional Photo Editor : Footo-Editor</h1>
        <h3>Tranforming the World by ML</h3>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
