import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import CartDrawer from "./CartDrawer";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const products = [
    {
      id: 1,
      name: "Rose Garden Pot",
      price: 15.99,
      oldPrice: 19.99,
      img: "/rose.webp",
      discount: "-10%",
    },
    {
      id: 2,
      name: "Lily Arrangement",
      price: 14.49,
      oldPrice: 18.99,
      img: "/lily.jpg",
      discount: "-15%",
    },
    {
      id: 3,
      name: "Spring Tulip Bundle",
      price: 17.25,
      oldPrice: 21.99,
      img: "/tulip.webp",
      discount: "-16%",
    },
    {
      id: 4,
      name: "Peony Deluxe Pot",
      price: 18.5,
      oldPrice: 23.99,
      img: "/peony.jpg",
      discount: "-16%",
    },
    {
      id: 5,
      name: "Sunflower Cheer",
      price: 12.99,
      oldPrice: 16.99,
      img: "/sunflower.jpg",
      discount: "-10%",
    },
    {
      id: 6,
      name: "Orchid Elegance",
      price: 19.99,
      oldPrice: 24.99,
      img: "/orchid.jpg",
      discount: "-10%",
    },
  ];

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Load cart from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) setCart(JSON.parse(saved))
  }, [])

  // Add Product
  function handleAddToCart(product) {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  // Remove Product
  function removeFromCart(id) {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  }

  // Increase Quantity
  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  // Decrease Quantity
  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Total Items
  const totalItems = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <div>

      <Header
        cartCount={totalItems}
        openCart={() => setIsCartOpen(true)}
      />

      <Hero />

      <About />

      <Features />

      <ProductList
        products={products}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isCartOpen={isCartOpen}
        closeCart={() => setIsCartOpen(false)}
        cart={cart}
        totalPrice={totalPrice}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />

    <Reviews />
    
    <Contact/>

    <Footer/>
    </div>

    
  );
}

export default App;