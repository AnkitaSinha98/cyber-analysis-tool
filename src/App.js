import React from "react";
import "./App.css";
import Scan from "./ScanFile";
import Home from "./Home";
import Monitoring from "./Monitoring";
//import Analyse from "./Analyse";
import Mobsf from "./Mobsf";
import Browsing from "./Browsing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../src/NavBar";
import Domain from "../src/Domain";
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
            <Route component={Browsing} path="/safebrowsing" />
            <Route component={Domain} path="/dns" />
            <Route component={Prediction} path="/prediction" />
          </Switch>
        </div>
        <div className="footer">Developed by Soumadeep ❤ </div>
      </BrowserRouter>
    </body>
  );
};

export default App;
