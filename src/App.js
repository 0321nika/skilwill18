import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';

function App() {
  const API_KEY = 'teHKwRLGVGcO1IZK4Iv2RQsRFZkzfqAF6m3EFJm0qIPRseOP_Q'

  const [taskList,setTaskList] = useState([])

  useEffect(() =>{
    fetch('https://crudapi.co.uk/api/v1/tasks',{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      }
    })
    .then(res => {
      if (!res.ok) throw Error ("response faied")
      return res.json()
    })
    .then(data => setTaskList(data.items.map(tasks => {
      return{
        task: tasks.task,
        id: tasks._uuid
      }
    })))
    .catch(err => console.log(err))
    
  },[])

  const onFormSubmit = (task) => {
    fetch('https://crudapi.co.uk/api/v1/tasks',{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify([{task}])
    })
    .then(res => {
      if (!res.ok) throw Error ("response faied")
      return res.json()
    })
    .then(data => setTaskList((prev) => [...prev, {
      task: data.items[0].task,
      id: data.items[0]._uuid
    }]))
    .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <TaskForm onFormSubmit={onFormSubmit}/>
      {taskList.map((task) => <div key={task.id}>
         <h3>{task.task}</h3>
         <h2>isCompleted</h2> 
         </div>)}
    </div>
  );
}

export default App;
