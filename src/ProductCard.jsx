import React from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-1">
      <span className="discount">{product.discount}</span>

      <div className="image">
        <img src={product.img} alt={product.name} />

        <div className="icons">
          

          <button
            type="button"
            className="cart-btn"
            onClick={() => onAddToCart(product)}
          >Add to Cart
          </button>

        </div>
      </div>

      <div className="price">
        <h1>{product.name}</h1>

        <p>
          ${product.price} <span>${product.oldPrice}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;