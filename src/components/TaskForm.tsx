import prisma from "@/utils/db";
import {revalidatePath} from "next/cache";
import React from 'react'

const createTask = async (form: FormData) => {
  'use server';
  const content = form.get('content');
  await prisma.task.create({
    data: {
      // @ts-ignore
      content,
    }
  })
  revalidatePath('/tasks')
}

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