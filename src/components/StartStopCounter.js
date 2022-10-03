import React, { useEffect, useState } from 'react';

const StartStopCounter=()=>{
    const [count,setCount]=useState(0)
    const [startTimer,setStartTimer]=useState(false)
    const [intervslRef,setIntervslRef]=useState(0)


    useEffect(()=>{
        let intervalId=null
        if(startTimer){
            intervalId=  setInterval(()=>{
                setCount((prev)=>prev+=1)
            },1000)
            setIntervslRef(intervalId)
        }else{
            clearInterval(intervslRef)
        }

       
    },[startTimer])
    return(
        <div>
            <h1>Counter</h1>
            <p>Count:{count}</p>
            <button onClick={()=>setStartTimer(true)}>Start</button>
            <button onClick={()=>setStartTimer(false)}>Stop</button>
        </div>
    )
}
export default StartStopCounter