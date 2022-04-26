import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      <h1>{text || 'john doe'}</h1>
      {isError ? <button className='btn' onClick={()=> setIsError(!isError)}>error</button>:<button className='btn' onClick={()=> setIsError(!isError)}>no error</button>}
      {isError && <h1>hello world</h1>}
      {isError ? <h1>Error!</h1>:<h1>No Error</h1>}
    </>
  );
};

export default ShortCircuit;
