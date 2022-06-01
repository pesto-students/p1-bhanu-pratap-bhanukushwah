import React from 'react'

import Task from '../Task/Task'

const CompletedTodos = ({ todos, updateStatus, deleteTodo }) => {
    let completedTodos = todos.filter(todo => todo.isCompleted === true)
    return (
        <>
            {completedTodos.map((task, index) => <Task {...task} index={index} key={task.id} updateStatus={updateStatus} deleteTodo={deleteTodo} />)}
        </>
    )
}

export default CompletedTodos