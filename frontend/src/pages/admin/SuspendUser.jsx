import React from "react";
import "../../styles/SuspendUser.css";

function SuspendUser() {
  return (
    <div className="suspend-user-container">
      <h2 className="suspend-user-heading">Suspend User</h2>
      <form className="suspend-user-form">
        <input type="email" placeholder="Enter User Email" required />
        <button type="submit" className="suspend-user-submit">
          Suspend User
        </button>
      </form>
    </div>
  );
}

export default SuspendUser;
