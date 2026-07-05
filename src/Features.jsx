import React from 'react';

function Features() {
  return (
    <div className="logo">

      <div className="logo1">
        <div className="shipping-icon">
          <i className="bi bi-cart-dash-fill"></i>
        </div>

        <div className="shipping">
          <p className="para-1">Free Shipping</p>
          <p className="para-2">on all orders</p>
        </div>
      </div>

      <div className="logo2">
        <div className="return-icon">
          <i className="bi bi-coin"></i>
        </div>

        <div className="return">
          <p className="para-3">10 days return</p>
          <p className="para-4">Moneyback Guarantee</p>
        </div>
      </div>

      <div className="logo3">
        <div className="offer-icon">
          <i className="bi bi-gift-fill"></i>
        </div>

        <div className="offer">
          <p className="para-5">Offer & gift</p>
          <p className="para-6">on all orders</p>
        </div>
      </div>

      <div className="logo4">
        <div className="payment-icon">
          <i className="bi bi-wallet2"></i>
        </div>

        <div className="payment">
          <p className="para-7">Secure payment</p>
          <p className="para-8">through PayPal</p>
        </div>
      </div>

    </div>
  );
}

export default Features;