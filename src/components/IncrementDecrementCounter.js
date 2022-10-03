import React, { useState } from 'react'

function IncrementDecrementCounter() {
    const [count,setCount]=useState(0)

    const handleIncrement=()=>{
        setCount((prev) =>prev+=1)
    }
    const handleDecrement=()=>{   
        if(count>0){
        setCount((prev)=>prev-1)
        }
    }
    const reset=()=>{
        setCount(0)
    }

  return (
    <div>
        <p>count:{count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default IncrementDecrementCounter