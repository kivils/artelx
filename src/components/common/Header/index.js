import React from "react"
import { Link } from "gatsby"
import Container from '../Container'
import styles from './Header.module.css'
import artelx from '../../../images/artelx.svg'

import PropTypes from "prop-types"

const Header = ({ siteTitle, subTitle, email, phone }) => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.logo}>
          <Link to="/">
            <img src={artelx} alt=""/>
            {siteTitle} <br/>
            {subTitle}
          </Link>
        </div>
        {email} <br/>
        {phone}
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
