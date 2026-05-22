import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 7000 },
  { month: "Jun", sales: 6500 },
];

const pieData = [
  { name: "Random Forest", value: 40 },
  { name: "XGBoost", value: 30 },
  { name: "Linear", value: 20 },
  { name: "ARIMA", value: 10 },
];

const COLORS = ["#a855f7", "#ec4899", "#6366f1", "#14b8a6"];

const Dashboard = () => {
  return (
    <div>

      <div className="topbar">
        <h1>Dashboard</h1>
        <div className="profile">R</div>
      </div>

      {/* STATS */}

      <div className="stats-grid">

        <div className="card">
          <h3>Total Sales</h3>
          <h2>₹40.3L</h2>
        </div>

        <div className="card">
          <h3>Forecast Accuracy</h3>
          <h2>96%</h2>
        </div>

        <div className="card">
          <h3>Total Datasets</h3>
          <h2>45</h2>
        </div>

        <div className="card">
          <h3>Revenue Growth</h3>
          <h2>+32%</h2>
        </div>

      </div>

      {/* CHARTS */}

      <div className="chart-grid">

        {/* LINE CHART */}

        <div className="chart-box">

          <h2>Monthly Forecast Analytics</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>

              <XAxis dataKey="month" stroke="#ccc" />

              <YAxis stroke="#ccc" />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="#c084fc"
                strokeWidth={4}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}

        <div className="chart-box">

          <h2>AI Models</h2>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={90}
                dataKey="value"
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

    </div>
  );
};

export default Dashboard;