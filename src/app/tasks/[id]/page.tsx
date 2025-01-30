import EditForm from "@/components/EditForm"
import {getTask} from "@/utils/actions"
import Link from "next/link"
import React from 'react'

const SinggleTask = async ({params}) => {
  const task = await getTask(params.id)
  return (
    <div>
      <div className="mb-16">
        <Link href={'/tasks'} className="btn btn-ghost">
          Back To Task
        </Link>
        <EditForm task={task} />
      </div>
    </div>
  )
}

export default SinggleTask