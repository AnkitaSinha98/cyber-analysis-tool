import React from "react";
import "./App.css";
class Stego extends React.Component {
  render() {
    return (
      <div className="Appx pt-8">
        <label className="text-3xl text-white-100 font-bold cursive">
          Steganography Analysis
        </label>
        <div className="cont text-xl text-white-100 justify-center">
          <div>
            <input
              type="file"
              name="pic"
              accept="image/*"
              //   onchange={this.readURL()}
            />
            <div className="ui input">
              <input id="text" type="text" />
            </div>

            <button className="ui secondary button" onclick="hideText()">
              Hide Message Into Image
            </button>
          </div>
          <div className="img-cont">
            <div className="img1">
              <h5>Source Image</h5>

              <img id="image1" src="" alt="" />
            </div>

            <div className="">
              <h5>Message Encoded Image</h5>
              <img id="image2" src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stego;
