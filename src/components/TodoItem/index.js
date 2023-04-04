import React from 'react'
import './TodoItem.css'

const TodoItem = (props) => {
  
  const accionesTodo = ({tipoDeAccion}) =>{
    if (tipoDeAccion === 1) {
      props.onComplete();
    }
    if (tipoDeAccion === 0) {
      props.onDelete()
    }
  }
  return (
    <>
    
    <li className='li-todo'>
      <span>
      <i onClick={() => accionesTodo({tipoDeAccion: 1})} className={`gg-check ${props.completed ? 'active' : ''}`}></i>
      </span>

    <p className={`${props.completed ? 'active' : ''}`}>{props.text}</p>
    
    <span className='span-close'>
      <i onClick={() => accionesTodo({tipoDeAccion: 0})} className={`gg-trash`}></i>
      </span>
    </li>
    
    </>
    
  )
}

export  {TodoItem}

