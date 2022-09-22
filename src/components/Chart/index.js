import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'FY17',
    projects_kicked_off: 20,
    projects_closed_out: 17,
    ideas_received: 36,
  },
  {
    name: 'FY18',
    projects_kicked_off: 28,
    projects_closed_out: 23,
    ideas_received: 146,
  },
  {
    name: 'FY19',
    projects_kicked_off: 53,
    projects_closed_out: 51,
    ideas_received: 220,
  },
  {
    name: 'FY20',
    projects_kicked_off: 91,
    projects_closed_out: 88,
    ideas_received: 365,
  },
  {
    name: 'FY21',
    projects_kicked_off: 47,
    projects_closed_out: 46,
    ideas_received: 250,
  },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="99%" aspect={2}>
      <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <desc>10x Project Graph</desc>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="projects_kicked_off" fill="#C2C2F5" name="Projects Kicked Off" />
        <Bar dataKey="projects_closed_out" fill="#45D9D9" name="Projects Closed Out" />
        <Bar dataKey="ideas_received" fill="#383577" name="Ideas Received" />
      </BarChart>
    </ResponsiveContainer>
  );
}
