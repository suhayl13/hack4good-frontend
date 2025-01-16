import React from "react";
import "../../styles/ResetPassword.css";

function ResetPassword() {
  return (
    <div className="reset-password-container">
      <h2 className="reset-password-heading">Reset Password</h2>
      <form className="reset-password-form">
        <input type="email" placeholder="Enter User Email" required />
        <input type="password" placeholder="Enter New Password" required />
        <button type="submit" className="reset-password-submit">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
