import React from "react";
import CM from "../src/templates/ConfusionMatrix.png";
import Barchart from "../src/Barchart";

import "../src/App.css";

class Prediction extends React.Component {
  render() {
    return (
      <div className="Appscan">
        <div class="relative flex justify-center  px-8 py-5">
          <form
            action="http://localhost:5000/uploader"
            method="POST"
            enctype="multipart/form-data"
            id="myFile"
          >
            <div class="rounded-lg shadow-2xl p-30 form">
              <label className="text-4xl text-white-100 font-bold cursive">
                PE Malware Checker
              </label>
              <br />
              <div class="body" id="drop">
                <input
                  type="file"
                  name="file"
                  multiple="multiple"
                  class="text-l text-black"
                />
                <br />
                <br />
                <button class=" text-3xl text-black cursive">Start</button>
              </div>
            </div>
          </form>
        </div>
        <div className="Appx mt-20">
          <label className="text-3xl text-black-700 font-bold cursive">
            Bar Chart Analysis
          </label>
          <td className="relative flex justify-center pt-12 lg:pt-30 px-8 py-10">
            {" "}
            <Barchart />{" "}
          </td>
          <label className="text-3xl text-black-700 font-bold cursive">
            Confusion Matrix
          </label>
          <td className="relative flex justify-center pt-12 lg:pt-30 px-8 py-10">
            <img src={CM} alt="CM" className="myImage" />
          </td>
        </div>
      </div>
    );
  }
}

export default Prediction;
