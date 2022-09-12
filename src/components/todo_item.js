import React from "react";

function Todo_item ({todoitem, onChange}){
    return (
        <label>
            <input type="checkbox" checked={todoitem.clickYesNo} onChange={(el)=>{
                onChange({
                    ...todoitem,
                    clickYesNo: el.target.checked
                })
            }} />
            <p>
                {todoitem.text}
            </p>
        </label>
    )
}

export default Todo_item
