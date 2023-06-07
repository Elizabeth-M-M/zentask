import React, { useState } from 'react'
import Form from './Form'
import Tasks from './Tasks';
import { allTasks } from "../assets/Data";

function Home() {  
  const [tasks, setTasks] = useState(allTasks);
  function handleAddTask(obj){
    console.log(obj)
    setTasks([...tasks, obj])
  }
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