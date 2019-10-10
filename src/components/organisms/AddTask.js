import React from 'react';

import Button from '../atoms/Button';
import Input from '../atoms/Input';
import TasksContext from '../contexts/TasksContext';

const AddTask = () => {
  const {addTask} = React.useContext(TasksContext);
  const [title, setTitle] = React.useState('');

  return (
    <React.Fragment>
      <Input value={title} onChange={({target: {value}}) => setTitle(value)}/>
      <Button onClick={() => addTask({title})}>+</Button>
    </React.Fragment>);
      
}


export default AddTask;