import React from "react";

import "../src/App.css";

class Prediction extends React.Component {
  render() {
    return (
      <div className="Appscan">
        <div class="relative flex justify-center pt-5 lg:pt-20 px-8 py-5">
          <form
            action="http://localhost:5000/uploader"
            method="POST"
            enctype="multipart/form-data"
            id="myFile"
          >
            <div class="rounded-lg shadow-2xl p-20 form">
              <header class="cursive font-2xl"></header>
              <div class="body" id="drop">
                <input
                  type="file"
                  name="file"
                  multiple="multiple"
                  class="text-l text-black"
                />
                <button class="mt-10 text-4xl text-black cursive">Start</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Prediction;
