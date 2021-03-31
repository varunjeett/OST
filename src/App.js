import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider.js";
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { auth } from "./firebase.js";
import { actionTypes } from "./reducer";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import pic from "./Media/urimagehere.jpg";
import SettingsIcon from "@material-ui/icons/Settings";
import Header from "./Header.js";
import resultImage from "./Media/default.png";
import Carousel from "./Carousel";

function App() {
  const [{ user, name, photo }, dispatch] = useStateValue();
  const [uploaded, setUploaded] = useState(false);

  const uploadHere = () => {
    document.getElementById("fileUpload").click();
  };

  const displayPreview = () => {
    setUploaded(true);
    const input = document.getElementById("fileUpload");
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document
          .getElementById("uploadedImage")
          .setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        {/* if no user logged in , show the login page otherwise show the contents */}

        {!user ? (
          <Login />
        ) : (
          <div className="main_page">
            <Header />
            <Carousel />
            <h1>
              Enhance your Images in One Click
            </h1>
            <div className="home_page">
              <div className="image_upload_area">
                <div className="imagehere">
                  <img src={pic} id="uploadedImage" alt="your image" />
                </div>

                <div className="options" onClick={uploadHere}>
                  {uploaded ? (
                    <div className="optionsInside" style={{ color: "black" }}>
                      <h1>Transform</h1>
                      <SettingsIcon className="icons" />
                    </div>
                  ) : (
                    <div className="optionsInside">
                      <h1>Upload Here</h1>
                      <CloudUploadIcon className="icons" />
                    </div>
                  )}
                </div>

                <input
                  id="fileUpload"
                  type="file"
                  className="hideField"
                  onChange={displayPreview}
                />
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
