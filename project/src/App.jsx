import AddTodo from "./component/AddTodo"
import AppName from "./component/AppName"
import TodoItems from "./component/TodoItems"
import "./App.css"
import { useState } from "react"
import WelcomeMessage from "./component/WelcomeMessage"
function App() {
  
  const [todoItems, setTodoItems]=useState([]);
  const handleNewItem=(itemName, itemDate)=>{
      const newTodoItems=[...todoItems, {
        name:itemName,
        date:itemDate
      }];
      setTodoItems(newTodoItems)
  }
  const handleDeleteItem=(todoItemName)=>{
      const newTodoItems=todoItems.filter(item=>item.name !==todoItemName);
      setTodoItems(newTodoItems);
  }
  return (
    <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>} 
        <TodoItems todoitems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
         
    </center>
  )
}

export default App
