import React from "react";
import { useState } from "react";
function Form_Input({Add_new_data}) {
    let [new_todo, setNew_todo] = useState('')
    return (
        <form className="form_add" onSubmit={(w)=>{
            w.preventDefault();
            Add_new_data(new_todo)
            setNew_todo('')

        }} >
            <input type="text" value={new_todo} onChange={(e)=>{
                setNew_todo(e.target.value)
            } } required />
            <button>ADD</button>
        </form>
    )
}
export default Form_Input



