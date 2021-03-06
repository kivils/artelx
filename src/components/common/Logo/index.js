import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './Logo.module.css'
import artelx from '../../../images/artelx.svg'

const Logo = ({ siteTitle, subTitle, isFooter, isMobileMenu }) => {
  return (
    <Link to="/" className={`${styles.root} ${isFooter ? styles.isFooter : ''} ${isMobileMenu ? styles.isMenu : ''}`}>
      <img src={artelx} alt={siteTitle} className={styles.img}/>
      <span className={styles.text}>
        <span className={styles.title}>{siteTitle}</span>
        <span className={styles.subtitle}>{subTitle}</span>
      </span>
    </Link>
  )
}

Logo.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
  isFooter: PropTypes.bool,
  isMobileMenu: PropTypes.bool
}

Logo.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
  isFooter: false,
  isMobileMenu: false
}

export default Logo
