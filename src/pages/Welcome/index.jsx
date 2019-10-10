import React from 'react';
import { Core } from '@babou/core';

import useCounter from '../../hooks/useCounter';

const Welcome = () => {
  const { count } = useCounter();

  return (
    <>
      <h1>Hello World!😷 🤒 🤕 🤢 🤮 {count}</h1>
      <Core/>
    </>
  );
};

export default Welcome;
