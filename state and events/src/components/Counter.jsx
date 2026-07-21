import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const[count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    if(count > 0) {
      setCount(count - 1)
    }
  }
  function reset() {
    setCount(0)
  }

    return (
    <div>
        <h1>Counter</h1>    
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Counter