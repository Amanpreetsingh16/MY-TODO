import React, { useEffect, useState } from 'react'
import './Todostyle.css';

function Todo({todo, deleteHandel,updateHandle,saveHandle,cancelHandle}) {
    const isEditable=todo.isEditing;
    const [innertext,setinnertext]=useState('');
    const handelSave=()=>{
        saveHandle(todo.id,innertext)
        setinnertext('');
    }
    useEffect(()=>{
        if(isEditable){

            setinnertext(todo.task);
        }
    },[todo])
  return (
    <>
   {
    isEditable ? <>
    <input className='input-field' value={innertext} onChange={(e)=>{setinnertext(e.target.value)}}/>
    <button className="button" onClick={handelSave}>Save</button>
    <button className="button" onClick={()=>cancelHandle(todo.id)}> Cancel</button>
    </> :
    <>
    <li className='list-item'>
        {todo.task}
    <button className="button" onClick={()=>updateHandle(todo.id)}>Edit</button>
    <button className="button" onClick={()=>deleteHandel(todo.id)}>Delete</button>
    </li>
    </>
   }
    </>
  )
}

export default Todo