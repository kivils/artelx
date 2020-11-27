import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Container from '../Container'
import Logo from '../Logo'
import ContactLinks from '../ContactLinks'

import styles from './Footer.module.css'

const Footer = ({ siteTitle, subTitle, className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        wpMenu(locations: {eq: FOOTER}) {
          menuItems {
            nodes {
              databaseId
              path
              label
            }
          }
        }
        wpPage(databaseId: {eq: 3}) {
          link
          title
        }
      }
    `
  )
  const now = new Date()
  return (
    <footer className={`${styles.root} ${className && className}`}>
      <Container className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.isCopy}`}>
            <div className={styles.logoWrapper}>
              <Logo siteTitle={siteTitle} subTitle={subTitle} isFooter/>
            </div>
            <div className={styles.contactsList}>
              <ContactLinks/>
            </div>
            <p className={styles.copy}>
              © 2008 - {now.getFullYear()} Веб-студия "Артеликс" <br/>
              Контекстная реклама, создание и продвижение сайтов. <br/>
              Все права защищены.
            </p>
            <p className={styles.law}>
              <Link to={data.wpPage.link} className={styles.lawLink}>{data.wpPage.title}</Link>
            </p>
          </div>
          <div className={`${styles.col} ${styles.isNav}`}>
            <nav className={styles.nav}>
              <ul className={styles.list}>
                {data.wpMenu.menuItems.nodes.map((node) => {
                  const reg = /^[/][a-zA-Z\-_]*/gi // Remove parent page from url
                  return(
                    <li
                      key={node.databaseId}
                      className={styles.item}
                    >
                      <Link
                        to={node.path.replace(reg, '')}
                        className={styles.link}
                      >
                        {node.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
}

Footer.defaultProps = {
  className: ``,
  siteTitle: ``,
  subTitle: ``,
}

export default Footer
