import React from 'react'
import TaskCard from './TaskCard';

function Tasks() {
  const tasks = [
    {
      id: 1,
      taskName: "Pray",
      description: "For a good job",
      dueDate: "2018-07-23",
      priority: "Critical",
    },
    {
      id: 2,
      taskName: "Apply singing contest",
      description: "Judge Boe is there",
      dueDate: "2018-08-23",
      priority: "Medium",
    },
    {
      id: 3,
      taskName: "House hunting",
      description: "Mainly in Ngong Road",
      dueDate: "2018-09-23",
      priority: "Minor",
    },
  ];
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