import React from "react";
import Todo from "./Todo";
import './Todostyle.css';
function Todolist({
  todo,
  deleteHandel,
  updateHandle,
  saveHandle,
  cancelHandle,
}) {
  return (
    <>
      <ul>
        {todo.map((tobj) => {
          return (
            <Todo key={tobj.id}
              todo={tobj}
              deleteHandel={deleteHandel}
              updateHandle={updateHandle}
              saveHandle={saveHandle}
              cancelHandle={cancelHandle}
            />
          );

          //  tobj.isEditing ? <input value ={tobj.task} >
          // </input> : <li key={tobj.id}>
          //       {tobj.task}
          //       <button onClick={() => deleteHandel(tobj.id)}>delete</button>
          //       <button onClick={()=>updateHandle(tobj.id)}>edit</button>
          //     </li>;
        })}
      </ul>
    </>
  );
}

export default Todolist;
