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
          telegram
          viber
          whatsup
          vkontakte
        }
      }
    }
  `)
}

export default SiteMetaQuery
