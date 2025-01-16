import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Reports.css";

function Reports() {
  const navigate = useNavigate();

  const [productRequests, setProductRequests] = useState([]);
  const [voucherRequests, setVoucherRequests] = useState([]);
  const [inventorySummary, setInventorySummary] = useState([]);

  // Placeholder for fetching report data
  useEffect(() => {
    // Replace with actual API calls to fetch reports
    const fetchReports = async () => {
      // Mock data
      setProductRequests([
        { id: 1, user: "John Doe", product: "Laptop", quantity: 1, date: "2025-01-05" },
        { id: 2, user: "Jane Smith", product: "Phone", quantity: 2, date: "2025-01-03" },
      ]);

      setVoucherRequests([
        { id: 1, user: "John Doe", description: "Task Completion", amount: 50, date: "2025-01-04" },
        { id: 2, user: "Jane Smith", description: "Community Service", amount: 100, date: "2025-01-02" },
      ]);

      setInventorySummary([
        { id: 1, name: "Laptop", quantity: 10, price: 1200 },
        { id: 2, name: "Phone", quantity: 25, price: 800 },
        { id: 3, name: "Headphones", quantity: 50, price: 150 },
      ]);
    };

    fetchReports();
  }, []);

  return (
    <div className="reports-container">
      <button className="back-button" onClick={() => navigate("/admin/dashboard")}>
        Back to Dashboard
      </button>

      <h2 className="reports-heading">Reports</h2>

      <section className="report-section">
        <h3>Last Week's Product Requests</h3>
        <table className="report-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {productRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.user}</td>
                <td>{request.product}</td>
                <td>{request.quantity}</td>
                <td>{request.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="report-section">
        <h3>Last Week's Voucher Requests</h3>
        <table className="report-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {voucherRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.user}</td>
                <td>{request.description}</td>
                <td>{request.amount}</td>
                <td>{request.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="report-section">
        <h3>Inventory Summary</h3>
        <table className="report-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Available Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {inventorySummary.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Reports;
