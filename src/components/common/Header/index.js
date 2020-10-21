import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Container from '../Container'
import Logo from '../Logo'
import Button from '../Button'

import styles from './Header.module.css'


const Header = ({ siteTitle, subTitle, email, phone }) => {
  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo siteTitle={siteTitle} subTitle={subTitle}/>
        </div>
        <div className={styles.info}>
          <a href="/" className={styles.email}>{email}</a>
          <a href="/" className={styles.phone}>{phone}</a>
        </div>
        <div className={styles.actions}>
          <Link to="/" className={styles.actionLink}>
            <Button className={styles.btn} type="button">
              Оставить заявку
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
  email: ``,
  phone: ``,
}

export default Header
