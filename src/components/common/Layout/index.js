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
        siteTitle={data.site.siteMetadata?.title || `Title`}
        subTitle={data.site.siteMetadata?.subtitle || `SubTitle`}
        email={data.site.siteMetadata?.email || `email`}
        phone={data.site.siteMetadata?.phone || `phone`}
      />
      <Mainmenu styles={styles.menu}/>
      <main className={styles.main}>{children}</main>
      <Footer
        className={styles.footer}
        siteTitle={data.site.siteMetadata?.title || `Title`}
        subTitle={data.site.siteMetadata?.subtitle || `SubTitle`}
        email={data.site.siteMetadata?.email || `email`}
        telegram={data.site.siteMetadata?.telegram || `telegram`}
        viber={data.site.siteMetadata?.viber || `viber`}
        whatsup={data.site.siteMetadata?.whatsup || `whatsup`}
        vkontakte={data.site.siteMetadata?.vkontakte || `vkontakte`}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
