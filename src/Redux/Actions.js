import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    
  } from '../Redux/ActionsTypes';

  
  
  export const addTodo = (id, todo) => {
    let task = {
      id: id,
      task: todo,
      complited: false,
    };
    return { type: ADD_TODO, payload: task };
  };
  
  export const deleteTodo = (id) => {
    return { type: DELETE_TODO, payload: id};
  };
  
  export const toggleTodo = (id) => {
    return { type: TOGGLE_TODO, payload: { id } };
  };
  
  
  