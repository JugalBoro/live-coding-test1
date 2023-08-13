import React from "react";
//Cart component takes in five props: cartItems, onRemoveFromCart, onIncrement, onDecrement, and onClose.
//These props are provided by the parent component to control the behavior and data of the cart.
function Cart({
  cartItems,
  onRemoveFromCart,
  onIncrement,
  onDecrement,
  onClose,
}) {
  return (
    // The component renders a container with the class cart.

    // It displays a heading "Your Cart".

    // Inside the div, it checks if the cartItems array is empty. If it's empty, it displays a message saying "Your cart is empty." Otherwise, it renders the cart items.

    // For each item in the cartItems array, it renders a list item (<li>) containing the item's name, price, and buttons for different actions.

    // The "Remove" button triggers the onRemoveFromCart function when clicked, passing the item's id.

    // The "Add to Cart" button triggers the onIncrement function when clicked, passing the item's id.

    // The span displays the quantity of the item.

    // The "Reduce Quantity" button triggers the onDecrement function when clicked, passing the item's id.

    // After rendering the cart items, it displays the total number of items in the cart.

    // It calculates and displays the subtotal of the cart, which is the sum of the individual item prices multiplied by their quantities.

    // Lastly, it renders a "Close" button that triggers the onClose function when clicked.
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - Price: INR {item.price.toFixed(2)}{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => onRemoveFromCart(item.id)}>
                  Remove
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => onIncrement(item.id)}>
                  Add to Card
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn-dark"
                  onClick={() => onDecrement(item.id)}>
                  Reduce Quantity
                </button>
              </li>
            ))}
          </ul>
          <p>Total Items in Cart: {cartItems.length}</p>
          <p>
            Subtotal: INR
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
          <button className="btn btn-success" onClick={onClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
