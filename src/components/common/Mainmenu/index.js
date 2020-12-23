import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Container from '../Container'
import Logo from '../Logo'

import styles from './Mainmenu.module.css'

const Mainmenu = ({ siteTitle, subTitle }) => {
  const data = useStaticQuery(
    graphql`
      query {
        wpMenu(locations: {eq: PRIMARY}) {
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
    <div className={styles.root}>
      <Container>
        <div className={styles.logoWrapper}>
          <Logo siteTitle={siteTitle} subTitle={subTitle} isMobileMenu={true}/>
        </div>
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
                    activeClassName={styles.isActive}
                  >
                    {node.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </Container>
    </div>
  )
}

Mainmenu.propTypes = {
  siteTitle: PropTypes.string,
  subTitle: PropTypes.string,
}

Mainmenu.defaultProps = {
  siteTitle: ``,
  subTitle: ``,
}

export default Mainmenu
