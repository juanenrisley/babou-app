import React from 'react';

const tasks = [
    {
      id: '2019-07-05T19:40:47.639Z',
      title: 'firsTask',
      done: false,
    },
    {
      id: '2019-07-05T19:46:19.040Z',
      title: 'sencondTask',
      done: true,
    }
  ];
const TaskContext = React.createContext({
  tasks: tasks,
  addTask: ({title}) => { alert(title);tasks.push({id: new Date().toISOString(), title, done: false})},
});

export default TaskContext;