import {TodoCounter} from '../TodoCounter'
import {TodoList} from '../TodoList/index.js'
import {TodoItem} from '../TodoItem'
import {CreateTodoButton} from '../CreateTodoButton'
import { TodoSearch } from '../TodoSearch'
import {TodoContext} from '../TodoContext'
import {Modal} from '../../Modal'
import {TodoForm} from '../TodoForm'
import React, { useContext } from "react";
import './App.css'

const AppUI = (props) =>{
  const {loading, error, searchTodo, totalTodos, completedTodo, deletedTodo, modal, setModal, searchValue} = useContext(TodoContext)  
  return (
        <>
        <TodoCounter/>
        <TodoSearch/>  
        <TodoList>
        {loading && <div className="dots-bars-4"></div>}
        {error && <p>Ocurrio un Error</p>}
        {(totalTodos <= 0 && !loading && !searchValue) && <p className='pMsj'>Crea tu primer ToDo!</p>}
        {(!searchTodo.length && !loading && searchValue) && <p className='pMsj'>No se encuentra nada con {searchValue}</p>}
        {searchTodo.map(todo =>{
          return <TodoItem 
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completedTodo(todo.id)}
          onDelete = {()=> deletedTodo(todo.id)}
          /> 
        })}
      </TodoList>
      <CreateTodoButton/>
      {!!modal && (<Modal setModal={setModal}>
        <TodoForm></TodoForm>
      </Modal>)}
        </>
    );
}

export {AppUI}