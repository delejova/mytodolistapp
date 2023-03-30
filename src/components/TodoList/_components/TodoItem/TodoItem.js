import React, { useState } from "react"
import classnames from "classnames"
import RemoveModal from "../../../RemoveModal"
import Button from "../../../Button"

import styles from "./TodoItem.module.scss"

const TodoItem = ({ text, todo, todos, setTodos }) => {
  const [showLayout, setShowLayout] = useState(false)

  const deleteHandler = () => {
    setShowLayout(true)
  }

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
  }

  return (
    <div className={styles.wrapper}>
      <li
        className={classnames(styles.item, {
          [styles.completed]: todo.completed === true,
        })}
      >
        {text}
      </li>

      <Button
        handleOnClick={completeHandler}
        customClassNames={styles.button__complete}
        icon={"fas fa-check"}
      />
      <Button
        handleOnClick={deleteHandler}
        customClassNames={styles.button__delete}
        icon={"fas fa-trash"}
      />

      {showLayout === true && (
        <RemoveModal
          setShowLayout={setShowLayout}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
        />
      )}
    </div>
  )
}

export default TodoItem
