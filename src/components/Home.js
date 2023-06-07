import React, { useEffect, useState } from 'react'
import Form from './Form'
import Tasks from './Tasks';
import { allTasks } from "../assets/Data";

function Home() {  

  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
 fetch("http://localhost:3000/tasks")
   .then((res) => res.json())
   .then((data) => setTasks(data));
  }, [])
  function handleAddTask(obj){
    // console.log(obj)
    setTasks([...tasks, obj])
  }
  console.log(tasks)
  return (
    <div className="home">
      <div className="container mx-auto p-5">
        <Form handleAddTask={handleAddTask}/>
        <Tasks tasks= {tasks}/>
      </div>
    </div>
  );
}

export default Home