import React from 'react'
import Form from './Form'
import Tasks from './Tasks';
import { allTasks } from "../assets/Data";

function Home() {  
  const tasks = allTasks;
  return (
    <div className="home">
      <div className="container mx-auto p-5">
        <Form />
        <Tasks tasks= {tasks}/>
      </div>
    </div>
  );
}

export default Home