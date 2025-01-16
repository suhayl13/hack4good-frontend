import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button'
import './VoucherRequest.css';

function VoucherRequest() {
  const navigate = useNavigate();
  const [activity, setActivity] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!activity) {
      alert('Please add an activity');
      return;
    }

    // Simulating onAdd behavior
    console.log({ activity, description });

    
    setActivity('');
    setDescription('');
  };

  return (
    <>
    <div className="voucher-request">
      {/* Header Section */}
      <header className="voucher-header">
        <h1 className="title">Voucher Request</h1>
      </header>

      {/* Main Content */}
      <div className="voucher-content">

        <form className="request-voucher-form" onSubmit={onSubmit}>
          <div className="form-control">
            <label>Activity Type</label>
            <input
              type="text"
              placeholder="Enter activity type"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Describe Your Role</label>
            <textarea
              placeholder="Describe your role in this activity"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <input type="submit" value="Submit" className="btn btn-block" />
        </form>
      </div>
    </div>
    <div className= "back-button-container">
      <Button
        color= "#6c757d"
        text={"Back to Dashboard"}
        onClick={() => navigate('/resident/Dashboard')}
      />
      </div>
    
  </>
  );
}

export default VoucherRequest;
