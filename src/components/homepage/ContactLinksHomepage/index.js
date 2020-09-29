import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styles from './ContactLinksHomepage.module.css'

const ContactLinksHomepage = () => {
  const data = useStaticQuery(
    graphql`
      query {
          allWpPage(filter: {parentDatabaseId: {eq: 179}}, sort: { fields: [databaseId] }) {
              nodes {
                  title
                  slug
                  content
                  databaseId
                  featuredImage {
                    node {
                      mediaItemUrl
                      altText
                    }
                  }
              }
          }
      }
    `
  )
  return (
    <div className={styles.root}>
      <h2>Расскажите нам о своей проблеме</h2>
      {data.allWpPage.nodes.map((node) => (
        <div className={'page-' + node.databaseId} key={node.databaseId}>
          <Link to={node.slug}>
            <div>{node.title}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ContactLinksHomepage
