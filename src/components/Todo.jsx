import React, { useState } from "react";
import TodoList from "./TodoList";
import Days from "./Days";

export default function Todo({ clickedDay, days }) {
  // State variables
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Event handler for adding a new todo
  const addTodo = (event) => {
    if (newTodo.trim() !== '') {
      // Creating a new todo object with a unique ID, title, and completed set to false
      setTodos([...todos, { id: crypto.randomUUID(), title: newTodo, completed: false, day: clickedDay.name }]);
      setNewTodo('');
    }
  };

  // Event handler for handling changes in todo completion status
  function handleChange(id, completed) {
    setTodos(todos => {
      // Mapping over todos and updating the completed status of the todo with matching ID
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  return (
    <>
      {/* Title and input for adding new todo */}
      {/* <h1 className="d-flex justify-content-center">{clickedDay.name}</h1> */}
      <h2 className="d-flex justify-content-center">Add To-do</h2>
      <div className="container d-flex justify-content-center stuff ">
        <input
          className="input"
          placeholder="Add Todo"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className=" addbtn" onClick={addTodo}>Add todo</button>
      </div>
        <h1 className="d-flex justify-content-center">{"Day: " + clickedDay.name}</h1>
      <TodoList todos={todos} setTodos={setTodos} handleChange={handleChange} clickedDay={clickedDay} />
    </>
  );
}
