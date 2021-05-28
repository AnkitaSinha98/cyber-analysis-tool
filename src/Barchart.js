import "../src/Styles.css";
import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    fill: "#d0ed57",
  },
  {
    name: "unknown",
    uv: 6.67,
    fill: "#ffc658",
  },
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px",
};

export default function Barchart() {
  return (
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={20}
      outerRadius={140}
      barSize={10}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
  );
}
