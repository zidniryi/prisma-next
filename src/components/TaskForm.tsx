import {createTask} from "@/utils/actions";
import React from 'react'


const TaskForm = async () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input type="text" className="input input-primary join-item w-full" placeholder="content" name="content" required />
        <button type="submit" className="btn btn-primary">Create Task</button>
      </div>
    </form>
  )
}

export default TaskForm