import React from "react";

import "./styles.scss";
import logo from "./assets/logo.svg";
import TextOptions from "./components/TextOptions";

function App() {
  return (
    <div className="mybackground">
      <div className="container">
        <div className="logoHeader">
          <img src={logo} alt="logo" className="img-fluid" />
        </div>

        <TextOptions />

        <div className="signature">
          Powered by{" "}
          <a href="http://instagram.com/jubarte.digital" target="_blank">
            jubartelabs
          </a>
          . Developed by{" "}
          <a href="https://github.com/gustavofillchar" target="_blank">
            gustavofillchar
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
