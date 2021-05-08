import React from "react";
import "./App.css"
import Scan from "./ScanFile";
import Home from "./Home";
import Prediction from "./IPrediction";
import Analyse from "./Analyse";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "../src/NavBar";


function App(){
    

  return(
    <body>
      <BrowserRouter>
      <h1 className="Title">Cyber Analysis Tool for Malware Detection and Prediction </h1>
      <div className = "BackgroundLayout"> 
      <NavBar/>
      <Switch>
      <Route component ={Home} path='/' exact/>
      <Route component ={Scan} path='/scan'/> ;
      <Route component ={Prediction} path='/prediction/'/>
      <Route component ={Analyse} path='/analyse'/>
  </Switch>



      </div>
    <footer> Developed  by  Soumadeep ❤ </footer>
    </BrowserRouter>

    </body> 

    
  );
}

export default App;