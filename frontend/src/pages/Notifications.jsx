import React from "react";

const Notifications = () => {
  return (
    <div className="page">
      <h1>Notifications</h1>

      <div className="notification success">
        Dataset uploaded successfully
      </div>

      <div className="notification info">
        Forecast completed with 96% accuracy
      </div>

      <div className="notification warning">
        New analytics report generated
      </div>
    </div>
  );
};

export default Notifications;