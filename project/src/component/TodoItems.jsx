import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css"
const TodoItems=({todoitems , onDeleteClick})=>{
    return (
    <div className={style.itemsContainer}>
        {todoitems.map((item)=>(
            <TodoItem todoName={item.name} todoDate={item.date} onDeleteClick={onDeleteClick}></TodoItem>
        )

        )}
        
    </div>
    );
}
export default TodoItems;