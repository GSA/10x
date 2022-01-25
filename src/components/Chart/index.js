import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "FY17",
    projects_kicked_off: 17,
    projects_closed_out: 16,
    ideas_received: 36
  },
  {
    name: "FY18",
    projects_kicked_off: 20,
    projects_closed_out: 19,
    ideas_received: 146
  },
  {
    name: "FY19",
    projects_kicked_off: 48,
    projects_closed_out: 49,
    ideas_received: 220
  },
  {
    name: "FY20",
    projects_kicked_off: 72,
    projects_closed_out: 76,
    ideas_received: 365
  },
  {
    name: "FY21",
    projects_kicked_off: 41,
    projects_closed_out: 41,
    ideas_received: 250
  }
];

export default function Chart() {
  return (
    <BarChart
      width={800}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="projects_kicked_off" fill="#C2C2F5" name="Projects Kicked Off" />
      <Bar dataKey="projects_closed_out" fill="#45D9D9" name="Projects Closed Out" />
      <Bar dataKey="ideas_received" fill="#383577" name="Ideas Received" />
    </BarChart>
  );
}
