import Todo from "./Todo";
import { useState } from "react";
import Days from "./Days";

export default function TodoList({ todos, setTodos, clickedDay, days }) {
  // Event handler for handling changes in todo completion status
  function handleChange(id, completed) {
    setTodos((todos) => {
      // Mapping over todos and updating the completed status of the todo with matching ID
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  // Event handler for removing a todo
  function removeTodo(remove) {
    setTodos(todos.filter((todo) => todo !== remove));
  }

  // Filter todos based on the clicked day
  const todosForClickedDay = todos.filter((todo) => todo.day === clickedDay.name);

  return (
    <>
      {/* Todo list */}
      <ul className="list-group list-group">
        {todosForClickedDay.map((todo) => (
          <li className="list-group-ite  d-flex justify-content-center shit" key={todo.id}>
            <label>
              {/* Displaying todo title and checkbox for completion status */}
              <a className={todo.completed ? 'completed' : ''}>{todo.title}</a>
              <input
                className="form-check-input cheack"
                type="checkbox"
                value=""
                checked={todo.completed}
                id="flexCheckDefault"
                onChange={(e) => handleChange(todo.id, !todo.completed)}
              />
            </label>
            <button className="btn btn-danger" onClick={() => removeTodo(todo)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
