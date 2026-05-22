import {
  FaChartLine,
  FaUpload,
  FaFileAlt,
  FaBell,
  FaUserShield,
  FaCog,
  FaTachometerAlt
} from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Forecast from "./pages/Forecast";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";
import Admin from "./pages/Admin";
import Settings from "./pages/Settings";

import "./Dashboard.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        {/* SIDEBAR */}

        <div className="sidebar">

          <h1 className="logo">Advaced AI Forecast</h1>

          <div className="menu">

            <ul>

  <li>
    <Link to="/dashboard">
      <FaTachometerAlt className="icon" />
      Dashboard
    </Link>
  </li>

  <li>
    <Link to="/upload">
      <FaUpload className="icon" />
      Upload Dataset
    </Link>
  </li>

  <li>
    <Link to="/forecast">
      <FaChartLine className="icon" />
      Forecast
    </Link>
  </li>

  <li>
    <Link to="/reports">
      <FaFileAlt className="icon" />
      Reports
    </Link>
  </li>

  <li>
    <Link to="/notifications">
      <FaBell className="icon" />
      Notifications
    </Link>
  </li>

  <li>
    <Link to="/admin">
      <FaUserShield className="icon" />
      Admin
    </Link>
  </li>

  <li>
    <Link to="/settings">
      <FaCog className="icon" />
      Settings
    </Link>
  </li>

</ul>

</div>

</div>

        {/* MAIN */}

        <div className="main-content">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/upload" element={<Upload />} />

            <Route path="/forecast" element={<Forecast />} />

            <Route path="/reports" element={<Reports />} />

            <Route path="/notifications" element={<Notifications />} />

            <Route path="/admin" element={<Admin />} />

            <Route path="/settings" element={<Settings />} />

          </Routes>

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;