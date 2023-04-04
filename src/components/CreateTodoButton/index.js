import React, { useContext } from "react";
import './CreateTodoButton.css'
import {TodoContext} from '../TodoContext'
const CreateTodoButton = () => {
  const {setModal} = useContext(TodoContext)  
  const agregaToDo = () =>{
    setModal(true)
  }

  return (
    <div className='div-btn-agrega-toDo'>
      <button className='button-50' onClick={agregaToDo}>Añadir</button>
    </div>
  )
}

export  {CreateTodoButton}
