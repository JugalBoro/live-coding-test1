import React, { useState } from "react";

// Purpose : To get feedback or message from Visitors

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", { name, email, message });
    // Reset form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <p>
        Have a question, suggestion, or feedback? We'd love to hear from you!
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form className="mb-3 formMessage" onSubmit={handleSubmit}>
        <div>
          <label for="name">Name:</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea
            className="form-control"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
