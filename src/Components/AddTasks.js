import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../Redux/Actions';


const AddTasks = () => {
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState("");
   
  const dispatch = useDispatch();

   const addTask = () => {
    if (todo !== "") {
      dispatch(addTodo(input, todo));
      setInput(input + 1);
      setTodo("");
    }
  };
  return (
    <div className="Input-Container">
      <div className="add-element">
        <h1>TO-DO APP!</h1>
        <h4>Add New To-Do</h4>
        <div>
          <input
            type="text"
            id="myInput"
            placeholder="Enter New Task..."
            onChange={(e) => setTodo(e.target.value)}
           />
          <button
            className="add-Btn"
            onClick={addTask}>
              AddTask
          </button>
        </div>
      </div>
    </div>
  );
};

export default (AddTasks);
