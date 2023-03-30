import React from "react"
import classnames from "classnames"
import TodoItem from "./_components/TodoItem"

import styles from "./TodoList.module.scss"

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  if (filteredTodos.length === 0) {
    return (
      <div className={classnames(styles.container, styles.empty)}>No todos</div>
    )
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filteredTodos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
