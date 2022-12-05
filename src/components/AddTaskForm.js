import React from 'react'

function AddTaskForm({handleSubmit, handleInputChange, newTask}) {
  return (
    <form action="#" className="taskForm" onSubmit={handleSubmit} onChange= {handleInputChange}>
          <label htmlFor="taskInput" className = "input-label">Insert New Task</label>
          <div className="newTaskLine">
              <input type="text" className="input" id = "taskInput" value={newTask}/>
              <button id = "addTask">Add</button>
          </div>
      </form>
  )
}

export default AddTaskForm