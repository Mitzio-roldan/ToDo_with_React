import {TodoContext} from '../TodoContext'
import React, { useContext } from "react";
import './TodoForm.css'
function TodoForm (){
    const [value, setValue] = React.useState('')
    const {setModal, guardaNuevoTodo} = useContext(TodoContext)  
    const onChange = (e) =>{
        if (e.target.value.length > 0) {
            setValue(e.target.value);
        }
    }
    const submitEvent = (e)=>{
        e.preventDefault();
        if (value !== '') {
            guardaNuevoTodo(value)
            setModal(false);
        }
    }
    return(
        <form onSubmit={submitEvent}>
            <h2>Crea un nuevo ToDo</h2>
            <textarea placeholder="Comprar comida para el michi" onChange={onChange}>
            </textarea>
            <button type="submit" className="button-30">Crear ToDO</button>
        </form>
    )
}
export {TodoForm}