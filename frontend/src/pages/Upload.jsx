import React from "react";

const Upload = () => {
  return (
    <div className="page">
      <h1>Upload Dataset</h1>

      <div className="card">
        <h3>Upload CSV File</h3>

        <input type="file" />

        <button>Upload Dataset</button>
      </div>

      <div className="table-card">
        <h3>Uploaded Datasets</h3>

        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Rows</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>sales_data.csv</td>
              <td>1200</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>forecast.csv</td>
              <td>850</td>
              <td>Processed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Upload;