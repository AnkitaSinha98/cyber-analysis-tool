import React from "react";
import Barchart from "../src/Barchart";
import Radar from "../src/Radarchart";

class Analyse extends React.Component {
  render() {
    return (
      <div className="Appx">
        <label className="text-3xl text-white-100 font-bold cursive">
          Pie Chart Analysis
        </label>
        <td className="relative flex justify-center pt-12 lg:pt-30 px-8 py-10">
          {" "}
          <Barchart />{" "}
        </td>
        <label className="text-3xl text-white-100 font-bold cursive">
          Radar Chart Analysis
        </label>
        <td className="relative flex justify-center pt-12 py-5">
          {" "}
          <Radar />
        </td>
      </div>
    );
  }
}

export default Analyse;
