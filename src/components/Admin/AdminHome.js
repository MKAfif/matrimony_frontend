import React from "react";
import AdminHeader from "./AdminHeader";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AdminHome = () => {
  const data = [
    { name: "January", sales: 65 },
    { name: "February", sales: 59 },
    { name: "March", sales: 80 },
    { name: "April", sales: 81 },
    { name: "May", sales: 56 },
  ];

  return (
    <div>
      <AdminHeader />
      <div className="w-36 ml-96 mt-20">
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8" 
            activeDot={{ r: 8, stroke: "#8884d8", strokeWidth: 2, fill: "white" }} // Active dot on hover
          />
        </LineChart>
      </div>
    </div>
  );
};

export default AdminHome;
