/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"
import "./normalize.css"
import "./reset.local.css"
import "./typography.css"

import SiteMetaQuery from "../../../queries"

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
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
