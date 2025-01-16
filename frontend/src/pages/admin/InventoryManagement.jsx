import React, { useState } from "react";
import "../../styles/InventoryManagement.css";
import { useNavigate } from "react-router-dom";

function InventoryManagement() {
  const navigate = useNavigate();

  const [inventory, setInventory] = useState([
    { id: 1, name: "Laptop", quantity: 10, price: 1200 },
    { id: 2, name: "Phone", quantity: 25, price: 800 },
    { id: 3, name: "Headphones", quantity: 50, price: 150 },
  ]);

  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedItem, setSelectedItem] = useState(null); // Stores the item being modified
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Controls pop-up visibility
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
  }); // Form data for the pop-up

  // Sort inventory by name
  const handleSort = () => {
    const sortedInventory = [...inventory].sort((a, b) => {
      return sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
    setInventory(sortedInventory);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Open the modify pop-up
  const handleModify = (item) => {
    setSelectedItem(item);
    setFormData({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    });
    setIsPopupOpen(true);
  };

  // Close the modify pop-up
  const closePopup = () => {
    setSelectedItem(null);
    setIsPopupOpen(false);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle saving changes
  const handleSaveChanges = () => {
    if (!formData.name.trim() || formData.quantity < 0 || formData.price < 0) {
      alert(
        "Please provide valid inputs. Name cannot be empty, and quantity and price cannot be negative."
      );
      return;
    }

    // Update the inventory data (mocking database update)
    const updatedInventory = inventory.map((item) =>
      item.id === selectedItem.id
        ? {
            ...item,
            name: formData.name,
            quantity: +formData.quantity,
            price: +formData.price,
          }
        : item
    );
    setInventory(updatedInventory);
    closePopup();
  };

  return (
    <div className="inventory-management-container">
      <button
        className="back-button"
        onClick={() => navigate("/admin/dashboard")}
      >
        Back to Dashboard
      </button>
      <h2 className="inventory-management-heading">Inventory Management</h2>
      <button className="sort-button" onClick={handleSort}>
        Sort by Name ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Available Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>
                <button
                  className="modify-button"
                  onClick={() => handleModify(item)}
                >
                  Modify
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Modify Product</h3>
            <form>
              <label>
                Product Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Quantity:
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  min="0"
                  required
                />
              </label>
              <label>
                Price:
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  required
                />
              </label>
            </form>
            <div className="popup-actions">
              <button className="save-button" onClick={handleSaveChanges}>
                Save Changes
              </button>
              <button className="cancel-button" onClick={closePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InventoryManagement;
