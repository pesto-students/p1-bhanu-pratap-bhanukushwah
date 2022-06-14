import React, { useState } from 'react'
import './AddTodo.css'

const CreateEditTodo = ({ addTodo }) => {
    const [taskMessage, setTaskMessage] = useState("")

    return (
        <form className="task-input-wrapper" onSubmit={(e) => {
            e.preventDefault()
            addTodo(taskMessage)
            setTaskMessage("")
        }}>
            <input type="text" placeholder="Task to be done..." name="task" value={taskMessage} onChange={(e) => setTaskMessage(e.target.value)} required minLength={3} maxLength={120} />
            <button type="submit">Add</button>
        </form >
    )
}

export default CreateEditTodo