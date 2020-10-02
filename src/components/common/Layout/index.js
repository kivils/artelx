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

import SiteTitleQUery from "../../../queries"

const Layout = ({ children }) => {
  const data = SiteTitleQUery()
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
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
