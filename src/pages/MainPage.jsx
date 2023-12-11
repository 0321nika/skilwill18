import React from 'react'
import { RingLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { useTasksContext } from '../contexts/TaskContexts';

const MainPage = () => {
  const {taskList,dataLoading,deleteLoading,onDelete} = useTasksContext()

    if(dataLoading || deleteLoading) 
  return <div className='loader'>
    <RingLoader
        color= {'#04AA6D'}
        loading={dataLoading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  </div>
  
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