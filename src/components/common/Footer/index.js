import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Container from '../Container'
import Logo from '../Logo'

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
      }
    `
  )
  return (
    <footer className={`${styles.root} ${className && className}`}>
      <Container className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.logoWrapper}>
              <Logo siteTitle={siteTitle} subTitle={subTitle} isFooter/>
            </div>
          </div>
          <div className={styles.col}>
            <nav className={styles.nav}>
              <ul className={styles.list}>
                {data.wpMenu.menuItems.nodes.map((node) => {
                  const reg = /^[/][a-zA-Z\-_]*/gi
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
