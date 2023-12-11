import React from 'react'
import TaskForm from "../components/TaskForm"
import {  useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { RingLoader } from 'react-spinners'
import useRequest from '../hooks/useRequest'

const UpdatePage = () => {
  const navigate = useNavigate()
  const {userId} = useParams()
  const {response,loading,error} = useFetch({url: `https://crudapi.co.uk/api/v1/tasks/${userId}`, method:'GET'})

  const {sendRequest} = useRequest({url:`https://crudapi.co.uk/api/v1/tasks/${userId}`, method:'PUT'})

  const onSubmit =  (task,date,name,surname) => {
    sendRequest({task,date,name,surname})
    .then(() => navigate("/"))
  } 
  if(loading && !response) 
  return <div className='loader'>
    <RingLoader
        color= {'#04AA6D'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  </div>
  
  if(error || !response) return <p>Something Went Wrong</p>
  console.log(response)
  return (
    <div>
      <TaskForm 

      onFormSubmit={onSubmit}
      name={response.task}
      surname={response.date}
      task={response.surname}
      date={response.name}
      />
    </div>
  )
}

export default UpdatePage