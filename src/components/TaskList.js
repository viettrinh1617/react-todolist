import React from 'react'
import TaskItem from './TaskItem';

function TaskList({tasks, showIncomplete, setTaskStatus, setShowIncomplete, removeTask}) {
  return (
    <div id="taskList">
    <ul className="taskList">
      {tasks.filter(task => showIncomplete ? task.status !== 1 : true).map( (task) => (
        <TaskItem 
            key = {task.id}
            task= {task}
            setTaskStatus = {setTaskStatus}
            removeTask = {removeTask}
        />
      ))}                             
    </ul>
    <div className="filter">
        <label htmlFor="filterBtn">Filter out finished tasks</label>
        <input id="filterBtn" type="checkbox" checked={showIncomplete} onChange = {(e) => setShowIncomplete(e.target.checked)} ></input>
    </div>
</div>
  )
}

export default TaskList