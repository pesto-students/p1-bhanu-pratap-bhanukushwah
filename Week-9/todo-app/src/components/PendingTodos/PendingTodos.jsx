import React from 'react'

import Task from '../Task/Task'

const PendingTodos = ({ todos, updateStatus, deleteTodo }) => {
    let pendingTodos = todos.filter(todo => todo.isCompleted === false)
    return (
        <>
            {pendingTodos.map((task, index) => <Task {...task} index={index} key={task.id} updateStatus={updateStatus} deleteTodo={deleteTodo} />)}
        </>
    )
}

export default PendingTodos