import React from "react";

const Settings = () => {
  return (
    <div className="page">

      <h1 className="page-title">Settings</h1>

      {/* PROFILE */}

      <div className="table-card">

        <h2>Profile Settings</h2>

        <div className="settings-grid">

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Role"
          />

          <input
            type="text"
            placeholder="Company"
          />

        </div>

      </div>

      {/* THEME */}

      <div className="table-card">

        <h2>Theme Settings</h2>

        <select>
          <option>Dark Theme</option>
          <option>Light Theme</option>
          <option>Purple Theme</option>
        </select>

      </div>

      {/* NOTIFICATIONS */}

      <div className="table-card">

        <h2>Notification Preferences</h2>

        <div className="toggle-row">
          <span>Email Notifications</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="toggle-row">
          <span>Forecast Alerts</span>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="toggle-row">
          <span>Weekly Reports</span>
          <input type="checkbox" />
        </div>

      </div>

      {/* SECURITY */}

      <div className="table-card">

        <h2>Security</h2>

        <div className="settings-grid">

          <input
            type="password"
            placeholder="Current Password"
          />

          <input
            type="password"
            placeholder="New Password"
          />

        </div>

      </div>

      {/* API */}

      <div className="table-card">

        <h2>API Configuration</h2>

        <input
          type="text"
          placeholder="API Key"
        />

      </div>

      {/* BUTTON */}

      <button className="save-btn">
        Save All Settings
      </button>

    </div>
  );
};

export default Settings;