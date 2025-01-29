import prisma from "@/utils/db"
import React from 'react'


const prismaHandler = async () => {
  await prisma.task.create({
    data: {
      content: "Wake Up"
    }
  })
  const allTask = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
  return allTask
}

const PrismaExample = async () => {
  const task = await prismaHandler()
  return (
    <div className="flex flex-col items-center  p-8">
      <h1 className="text-xl font-bold">Task</h1>
      {
        task.map(t => (
          <div key={t.id} className="card bg-base-400 w-9/12 shadow-xl mb-8" style={{cursor: 'pointer'}}>
            <div className="card-body">
              <p className="font-extrabold textarea-xl">{t.content}</p>
            </div>
          </div>
        ))
      }
    </div >
  )
}

export default PrismaExample