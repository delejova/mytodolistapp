import React from "react"
import classnames from "classnames"

import styles from "./Button.module.scss"

const Button = ({ handleOnClick, icon = "", label = "", customClassNames }) => {
  return (
    <button
      onClick={handleOnClick}
      className={classnames(styles.button, customClassNames)}
    >
      {icon !== "" && <span className={icon}></span>}
      {label !== "" && <span className={styles.label}>{label}</span>}
    </button>
  )
}

export default Button
