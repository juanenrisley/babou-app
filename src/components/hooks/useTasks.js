import React from 'react';

import TasksContext from '../contexts/TasksContext';

const useTasks = () => {
  const {tasks: contextTasks = [], addTask: addContextTask}  = React.useContext(TasksContext);
  const [tasks, setTasks]  = React.useState(contextTasks);
  const addTask = (task) => {
    addContextTask(task);
  };

  return {
    addTask,
    tasks
  }
};

export default useTasks;
