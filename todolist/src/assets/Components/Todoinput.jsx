import React from "react";
import './Todostyle.css';
import { useState } from "react";

function Todoinput({ addTodo }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    //console.log(text);
  };
  function handleAdd() {
    // console.log(text)
    addTodo(text);
    setText("");
    // console.log(text)
  }
  return (
    <>
      
        <input
          type="text"
          value={text}
          name="textinput"
          className="input-field"
          onChange={handleChange}
        />
        <button className="button" onClick={handleAdd} >Add</button>
      
    </>
  );
}

export default Todoinput;
