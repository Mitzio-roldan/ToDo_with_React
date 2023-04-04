import React from 'react'
import {TodoContext} from '../TodoContext'
import './TodoSearch.css'

const TodoSearch = () => {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  const onBuscar = (element) =>{
    console.log(element.target.value); 
    setSearchValue(element.target.value);
  }

  return (
    <div className="card card--inverted">
    <label className="input">
      <input className="input__field" 
      type="text"
      value={searchValue} 
      autoFocus={false}
      placeholder=' '
      onChange={onBuscar} />
      <span className="input__label">Buscar</span>
    </label> 
  </div>
  )
}

export  {TodoSearch}