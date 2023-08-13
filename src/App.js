import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import API_integartion from "./components/API_integration";
import { TodoProvider } from "./components/TodoContext";
import CartHome from "./components/cart/CartHome";

// Home, About, Contact, API_integration, CartHome: These are presumably the components that are
//rendered when the corresponding routes are matched. They represent different pages or sections of your application.

//TodoProvider and TodoList: These components are part of a context-based state management approach.
// The TodoProvider likely wraps around the TodoList component to provide it with a context that holds state related to todo items.
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/api-integration" element={<API_integartion />} />
        </Routes>

        <Routes>
          <Route path="/cart" element={<CartHome />} />
        </Routes>
        <Routes>
          <Route
            path="/todo"
            element={
              <TodoProvider>
                <TodoList />
              </TodoProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
