import React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedWallet from './AnimatedWallet';
import ProductSummary from './ProductSummary';
import NavigationPane from './NavigationPane';
import './Dashboard.css';

function ResidentDashboard() {
  const navigate = useNavigate();
  const handleSignOut = () => {
      const confirmed = window.confirm('Are you sure you want to sign out?');
    if (confirmed) {
      navigate('/')
      
    }
  };

  return (
    <div>
      {/* Header Container */}
      <div className="header-container">
        <h2 className="header">
          Hello <span>*USER NAME*</span>
        </h2>
        <button className="sign-out-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>


      {/* Components */}
      <AnimatedWallet />
      <NavigationPane />
      <ProductSummary />
    </div>
  );
}

export default ResidentDashboard;
