import React from 'react'

function DivContainer(props) {
  return (
    <>
    <button onClick={()=>props.onSelect(props.id)}>x:{props.id}</button>
    <div style={{width:'100px' ,height:'100px',backgroundColor:'red', marginBottom:'5px'}}>
        <p>id:{props.id}</p>
    </div>
    </>
  )
}

export default DivContainer