import React from "react";
import Todo_item from "./todo_item";
function TodoList({todolist, onChange}) {

    return(
        <div>
            
            {
                todolist.map((elem) => {
                    return (
                        <div key={elem.id} className="todolist_box">
                            <Todo_item 
                                todoitem = {elem} 
                                onChange = {onChange} 
                            />
                            
                        </div>
                    )
                })                
            }
        </div>
    )
}
export default TodoList