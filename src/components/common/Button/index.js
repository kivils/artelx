import React from 'react'
import styles from './Button.module.css'

import PropTypes from 'prop-types'

const Button = ({ children, className, disabled, onClick }) => {
  return (
    <button
      className={`${styles.root} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
