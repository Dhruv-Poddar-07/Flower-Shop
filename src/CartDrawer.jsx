import React from "react";

function CartDrawer({

  isCartOpen,
  closeCart,
  cart,
  totalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,

}) {
  return (
    <>
      <div className={isCartOpen ? "overlay show" : "overlay"} onClick={closeCart}></div>

      {/* Drawer */}
      <div className={isCartOpen ? "cart-drawer open" : "cart-drawer"}>

        <div className="drawer-header">
          <h2>Your Cart</h2>

          <button className="close-btn" onClick={closeCart}>
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
          </div>) : 
          (
          <>
            <div className="drawer-items">

              {cart.map(item => (

                <div className="drawer-item" key={item.id}>

                  <div>

                    <h4>{item.name}</h4>

                    <p>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                  </div>

                  <div className="quantity-box">

                    <button onClick={() => decreaseQuantity(item.id)}>
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>

                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>

                </div>

              ))}

            </div>

            <div className="drawer-footer">

              <h3>Total: ${totalPrice.toFixed(2)}</h3>

              <button className="checkout-btn">
                Checkout
              </button>

            </div>

          </>
        )}

      </div>
    </>
  );
}

export default CartDrawer;