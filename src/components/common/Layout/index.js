/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Footer from '../Footer'
import Mainmenu from '../Mainmenu'

import './basic-styles.css'
import styles from './Layout.module.css'

import SiteMetaQuery from '../../../queries'

const Layout = ({ children }) => {
  const data = SiteMetaQuery()
  return (
    <div className={styles.root}>
      <Header
        className={styles.header}
        siteTitle={data.site.siteMetadata?.title}
        subTitle={data.site.siteMetadata?.subtitle}
        email={data.site.siteMetadata?.email}
        phone={data.site.siteMetadata?.phone}
      />
      <Mainmenu styles={styles.menu}/>
      <main className={styles.main}>{children}</main>
      <Footer
        className={styles.footer}
        siteTitle={data.site.siteMetadata?.title}
        subTitle={data.site.siteMetadata?.subtitle}
        email={data.site.siteMetadata?.email}
        telegram={data.site.siteMetadata?.telegram}
        viber={data.site.siteMetadata?.viber}
        whatsup={data.site.siteMetadata?.whatsup}
        vkontakte={data.site.siteMetadata?.vkontakte}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
