import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const item = e.target.value;
    setNewItem(item);
  }

  function handleClick() {
    console.log(items.concat(newItem));
    setItems(items.concat(newItem));
    setNewItem("");
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
          {items.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
