import React from 'react'
import styles from './Container.module.css'

const Container = ({ children, className }) => {
  return (
    <section className={`${styles.root} ${className}`}>
      {children}
    </section>
  )
}

export default Container
