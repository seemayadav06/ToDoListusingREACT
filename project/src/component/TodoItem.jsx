function TodoItem({todoName,todoDate ,onDeleteClick}){
    //let todoName='Buy Milk'
    //let todoDate='4/10/2023'
   return <div className="container">
            <div className="row kgrow">
              <div className="col-6">{todoName}</div>
              <div className="col-4">{todoDate}</div>
              <div className="col-2"><button type="button" class="btn btn-danger kgbutton" onClick={()=> onDeleteClick(todoName)}>Delete</button></div>
            </div>
          </div>
}
export default TodoItem