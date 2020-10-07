import React from 'react'
import Container from '../Container'

import styles from './Mainmenu.css'

const Mainmenu = () => {
  return (
    <div className={styles.root}>
      <Container>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={`${styles.item} ${styles.active}`}>
              <a href="/" className={`${styles.link} ${styles.active}`}>
                Контекстная реклама
              </a>
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                Продвижение сайтов
              </a>
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                Создание сайтов
              </a>
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                Блог
              </a>
            </li>
            <li className={styles.item}>
              <a href="/" className={styles.link}>
                О компании
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

Mainmenu.propTypes = {

}

export default Mainmenu
