import React, { useState, useEffect } from "react";
import "../../styles/RequestManagement.css";
import { useNavigate } from "react-router-dom";

function RequestManagement() {
  const navigate = useNavigate();

  const [productRequests, setProductRequests] = useState([]);
  const [voucherRequests, setVoucherRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null); // Holds the request to show in the pop-up
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Controls pop-up visibility

  // Placeholder for fetching data from backend
  useEffect(() => {
    // Replace these with actual API calls to fetch requests
    const fetchRequests = async () => {
      try {
        // Mock data for demonstration
        setProductRequests([
          {
            id: 1,
            user: "John Doe",
            product: "Laptop",
            quantity: 1,
            status: "Pending",
          },
          {
            id: 2,
            user: "Jane Smith",
            product: "Phone",
            quantity: 2,
            status: "Pending",
          },
        ]);

        setVoucherRequests([
          {
            id: 1,
            user: "John Doe",
            description: "Performance Task",
            status: "Pending",
          },
          {
            id: 2,
            user: "Jane Smith",
            description: "Community Service",
            status: "Pending",
          },
        ]);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);

  // Handle opening the pop-up
  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setIsPopupOpen(true);
  };

  // Handle closing the pop-up
  const closePopup = () => {
    setSelectedRequest(null);
    setIsPopupOpen(false);
  };

  // Placeholder function for approving/rejecting requests
  const handleRequestAction = (action, request, voucherAmount = null) => {
    if (action === "approve") {
      if (request.product) {
        console.log(
          `Product request approved. Deducting ${request.quantity} from inventory.`
        );
      } else if (voucherAmount) {
        console.log(
          `Voucher request approved. Crediting user ${request.user} with ${voucherAmount}.`
        );
      }
    } else {
      console.log(`${action} action taken for request ID: ${request.id}`);
    }
    closePopup();
  };

  return (
    <div className="request-management-container">
      <button
        className="back-button"
        onClick={() => navigate("/admin/dashboard")}
      >
        Back to Dashboard
      </button>
      <h2 className="request-management-heading">Request Management</h2>

      <div className="request-list">
        <h3>Product Requests</h3>
        <ul>
          {productRequests.map((request) => (
            <li key={request.id} className="request-item">
              <span>
                {request.product} (x{request.quantity}) requested by{" "}
                {request.user}
              </span>
              <button
                className="view-details-button"
                onClick={() => handleViewDetails(request)}
              >
                View More
              </button>
            </li>
          ))}
        </ul>

        <h3>Voucher Requests</h3>
        <ul>
          {voucherRequests.map((request) => (
            <li key={request.id} className="request-item">
              <span>
                {request.description} requested by {request.user}
              </span>
              <button
                className="view-details-button"
                onClick={() => handleViewDetails(request)}
              >
                View More
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isPopupOpen && selectedRequest && (
        <div className="popup">
          <div className="popup-content">
            <h3>Request Details</h3>
            <p>
              <strong>User:</strong> {selectedRequest.user}
            </p>
            {selectedRequest.product && (
              <>
                <p>
                  <strong>Product:</strong> {selectedRequest.product}
                </p>
                <p>
                  <strong>Quantity:</strong> {selectedRequest.quantity}
                </p>
              </>
            )}
            {!selectedRequest.product && (
              <>
                <p>
                  <strong>Description:</strong> {selectedRequest.description}
                </p>
                <label>
                  Voucher Amount:
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount"
                    onChange={(e) =>
                      (selectedRequest.voucherAmount = e.target.value)
                    }
                  />
                </label>
              </>
            )}

            <div className="popup-actions">
              <button
                className="approve-button"
                onClick={() =>
                  handleRequestAction(
                    "approve",
                    selectedRequest,
                    selectedRequest.voucherAmount
                  )
                }
              >
                Approve
              </button>
              <button
                className="reject-button"
                onClick={() => handleRequestAction("reject", selectedRequest)}
              >
                Reject
              </button>
            </div>
            <button className="close-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestManagement;
