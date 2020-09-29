import React from "react"
import { Link } from "gatsby"
import Container from '../Container'
import styles from './Header.module.css'

import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className={styles.root}>
    <Container>
      <div className={styles.logo}>
        <Link to="/">
          {siteTitle}
        </Link>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
