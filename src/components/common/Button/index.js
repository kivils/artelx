import React from 'react'
import styles from './Button.module.css'

import PropTypes from 'prop-types'

const Button = ({ children, disabled }) => {
  return (
    <button
      className={styles.root}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
}

export default Button
