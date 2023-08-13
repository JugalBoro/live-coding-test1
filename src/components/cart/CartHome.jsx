import React, { useState } from "react";

import ProductList from "./ProductList";
import Cart from "./Cart";

//
function CartHome() {
  //initialProducts: An array of initial product objects with id, name, and price.
  const initialProducts = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 15 },
    { id: 3, name: "Product 3", price: 20 },
  ];

  //products: State variable that holds the list of products. Initialized with initialProducts.
  //cartItems: State variable that holds the list of items in the cart. Initialized as an empty array.
  //isCartOpen: State variable that determines whether the cart is open or closed. Initialized as false

  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //addToCart(product): Adds a product to the cart. If the product is already in the cart, it increments the quantity; otherwise, it adds the product to the cart with a quantity of 1.

  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  //removeFromCart(productId): Removes a product from the cart based on its id.
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  //incrementQuantity(productId): Increments the quantity of a product in the cart.
  const incrementQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  //decrementQuantity(productId): Decrements the quantity of a product in the cart, ensuring that the quantity doesn't go below 1.
  const decrementQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item
    );
    setCartItems(updatedCart);
  };

  //openCart(): Sets isCartOpen to true to open the cart.
  const openCart = () => {
    setIsCartOpen(true);
  };

  //closeCart(): Sets isCartOpen to false to close the cart.
  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="shop">
        <ProductList products={products} onAddToCart={addToCart} />
        <button
          className="open-cart-button btn btn-secondary"
          onClick={openCart}
          disabled={isCartOpen}>
          Open Cart
        </button>
        {isCartOpen && (
          <Cart
            cartItems={cartItems}
            onClose={closeCart}
            onRemoveFromCart={removeFromCart}
            onIncrement={incrementQuantity}
            onDecrement={decrementQuantity}
          />
        )}
      </div>
    </div>
  );
}

export default CartHome;
