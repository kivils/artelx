import { useStaticQuery, graphql } from "gatsby"

const SiteTitleQuery = () => {
  return useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
}

export default SiteTitleQuery
