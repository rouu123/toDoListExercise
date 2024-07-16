import './App.css';
import Task from './Task'
import { useState } from 'react';

function App() {
 
const [tasks, setTasks] = useState(["study","phone call"]);
const deleteTask = (index,event) => {
  setTasks(tasks.filter(function(task, i) {
    return i !== index;
  }));
}

return (
  <div>
    <h1>to do list : </h1>
    <form>
      <label htmlFor='task' id='label'  >task:</label>
      <input type='text' id='task' name='task'></input>
      <button onClick={addTask}>submit</button>
      </form>

      <div id='tasks'>
        {tasks.map((element,index) => ( 
          <Task  texte={element} key={index} deleteTask={() => deleteTask(index)}/>
          
        ))
        }
      </div>
  </div>
);


function addTask(event){
  event.preventDefault();
  let todo=document.getElementById("task").value ;
  console.log(todo);
  setTasks([ ...tasks, todo] );
}


}
export default App;