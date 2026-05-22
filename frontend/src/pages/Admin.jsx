import React from "react";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const apiData = [
  { day: "Mon", calls: 220 },
  { day: "Tue", calls: 180 },
  { day: "Wed", calls: 260 },
  { day: "Thu", calls: 240 },
  { day: "Fri", calls: 310 },
  { day: "Sat", calls: 150 },
  { day: "Sun", calls: 190 },
];

const pieData = [
  { name: "Linear", value: 38 },
  { name: "Random Forest", value: 29 },
  { name: "XGBoost", value: 21 },
  { name: "ARIMA", value: 12 },
];

const COLORS = ["#8b5cf6", "#ec4899", "#6366f1", "#14b8a6"];

const Admin = () => {
  return (
    <div className="page">

      <h1 className="page-title">Admin Dashboard</h1>

      {/* TOP CARDS */}

      <div className="admin-stats">

        <div className="admin-card">
          <h3>Total Users</h3>
          <h2>8</h2>
        </div>

        <div className="admin-card">
          <h3>API Calls</h3>
          <h2>247</h2>
        </div>

        <div className="admin-card">
          <h3>Total Datasets</h3>
          <h2>12</h2>
        </div>

        <div className="admin-card">
          <h3>System Uptime</h3>
          <h2>99.8%</h2>
        </div>

      </div>

      {/* CHART GRID */}

      <div className="admin-grid">

        {/* BAR CHART */}

        <div className="chart-box">

          <h2>Daily API Calls</h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={apiData}>

              <XAxis dataKey="day" stroke="#aaa" />

              <YAxis stroke="#aaa" />

              <Tooltip />

              <Bar
                dataKey="calls"
                fill="#8b5cf6"
                radius={[8,8,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}

        <div className="chart-box">

          <h2>Model Usage</h2>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >

                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* STORAGE */}

      <div className="table-card">

        <div className="storage-top">
          <h2>Storage Usage</h2>
          <span>24 GB / 50 GB</span>
        </div>

        <div className="storage-bar">
          <div className="storage-fill"></div>
        </div>

      </div>

      {/* RECENT ACTIVITY */}

      <div className="table-card">

        <h2>Recent Activity</h2>

        <div className="activity-item">
          Forecast generated successfully
        </div>

        <div className="activity-item">
          Dataset uploaded: sales_q4.csv
        </div>

        <div className="activity-item">
          PDF report exported
        </div>

        <div className="activity-item">
          New user registered
        </div>

      </div>

    </div>
  );
};

export default Admin;