// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid'
// import './App.css';

// const App = () => {
//   const initialTasks = [
//     {id: 1, task: 'Laundry', done: false},
//     {id: 2, task: 'Do the dishes', done: false},
//     {id: 3, task: 'Homework', done: false}
//   ]
//   const [tasks, setTasks] = useState(initialTasks)
//   const [filteredTasks, setFilteredTasks] = useState(tasks)
//   const [newTask, setNewTask] = useState('')
//   const [filterTask, setFilterTask] = useState('')

//   function updateTask(e: any) {
//     e.preventDefault()
//     setNewTask(e.target.value)
//   }

//   function addTask(e: any) {
//     e.preventDefault()
//     setFilteredTasks(prevData => {
//       return [...prevData, {id: uuidv4(), task: newTask, done: false}]
//     })
//     setTasks(prevData => {
//       return [...prevData, {id: uuidv4(), task: newTask, done: false}]
//     })
//     setNewTask('')
//   }

//   function filterTasks(e: any) {
//     const { value } = e.target
//     setFilterTask(value)
//     const prevData = [...filteredTasks]
//     if (value.length > 0) {
//       setFilteredTasks(filteredTasks.filter((task) => {
//         return task.task.toLowerCase().includes(value)
//       }))
//     } else {
//       setFilteredTasks(prevData)
//     }
//   }

//   function markCheckbox(id: any) {
//     const res = filteredTasks.map((task) => {
//       return task.id === id ? {...task, done: !task.done } : task
//       })
//     console.log(res)
//     setFilteredTasks(res)
//     console.log(filteredTasks)
//   }

//   return (
//     <div className="App">
//       <div>
//         {filteredTasks.map((item, index) => {
//           return <div className="task" key={index}>{item.task}
//           <input type="checkbox" onClick={() => markCheckbox(item.id)} />
//           </div>
//         })}
//       </div>
//       <form onSubmit={addTask}>
//         <input type="text"
//                value={newTask}
//                onChange={updateTask}
//                placeholder="Add a new task..."
//                />
//         <button type="submit">Add</button>
//       </form>
//       <input type="text" 
//              onChange={filterTasks} 
//              placeholder="Search..." 
//              />
//     </div>
//   );
// }

// export default App;
