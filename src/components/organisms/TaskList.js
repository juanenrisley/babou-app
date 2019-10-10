import React from 'react'

import Task from './Task'
import TasksContext from '../contexts/TasksContext'

const TaskList = () => {
  const {tasks = []}  = React.useContext(TasksContext);
  return tasks.map(task => <Task key={task.id} task={task}/>)  
  };

export default TaskList