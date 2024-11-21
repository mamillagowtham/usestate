import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  const [text,setText] = useState()
  const [todo,setTodo] = useState([])



  function handle(event)
  {
    setText(event.target.value)
   
  }

  function todoList ()
  {
    let newItem = {

      title :text,
      status: false,
      id: Date.now() + Math.random()
  
    }
   

    const addPreviousTodo = [...todo,newItem]


    setTodo(addPreviousTodo)
    setText("");

     


  };

     const handleToggle = (id)=>{
        const todoAfterUpdation = todo.map((item)=>{
          return (item.id === id ? {...item, status : !item.status} :item )
        })
        setTodo(todoAfterUpdation)
     }

 
  return (
    <div>
      <AddTodo  handle = {handle} todoList={todoList} text={text} />
      <TodoList todo = {todo} handleToggle={handleToggle}/>
    </div>
  )
}

export default App
