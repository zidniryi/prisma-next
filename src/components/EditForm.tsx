'use client'
import {updateTask} from "@/utils/actions";
import React from 'react'

const EditForm = ({task}) => {
  const {id, content, completed} = task;

  return (
    <div>
      <form action={updateTask} className="max-w-sm border border-base-300 rounded-e-lg ml-8 mr-8 mt-8">
        <input type="hidden" name="id" value={id} />
        <input type="text" name="content" required defaultValue={content} className="input input-bordered w-full" />
        <div className="form-control">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text">Completed</span>
            <input type="checkbox" name="completed" defaultChecked={completed} id="completed" className="checkbox-primary" />
          </label>
        </div>
        <button className="btn btn-link" type="submit">Edit</button>
      </form>
    </div>
  )
}

export default EditForm