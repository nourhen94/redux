import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
    const {todos} = useSelector(state => state)
    return (
        <div>
          
            {todos.map((el,i)=><Task task={el} key={i} />)}
        </div>
    )
}

export default ListTask
