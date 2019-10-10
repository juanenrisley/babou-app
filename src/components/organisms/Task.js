import React from 'react';
import SmallTitle from '../atoms/SmallTitle';
import CheckBox from '../atoms/CheckBox'

const Task = ({task: {title, done} = {}}) => (
<React.Fragment>
<SmallTitle>{title}</SmallTitle>
<CheckBox value={done}/>
</React.Fragment>
) 

export default Task;