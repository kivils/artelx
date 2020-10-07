import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
import Container from '../Container'
import Logo from '../Logo'

import styles from './Footer.module.css'


const Footer = ({ siteTitle, subTitle }) => {
  return (
    <footer className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.logoWrapper}>
              <Logo siteTitle={siteTitle} subTitle={subTitle} isFooter/>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
}

export default Footer
