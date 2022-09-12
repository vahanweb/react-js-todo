import Form_Input from './components/form_input';
import './App.css';
import TodoList from './components/todo_list';
import Todo_footer from './components/todo_footer';
import { useState } from 'react';

function App() {
  let [todo_list, setTodo_list] = useState([
    {
      id: randomId(),
      text: "Learn Python",
      clickYesNo: false
    },
    {
      id: randomId(),
      text: "Learn SQL",
      clickYesNo: false
    },
    {
      id: randomId(),
      text: "Learn Django",
      clickYesNo: false
    }
  ])

  return (
    <div className="App">

      <div className='content'>
        <h1>To Do List in React JS</h1>
          <Form_Input Add_new_data={(data)=>{
            setTodo_list([
              ...todo_list,
              {
                id: randomId(),
                text: data,
                clickYesNo: false
              }
            ])
          }} />
          
          <TodoList todolist = {todo_list} onChange={
            (elem)=>{
              setTodo_list(todo_list.map((element)=>{
                if (element.id === elem.id) {
                  return elem
                }
                return element
              }))
            }
          } />
          <Todo_footer todolist_footer = {todo_list} 
            Delete_true_todo_list ={
              ()=>{
                setTodo_list(todo_list.filter((todo_item_true_list)=> !todo_item_true_list.clickYesNo))
              }
            } />
      </div>
    </div>
  );
}
function randomId() {
  return new Date().getTime().toString() + Math.random()
}
export default App;
