import React, { useState } from 'react'
import DivContainer from './DivContainer'

function AddDiv() {
    
    const [item,setItem]=useState([])
    const handleAdd=()=>{
        setItem((olditem)=>{
            return [...olditem,<DivContainer/>]
        })
    }
    const deleteItems =(id,e)=>{
        
        setItem((olditem)=>{
            return olditem.filter((val,ind)=>{
                return ind !==id
            })
        })
    }
  return (
    <>
       

       <button onClick={handleAdd}>Add Div</button>
       <br/>
       <br/>
       {item.map((val,ind)=>{
        return <DivContainer key={ind} id={ind} onSelect={deleteItems}/>
       })}
    </>
  )
}

export default AddDiv