import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/UserManagement.css"; // Import the CSS file specific to this page

function UserManagement() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="user-management-container">
        <button className="back-button" onClick={() => navigate("/admin/dashboard")}>
        Back to Dashboard
      </button>
      <h2 className="user-management-heading">User Management</h2>
      <div className="user-management-buttons">
        <button
          className="user-management-button"
          onClick={() => handleNavigation("/admin/add-user")}
        >
          Add User
        </button>
        <button
          className="user-management-button"
          onClick={() => handleNavigation("/admin/suspend-user")}
        >
          Suspend User
        </button>
        <button
          className="user-management-button"
          onClick={() => handleNavigation("/admin/reset-password")}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default UserManagement;
