import Link from "next/link"
import React from 'react'
import DeleteForm from "./DeleteForm"
import {getAllTask} from "@/utils/actions"

const TaskList = async () => {
  const tasks: any = await getAllTask()
  if (tasks.length > 0) {
    return (
      <ul className="mt-8 w-9/12">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center px-6 py-4 mb-4 border border-b-base-200 rounded-lg shadow-lg">
            <h2 className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>{task.content}</h2>
            <div className="flex gap-6 items-center">
              <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs">
                Edit
              </Link>
              <DeleteForm />
            </div>
          </li>
        ))
        }
      </ul >
    )
  }
  return (
    <div className="mt-8">
      <h2 className="font-medium text-lg">No task</h2>
    </div>
  )
}

export default TaskList