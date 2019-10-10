import React from 'react';

import TasksContext from '../contexts/TasksContext';

const TaskContextProvider = (props) => {
  const { tasks: contextTasks = [] } = React.useContext(TasksContext);
  console.log('New value!', contextTasks)
  const [tasks, setTasks] = React.useState(contextTasks);

  const addTask = ({ title }) => {
    alert(title);
    setTasks([
      ...tasks,
      {
        id: new Date().toISOString(),
        title,
        done: false,
      },
    ]);
  };

  return (
    <TasksContext.Provider value={{
      tasks,
      addTask,
    }} {...props}/>
  );
};

export default TaskContextProvider;
