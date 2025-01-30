import {deleteTask} from "@/utils/actions"
import React from 'react'

interface ComponentDeleteFrom {
  id: string
}

const DeleteForm = async ({id}: ComponentDeleteFrom) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="btn btn-danger btn-xs">Delete</button>
    </form>
  )
}

export default DeleteForm