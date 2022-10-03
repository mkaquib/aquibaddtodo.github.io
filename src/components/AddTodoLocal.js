import React, { useEffect, useState } from 'react'

function getLocalData(){
    let lists= localStorage.getItem('item')
    if(lists){
        return JSON.parse(localStorage.getItem('item'))
    }else{
        return []
    }
}
function AddTodoLocal() {
    const [inputList,setInputList]=useState('')
    const [item,setItem]=useState(getLocalData())

        console.log(item)
    const handleChange=(e)=>{
        setInputList(e.target.value)
    }
    const handleItemAdd=(e)=>{
        e.preventDefault()
        setItem((oldItem)=>{
            return [...oldItem,inputList]
        })
        setInputList('')
        
        
       
    }
    const handleDelete=(id)=>{
        setItem((oldItem)=>{
            return oldItem.filter((val,ind)=>{
                return ind!==id
            })
        })
    }


    useEffect(()=>{
        localStorage.setItem('item',JSON.stringify(item))
    },[item])
  return (
    <>
      <h1>Add ToDo LocalStorage </h1>
      <div style={{display:'flex',justifyContent:'center'}}>
        <input type="text" value={inputList} onChange={handleChange}/>
        <button onClick={handleItemAdd}>Add Items</button>
        
      </div>  
      <div>
        
            {item.map((val,ind)=>{
                return (
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center', gap:'10px', alignItems:'center'}}>
                <p style={{backgroundColor:'blue',padding:'5px',color:'white', width:'15s0px'}} key={ind}>{val}</p>
                <i className='fa fa-trash add-btn' onClick={()=>handleDelete(ind)}></i>
                </div>
                )
            })}
        
      </div>
    </>
  )
}

export default AddTodoLocal