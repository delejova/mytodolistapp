import React from "react"
import Button from "../Button"

import styles from "./RemoveModal.module.scss"

const RemoveModal = ({ setShowLayout, setTodos, todos, todo }) => {
  const handleRemoveClick = () => {
    setTodos(todos.filter((item) => item.id !== todo.id))
    setShowLayout(false)
  }

  return (
    <div className={styles.layout}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <div className={styles.title__label}>Remove item?</div>
          <Button
            handleOnClick={() => setShowLayout(false)}
            customClassNames={styles.title__icon}
            icon={"fa fa-times"}
          />
        </div>

        <div className={styles.label}>
          Are you sure you want to delete <strong>{todo.text}</strong> from the
          list?
        </div>

        <div className={styles["buttons-list"]}>
          <Button
            handleOnClick={() => setShowLayout(false)}
            customClassNames={styles.button__cancel}
            label={"Cancel"}
          />
          <Button
            handleOnClick={handleRemoveClick}
            customClassNames={styles.button__remove}
            label={"Remove"}
          />
        </div>
      </div>
    </div>
  )
}

export default RemoveModal
