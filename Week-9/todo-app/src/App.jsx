import React, { useState } from 'react'

import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import CompletedTodos from './components/CompletedTodos/CompletedTodos';
import PendingTodos from './components/PendingTodos/PendingTodos';
import Tab from './components/Tab/Tab';
import Task from './components/Task/Task';

function App() {
  const [todos, setTodos] = useState([{ id: 1, task: "Hello world", isCompleted: false }])
  let options = ["All", "Pending", "Completed"]
  const [selectedTab, setSelectedTab] = useState("All")
  console.log("todos => ", todos)

  const addTodo = (message) => {
    setTodos([
      ...todos,
      {
        id: 'id' + (new Date()).getTime(),
        task: message,
        isCompleted: false
      }
    ])
  }

  const updateStatus = (id) => {
    let clonedTodos = [...todos];
    let index = clonedTodos.findIndex(todo => todo.id === id);
    clonedTodos[index].isCompleted = !clonedTodos[index].isCompleted
    setTodos(clonedTodos)
  }

  const deleteTodo = (id) => {
    let clonedTodos = [...todos];
    let index = clonedTodos.findIndex(todo => todo.id === id);
    clonedTodos.splice(index, 1)
    setTodos(clonedTodos)
  }

  return (
    <div className="app">
      <div className="todo-app-wrapper">
        <AddTodo addTodo={addTodo} />

        <div className="tabs-wrapper">
          {
            options.map((option) => <Tab key={option} title={option} isSelected={option === selectedTab} onClick={setSelectedTab} />)
          }
        </div>

        <hr />

        <div className="tasks-list">
          {
            selectedTab === "All" && todos.map((task, index) => <Task {...task} index={index} key={task.id} updateStatus={updateStatus} deleteTodo={deleteTodo} />)
          }
          {
            selectedTab === "Pending" && <PendingTodos todos={todos} updateStatus={updateStatus} deleteTodo={deleteTodo} />
          }
          {
            selectedTab === "Completed" && <CompletedTodos todos={todos} updateStatus={updateStatus} deleteTodo={deleteTodo} />
          }

        </div>
      </div>
    </div>
  );
}

export default App;
