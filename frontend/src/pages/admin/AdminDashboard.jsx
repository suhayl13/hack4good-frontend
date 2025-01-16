import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AdminDashboard.css" // Import the CSS file

function AdminDashboard() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard-page">
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Admin Dashboard</h2>
      <div className="dashboard-buttons">
        <button className="dashboard-button" onClick={() => handleNavigation("/admin/users")}>
          Manage Users
        </button>
        <button className="dashboard-button" onClick={() => handleNavigation("/admin/requests")}>
          Requests
        </button>
        <button className="dashboard-button" onClick={() => handleNavigation("/admin/inventory")}>
          Manage Inventory
        </button>
        <button className="dashboard-button" onClick={() => handleNavigation("/admin/reports")}>
          Reports
        </button>
      </div>
    </div>
    </div>
  );
}

export default AdminDashboard;
