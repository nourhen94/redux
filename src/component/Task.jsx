import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { comp, del, edit } from '../redux/Action'

const Task = ({task}) => {
   const [open, setOpen] = useState(false)
   const handleOpen =()=> setOpen(true)
   const handleClose =()=> setOpen(false)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(task.action)
    console.log(inputValue)
  const editedInput={ 
      id:task.id,
      action:inputValue,
      isDone:task.isDone,
  }
  const handleEdit=(e)=>{
      e.preventDefault();
      dispatch(edit(editedInput));
      handleClose()

  }
    return (
        <div>
            { open ?<div>
                 <form onSubmit={handleEdit} >
                     <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                                     <button >confirm</button> 
                 </form>
                                     <button onClick={handleClose}>cancel</button>
            </div> : 
            
            <div>
                <h3 className={task.isDone?"completed":""}>{task.action}</h3>
                <button onClick={()=>dispatch(del(task.id))}>delete</button>
                <button onClick={()=>dispatch(comp(task.id))}>complete</button>
                <button onClick={handleOpen}> Edit</button>
            </div> }
        </div>
    )
}

export default Task
