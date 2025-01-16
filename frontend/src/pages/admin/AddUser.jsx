import React from "react";
import "../../styles/AddUser.css";

function AddUser() {
  return (
    <div className="add-user-container">
      <h2 className="add-user-heading">Add User</h2>
      <form className="add-user-form">
        <input type="text" placeholder="Enter User Name" required />
        <input type="email" placeholder="Enter User Email" required />
        <button type="submit" className="add-user-submit">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;
