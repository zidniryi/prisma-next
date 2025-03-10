'use server';

import {revalidatePath} from "next/cache";
import prisma from "./db";
import {redirect} from "next/navigation";

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

export const createTaskCustom = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
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


export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: {id}
  })
}

export const updateTask = async (formData: FormData) => {
  const id = formData.get('id');
  const content = formData.get('content');
  const completed = formData.get('completed');
  await prisma.task.update({
    where: {id},
    data: {
      content,
      completed: completed === 'on' ? true : false
    }
  })
  redirect('/tasks')
}