import React from 'react'
import './TodoList.css'

const TodoList = (props) => {
  return (
  <>
    <section>
      <ul style={{padding: "0%", marginTop:"3rem", maxHeight: '60vh'}}>
        {props.children}
      </ul>
    </section>
    
  </>
    
  )
}

export {TodoList}