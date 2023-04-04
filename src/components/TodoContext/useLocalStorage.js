import React from "react"

function useLocalStorage (itemName, initialValue){
    const [loading, setLoading] = React.useState(true)  
    const [error, setError] = React.useState(false)  
    const [item, setItem] = React.useState(initialValue)  
    try {
      React.useEffect(()=>{
        setTimeout(()=>{
          let todoList;
          const localStorageTodos = localStorage.getItem(itemName)
          if (localStorageTodos === undefined) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            todoList = []
          }else{
            todoList = JSON.parse(localStorageTodos)
            setItem(todoList)
            setLoading(false)
          }
        }, 1000)
      },[])
    } catch (error) {
      setError(error)
    }
    const saveItem = (newValue)=>{
      try {
        localStorage.setItem(itemName, JSON.stringify(newValue))
        setItem(newValue)  
      } catch (error) {
        setError(error)
      }
    }
    
    return{
      error,
      loading,
      item,
      saveItem
    }  
}
export {useLocalStorage}
