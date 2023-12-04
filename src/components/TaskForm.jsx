import React, { useState } from 'react'

const TaskForm = ({onFormSubmit}) => {
    const [task,setTask] = useState();
    const onSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(task)
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Enter your Task' onChange={e => setTask(e.target.value)}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default TaskForm