import React from 'react'

const AddTodo = ({text,handle,todoList}) => {
  return (
    <>
         <input type='text' value={text} onChange={handle}/>
         <button onClick={todoList}> ADD</button>
    </>
  )
}

export default AddTodo