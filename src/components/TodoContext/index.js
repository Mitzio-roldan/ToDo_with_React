import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {useLocalStorage} from './useLocalStorage'


const TodoContext = React.createContext();

function TodoProvaider(props) {
    const {
        item : todos,
        saveItem: setTodos,
        error,
        loading,
        } = useLocalStorage('ToDo_V1', [])
      const [searchValue, setSearchValue] = React.useState('');
      const [modal, setModal] = React.useState(false);
      const todoCompletes = todos.filter(todo => todo.completed).length
      const totalTodos = todos.length  
      const completedTodo = (id) =>{
        const indexTodo = todos.findIndex(todo => todo.id === id)
        let newTodos = [...todos]
        newTodos[indexTodo].completed = newTodos[indexTodo].completed ? false : true
        setTodos(newTodos);
      }
    
      const deletedTodo = (id) =>{
        const indexTodo = todos.findIndex(todo => todo.id === id)
        let newTodos = [...todos]
        newTodos.splice(indexTodo, 1)
        setTodos([...newTodos])
      }

      const guardaNuevoTodo = (text) =>{
        const ToDoNuevo = {
          id: uuidv4(),
          text: text,
          completed: false
        }
        let newTodos = [...todos, ToDoNuevo]
        setTodos(newTodos);
      }
    
      let searchTodo = []
      if (searchValue.length < 1) {
        searchTodo = todos;
      }else{
        searchTodo = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            todoCompletes,
            searchValue,
            setSearchValue,
            searchTodo,
            completedTodo,
            deletedTodo,
            modal,
            setModal,
            guardaNuevoTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoProvaider, TodoContext}