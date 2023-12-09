import React from 'react'
import { RingLoader } from 'react-spinners';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import useRequest from '../hooks/useRequest';

const MainPage = () => {
    const {error,loading,response,resendRequest} = useFetch({url:"https://crudapi.co.uk/api/v1/tasks",method:"GET"})
    const {sendRequest} = useRequest({method:'DELETE'})
    const taskList = response?.items.map(tasks => {
    return {
      task: tasks.task,
      id: tasks._uuid,
      date: tasks.date,
      name: tasks.name,
      surname: tasks.surname,
    };
  }) || []

  const onDelete = (userId) =>{
    sendRequest(null, `https://crudapi.co.uk/api/v1/tasks/${userId}`).then(() => resendRequest())
  }

    if(loading) 
  return <div className='loader'>
    <RingLoader
        color= {'#04AA6D'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  </div>
  
  if(error) return <p>{error}</p>
  return (
    <div className="App">

       

      <table className="customers">
        <thead>
          <tr>
            <th>Task</th>
            <th>Time</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task) => (
            <tr key={task.id}>
              <td>{task.task}</td>
              <td>{task.date}</td>
              <td>{task.name}</td>
              <td>{task.surname}</td>
              <td>
                <Link to={`/update/${task.id}`} className='edit'>Update</Link> | <button className='delete' onClick={() => onDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MainPage