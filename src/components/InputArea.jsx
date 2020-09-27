import React, { useState } from "react";

function InputArea(props) {
  const [newItem, setNewItem] = useState("");

  function handleChange(e) {
    const item = e.target.value;
    setNewItem(item);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={newItem} />
      <button
        onClick={() => {
          props.handleClick(newItem);
          setNewItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
