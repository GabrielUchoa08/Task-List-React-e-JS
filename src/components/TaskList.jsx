import React from 'react'
import Task from './Task'

const TaskList = ({tasks, onDeleteTask, onToggleTaskDone}) => {
  
  if(tasks.length===0){
    return <p className='aviso'>Não há tarefas cadastradas no momento!</p>
  }

  return (
    <ul>
      {tasks.map((task) =>(
        <Task 
        key={task.id}
        task={task} 
        onDelete={() => onDeleteTask(task.id)}
        onToggleDone={() => onToggleTaskDone(task.id)}
        />
      ))}
    </ul>
  )
}

export default TaskList
