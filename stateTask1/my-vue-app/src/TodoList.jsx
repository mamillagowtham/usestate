import React from 'react'

const TodoList = ({todo,handleToggle}) => {
    

  return (
    <ul>
         {todo.map((item)=>{
            const {id,status,title} = item
         return (<li key={id}>
          {title}-{status ? "completed" : "not completed"}
        <button onClick={()=> handleToggle(id)}>toggle</button>
         </li>)
       })}
    </ul>
  )
}

export default TodoList