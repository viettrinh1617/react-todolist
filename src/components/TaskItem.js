import React from 'react'

function TaskItem({task, setTaskStatus, removeTask}) {
  return (
    <li className={`task ${task.status ? 'task-done': ''}`} key={task.id}>
    <div className="taskTitle">{task.title}</div>
    <div className="taskBtnGroup">
        <input 
          type="checkbox" className="checkbox checkbox-done"
          checked = {task.status}
          onChange = {(e) => setTaskStatus(task.id,e.target.checked)}
        />
        <button 
          className="deleteTask"
          onClick={(e) => removeTask(task.id)}
        >
        X</button>
    </div>
  </li>
  )
}

export default TaskItem