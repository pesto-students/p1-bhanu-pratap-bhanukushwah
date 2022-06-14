import React from 'react';
import './Task.css';

const Task = ({ id, task, isCompleted, updateStatus, deleteTodo }) => {
    return (
        <div className="item">
            <div className="task-content-wrapper">
                <input type="checkbox" name="isCompleted" defaultChecked={isCompleted} onChange={(e) => updateStatus(id)} />
                <p className={`${isCompleted ? "cut-through" : ""}`}>
                    {task}
                </p>
            </div>
            <button onClick={() => deleteTodo(id)}>
                <img src="/assets/images/trash.svg" alt="delete" />
            </button>
        </div>
    )
}

export default Task