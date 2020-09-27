import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const item = e.target.value;
    setNewItem(item);
  }

  function handleClick() {
    setItems(items.concat(newItem));
    setNewItem("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((e, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={e}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
