import { useState } from "react"
function AddTodo({onNewItem}){
  const [todoName,setTodoName]=useState();
  const [todoDate,setTodoDate]=useState();
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }

  const handleDateChange=(event)=>{
    setTodoDate(event.target.value);
  }
  const handleAddButtonClicked=()=>{
    onNewItem(todoName,todoDate)
    setTodoName("");
    setTodoDate("");

  }

    return( 
    <div className="container text-center">
      <div className="row kgrow">
         <div className="col-6"><input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/></div>
         <div className="col-4"><input type="date" value={todoDate} onChange={handleDateChange}/></div>
         <div className="col-2"><button type="button" class="btn btn-success kgbutton" onClick={handleAddButtonClicked}>Add</button></div>
       </div>
    </div>
    )
}
export default AddTodo;