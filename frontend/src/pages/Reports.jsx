import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const reportData = [
  { month: "Jan", sales: 420 },
  { month: "Feb", sales: 500 },
  { month: "Mar", sales: 650 },
  { month: "Apr", sales: 720 },
  { month: "May", sales: 810 },
  { month: "Jun", sales: 900 },
];

const Reports = () => {
  return (
    <div className="page">

      <h1 className="page-title">Reports & Analytics</h1>

      {/* TOP SECTION */}

      <div className="reports-top">

        <div className="report-stat">
          <h3>Total Sales</h3>
          <h2>₹33.3L</h2>
        </div>

        <div className="report-stat">
          <h3>Total Profit</h3>
          <h2>₹10L</h2>
        </div>

        <div className="report-stat">
          <h3>Average Growth</h3>
          <h2>8.8%</h2>
        </div>

      </div>

      {/* BUTTONS */}

      <div className="report-buttons">

        <button>Export PDF</button>

        <button>Export Excel</button>

      </div>

      {/* CHART + SAVED REPORTS */}

      <div className="report-grid">

        {/* CHART */}

        <div className="chart-box">

          <h2>Monthly Sales Forecast</h2>

          <ResponsiveContainer width="100%" height={320}>

            <BarChart data={reportData}>

              <XAxis dataKey="month" stroke="#aaa" />

              <YAxis stroke="#aaa" />

              <Tooltip />

              <Bar
                dataKey="sales"
                fill="#c084fc"
                radius={[10,10,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* SAVED REPORTS */}

        <div className="saved-reports">

          <h2>Saved Reports</h2>

          <div className="saved-item">
            <h4>Q1 Sales Report</h4>
            <p>Generated Today</p>
          </div>

          <div className="saved-item">
            <h4>Forecast Report</h4>
            <p>Generated Yesterday</p>
          </div>

          <div className="saved-item">
            <h4>AI Growth Analytics</h4>
            <p>Generated 2 Days Ago</p>
          </div>

        </div>

      </div>

      {/* TABLE */}

      <div className="table-card">

        <h2>Detailed Forecast Report</h2>

        <table>

          <thead>
            <tr>
              <th>Month</th>
              <th>Sales</th>
              <th>Forecast</th>
              <th>Growth</th>
              <th>Profit</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>January</td>
              <td>₹420K</td>
              <td>₹450K</td>
              <td>8%</td>
              <td>₹126K</td>
            </tr>

            <tr>
              <td>February</td>
              <td>₹500K</td>
              <td>₹580K</td>
              <td>12%</td>
              <td>₹156K</td>
            </tr>

            <tr>
              <td>March</td>
              <td>₹650K</td>
              <td>₹720K</td>
              <td>10%</td>
              <td>₹200K</td>
            </tr>

            <tr>
              <td>April</td>
              <td>₹720K</td>
              <td>₹810K</td>
              <td>9%</td>
              <td>₹240K</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Reports;