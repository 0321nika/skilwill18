import React, { useRef } from 'react'
import '../App.css'


const TaskForm = ({onFormSubmit, task , date, name,surname}) => {
  const taskRef = useRef()
  const dateRef = useRef()
  const nameRef = useRef()
  const surnameRef = useRef()
   
    const onSubmit = (e) => {
        e.preventDefault()
        if(taskRef.current && dateRef.current && nameRef.current && surnameRef.current){
          onFormSubmit(taskRef.current.value,dateRef.current.value,nameRef.current.value,surnameRef.current.value)
        }else{
          alert("please fill all the input")
        }
    }
  return (
    <div className='form_container'>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Enter your Task' ref={taskRef} defaultValue={task}/>
            <input type="date" ref={dateRef} defaultValue={date}/>
            <input type="text" placeholder='FirstName' ref={nameRef} defaultValue={name}/>
            <input type="text" placeholder='last name' ref={surnameRef} defaultValue={surname}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default TaskForm