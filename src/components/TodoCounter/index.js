import React from 'react'
import {TodoContext} from '../TodoContext'
import './TodoCounter.css'

const TodoCounter = () => {
  const {totalTodos, todoCompletes} = React.useContext(TodoContext)  
  return (
    <div className='title'>Has completado {todoCompletes} de {totalTodos}</div>
  )
}

export  {TodoCounter}