import { useStaticQuery, graphql } from 'gatsby'

const SiteMetaQuery = () => {
  return useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          title
          subtitle
          email
          phone
        }
      }
    }
  `)
}

export default SiteMetaQuery
