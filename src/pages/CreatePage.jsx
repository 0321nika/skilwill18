import React from 'react'
import TaskForm from '../components/TaskForm'
import useRequest from '../hooks/useRequest';
import { useNavigate } from 'react-router-dom';
import { RingLoader } from 'react-spinners';

const CreatePage = () => {
    const {loading,sendRequest} = useRequest({url:'https://crudapi.co.uk/api/v1/tasks', method:"POST"})

    const navigate = useNavigate()
    
    const onSubmit = (task,date,name,surname) => {
        sendRequest([{task,date,name,surname}])
        .then(() => navigate("/"))
        .catch(err => console.log(err))
    }
    if(loading) return <RingLoader
    color= {'#04AA6D'}
    loading={loading}
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  return (
    <TaskForm onFormSubmit={onSubmit} />
  )
}

export default CreatePage