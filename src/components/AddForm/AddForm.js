import React from "react"

import Button from "../Button"
import Select from "./_components/Select"

import styles from "./AddForm.module.scss"

const AddForm = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value)
  }

  const submitTodoHandler = (event) => {
    event.preventDefault()

    if (inputText === "") {
      return
    }

    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ])
    setInputText("")
  }

  const statusHandler = (event) => {
    setStatus(event.target.value)
  }

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" />

      <Button
        handleOnClick={submitTodoHandler}
        customClassNames={styles.button}
        icon={"fas fa-plus-square"}
      />

      <Select statusHandler={statusHandler} />
    </form>
  )
}

export default AddForm
