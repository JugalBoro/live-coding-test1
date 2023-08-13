import React, { useState } from "react";
import { useTodo } from "./TodoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

// Main component for todoList

export default function TodoList() {
  //importing useContext
  const { todos, addTodo, removeTodo, toggleCompletion } = useTodo();

  //for adding state of TodoList
  const [newTodo, setNewTodo] = useState("");

  //updating state to todo when text is not null
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  //count of completed tasks
  const completedCount = todos.filter((todo) => todo.completed).length;

  //count of remaining tasks
  const remainingCount = todos.length - completedCount;

  return (
    <div>
      <h2 className="h2">Todo List</h2>
      <div className="input-group mb-3">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            placeholder="Add a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />

          <button className="input-group-text" id="basic-addon2" type="submit">
            Add
          </button>
        </form>
      </div>
      <div className="card card-body text-bg-dark mb-3">
        <h5 className="card-title">List of Completed and Remaining Tasks</h5>

        <p className="card-text">Completed Tasks: {completedCount}</p>
        <p className="card-text">Remaining Tasks: {remainingCount}</p>
      </div>

      <ul className="list-group list-group-numbered">
        {todos.map((todo, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start ms-2 me-auto fw-bold"
            key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleCompletion(index)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
            <button
              className="btn btn-primary removeBtn"
              onClick={() => removeTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
