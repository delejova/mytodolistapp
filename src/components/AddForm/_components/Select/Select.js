import React from "react"
import _ from "lodash"
import { OPTIONS } from "../../../../constants/options"

import styles from "./Select.module.scss"

const options = _.values(OPTIONS)

const Select = ({ statusHandler }) => {
  return (
    <div className={styles.select}>
      <select onChange={statusHandler} name="todos" className={styles.filter}>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {_.upperFirst(option)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
