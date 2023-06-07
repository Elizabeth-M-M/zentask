import React from 'react'
import TaskCard from './TaskCard';
import { allTasks } from '../assets/Data';

function Tasks() {
 const tasks= allTasks
  return (
    <div className="p-5">
      <div className=" gap-4 md:flex">
        <div>
          <h2 class="uppercase text-gray-700 font-bold mb-2 text-2xl text-center">
            Urgent
          </h2>
          {tasks
            .filter((task) => task.priority === "Critical")
            .map((task) => (
              <TaskCard task={task} />
            ))}
        </div>
        <div>
          <h2 class="uppercase text-gray-700 font-bold mb-2 text-2xl text-center">
            Medium
          </h2>
          {tasks
            .filter((task) => task.priority === "Medium")
            .map((task) => (
              <TaskCard task={task} />
            ))}
        </div>
        <div>
          <h2 class="uppercase text-gray-700 font-bold mb-2 text-2xl text-center">
            Low
          </h2>
          {tasks
            .filter((task) => task.priority === "Minor")
            .map((task) => (
              <TaskCard task={task} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Tasks