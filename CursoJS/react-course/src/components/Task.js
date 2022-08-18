import React from 'react';
import "./Task.css";

// Iten da tarefa

const Task = ({ task }) => {
        return <div className='task-container'>
                {/* renderizando as tasks */}
                { task.tittle }
        </div>
}
 
export default Task;