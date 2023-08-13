// ProductList.js
import React from "react";
import "../../styles/cart.css";
//The entire component generates a list of product cards with their names, prices, and an "Add to Cart" button. When the
//"Add to Cart" button is clicked, the onAddToCart function passed as a prop is
// called with the corresponding product object as an argument.
function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>Price: INR {product.price.toFixed(2)}</p>
          <button className="btn btn-dark" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
