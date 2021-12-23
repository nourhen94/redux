import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { add, filterTask } from '../redux/Action'

const Addtask = () => {
  const [text , setText ] = useState('')
  const dispatch = useDispatch()  
  const handleSubmmit=(e)=>{e.preventDefault();
    const newTask={
        id:Math.random(),
        action:text,
        isDone:false

    }
    dispatch(add(newTask))
    setText('')
}

const todos= useSelector(state => state.todos)



return (
        <div>
              <h1> To Do List </h1>
            <form onSubmit={handleSubmmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button>Add</button>
            </form>
        <button onClick={()=>dispatch(filterTask())}>filter</button>
            <p>Total Tasks {todos.length} </p>
            <p>completed Tasks {todos.filter(el=>el.isDone).length} </p>
        </div>
    )
}

export default Addtask
