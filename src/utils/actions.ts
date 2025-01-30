'use server';

import {revalidatePath} from "next/cache";
import prisma from "./db";

export const getAllTask = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
}

export const createTask = async (formData: FormData) => {
  const content = formData.get('content');
  await prisma.task.create({
    data: {
      // @ts-ignore
      content,
    }
  })
  revalidatePath('/tasks')
}


export const deleteTask = async (formData: FormData) => {
  const id = formData.get('id');
  console.log(id)
  await prisma.task.delete({
    where: {id}
  })
  revalidatePath('/tasks')

}