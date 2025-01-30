import TaskForm from "@/components/TaskForm"
import TaskList from "@/components/TaskList"
import React from 'react'

const TasksPage = () => {
  return (
    <div className="flex flex-col items-center  p-8">
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default TasksPage