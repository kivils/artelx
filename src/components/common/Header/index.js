import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from '../Container'
import Logo from '../Logo'
import Button from '../Button'
import Mainmenu from '../Mainmenu'

import MenuIcon from '../../../images/menu.svg'

import styles from './Header.module.css'


const Header = ({ siteTitle, subTitle, email, phone }) => {
  const [ isMenuVisible, setMenuVisibility] = useState(false)

  const data = useStaticQuery(
    graphql`
      query {
        wpPage(databaseId: {eq: 258}) {
          link
          title
        }
      }
    `
  )

  const onMenuIconClick = () => {
    setMenuVisibility(!isMenuVisible)
  }

  return (
    <header className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logoWrapper}>
            <Logo siteTitle={siteTitle} subTitle={subTitle}/>
          </div>
          <Button className={styles.menuBtn} onClick={onMenuIconClick}>
            <img src={MenuIcon} className={styles.icon} alt="Меню"/>
          </Button>
          <div className={styles.info}>
            <a href={'mailto:' + email} className={styles.email}>{email}</a>
            <a href={'tel:' + phone} className={styles.phone}>{phone}</a>
          </div>
          <div className={styles.actions}>
            <Link to={data.wpPage.link} className={styles.actionLink}>
              <Button className={styles.btn} type="button">
                Оставить заявку
              </Button>
            </Link>
          </div>
        </div>
        <div className={`${styles.menu} ${isMenuVisible ? styles.isVisible : ''}`}>
          <Mainmenu siteTitle={siteTitle} subTitle={subTitle}/>
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
