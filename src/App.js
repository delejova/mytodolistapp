import React from "react"
import { useState, useEffect } from "react"

import AddForm from "./components/AddForm/AddForm"
import TodoList from "./components/TodoList/TodoList"

import { OPTIONS } from "./constants/options"
import { TODOS } from "./constants/todos"

const saveLocalTodos = (todos) => {
  localStorage.setItem(TODOS, JSON.stringify(todos))
}

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState(OPTIONS.ALL)
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler(todos, status)
    saveLocalTodos(todos)
  }, [todos, status])

  const filterHandler = (todos, status) => {
    switch (status) {
      case OPTIONS.COMPLETED:
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case OPTIONS.UNCOMPLETED:
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  const getLocalTodos = () => {
    if (localStorage.getItem(TODOS) === null) {
      localStorage.setItem(TODOS, JSON.stringify([]))
    } else {
      const todoLocal = JSON.parse(localStorage.getItem(TODOS))
      setTodos(todoLocal)
    }
  }

  return (
    <div>
      <header>
        <h1>Todo list:</h1>
      </header>
      <AddForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

export default App
