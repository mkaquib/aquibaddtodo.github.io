import React, { useState } from 'react'

function AddTodo() {
    const [task,setTask]=useState('')
    const [item,setItem]=useState([])

    const handleChange=(e)=>{
        setTask(e.target.value)

    }
    const handleAdd=()=>{
        setItem((olditem)=>{
            return [...olditem,task]
        })
        setTask('')
    }
    const handleDelete=(id)=>{
        setItem( (olditem)=>{
            return olditem.filter((val,ind)=>{
                return ind !==id
            })
        })
    }
  return (
    <div>
        
        <h1>Add Todo</h1>
        <div style={{dispay:'flex'}}>
        <input value={task} onChange={handleChange} type="text" />
        <button onClick={handleAdd}>Add Task</button>
        </div>
        <ul>
            {item && item.map((val,ind)=>{
                return (<div style={{dispay:'flex', flexDirection:'row',justifyContent:'center'}}  key={ind}><li>{val}</li><button onClick={()=>handleDelete(ind)}>x</button></div>)
            })}
             
        </ul>
    </div>
  )
}

export default AddTodo