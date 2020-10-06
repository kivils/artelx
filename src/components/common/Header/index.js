import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container'
import Button from '../Button'

import styles from './Header.module.css'
import artelx from '../../../images/artelx.svg'

import PropTypes from 'prop-types'

const Header = ({ siteTitle, subTitle, email, phone }) => {
  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.logoWrapper}>
          <Link to="/" className={styles.logoLink}>
            <img src={artelx} alt={siteTitle} className={styles.logo}/>
            <span className={styles.logoText}>
              <span className={styles.title}>{siteTitle}</span>
              <span className={styles.subtitle}>{subTitle}</span>
            </span>
          </Link>
        </div>
        <div className={styles.info}>
          <a href="/" className={styles.email}>{email}</a>
          <a href="/" className={styles.phone}>{phone}</a>
        </div>
        <div className={styles.actions}>
          <Link to="/" className={styles.actionLink}>
            <Button className={styles.btn} type="button">Оставить заявку</Button>
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
