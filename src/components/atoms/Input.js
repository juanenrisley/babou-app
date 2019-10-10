import React from 'react';
// By default type of the input tag is text
const Input = ({type = 'text', ...rest}) =>(
<label>
  <input type={type} {...rest}/>
</label>

);

export default Input;