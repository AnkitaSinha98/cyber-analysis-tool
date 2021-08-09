import React from "react";
import Radar from "../src/Radarchart";

class Analyse extends React.Component {
  render() {
    return (
      <div className="Appx pt-8">
        <label className="text-3xl text-white-100 font-bold cursive">
          Radar Chart Analysis
        </label>
        <td className="relative flex justify-center ">
          {" "}
          <Radar />
        </td>
      </div>
    );
  }
}

export default Analyse;
