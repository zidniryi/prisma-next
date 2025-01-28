import React from 'react'


interface ComponentData {
  params: any
}

const SinggleDrinkPage = ({params}: ComponentData) => {
  return (
    // @ts-ignore
    <div>DrinkPage {params?.id}</div>
  )
}

export default SinggleDrinkPage