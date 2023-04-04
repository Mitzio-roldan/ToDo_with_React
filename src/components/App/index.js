import { AppUI } from './appUI';
import React from 'react'
import {TodoProvaider} from '../TodoContext'

// let todoList = [
//   {id: uuidv4(), text: "Empezar a aprender React", completed: true},
//   {id: uuidv4(), text: "Empezar a aprender Next.js", completed: false},
//   {id: uuidv4(), text: "Terminar ToDo APP", completed: false}
// ]



function App() {
  
  return (
    <TodoProvaider>
      <AppUI/>
    </TodoProvaider>
  )
}

export default App;
