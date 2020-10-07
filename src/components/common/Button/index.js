import React from 'react'
import styles from './Button.module.css'

import PropTypes from 'prop-types'

const Button = ({ children, className, disabled }) => {
  return (
    <button
      className={`${styles.root} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

export default Button
