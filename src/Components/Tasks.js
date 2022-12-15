import React from 'react';
import { useDispatch } from 'react-redux';

import { deleteTodo, toggleTodo } from '../Redux/Actions';


const Tasks = ({ task }) => {
  const dispatch = useDispatch();
  console.log(task);

  return (
    <div >
    <p style={{ textDecoration: task.completed ? "line-through" : "" }}>
      { task.task}
    </p>
    <button
      className="button-91"
      onClick={() => dispatch( deleteTodo(task.id))}
    >
      ✕
    </button>

    <button
      className="button-92"
      onClick={() => dispatch(toggleTodo(task.id))}
    >
      ✓
    </button>
      
  </div>
  );
};

export default (Tasks);
