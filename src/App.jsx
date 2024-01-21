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
  return (
    <>
      <form action="#" className="add-item-form" onSubmit={handleSubmit}>
        <div className="header">
          <h3>New Item</h3>
          <input
            type="text"
            id="id_new_item_field"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button className="btn">Add Item</button>
        </div>
      </form>
      <h1 className="heading">Todo List</h1>
      <div className="items-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="del-btn">Delete</button>
            </li>
          );
        })}
      </div>
    </>
  );
}
