import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PreOrderItem.css';
import Button from './Button'; 

function ProductCatalog() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: 'Product 1', stock: true, availableQuantity: 5 },
    { id: 2, name: 'Product 2', stock: true, availableQuantity: 10 },
    { id: 3, name: 'Product 3', stock: false, availableQuantity: 0 },
    { id: 4, name: 'Product 4', stock: true, availableQuantity: 8 },
    { id: 5, name: 'Product 5', stock: true, availableQuantity: 12 },
    { id: 6, name: 'Product 6', stock: true, availableQuantity: 15 },
    { id: 7, name: 'Product 7', stock: false, availableQuantity: 0 },
    { id: 8, name: 'Product 8', stock: true, availableQuantity: 20 },
    { id: 9, name: 'Product 9', stock: true, availableQuantity: 7 },
    { id: 10, name: 'Product 10', stock: true, availableQuantity: 25 },
  ];

  const [shoppingList, setShoppingList] = useState([]);

  const addToShoppingList = (product) => {
    setShoppingList((prevList) => {
      const existingItem = prevList.find((item) => item.id === product.id);
      if (existingItem) {
        return prevList.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ); 
      } else {
        return [...prevList, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromShoppingList = (productId) => {
    setShoppingList((prevList) => prevList.filter((item) => item.id !== productId));
  };

  const handleSubmit = () => {
    console.log('Submitted shopping list:', shoppingList);
    alert('Preorder list submitted!');
    setShoppingList([]);
  };

  return (
    <>
    <div className="product-catalog-preorder">
      {/* Shopping List */}
      <div className="shopping-list-preorder">
        <h2 className="caption-preorder">List</h2>
        <ul>
          {shoppingList.map((item) => (
            <li key={item.id} className="shopping-list-item-preorder">
              <span className="item-name-preorder">{item.name}</span>
              <span className="item-quantity-preorder">x{item.quantity}</span>
              <button
                className="remove-button-preorder"
                onClick={() => removeFromShoppingList(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {shoppingList.length > 0 && <Button text="Submit List" onClick={handleSubmit} />}
      </div>

      {/* Product List */}
      <div className="products-summary-preorder">
        <h2 className="caption-preorder">PreOrder Items</h2>
        <div className="products-container-preorder">
          {products.filter((product) => !product.stock).map((product) => (
            <div
              key={product.id}
              className="product-tile-preorder"
              onClick={() => addToShoppingList(product)}
            >
              {product.name}
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <div className= "back-button-container-products">
      <Button
        color= "#6c757d"
        text={"Back to Dashboard"}
        onClick={() => navigate('/resident/Dashboard')}
      />
      </div>
    </>
  );
}

export default ProductCatalog;
