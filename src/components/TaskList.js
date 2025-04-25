import React from 'react';
import TaskItem from './TaskItem';

function TaskList() {
  return (
    <div className="task-list">
      <h5 className="mb-3">Your Goals</h5>
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
}

export default TaskList;
