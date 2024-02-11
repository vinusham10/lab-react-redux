import React, { useState } from 'react';
import { createStore } from 'redux';
import reducer from './Reducers';
import { incrementNumber, decrementNumber } from './Actions';

const store = createStore(reducer)

export default function Counter() {

  const [count, setCounter] = useState(0);

  const unsubscribe = store.subscribe(()=>{
    setCounter(store.getState().count)
  })  

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>store.dispatch(incrementNumber())}>Like</button>
      <button onClick={()=>store.dispatch(decrementNumber())}>Unlike</button>
    </div>
  )
}