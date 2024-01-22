import "./style.css";

import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          todo.completed = completed;
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <form action="#" className="add-item-form" onSubmit={handleSubmit}>
        <h3>New Item</h3>
        <div className="header">
          <input
            type="text"
            id="id_new_item_field"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="btn">Add Item</button>
        </div>
      </form>
      <h1 className="heading">Tasks</h1>
      <div className="items-list">
        {todos.length === 0 && "No Todos"}

        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="del-btn">
                Delete
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
}
