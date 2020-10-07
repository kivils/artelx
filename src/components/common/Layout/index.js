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
import './Layout.css'

import SiteMetaQuery from '../../../queries'

const Layout = ({ children }) => {
  const data = SiteMetaQuery()
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        subTitle={data.site.siteMetadata?.subtitle || `SubTitle`}
        email={data.site.siteMetadata?.email || `email`}
        phone={data.site.siteMetadata?.phone || `phone`}
      />
      <Mainmenu/>
      <main>{children}</main>
      <Footer
        siteTitle={data.site.siteMetadata?.title || `Title`}
        subTitle={data.site.siteMetadata?.subtitle || `SubTitle`}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
