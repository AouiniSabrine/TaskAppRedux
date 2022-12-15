import React from 'react';
import { useSelector } from 'react-redux';

import Tasks from './Tasks';



const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="Container">
      <div>
        <h2> Let's get some work done!</h2>
      </div>

      <div>
        <ul id="myUl">
        {tasks?.map((todo) => (
          <li key={todo.id}>
            <Tasks todo={todo} />
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default (TasksList);