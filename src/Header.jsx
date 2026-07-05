import React from 'react'

function Header({ cartCount, openCart }) {
  return (
    <header>
      <h1>Flowers<span>.</span></h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about-btn">About</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="icon">

        <button type="button" className="icon-btn" onClick={openCart}>
          <i className="bi bi-cart-plus-fill"></i>
          {cartCount > 0 && (<span className="badge-count">{cartCount}</span>)}
        </button>

      </div>
    </header>
  )
}

export default Header