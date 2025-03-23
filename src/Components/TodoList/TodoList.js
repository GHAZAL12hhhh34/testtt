import React, { useState } from 'react'

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const[count , setCount] = useState(0);
  
    const handleInputChange = (event) => {
      setNewTask(event.target.value);
    };
  
    const handleAddTask = () => {
    //   setTasks(tasks.push(newTask)); // خطأ: يجب استخدام spread operator أو concat
      setTasks(tasks.concat(newTask));
      setNewTask('');
    };
    const increment =() =>{
// setCount(count);
setCount(count + 1);
    }
  return (
    <div>
          <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <div>
        <p>cont:{count}</p>
        <button onClick={increment}>increment</button>
      </div>
    </div>
    
  )
}

export default TodoList