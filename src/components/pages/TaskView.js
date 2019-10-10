import React from 'react';

import Title from '../atoms/Title';
import TaskContextProvider from '../templates/TaskContextProvider';
import TaskList from '../organisms/TaskList';
import AddTask from '../organisms/AddTask';

const TaskView = () =>(
  <TaskContextProvider>
    <Title>Today on... today's taks...</Title>
    <AddTask/>
    <TaskList/>
  </TaskContextProvider>
  )

export default TaskView;
