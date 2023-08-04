import React, { useState } from "react";
import Todoinput from "./Todoinput";
import Todolist from "./Todolist";
import './Todostyle.css';
function Todowrapper() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: Math.random(), task: todo, isEditing: false },
    ]);
    // console.log(todos);
  }
  const handleUpdate = (id) => {
    setTodos(prevtodos=>prevtodos.map((tobj) => {
      if (tobj.id === id) {
        return { ...tobj, isEditing: true };
      } else {
        return tobj;
      }
    }));
  };
  const handleDelete = (id) => {
    // let newtodo = todos.filter((tobj) => {
    //   return tobj.id != id;
    // });
    setTodos(prevtodos=> prevtodos.filter((tobj) => {
      return tobj.id != id;
    }));
  };
  const handeltodoSave = (id, text) => {
    setTodos((prevtodos) =>
      prevtodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, task: text, isEditing: false };
        } else {
          return todo;
        }
      })
    );
  };

const handletodoCancel=(id)=>{
  //return handleUpdate(id);
  setTodos(prevtodos=>prevtodos.map((tobj) => {
    if (tobj.id === id) {
      return { ...tobj, isEditing: false };
    } else {
      return tobj;
    }
  }));
}
  return (
    <div className="todo-app">
      <Todoinput addTodo={addTodo} />
      <Todolist
        todo={todos}
        deleteHandel={handleDelete}
        updateHandle={handleUpdate}
        saveHandle={handeltodoSave}
        cancelHandle={handletodoCancel}
      />
    </div>
  );
}

export default Todowrapper;
