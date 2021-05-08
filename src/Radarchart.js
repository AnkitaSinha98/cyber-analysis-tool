import "../src/Styles.css";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

const data = [
  {
    subject: "Scan Engine 1",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "Scan Engine 2",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Scan Engine 3",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "Scan Engine 4",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "Scan Engine 5",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "Scan Engine 6",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

export default function Radarchart() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={600}
      height={600}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.5}
      />
    </RadarChart>
  );
}
