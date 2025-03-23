import React, { useState } from 'react'

const TodoListt = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const handleInputChange = (event) => {
        setNewTask(event.target.value);
      };
      const handleAddTask = () => {
        // if (newTask.trim() !== '') {
        //   setTasks([...tasks, newTask]);
        //   setNewTask('');
        // }
        setTasks([...tasks, newTask]);
        setNewTask('');
      };
    
    //   const handleRemoveTask = (index) => {
    //     // خطأ محتمل: تحديث الحالة بشكل غير صحيح
    //     tasks.splice(index, 1);
    //     setTasks(tasks);
    //   };
    const handleRemoveTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      };
  return (
    <div>
            <h2>Todo List</h2>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoListt