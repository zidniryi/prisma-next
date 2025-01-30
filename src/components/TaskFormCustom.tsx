'use client'

import {createTaskCustom} from "@/utils/actions";
import React from 'react'
import {useFormStatus} from "react-dom";

const SubmitButton = () => {
  const pending = useFormStatus()
  return (
    <button type="submit" className="btn btn-primary" disabled={pending.pending}>{pending.pending ? "Loading" : "Create Task"}</button>
  )
}

const TaskFormCustom = () => {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input type="text" className="input input-primary join-item w-full" placeholder="content" name="content" required />
        <SubmitButton />
      </div>
    </form>
  )
}

export default TaskFormCustom