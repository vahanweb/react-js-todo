import React from "react";

function Todo_footer({todolist_footer, Delete_true_todo_list}) {
    let clickYesNo_true_count = todolist_footer.filter(e=>e.clickYesNo).length
    return (
        <div className="footer">
            <span>Is clickYesNo &nbsp;   
                {clickYesNo_true_count}
                &nbsp;/&nbsp; 
                {todolist_footer.length}</span>
            <form className="footer_form"  onSubmit={(e)=>{
                e.preventDefault();
            }}>
                <input type="submit" value="Delete" onClick={Delete_true_todo_list} />
            </form>
        </div>
    )
}

export default Todo_footer