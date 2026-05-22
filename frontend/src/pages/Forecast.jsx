import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const forecastData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 7000 },
  { month: "Jun", sales: 6500 },
];

const modelData = [
  { name: "Linear", accuracy: 91 },
  { name: "RF", accuracy: 96 },
  { name: "XGB", accuracy: 94 },
  { name: "ARIMA", accuracy: 88 },
];

const Forecast = () => {
  return (
    <div className="page">

      <h1 className="page-title">Forecast Analytics</h1>

      {/* TOP CARDS */}

      <div className="forecast-top-grid">

        <div className="forecast-card">
          <h3>Forecast Accuracy</h3>
          <h2>96%</h2>
          <p>Random Forest Model</p>
        </div>

        <div className="forecast-card">
          <h3>Expected Growth</h3>
          <h2>+24%</h2>
          <p>Next Quarter</p>
        </div>

        <div className="forecast-card">
          <h3>Demand Category</h3>
          <h2>Electronics</h2>
          <p>Highest Trend</p>
        </div>

      </div>

      {/* CHARTS */}

      <div className="forecast-chart-grid">

        {/* SALES CHART */}

        <div className="chart-box">

          <div className="chart-header">
            <h2>Future Sales Prediction</h2>

            <button>Export PDF</button>
          </div>

          <ResponsiveContainer width="100%" height={320}>

            <LineChart data={forecastData}>

              <XAxis dataKey="month" stroke="#aaa" />

              <YAxis stroke="#aaa" />

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

        {/* MODEL COMPARISON */}

        <div className="chart-box">

          <h2>Model Comparison</h2>

          <ResponsiveContainer width="100%" height={320}>

            <BarChart data={modelData}>

              <XAxis dataKey="name" stroke="#aaa" />

              <YAxis stroke="#aaa" />

              <Tooltip />

              <Bar dataKey="accuracy" fill="#ec4899" radius={[8,8,0,0]} />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* INSIGHTS */}

      <div className="insights-box">

        <h2>AI Insights</h2>

        <div className="insight-grid">

          <div className="insight-card">
            Electronics demand expected to increase by 24%.
          </div>

          <div className="insight-card">
            Winter season may generate higher revenue.
          </div>

          <div className="insight-card">
            Furniture category showing slower growth.
          </div>

        </div>

      </div>

    </div>
  );
};

export default Forecast;