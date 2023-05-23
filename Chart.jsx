import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import React from 'react';

const data = [
  { name: "December", Total: 35 },
  { name: "January", Total: 28 },
  { name: "February", Total: 20 },
  { name: "March", Total: 40 },
  { name: "April", Total: 30 },
  { name: "May", Total: 15 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
    <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#F8C365" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#F8C365" stopOpacity={0}/>
    </linearGradient>

  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3"  className="chartGrid"/>
  <Tooltip />
  <Area 
  type="monotone" 
  dataKey="Total" 
  stroke="#F8C365" 
  fillOpacity={1} 
  fill="url(#total)" />

</AreaChart>
  </ResponsiveContainer></div>
  )
}

export default Chart