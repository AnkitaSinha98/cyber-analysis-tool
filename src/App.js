import React from "react";
import "./App.css";
import Scan from "./ScanFile";
import Home from "./Home";
import Monitoring from "./Monitoring";
import Analyse from "./Analyse";
import Mobsf from "./Mobsf";
import Browsing from "./Browsing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../src/NavBar";
import Stego from "./Stego";
import Prediction from "../src/Prediction";

const App = () => {
  return (
    <body>
      <BrowserRouter>
        <h1 className="Title">
          Cyber Analysis Tool for Malware Detection and Prediction{" "}
        </h1>
        <div className="BackgroundLayout">
          <NavBar />
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Scan} path="/scan" /> ;
            <Route component={Monitoring} path="/monitoring/" />
            <Route component={Mobsf} path="/mobsf" />
            <Route component={Analyse} path="/analyse" />
            <Route component={Stego} path="/steganography" />
            <Route component={Browsing} path="/safebrowsing" />
            <Route component={Prediction} path="/prediction" />
          </Switch>
        </div>
        <div className="footer">Developed by Soumadeep ❤ </div>
      </BrowserRouter>
    </body>
  );
};

export default App;
