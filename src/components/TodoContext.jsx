import React, { createContext, useContext, useState } from "react";
//Pupose :  create a global state that can be accessed by components without having to
//          pass props down through multiple levels of the component tree.

//we create the context
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  //initializing todo useState
  const [todos, setTodos] = useState([]);

  //add item to todoList
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  //remove  item from todoList
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // when adding new todo then it marks as : completed: !todo.completed
  const toggleCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, toggleCompletion }}>
      {children}
    </TodoContext.Provider>
  );
};
//using useTodo we can use our useContex in different modules
export const useTodo = () => {
  return useContext(TodoContext);
};
