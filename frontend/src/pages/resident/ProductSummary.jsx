import React from 'react';
import './ProductsSummary.css';

function ProductSummary() {
  const products = [
    { id: 1, name: 'Product 1', stock: true },
    { id: 2, name: 'Product 2', stock: true },
    { id: 3, name: 'Product 3', stock: false },
    { id: 4, name: 'Product 4', stock: true },
    { id: 5, name: 'Product 5', stock: false },
    { id: 6, name: 'Product 6', stock: true },
    { id: 7, name: 'Product 7', stock: false },
    { id: 8, name: 'Product 8', stock: true },
    { id: 9, name: 'Product 9', stock: true },
    { id: 10, name: 'Product 10', stock: true },
    { id: 11, name: 'Product 11', stock: false },
  ];

  return (
    <div className="products-summary-summary">
      <h2 className="caption-summary">Available Products</h2>
      <div className="products-container-summary">
        {products.map((product) => (
          <div key={product.id} className="product-tile-summary">
            {product.name}
            {!product.stock && <div className="out-of-stock-summary">OUT OF STOCK</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSummary;
