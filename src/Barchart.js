import "../src/Styles.css";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "Regression",
    percent: 52.80,
    fill: "#FF8042",
  },
  {
    name: "GNB",
    percent: 70.17,
    fill: "#00C49F",
  },
  {
    name: "K-NN",
    percent: 95.59,
    fill: "#ffc658",
  },
  {
    name: "AdaBoost",
    percent: 98.63,
    fill: "#a4de6c",
  },
  {
    name: "Gradient Boosting",
    percent: 98.79,
    fill: "#82ca9d",
  },
  {
    name: "Decision Tree",
    percent: 98.96,
    fill: "#C990E2",
  },
  {
    name: "Random Forest",
    percent: 99.33,
    fill: "#52ECDD",
  },

];

const style = {
  top: 0,
  left: 350,
  lineHeight: "20px",
};

export default function Barchart() {
  return (
    <RadialBarChart
      width={550}
      height={300}
      cx={150}
      cy={150}
      innerRadius={30}
      outerRadius={140}
      barSize={12}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#000000"}}
        background
        clockWise
        dataKey="percent"
      />
      <Legend
        iconSize={10  }
        width={160}
        height={150}
        layout="vertical"
        verticalAlign= "middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}
